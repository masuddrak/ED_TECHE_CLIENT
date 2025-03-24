import axios from "../api";

export const signUp = async (email: string, password: string) => {
  const response = await axios.post('auth/signup', { email, password });
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await axios.post('/signin', { email, password });
  return response.data;
};

export const signOut = async (token: string) => {
  const response = await axios.post('auth/signout', {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const changePassword = async (token: string, oldPassword: string, newPassword: string) => {
  const response = await axios.patch('auth/change-password', { oldPassword, newPassword }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const sendVerificationCode = async (email: string) => {
  const response = await axios.patch('auth/send-verification', { email });
  return response.data;
};

export const verifyVerificationCode = async (email: string, providedCode: string) => {
  console.log(email,providedCode)
  const response = await axios.patch('auth/verification-code-verify', { email, providedCode });
  return response.data;
};
