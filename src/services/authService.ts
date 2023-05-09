import { createUser, loginUser } from "../api/auth";
import { User } from "../types/types";
import jwt_decode from "jwt-decode";

export const signupUser = async (data: User) => {
  await createUser(data);
};

export const signinUser = async (data: User) => {
  try {
    const res = await loginUser(data);
    localStorage.setItem("token", res.token);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTokenData = (): { user_id: string } | null => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    const decodedToken = jwt_decode<{ user_id: string }>(accessToken || "");

    const { user_id } = decodedToken;
    return { user_id };
  }

  return null;
};
