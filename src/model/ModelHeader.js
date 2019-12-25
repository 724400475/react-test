import React, { Component } from 'react';
import './ModelHeader.css'

/**
 * 模块头部
 */
class ModelHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="model-header-style">
                <span className="model-title">{ this.props.title }</span>
                <span className="model-more-btn" onClick={() => {this.props.btnFun(this.props)}}>{ this.props.btn }</span>
            </div>
        )
    }
}

export default ModelHeader;