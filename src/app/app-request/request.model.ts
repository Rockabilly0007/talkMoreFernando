export class RequestModel{
    _id: string;
    id: number;
    empresa: string;
    cnpj: number;
    plano: string;
    tarifa: number;
    minutos: number;
    vplano: number;
    dateAdesao: string;
    dateEmissao: Date;
}

export class RequestCreate{
    id: any;
    empresa: string;
    cnpj: any;
    plano: string;
    tarifa: any;
    minutos: any;
    vplano: any;
    dateAdesao: any;
    dateEmissao: any;
}

export class ResponseCreate{
    id: any;
    empresa: string;
    cnpj: any;
    plano: string;
    tarifa: any;
    minutos: any;
    vplano: any;
    dateAdesao: any;
    dateEmissao: any;
}

