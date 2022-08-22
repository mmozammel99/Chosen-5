const playerArray = [];
// selection list 
function displayPlayer(player) {
    const listFild = document.getElementById('list-fild');
    listFild.innerHTML = "";
    
    for (let i = 0; i < player.length; i++) {
        if (i < 5) {
           
            const name = playerArray[i];
            const list = document.createElement("tr");
            list.innerHTML = `
                               <th >${i + 1}&emsp; </th>
                                   <td >${name}</td> `
            listFild.appendChild(list)
            
        }


    }

}
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


