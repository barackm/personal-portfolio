import { AUTH_TOKEN } from '../utlis/constants';

const isWindow = typeof window !== 'undefined';

const storage = {
  get: (key) => {
    if (!isWindow) return null;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  set: (key, value) => {
    if (!isWindow) return;
    localStorage.setItem(key, JSON.stringify(value) || '');
  },

  remove: (key) => {
    if (!isWindow) return;
    localStorage.removeItem(key);
  },
  getAuthToken: () => {
    if (!isWindow) return null;
    return storage.get(AUTH_TOKEN);
  },
  setAuthToken: (token) => {
    if (!isWindow) return;
    storage.set(AUTH_TOKEN, token);
  },
  removeAuthToken: () => {
    if (!isWindow) return;
    storage.remove(AUTH_TOKEN);
  },
};

export default storage;
