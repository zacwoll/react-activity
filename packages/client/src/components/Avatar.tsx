import * as React from 'react';
import {TPlayerOptions} from '../../../server/src/entities/Player';
import './Player.css';

export interface AvatarProps {
	avatarUri: string;
	name: string;
	talking: boolean;
}

export function Avatar({avatarUri, name, talking}: AvatarProps) {
  return (
    <div className="player__container">
      <div className={`player__avatar ${talking ? 'player__avatar__talking' : ''}`}>
        <img className="player__avatar__img" src={avatarUri} width="100%" height="100%" />
      </div>
	  <div className="player__name">{name}</div>
    </div>
  );
}
