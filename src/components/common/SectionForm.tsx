interface SectionFormProps<T> {
    label: string,
}

export const SectionForm = <T,>( props : SectionFormProps<T>) => {
    
    return (
        <>
            <div className="text-lg font-semibold text-gray-700 border-b m-0">{props.label}</div>
            <div className="grid grid-cols-1 gap-6 max-h-[40rem] overflow-auto p-4">

            </div>
        </>
    )
}

<SectionForm label="Registro de venta" />