import { ApiParams, RequestsInterface } from '../globals/interfaces'

export const ROOT = 'http://localhost:3001'

export const REQUEST_TYPE: RequestsInterface = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}

export const api = async (apiParams: ApiParams) =>{
  const { url, requestType, params } = apiParams  
    const shouldUseBody = requestType === 'POST' || requestType === 'PUT'
    const body = shouldUseBody ? JSON.stringify(params) : null
    
    const response = await fetch(`${ROOT+url}?${!shouldUseBody ? new URLSearchParams({ ...params }) : ''}`,{
      method: REQUEST_TYPE[requestType],
      headers: {
        'Content-Type': 'application/json'
      },
      body
  })

    return response
}
