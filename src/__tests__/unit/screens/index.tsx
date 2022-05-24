
import * as React from 'react';
import { render } from '@testing-library/react-native'
import ProductInfo from '../../../screens/ProductInfo'
import ShoppingCart from '../../../screens/ShoppingCart'
import Home from '../../../screens/Home'

describe('Screens snapshots', () => {
  const product:any = {id: 1, title: 'title one', description: 'description', price: 10, image: 'image', category: 'category', rating: {}}

  it('Create home screen snapshot', async () => {
    const tree = render(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Create ProductInfo screen snapshot', async () => {
    const route:any = {params: {id: '1'}}
    const tree = render(<ProductInfo route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Create ShoppingCart screen snapshot', async () => {
    const tree = render(<ShoppingCart/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

