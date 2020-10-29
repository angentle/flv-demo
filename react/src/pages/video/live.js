import React, { PureComponent } from 'react';
import Reflv from './components/Reflv';

export class Live extends PureComponent {

    render () {
        return (
            <Reflv
                url={"http://192.168.1.115:7001/live/movie.flv"}
                type="flv"
                isLive
                cors
                config={{
                    enableWorker: true,
                    enableStashBuffer: false,
                    stashInitialSize: 128,
                }}
            />
        )
    }
}
