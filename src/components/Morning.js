import React, { Component } from 'react';
import Talk from './Talk';

class Morning extends Component {
  constructor(props) {
    super(props);

    this.spendTime =  0; //max 180
  }

  render() {
    this.spendTime = 0;
    if (this.props.talks.length === 0) {
      return (
        <div>
          No Morning Talks Today
        </div>
      )
    }
    return( 
      <div className="morning-sess session">
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
      </div>

    );
  }

}

export default Morning;