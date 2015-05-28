import React from 'react';

class TableRow extends React.Component {
  
  render() {
    var data = this.props.data;
    return (
      <div className="pure-u-5-5 tr">
        <div className="pure-u-1-24">{ this.props.index }.</div>
        <div className="pure-u-17-24">{ data.label }</div>
        <div className="pure-u-6-24">{ data.nb_visits }</div>
      </div>
    );
  }
  
}

export default TableRow;