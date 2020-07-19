// yarn socket.io-client -  клиентская часть сокет
import io from "socket.io-client";

// говорим на какой адресс делать запрос и сокет каждые 5 сек делает запрос пока не подключится сервер
const socketIO = io();
export default socketIO;
