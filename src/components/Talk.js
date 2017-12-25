import React, { Component } from 'react'

class Talk extends Component {
    constructor(props) {
        super(props);
        var initDate = new Date();
        initDate.setHours(9,0,0,0);
        this.state = { ...props, time: initDate };                
    }

    // add minutes to 9am and display a 12 hour time string
    changeStringToTime(time, mins) {
      mins = typeof this.props.length === 'undefined' ? mins : mins - this.props.length;
      time = new Date(time.getTime() + mins*60000);

      return (
        time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })
      );
    }

    render() {
        return(
            <div> {this.changeStringToTime(this.state.time, this.props.spentTime)} {this.state.title} {this.state.lengthtext} </div>
        )
    }   
}

export default Talk;