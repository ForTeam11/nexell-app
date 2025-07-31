// SECTION 2

import { ILegalRepresentative } from "@/utils/interfaces/interfaces";
import { InputField } from "@/components/common/InputField";

export const LegalRepresentative = ({handleLegalRepresentativeChange} : {handleLegalRepresentativeChange: (name: keyof ILegalRepresentative, value: string) => void}) => {

    return (
        <>
          <h2 className="text-lg font-semibold text-gray-700 border-b m-0">Representante legal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[40rem] overflow-auto p-4">
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="nombre" label="Nombres" placeholder="PEPITO JUAN" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="apellido" label="Apellidos" placeholder="PEREZ GONZALES" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="dni" label="DNI" placeholder="71984851" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="correo" label="Correo electrónico" placeholder="pepito.flores@gmail.com" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="numero_contacto" label="Número de contacto" placeholder="987654321" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="segundo_numero_contacto" label="2do número de contacto" placeholder="987654321" onChange={handleLegalRepresentativeChange}/>
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="numero_whatsapp" label="Número de whatsapp" placeholder="987654321" onChange={handleLegalRepresentativeChange}/>
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="telefono_fijo" label="Teléfono fijo" placeholder="7654321" onChange={handleLegalRepresentativeChange}/>
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="departamento" label="Departamento" placeholder="LIMA" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="provincia" label="Provincia" placeholder="LIMA" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="distrito" label="Distrito" placeholder="SAN ISIDRO" onChange={handleLegalRepresentativeChange} required />
            <InputField<ILegalRepresentative> fieldType="basic" type= "text" name="direccion" label="Dirección" placeholder="AV. PAREDES 123" onChange={handleLegalRepresentativeChange} required />
          </div>
        </>
    );
}