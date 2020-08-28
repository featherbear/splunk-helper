define(['jquery', 'splunkjs/mvc'], ($, mvc) => ({
    // Promise: Perform a search
    doSearch: (searchInstance) =>
        new Promise((resolve, reject) =>
            mvc.Components.getInstance(searchInstance).data('results').once('data', function (_, data) {
                resolve(data)
            })
        ),

    // Promise: Wait for search results of a search instance
    attachSearch: (searchInstance) =>
        new Promise((resolve, reject) => {
            mvc.Components.getInstance(searchInstance).once(
                'search:done',
                function () {
                    this.data('results').once('data', function (_, data) {
                        if (data.rows.length !== 1) {
                            console.warn(`${searchInstance} returned more than one row`)
                        }
                        resolve(data.rows[0])
                    })
                }
            )
        })
}))
