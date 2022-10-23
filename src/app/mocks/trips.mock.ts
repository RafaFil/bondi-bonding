import { Trip } from "../interfaces";

export const MOCKED_TRIPS: Trip[] = [
  {
    tripId: '123',
    user: { uid: '1', username: 'thehughjack', name: 'Hugh Jackman', iconUrl: 'https://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg' },
    from: 'Aguada',
    to: 'Portones Shopping',
    description: 'Quiero conocer otros jackman',
    busLine: {
      line: '546',
      destination: 'Portones',
      lineId: '1',
    },
    schedule: '15:30',
    stop: {
      busstopId: 3, street1: 'd', street2: 'e',
      location: { coordinates: [ -56.3787819, -34.282528 ] }
    }
  },
  {
    tripId: '1234',
    user: { uid: '1', username: 'robdown', name: 'Robert Downey Jr.', iconUrl: 'https://i.pinimg.com/736x/3f/bb/b0/3fbbb01666d7c285bb6a2db85b8d6967.jpg' },
    from: 'La Comercial',
    to: 'Punta Carretas Shoppiong',
    description: 'Voy a ver Avengers: Endgame',
    busLine: {
      line: '191',
      destination: 'Punta Carretas',
      lineId: '2',
    },
    schedule: '17:30',
    stop: {
      busstopId: 1, street1: 'a', street2: 'b',
      location: { coordinates: [ -57.1787819, -33.882528 ] }
    }
  },
  {
    tripId: '1235',
    user: { uid: '1', username: 'therealjenan', name: 'Jennifer Aniston', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012.jpg/640px-JenniferAnistonHWoFFeb2012.jpg' },
    from: 'Tres Cruces',
    to: 'Intendencia de Montevideo',
    description: 'Quiero compañía para la ida al trabajo',
    busLine: {
      line: '191',
      destination: 'Punta Carretas',
      lineId: '2',
    },
    schedule: '11:00',
    stop: {
      busstopId: 4, street1: 'f', street2: 'g',
      location: { coordinates: [ -56.1663526, -34.893825 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line:
       '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
  {
    tripId: '1236',
    user: { uid: '1', username: 'camwil', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    from: 'Mi casa',
    to: 'El trabajo',
    description: 'Quiero conversar en el viaje',
    busLine: {
      line: '199',
      destination: 'Punta Carretas',
      lineId: '3',
    },
    schedule: '09:00',
    stop: {
      busstopId: 5, street1: 'd', street2: 'a',
      location: { coordinates: [ -56.181328, -34.882925 ] }
    }
  },
];
