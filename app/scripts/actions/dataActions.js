import Reflux from 'reflux';
import Api from '../api';

var DataActions = Reflux.createActions([
  'loadData',

  'liveDataSuccess',
  'liveDataError',

  'pageDataSuccess',
  'pageDataError',

  'historicalDataSuccess',
  'historicalDataError'
]);

DataActions.loadData.preEmit = function(siteId){
  //Api.loadLiveData(siteId).then(DataActions.liveDataSuccess, DataActions.liveDataError);
  Api.loadPageData(siteId).then(DataActions.pageDataSuccess, DataActions.pageDataError);
  Api.loadHistoricalData(siteId).then(DataActions.historicalDataSuccess, DataActions.historicalDataError);
};

export default DataActions;