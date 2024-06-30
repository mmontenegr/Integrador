// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getContactos = (req, res) => {
   const sql = "SELECT * FROM t_contactos WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getContacto = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_contactos WHERE id_Contacto = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 const createContacto = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id, elegido, mensaje, contactoSeleccionado} = req.body;
   const sql = "insert into t_contactos (id_persona, tipo_contacto, x_contacto, medio_contacto) values (?,?,?,?)";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id, elegido, mensaje, contactoSeleccionado], (err, results) => {
    if (err) throw err;
    res.json({message: "Contacto creada con id " + results.insertId, 
              id_contacto: results.insertId});
   }) ;
};


const updateContacto = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   //const {title, director, anio} = req.body;
   const sql = "update t_contactos set f_baja = current_timestamp(), u_baja = user() where id_contacto = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Contacto dado de Baja'});
   }) ;
};
/*
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

 module.exports = {getContactos, getContacto, createContacto, updateContacto};