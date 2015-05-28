import React from 'react';
import d3 from 'd3';

class VisitChart extends React.Component {

  createChart() {

    if(!this.props.data) {return false}

    var xExt = d3.extent(this.props.data, function(d) {return d.date});
    var yExt = d3.max(this.props.data, function(d) {return d.nb_visits});

    var width = window.innerWidth,
        height = 150;

    var x = d3.time.scale().range([0,width]).domain(xExt);
    var y = d3.scale.linear().range([height,0]).domain([0,yExt]);

    var area = d3.svg.area()
      .x(function(d) {return x(d.date)})
      .y0(height)
      .y1(function(d) {return y(d.nb_visits)})
      .interpolate('basis');

    var datum = area(this.props.data);

    return (
      <svg height={height} width={width}>
        <g>
          <path d={datum}></path>
        </g>
      </svg>
    );

  }
  
  render() {
    return (
      <div className="pure-u-5-5 visit-chart">
        {this.createChart()}
      </div>
    );
  }
  
}

export default VisitChart;