class UserApiModel{
    uid = "";
    email = "";
    name = "";
    point= "";
    level = "";
    enrollDate = "";
    
    
    constructor( uid, email,name, enrollDate) {
     
        let default_value = 1;
        this.uid = uid;
        this.email = email;
        this.name = name;
        this.point = default_value;
        this.level = default_value;
        this.enrollDate = enrollDate;
    }

    
    

}

export default UserApiModel;