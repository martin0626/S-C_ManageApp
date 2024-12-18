

const SALONSURL = "http://localhost:3000/salons";

const fetchData = async (url, signal)=>{
    
    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { salons } = await response.json();
    
    return salons;
}


export async function fetchSalons({ signal, queries }) {

    let url = queries != '' ? SALONSURL + '?' + queries : SALONSURL;
  

    const result = await fetchData(url, signal);
    return result;
};



export async function fetchSingelSalon({ signal, slug }) {
    let url = 'http://localhost:3000/salons?slug[eq]=' + slug;
    
    const result = await fetchData(url, signal);
    return result[0];
};


export async function filterSalons({sigal}) {
    
}
