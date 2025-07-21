"use client";

import { useState } from "react";
import { Form } from "@/components/ingresos/Form";

export default function IngresosPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-accent rounded-xl"
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          ).showModal()
        }
      >
        Nuevo ingreso
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Form />
        </div>
      </dialog>
    </>
  );
}
