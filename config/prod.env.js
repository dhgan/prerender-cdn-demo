'use strict'

const config = require('./index')

module.exports = {
  NODE_ENV: '"production"',
  CDN_PATH: JSON.stringify(config.build.cdnPath)
}
