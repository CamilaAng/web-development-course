var messagesContainer = document.getElementById("messages-container");

document.querySelectorAll('.new-message').forEach((element) => {
    var newMessageClass = element.classList[1];
    var newMessageInput = element.querySelector(".new-message-input");
    var newMessageButton = element.querySelector(".new-message-button");
    var newMessage;

    var sendMessage = () => {
        newMessage = newMessageInput.value.trim();
        if (newMessage.length > 0) {
            newMessageInput.value = "";
            var newDiv = document.createElement("div"); 
            newDiv.className = 'message' + ' ' + newMessageClass + '-message';
            var newContent = document.createTextNode(newMessage);
            newDiv.appendChild(newContent);
            messagesContainer.appendChild(newDiv);
            newMessageInput.focus();
        }
    };
    newMessageButton.onclick = sendMessage;
    newMessageInput.onkeydown = event => {
        if (event.code == 'Enter') {
            sendMessage();
        }
    };
});