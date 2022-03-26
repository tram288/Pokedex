import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import PokemonList from '../PokemonList';
import PokemonCardV2 from '../PokemonCardV2';

const setup = () => shallow(<PokemonList />);

describe('PokemonList', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('.PokemonList').length).toBe(1);
  });
  
  test('renders a PokemonCardV2 for each pokemon', () => {
    const wrapper = setup();
    wrapper.setState({ pokemons: [{ name: 'pikachu' }, { name: 'bulbasaur' }] });
    expect(wrapper.find(PokemonCardV2).length).toBe(2);
  });
  
  test('renders load more button', () => {
    const wrapper = setup();
    wrapper.setState({ pokemons: [{ name: 'pikachu' }, { name: 'bulbasaur' }] });
    expect(wrapper.find('.loadMore').length).toBe(1);
  });
  
  test('clicking load more adds to pokemon state and increase offset by 20', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          results: [{ name: 'pidgey' }, { name: 'charmander' }],
        },
      });
    });
    const wrapper = setup().instance();
    await wrapper.loadMorePokemon();
    expect(wrapper.state).toEqual({ pokemons: [{ name: 'pidgey' }, { name: 'charmander' }], offset: 20 });
  });
});