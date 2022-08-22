const playerArray = [];

// selected number section
function addToCard(player) {
    const playerName = player.parentNode.parentNode.children[1].children[0].innerText;

    playerArray.push(playerName);
    if (playerArray.length < 6) {


        document.getElementById('total-player').innerText = playerArray.length;
        displayPlayer(playerArray);
    }
    else {
        alert("Can't select more.")
    }

}
// selection list 
function displayPlayer(player) {
    const listFiled = document.getElementById('list-filed');
    listFiled.innerHTML = "";
    
    for (let i = 0; i < player.length; i++) {

           
            const name = playerArray[i];
            const list = document.createElement("tr");
            list.innerHTML = `
                               <th >${i + 1}.&emsp; </th>
                                   <td >${name}</td> `
            listFiled.appendChild(list)
            
       


    }

}

