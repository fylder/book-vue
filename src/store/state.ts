import UserModel from "./models/userModel";

interface UserState {
  login: boolean;
  user: UserModel;
}

const UserState = {
  login: false,
  user: new UserModel()
};

export default UserState;
