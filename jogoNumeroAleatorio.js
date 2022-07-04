var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

/*Objetivo do jogo: conferir se o palpite do jogador está perto ou longe do número aleatório, além de dar pistas se está baixo ou alto, finalizando em caso de acerto ou o jogador alcançar 7 palpites sem acertar*/
	
		//inicio do jogo e inclusao de campo com palpite dado pelo usuario
	function conferirPalpite() {
		var palpiteUsuario = Number(campoPalpite.value);
		if (contagemPalpites === 1) {
			palpites.textContent = 'Palpites anteriores: ';
		}
		palpites.textContent += palpiteUsuario + ' ';

		//Condicionais que orientarão o usuário em caso de acerto, erro e fim de jogo
		if(palpiteUsuario === numeroAleatorio) {
			ultimoResultado.textContent = 'PARABÉNS! VOCÊ ACERTOU';
			ultimoResultado.style.backgroundColor = 'green';
			ultimoResultado.style.color = 'yellow';
			baixoOuAlto.textContent = '';
			configFimDeJogo();
		} else if(contagemPalpites === 7) {
			ultimoResultado.textContent = '!!!AHH, QUE PENINHA!!!';
			ultimoResultado.style.color = 'yellow';
			baixoOuAlto.textContent = '';
			configFimDeJogo();

		//Condicionais que orientarão o usuário durante os palpites
		} else {
			ultimoResultado.textContent = 'Errado! Dê outro palpite';
			ultimoResultado.style.backgroundColor = 'red';
		} if(palpiteUsuario < numeroAleatorio) {
			baixoOuAlto.textContent = 'Seu palpite está baixo!';
		} else if(palpiteUsuario > numeroAleatorio) {
			baixoOuAlto.textContent = 'Seu palpite está alto!';
		}

		contagemPalpites++;
		campoPalpite.value = '';
		campoPalpite.focus();
	}
	
	envioPalpite.addEventListener('click', conferirPalpite);
  	
	function configFimDeJogo() {
		campoPalpite.disabled = true;
		envioPalpite.disabled = true;
		botaoReinicio = document.createElement('button');
		botaoReinicio.textContent = 'Inicio novo jogo';
		document.body.appendChild(botaoReinicio);
		botaoReinicio.addEventListener('click', reiniciarJogo);
	}

	function reiniciarJogo() {
		contagemPalpites = 1;
		var reiniciarParas = document.querySelectorAll('.resultadoParas p');
		for(var i = 0 ; i < reiniciarParas.length ; i++) {
		reiniciarParas[i].textContent = '';
		}
		botaoReinicio.parentNode.removeChild(botaoReinicio);
		campoPalpite.disabled = false;
		envioPalpite.disabled = false;
		campoPalpite.value = '';
		campoPalpite.focus();
		ultimoResultado.style.backgroundColor = 'white';
		numeroAleatorio = Math.floor(Math.random() * 100) + 1;
	}