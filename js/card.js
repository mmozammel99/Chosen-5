// body background color 
document.querySelector('body').style.backgroundColor = "#191919";




// player list 
const messiObject = {
    name: "Lionel Messi",
    imageUrl: "images/messi.png",
    performance: "36 Goals . 120 Assist"
};
const neymarObject = {
    name: "Neymar Jr",
    imageUrl: "images/neymar.png",
    performance: "36 Goals . 120 Assist"
};
const mbappeObject = {
    name: "Kylian Mbappé",
    imageUrl: "images/mbappe.png",
    performance: "36 Goals . 120 Assist"
};
const vitorObject = {
    name: "Vítor Machado",
    imageUrl: "images/vitor.png",
    performance: "36 Goals . 120 Assist"
};
const ramosObject = {
    name: "Sergio Ramos",
    imageUrl: "images/ramos.png",
    performance: "36 Goals . 120 Assist"
};
const renatoObject = {
    name: "Renato Sanches",
    imageUrl: "images/renato.png",
    performance: "36 Goals . 120 Assist"
};

// player card function 
function card(player) {
    const cardSection = document.getElementById('card-section');
    const div = document.createElement("div");
    div.innerHTML =
        ` <div class="card px-0 bg-black border" >
                <img src=${player.imageUrl} class="card-img-top" alt="...">
                <div class="card-body text-center text-white">
                  <h4 class="card-title">${player.name}</h4>
                  <p class="card-text text-secondary">${player.performance}</p>
                  <button class="btn btn-primary" onclick="addToCard(this); this.disabled=true;">SELECT</button>
                </div>
              </div> `

    cardSection.appendChild(div)


};

// call player for card 

card(messiObject)
card(neymarObject)
card(mbappeObject)
card(vitorObject)
card(ramosObject)
card(renatoObject)









