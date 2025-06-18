import { useEffect, useState } from "react";
import { getDelete, getPost } from "../api/PostApi";
import "./Posts.css"; // Add this line to import styles

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete
  const handleDeletePost = async (id) => {
   try {
    const res = await getDelete(id);
    if(res.status === 200){
      const newUpdatedPosts = data.filter((curPost) => {
        return curPost.id !==id;
      });
      setData(newUpdatedPosts);
    }
   } catch (error) {
    
   }
  }

  return (
    <div className="posts-wrapper">
      <ul className="card-grid">
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li className="card" key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="btn-group">
                <button>Edit</button>
                <button onClick={() => {handleDeletePost(id)}}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
