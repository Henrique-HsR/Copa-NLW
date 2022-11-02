function createGame(player1, hour, player2) {
  return `              
                        <li>
                            <img src="assets/bandeiras/icon=${player1}.svg" alt="Bandeira do ${player1}">
                            <strong>${hour}</strong>
                            <img src="assets/bandeiras/icon=${player2}.svg " alt="Bandeira da ${player2}">
                        </li>`
}

function createCard(date, day, games) {
  return `
            <div class="card">
                    <h2>${date} <span>${day}</span></h2>
                    <ul>
                      ${games}
                    </ul>
            </div>
                    `
}

document.querySelector('#app'). innerHTML = `<header>
                <img src="./assets/logo.svg" alt="logo Copa NLW">
            </header>
            <main id="cards">
            ${createCard('24/11', 'quinta', 
              createGame('brazil', '16:00', 'serbia'))
            }
            ${createCard('28/11', 'segunda', 
              createGame('brazil', '13:00', 'switzerland'))
            }
            ${createCard('02/12', 'sexta',
              createGame('brazil', '16:00', 'cameroon'))
            }
            </main>`


            /*
            <li>
                            <img src="assets/bandeiras/icon=switzerland.svg" alt="Bandeira da Suíça">
                            <strong>07:00</strong>
                            <img src="assets/bandeiras/icon=cameroon.svg" alt="Bandeira de Camarões">
                        </li>

                        <li>
                            <img src="assets/bandeiras/icon=uruguay.svg" alt="Bandeira do Uruguai">
                            <strong>10:00</strong>
                            <img src="assets/bandeiras/icon=south korea.svg" alt="Bandeira da Coréia do Sul">
                        </li>

                        <li>
                            <img src="assets/bandeiras/icon=portugal.svg" alt="Bandeira de Portugal">
                            <strong>13:00</strong>
                            <img src="assets/bandeiras/icon=ghana.svg" alt="Bandeira de Gana">
                        </li>
*/