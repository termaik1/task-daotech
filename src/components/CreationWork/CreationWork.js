import React, { useState } from "react";

import "./CreationWork.module";

const defaultTypeImg = [
  "abstract",
  "animals",
  "business",
  "cats",
  "city",
  "food",
  "nightlife",
  "fashion",
  "people",
  "nature",
  "sports",
  "technics",
  "transport"
];

const CreationWork = ({ postWorkAPI, errorPostWork }) => {
  const [valueTitle, setValueTitle] = useState(null);
  const [valueDescription, setValueDescription] = useState(null);
  const [valueImage, setValueImage] = useState(null);
  const [errorValue, setErrorValue] = useState(false);
  const [typeImg, setTypeImg] = useState(defaultTypeImg);
  const onSave = () => {
    if (valueTitle && valueDescription && valueImage) {
      setErrorValue(false);
      postWorkAPI(valueTitle, valueDescription, valueImage);
    } else {
      setErrorValue(true);
    }
  };
  const onSaveTitle = e => {
    const value = e.currentTarget.value;
    setValueTitle(value);
  };
  const onSaveDescription = e => {
    const value = e.currentTarget.value;
    setValueDescription(value);
  };
  const onSaveImage = e => {
    const value = e.currentTarget.value;
    setValueImage(value);
  };
  if (errorPostWork) {
    return <span>Произошло что-то плохое...</span>;
  }
  return (
    <div className="container">
      <div className="container__form">
        <div className="container__title">
          <span>title:</span>
          <input onChange={onSaveTitle} placeholder="введите текст" />
        </div>
        <div className="container__description">
          <span>description:</span>
          <input onChange={onSaveDescription} placeholder="введите текст" />
        </div>
        <div className="container__image">
          <span>image:</span>
          <select onClick={onSaveImage}>
            <option>Выберите из списка</option>
            {typeImg &&
              typeImg.map((item, index) => <option key={index}>{item}</option>)}
          </select>
        </div>
        <button className="container__button" onClick={onSave}>
          сохранить
        </button>
        {errorValue && (
          <span className="container__error"> введены не все данные!</span>
        )}
      </div>
    </div>
  );
};

export default CreationWork;
