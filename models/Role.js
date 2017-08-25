/**
 * Copyright © 2017 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Aug 24, 2017
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const relationship = require("mongoose-relationship");

const roleSchema = new mongoose.Schema({
  name: String,
  code: String,
  activated: {
    type: Boolean,
    default: true,
  },
  description: String,
  users: [{
    type: Schema.ObjectId,
    ref: "User",
    childPath: "roles"
  }],
}, {
  timestamps: true
});

roleSchema.plugin(relationship, {
  relationshipPathName: 'users'
});
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
