import React from "react";
import "./Detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2> John Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg"
                  alt=""
                />
                <span>photo_2024_</span>
              </div>
              <img src="download.png" alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg"
                  alt=""
                />
                <span>photo_2024_</span>
              </div>
              <img src="download.png" alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg"
                  alt=""
                />
                <span>photo_2024_</span>
              </div>
              <img src="download.png" alt="" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="Logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
