import { takeLatest, call, all } from 'redux-saga/effects';

import { mealsSagas } from './mealsSagas';
import { MTypes, FTypes } from '../types';

export function* watchToggleFavorite() {
  yield takeLatest(MTypes.TOGGLE_FAVORITE_ASYNC, mealsSagas.toggleFavSaga);
}

export function* watchSetFilters() {
  yield takeLatest(FTypes.SET_FILTERS_ASYNC, mealsSagas.setFilters);
}

export default function* rootSaga() {
  yield all([call(watchToggleFavorite), call(watchSetFilters)]);
}
