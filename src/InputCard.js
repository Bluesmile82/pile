import React, { Component } from 'react';
import './App.css';
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      title: '',
      notes: []
    };
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeNote = (event) => {
    this.setState({
      note: event.target.value,
    });
  };

  handleAddNote = (event) => {
    this.props.addNote(this.state.title, this.state.note);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleAddNote(event);
    }
  }

  render() {
    return (
      <Card onKeyDown={this.handleKeyPress}>
        <CardText>
          <TextField
                  floatingLabelText="Título"
                  value={this.state.title}
                  onChange={this.handleChangeTitle} />
          <TextField hintText="Nueva nota"
                     fullWidth={true} value={this.state.note}
                     onChange={this.handleChangeNote} />
        </CardText>
        <CardActions>
          <FlatButton label="Done"
                      onTouchTap={this.handleAddNote}
          />
        </CardActions>
      </Card>
    );
  }
}

export default InputCard;
