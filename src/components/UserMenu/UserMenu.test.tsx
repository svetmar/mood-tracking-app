import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { UserMenu } from './UserMenu';

describe('UserMenu', () => {
    it('opens dropdown after clicking the menu button', async() => {
        const user = userEvent.setup();
        render(<UserMenu />);

        await user.click(screen.getByRole('button'));

        expect(screen.getByRole('menu')).toBeInTheDocument()
    })
})