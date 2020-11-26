/**
 * @param {Object} context
 * @param {Object} input
 * @returns {Promise<Object>}
 */
module.exports = async (context, { filters }) => {
  const {
    config: {
      sortValuesByLabel,
      sortValues
    }
  } = context

  if (sortValuesByLabel) {
    filters.forEach(filter => {
      if (filter.type !== 'multiselect') {
        return
      }

      filter.values = filter.values.sort((a, b) => {
        return a.label.localeCompare(b.label)
      })
    })
  }

  if (sortValues) {
    filters.forEach(filter => {
      if (!sortValues[filter.id]) {
        return
      }

      const vals = sortValues[filter.id]
        .split(',')
        .map(v => v.trim())

      filter.values = filter.values.sort((a, b) => {
        const aPos = vals.indexOf(a.label)
        const bPos = vals.indexOf(b.label)

        if (aPos === -1) {
          return 1
        }
        if (bPos === -1) {
          return -1
        }

        return aPos - bPos
      })
    })
  }

  return { filters }
}
