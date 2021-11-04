import React from 'react';
import { render } from '@testing-library/react';

import useDispatcherStores from 'providers/Stores/useDispatcher';
import ProductItem from 'components/ProductItem';

jest.mock('providers/Stores/useDispatcher');

describe('<ProductItem />', () => {
  const props = {
    product: {
      uuid: '123',
      availability: 'AVAILABLE',
      imageUrl: 'https://iamge.com',
      name: 'Test 1',
      price: '200',
    },
  };

  const defaultUseDispatcherStores = { editProduct: jest.fn() };

  beforeEach(() => {
    useDispatcherStores.mockReturnValue(defaultUseDispatcherStores);
  });

  it('Should render correctly', () => {
    const { container } = render(<ProductItem {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render the card-123 when the component is mounted', () => {
    const { getByTestId } = render(<ProductItem {...props} />);

    const card = getByTestId('card-123');

    expect(card).toBeInTheDocument();
  });
});
