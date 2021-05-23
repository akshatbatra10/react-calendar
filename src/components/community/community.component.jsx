import React from "react";

import "./community.styles.scss";

const Community = () => {
  return (
    <div className="comm">
      <div className="contain">
        <span>Community</span>
      </div>
      <div className="conversation">
        <span>Start a conversation</span>
      </div>
      <div className="type">
        <div className="type-mid">
          <div className="col">
            <input type="text" placeholder="Start Typing here...." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
