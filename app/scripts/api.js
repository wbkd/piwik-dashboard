import config from './config.js';
import reqwest from 'reqwest';


/////////////////
/// API CALLS ///
/////////////////

var loadSites = function() {
  return query({
    method: 'SitesManager.getAllSites'
  });
}

var loadLiveData = function(siteId) {
  return query({
    method: 'Live.getCounters',
    idSite: siteId,
    lastMinutes: '30'
  });
}

var loadPageData = function(siteId) {
  return query({
    method: 'Actions.getPageUrls',
    idSite: siteId,
    period: 'day',
    date: 'yesterday'
  })
}

var loadHistoricalData = function(siteId) {
  return query({
    method: 'API.get',
    idSite: siteId,
    period: 'day',
    date: '2015-04-29,2015-05-28',
    filter_limit: false,
    format_metrics: 1
  })
}


////////////////////////
/// HELPER FUNCTIONS ///
////////////////////////

function query(params) {
  var defaultParams = '&module=API&format=JSON&token_auth=' + config.apiToken;
  var reqUrl = config.piwikUrl + '/' + getQueryString(params) + defaultParams;

  return reqwest({
    url: reqUrl,
    type: 'json',
    method: 'get',
    crossOrigin: true,
    withCredentials: false
  });

}

function getQueryString(params) {
  var queryStr = '';
  var index = 0;
  for(var key in params) {
    queryStr += (index == 0 ? '?' : '&') + key + '=' + params[key];
    index++;
  }
  return queryStr;
}

export default {
  loadSites : loadSites,
  loadLiveData : loadLiveData,
  loadPageData : loadPageData,
  loadHistoricalData : loadHistoricalData
}