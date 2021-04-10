import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/app/app';

const dataPosts = [
    {id: 1, text: "Hi, how are you?", likesCount: 12},
    {id: 2, text: "It's my first post", likesCount: 21},
];
const dataDialog = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"},
];
const dataMessage = [
    {id: 1, text: "Hi"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "Yo"},
    {id: 4, text: "Yo"},
    {id: 5, text: "Yo"},
    {id: 6, text: "Yo"},
];

ReactDOM.render(
    <React.StrictMode>
        <App dataPosts={dataPosts} dataDialog={dataDialog} dataMessage={dataMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
);