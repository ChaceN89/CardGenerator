import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CardStatsProvider } from './card-logic/CardStats';
import Main from './Main';

function App() {
  return (
    <CardStatsProvider>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-4">
        <Toaster />
        <Main />
      </div>
    </CardStatsProvider>
  );
}

export default App;
