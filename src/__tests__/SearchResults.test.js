import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("SearchResults", () => {
  
  const { asFragment } = render(<SearchResults/>);

  it('renders correctly to match snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct amount props", () => {
    const { getByTestId } = render(<SearchResults results="mockResults" />)

    expect(getByTestId("SearchResults")).toHaveClass("SearchResults");
    expect(getByTestId("card-image")).toHaveClass("SearchResults");
  });
});