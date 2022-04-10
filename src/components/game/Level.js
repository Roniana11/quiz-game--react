import React from 'react';
import flip from '../../sounds/flip1.wav';
import useSound from 'use-sound';

function Level(props) {

  const [play] =useSound(flip,{volume:0.25});
  let frontClasses ='level-front locked';
  let icon = 'lock';
  if(props.unlocked){
    icon='lock_open';
  }
  if(props.completed){
    frontClasses='level-front completed'
  }

  return (
    <div class="level-box" onMouseEnter={play}>
      <div className="level">
        <div className={frontClasses}></div>
        <div className="level-back">
          <i class="material-icons" style={{fontSize:'36px', color:'turquoise'}}>{icon}</i>
          <button onClick={props.onClick} >
            {props.levelName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Level;
