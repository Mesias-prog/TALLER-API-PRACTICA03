import mongoose from 'mongoose';
import { EmpleadoModel } from '../models/empleado.model.js';
import type { EmpleadoDocument } from '../models/empleado.model.js';
import type { Employee, EmployeeDTO, IEmployeeRepository } from './employee.repository.interface.js';

const toEmployee = (doc: EmpleadoDocument): Employee => ({
  id: String(doc._id),
  nombre: doc.nombre,
  cargo: doc.cargo,
  departamento: doc.departamento,
  sueldo: doc.sueldo,
});

export class EmployeeMongooseRepository implements IEmployeeRepository {
  async findAll(): Promise<Employee[]> {
    const docs = await EmpleadoModel.find();
    return docs.map(toEmployee);
  }

  async findById(id: string): Promise<Employee | null> {
    if (!mongoose.isValidObjectId(id)) return null;
    const doc = await EmpleadoModel.findById(id);
    return doc ? toEmployee(doc) : null;
  }

  async create(data: EmployeeDTO): Promise<Employee> {
    const doc = await EmpleadoModel.create(data);
    return toEmployee(doc);
  }

  async update(id: string, data: Partial<EmployeeDTO>): Promise<Employee | null> {
    if (!mongoose.isValidObjectId(id)) return null;
    const doc = await EmpleadoModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? toEmployee(doc) : null;
  }

  async delete(id: string): Promise<boolean> {
    if (!mongoose.isValidObjectId(id)) return false;
    const result = await EmpleadoModel.findByIdAndDelete(id);
    return result !== null;
  }
}
