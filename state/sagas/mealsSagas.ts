import { put } from 'redux-saga/effects';

import { mealActions } from '../actions';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* toggleFavSaga(action) {
  console.log('Ahoy from saga o/');
  yield delay(4000);
  yield put(mealActions.toggleFavorite(action.id));
}

export const mealsSagas = {
  toggleFavSaga,
};
