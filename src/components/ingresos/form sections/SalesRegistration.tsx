// SECTION 1

import { ISalesRegistration } from "@/utils/interfaces/interfaces";
import { InputField } from "@/components/common/InputField";

export const SalesRegistration = ({handleSaleRegisterChange} : {handleSaleRegisterChange: (name: keyof ISalesRegistration, value: string) => void}) => {
    
    return (
        <>
            <h2 className="text-lg font-semibold text-gray-700 border-b m-0">Registro de Venta</h2>

            <div className="grid grid-cols-1 gap-6 max-h-[40rem] overflow-auto p-4">
                <InputField<ISalesRegistration> fieldType="secondary" type="radio" name="tipo_persona" label="Tipo de persona" onChange={handleSaleRegisterChange} options={[
                    { id: "natural", value: "natural", label: "Natural" }, 
                    { id: "juridica", value: "juridica", label: "Jurídica" }, 
                ]} />
                <InputField<ISalesRegistration> fieldType="basic" type="text" name="razon_social" label="Razón social" placeholder="PEPITO S.A.C." onChange={handleSaleRegisterChange} required />
                <InputField<ISalesRegistration> fieldType="basic" type="text" name="ruc" label="RUC" placeholder="20719848519" onChange={handleSaleRegisterChange} required />
                <InputField<ISalesRegistration> fieldType="secondary" type="radio" name="tipo_venta" label="Tipo de venta" onChange={handleSaleRegisterChange} options={[
                    { id: "alta_nueva", value: "alta_nueva", label: "Alta Nueva" },
                    { id: "portabilidad", value: "portabilidad", label: "Portabilidad" }
                ]} />
            </div>
        </>
    );
}