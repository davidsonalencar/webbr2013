var worker1 = new Worker("calculoWorker.js");

worker1.addEventListener('message', function (event) {
	calculo1.innerHTML = event.data;
}, false);

worker1.postMessage(number.value);