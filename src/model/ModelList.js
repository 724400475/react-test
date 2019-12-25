import React, { Component } from 'react';
import './ModelList.css'
/**
 * 模块内容区域单个列表
 */
class ModelList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className="list-style">
                <div className="list-name-style">
                    <a className="link-style" href={this.props.list.url}>{ this.props.list.name }</a>
                </div>
                <div className="list-address-style">{this.props.list.address.join('，')}</div>
                <div className="list-time-style">{ this.props.list.time }</div>
            </li>
        )
    }
}

export default ModelList;