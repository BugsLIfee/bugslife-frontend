class UserApiModel{
    uid = "";
    email = "";
    name = "";
    point= "";
    level = "";
    enrollDate = "";
    
    
    constructor( email,name) {
        let date = new Date();
        let simpleDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        let default_value = 1;
        
        this.uid = uid;
        this.email = email;
        this.name = name;
        this.point = default_value;
        this.level = default_value;
        this.enrollDate = simpleDate;
    }

    
    

}

export default UserApiModel;