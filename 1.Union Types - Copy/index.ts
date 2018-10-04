


function showMessage(message: string | Message){
    //console.log(typeof message);
    
    if(message instanceof String) {
        console.log(message)
    } else  if(message instanceof Message) {
        console.log(message.message)
    }

}

class Message {
    message: string;
    isYell: boolean;
}

var message = new Message();
message.isYell = true;
message.message = 'hello';
showMessage(message);

showMessage('world');

// showMessage(1);