import { render } from '@testing-library/react';

import Answers from './answers';

describe('Answers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Answers />);
    expect(baseElement).toBeTruthy();
  });
});
