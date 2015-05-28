import React from 'react';

class BigNumbers extends React.Component {

  getVisitors() {
    var visitors = 0;
    if(this.props.data) {
      visitors = this.props.data[0].visitors;
    }
    return visitors;
  }

  getActions() {
    var actions = 0;
    if(this.props.data) {
      actions = this.props.data[0].actions;
    }
    return actions;
  }

  render() {

    console.log(this.props);

    return (
      <div className="big-numbers pure-u-1-3">
        <div className="headline">Last 30 Minutes</div>

        <div className="number-wrapper">
          <div className="number">{ this.getVisitors() }</div>
          <div className="desc">Unique Visitors</div>
        </div>
        
        <div className="seperator"></div>

        <div className="number-wrapper">
          <div className="number">{ this.getActions() }</div>
          <div className="desc">Page Actions</div>
        </div>
      </div>
    );
  }
  
}

export default BigNumbers;