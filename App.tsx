import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import { fetchFonts } from './utils';
import { store } from './state';

import AppContainer from './navigation';

enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
