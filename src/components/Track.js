import React, { Component } from 'react';
import Morning from './Morning';
import Afternoon from './Afternoon';
import Talk from './Talk';


class Track extends Component {

  constructor(props) {
    super(props);

    this.length = 0;
    //minimum is 360, max is 420
    this.morningTalks = [];
    this.afternoonTalks = [];

    //split for Morning and Afternoon
    this.splitTracks = this.splitTracks.bind(this);
    this.splitTracks();

    this.state = {
      morningTalks : this.morningTalks,
      afternoonTalks : this.afternoonTalks
    }
  }

  render() {
    return( 
      <div className="track">
        Track: {this.props.id}
        <Morning key="morning" talks={this.state.morningTalks}/>
        <Talk title='Lunch' className="lunch" spentTime={180}/>
        <Afternoon key="afternoon" talks={this.state.afternoonTalks}/>
      </div>
    );
  }

  splitTracks() {
    //morning only fit max 180
    this.props.talks.forEach((talk) => {      
      if(this.length + talk.props.length <= 180 ) {
        this.length += talk.props.length;
        this.morningTalks.push(talk);
      }
    },this);

    this.afternoonTalks = this.props.talks;

    this.morningTalks.forEach((talk) => {
      const t2 = this.afternoonTalks.filter(talk2 => talk2.key !== talk.key);      
      this.afternoonTalks = t2;
    });    
    
  }

}

export default Track;
