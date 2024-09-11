import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" srcset="" />
          <div className="texts">
            <span>Abhirup Kumar</span>
            <p>Hey I am using chat App</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nihil dolorum ut ipsa voluptatum in facilis porro aperiam labore! Illum totam odio et eos adipisci iure quis doloribus omnis!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F2%2F6%2F6%2F15300.jpg&f=1&nofb=1&ipt=67f5f58696dbbafcbdab1b66776f6b3e370eefcedc85f9071e1569e6c528a04d&ipo=images" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nihil dolorum ut ipsa voluptatum in facilis porro aperiam labore! Illum totam odio et eos adipisci iure quis doloribus omnis!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nihil dolorum ut ipsa voluptatum in facilis porro aperiam labore! Illum totam odio et eos adipisci iure quis doloribus omnis!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nihil dolorum ut ipsa voluptatum in facilis porro aperiam labore! Illum totam odio et eos adipisci iure quis doloribus omnis!</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a Message..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)}/>
          <div className="picker">
            <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}


export default Chat
