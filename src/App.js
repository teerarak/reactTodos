// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase, { storage } from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDN1KJYccZuV9pgrL5osWP-bCFEWRFTd4o",
    authDomain: "selecthomework-54ea3.firebaseapp.com",
    databaseURL: "https://selecthomework-54ea3.firebaseio.com",
    projectId: "selecthomework-54ea3",
    storageBucket: "selecthomework-54ea3.appspot.com",
    messagingSenderId: "258297902980"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <div class="notification ">
        <strong>** To Do List **</strong>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;