/**
 * @param {Object} context
 * @param {Object} input
 * @returns {Promise<Object>}
 */
module.exports = async (context, { filters }) => {
  const {
    config: {
      sortFiltersByLabel,
      sortFilters
    }
  } = context

  let sorted = filters

  if (sortFiltersByLabel) {
    sorted = sorted.sort((a, b) => {
      return a.label.localeCompare(b.label)
    })
  }

  if (sortFilters) {
    sorted = sorted.sort((a, b) => {
      const aPriority = sortFilters[a.id] || 0
      const bPriority = sortFilters[b.id] || 0

      if (aPriority < bPriority) {
        return -1
      }

      return bPriority < aPriority ? 1 : 0
    })
  }

  return { filters: sorted }
}
