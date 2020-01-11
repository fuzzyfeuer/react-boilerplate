import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

console.info('React App Starting --------->>');

const Hello = () => {
    return <div>Hello React!</div>;
};

ReactDOM.render(
    <Hello />,
    document.getElementById("app-react-root")
);
