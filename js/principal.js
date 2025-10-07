
            var titulo = document.querySelector("h1");
            console.log(titulo);
            console.log(titulo.textContent);
            titulo.textContent = ("Laura nutricão");

            var paciente = document.querySelector("#primeiro-paciente");
            var tdPaciente = document.querySelector("info-nome");
            var nome = tdPaciente.textContent;
            console.log(nome);


            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
            console.log(peso);

            var tdAltura = document.querySelector(".info-altura");
            var altura = tdAltura.textContent;
            console.log(altura);