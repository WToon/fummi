import React, { Component } from 'react';
import {Slider} from '.'
import styled from 'styled-components'


const Styles = styled.div`
  align-items: left;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .container-header {
    text-decoration: underline;
    color: white;
    font-family: Console, Monospace;
    flex:1;
    font-size:36px;
    margin: 10px;
  }
`

const attributes = [
  {
    name: 'Acousticness',
    description: 'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.',
    color: 'green'
  },
  {
    name: 'Danceability',
    description: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.',
    color: 'green'
  },
  {
    name: 'Energy',
    description: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.',
    color: 'green'
  },
  {
    name: 'Instrumentalness',
    description: 'Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.',
    color: 'green'
  },
  {
    name: 'Speechiness',
    description: '	Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.',
    color: 'green'
  },
  {
    name: 'Tempo',
    description: 'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.',
    color: 'green'
  },
  {
    name: 'Valence',
    description: 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).',
    color: 'green'
  }
]

class AttributePicker extends Component {

  constructor() {
    super()
    const initialSliders = {}
    attributes.forEach(attribute => initialSliders[attribute.name] = 50)
    this.state = { sliders: initialSliders }
  }

  render() {
    const slidersToRender = attributes.map(attribute => {
      const { name, description, color } = attribute
      return (
        <Slider
          key={name}
          name={name}
          description={description}
          color={color}
          handleOnMouseUp={e => {
            let name = e.target.name
            let value = e.target.value
            this.setState(prevState => {
              const sliders = prevState.sliders
              sliders[name] = value
              return { sliders: sliders }
            })
          }}
        />
      )
    })

    return (
      <Styles>
        <h1 className="container-header">Track attributes</h1>
        {
          slidersToRender
        }
        {
          true ? <button style={{ margin: '50px', height: '50px' }} onClick={() => console.log(this.state)} >Debug button</button> : undefined
        }
      </Styles>
    );
  }
}

export default AttributePicker;