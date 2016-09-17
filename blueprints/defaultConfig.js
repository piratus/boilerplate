const _ = require('lodash')

module.exports = {
  locals() {
    return {}
  },

  fileMapTokens(options) {
    const { settings, entity } = options
    const camelCase = _.camelCase(entity.name)
    return {
      __dumb__: () => settings.getSetting('dumbPath'),
      __smart__: () => settings.getSetting('smartPath'),
      __camel__: () => camelCase,
      __pascal__: () => _.upperFirst(camelCase),
      __dashed__: () => _.kebabCase(entity.name),
      __snake__: () => _.snakeCase(entity.name),
    }
  },
}
