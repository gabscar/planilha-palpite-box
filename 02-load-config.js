const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1RS3tQeiyuF9S25VHOLdkuCCMR8vQncxEuyXYg20wE-M')

const run = async ()=> {
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
    const sheet = doc.sheetsByIndex[1]
    await sheet.loadCells('A3:B3')
    console.log(sheet.title)
 
    const cellpromo = sheet.getCell(2 ,0) //mostrar promoção
    console.log(cellpromo.value)

    const celltexto = sheet.getCell(2,1)// texto da promoção
    console.log(celltexto.value)
    }catch(err){
        console.log(err)
    }

}
run()