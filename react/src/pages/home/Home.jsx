

import React, { Component } from 'react';
import { set, get } from '../../utils/global_data'
import './Home.scss'
class Home extends Component {

    constructor(props) {
        super(props)
        this.sc = window.sc
        this.state = {
            msg: '666'
        }
    }

    componentDidMount () {
        if (get('aaa')) {
            this.setState({
                msg: '有值'
            })
        } else {
            this.setState({
                msg: '无值'
            })
        }
    }

    render () {
        console.log(this.props)
        let { msg } = this.state
        return (
            <div className='home'>
                {msg}
                <div>
                    <button onClick={_ => this.save()}>save</button>
                </div>
            </div>
        );
    }

    save () {
        set('aaa', 111)
    }

    // Toast.hide()


}



export default Home;
