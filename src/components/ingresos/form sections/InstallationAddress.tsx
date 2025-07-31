// SECTION 3

import { IInstallationAddress } from "@/utils/interfaces/interfaces";
import { InputField } from "@/components/common/InputField";

export const InstallationAddress = ({handleInstallationAddressChange} : {handleInstallationAddressChange: (name: keyof IInstallationAddress, value: string) => void}) => {

    return (
        <>
            <h2 className="text-lg font-semibold text-gray-700 border-b m-0">Dirección de instalación</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[40rem] overflow-auto p-4">
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="departamento_instalacion" label="Departamento - instalación" placeholder="LIMA" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="provincia_instalacion" label="Provincia - instalación" placeholder="LIMA" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="distrito_instalacion" label="Distrito - instalación" placeholder="SAN ISIDRO" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="secondary" type="radio" name="tipo_vivienda" label="Tipo de vivienda" onChange={handleInstallationAddressChange} options={[
                    { id: "casa", value: "casa", label: "Casa" },
                    { id: "edificio", value: "edificio", label: "Edificio" },
                ]}/>
                <InputField<IInstallationAddress> fieldType="secondary" type="radio" name="tipo_via_zona" label="Tipo vía o zona" onChange={handleInstallationAddressChange} options={[
                    { id: "vía", value: "vía", label: "Vía" },
                    { id: "zona", value: "zona", label: "Zona" },
                ]}/>
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="nombre_via_zona" label="Nombre de vía o zona" placeholder="AV. PASEO DE LA REPÚBLICA" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="piso" label="Piso" placeholder="2" onChange={handleInstallationAddressChange}/>
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="direccion_instalacion" label="Dirección - instalación" placeholder="AV. PASEP DE LA REPÚBLICA 3245, SAN ISIDRO 15047" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="referencia" label="Referencia" placeholder="REFERENCIA" onChange={handleInstallationAddressChange} required />
                <InputField<IInstallationAddress> fieldType="basic" type="text" name="codigo_plus" label="Código plus" placeholder="WX3G+G8 San Isidro" onChange={handleInstallationAddressChange} required />
            </div>
        </>
    )
}