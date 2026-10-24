import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
    it('renders mood logging button', () => {
        render(<BrowserRouter><Header isMoodLogged={false}/></BrowserRouter>);

        expect(screen.getByRole('button', {name: /log today's mood/i})).toBeInTheDocument();
    });

    it('does not render mood logging button', () => {
        render(<BrowserRouter><Header isMoodLogged={true}/></BrowserRouter>);

        expect(screen.queryByRole('button', {name: /log today's mood/i})).not.toBeInTheDocument();
    });
})