function fibonacci(numero) {
	var resultado = 1, atual = 0, ant = 1, ult = 1;
	
	
	for (var i=1; atual <= numero; i++) {
		resultado += ' ' + ult;
		atual = ult + ant;
		ant = ult;
		ult = atual;
	}
	return resultado;
}

// Evento criado para capturar as mensagens enviadas pela WebPage
self.addEventListener('message', function (event) {

	// Pegar o valor enviado pela WebPage
	var numero = event.data;
	// Calcular sequência de fibonacci
	var resultado = fibonacci(numero);
	// Enviar mensagem para a WebPage
	self.postMessage(resultado);
	
}, false);

