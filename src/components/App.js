import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    KEY = 'AIzaSyDWa9wCTU_lyCp72wXXyd6kGxlml6KjCXI';

    state = {videos:[], selectedVideo: null}

    renderScreen = null

    onTermSubmit = async term => {

        console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${this.KEY}`
            }
        })

        console.log(response);
        this.setState({videos: response.data.items, selectedVideo:null})

    }

    onVideoSelect = video => {
        this.setState({selectedVideo:video});
        console.log(video);
    }

    render(){

        if(!this.state.selectedVideo){
            this.renderScreen = <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        }else{
            this.renderScreen = <div className="row no-gutters">
                <div className="col-sm-7">
                    <VideoDetail video = {this.state.selectedVideo}/>
                </div>
                <div className="col-sm-5">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
            </div>
        }

        return <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {this.renderScreen}
            </div>
    }

}

export default App;

