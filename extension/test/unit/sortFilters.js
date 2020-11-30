const assert = require('assert')
const sortFilters = require('../../sortFilters')

describe('Sort filters', () => {
  const filters = [
    {
      id: 'size',
      label: 'Size'
    },
    {
      id: 'display_amount',
      label: 'Price'
    },
    {
      id: 'packSize',
      label: 'Pack'
    },
    {
      id: 'categories',
      label: 'Categories'
    }
  ]

  it('should sortFiltersByLabel', async () => {
    const expected = {
      filters: [
        {
          id: 'categories',
          label: 'Categories'
        },
        {
          id: 'packSize',
          label: 'Pack'
        },
        {
          id: 'display_amount',
          label: 'Price'
        },
        {
          id: 'size',
          label: 'Size'
        }
      ]
    }

    const result = await sortFilters(
      { config: { sortFiltersByLabel: true } },
      { filters }
    )
    assert.deepStrictEqual(result, expected)
  })

  it('should sortFilters', async () => {
    const expected = {
      filters: [
        {
          id: 'display_amount',
          label: 'Price'
        },
        {
          id: 'categories',
          label: 'Categories'
        },
        {
          id: 'size',
          label: 'Size'
        },
        {
          id: 'packSize',
          label: 'Pack'
        }
      ]
    }

    const result = await sortFilters(
      {
        config: {
          sortFilters: {
            display_amount: -10,
            categories: -9,
            size: -2,
            packSize: -1
          }
        }
      },
      { filters }
    )
    assert.deepStrictEqual(result, expected)
  })
})
