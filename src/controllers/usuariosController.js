// El objeto db posee los metodos para conectar con la base de datos
const db = require('../db/db')

const getUsuarios = (req, res) => {
   const sql = "SELECT * FROM t_usuarios WHERE f_baja IS NULL";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
   }) ;
};

const getUsuario = (req, res) => {
    //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
    const {id} = req.params;
    const sql = "SELECT * FROM t_usuarios WHERE id_usuario = ? AND f_baja IS NULL";
    // el metodo query recibe la sentencia de sql y devuelve el resultado en results
    db.query(sql, [id], (err, results) => {
     if (err) throw err;
     res.json(results);
    }) ;
 };

 const createUsuario = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id_persona, usuario, contraseña, recordatorio_contraseña} = req.body;
   const sql = "insert into t_usuarios (id_persona, usuario, contraseña, recordatorio_contraseña) values (?,?,?,?)";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id_persona, usuario, contraseña, recordatorio_contraseña], (err, results) => {
    if (err) throw err;
    res.json({message: "Usurio creada con id " + results.insertId, id_usuario: results.insertId});
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

 module.exports = {getUsuarios, getUsuario, createUsuario};