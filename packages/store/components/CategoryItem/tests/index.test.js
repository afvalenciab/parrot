import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CategoryItem from 'components/CategoryItem';

describe('<CategoryItem />', () => {
  const props = {
    category: { uuid: '123', name: 'Category 1', totalProducts: '2' },
    onSelectCategory: jest.fn(),
    isActive: true,
  };

  it('Should render correctly', () => {
    const { container } = render(<CategoryItem {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render the category-123 when the component is mounted', () => {
    const { getByTestId } = render(<CategoryItem {...props} />);

    const category = getByTestId('category-123');

    expect(category).toBeInTheDocument();
  });

  it('Should call the function onSelectCategory when the category-123 is selected', () => {
    const { getByTestId } = render(<CategoryItem {...props} />);

    const btnCategory = getByTestId('btn-123');

    fireEvent.click(btnCategory);

    expect(props.onSelectCategory).toHaveBeenCalled();
  });
});
