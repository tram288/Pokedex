import React from 'react';
import { shallow } from 'enzyme';
import PokemonCardV2 from '../PokemonCardV2';

const pokemon = {
  name: 'matthew',
}
const setup = () => shallow(<PokemonCardV2 pokemon={pokemon}/>);

test('renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper.find('.PokeCard').length).toBe(1);
});

test('renders pokemon name with first letter being Capital', () => {
  const wrapper = setup();

  expect(wrapper.find('.pokemonName').text()).toBe('Matthew');
});
