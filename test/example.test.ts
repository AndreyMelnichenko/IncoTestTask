import { expect } from 'chai'
import { CrudApiController } from '../api/controller/example.controller'
import { Model1 } from '../Models/Model1'
import * as StringHelper from '../utils/StringHelper'

describe('Example test', () => {
    it('GET', async () => {
        const exampleHttpBin = new CrudApiController()
        const models1 = await exampleHttpBin.get()
        expect(models1, `Key store quota should be 10 but have ${models1.length}`).to.have.lengthOf(10)
        models1.forEach(el => { expect(el).to.have.property('main_key'), `Object with body ${JSON.stringify(el)} should not have undefined main_key`})
    })

    it('POST Positive', async () => {
        const exampleHttpBin = new CrudApiController()
        const models1 = await exampleHttpBin.get()
        let newObj: Model1 = {
            value: StringHelper.getRandomStr(5),
            main_key: models1[0].main_key
        }
        const correctObj = JSON.parse(await (await exampleHttpBin.post(newObj)).body)
        expect(correctObj, "Object doesn'y have property <main_key>").to.have.property('main_key')
        expect(correctObj,"Object doesn'y have property <value>").to.have.property('value')

    })

    it('POST Negative', async () => {
        const exampleHttpBin = new CrudApiController()
        let newObj: Model1 = {
            value: StringHelper.getRandomStr(5),
            main_key: '111'
        }
        const badObj = await exampleHttpBin.post(newObj)
        expect(badObj.respCode, "Response code should have 400 but have " + badObj.respCode).to.eql(400)
        expect(badObj.body).not.to.have.property('main_key')
        expect(badObj.body).not.to.have.property('value')

    })

    it('PUT', async () => {
        const exampleHttpBin = new CrudApiController()
        let newObj: Model1 = {
            value: StringHelper.getRandomStr(5),
            main_key: StringHelper.getRandomStr(5)
        }
        const badObj = await exampleHttpBin.put(newObj)
        expect(JSON.parse(badObj.body), `AR: ${badObj.body} ER: ${JSON.stringify(newObj)}`).to.eql(newObj)
    })

    it.skip('DELETE', async () => {
        const exampleHttpBin = new CrudApiController()
        const models1 = await exampleHttpBin.get()
        const badObj = await exampleHttpBin.delete(models1[0])
        expect(JSON.parse(badObj.body), `AR: ${badObj.body} ER: ${models1[0]}`).to.eql(models1[0])
    })
}) 