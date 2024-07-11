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
   const {id, email, contrasena1, recordatorio_contraseña} = req.body;
   const sql = "insert into t_usuarios (id_persona, usuario, contraseña, recordatorio_contraseña) values (?,?,?,?)";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id, email, contrasena1, recordatorio_contraseña], (err, results) => {
    if (err) throw err;
    res.json({message: "Usurio creada con id " + results.insertId, id_usuario: results.insertId});
   }) ;
};

const updateUsuario = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   const {id_persona, usuario, contraseña, recordatorio_contraseña} = req.body;
   const sql = "update t_usuarios set id_persona = ?, usuario = ?, contraseña = ?, recordatorio_contraseña = ? where id_usuario = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id_persona, usuario, contraseña, recordatorio_contraseña, id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Usuario actualizado'});
   }) ;
}


const deleteUsuario = (req, res) => {
   const {id} = req.params;
   const sql = "delete from t_usuarios where id_usuario = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Usuario eliminado'});
   }) ;
};

 module.exports = {getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario};