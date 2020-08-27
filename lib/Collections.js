define(['jquery'], ($) => {

  const genPOST = async => (app, collectionID, data) =>
    $.ajax({
      url: `/splunkd/__raw/servicesNS/nobody/${app}/storage/collections/data/${collectionID}`,
      type: 'POST',
      contentType: 'application/json',
      async,
      data: (typeof data === "object") ? JSON.stringify(data) : data,
    })

  return {
    addSync: genPOST(false),
    addAsync: genPOST(true)
  }
})