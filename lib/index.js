'use strict';
/**
 * Analytics.js
 *
 * (C) 2017 Segment Inc.
 */

var analyticsq = window.Attribution || [];
var analytics = require('@attribution/analytics.js-core');
var Integrations = require('./integrations');

/**
 * Expose the `analytics` singleton.
 */

module.exports = exports = analytics;

/**
 * Add integrations.
 */

Object.keys(Integrations).forEach(function(name) {
  analytics.use(Integrations[name]);
});


analytics.initialize({
  Attribution: { project: window.Attribution.projectId },
}, {
  user: {
    cookie: {
      key: '_attru',
      anonymousKey: '_attrb'
    },
    localStorage: {
      key: 'attr_user_traits'
    }
  },
  group: {
    cookie: {
      key: '_attrg'
    },
    localStorage: {
      key: 'attr_group_properties'
    }
  }
});

window.Attribution = analytics;

while (analyticsq && analyticsq.length > 0) {
  var args = analyticsq.shift();
  var method = args.shift();
  if (analytics[method]) analytics[method].apply(analytics, args);
}
