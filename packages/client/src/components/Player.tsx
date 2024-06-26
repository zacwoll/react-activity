import * as React from 'react';
import {TPlayerOptions} from '../../../server/src/entities/Player';
import './Player.css';
import { Cursor } from './Cursor';

export function Player({avatarUri, name, talking, x, y, cursorX, cursorY}: TPlayerOptions) {
  return (
    <div className="player__container">
      <Cursor x={cursorX} y={cursorY} avatarUri={avatarUri} name={name} />
      <div className={`player__avatar ${talking ? 'player__avatar__talking' : ''}`}>
        <img className="player__avatar__img" src={avatarUri} width="100%" height="100%" />
      </div>
    </div>
  );
}
