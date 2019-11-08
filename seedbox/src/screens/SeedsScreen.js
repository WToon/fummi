import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Slider from '@material-ui/core/Slider';

export default class SeedsScreen extends Component {

    render() {
     
        return (
            <div className="Seeds">
                <AppBar id="appBar1" position="static">
                    <Toolbar>
                        <Typography id="typography" variant="h6" >
                            Pick up to 5 seeds
                         </Typography>
                    </Toolbar>
                </AppBar>
                <Fab id="addSeedButton" aria-label="add" >
                    <AddIcon />
                </Fab>

                <AppBar id="appBar2" position="static">
                    <Toolbar>
                        <Typography id="typography" variant="h6" >
                            Adapt your desired features
                         </Typography>
                    </Toolbar>
                </AppBar>
                <div id="slider1">
                <Typography gutterBottom>Acousticness</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>  

                <div id="slider1">
                <Typography gutterBottom>Danceability</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>

                <div id="slider1">
                <Typography gutterBottom>Energy</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>

                <div id="slider1">
                <Typography gutterBottom>Instrumentalness</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>
                <div id="slider1">
                <Typography gutterBottom>Tempo</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>
                <div id="slider1">
                <Typography gutterBottom>Valence</Typography>
                <Slider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />  
                </div>

                <button id="GrowListButton"onClick={this.onSubmit}>Grow your playlist</button>
              </div>
        );
    }
}


