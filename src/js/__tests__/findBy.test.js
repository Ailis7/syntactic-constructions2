import findBy from '../findBy';

test('coincidence', () => {
  const finder = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  expect(results).toStrictEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});
