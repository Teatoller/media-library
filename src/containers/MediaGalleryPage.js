import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api'

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

// Get images and video from the API after component renders
    componentDidMount() {
        flickrImages('rain').then(images => console.log(images, 'Images'));
        shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
    }

        render() {
            // Render videos and images
            return (<div></div>)
        }
    }

    export default MediaGalleryPage;
