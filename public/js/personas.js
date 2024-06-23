const apiUrl = 'http://localhost:3000';

function fetchPersonas() {
    fetch(`${apiUrl}/personas`)

        .then(response => response.json())
        .then(data => {
            const personasList = document.getElementById('listaPersonas');
            personasList.innerHTML = '';
            data.forEach(personas => {
                const li = document.createElement('li');
                li.innerHTML = `${persona.nombre}`;
                personasList.appendChild(li);
            });
        });
}
fetchPersonas();

function fetchPersona(p_id_persona) {
    fetch(`${apiUrl}/personas/${p_id_persona}`)

        .then(response => response.json())
        .then(data => {
            const personasList = document.getElementById('listaPersonas');
            personasList.innerHTML = '';
            data.forEach(personas => {
                const li = document.createElement('li');
                li.innerHTML = `${persona.nombre}`;
                personasList.appendChild(li);
            });
        });
}
fetchPersonas();