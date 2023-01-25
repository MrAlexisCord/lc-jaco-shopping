import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('TESTs on ProductImage', () => {

    test('***   Debe mostrar la imagen personallizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='https://hola.png' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('***   Debe mostrar el component con la imagen del producto (from context)', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>{
                () => (<ProductImage />)
            }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})
