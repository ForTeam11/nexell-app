"use client";

import { useState } from "react";
import { Input } from "./Input";

export const Form = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Paso 1 */}
      {step === 1 && (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Registro de Venta
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de persona
              </label>
              <div className="space-y-2 mt-1">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="tipo_persona"
                    value="jurídica"
                    className="form-radio"
                  />
                  Jurídica
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="tipo_persona"
                    value="natural"
                    className="form-radio"
                  />
                  Natural
                </label>
              </div>
            </div>

            <Input label="Razón social" id="razon_social" />
            <Input label="RUC" id="RUC" />

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de venta
              </label>
              <div className="space-y-2 mt-1">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="tipo_venta"
                    value="alta_nueva"
                    className="form-radio"
                  />
                  Alta nueva
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="tipo_venta"
                    value="portabilidad"
                    className="form-radio"
                  />
                  Portabilidad
                </label>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Paso 2 */}
      {step === 2 && (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Representante legal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Nombres" id="nombre" />
            <Input label="Apellidos" id="apellidos" />
            <Input label="DNI" id="DNI" />
            <Input label="Correo electrónico" id="correo" />
            <Input label="Número de contacto" id="contacto" />
            <Input label="2do número de contacto" id="contacto2" />
            <Input label="Número de whatsapp" id="whatsapp" />
            <Input label="Teléfono fijo" id="telefono_fijo" />
            <Input label="Departamento" id="departamento" />
            <Input label="Provincia" id="provincia" />
            <Input label="Distrito" id="distrito" />
            <Input label="Dirección" id="dirección" />
          </div>
        </section>
      )}

      {/* Paso 3 */}
      {step === 3 && (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Dirección de instalación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Departamento" id="departamento_instalación" />
            <Input label="Provincia" id="provincia_instalación" />
            <Input label="Distrito" id="distrito_instalación" />
            <Input label="Nombre de vía o zona" id="via_zona" />
            <Input label="Piso" id="piso" />
            <Input label="Dirección instalación" id="dirección_instalación" />
            <Input label="Referencia" id="referencia" />
            <Input label="Código plus" id="codigo_plus" />
          </div>
        </section>
      )}

      {/* Navegación */}
      <div className="flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="btn btn-secondary"
          >
            Anterior
          </button>
        )}
        {step < 7 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn btn-primary ml-auto"
          >
            Siguiente
          </button>
        ) : (
          <button type="submit" className="btn btn-accent ml-auto">
            Enviar
          </button>
        )}
      </div>
    </form>
  );
};
