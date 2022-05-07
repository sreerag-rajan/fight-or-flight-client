import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux"
import {store} from "./Redux/store"
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
