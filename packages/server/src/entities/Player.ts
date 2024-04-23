import {Schema, type} from '@colyseus/schema';

export type TPlayerOptions = Pick<Player, 'sessionId' | 'userId' | 'name' | 'avatarUri' | 'talking' | 'x' | 'y' | 'cursorX' | 'cursorY'>;

export class Player extends Schema {
  @type("string")
  public sessionId: string;

  @type("string")
  public userId: string;

  @type("string")
  public avatarUri: string;

  @type("string")
  public name: string;

  @type("boolean")
  public talking: boolean = false;

  @type("number")
  public x: number;

  @type("number")
  public y: number;

  @type("number")
  public cursorX: number;

  @type("number")
  public cursorY: number;

  // Init
  constructor({ name, userId, avatarUri, sessionId }: TPlayerOptions) {
    super();
    this.userId = userId;
    this.avatarUri = avatarUri;
    this.name = name;
    this.sessionId = sessionId;
    this.x = Math.round(Math.random() * 500);
    this.y = Math.round(Math.random() * 500);
    this.cursorX = 0;
    this.cursorY = 0;
  }
}
