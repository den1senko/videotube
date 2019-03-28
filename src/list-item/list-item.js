import React from 'react';

import './list-item.css';

const ListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return(    
        <li className="list-group-item border-0 p-0 mb-2" onClick={ () => onUserSelected(video) }> 
            <div className="media">
                <div className="media-left pr-2">
                    <img className="media-object" src={ imageUrl }/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;