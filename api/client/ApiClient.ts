import got, { Headers, Method, Options } from "got"
import { URL } from "url"

export class GotRequestClient {
    protected apiUrl: string | URL = "NO_URL_DEFINED"
    protected options: Options = {
        https: {
            rejectUnauthorized: false,
        },
        retry: {
            limit: 3,
            methods: ["GET", "POST", "PUT", "DELETE"],
            statusCodes: [400, 408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
        },
        throwHttpErrors: false,
        timeout: {
            response: 3000,
        },
    }

    followRedirect(followRedirect = true): this {
        if (!followRedirect) {
            this.options = {...this.options, followRedirect: false }
        }

        return this
    }

    url(url: string | URL): this {
        this.apiUrl = url

        return this
    }

    method(method: Method): this {
        this.options = {
            ...this.options,
            method,
        }

        return this
    }

    searchParams(searchParams?: Options["searchParams"]): this {
        this.options = {
            ...this.options,
            searchParams,
        }

        return this
    }

    headers(headers?: Headers): this {
        this.options = {
            ...this.options,
            headers,
        }

        return this
    }

    body(body: string | any): this {
        this.options = {
            ...this.options,
            body,
        }

        return this
    }

    async send(): Promise<any> {
        return got(this.apiUrl, {
            ...this.options
        })
    }
}
