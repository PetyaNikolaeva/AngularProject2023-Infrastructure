import { IUser } from "../shared/interfaces/IUser";

export const setUserData = ({ _id, username, email, accessToken,logo, companyInfo }: IUser) => {
// запазваме
  const user = { _id, username, email, accessToken, logo, companyInfo  };
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUserData = () => {   // връща целия user обект
  const local = localStorage.getItem('user');
  return (
    local ? JSON.parse(local) : null
  );
}

export const clearUserData = () => {
  localStorage.removeItem('user');
}

