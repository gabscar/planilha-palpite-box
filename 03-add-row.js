const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1RS3tQeiyuF9S25VHOLdkuCCMR8vQncxEuyXYg20wE-M')

const run = async ()=> {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    // nome email whatsapp cupom promo
    await sheet.addRow({
        Nome :'Tulio Faria',
        Email: 'blablabla@gmail.com',
        Whatsapp:'75 997876532',
        Cupom: '8098090798',
        Promo: 'fewrewf'
    })
}
run()