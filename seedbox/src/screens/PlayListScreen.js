import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../images/logo.png"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default class PlayListScreen extends Component {
  
    render() {

        return (
            <div className="PlayList">
                <AppBar id="appBar"  position="static">
                    <Toolbar>
                         <Typography id="typography" variant="h6" >
                            Your playLists
                         </Typography>

                         <img id="logo" src={logo} alt="fireSpot" />
                    </Toolbar>
                </AppBar>

                <List id="PlayListItem">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNoteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="PlayList 1"
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNoteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="PlayList 2"
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  </ListItem>

             </List>

                <Fab  onClick={this.onSubmit} id="addPlayListButton" color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>

            </div>
        );
    }

    onSubmit = () => {
        this.props.history.push('/seedsScreen')

      }


}


