// sSECTION 4

import { IPackageSelection } from "@/utils/interfaces/interfaces";
import { InputField } from "@/components/common/InputField";

export const PackageSelection = ({handlePackageSelectionChange} : {handlePackageSelectionChange: (name: keyof IPackageSelection, value: string) => void}) => {

    return (
        <>
            <h2 className="text-lg font-semibold text-gray-700 border-b m-0">Selección de paquetes</h2>

            <div className="grid grid-cols-1 gap-6 max-h-[40rem] overflow-auto p-4">
                <InputField<IPackageSelection> fieldType="secondary" type="radio" name="plan" label="Planes" onChange={handlePackageSelectionChange} options={[
                    { id: "internet_100", value: "internet_100", label: "Wow internet 100 mbps" },
                    { id: "internet_200", value: "internet_200", label: "Wow internet 200 mbps" },
                    { id: "internet_1000", value: "internet_1000", label: "Wow internet 1000 mbps" },
                    { id: "internet_100_telefonia", value: "internet_100_telefonia", label: "Wow internet 100 mbps + telefonía" },
                    { id: "internet_200_telefonia", value: "internet_200_telefonia", label: "Wow internet 200 mbps + telefonía" },
                    { id: "internet_1000_telefonia", value: "internet_1000_telefonia", label: "Wow internet 1000 mbps + telefonía" },
                ]}/>
                <InputField<IPackageSelection> fieldType="secondary" type="checkbox" name="servicios_adicionales" label="Servicios adicionales" onChange={handlePackageSelectionChange} options={[
                    { id: "no_aplica", value: "no_aplica", label: "NO APLICA" },
                    { id: "dgo_basico", value: "dgo_basico", label: "DGO Básico" },
                    { id: "dgo_basico_liga", value: "dgo_basico_liga", label: "DGO Básico + Liga 1" },
                    { id: "dgo_full", value: "dgo_full", label: "DGO FULL" },
                    { id: "dgo_tv_dvsport", value: "dgo_tv_dvsport", label: "DGO TV + DVSPORT" },
                    { id: "dgo_tv_liga", value: "dgo_tv_liga", label: "DGO TV + LIGA 1" },
                    { id: "dgo_tv_liga_dvsport", value: "dgo_tv_liga_dvsport", label: "DGO TV + LIGA 1 + DVSPORT" },
                ]}/>
          </div>
        </>
    )
}