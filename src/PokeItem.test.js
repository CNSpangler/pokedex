import React from 'react';
import renderer from 'react-test-renderer';
import PokeItem from './PokeItem';

it('renders component correctly', () => {
    const tree = renderer
        .create(<PokeItem />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});