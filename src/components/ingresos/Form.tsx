"use client";

import { useCallback, useState } from "react";
import { SalesRegistration } from "./form sections/SalesRegistration";
import { LegalRepresentative } from "./form sections/LegalRepresentative";
import { InstallationAddress } from "./form sections/InstallationAddress";
import { PackageSelection } from "./form sections/PackageSelection";
import { Documents } from "./form sections/Documents";
import { IFormSections } from "@/utils/interfaces/interfaces";

export const Form = ({onSubmitForm}: {onSubmitForm: (data: IFormSections) => void}) => {
  const [step, setStep] = useState(1);
  const nextStep = () => {setStep((prev) => Math.min(prev + 1, 5))};
  const prevStep = () => {setStep((prev) => Math.max(prev - 1, 1))};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitForm(sectionForm);
    alert("Formulario enviado");
  };

  const [sectionForm, setSectionForm] = useState<IFormSections>({
    sales_registration: {},
    legal_representative: {},
    installation_address: {},
    package_selection: {},
    documents: {}
  });

  const handleSectionForm = useCallback(<T, >(section: keyof IFormSections) => {
    return (name: keyof T, value: string | File) => {
      setSectionForm((prev: IFormSections) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value
        }
      }));
    }
  }, [sectionForm])

  return (

        <form onSubmit={handleSubmit} className="block gap-y-2">

          <section className={`space-y-6 ${step === 1 ? "block" : "hidden"}`}>
            <SalesRegistration handleSaleRegisterChange={handleSectionForm("sales_registration")} />
          </section>

          <section className={`space-y-6 ${step === 2 ? "block" : "hidden"}`}>
            <LegalRepresentative handleLegalRepresentativeChange={handleSectionForm("legal_representative")} />
          </section>

          <section className={`space-y-6 ${step === 3 ? "block" : "hidden"}`}>
            <InstallationAddress handleInstallationAddressChange={handleSectionForm("installation_address")} />
          </section>

          <section className={`space-y-6 ${step === 4 ? "block" : "hidden"}`}>
            <PackageSelection handlePackageSelectionChange={handleSectionForm("package_selection")} />
          </section>

          <section className={`space-y-6 ${step === 5 ? "block" : "hidden"}`}>
            <Documents handleDocumentsChange={handleSectionForm("documents")} />
          </section>

          <div className="flex justify-between">
            {step > 1 && ( <button type="button" onClick={prevStep} className="btn btn-accent mr-auto rounded-xl">Anterior</button> )}
            {step < 5 && ( <button type="button" onClick={nextStep} className="btn btn-accent ml-auto rounded-xl" >Siguiente</button> )}
            <button type="submit" className={`btn btn-accent ml-auto rounded-xl ${ step != 5 && 'hidden'}`}>Enviar</button>
          </div>

        </form>
  );
};