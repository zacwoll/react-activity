import * as React from 'react';
import {Player} from './Player';
import {usePlayers} from '../hooks/usePlayers';
import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';
import './VoiceChannelActivity.css';

export function VoiceChannelActivity() {
  const players = usePlayers();
  const {room} = useAuthenticatedContext();

  React.useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      switch (ev.key) {
        case 'ArrowUp':
        case 'KeyW':
          room.send('move', {x: 0, y: 1});
          break;
        case 'ArrowDown':
        case 'KeyS':
          room.send('move', {x: 0, y: -1});
          break;
        case 'ArrowRight':
        case 'KeyD':
          room.send('move', {x: 1, y: 0});
          break;
        case 'ArrowLeft':
        case 'KeyA':
          room.send('move', {x: -1, y: 0});
          break;
        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [room])

  return (
    <div className="voice__channel__container">
      {players.map((p) => (
        <Player key={p.userId} {...p} />
      ))}
    </div>
  );
}
