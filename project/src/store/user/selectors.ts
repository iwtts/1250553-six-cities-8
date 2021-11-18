import { NameSpace } from '../../const';

import { State } from '../../types/state';
import { AuthStatus } from '../../const';

const getUserEmail = (state: State): string | undefined => state[NameSpace.User].authData?.email;
const getUserAvatarUrl = (state: State): string | undefined => state[NameSpace.User].authData?.avatarUrl;
const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;

export { getUserEmail, getAuthStatus, getUserAvatarUrl };
