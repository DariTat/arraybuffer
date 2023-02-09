import Character from '../character';
import Daemon from '../daemon';

test('проверка класса Character', () => {
  const received = new Character(2);
  const expected = {
    n: 2,
  };
  expect(received).toEqual(expected);
});
test('проверка ', () => {
  const received = new Daemon(2);
  const expected = {
    defence: 40,
    _stoned: 'Дурман',
    n: 2,
    _attack: 9,
  };
  expect(received).toEqual(expected);
});
