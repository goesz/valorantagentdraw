const agentes = ["Brimstone", "Viper", "Omen", "Raze", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Breach", "Killjoy", "Reyna", "Skye", "Yoru", "Astra", "KAY/O", "Deadlock", "Iso", "Gekko", "Chamber", "Neon", "Fade", "Harbor"];
const duelistas = ["Raze", "Phoenix", "Jett", "Reyna", "Yoru", "Neon", "Iso"];
const controladores = ["Brimstone", "Viper", "Omen", "Astra", "Harbor"];
const iniciadores = ["Sova", "Breach", "Skye", "KAY/O", "Gekko", "Fade"];
const sentinelas = ["Cypher", "Sage", "Killjoy", "Deadlock", "Chamber"];

function verificarNum(num) {
  return !isNaN(num) && num > 0;
}

function sortearAgente() {
  let numJogadores = document.getElementById("players").value;
  let message = document.getElementById("escrever");
  
  message.innerHTML = "";

  if (verificarNum(numJogadores)) {

    if (numJogadores > agentes.length) {
      message.innerHTML = "Não há agentes suficientes para o número de jogadores.";
      return;
    }

    let agentesSorteados = [];

    for (let i = 0; i < numJogadores; i++) {
      let indiceSorteado = Math.floor(Math.random() * agentes.length);
      let agenteSorteado = agentes.splice(indiceSorteado, 1)[0];
      agentesSorteados.push({ jogador: i + 1, agente: agenteSorteado });
    }

    let resultadoHTML = agentesSorteados.map(obj => `Player ${obj.jogador}: ${obj.agente}`).join(',<br>');
    message.innerHTML = `Agentes Sorteados:<br><b>${resultadoHTML}</b>.`;
  } else {
    message.innerHTML = "Digite um número válido de jogadores.";
	return;
  }
}
