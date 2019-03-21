import React from 'react';

import YTSearch from 'youtube-api-search';

import Header from '../header/header';
import Video from '../video/video'

import './app.css';

const API_KEY = 'AIzaSyAg8ZMGME245HECMYkRRmPMPElJoijdiIs';

class App extends React.Component {
    constructor(props){
        super(props);
    
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
        this.videoSearch('hip hop');
    }
    
    videoSearch(searchTerm) {
      YTSearch({key: API_KEY, term: searchTerm}, (data) => {
        console.log(data);
          this.setState({ 
              videos: data,
              selectedVideo: data[0]
          });
      });
    
    }
    render() {
      return (
            <div>
                <Header onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>          
                <div className="container-fluid">
                    <div className="row">
                        <Video video={this.state.selectedVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
