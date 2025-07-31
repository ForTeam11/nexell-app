"use client";

import React, { useState } from "react";
import { Form } from "@/components/ingresos/Form";
import { TableIncome } from "@/components/ingresos/TableIncome";
import { IFormSections } from "@/utils/interfaces/interfaces";

export default function IngresosPage() {
  const [ isFormActive, setIsFormActive ] = useState(false);
  const [ingresos, setIngresos] = useState<IFormSections[]>([]);

  const handleAddIngreso = (nuevoIngreso: any) => {
    setIngresos((prev) => [...prev, nuevoIngreso]);
    console.log("nuevo", nuevoIngreso)
  }

  return (
    <>
      <button className="btn btn-accent rounded-xl" onClick={() => {setIsFormActive(true)}}>Nuevo ingreso</button>
      <TableIncome ingresos={ingresos}/>
      {isFormActive && 
        <dialog id="my_modal_3" className="modal" open>
            <div className="modal-box">
              <div>
                <button 
                  className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-xl mb-0" 
                  onClick={() => setIsFormActive(false)}>✕</button>
              </div>
              <Form onSubmitForm={handleAddIngreso}/>      
            </div>
        </dialog>
      }
    </>
  );
}