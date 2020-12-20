const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1RS3tQeiyuF9S25VHOLdkuCCMR8vQncxEuyXYg20wE-M')

const run = async ()=> {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
}
run()