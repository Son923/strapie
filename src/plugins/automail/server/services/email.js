"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::automail.email", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::automail.email", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::automail.email", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::automail.email", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::automail.email", id);

    return await strapi.entityService.update("plugin::automail.email", id, {
      data: { isDone: !result.isDone },
    });
  },
});