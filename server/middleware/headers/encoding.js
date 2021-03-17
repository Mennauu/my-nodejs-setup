exports.setContentEncoding = (req, res, next) => {
  const encodeHeader = req.headers['accept-encoding']
  const encoding = findOneInString(['br', 'gzip'], encodeHeader)

  if (!encoding) return next()

  req.url = `${req.url}.${encoding}`
  res.set('Content-Encoding', encoding)

  next()
}

const findOneInString = (arr, str) => {
  // null checks
  if (arr.length === 0 || !str || str.length === 0) {
    return null
  }

  // return first string from array that is in the given string
  for (const element of arr) {
    if (str.includes(element)) return element
  }

  return null
}
