
/**
 * Analytics.js
 *
 * (C) 2013 Segment.io Inc.
 */

var analyticsq = window.Attribution || [];

var Analytics = require('./analytics');
var Integrations = require('./integrations');
var each = require('each');

/**
 * Expose the `analytics` singleton.
 */

var analytics = module.exports = exports = new Analytics();

/**
 * Expose require
 */

analytics.require = require;

/**
 * Expose `VERSION`.
 */

exports.VERSION = require('../bower.json').version;

/**
 * Add integrations.
 */

each(Integrations, function(name, Integration) {
  analytics.use(Integration);
});

analytics.initialize({ Attribution: { project: window.Attribution.projectId } });

while (analyticsq && analyticsq.length > 0) {
  var args = analyticsq.shift();
  var method = args.shift();
  if (analytics[method]) analytics[method].apply(analytics, args);
}
