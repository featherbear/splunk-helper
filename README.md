# SplunkJS Helpers

Reusable JavaScript functions for designing Splunk interfaces.  
_I have no idea about the terminology, I'm a newbie to Splunk_

---

## Importing

### (Recommended) Universal Import

The `helper.js` file combines all the modules into a single object, each module accessible by its name.

Add `https://featherbear.cc/splunk-helper/helper.js` to your `require` statement.

```js
require([
            'jquery'
            'splunkjs/mvc',
            'https://featherbear.cc/splunk-helper/helper.js'
        ],
        function ($, mvc, splunkHelper) {
            // Your code goes here
            // splunkHelper.DOM.createButton(...)
        }
)
```

You can using the destructuring assignment to simplify your namespace.

```js
require([
            'jquery'
            'splunkjs/mvc',
            'https://featherbear.cc/splunk-helper/helper.js'
        ],
        function ($, mvc, { DOM }) {
            // Your code goes here
            // DOM.createButton(...)
        }
)
```

### Specific Import

You can also import specific modules (for loading speed optimisation, etc...).  
Modules are located in the `lib` directory, and are accessible at `https://featherbear.cc/splunk-helper/lib/<MODULE>.js`.

```js
require([
            'jquery'
            'splunkjs/mvc',
            'https://featherbear.cc/splunk-helper/lib/DOM.js'
        ],
        function ($, mvc, DOM ) {
            // Your code goes here
            // DOM.createButton(...)
        }
)
```

## Usage

Documentation to come... maybe not... unless?

## Development

GitHub Repository: [featherbear/splunk-helper](https://github.com/featherbear/splunk-helper)

## License

Copyright © 2020 Andrew Wong

This software is licensed under the MIT License. You are free to redistribute it and/or modify it under the terms of the license.

For more details see the license file