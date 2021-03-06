import Character from '../src/app';

test('level up', () => {
  const char = new Character();
  char.levelUp();
  const recieved = [char.level, char.attack, char.defence, char.health];
  const expected = [2, 48, 12, 100];
  expect(recieved).toEqual(expected);
});

test('character is dead', () => {
  function recieved() {
    const char = new Character();
    char.health = 0;
    char.levelUp();
  }
  expect(recieved).toThrow('A dead character cannot level up');
});
