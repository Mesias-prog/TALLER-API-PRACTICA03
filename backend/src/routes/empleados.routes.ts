import { Router } from 'express';
import { EmpleadoController } from '../controllers/empleados.controllers.js';
import { EmployeeMongooseRepository } from '../repositories/employee.mongoose.repository.js';

const router = Router();

const employeeRepository = new EmployeeMongooseRepository();
const empleadoController = new EmpleadoController(employeeRepository);

router.get('/empleados', empleadoController.getEmpleados);
router.get('/empleados/:id', empleadoController.getEmpleado);
router.post('/empleados', empleadoController.addEmpleado);
router.put('/empleados/:id', empleadoController.updateEmpleado);
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

export default router;
