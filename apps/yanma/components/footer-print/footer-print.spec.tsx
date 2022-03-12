import { render } from '@testing-library/react';

import FooterPrint from './footer-print';

describe('FooterPrint', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterPrint />);
    expect(baseElement).toBeTruthy();
  });
});
