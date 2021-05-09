'use strict';

/**
 * Cover.js controller
 *
 * @description: A set of functions called "actions" for managing `Cover`.
 */

module.exports = {

  /**
   * Retrieve cover records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.cover.search(ctx.query);
    } else {
      return strapi.services.cover.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a cover record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cover.fetch(ctx.params);
  },

  /**
   * Count cover records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cover.count(ctx.query);
  },

  /**
   * Create a/an cover record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cover.add(ctx.request.body);
  },

  /**
   * Update a/an cover record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cover.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cover record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cover.remove(ctx.params);
  }
};
