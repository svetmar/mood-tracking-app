import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders default avatar', () => {
    render(<Avatar />)

    // проверяем, что отображается DefaultAvatar
    expect(screen.getByRole('img', {name: /default avatar/i})).toBeInTheDocument();
  })

  it('renders user avatar', () => {
    render(<Avatar src="/avatar.jpg" alt="User avatar" />)

    // проверяем, что отображается img
    expect(screen.getByRole('img', {name: /user avatar/i})).toBeInTheDocument();
  })
})