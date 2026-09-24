import type { Request, Response } from 'express';
import type { IEmployeeRepository } from '../repositories/employee.repository.interface.js';

export class EmpleadoController {
  constructor(private readonly employeeRepository: IEmployeeRepository) {}

  getEmpleados = async (_req: Request, res: Response): Promise<void> => {
    const empleados = await this.employeeRepository.findAll();
    res.json(empleados);
  };

  getEmpleado = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const empleado = await this.employeeRepository.findById(id as string);
    if (!empleado) {
      res.status(404).json({ status: 'Empleado no encontrado' });
      return;
    }
    res.json(empleado);
  };

  addEmpleado = async (req: Request, res: Response): Promise<void> => {
    const empleado = await this.employeeRepository.create(req.body);
    res.json({ status: 'Empleado guardado', data: empleado });
  };

  updateEmpleado = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const empleado = await this.employeeRepository.update(id as string, req.body);
    if (!empleado) {
      res.status(404).json({ status: 'Empleado no encontrado' });
      return;
    }
    res.json({ status: 'Empleado actualizado', data: empleado });
  };

  deleteEmpleado = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const eliminado = await this.employeeRepository.delete(id as string);
    if (!eliminado) {
      res.status(404).json({ status: 'Empleado no encontrado' });
      return;
    }
    res.json({ status: 'Empleado eliminado' });
  };
}
