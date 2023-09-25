import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Select from './component/Select';
import Create from './crud/Create'
import Update from './crud/update';

import Target from './component/Target';
import Form from './component/Form'
import Pagination from './component/Pagination';
import Page from './component/Page';
import Propss from './component/Propss';
import App from './App';
import Namechange from './component/Namechange';
import Buttontask from './component/Buttontask';
import One from './Router/One';
import Indexcontext from './usecontext/Indexcontext';
import Todo from './task/Todo';
import Calc from './component/calc';
import Reacttodo from './task/Reacttodo'
import TodoList from './task/Reacttodo';
import Todolist from './Router/Todolist'
import Counter from './component/Counter';
import Searchbar from './task/Searchbar';
import StringReverse from './task/String.js';
import Addtocart from './component/addtocart';
import MyComponent from './component/promise';
import Pass from './component/props'

import Quote from './component/quotegenerator';
import Expenses from './component/expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import Localstorage from './component/localstorage';
import Local from './component/localprac';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
<Local/>

  </BrowserRouter>




);


reportWebVitals();
