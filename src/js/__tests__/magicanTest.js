import Magician from '../magician';

test('getAttack класса Magician', () => {
  const attack = new Magician();
  const received = attack.getAttack(2);
  const expected = 9;
  expect(received).toBe(expected);
});
test('getStoned класса Magician', () => {
  const stoned = new Magician();
  stoned.getAttack(2);
  const received = stoned.getStoned(2);
  const expected = 4;
  expect(received).toBe(expected);
});
