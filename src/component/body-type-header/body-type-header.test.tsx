import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import BodyTypeHeader from "./body-type-header";


test("check rendering", () => {
  render(<BodyTypeHeader/>);
});