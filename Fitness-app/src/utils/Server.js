export const exerciseOptions = {
	method: 'GET',
    mode:'cors',
    headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',
      },
};
export const fetchData=async (url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}
