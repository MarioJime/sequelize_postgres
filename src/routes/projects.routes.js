import { Router } from 'express';
import {
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getProjects,
    getProyectTaks
} from '../controllers/projectController.js'
const router = Router();

router.get('/projects', getProject)
router.post('/projects', createProject)//crear proyectos
router.put('/projects/:id', updateProject)//actualizar
router.delete('/projects/:id', deleteProject)//borrar
router.get('/projects/:id', getProjects)

router.get('/projects/:id/tasks', getProyectTaks)

export default router;