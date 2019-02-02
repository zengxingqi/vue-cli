var prod = process.env.NODE_ENV === 'production'
var config = {
  presets: [
    '@vue/app'
  ],
  plugins: []
}
if (prod) {
  config.plugins.push('transform-remove-debugger', 'transform-remove-console')
}
module.exports = config
