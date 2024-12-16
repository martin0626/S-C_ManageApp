

const fetchData = async (url, signal)=>{
    try{
        const response = await fetch(url, { signal: signal });

        if (!response.ok) {
            const error = new Error('An error occurred while fetching the events');
            error.code = response.status;
            error.info = await response.json();
            throw error;
        }

        const { salons } = await response.json();

        return salons;
    }catch(err){
        return err
    }
}


export async function fetchSalons({ signal, searchedName }) {
    console.log(searchedName);
    let url = 'http://localhost:3000/salons';
  
    if (searchedName) {
        url += '?name=' + searchedName;
    }

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
