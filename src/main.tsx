import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import Quiz from './pages/Quiz.tsx';
import Score from './pages/Score.tsx';

const router = createBrowserRouter([
  {
    path: '/trivia-game/',
    element: <App />,
    children: [
      {
        path: '/trivia-game/',
        element: <LandingPage />,
      },
      {
        path: '/trivia-game/quiz',
        element: <Quiz />,
      },
      {
        path: '/trivia-game/score',
        element: <Score />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
