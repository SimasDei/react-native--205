import { takeLatest, call } from 'redux-saga/effects';

import { mealsSagas } from './mealsSagas';
import { MTypes } from '../types';

export function* watchToggleFavorite() {
  yield takeLatest(MTypes.TOGGLE_FAVORITE_ASYNC, mealsSagas.toggleFavSaga);
}

export default function* rootSaga() {
  yield call(watchToggleFavorite);
}
