import React, { Component } from 'react';
import './Model.css';


import ModelHeader from './ModelHeader.js';
import ModelList from './ModelList.js';


/**
 * 模块
 * 通过import 引入组件传入数据使用
 */
class Model extends Component {
    /*
        假设通过父级传入的props的数据为 
        {
            title:'最新职位',
            btn:'更多',
            btnFun:(obj) => {
                alert(`更多按钮点击执行调用方法===${JSON.stringify(obj)}`);
            },
            lists:[
                {
                    id: 1,
                    name: 'ICBU-国际贸易事业部-海关运营专家（上海）',
                    url:'ICBU-国际贸易事业部-海关运营专家（上海） [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 2,
                    name: '菜鸟-海外工程技术经理',
                    url:'菜鸟-海外工程技术经理 [url]',
                    address: ['杭州'],
                    time: '1小时前'
                },
                {
                    id: 3,
                    name: '盒马-高级物流网络规划专家-上海',
                    url:'盒马-高级物流网络规划专家-上海 [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 4,
                    name: '蚂蚁金服-产品体验专家（成都/杭州）',
                    url:'蚂蚁金服-产品体验专家（成都/杭州） [url]',
                    address: ['成都', '杭州'],
                    time: '1小时前'
                },
                {
                    id: 5,
                    name: 'ICBU-国际贸易事业部-政府事务高级专家（运营方向）',
                    url:'ICBU-国际贸易事业部-政府事务高级专家（运营方向） [url]',
                    address: ['杭州'],
                    time: '2小时前'
                },
                {
                    id: 6,
                    name: 'ICBU-国际贸易事业部-海关运营专家（上海）',
                    url:'ICBU-国际贸易事业部-海关运营专家（上海） [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 7,
                    name: '菜鸟-海外工程技术经理',
                    url:'菜鸟-海外工程技术经理 [url]',
                    address: ['杭州'],
                    time: '1小时前'
                },
                {
                    id: 8,
                    name: '盒马-高级物流网络规划专家-上海',
                    url:'盒马-高级物流网络规划专家-上海 [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 9,
                    name: '蚂蚁金服-产品体验专家（成都/杭州）',
                    url:'蚂蚁金服-产品体验专家（成都/杭州） [url]',
                    address: ['成都', '杭州'],
                    time: '1小时前'
                },
                {
                    id: 10,
                    name: 'ICBU-国际贸易事业部-政府事务高级专家（运营方向）',
                    url:'ICBU-国际贸易事业部-政府事务高级专家（运营方向） [url]',
                    address: ['杭州'],
                    time: '2小时前'
                },
                {
                    id: 11,
                    name: 'ICBU-国际贸易事业部-海关运营专家（上海）',
                    url:'ICBU-国际贸易事业部-海关运营专家（上海） [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 12,
                    name: '菜鸟-海外工程技术经理',
                    url:'菜鸟-海外工程技术经理 [url]',
                    address: ['杭州'],
                    time: '1小时前'
                },
                {
                    id: 13,
                    name: '盒马-高级物流网络规划专家-上海',
                    url:'盒马-高级物流网络规划专家-上海 [url]',
                    address: ['上海'],
                    time: '1小时前'
                },
                {
                    id: 14,
                    name: '蚂蚁金服-产品体验专家（成都/杭州）',
                    url:'蚂蚁金服-产品体验专家（成都/杭州） [url]',
                    address: ['成都', '杭州'],
                    time: '1小时前'
                },
                {
                    id: 15,
                    name: 'ICBU-国际贸易事业部-政府事务高级专家（运营方向）',
                    url:'ICBU-国际贸易事业部-政府事务高级专家（运营方向） [url]',
                    address: ['杭州'],
                    time: '2小时前'
                },
            ]
        }
     */
    constructor(props){
        super(props);
        this.state = {
            ul_top:0,
            move_interval:null
        }
    }

    componentDidMount(){
        this.moveStart();
    }

    moveStart(){
        this.move_interval = setInterval(this.setUlTop.bind(this), 100)
    }
    
    setUlTop(){
        if((240 - this.props.lists.length * 40) === this.state.ul_top){
            this.setState({
                ul_top:0
            })
        }else{
            this.setState({
                ul_top:this.state.ul_top - 1
            })
        }
    }

    render() {
        const ModelBodyLists = {
            top: `${this.state.ul_top}px`
        }

        return (
            <div>
                <div className="model-test">
                    <ModelHeader title={ this.props.title } btn={ this.props.btn } btnFun={ this.props.btnFun } />
                    <div className="model-body-style">
                        <ul className="model-body-lists" style={ ModelBodyLists }>
                            {
                                this.props.lists.map((list, i) => (
                                    <ModelList key={ i } list={ list } />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model;