//require('dotenv').config();
//console.log(process.env.DB_PORT);
apiUrl = window.location.host;

//var conn=require('./connection');

function fetchEspecialidades() {
    //alert(`${apiUrl}/especialidades`);
    fetch(`/especialidades`)

        .then(response => response.json())
        .then(data => {
            const especialidadesList = document.getElementById('listaEspecialidades');
            especialidadesList.innerHTML = '';
            data.forEach(especialidad => {
                const li = document.createElement('li');
                li.innerHTML = `${especialidad.x_especialidad}`;
                especialidadesList.appendChild(li);
            });
        });
}
fetchEspecialidades();
