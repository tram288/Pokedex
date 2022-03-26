import { getTypeColor } from '../types';

test('getTypeColor returns the right color for the type', () => {
  const fire = getTypeColor('fire');
  expect(fire).toBe('#ff4040');
})