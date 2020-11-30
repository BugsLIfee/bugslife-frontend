import React from 'react';
import ScreenShareBtn from '../../../allChat/screen-share/ScreenSharingBtn';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.scss';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      {/* <ScreenShareBtn/> */}
    </div>
    {
      users
        ? (
          <div>
            <h3>현재접속자:</h3>
            <br/>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;