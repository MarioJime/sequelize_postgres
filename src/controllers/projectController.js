import { Project } from '../models/Projects.js'
import { Task } from '../models/Task.js'

export const getProject = async (req, res) => {
    try {
        // throw new Error('query failed')
        const projects = await Project.findAll()//de todas las filas las recorre y generaq un arreglo
        res.json(projects);// se envia al cliente

    } catch (error) {
        return res.status(404).json({ message: error.message });

    }
}

export const getProjects = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findOne({
            where: {
                id
            }
        })
        if(!project)
        return res.status(404).json({ message:'Project does not exists'});
        
        res.json(project)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;
    try {
        const newProject = await Project.create({
            name,
            priority,
            description,
        })

        res.json(newProject);// se envia al cliente

    } catch (error) {
        return res.status(404).JSON({ message: error.message });

    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        // console.log(project);
        await project.save();

        res.send('updateing');

    } catch (error) {

    }
}
export const deleteProject = async (req, res) => {
    // console.log(req.params.id);//va a traer ujn objeto donde va a estar la propiuedad init
    // res.send('delete in project')
    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id: id,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getProyectTaks = async(req, res) => {
    // se hace la consulta que consulte el id del project id con el id que se esta pasando
    const { id } = req.params;
    const tasks = await Task.findAll({
        where:{projectId: id},
    })
    res.json({ tasks })
}