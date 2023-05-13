export type FormValues = {
  email: string;
  password: string;
  username: string;
  phone: string;
  birthday: string;
  avatar_url: string;
  about: string;
};

export type User = {
  user_id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar_url: string;
  bio: string;
  token: string;
};
