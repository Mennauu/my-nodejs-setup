import path from 'path'

exports.setContentType = (req, res, next) => {
  const types = {
    js: 'text/javascript',
    css: 'text/css',
  }
  // path.extname to get extension of file
  // .substr(1) to remove dot at beginning of extension
  const extension = path.extname(req.originalUrl).substr(1)

  if (extension && types[extension]) res.set('Content-Type', types[extension])

  next()
}
