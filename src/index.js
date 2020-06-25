import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import mainReducer from './reducers/mainReducer';
const store = createStore(mainReducer);


//pega o nosso componente App e coloca ele dentro da div root
const Root = () => (
        <Provider store={store}>
                <ToastContainer />
                <App />

        </Provider >
)
ReactDOM.render(<Root />, document.getElementById('root'));


