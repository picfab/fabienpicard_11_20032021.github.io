import { siteUrl, requestOptions } from './dataApp'

/**
 * Return the data of request
 *
 * @param   {string}  url url of the request
 * @return  {mixed}   The answer
 */
const getdata = (url) => new Promise((resolve, reject) => {
    fetch(`${siteUrl}/${url}`,
        requestOptions)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error))
})

export default getdata
