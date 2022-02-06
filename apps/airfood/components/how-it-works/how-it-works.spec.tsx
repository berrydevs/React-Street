import { render } from '@testing-library/react';

import HowItWorks from './how-it-works';

describe('HowItWorks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HowItWorks />);
    expect(baseElement).toBeTruthy();
  });
});
