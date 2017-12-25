import React, { Component } from 'react';
import Talk from './Talk';

class Afternoon extends Component {
constructor(props) {
    super(props);

    this.spendTime =  240; //min 420 max 480
  }


  render() {
    this.spendTime = 240;    
    if (this.props.talks.length === 0) {
      return (
        <div>
          No Afternoon Talks Today
        </div>
      )
    }
    return( 
      <div className="afternoon-sess session">
      {
        this.props.talks.map(talk => {
          this.spendTime += talk.props.length;

          return (
            <Talk 
              key={talk.props.id}
              title={talk.props.title}
              lengthtext={talk.props.lengthtext}
              length={talk.props.length}
              spentTime={this.spendTime}
            />
          );
        }, this)
      }
      <Talk 
        className="networking"
        key={-1}
        title={'Networking Event'}
        spentTime={this.spendTime}
      />
      </div>

    );
  }


}

export default Afternoon;