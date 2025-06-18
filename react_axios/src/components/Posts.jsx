import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
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
                <button>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
