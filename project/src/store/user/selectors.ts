import { NameSpace } from '../../const';

import { State } from '../../types/state';
import { AuthStatus } from '../../const';

const getUserEmail = (state: State): string => state[NameSpace.User].currentUserEmail;
const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;

export { getUserEmail, getAuthStatus };
