enum AppRoute {
  Main = '/',
  SignIn  = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export { AppRoute, AuthStatus };
