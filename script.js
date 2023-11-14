var agentes = ["Brimstone", "Viper", "Omen", "Raze", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Breach", "Killjoy", "Reyna", "Skye", "Yoru", "Astra", "KAY/O", "Deadlock", "Iso", "Gekko", "Chamber", "Neon", "Fade", "Harbor"]
var numAgentes = document.querySelector("#players").value
var duelistas = ["Raze", "Phoenix", "Jett", "Reyna", "Yoru", "Neon", "Iso"]
var controladores = ["Brimstone", "Viper", "Omen", "Astra", "Harbor"]
var iniciadores = ["Sova", "Breach", "Skye", "KAY/O", "Gekko", "Fade"]
var sentinelas = ["Cypher", "Sage", "Killjoy", "Deadlock", "Chamber"]

function verificarNum(numAgentes) {
  if (!/[0-9]/.test(numAgentes)) {
    return false;
  }
  return true;
}

    function sortAgent() {
      let numJogadores = document.getElementById("players").value;

      if (verificarNum(numJogadores)) {
        if (numJogadores > agentes.length) {
          document.getElementById("escrever").innerHTML = "Não há agentes suficientes para o número de jogadores.";
          return;
        }

        let agentesSorteados = [];

        for (let i = 0; i < numJogadores; i++) {
          let indiceSorteado = Math.floor(Math.random() * agentes.length);
          let agenteSorteado = agentes.splice(indiceSorteado, 1)[0];
          agentesSorteados.push(agenteSorteado);
        }

        document.getElementById("escrever").innerHTML = `Agentes Sorteados:<br> <b>${agentesSorteados.join(`,<br> `)}.</b>`;
      } else {
        document.getElementById("escrever").innerHTML = "Digite um número válido de jogadores.";
      }
    }
