export interface EmployeeDTO {
  nombre: string;
  cargo: string;
  departamento: string;
  sueldo: number;
}

export interface Employee extends EmployeeDTO {
  id: string;
}

export interface IEmployeeRepository {
  findAll(): Promise<Employee[]>;
  findById(id: string): Promise<Employee | null>;
  create(data: EmployeeDTO): Promise<Employee>;
  update(id: string, data: Partial<EmployeeDTO>): Promise<Employee | null>;
  delete(id: string): Promise<boolean>;
}
