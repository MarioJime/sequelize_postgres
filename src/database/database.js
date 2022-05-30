import  Sequelize  from "sequelize";
export const sequelize = new Sequelize(
    'project_db',//Nombre base de datos
    'postgres',//Usuario de datos
    '12345',//Contraseña
    {
        host: 'localhost',
        dialect: 'postgres'

    })