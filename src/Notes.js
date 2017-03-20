import React, { Component } from 'react';
import './App.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

class Notes extends Component {
  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        height: 'auto',
        overflowY: 'auto',
      },
    };

    const { notes } = this.props;

    const notesList = notes.map((note, index) => { return (
          <GridTile key={index}>
            <Card>
            <CardHeader title={ note.title }/>
            <CardText>
              { note.text }
             </CardText>
            </Card>
          </GridTile>
        )})

    return (
      <GridList
          cellHeight="auto"
          style={styles.gridList}
          cols="auto"
        >
        { notesList }
      </GridList>
    );
  }
}

export default Notes;
