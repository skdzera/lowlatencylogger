import "./addUser.css";
import { useState } from "react";
import { db } from "../../../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const username = e.target.username.value.trim();

    if (!username) {
      setError("Please enter a username.");
      return;
    }

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        const userData = querySnapShot.docs[0].data();
        setUser(userData);
        setError(null);
      } else {
        setError("User not found.");
        setUser(null);
      }
    } catch (err) {
      console.log("Error searching user:", err);
      setError("An error occurred while searching for the user.");
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error">{error}</div>}

      {user && (
        <div className="user">
          <div className="detail">
            <img src= {user.avatar || "./avatar.png"} alt="Avatar" />
            <span>{user.username}</span>
          </div>
          <button>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
