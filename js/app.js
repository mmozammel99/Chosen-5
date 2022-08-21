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


function card(player) {
    const cardSection = document.getElementById('card-section');
    const div = document.createElement("div");
    div.innerHTML = `
                <div class="card px-0 bg-black border" >
                <img src=${player.imageUrl} class="card-img-top" alt="...">
                <div class="card-body text-center text-white">
                  <h3 class="card-title">${player.name}</h3>
                  <p class="card-text text-secondary">${player.performance}</p>
                  <a href="#" class="btn btn-primary">SELECT</a>
                </div>
              </div>

`

cardSection.appendChild(div)
    console.log(player);

};
card(messiObject)
card(neymarObject)
card(mbappeObject)
card(vitorObject)
card(ramosObject)
card(renatoObject)