import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './components/App';
import App from './components/Html';

const server = express();
const port = process.env.PORT || 3000;
server.get('*', (req, res) => {
    const body = ReactDOM.renderToString(<App />);
    const html = ReactDOM.renderToStaticMarkup(
        <html title='HostBNB'
         description="AirBNB clone for learning purposes"
         body={body} />
    );
    res.send(
        '<doctype html>\n' + html);
});

server.listen(port, () => {
    console.log('App is listening at http://localhost:${port}/')
})