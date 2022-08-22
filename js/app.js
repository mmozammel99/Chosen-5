const playerArray = [];
// selection list 

// selected number section
function addToCard(player) {
    const playerName = player.parentNode.parentNode.children[1].children[0].innerText;

    playerArray.push(playerName);
    if (playerArray.length < 6) {


        document.getElementById('total-player').innerText = playerArray.length;
        displayPlayer(playerArray);
    }
    else {
        alert('max-5')
    }

}


