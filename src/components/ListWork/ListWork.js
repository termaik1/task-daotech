import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import debounce from "lodash/debounce";

import "./ListWork.module";

const ListWork = ({
  work,
  redactionWork,
  deleteWorkAPI,
  getApiActive,
  errorDataWork
}) => {
  const [isImg, setIsImg] = useState(false);

  const getApiActiveDebounce = debounce(() => {
    getApiActive();
  }, 800);

  const visibleImg = type => {
    setIsImg(!type);
  };

  const onRedaction = (id, title, description, image) => {
    redactionWork(id, title, description, image);
    getApiActiveDebounce();
  };

  const deleteWork = id => {
    deleteWorkAPI(id);
    getApiActiveDebounce();
  };
  console.log(errorDataWork);
  if (errorDataWork) {
    return <span>Произошло что-то плохое...</span>;
  }
  return (
    <div className="container">
      <div className="container__visible">
        <input type="checkbox" onClick={() => visibleImg(isImg)} />
        <span> {isImg ? "спрятать" : "показать"} картинки </span>
      </div>
      <div className="container__content content">
        {work &&
          work.map((item, index) => {
            const {
              id,
              createdAt,
              title,
              description,
              updatedAt,
              image
            } = item;

            return (
              <div key={index} className="content__work">
                <span>{title} </span>
                <span> {description} </span>
                {isImg && <img src={image} />}
                <button
                  onClick={() => onRedaction(id, title, description, image)}
                >
                  <NavLink to={`/edit-ad/${id}`}>редактировать</NavLink>
                </button>
                <button onClick={() => deleteWork(id)}>удалить</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListWork;
