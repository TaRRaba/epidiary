require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function renderComponent(reactElement, props, res) {
  const reactEl = React.createElement(reactElement, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.end(html);
};
