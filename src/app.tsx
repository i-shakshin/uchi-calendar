import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Calendar, Header, Layout } from './components';
import { theme } from './constants';
import { useCalendar } from './hooks';

function App() {
  const calendar = useCalendar();
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header onAddEvent={(date) => calendar.addEvent(date)} />
        <Calendar {...calendar} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
