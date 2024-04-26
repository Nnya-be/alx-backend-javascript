import ClassRoom from './0-classroom';

const initializeRooms = () => [19, 20, 34].map((value) => new ClassRoom(value));

export default initializeRooms;
