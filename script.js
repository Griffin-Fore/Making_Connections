console.log("page loaded...");
console.log(document.querySelector(".badge").innerText);
connectionRequestsCount = 2;
connectionsCount = 418;

function acceptUser1(){
    elementToRemove = document.querySelector("#card-list-item-1");
    console.log(elementToRemove);
    connectionRequestsCount --;
    document.querySelector(".badge").innerText = connectionRequestsCount;
    connectionsCount++;
    document.querySelector("#connectionsCount").innerText = connectionsCount;
    elementToRemove.remove();
}

function removeUser1(){
    elementToRemove = document.querySelector("#card-list-item-1");
    console.log(elementToRemove);
    connectionRequestsCount --;
    document.querySelector(".badge").innerText = connectionRequestsCount;
    elementToRemove.remove();
}

function acceptUser2(){
    elementToRemove = document.querySelector("#card-list-item-2");
    console.log(elementToRemove);
    connectionRequestsCount --;
    document.querySelector(".badge").innerText = connectionRequestsCount;
    connectionsCount++;
    document.querySelector("#connectionsCount").innerText = connectionsCount;
    elementToRemove.remove();
}
function removeUser2(){
    elementToRemove = document.querySelector("#card-list-item-2");
    console.log(elementToRemove);
    connectionRequestsCount --;
    document.querySelector(".badge").innerText = connectionRequestsCount;
    elementToRemove.remove();
}

// this is a snippet modified from chatgpt
let editWindow = document.querySelector("#editWindow");
const newText = document.querySelector("#newText");
const textToEdit = document.querySelector("#textToEdit");

function openEditWindow() {
    editWindow.classList.remove("hidden");
    newText.value = textToEdit.textContent;
}

function updateText() {
    textToEdit.textContent = newText.value;
}

function closeEditWindow() {
    editWindow.classList.add("hidden");
    newText.value = "";
}


