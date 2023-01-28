    // Disable button when it's click
function getbuttonDisableById(idName){
    const button = document.getElementById(idName);
    const disableButton = button.disabled = true;
    return disableButton;
}
    // Get & set player name by id
function getPlayerNameById(playerId){
    const players = document.getElementById(playerId);
    const player = players.innerText;
    // set player name  and create ol tag
    const displayPlayers = document.getElementById('player-order');
    const displayPlayerName = displayPlayers;
    const listItem = document.createElement('li');
    listItem.innerText = `${player}`;
    displayPlayerName.appendChild(listItem);
    return displayPlayerName;
} 

    // Calculate get input field Value By Id
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
    // get previous amount text
function getTextElementValueById(elementValueId){
    const textElement = document.getElementById(elementValueId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// set text element value By Id
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    return textElement.innerText;
}
// calculate btn 
document.getElementById('player-expenses').addEventListener('click', function(){
    const perPlayerAmount = getInputFieldValueById('player-price'); 
    const totalPlayerAmount = 5 * perPlayerAmount;
    // set  total value
    setTextElementValueById('expenses-total', totalPlayerAmount);
    
})

document.getElementById('total-amount-expenses').addEventListener('click', function(){
    const menagerInputAmount = getInputFieldValueById('menager');
    const coachInputAmount = getInputFieldValueById('coach');
    const previousTotalPerPlayerAmount = getTextElementValueById('expenses-total');
    const totalAmount = menagerInputAmount + coachInputAmount + previousTotalPerPlayerAmount;
    // set  total value
    setTextElementValueById('total-amount', totalAmount);
    console.log(totalAmount);
})

  
    // Event added 
document.getElementById('btn-messi').addEventListener('click', function(){
    getbuttonDisableById('btn-messi');
    getPlayerNameById('player-1');
});

document.getElementById('btn-neymar').addEventListener('click', function(){
    getbuttonDisableById('btn-neymar');
    getPlayerNameById('player-2');
});

document.getElementById('btn-ramos').addEventListener('click', function(){
    getbuttonDisableById('btn-ramos');
    getPlayerNameById('player-3');
});

document.getElementById('btn-vitor').addEventListener('click', function(){
    getbuttonDisableById('btn-vitor');
    getPlayerNameById('player-4');
});

document.getElementById('btn-renato').addEventListener('click', function(){
    getbuttonDisableById('btn-renato');
    getPlayerNameById('player-5');
});

document.getElementById('btn-mbappe').addEventListener('click', function(){
    getbuttonDisableById('btn-mbappe');
    getPlayerNameById('player-6'); 
});

document.getElementById('btn-marco').addEventListener('click', function(){
    getbuttonDisableById('btn-marco');
    getPlayerNameById('player-7'); 
});

document.getElementById('btn-dimaria').addEventListener('click', function(){
    getbuttonDisableById('btn-dimaria');
    getPlayerNameById('player-8'); 
});

document.getElementById('btn-fabian').addEventListener('click', function(){
    getbuttonDisableById('btn-fabian');
    getPlayerNameById('player-9'); 
});