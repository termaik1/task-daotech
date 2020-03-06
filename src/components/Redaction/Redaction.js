import React, { useState } from "react";

import "./Redaction.module";

const Redaction = ({ match, redactionWork, putWorkAPI, errorPutWork }) => {
  const { title, describe, image } = redactionWork;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescribe, setNewDescribe] = useState(describe);
  const [newImage, setNewImage] = useState(image);

  const onTitle = e => {
    const title = e.currentTarget.value;
    setNewTitle(title);
  };

  const onDescribe = e => {
    const describe = e.currentTarget.value;
    setNewDescribe(describe);
  };

  const onImage = e => {
    const image = e.currentTarget.value;
    setNewImage(image);
  };

  const saveChange = () => {
    const { params } = match;
    const { id } = params;
    console.log(newImage);
    putWorkAPI(id, newTitle, newDescribe, newImage);
  };

  if (errorPutWork) {
    return <span>Произошло что-то плохое...</span>;
  }

  return (
    <div className="container">
      <div className="container__redaction">
        <div>
          <span>title:</span>
          <input onChange={onTitle} placeholder={newTitle} />
        </div>
        <div>
          <span>describe:</span>
          <input onChange={onDescribe} placeholder={newDescribe} />
        </div>
        <div>
          <span>image url:</span>
          <input
            style={{ width: "600px", height: "30px" }}
            onChange={onImage}
            placeholder={newImage}
          />
        </div>
        <button onClick={saveChange}>сохранить</button>
      </div>
    </div>
  );
};

export default Redaction;
