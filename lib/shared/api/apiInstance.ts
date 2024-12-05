export type RequestMethod = { method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' }
export type ApiInstance = {
  baseUrl: string
  url: string
  init?: RequestInit & RequestMethod
}

export class ApiError extends Error {
  constructor(public response: Response) {
    super('ApiError: ' + response.status)
  }
}

export const defaultHeaders = {
  'Content-Type': 'application/json'
}

export const apiInstance = async <T>({ url, init, baseUrl }: ApiInstance) => {
  const headers = init?.headers ?? {}
  const body = init?.body && init?.body

  const result = await fetch(`${baseUrl}${url}`, {
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body,
    ...init
  })

  if (!result.ok) {
    throw new ApiError(result)
  }

  const data = (await result.json()) as Promise<T>
  return data
}
