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
   db.query(sql, [nombre, apellido, direccion, telefono, email], (err, results) => {
    if (err) throw err;
    res.json({message: "Persona creada con id " + results.insertId, 
              id_persona: results.insertId});
   }) ;
};

const updatePersona = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   const {nombre, apellido, direccion, telefono, mail} = req.body;
   const sql = "update t_personas set nombre =?, apellido =?, direccion =?, telefono =?, mail =? where id_persona = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [nombre, apellido, direccion, telefono, mail, id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Persona actualizada'});
   }) ;
};

const deletePersona = (req, res) => {
   //El ? es un marcador de posición que será reemplazado por el valor de id para evitar inyecciones SQL
   const {id} = req.params;
   const sql = "delete from t_personas where id_persona = ?";
   // el metodo query recibe la sentencia de sql y devuelve el resultado en results
   db.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.json({message: 'Persona eliminada'});
   }) ;
};

 module.exports = {getPersonas, getPersona, createPersona, updatePersona, deletePersona};