import Reflux from 'reflux';
import SiteActions from '../actions/siteActions';

var SiteStore = Reflux.createStore({

  init() {
    this.data = {};
    this.listenTo(SiteActions.loadSites, this.loadSites);
    this.listenTo(SiteActions.loadSitesSuccess, this.loadSitesSuccess);
    this.listenTo(SiteActions.loadSitesError, this.loadSitesError);
  },

  loadSites() {

  },

  loadSitesSuccess(sites) {
    this.data = sites;
    this.trigger(this.data);

    //select the first site as default
    SiteActions.changeSite(sites[Object.keys(sites)[0]].idsite)
  },

  loadSitesError(error) {
    this.trigger(this.data);
  }

});

export default SiteStore;