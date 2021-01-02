import { UserActionType } from './user.types';

const setCurrentUser = (user) => {
   return {
      type: UserActionType.SET_CURRENT_USER,
      payload: user 
   }
}

export default setCurrentUser;