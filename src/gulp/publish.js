module.exports = (gulp, core) => {
  return (configuration, options) => {
    options = core.merge(true, configuration.options.publish, options)

    const names = configuration.common.names

    core.task(names.publish, ['git:dirtycheck'], () => {
      return core.pipe(gulp.src(options.src), names.publish)
    })
  }
}
