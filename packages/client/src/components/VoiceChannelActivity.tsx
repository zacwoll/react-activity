import * as React from 'react';
import {Player} from './Player';
import {usePlayers} from '../hooks/usePlayers';
import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';
import './VoiceChannelActivity.css';
import { AvatarCursor } from './AvatarCursor';

export function VoiceChannelActivity() {
  const players = usePlayers();
  const {room} = useAuthenticatedContext();

  React.useEffect(() => {

    function handleMouseMove(ev: MouseEvent) {
      const position = { x: ev.clientX, y: ev.clientY };
      room.send('mouseMove', position);
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.addEventListener('mousemove', handleMouseMove);
    }
  }, [room])

  return (
    <div className="voice__channel__container">
      {players.map((p) => (
        // <Player key={p.userId} {...p} />
        <AvatarCursor key={p.userId} {...p} />
      ))}
    </div>
  );
}
