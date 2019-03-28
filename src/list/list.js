import React from 'react';

import ListItem from '../list-item/list-item';

const List = (props) => {
    const items = props.videos.map((video) => {
        return(
            <ListItem 
                onUserSelected = { props.onVideoSelect }           
                key={ video.etag } 
                video={ video } 
            />
        );
    });

    return(
        <div className="col-lg-4 col-sm-12">
            <ul className="list-group">
                { items }
            </ul>
        </div>
    );
}

export default List;