import Daemon from '../daemon';

test('getAttack класса Daeman', () => {
  const attack = new Daemon();
  const received = attack.getAttack(2);
  const expected = 9;
  expect(received).toBe(expected);
});
test('getStoned класса Daemon', () => {
  const stoned = new Daemon();
  stoned.getAttack(2);
  const received = stoned.getStoned(2);
  const expected = 4;
  expect(received).toBe(expected);
});
