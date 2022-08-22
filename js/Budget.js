
document.getElementById('calculate-Btn').addEventListener('click', function () {
    const playerPriceElement = document.getElementById('Player-price');
    const playerPriceString = playerPriceElement.value;
    const playerPrice = parseInt(playerPriceString);



    const totalPlayerElement = document.getElementById('total-player');
    const totalPlayerString = totalPlayerElement.innerText;
    const totalPlayer = parseInt(totalPlayerString);

    const totalPlayerPrice = playerPrice * totalPlayer;


    document.getElementById('player-Expenses').innerText = totalPlayerPrice;

})
// Budget section 
document.getElementById('Calculate-Total').addEventListener('click', function () {
    const totalPlayerPriceElement = document.getElementById('player-Expenses');
    const totalPlayerPriceString = totalPlayerPriceElement.innerText;
    const totalPlayerPrice = parseInt(totalPlayerPriceString);


    const managerPriceElement = document.getElementById('manager-price');
    const managerPriceString = managerPriceElement.value;
    const managerPrice = parseInt(managerPriceString);


    const coachPriceElement = document.getElementById('coach-price');
    const coachPriceString = coachPriceElement.value;
    const coachPrice = parseInt(coachPriceString);


    const total = totalPlayerPrice + managerPrice + coachPrice;

    document.getElementById('total').innerText = total;



})