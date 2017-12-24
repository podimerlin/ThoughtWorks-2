import React, { Component } from 'react'

class UploadForm extends Component {
    constructor() {
        super();

        this.state = { file : null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.inputData = null;
    }

    handleChange(e) {
        this.setState({file: e.target.files[0]});
    } 

    handleSubmit(e) {
        e.preventDefault();

        var inputData = '';
        var file = this.state.file;
        if (file) {
            var reader = new FileReader();
            reader.onload = (function(file) {
                return function(e) {
                    inputData = e.target.result;
                    this.props.onUpload(inputData);
                };
            })(file).bind(this);
            reader.readAsText(file);            
        }

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label> Enter File: <br/>
                    <input type="file" id="fileinput" onChange={this.handleChange}/>    
                </label>
                <input type="submit" value="Submit" className="btn-upload" />
            </form>
        );
    }
}

export default UploadForm;