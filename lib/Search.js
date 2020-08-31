define(['jquery', 'splunkjs/mvc'], ($, mvc) => ({

    // Update the search
    updateSearch(searchInstance) {
        return new Promise((resolve, reject) => {
            let instance = mvc.Components.getInstance(searchInstance);
            if (!instance) reject();
            instance.cancel && instance.cancel();
            instance.startSearch().once('search:done', resolve)
        })
    },

    // Promise: Perform a search
    doSearch(searchInstance) {
        return new Promise((resolve, reject) =>
            mvc.Components.getInstance(searchInstance).data('results').once('data', function (_, data) {
                resolve(data)
            })
        )
    },

    // Promise: Wait for search results of a search instance
    attachSearch(searchInstance) {
        return new Promise((resolve, reject) => {
            mvc.Components.getInstance(searchInstance).once(
                'search:done',
                function () {
                    this.data('results').once('data', function (_, data) {
                        if (data.rows.length !== 1) {
                            console.warn(`${searchInstance} returned more than one row`)
                        }
                        resolve(data) // .rows[0])
                    })
                }
            )
        })
    }
}))
