export default defineEventHandler((event) => {
    const headers = getRequestHeaders(event)
  
      return {
        message: 'hello world',
        headers: headers
      }
    })