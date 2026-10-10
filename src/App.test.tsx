
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the application heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /mood tracking app/i }),
    ).toBeInTheDocument()
  })

  it('renders the application description', () => {
    render(<App />)

    expect(
      screen.getByText(/track your mood, sleep, and daily reflections/i),
    ).toBeInTheDocument()
  })
})
