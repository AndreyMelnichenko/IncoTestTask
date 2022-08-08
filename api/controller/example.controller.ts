import { Model1 } from '../../Models/Model1';
import { GotRequestClient } from '../client/ApiClient';

export class CrudApiController {
    private url = 'https://l761dniu80.execute-api.us-east-2.amazonaws.com/default/exercise_api'

    async get(): Promise<Model1[]> {
        const resp = await new GotRequestClient()
            .url(this.url)
            .send()
        const models = JSON.parse(resp.body) as Model1[]
        return models
    }

    async post(newObj: Model1): Promise<{ respCode: number, body: string }> {
        const resp = await new GotRequestClient()
            .url(this.url)
            .method("POST")
            .body(JSON.stringify(newObj))
            .send()

            return { respCode: resp.statusCode, body: resp.body}
    }

    async put(newObj: Model1): Promise<{ respCode: number, body: string }> {
        const resp = await new GotRequestClient()
            .url(this.url)
            .method("PUT")
            .body(JSON.stringify(newObj))
            .send()

            return { respCode: resp.statusCode, body: resp.body}
    }

    async delete(newObj: Model1): Promise<{ respCode: number, body: string }> {
        const resp = await new GotRequestClient()
            .url(this.url)
            .method("DELETE")
            .body(JSON.stringify(newObj))
            .send()

            return { respCode: resp.statusCode, body: resp.body}
    }
}