import { act, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa o componente <App />', () => {
  test('Verifica se a página de Login tem um form com input e um botão escrito Entrar', async () => {
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

  test('Verifica se na página da carteira tem uma header com Email, Despesa e Moeda', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
  });
});
