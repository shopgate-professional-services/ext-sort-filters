const assert = require('assert')
const sortValues = require('../../sortValues')

describe('Sort values', () => {
  const filters = [
    {
      id: 'size',
      label: 'Size',
      type: 'multiselect',
      source: 'properties',
      values: [
        {
          hits: 32,
          id: '45',
          label: '50'
        },
        {
          hits: 17,
          id: '47',
          label: '46'
        },
        {
          hits: 29,
          id: '46',
          label: 'XL'
        },
        {
          hits: 6,
          id: '11',
          label: '52'
        },
        {
          hits: 10,
          id: '10',
          label: 'XXL'
        },
        {
          hits: 5,
          id: '104',
          label: 'XS'
        },
        {
          hits: 5,
          id: '110',
          label: 'S'
        }
      ]
    },
    {
      id: 'packSize',
      label: 'Pack',
      type: 'multiselect',
      source: 'properties',
      values: [
        {
          id: '10',
          label: 'big',
          hits: 10
        },
        {
          id: '104',
          label: 'small',
          hits: 5
        },
        {
          id: '11',
          label: 'middle',
          hits: 6
        }
      ]
    }
  ]

  it('should sortValuesByLabel', async () => {
    const expected = {
      filters: [
        {
          id: 'size',
          label: 'Size',
          source: 'properties',
          type: 'multiselect',
          values: [
            {
              hits: 17,
              id: '47',
              label: '46'
            },
            {
              hits: 32,
              id: '45',
              label: '50'
            },
            {
              hits: 6,
              id: '11',
              label: '52'
            },
            {
              hits: 5,
              id: '110',
              label: 'S'
            },
            {
              hits: 29,
              id: '46',
              label: 'XL'
            },
            {
              hits: 5,
              id: '104',
              label: 'XS'
            },
            {
              hits: 10,
              id: '10',
              label: 'XXL'
            }
          ]
        },
        {
          id: 'packSize',
          label: 'Pack',
          source: 'properties',
          type: 'multiselect',
          values: [
            {
              hits: 10,
              id: '10',
              label: 'big'
            },
            {
              hits: 6,
              id: '11',
              label: 'middle'
            },
            {
              hits: 5,
              id: '104',
              label: 'small'
            }
          ]
        }
      ]
    }

    const result = await sortValues(
      { config: { sortValuesByLabel: true } },
      { filters }
    )
    assert.deepStrictEqual(result, expected)
  })

  it('should sortValues', async () => {
    const expected = {
      filters: [
        {
          id: 'size',
          label: 'Size',
          source: 'properties',
          type: 'multiselect',
          values: [
            {
              hits: 5,
              id: '104',
              label: 'XS'
            },
            {
              hits: 17,
              id: '47',
              label: '46'
            }, {
              hits: 5,
              id: '110',
              label: 'S'
            },
            {
              hits: 32,
              id: '45',
              label: '50'
            },
            {
              hits: 29,
              id: '46',
              label: 'XL'
            },
            {
              hits: 6,
              id: '11',
              label: '52'
            },
            {
              hits: 10,
              id: '10',
              label: 'XXL'
            }
          ]
        },
        {
          id: 'packSize',
          label: 'Pack',
          source: 'properties',
          type: 'multiselect',
          values: [
            {
              hits: 5,
              id: '104',
              label: 'small'
            },
            {
              hits: 6,
              id: '11',
              label: 'middle'
            },
            {
              hits: 10,
              id: '10',
              label: 'big'
            }
          ]
        }
      ]
    }

    const result = await sortValues(
      {
        config: {
          sortValues: {
            size: 'XS,46,S,48,L,50,XL,52',
            packSize: 'small,middle,big'
          }
        }
      },
      { filters }
    )
    assert.deepStrictEqual(result, expected)
  })
})
