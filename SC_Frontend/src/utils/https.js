export async function fetchSalons({ signal, searchTerm, paginate, sort, fields }) {
    console.log(searchTerm);
    let url = 'http://localhost:3000/salons';
  
    if (searchTerm) {
        url += '?name=' + searchTerm;
    }
  
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