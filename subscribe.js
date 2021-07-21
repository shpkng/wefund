const cb = require('@cloudbase/node-sdk')
const app = cb.init({})
let db = app.database();
exports.main = async (event, context) => {
    let params = event.queryStringParameters;
    db.collection('users')
        .doc(params.phone_no)
        .get()
        .then(res => {
            if (res.data.length === 0){
                return {}
            }
        })
}