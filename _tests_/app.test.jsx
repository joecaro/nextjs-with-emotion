import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

it('renders homepage', () => {
  const { getByTestId } = render(<Home />)
  const heading = getByTestId("heading-test")
  expect(heading).toBeInTheDocument();
})