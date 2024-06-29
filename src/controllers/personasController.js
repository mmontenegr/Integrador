// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getPersonas = (req, res) => {
   const sql = "SELECT * FROM t_personas WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getPersona = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_personas WHERE id_persona = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 const createPersona = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {nombre, apellido, direccion, telefono, email} = req.body;
   //console.log("mail recibido: " + req.body.mail);
   const sql = "insert into t_personas (nombre, apellido, direccion, telefono, mail) values (?,?,?,?,?)";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [nombre, apellido, direccion, telefono, mail], (err, results) => {
    if (err) throw err;
    res.json({message: "Persona creada con id " + results.insertId, 
              id_persona: results.insertId});
   }) ;
};

/*
const updateMovie = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   const {title, director, anio} = req.body;
   const sql = "update movies set title = ?, director = ?, anio = ? where id = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [title, director, anio, id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Pelicula actualizada'});
   }) ;
};

const deleteMovie = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   const sql = "delete from movies where id = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Pelicula eliminada'});
   }) ;
};
*/

 module.exports = {getPersonas, getPersona, createPersona};