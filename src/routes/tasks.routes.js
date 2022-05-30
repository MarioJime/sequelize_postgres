import {Router} from 'express'
import {getTask, createTask, updateTask, deleteTask, getTasks} from '../controllers/tasksController.js'
const router =  Router();

//Rutas de url
router.get('/tasks',getTask); 
router.post('/tasks',createTask);
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks/:id', getTasks)

export default router;