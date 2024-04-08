import getNumberFact from '../BackEnd/getNumberFact.js';
var mathBtn = document.querySelector('.math');
var triviaBtn = document.querySelector('.trivia');
var dateBtn = document.querySelector('.date');

var middleSection = document.querySelector('.middle');

function removeToBeRemovedElements(){
    var responses = document.querySelectorAll('.toBeRemoved');
    for (var i = 0; i < responses.length; i++){
        responses[i].remove();
    }
}

function callApi(category){
    getNumberFact(category).then(function(data){
        removeToBeRemovedElements();
        if (data === undefined){
            createResponseCard("Sorry", "No results where found :/", "");
            return;
        }else{

            createResponseCard(category === "date"? data.year :data.number, data.text);
        }
    })
}
mathBtn.addEventListener('click', function(e) {
    e.preventDefault();
    callApi('math');
});

triviaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    callApi('trivia');
});
dateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    callApi('date');
});

function createResponseCard(num, description){
    var response = document.createElement('div');
    response.classList.add('response');
    response.classList.add('toBeRemoved');
    middleSection.appendChild(response);

    response.innerHTML = `
        <div class="response-title">${num}</div>
        <div class="response-body">${description}</div>
    `;
    var spaceBox = document.createElement("div");
    spaceBox.classList.add("space-box");
    spaceBox.classList.add("toBeRemoved");
    middleSection.appendChild(spaceBox);
}