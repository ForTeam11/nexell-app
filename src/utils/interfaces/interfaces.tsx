export interface ISalesRegistration {
    tipo_persona: string;
    razon_social: string;
    ruc: string;
    tipo_venta: string;
}

export interface ILegalRepresentative {
    nombre: string;
    apellido: string;
    dni: number;
    correo: string;
    numero_contacto: number;
    segundo_numero_contacto?: number;
    numero_whatsapp?: number;
    telefono_fijo?: number;
    departamento: string;
    provincia: string;
    distrito: string;
    direccion: string;
}

export interface IInstallationAddress {
    departamento_instalacion: string;
    provincia_instalacion: string;
    distrito_instalacion: string;
    tipo_vivienda: string;
    tipo_via_zona: string;
    nombre_via_zona: string;
    piso?: string;
    direccion_instalacion: string;
    referencia: string;
    codigo_plus: string;
}

export interface IPackageSelection {
    plan: string;
    servicios_adicionales: string[];
}

export interface IDocuments {
    contratos_firmados: File;
    vigencia_poder?: File;
    ficha_ruc: File;
    dni: File;
    documentos_adicionales?: File[];
}


export interface IFormData {
    sales_registration: ISalesRegistration;
    legal_representative: ILegalRepresentative;
    installation_address: IInstallationAddress;
    package_selection: IPackageSelection;
    documents: IDocuments;
    comentario_adicional?: string;
}

export interface IFormSections {
    sales_registration: Partial<ISalesRegistration>;
    legal_representative: Partial<ILegalRepresentative>;
    installation_address: Partial<IInstallationAddress>;
    package_selection: Partial<IPackageSelection>;
    documents: Partial<IDocuments>;
}