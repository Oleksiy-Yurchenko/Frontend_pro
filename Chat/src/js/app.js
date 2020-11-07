import {API} from './api';


const $chat = $('.chat');
const $userName = $('#userName');
const $message = $('#message');


$('#sendMsg').on('click', () => API.onSend(JSON.stringify({
    type: 'message',
    payload: {
        username: $userName.val(),
        message: $message.val(),
    }
})))


export const DOMmethods = {
    onMessageReceipt: (message) => {
        renderMessage(message);
        return clearInput();
    }
}


function renderMessage(msg){
    $chat.append(messageTemplate(msg))
}

function messageTemplate(msg){
    return `<div>${msg.payload.username}: ${msg.payload.message}</div>`
}

function clearInput(){
    $message.val('');
}