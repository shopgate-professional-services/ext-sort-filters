# Shopgate Connect - Sort filters and filters values

Sorting filters and filter values for search and category pages.

## Configuration

Set the following value in your Shopgate Connect Admin:

* sortFiltersByLabel - (boolean) sort all filters alphabetically
* sortFilters - (json) sort filters after alphabetical sort (if its set)
* sortValuesByLabel - (boolean) sort all filters values alphabetically
* sortValues - (json) sort filters values after natural sort (if its set)

## Example of config to sort filters and values alphabetically
```json
{
  "sortFiltersByLabel": true,
  "sortFilters": {
    "display_amount": -10,
    "categories": -9,
    "size": -2,
    "packSize": -1
  },
  "sortValuesByLabel": true,
  "sortValues": {
    "size": "XS,46,S,48,L,50,XL,52",
    "packSize": "small,middle,big"
  }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
## License
See the [LICENSE](./LICENSE) file for more information.
