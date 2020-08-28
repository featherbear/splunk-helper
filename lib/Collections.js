define(['jquery'], ($) => {

  const genPOST = async => (app, collectionID, data) =>
    $.ajax({
      // Posting to /splunkd/ causes a 303 redirect to /en-US/splunkd/
      url: `/en-US/splunkd/__raw/servicesNS/nobody/${app}/storage/collections/data/${collectionID}`,
      type: 'POST',
      contentType: 'application/json',
      async,
      data: (typeof data === "object") ? JSON.stringify(data) : data,
    })

  return {
    addSync: genPOST(false),
    addAsync: genPOST(true),
    update(app, collectionID, key, data, async = true) {
      return genPOST(async)(app, collectionID + "/" + key, data)
    },
    get(app, collectionID, async = true) {
      return $.ajax({
        // Posting to /splunkd/ causes a 303 redirect to /en-US/splunkd/
        url: `/en-US/splunkd/__raw/servicesNS/nobody/${app}/storage/collections/data/${collectionID}`,
        type: 'GET',
        async,
      })
    }
  }
})