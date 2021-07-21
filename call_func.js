const cb = require('@cloudbase/node-sdk')
const app = cb.init({})
exports.main = async (event, context) => {
    app.callFunction({
        name: 'create_user',
        data: {
            event:{
                queryStringParameters:{
                    phone_no: 13857973579
                }
            }
        }
    }).then(r => console.log(r))
}