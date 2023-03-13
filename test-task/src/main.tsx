import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';
import store from "./store";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router
} from "react-router-dom";

const client = new ApolloClient({

    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer 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`
    },
    cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <App/>
                </Router>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
)
