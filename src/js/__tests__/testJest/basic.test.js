import Inspector from '../../Inspector';
import { page } from '../../utils';

test('Объект должен возвращать строку', () => {
  const trello = new Inspector(page);
  trello.clearStorage();
  const lenght = localStorage.length;
  expect(lenght).toBe(0);
});
