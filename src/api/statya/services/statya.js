'use strict';

/**
 * statya service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::statya.statya');
