

const SALONSURL = "http://localhost:3000/salons";




const fetchData = async (url: string, signal: AbortSignal)=>{
    
    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        //TODO Update Types
        // error.code = response.status;
        // error.info = await response.json();
        throw error;
    }

    const { data } = await response.json();
    
    return data;
}


export async function fetchSalons({ queries, signal }: {queries: string, signal: AbortSignal}) {

    let url = queries != '' ? SALONSURL + '?' + queries : SALONSURL;
  

    const result = await fetchData(url, signal);
    return result;
};



export async function fetchSingelSalon({ slug, signal  }: {slug: string, signal: AbortSignal}) {
    let url = 'http://localhost:3000/salons/' + slug;
    
    console.log(url);
    
    
    const result = await fetchData(url, signal);
    return result[0];
};


export async function fetchServices({signal, id}: {signal: AbortSignal, id: string}) {

    const url = 'http://localhost:3000/salons/' + id;

    const result = await fetchData(url, signal);
    return result[0];
}
