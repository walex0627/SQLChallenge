import { connection } from './db.js';
import { app } from './db.js';

const PORT ='3000'


//Creacion del metodo de la api
app.get('/tasks', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM tasks');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        res.status(500).json({ error: 'Error fetching tasks from the database' });
    }
});


// La manera de hacer una query y se muestre el resultado en consola 
// connection.query('SELECT * FROM tasks',(error,results)=>{
//     console.log(JSON.stringify(results));
// })

//Para alojar la aplicacion o la api en un puerto 
app.listen(PORT,()=>{
    console.log(`API corriendo en el puerto ${PORT}`);
    
})