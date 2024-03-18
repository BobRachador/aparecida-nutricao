var titulo = document.querySelector("h1");
			console.log(titulo.textContent);
		
			titulo.addEventListener("click", mostraMensagem);
		
			function mostraMensagem() {
				console.log("foi clicado");
			}
		
			titulo.textContent = "Aparecida Nutricionista";
		
			var pacientes = document.querySelectorAll('.paciente');
			console.log(pacientes);
		
			for (let i = 0; i < pacientes.length; i++) {
				var paciente = pacientes[i];
		
				var peso = parseFloat(paciente.querySelector('.info-peso').textContent);
				var altura = parseFloat(paciente.querySelector('.info-altura').textContent);
				var imc = paciente.querySelector('.info-imc');
		
				var resultado = peso / Math.pow(altura, 2);
		
				imc.textContent = resultado.toFixed(2);
			}