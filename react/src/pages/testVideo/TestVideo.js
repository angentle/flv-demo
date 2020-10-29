import * as React from 'react';
import flv from 'flv.js';

const { useState, useEffect } = React;


// 方法1 hook
const defaultUrl = 'demo.flv' || "http://192.168.1.115:7001/live/movie.flv" // 前者 使用的是本地文件public文件夹下的地址 | 后者： 后端接口提供的.flv格式的拉流地址（需要用户自行修改）
export default function TestVodeo () {

    let player = null;
    let playerDom = null;

    const [liveUrl] = useState(defaultUrl);

    useEffect(() => {
        if (flv.isSupported) {
            console.log(1234)
            player = flv.createPlayer({
                type: 'flv',
                isLive: true,
                hasAudio: true,
                hasVideo: true,
                url: liveUrl,
                cors: true
            }, {
                enableWorker: false,
                lazyLoadMaxDuration: 3 * 60,
                seekType: 'range'
            });
            player.attachMediaElement(playerDom);
            player.load();

        } else {
            console.log('Your browser is not support flv.js');
        }
    }, []);

    return (
        <div className='live-demo'>
            <video
                style={{ width: '100%', height: '100%' }}
                controls
                className='video-demo'
                ref={(e) => playerDom = e}
            ></video>
        </div>
    );
}

