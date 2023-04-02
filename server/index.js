const express = require('express');
const renderToString = require('react-dom/server').renderToString();
const React = require('react');

const AppComponent = require('../src/App').default;

const app = express();

app.get('**', (req, res) => {
  const content = renderToString(<AppComponent />);
  res.send(content);
});

app.listen(4000, () => {
  console.log('Listening to Port 4000');
});
