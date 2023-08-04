import Board from '../models/Board';
import Cell from '../models/Cell';
import Player from '../models/Player';
import { normalizeAndFormatAmount } from '../utils/money';

export function createInitialBoard(): Board {
  return new Board([
    new Cell({
      id: '0',
      name: 'Aeroporto de Genebra',
      type: 'event'
    }),
    new Cell({
      id: '1',
      name: 'Equador',
      color: 'yellow',
      type: 'property',
      basePrice: 30,
      rents: [3, 6, 15, 30, 45, 60]
    }),
    new Cell({
      id: '2',
      name: 'Argentina',
      color: 'yellow',
      type: 'property',
      basePrice: 50,
      rents: [5, 10, 25, 50, 75, 100]
    }),
    new Cell({
      id: '3',
      name: 'Venezuela',
      color: 'yellow',
      type: 'property',
      basePrice: 200,
      rents: [20, 40, 100, 200, 300, 400]
    }),
    new Cell({
      id: '4',
      name: 'Arábia Saudita',
      color: 'green',
      type: 'property',
      basePrice: 1000,
      rents: [100, 200, 500, 1000, 1500, 2000]
    }),
    new Cell({
      id: '5',
      name: 'Perdido no deserto',
      type: 'event'
    }),
    new Cell({
      id: '6',
      name: 'Irã',
      color: 'green',
      type: 'property',
      basePrice: 750,
      rents: [75, 150, 375, 750, 1125, 1500]
    }),
    new Cell({
      id: '7',
      name: 'Qatar',
      color: 'brown',
      type: 'property',
      basePrice: 250,
      rents: [25, 50, 150, 250, 350, 450]
    }),
    new Cell({
      id: '8',
      name: 'Bahrein',
      color: 'brown',
      type: 'property',
      basePrice: 120,
      rents: [12, 24, 60, 120, 180, 250]
    }),
    new Cell({
      id: '9',
      name: 'Telex',
      type: 'event',
    }),
    new Cell({
      id: '10',
      name: 'Vá à corte internacional',
      type: 'event',
    }),
    new Cell({
      id: '11',
      name: 'Omã',
      color: 'brown',
      type: 'property',
      basePrice: 100,
      rents: [10, 20, 50, 100, 150, 200]
    }),
    new Cell({
      id: '12',
      name: 'Jogue outra vez',
      type: 'event',
    }),
    new Cell({
      id: '13',
      name: 'Abu Dhabi',
      type: 'property',
      color: 'orange',
      basePrice: 100,
      rents: [10, 20, 50, 100, 150, 200]
    }),
    new Cell({
      id: '14',
      name: 'Dubai',
      type: 'property',
      color: 'orange',
      basePrice: 100,
      rents: [10, 20, 50, 100, 150, 200]
    }),
    new Cell({
      id: '15',
      name: 'Sharjah',
      type: 'property',
      color: 'orange',
      basePrice: 60,
      rents: [6, 12, 30, 60, 90, 120]
    }),
    new Cell({
      id: '16',
      name: 'Egito',
      type: 'property',
      color: 'purple',
      basePrice: 40,
      rents: [4, 8, 20, 40, 60, 80]
    }),
    new Cell({
      id: '17',
      name: 'Kuwait',
      type: 'property',
      color: 'purple',
      basePrice: 200,
      rents: [20, 40, 100, 200, 300, 400]
    }),
    new Cell({
      id: '18',
      name: 'Iraque',
      type: 'property',
      color: 'purple',
      basePrice: 150,
      rents: [15, 30, 75, 150, 200, 300]
    }),
    new Cell({
      id: '19',
      name: 'Telex',
      type: 'event',
    }),
    new Cell({
      id: '20',
      name: 'Corte internacional',
      type: 'event',
    }),
    new Cell({
      id: '21',
      name: 'Oásis no deserto',
      type: 'event',
    }),
    new Cell({
      id: '22',
      name: 'Gabão',
      type: 'property',
      color: 'lightsalmon',
      basePrice: 10,
      rents: [1, 2, 5, 10, 15, 20]
    }),
    new Cell({
      id: '23',
      name: 'Nigéria',
      type: 'property',
      color: 'lightsalmon',
      basePrice: 100,
      rents: [10, 20, 50, 100, 150, 200]
    }),
    new Cell({
      id: '24',
      name: 'Argélia',
      type: 'property',
      color: 'lightsalmon',
      basePrice: 80,
      rents: [8, 16, 40, 80, 120, 160]
    }),
    new Cell({
      id: '25',
      name: 'Líbia',
      type: 'property',
      color: 'lightsalmon',
      basePrice: 100,
      rents: [10, 20, 50, 100, 150, 200]
    }),
    new Cell({
      id: '26',
      name: 'Telex',
      type: 'event',
    }),
    new Cell({
      id: '27',
      name: 'BRASIL - Badejo',
      type: 'property',
      color: 'darkgreen',
      basePrice: 40,
      rents: [4, 8, 20, 40, 60, 80]
    }),
    new Cell({
      id: '28',
      name: 'BRASIL - Namorado',
      type: 'property',
      color: 'darkgreen',
      basePrice: 200,
      rents: [20, 40, 100, 200, 300, 400]
    }),
    new Cell({
      id: '29',
      name: 'BRASIL - Garoupa',
      type: 'property',
      color: 'darkgreen',
      basePrice: 80,
      rents: [8, 16, 40, 80, 120, 160]
    }),
    new Cell({
      id: '30',
      name: 'Assembleia da OPEP',
      type: 'event',
    }),
    new Cell({
      id: '31',
      name: 'Austrália',
      type: 'property',
      color: 'pink',
      basePrice: 30,
      rents: [3, 6, 15, 30, 45, 60]
    }),
    new Cell({
      id: '32',
      name: 'Brunei-Malásia',
      type: 'property',
      color: 'pink',
      basePrice: 80,
      rents: [8, 16, 40, 80, 120, 160]
    }),
    new Cell({
      id: '33',
      name: 'Indonésia',
      type: 'property',
      color: 'pink',
      basePrice: 60,
      rents: [6, 12, 30, 60, 90, 120]
    }),
    new Cell({
      id: '34',
      name: `Posto de abastecimento - Pague ${normalizeAndFormatAmount(100)}`,
      type: 'event',
    }),
    new Cell({
      id: '35',
      name: 'Vá à corte internacional',
      type: 'event',
    }),
    new Cell({
      id: '36',
      name: 'México',
      type: 'property',
      color: 'lightblue',
      basePrice: 40,
      rents: [4, 8, 20, 40, 60, 80]
    }),
    new Cell({
      id: '37',
      name: 'Telex',
      type: 'event',
    }),
    new Cell({
      id: '38',
      name: 'Canadá',
      type: 'property',
      color: 'lightblue',
      basePrice: 60,
      rents: [6, 12, 30, 60, 90, 120]
    }),
    new Cell({
      id: '39',
      name: 'Estados Unidos',
      type: 'property',
      color: 'lightblue',
      basePrice: 250,
      rents: [25, 50, 150, 250, 350, 450]
    }),
  ], [
    new Player('mlarrubia', 'Mateus', 2000),
  ])
}
