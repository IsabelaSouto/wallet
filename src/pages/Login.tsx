import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmailType, actionUser } from '../redux/actions';
import { UserType } from '../services/types';

function Login() {
  const [isUser, setIsUser] = useState<UserType>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password: string) => password.length >= 6;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const actionEmail: EmailType = actionUser(isUser.email);
    dispatch(actionEmail);

    navigate('/carteira');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIsUser({
      ...isUser,
      [name]: value,
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="email"
        onChange={ handleChange }
        value={ isUser.email }
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={ handleChange }
        data-testid="password-input"
        placeholder="Senha"
      />
      <button
        type="submit"
        disabled={ !(isEmailValid(isUser.email) && isPasswordValid(isUser.password)) }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
