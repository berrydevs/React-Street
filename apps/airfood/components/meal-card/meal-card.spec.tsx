import { render } from '@testing-library/react';

import MealCard from './meal-card';

describe('MealCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealCard />);
    expect(baseElement).toBeTruthy();
  });
});
