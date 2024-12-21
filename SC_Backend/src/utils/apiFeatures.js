class APIFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }


    filterServices(){
        const { services } = this.queryString;
        
        let servicesArr = services ? services.split(',') : [];

        if(servicesArr.length > 0){
            this.query = this.query.find({services: {$in: servicesArr}});
        }
        
        
        return this;
    }


    filterCities(){
        const { city } = this.queryString;
        
        let cities = city ? city.split(',') : [];

        if(cities.length > 0){
            this.query = this.query.find({ city: { $in: cities }});
        }
        
        return this;
    }

    searchByName(){
        const { search } = this.queryString;

        this.query = this.query.find({name: new RegExp(search, 'i')});

        return this;
    }


    filter(){
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields', 'search', 'city', 'services'];
        excludedFields.forEach(el => delete queryObj[el]);

        // 1B) Advanced filtering
        let queryStr = JSON.stringify(queryObj);
        
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, match => `$${match}`);


        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    sort(){
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }else {
            this.query = this.query.sort('-rating');
        }
    
        return this;
    }

    limitFields(){
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }
      
        return this;
    }

    paginate(){
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;
    
        this.query = this.query.skip(skip).limit(limit);
    
        return this;
    }
}

module.exports = APIFeatures;