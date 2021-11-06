const AUTH_TOKEN_KEY_NAME = 'six-sities-token';

type Token = string;

const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = (token: Token): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export type { Token };
export {
  getToken,
  saveToken,
  dropToken
};
