import { useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { AuthData } from '../../types/data';

import { AppRoute, AuthStatus, HeaderType } from '../../const';
import { changeUser } from '../../store/actions';
import { login } from '../../store/api-actions';

import Header from '../header/header';
import { getAuthStatus } from '../../store/user/selectors';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleAuth = (authData: AuthData) => {
    dispatch(login(authData));
    dispatch(changeUser(authData.login));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      handleAuth({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      history.push(AppRoute.Main);
    }
  };

  const authStatus = useSelector(getAuthStatus);

  if (authStatus === AuthStatus.Auth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header type={HeaderType.Login}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$"
                  title="password must contain at least one number and one letter"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
