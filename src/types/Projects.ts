import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { Client } from "./Clients";

type Project = {
    id? : number,
    nomeProjeto: string;
    orcamento: number;
    tarifaMensal: string;
    tempoRetornoInvestimentoMeses?: number;
    economiaMensal? : number;
    retornoEmAnos? : string;
    economia10Anos? : number;
    impactoAmbiental? : string;
    co2Evitado10Anos? : number;
    cliente? : Client;
  };
    
  export { Project };