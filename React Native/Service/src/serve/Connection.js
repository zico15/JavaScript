import axios from 'axios';

export default class Connection {


    constructor(){
        this.data = {};        
        this.api = axios.create({
            baseURL: 'https://old-kids-feel-87-196-72-98.loca.lt'
    });
    }

    async get(url){
        const { data } = await this.api.get(url);
        this.data = data;
        return await this.data;
    }
}
