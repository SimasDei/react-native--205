import { put } from 'redux-saga/effects';

import { mealActions, filterActions } from '../actions';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* toggleFavSaga(action) {
  yield delay(1500);
  yield put(mealActions.toggleFavorite(action.id));
}

export function* setFilters(action) {
  yield put(filterActions.setFilters(action.filters));
}

export const mealsSagas = {
  toggleFavSaga,
  setFilters,
};
