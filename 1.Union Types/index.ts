

//function showMessage(message: string | string[] | (() => string)) {
function showMessage(message){   
    if(Array.isArray(message)) {
        message.forEach(m=>{
            console.log(m);
        });
        
    } else if (typeof message === 'function') {
        console.log(message());
    } else {
        console.log(message);
    }
}

//ok
const messageLiteral = 'hello world literal'
showMessage(messageLiteral);

//ok
const messageArray = ['hello', 'world', 'from', 'array'];
showMessage(messageArray);

//ok
const messagefunction = function(){
    return 'hello world function';
};
showMessage(messagefunction);

//this isn't supported, we want to prevent this
const messageObject = {message: 'hello world object'};
showMessage(messageObject);