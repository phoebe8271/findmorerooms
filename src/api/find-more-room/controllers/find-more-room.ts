/**
 * find-more-room controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::find-more-room.find-more-room');


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::find-more-room.find-more-room', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        fm_rooms: {
          populate: ['image_url', 'picture_url']
        }
      }
    };
    return await super.find(ctx);
  }
}));