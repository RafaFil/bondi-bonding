import { BusStop } from 'src/app/modules/core/interfaces';

export const MOCKED_STOPS: BusStop[] = [
  {
    busstopId: '1', street1: 'a', street2: 'b',
    location: { coordinates: [ -57.1787819, -33.882528 ] }
  },
  {
    busstopId: '2', street1: 'a', street2: 'c',
    location: { coordinates: [ -46.1787819, -37.882528 ] }
  },
  {
    busstopId: '3', street1: 'd', street2: 'e',
    location: { coordinates: [ -56.3787819, -34.282528 ] }
  },
  {
    busstopId: '4', street1: 'f', street2: 'g',
    location: { coordinates: [ -56.1663526, -34.893825 ] }
  },
  {
    busstopId: '5', street1: 'd', street2: 'a',
    location: { coordinates: [ -56.181328, -34.882925 ] }
  }
];
