;(function() {
var payload, domNavigator, domScreen, domDocument, collector, main;
payload = { version: '1.0.0' };
domNavigator = function (payload) {
  var dom_navigator = window.navigator;
  payload.appVersion = dom_navigator.appVersion;
  payload.appCodeName = dom_navigator.appCodeName;
  payload.appName = dom_navigator.appName;
  payload.productSub = dom_navigator.productSub;
  payload.cookieEnabled = dom_navigator.cookieEnabled;
  payload.oscpu = dom_navigator.oscpu;
  payload.platform = dom_navigator.platform;
  payload.plugins = function () {
    var objPlugins = dom_navigator.plugins;
    debugger;
    var plugins = [];
    for (var i = 0; i < objPlugins.length; i++) {
      let plugin = objPlugins[i];
      let pluginName = plugin.name;
      let pluginDescription = plugin.description;
      plugins.push({ name: pluginName });
    }
    return plugins;
  }();
  payload.systemLanguage = dom_navigator.systemLanguage;
  payload.userLanguage = dom_navigator.userLanguage;
  payload.language = dom_navigator.language;
  return function () {
    return payload;
  };
}(payload);
domScreen = function (payload) {
  var domScreen = window.screen;
  payload.width = domScreen.width;
  payload.height = domScreen.height;
  payload.colorDepth = domScreen.colorDepth;
  payload.availWidth = domScreen.availWidth;
  payload.availHeight = domScreen.availHeight;
  payload.availTop = domScreen.availTop;
  payload.availLeft = domScreen.availLeft;
  return function () {
    return payload;
  };
}(payload);
domDocument = function (payload) {
  var document = window.document;
  payload.domain = document.domain;
  payload.defaultCharset = document.defaultCharset;
  return function () {
    return payload;
  };
}(payload);
collector = function (payload, domNavigator, domScreen, domDocument) {
  domNavigator();
  domScreen();
  domDocument();
  return function () {
    return payload;
  };
}(payload, domNavigator, domScreen, domDocument);
main = function (collector) {
  document.getElementById('result').innerHTML = JSON.stringify(collector(), null, '\t');
}(collector);
}());