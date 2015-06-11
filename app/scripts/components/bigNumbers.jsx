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
      <div className="section big-numbers pure-u-5-5">

        <div className="number-wrapper pure-u-1-4">
          <div className="number">{ this.getVisitors() }</div>
          <div className="desc">Unique Visitors</div>
        </div>

        <div className="number-wrapper pure-u-1-4">
          <div className="number">{ this.getVisitors() }</div>
          <div className="desc">Unique Visitors</div>
        </div>

        <div className="number-wrapper pure-u-1-4">
          <div className="number">{ this.getVisitors() }</div>
          <div className="desc">Unique Visitors</div>
        </div>

        <div className="number-wrapper pure-u-1-4">
          <div className="number">{ this.getVisitors() }</div>
          <div className="desc">Unique Visitors</div>
        </div>
      </div>
    );
  }
  
}

export default BigNumbers;