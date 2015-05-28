import React from 'react';
import Config from '../config';
import SiteActions from '../actions/siteActions';

class Header extends React.Component {
  
  siteChange(evt) {
    SiteActions.changeSite(evt.target.value);
  }

  getOptions() {
    var opts = [];
    var sites = this.props.sites;
    for(var key in sites) {
      var site = sites[key];
      var item = <option key={ key } value={ site.idsite }>{ site.name }</option>;
      opts.push(item);
    }
    return opts;
  }

  render() {
    return (
      <header className="pure-u-5-5">
        <div className="logo">{ Config.siteName }</div>
        <div className="site-select">
          <select onChange={this.siteChange}>{this.getOptions()}</select>
        </div>
      </header>
    );
  }
  
}

export default Header;