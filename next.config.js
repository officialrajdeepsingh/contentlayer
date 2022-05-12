
const { withContentlayer} = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  disableImportAliasWarning: true,
}


module.exports = withContentlayer(nextconfig)