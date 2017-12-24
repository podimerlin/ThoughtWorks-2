import React, { Component } from 'react';
import UploadForm from './UploadForm';
import Talk from './Talk';
import Track from './Track';

class App extends Component {
    constructor() {
        super();

        this.remainingTalks = [];
        this.splittedTalks = [];

        this.state = {
          tracks: this.splittedTalks
        };

    }

    addTalks = (inputData) => {
        const arrayOfLines = inputData.match(/[^\r\n]+/g);
    
        const talks = arrayOfLines.map((line, counter) => {
            counter += 1;

            var words = line.split(/([ ])/);
            var lengthtext = words[words.length-1];
            var length = lengthtext === 'lightning' ? 5 : parseInt(lengthtext.split(/(min)/)[0], 10);
            var title = line.slice(0, line.length - lengthtext.length);

            return ( <Talk key={counter} id={counter} title={title} length={length} lengthtext={lengthtext} />);
        })

        this.setState({talks});
        this.remainingTalks = talks;
        
        while(this.remainingTalks.length > 0) {
          this.splittedTalks.push(this.splitTalks());
        }

        //evenly distribute the last splittedTalk array
        var lastSplittedTalk = this.splittedTalks.pop();
        this.appendToExisting(lastSplittedTalk.arrayOfTalks);
        this.setState({tracks : this.splittedTalks});
    }

    appendToExisting(arr) {
        this.splittedTalks.forEach((item) => {
          var newArr = [];
          arr.forEach((a) => {
            if (item.length + a.props.length < 420) {
              item.arrayOfTalks.push(a);
              item.length += a.props.length;
            } else {
              newArr.push(a);
            }
          });
          arr = newArr;          
        })
        //make a new track for those that couldn't fit
        if (arr.length > 0) {
          var newTalks = {arrayOfTalks: arr}
          this.splittedTalks.push(newTalks);
        }
    }

    splitTalks() {
      var x = {arrayOfTalks: [], length: 360};
      this.remainingTalks.forEach((talk) => {
        if(talk.props.length < x['length']) {
          x['length'] -= talk.props.length;
          x['arrayOfTalks'].push(talk);
        }
      }, x);

      x['arrayOfTalks'].forEach((talk2) => {
        const talks = this.remainingTalks.filter(talk => talk.key !== talk2.key);
        this.remainingTalks = talks;
      });
      x['length'] = 360 - x['length'];
      return x;
    }

    removeTalkFromList = (talkid) => {
      const talks = this.remainingTalks.filter(talk => talk.key !== talkid);
      this.remainingTalks = talks;
    }

    render() {
        const addTalks = inputData => {this.addTalks(inputData)};

        return (
            <div>
                <h2>Conference Track Management</h2>
                <UploadForm onUpload={addTalks} />
                <div className='track-list'>
                  {this.state.tracks.map((tracks, id) => {
                    id++;
                    return (
                      <Track key={id} id={id} talks={tracks.arrayOfTalks}/>
                    );
                  })}
                </div>
            </div>
        )
    }

}

export default App;