import React, { useState } from "react";

const Like = () => {
  const [likeList, setLikeList] = useState([
    { data: "Like me", like: false },
    { data: "Like me", like: false },
    { data: "Like me", like: false }
  ]);
  

  const likeMe = (index) => {
    let data = [...likeList];
    if (data[index].like === false) {
      data[index].like = true;
      setLikeList(data);
      console.log(data, "liked");
    } else {
      data[index].like = false;
      console.log(data, "unliked");
      setLikeList(data);
    }
  };

  return (
    <div>
      I am like component
      <div className="like">
        {likeList.map((list, index) => {
          return (
            <div>
              {console.log(list.like)}
              {list.data}{" "}
              <button onClick={() => likeMe(index)}> {list.like === true ? "Liked 🧡" : "Unliked 😞"}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Like;
