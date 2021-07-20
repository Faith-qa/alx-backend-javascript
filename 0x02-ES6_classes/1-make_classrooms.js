// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
