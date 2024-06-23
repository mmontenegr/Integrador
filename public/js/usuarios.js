const apiUrl = 'http://localhost:3000';

document.getElementById('movie-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('movie-title').value;
    const director = document.getElementById('movie-director').value;
    const year = document.getElementById('movie-year').value;
    const genre = document.getElementById('movie-genre').value;
    const image = document.getElementById('movie-image').value;

    fetch(`${apiUrl}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, director, year, genre, image })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('movie-form').reset();
        fetchMovies();
    });
});



function fetchProfesionales() {
    fetch(`${apiUrl}/profesionales`)

        .then(response => response.json())
        .then(data => {
            const profesionalesList = document.getElementById('listaProfesionales');
            profesionalesList.innerHTML = '';
            data.forEach(profesional => {
                const containerProfesional = document.createElement('div');
                containerProfesional.classList.add("card");
                //
                foto = document.createElement("img");
                foto.src = `${profesional.imagen}`;

                console.log(`${profesional.nombre}`);
                nombreyApellido =  `${profesional.nombre}` + ' ' + `${profesional.apellido}`;
                nomApe = document.createElement("h4");
                nomApe.innerHTML = nombreyApellido;

                /*console.log(`${apiUrl}/personas/${profesional.id_persona}`);
                fetch(`${apiUrl}/personas/${profesional.id_persona}`)
                    .then(resp => resp.json())
                    .then(persona => {
                        //nombreyApellido =  `${persona.nombre}` + ' ' + `${persona.apellido}`;
                        console.log(`${persona.nombre}`);
                        //foto.setAttribute("alt",nombreyApellido);
                        
                        //nomApe.innerHTML = nombreyApellido;
                    });*/
                containerDatosProf = document.createElement("div");
                cargo = document.createElement("p");
                containerProfesional.appendChild(foto);
                cargo.innerHTML = `${profesional.x_cargo}`;
                //
                containerDatosProf.appendChild(nomApe);
                containerDatosProf.appendChild(cargo);
                containerDatosProf.classList.add('texto');
                //
                containerProfesional.appendChild(containerDatosProf);
                //
                profesionalesList.appendChild(containerProfesional);
            });
        });
}
fetchProfesionales();

/*
<div class="card">
                        <img src="./otrasFotos/mujer1(1).jpg" alt="Dra. Rodríguez">
                    <div class="texto">
                        <h4>Verónica Rodríguez</h4>
                        <p>Directora.</p>
                    </div>
                </div>
*/                