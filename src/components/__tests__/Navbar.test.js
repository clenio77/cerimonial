import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

function setupRouter({ locale = 'pt-BR', asPath = '/' } = {}) {
  useRouter.mockReturnValue({
    locale,
    asPath,
    push: jest.fn(),
  });
}

describe('Navbar', () => {
  it('renderiza os links principais', () => {
    setupRouter();
    render(<Navbar />);
    expect(screen.getByText(/Início/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Serviços/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfólio/i)).toBeInTheDocument();
    expect(screen.getByText(/Contato/i)).toBeInTheDocument();
  });

  it('possui seletor de idioma', () => {
    setupRouter();
    render(<Navbar />);
    const select = screen.getByLabelText(/Selecionar idioma/i);
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'en-US' } });
    expect(select.value).toBe('en-US');
  });
}); 