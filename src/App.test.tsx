import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it("renders without creashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div);
});

test("renders header", () => {
  render(<App/>);
  const headerEl = screen.getByText("MY PROFILE");
  expect(headerEl).toBeInTheDocument();
});