export const socket = new WebSocket('wss://fep-app.herokuapp.com/');
import {DOMmethods} from './app'


export const API = {
    onOpen: socket.onopen = () => {
        console.log('socket opened');
    },

    onMessage: socket.onmessage = (message) => {
        DOMmethods.onMessageReceipt(JSON.parse(message.data));
    },

    onSend: (msg) => {
        socket.send(msg);
    },

    onError: socket.onerror = () => {
        console.log('error');
    },

    onClose: socket.onclose = () => {
        console.log('close');
    },

}