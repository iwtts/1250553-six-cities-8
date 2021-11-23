import {datatype, internet} from 'faker';

import { User } from '../types/data';

const getMockUserAuthData = (): User => ({
  id: datatype.number(),
  isPro: datatype.boolean(),
  email: internet.email(),
  name: internet.userName(),
  avatarUrl: internet.avatar(),
  token: datatype.uuid(),
});

export { getMockUserAuthData };
