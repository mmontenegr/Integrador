const apiUrl = 'http://localhost:3000';

function fetchPersonas() {
    fetch(`${apiUrl}/personas`)

        .then(response => response.json())
        .then(data => {
            const personasList = document.getElementById('listaPersonas');
            personasList.innerHTML = '';
            data.forEach(personas => {

                const li = document.createElement('li');
                li.innerHTML = "* " + `${personas.nombre}` + " " + `${personas.apellido}` + " " + `${personas.mail}`;
                personasList.appendChild(li);
            });
        });
}
fetchPersonas();
