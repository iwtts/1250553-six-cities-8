import {datatype, internet} from 'faker';

import { DataUser, User } from '../types/data';

const getMockUserAuthData = (): User => ({
  id: datatype.number(),
  isPro: datatype.boolean(),
  email: internet.email(),
  name: internet.userName(),
  avatarUrl: internet.avatar(),
  token: datatype.uuid(),
});

const getMockDataUserAuthData = (): DataUser => ({
  'id': datatype.number(),
  'is_pro': datatype.boolean(),
  'email': internet.email(),
  'name': internet.userName(),
  'avatar_url': internet.avatar(),
  'token': datatype.uuid(),
});

export { getMockUserAuthData, getMockDataUserAuthData };
