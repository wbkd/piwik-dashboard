import Reflux from 'reflux';
import DataActions from '../actions/dataActions';
import SiteActions from '../actions/siteActions';

var DataStore = Reflux.createStore({

  init() {
    this.data = {};
    this.pollInterval = null;

    this.currentSite = null;
    this.listenTo(SiteActions.changeSite, this.changeSite);

    this.listenTo(DataActions.loadData, this.loadData);
    this.listenTo(DataActions.liveDataSuccess, this.liveDataSuccess);
    this.listenTo(DataActions.pageDataSuccess, this.pageDataSuccess);
  },

  changeSite(siteId) {
    this.currentSite = siteId;
  },

  loadData() {
    // if(this.pollInterval == null) {
    //   this.pollInterval = window.setInterval(function() {
    //     DataActions.loadData(this.currentSite);
    //   }, 10000)
    // }
  },

  pageDataSuccess(pageData) {
    this.data.pageData = pageData;
    this.trigger(this.data);
  },

  liveDataSuccess(liveData) {
    this.data.liveData = liveData;
    this.trigger(this.data);
  }

});

export default DataStore;