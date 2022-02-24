import { render } from '@testing-library/react';

import FeaturedIn from './featured-in';

describe('FeaturedIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedIn />);
    expect(baseElement).toBeTruthy();
  });
});
