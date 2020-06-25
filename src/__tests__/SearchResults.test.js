import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("App", () => {
  const { asFragment } = render(<SearchResults/>);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});