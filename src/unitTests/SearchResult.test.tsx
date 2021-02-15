import React from 'react';
import { render } from "@testing-library/react";
import { SearchResult } from '../components/SearchResult';
import { ditto } from '../testing/data/ditto';

test("Show Pokemon Name", () => {
  const { queryByText } = render(<SearchResult pokemon={ditto} />);
  expect(queryByText(ditto.name.toUpperCase())).toBeInTheDocument();
});

test("Show Pokemon Image", () => {
  const { queryByAltText } = render(<SearchResult pokemon={ditto} />);
  expect(queryByAltText(ditto.name)).toBeInTheDocument();
});

test("Show Pokemon Abilities", () => {
  const { queryByText } = render(<SearchResult pokemon={ditto} />);
  expect(queryByText(ditto.abilities[0].ability.name)).toBeInTheDocument();
});

test("Pokemon Not Found",() => {
  const { queryByText } = render(<SearchResult pokemon={null} />);
  expect(queryByText("No Pokemon Found"));
})
