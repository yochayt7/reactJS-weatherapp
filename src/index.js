import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NameForm />, document.getElementById('root'));
registerServiceWorker();
