import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{

    state={term:''}

    onInputChange = (event) => {
        this.setState({term : event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        //ToDo: callback from parent component
    }

    render(){

        return(
            <div className="box">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="videoPlayer">Video Player</label>
                        <input 
                            id="videoPlayer" 
                            className="form-control" 
                            type="text"
                            onChange={this.onInputChange} 
                            value={this.state.term}>
                        </input>
                    </div>
                </form>
            </div>
        );

    }

}

export default SearchBar;

