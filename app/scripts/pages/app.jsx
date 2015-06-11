import React from 'react';

import Header from '../components/header.jsx';
import PagesSummary from '../components/pagesSummary.jsx';
import BigNumbers from '../components/bigNumbers.jsx';
import VisitChart from '../components/visitChart.jsx';

import SiteActions from '../actions/siteActions';

import SiteStore from '../stores/siteStore';
import DataStore from '../stores/dataStore';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      sites: {},
      data: {}
    }
  }

  componentDidMount() {
    this.unsubscribeSites = SiteStore.listen(this.onSitesChange.bind(this));
    this.unsubscribeData = DataStore.listen(this.onDataChange.bind(this));
    SiteActions.loadSites();
  }

  onSitesChange(sites) {
    this.setState({
      sites: sites
    });
  }

  onDataChange(data) {

    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div id="app" className="pure-g">
        <Header sites={ this.state.sites } />
        <section className="dashboard pure-u-5-5">
          <VisitChart data={ this.state.data.historicalData } />
          <BigNumbers data={ this.state.data.liveData } />
          <PagesSummary data={ this.state.data.pageData } />
        </section>
      </div>
    );
  }
  
}

export default App;