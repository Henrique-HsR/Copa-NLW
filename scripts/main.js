function createGame(player1, hour, player2) {
  return `              
                        <li>
                            <img src="assets/bandeiras/icon=${player1}.svg" alt="Bandeira do ${player1}">
                            <strong>${hour}</strong>
                            <img src="assets/bandeiras/icon=${player2}.svg " alt="Bandeira da ${player2}">
                        </li>`
}

let delay = -0.6;

function createCard(date, day, games) {

  delay = delay + 0.6;

  return `
            <div class="card" style="animation-delay: ${delay}s">
                    <h2>${date} <span>${day}</span></h2>
                    <ul>
                      ${games}
                    </ul>
            </div>
                    `
}

function toggleBgBlue(){
  document.body.setAttribute('class', 'blue');
}

function toggleBgGreen() {
  document.body.setAttribute('class', 'green');
}

function toggleBgYellow() {
  document.body.removeAttribute('class');
}

document.querySelector('#cards'). innerHTML = 
            createCard('24/11', 'quinta', 
              createGame('brazil', '16:00', 'serbia'))+
            
            createCard('28/11', 'segunda', 
              createGame('brazil', '13:00', 'switzerland'))+

            createCard('02/12', 'sexta',
              createGame('brazil', '16:00', 'cameroon'))