import React from 'react';
import renderer from 'react-test-renderer';
import PokeList from './PokeList';

PokeList('renders component correctly', () => {
    const tree = renderer
        .create(<PokeList />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});