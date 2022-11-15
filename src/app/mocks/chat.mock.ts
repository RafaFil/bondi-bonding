import { Chat, ChatMessage, ChatsInfo, SendMessageResult } from "../interfaces";

const MOCKED_MESSAGES : ChatMessage[] = [
  {
    content: {
      type: 'text',
      value: "When we were young the future was so brightso brightso brightso brightso brightso brightso brightso brightso brightso bright"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
  {
    content: {
      type: 'text',
      value: "The old neighborhood was so alive"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
  {
    content: {
      type: 'text',
      value: "And every kid on the whole damn street"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
  {
    content: {
      type: 'text',
      value: "When we were young the future was so bright"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
  {
    content: {
      type: 'text',
      value: "The old neighborhood was so alive"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
  {
    content: {
      type: 'text',
      value: "And every kid on the whole damn street"
    },
    fromId: '1',
    toId: '2'
  },
  {
    content: {
      type: 'text',
      value: "woah-oh"
    },
    fromId: '2',
    toId: '1'
  },
];

export const MOCKED_CHAT: Chat = {
  id: '123',
  chatMessages: MOCKED_MESSAGES,
  permanent: true,
  from: {
    name: 'Juan Carlos',
    username: 'juancarlos',
    iconUrl: 'https://phantom-telva.unidadeditorial.es/99da4ecff6d748daf9a16d16aa868bef/crop/0x0/2038x2880/resize/828/f/jpg/assets/multimedia/imagenes/2021/05/06/16202888369890.jpg',
    uid: '1'
  },
  to: {
    name: 'María Carmen',
    username: 'maricar',
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BNDkyODg4ZjMtODY4MC00NWM5LTk4NjgtNDI3NDlkNWJmY2QyXkEyXkFqcGdeQXVyMDczOTA3Nw@@._V1_UY264_CR43,0,178,264_AL_.jpg',
    uid: '2'
  }
}

export const MOCKED_CHATS_INFO: ChatsInfo = {
  permanentChats: [ MOCKED_CHAT ],
  temporalChats: []
}

export const MOCKED_SEND_MESSAGE_RESULT: SendMessageResult = {
  sent: true,
  messageId: '456'
}
