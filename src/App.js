import React from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Notes from './Notes';
import InputCard from './InputCard';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteActions from './actions'

const App = ({notes, actions}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="App">
      <AppBar title="Notes"/>
      <div className="App-intro">
        <InputCard addNote={actions.addNote}/>
      </div>
      <div className="App-body">
        <Notes notes={notes} actions={actions}/>
      </div>
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(NoteActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
