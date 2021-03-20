const getdata=(url)=>new Promise((resolve,reject)=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    fetch(url,
        requestOptions)
        .then(response => response.json())
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error));
})

export default getdata
