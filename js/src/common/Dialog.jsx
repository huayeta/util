import React from 'react';
import {dialogGet} from 'common/artDialog.es6';

class DialogGet extends React.Component {
    constructor() {
        super();
    }
    handleClick(){
        let _this=this;
        let {url,callback,data}=this.props;
        dialogGet({
            url:url,
            data:data,
            onclose:function(){
                //如果有回调函数的时候
                if(callback){
                    callback(this.returnValue);
                }
            }
        }).showModal();
    }
    render(){
        return(
            <a {...this.props} onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </a>
        )
    }
}

DialogGet.propTypes={
    url:React.PropTypes.string.isRequired
}

export {DialogGet}
