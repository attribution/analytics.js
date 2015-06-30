
/**
 * Module dependencies.
 */

var Entity = require('./entity');
var bind = require('bind');
var debug = require('debug')('analytics:group');
var inherit = require('inherit');

/**
 * Group defaults
 */

Group.defaults = {
  persist: true,
  cookie: {
    key: '_attrg'
  },
  localStorage: {
    key: 'attr_group_properties'
  }
};


/**
 * Initialize a new `Group` with `options`.
 *
 * @param {Object} options
 */

function Group(options) {
  this.defaults = Group.defaults;
  this.debug = debug;
  Entity.call(this, options);
}


/**
 * Inherit `Entity`
 */

inherit(Group, Entity);


/**
 * Expose the group singleton.
 */

module.exports = bind.all(new Group());


/**
 * Expose the `Group` constructor.
 */

module.exports.Group = Group;
