import React from 'react';
import { Basic } from './basic';
import { Live } from './live';

const Video = _ => {
    return <div class="container">
        <b>本地flv视频</b>
        <Basic />
        <b>在线flv视频,url让后端提供</b>
        <Live />
    </div>
}


export default Video
