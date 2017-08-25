/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 24, 2017
 */

const _ = require('lodash');
const User = require('../models/User');
const Role = require('../models/Role');
const Config = require('../models/Config');

const {
  log
} = require('../helpers');

const createRoles = () => {
  return Role.count().then(count => {
    if (count > 0) {
      return;
    }

    const roles = [{
      name: 'Admin',
      code: 'ADMIN',
      description: 'Administrator',
    }, {
      name: 'User',
      code: 'USER',
      description: 'Normal User',
    }];

    const promises = []
    roles.forEach(r => {
      promises.push(Role.create(r))
    })

    return Promise.all(promises)
  })
}

const createUsers = (roles) => {
  return User.count().then(count => {
    if (count > 0) {
      return;
    }

    const admin = new User({
      email: 'admin@fibo.vn',
      username: 'admin',
      password: '123789',
      profile: {
        name: 'Administrator',
        gender: 'Male',
        phone: '+84901861929',
      },
      deleteFlag: false,
      activeFlag: true,
      admin: true,
      publish: false,
      role: 'ADMIN'
    });

    return User.create([admin]);
  });
};

const createConfigs = () => {
  return Config.count().then(count => {
    if (count > 0)
      return;

    let configs = [{
      name: 'SMTP_HOST',
      value: 'localhost',
    }];

    let promises = [];
    _.forEach(configs, (c) => {
      promises.push(Config.create(c));
    });

    return Promise.all(promises);
  })
};

const seedData = async() => {
  log(`Seeding data...`, 3)
  return Promise.all([
    createRoles(),
    createUsers(),
    createConfigs(),
  ]).then(data => {
    const roles = data[0]
    const users = data[1]
    const configs = data[2]
    if (roles) {
      log(`Created ${roles.length} roles`, 1)
    }
    if (users) {
      log(`Created ${users.length} users`, 1)
    }
    if (configs) {
      log(`Created ${configs.length} configs`, 1)
    }
    return true
  }).then(() => {
    log(`Seeding Done`, 1)
    return true
  })
}

module.exports = {
  seedData,
};
