import sentences from '../data/sentences.json';

export default () => {
  const length = sentences.length;
  const index = Math.floor(Math.random() * length)
  const message = sentences[index]

  return message;
}