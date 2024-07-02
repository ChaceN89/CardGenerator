import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalCardStatsProvider } from './card-logic/CardStats';
import Main from './Main';

function App() {
  return (
    <GlobalCardStatsProvider>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-4">
        <Toaster />
        <Main />
      </div>
    </GlobalCardStatsProvider>
  );
}

export default App;
