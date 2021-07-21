const cb = require('@cloudbase/node-sdk')
const app = cb.init({})
let db = app.database()
exports.main = async (event, context)=>{
    let params = event.queryStringParameters;
    await db.collection('users')
        .doc(params.phone_no)
        .get()
        .then(res=>{

        })
}
