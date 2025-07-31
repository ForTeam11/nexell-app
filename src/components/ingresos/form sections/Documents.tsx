// SECTION 5

import { IDocuments } from "@/utils/interfaces/interfaces";
import { useState } from "react";
import { HiOutlineTrash, HiDocumentText  } from "react-icons/hi";

type PartialDocuments = Partial<IDocuments>;

export const Documents = ({handleDocumentsChange} : {handleDocumentsChange: (name: keyof IDocuments, value: File) => void}) => {
  const [documents, setDocuments] = useState<PartialDocuments>({});

  return (
    <>
      <div className="text-lg font-semibold text-gray-700 border-b m-0">Documentación</div>

      <div className="grid grid-cols-1 gap-6 max-h-[40rem] overflow-auto p-4">
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm mb-1">Contratos firmados</legend>
            <input id="contratos_firmados" type="file" className="file-input w-full" onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleDocumentsChange("contratos_firmados", e.target.files[0])
              }
            }} />
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm mb-1">Vigencia poder</legend>
            <input id="vigencia_poder" type="file" className="file-input w-full" onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleDocumentsChange("vigencia_poder", e.target.files[0])
              }
            }} />
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm mb-1">Ficha RUC</legend>
            <input id="ficha_ruc" type="file" className="file-input w-full" onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleDocumentsChange("ficha_ruc", e.target.files[0])
              }
            }} />
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm mb-1">DNI</legend>
            <input id="dni" type="file" className="file-input w-full" onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleDocumentsChange("dni", e.target.files[0])
              }
            }} />
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm mb-1">Documentos adicionales</legend>
            <input id="documentos_adicionales" type="file" multiple className="file-input w-full" onChange={(e) => {
              if (e.target.files) {
                const files = Array.from(e.target.files);
                setDocuments((prev: PartialDocuments) => ({
                  ...prev,
                  documentos_adicionales: files
                }));
              }
            }} />
            <ul className="list *:items-center bg-base-100 rounded-box shadow-md">
              {documents.documentos_adicionales && Array.isArray(documents.documentos_adicionales) && documents.documentos_adicionales.map((file, index) => (
                <li key={index} className=" list-row text-sm text-gray-600">
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold">
                      <HiDocumentText />
                    </span>
                  </div>
                  <div className="">
                    {file.name}
                  </div>
                  <button className="btn btn-sm btn-square btn-ghost" type="button" 
                    onClick={() => {
                      setDocuments((prev: PartialDocuments) => ({
                        ...prev,
                        documentos_adicionales: prev.documentos_adicionales?.filter((_, i) => i !== index)
                      }));
                    }}>
                    <HiOutlineTrash />
                  </button>
                </li>
                
              ))}
            </ul>
        </fieldset>
      </div>
    </>
  );
};
