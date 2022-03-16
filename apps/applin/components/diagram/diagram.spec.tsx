import { render } from '@testing-library/react';

import Diagram from './diagram';

describe('Diagram', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Diagram />);
    expect(baseElement).toBeTruthy();
  });
});
