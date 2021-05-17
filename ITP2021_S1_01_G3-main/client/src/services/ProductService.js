import axios from "../helpersAdmin/axios";

class ProductService{
    getInitialData(){
        return axios.post("http://localhost:5000/api/initialData");
    }
}

export default new ProductService()