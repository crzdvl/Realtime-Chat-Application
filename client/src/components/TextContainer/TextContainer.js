import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
      ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              {Array.from(users).map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
              </div>))}
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;