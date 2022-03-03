"use strict";
// Die Variable enthält den Spieler, welcher am Zug ist. ["X", "O"]
let player = "X"

// Registriere die fieldClicked()-Funktion auf den Feldern
document.getElementById("container").addEventListener("click", () => fieldClicked(event.target.id));

// Diese Funktion wird bei einem Klick auf dem Container aufgerufen,
// als Parameter wird die FieldId des geklickten Fields als String übergeben.
function fieldClicked(fieldId) {

    if (!checkForWinner(player) && isFieldSet(fieldId) === false && !checkForGameOver()) {
        document.getElementById(fieldId).innerText = player;
        if (checkForWinner(player)) {
            document.getElementById("messageBox").innerText = "Player " + player + " Won!";
        } else {
            changePlayer();
        }
    } else {
        onclick(window.location.reload());
    }

    if(checkForGameOver()){
        document.getElementById("messageBox").innerText = "GAME OVER";
     }


    // TODO:
    // Implementiere den fehlenden Code in diese Funktion.
    // Verwende hierzu die teils schon implementierten 
    // Funktionen checkForWinner(), getFieldContent(), isFieldSet() und checkForGameOver()
    // weiter unten sowie den Debugger!
}

function changePlayer() {
    if (player === "X") {
        player = "O"
    } else {
        player = "X"
    }
}

function checkForWinner(player) {
    return checkForWinningRow("11", "12", "13", player) ||
        checkForWinningRow("21", "22", "23", player) ||
        checkForWinningRow("31", "32", "33", player) ||

        checkForWinningRow("11", "21", "31", player) ||
        checkForWinningRow("12", "22", "32", player) ||
        checkForWinningRow("13", "23", "33", player) ||

        checkForWinningRow("11", "22", "33", player) ||
        checkForWinningRow("13", "22", "31", player);
}

function checkForWinningRow(fieldId1, fieldId2, fieldId3, player) {
    return getFieldContent(fieldId1) === getFieldContent(fieldId2) &&
        getFieldContent(fieldId2) === getFieldContent(fieldId3) &&
        getFieldContent(fieldId1) === player;
}

function getFieldContent(fieldId) {
    return document.getElementById(fieldId).innerText
}

function isFieldSet(fieldId) {
    if (document.getElementById(fieldId).innerText === "X" || document.getElementById(fieldId).innerText === "O") {
        return true;

    } else {
        return false;
    }

}
function checkForGameOver() {
    return isFieldSet("11") && isFieldSet("12") && isFieldSet("13") &&
        isFieldSet("21") && isFieldSet("22") && isFieldSet("23") &&
        isFieldSet("31") && isFieldSet("32") && isFieldSet("33");
}
