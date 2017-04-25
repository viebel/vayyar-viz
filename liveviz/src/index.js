import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoldenLayout from 'golden-layout';
import $ from 'jquery';
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';
import './index.css';

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
console.log("$: " + $);
window.ReactDOM = ReactDOM;
window.React = React;

console.log("ReactDOM: " + ReactDOM.render);
var myLayout = new GoldenLayout({
  content: [{
    type: 'row',
    content:[{
      type:'react-component',
      component: 'test-component',
      props: { label: 'A' }
    },{
      type: 'column',
      content:[{
        type:'react-component',
        component: 'test-component',
        props: { label: 'B' }
      },{
        type:'react-component',
        component: 'test-component',
        props: { label: 'C' }
      }]
    }]
  }]
});

var TestComponent = React.createClass({
 render: function() {
   return (<h1>{this.props.label}</h1>)
 }
});

myLayout.registerComponent( 'test-component', TestComponent );

//Once all components are registered, call
myLayout.init();
