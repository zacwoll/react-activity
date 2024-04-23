// AvatarCursor.tsx
import * as React from 'react';
import {TPlayerOptions} from '../../../server/src/entities/Player';
import './AvatarCursor.css';
import { Avatar, AvatarProps } from './Avatar';
import cursorImage from '../images/mouse-cursor.png';

export function AvatarCursor({avatarUri, name, talking, cursorX, cursorY}: TPlayerOptions) {
	const avatarProps: AvatarProps = {avatarUri, name, talking};
	const cursorContainerStyle: React.CSSProperties = {
		left: cursorX,
		top: cursorY,
	}
return (
	<div className="cursor__container" style={cursorContainerStyle}>
		<img className="cursor" src={cursorImage} alt="Cursor" />
		<Avatar {...avatarProps}></Avatar>
	</div>
);
}
