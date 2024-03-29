const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/hr_couture');

const Pool = require('pg').Pool
const pool = new Pool({
  user: undefined,
  host: 'localhost',
  database: 'hr_couture',
  password: null,
  port: 5432,
})

const getUsers = () => {
    return new Promise ((resolve, reject) => {
    pool.query('SELECT name, phone, check_in_time FROM models WHERE check_in_time IS NULL', (error, results) => {
      if (error) {
        throw error
      } else {
        resolve(results.rows)
        }
    })
    })
}

const markPresent = (name) => {
    const date = new Date(Date.now())
    const time = date.toLocaleTimeString('en-US', {hour12: false});
    return new Promise ((res, rej) => {
        pool.query(`UPDATE models SET check_in_time = '${time}' WHERE name = '${name}';`, (err, results) => {
            if (err) {
                console.log('in conn', err)
            } else {
                res(results)
            }
        })
    })
}

const getDesigners = (name) => {
    return new Promise ((res, rej) => {
        pool.query(`SELECT name FROM designers WHERE id =
            (SELECT designer_id FROM collections WHERE id = 
                (SELECT collection_id FROM looks WHERE model_uuid = 
                    (SELECT uuid FROM models WHERE name = '${name}')));`
          
                , (err, results) => {
                        if (err) {
                            console.log('getDesigners', err)
                        } else {
                            res(results);
                        }
                    })
    })
}

const getModels = (designer, cb) => {
    
    return pool.query((`SELECT model_uuid FROM looks WHERE collection_id = 
        (SELECT id FROM collections where designer_id =
        (SELECT id FROM designers WHERE name = '${designer}'));`))
        .then((data) => {
            return data.rows.map((model) => {
                    return pool.query(`SELECT name FROM models where uuid = '${model.model_uuid}';`)
            })
            
        })
        .then(promises => cb(null, promises))         
}

const yourModel = (dresser, cb) => {
    
    return pool.query(`SELECT model_name from backstages ORDER BY RANDOM() Limit 1;`)
        .then(data => data.rows[0])
        .then(result => [result, pool.query(`SELECT check_in_time from models WHERE name = '${result}';`)])
        .then(presence => cb(null, presence))
}
module.exports = {conn, getUsers, markPresent, getDesigners, getModels, yourModel};