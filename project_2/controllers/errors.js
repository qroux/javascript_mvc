exports.notFound = (req, res, next) => {
  res.status(404).render('./errors/404', { pageTitle: 'Page not found :^)' })
}
