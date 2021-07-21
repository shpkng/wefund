const cb = require('@cloudbase/node-sdk')
const app = cb.init({})
let db = app.database();
exports.main = async (event, context) => {
    let params = event.queryStringParameters;
    let result
    await db.collection('users')
        .doc(params.phone_no)
        .get()
        .then((res) => {
            console.log(res)
            if (res.data.length !== 0) {
                result = false
            } else {
                db.collection('users').add({
                    _id: params.phone_no,
                    create_timestamp: Date.now(),
                    subscription_end_timestamp: 0,
                    trial_valid: true,
                    pay_times: 0
                })
                result = true
            }
        })
    return result
}