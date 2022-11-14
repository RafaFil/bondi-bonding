import { Chat, ChatMessage, SendMessageResult } from "../interfaces";

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
  permanent: true
}

export const MOCKED_SEND_MESSAGE_RESULT: SendMessageResult = {
  sent: true,
  messageId: '456'
}
