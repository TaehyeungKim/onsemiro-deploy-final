import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name) => cookies.get(name);

export const setCookie = (name, value) =>
  cookies.set(name, value, { path: "/" });

export const removeCookie = (name) => cookies.remove(name);

export const getAllCookies = () => cookies.getAll();
