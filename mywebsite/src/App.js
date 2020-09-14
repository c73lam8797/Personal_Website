import React, { useState } from 'react';
import Main from './Main';
import { PreLoader } from './Components';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    isLoading ? 
    <PreLoader id="preloader" isLoading={isLoading} setIsLoading={setIsLoading} />
    :
    <Main />
  )
}