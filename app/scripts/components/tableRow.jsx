import React from 'react';
import d3 from 'd3';

class TableRow extends React.Component {

  constructor() {
    this.colorScale = d3.scale.linear().domain([0,100]).range(['#FFEBEE', '#E57373']);
  }

  getExitRateIcon(exitRate) {
    exitRate = parseInt(exitRate);

    var circleStyle = {
      color : this.colorScale(exitRate)
    }

    return <i style={circleStyle} className="fa fa-circle exit-rate-indicator"></i>
  }
  
  render() {
    var data = this.props.data;
    return (
      <div className="pure-u-5-5 tr">
        <div className="pure-u-1-24">{ this.props.index }</div>
        <div className="pure-u-14-24">{ data.label }</div>
        <div className="pure-u-3-24">{ data.nb_visits }</div>
        <div className="pure-u-3-24">{ data.nb_hits }</div>
        <div className="pure-u-3-24 rel">{ data.exit_rate } { this.getExitRateIcon(data.exit_rate) }</div>
      </div>
    );
  }
  
}

export default TableRow;