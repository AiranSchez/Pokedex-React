import axios from 'axios';

export default class Client {
    async getInfo (url:string) {
        return await axios.get(url);
    }
}