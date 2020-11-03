import { request }from "../../oauth/api/APIUtils";
import axios from "axios";

export default class FreeboardApi{

    FREE_API_URL="http://localhost:8088/api/freeboard/"

    // freeboardList(){
    //     return request({
    //         url: this.FREE_API_URL,
    //         method: 'GET'
    //     })
    // }

    freeboardList(){
        return axios.get(this.FREE_API_URL).then(
            (response)=> (response && response.date) || null
        )
    }
}