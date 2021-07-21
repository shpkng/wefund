const axios = require('axios')
var url = 'https://hello-cloudbase-3gkeaikn6a58ccf2-1306471423.ap-shanghai.app.tcloudbase.com/create_user/'

axios.get(url, {
    params: {
        phone_no:13263270916,
    }
})
    .then(function (resp) {
        console.log(resp.data)
    })
    .catch(function (err) {
        console.log(err)
    })
    .then(function () {
        console.log("FINISH")
    })