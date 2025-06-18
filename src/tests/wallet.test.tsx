import { act, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockData from './helpers/mockData';

const MOCK_DATA = {
  mockData,
};

const MOCK_RESPONSE = {
  ok: true,
  status: 200,
  json: async () => MOCK_DATA,
} as Response;

const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

test('Testa a página de Login', async () => {
  const { user } = renderWithRouterAndRedux(<App />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const btnEntrar = screen.getByRole('button', { name: 'Entrar' });
  expect(btnEntrar).toBeDisabled();

  await act(async () => {
    await user.type(emailInput, 'teste@teste.com');
    await user.type(passwordInput, '1234567');
    await user.click(btnEntrar);
  });

  expect(btnEntrar).toBeEnabled();
  expect(screen.getByText('Email:')).toBeInTheDocument();
});

describe('Testa a página da Carteira', () => {
  test('Verifica se na página da carteira tem uma header com Email, Despesa e Moeda', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
  });

  test('Verificando requisição à API', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
  });
});
