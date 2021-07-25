const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['links.papareact.com', "image.tmdb.com"],
  },
  reactStrictMode: true,
}
