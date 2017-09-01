import { Restaurante } from '../../shared/models/restaurante';

export class Prato {
    id: number;
    nome: string;
    restauranteId: number;
    restaurante: Restaurante;
    preco: number;
}
