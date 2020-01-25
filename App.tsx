import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import AppContainer from './navigation';
import { fetchFonts } from './utils';

enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;

  return <AppContainer />;
}
