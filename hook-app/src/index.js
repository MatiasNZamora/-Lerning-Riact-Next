import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/1-useState/CounterApp';
// import CounterWithCustomHook from './components/1-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/2-useEfect/SimpleForm';
// import { FormWhitCustomHook } from './components/2-useEfect/FormWhithCustomHook';
// import { MultipleCustomHooks } from './components/3-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/4-useRef/FocusScreen';
// import { RealExampleRef } from './components/4-useRef/RealExampleRef';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // < HookApp />
  // <CounterApp/>
  // <CounterWithCustomHook />
  // <SimpleForm /> 
  // <FormWhitCustomHook />
  // <MultipleCustomHooks />
  // <FocusScreen /> 
  // < RealExampleRef />
  // <Memorize />
  // <MemoHook />
  <CallbackHook /> 

);

