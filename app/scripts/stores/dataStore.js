import Reflux from 'reflux';
import DataActions from '../actions/dataActions';
import SiteActions from '../actions/siteActions';
import d3 from 'd3';

var DataStore = Reflux.createStore({

  init() {
    this.data = {};
    this.pollInterval = null;

    this.currentSite = null;
    this.listenTo(SiteActions.changeSite, this.changeSite);

    this.listenTo(DataActions.loadData, this.loadData);
    this.listenTo(DataActions.liveDataSuccess, this.liveDataSuccess);
    this.listenTo(DataActions.pageDataSuccess, this.pageDataSuccess);
    this.listenTo(DataActions.historicalDataSuccess, this.historicalDataSuccess);
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
  },

  historicalDataSuccess(historicalData) {
    this.data.historicalData = this.converters.historical(historicalData);
    this.trigger(this.data);
  },

  converters: {
    historical: function(input) {
      var dateParser = d3.time.format("%Y-%m-%d").parse;
      var output = [];
      for(var key in input) {
        var obj = input[key];
        obj.date = dateParser(key);
        output.push(obj);
      }
      return output;
    }
  }

});

export default DataStore;