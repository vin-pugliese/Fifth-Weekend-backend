import { Cliente } from "./Cliente";

export interface Spettacolo {


    id: String;
    nome_spettacolo : String;
    n_prenotazioni : number;
    prenotazioni : Cliente[];
    attesa: Cliente[];

}