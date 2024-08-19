var titulo = document.querySelector("h1");
console.log(titulo.textContent);

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
	console.log("foi clicado");
}

titulo.textContent = "Aparecida Nutricionista";
var table = document.querySelectorAll(".paciente")
function carregarJSON() {
	fetch('http://localhost:3000/pacientes')
		.then(response => response.json()) // Converte a resposta para JSON
		.then(data => {
		
		

			data.forEach(paciente => {
				var coisa = Object.keys(paciente).length;
console.log(coisa)
				table.forEach(function(tables) {
					
					for(let i = 0;i<coisa;i++)


						elemento.textContent = tables[i];
					
				});
			
					
					
					
					
					var resultado = paciente.peso / Math.pow(paciente.altura, 2)

					console.log(resultado)

					var imcT = table.querySelector(".info-imc")

					imcT.textContent = resultado.toFixed(2);
				
			});
		})
		.catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}

// Chama a função para carregar o arquivo JSON
carregarJSON();





