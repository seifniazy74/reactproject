import logo from './logo.svg';
import './App.css';
import MyApp from './tasks/task1/task1';
import Products from './tasks/task2/task2';
import { Component } from 'react';
import { ContextProvider } from './tasks/task3/MainContext';
import Counter from './tasks/task4/task4';
import Greeting from './tasks/task5/task5';

import CounterWithInterval from './tasks/task6/task6';

import MousePositionAndClickTracker from './tasks/task7/MousePositionAndClickTracker';
import WindowResizeListener from './tasks/task7/WindowResizeListener';
import Comments from './tasks/task8/Comments';
import SearchCommentsByPostId from './tasks/task9/SearchCommentsByPostId';
function App() {
  return (
    <div className="App">
{/* <MyApp/> */}

{/* -------------- */}
{/* <Products/>      */}
{/* ------------------- */}
{/* <ContextProvider value={'seif'}
      >
        <ComponentOne /> 
      </ContextProvider> */}


      {/* ------------------------- */}
      {/* <Counter/>   */}

      {/* ------------------- */}
      {/* <Greeting/> */}
      {/* ---------------- */}
{/* <CounterWithInterval/> */}
{/* ---------------------- */}

{/* <WindowResizeListener/>
<MousePositionAndClickTracker/> */}
{/* -------------- */}

{/* <Comments/> */}
{/* ------------------ */}

{/* <SearchCommentsByPostId/> */}

      </div>
  );
}

export default App;

