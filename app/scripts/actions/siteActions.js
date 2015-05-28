import Reflux from 'reflux';
import Api from '../api';
import DataActions from './dataActions';

var SiteActions = Reflux.createActions([
  'loadSites',
  'loadSitesError',
  'loadSitesSuccess',
  'changeSite'
]);

SiteActions.loadSites.preEmit = function(){
  Api.loadSites().then(SiteActions.loadSitesSuccess, SiteActions.loadSitesError);
};

SiteActions.changeSite.preEmit = function(siteId) {
  console.log('changeSite: ' + siteId);
  DataActions.loadData(siteId);
}

export default SiteActions;