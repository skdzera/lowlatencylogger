import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/AddUser"
import { useUserStore } from "../../../lib/userStore"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"

const ChatList = () => {
  const [Chats, setChats] = useState([])
  const [addMode, setAddMode] = useState(false)
  const {currentUser} = useUserStore()

  useEffect ( () => {
    const unSub = onSnapshot(doc(db, "userChats", currentUser.id ), async (res) => {
      const items = res.data().chats;

      const promisses = items.map( async (item) => {
        const userDocRef = doc(db, "users", item.receiverId)
        const userDocSnap = await getDoc(userDocRef)

        const user = userDocSnap.data()

        return {...item, user}
      })

      const chatData = await Promise.all(promisses)

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt))
    })

    return () => {
      unSub()
    }
  }, [currentUser.id])
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" srcset="" />
          <input type="text" placeholder="Search"/>
        </div>
        <img src={addMode ? "./minus.png" :"./plus.png"} alt="" className="add" onClick={ () => setAddMode((prev) => !prev)}/>
      </div>
      {Chats.map((chat) => (
              <div className="item" key={chat.chatId}>
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <span>Abhirup Kumar</span>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
      ))}
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList
