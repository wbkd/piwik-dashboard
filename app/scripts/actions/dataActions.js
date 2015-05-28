import Reflux from 'reflux';
import Api from '../api';

var DataActions = Reflux.createActions([
  'loadData',

  'liveDataSuccess',
  'liveDataError',

  'pageDataSuccess',
  'pageDataError'
]);

DataActions.loadData.preEmit = function(siteId){
  Api.loadLiveData(siteId).then(DataActions.liveDataSuccess, DataActions.liveDataError);
  Api.loadPageData(siteId).then(DataActions.pageDataSuccess, DataActions.pageDataError);
};

export default DataActions;