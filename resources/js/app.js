import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import {Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import BulbPanelPage from "./components/BulbPanelPage";
import reducers from './reducers';
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

if (document.getElementById('root')) {
    ReactDOM.render(
        <ThemeProvider theme={createMuiTheme()}>
            <Router history={history}>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <BulbPanelPage/>
                </Provider>
            </Router>
        </ThemeProvider>
        , document.getElementById('root'));
}
