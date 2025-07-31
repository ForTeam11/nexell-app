import { IFormSections } from "@/utils/interfaces/interfaces";
import React, { useState } from "react";
import { HiEye } from "react-icons/hi";

export const TableIncome = ({ingresos}:{ingresos: IFormSections[]}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>RUC</th>
          <th>RAZON SOCIAL</th>
          <th>TIPO DE PERSONA</th>
          <th>EDITAR</th>
        </tr>
      </thead>
      <tbody>
        {
          ingresos.map((item: IFormSections, index: number) => {
            return (
              <tr key={index}>
                <td>{item.sales_registration.ruc || "SIN RUC"}</td>
                <td>{item.sales_registration.razon_social || "SIN RAZON SOCIAL"}</td>
                <td>{item.sales_registration.tipo_persona || "SIN TIPO"}</td>
                <td><HiEye onClick={handleModal}/></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};