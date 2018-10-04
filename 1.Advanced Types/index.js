function showMessage(message) {
    //console.log(typeof message);
    if (message instanceof String) {
        console.log(message);
    }
    else if (message instanceof Message) {
        console.log(message.message);
    }
}
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
var message = new Message();
message.isYell = true;
message.message = 'hello';
showMessage(message);
showMessage('world');
// showMessage(1);
