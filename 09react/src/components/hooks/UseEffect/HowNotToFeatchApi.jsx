import { useState, useEffect } from "react";

export const HowNotToFeatchApi = () => {
  const [apiData, setApiData] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/posts";
;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div>
        <ul> Data:
            {apiData.map((curData) => {
                return <li key={curData.id}> {curData.title}</li>
            })}
        </ul>
    </div>
    </>
  );
};
