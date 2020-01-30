import { FTypes } from '../types';

export const setFilters = filterSettings => {
  return { type: FTypes.SET_FILTERS, filters: filterSettings };
};

export const filterActions = {
  setFilters,
};
