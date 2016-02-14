
import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import marked from 'marked'
import markedRenderer from './marked-renderer'

import cheerio from 'cheerio'
import pkg from './package.json'

const dir = './src/posts'

const filenames = fs.readdirSync(dir)
  .filter(function (filename) {
    return !/^\./.test(filename)
  })

const posts = filenames.map(function (filename) {
  var content = fs.readFileSync(path.join(dir, filename), 'utf8')
  var matter = fm(content)
  var html = marked(matter.body, { renderer: markedRenderer })
  var $ = cheerio.load(html)
  var excerpt = matter.attributes.excerpt || $('p').first().text()
  var post = {
    ...matter.attributes,
    slug: filename.replace(/\.md/, ''),
    body: matter.body,
    html: html,
    excerpt: excerpt
  }

  return post
}).sort(function (a, b) {
  return new Date(b.created) - new Date(a.created)
})

const routes = filenames.map(function (filename) {
  return '/posts/' + filename.replace(/\.md$/, '')
})

routes.unshift('/')

const pageSize = 24
const pages = Math.ceil(posts.length / pageSize)

for (var i = 0; i < pages; i++) {
  routes.push('/page/' + (i + 1))
}

const data = {
  title: 'Writing',
  href: '/writing',
  links: [],
  description: pkg.description,
  author: pkg.author,
  keywords: pkg.keywords,
  posts,
  routes,
  baseUrl: '/writing/',
  pageSize,
  pages,
  tweetScript: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");',
  gaScript: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,"script","//www.google-analytics.com/analytics.js","ga"); ga("create", "UA-4603832-6", "auto"); ga("send", "pageview");'
}

module.exports = data

