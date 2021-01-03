import React from 'react';
import { Taskbar } from './components/taskbar';
import { Button, GlobalStyle, Icon, ThemeProvider } from '@react95/core';
import icons from '@react95/icons';
import { Shortcut } from './components/shortcut';

const App = () => (
  <div>
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
    <Taskbar />
    <Shortcut/>
    <Shortcut/>
    <Shortcut/>
    </ThemeProvider>
    
  </div>
);

export default App;