import { Schema, model } from 'mongoose';
import type { HydratedDocument } from 'mongoose';

export interface EmpleadoAttrs {
  nombre: string;
  cargo: string;
  departamento: string;
  sueldo: number;
}

export type EmpleadoDocument = HydratedDocument<EmpleadoAttrs>;

const empleadoSchema = new Schema<EmpleadoAttrs>(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    sueldo: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const EmpleadoModel = model<EmpleadoAttrs>('Empleado', empleadoSchema);
