'use strict';

/**
 * Rankings.js controller
 *
 * @description: A set of functions called "actions" for managing `Rankings`.
 */

module.exports = {

  /**
   * Retrieve rankings records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.rankings.search(ctx.query);
    } else {
      return strapi.services.rankings.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a rankings record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.rankings.fetch(ctx.params);
  },

  /**
   * Count rankings records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rankings.count(ctx.query);
  },

  /**
   * Create a/an rankings record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rankings.add(ctx.request.body);
  },

  /**
   * Update a/an rankings record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rankings.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rankings record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rankings.remove(ctx.params);
  }
};
