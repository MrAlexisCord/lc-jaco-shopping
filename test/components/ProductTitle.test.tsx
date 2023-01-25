import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';


describe('TESTs on ProductTitle', () => {
    test('***   Debe mostrar el component con el título personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('***   Debe mostrar el component con el título del producto (from context)', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>{
                () => (<ProductTitle />)
            }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})