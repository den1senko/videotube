import React from 'react';

import YTSearch from 'youtube-api-search';

import Header from '../header/header';
import Video from '../video/video';
import List from '../list/list';
import Comment from '../comment/comment';
import CommentItem from '../comment-item/comment-item';

const API_KEY = 'AIzaSyAg8ZMGME245HECMYkRRmPMPElJoijdiIs';

class App extends React.Component {
    constructor(props){
        super(props);
    
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
        this.videoSearch('my heart goes bum');
    }

    urlComment = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=10&videoId=`;
    
    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm, maxResults: 10 }, (data) => {
            this.setState({ 
                videos: data,
                selectedVideo: data[0]
            });
        });    
    }
    
    render() { 
      return (
            <div>
                <Header onSearchTermChange={ searchTerm => this.videoSearch(searchTerm) }/>          
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">                            
                            <Video video={ this.state.selectedVideo }/>
                            <CommentItem 
                                video={ this.state.selectedVideo }
                                urlComment={ this.urlComment }
                            />
                        </div>
                        <List 
                            onVideoSelect={ userSelected => this.setState({selectedVideo: userSelected })}
                            videos={ this.state.videos }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
