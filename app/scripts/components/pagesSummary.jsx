import React from 'react';
import Config from '../config';
import TableRow from './tableRow.jsx';

class PagesSummary extends React.Component {

  getTable() {
    var data = this.props.data;
    var items = [];
    if(data) {

      data.forEach(function(d,i) {
        var item = <TableRow key={ 'table_' + i } data={d} index={i+1}/>
        //var item = <div key={ 'table_' + i } className="pure-u-5-5 tr">{d.label}</div>
        items.push(item);
      });
    }

    return items;
  }
  
  render() {

    console.log(this.props);

    return (
      <div className="pure-u-5-5 pages-summary">
        <div className="table">
          { this.getTable() }
        </div>
      </div>
    );
  }
  
}

export default PagesSummary;