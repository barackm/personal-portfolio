import http from '../services/httpService';
import { API_END_POINT } from '../utlis/constants';

const url = `${API_END_POINT}projectCategories`;

export const getProjectCategoriesAsync = async () => {
  return http.get(url);
};
