import app from './app.js'
import { sequelize } from './database/database.js'

// import './models/Projects.js'
// import './models/Task.js'

async function main() {
    try {
        await sequelize.sync({ force: false  })
        console.log('Conexion establecida')
        app.listen(3000)
        console.log('Server is listening on port', 3000);
    } catch (err) {
        console.log('Conecion fallida',err)
     }
}

main();