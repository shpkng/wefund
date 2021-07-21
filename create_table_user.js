const cb = require('@cloudbase/node-sdk')
const app = cb.init({})
let db = app.database();
exports.main = async (event, context)=>{
    const res = await db
        .createCollection("users");
    console.log(res);
}