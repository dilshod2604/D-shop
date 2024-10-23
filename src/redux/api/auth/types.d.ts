import { IMe, IUser } from "@/types/sheme";

namespace AUTH {
  type GetSignUpResponse = void;
  type GetSignUpRequest = IUser;

  type GetSignInResponse = void;
  type GetSignInRequest = { email: string; password: string };

  type GetMeResponse = IMe;
  type GetMeRequest = void;
}
