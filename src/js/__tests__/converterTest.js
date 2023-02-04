import ArrayBufferConverter, { getBuffer } from '../converter';

test('проверка класса ArrayBufferConverter', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  const received = converter.load(buffer); 
  expect(typeof received).toBe('string');
});
