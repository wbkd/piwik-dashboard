import React from 'react';

class TableHead extends React.Component {
  
  render() {
    return (
      <div className="pure-u-5-5 th">
        <div className="pure-u-15-24">Page</div>
        <div className="pure-u-3-24">Visits</div>
        <div className="pure-u-3-24">Hits</div>
        <div className="pure-u-3-24">Exit Rate</div>
      </div>
    );
  }
  
}

export default TableHead;