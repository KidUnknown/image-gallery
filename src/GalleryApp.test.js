import React from 'react';
import { render } from '@testing-library/react';
import GalleryApp from './GalleryApp';

test('renders learn react link', () => {
  const { getByText } = render(<GalleryApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
