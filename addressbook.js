class AddressBook{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone_number;
    email;

    constructor(...params){
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phone_number=params[6];
        this.email=params[7];   
    }

    toString(){
        return "FirstName= " +this.firstname+ " LastName= " +this.lastname+ " Address= " +this.address+ " City= " 
        +this.city+ " State= " +this.zip+ " Zip= " +this.zip+ " PhoneNumber= " +this.phone_number+ " Email= " +this.email;
    }
}

let addressbook = new AddressBook("Deep","Saha","Ejipura","Bangalore","Karnataka",560047,9916522077,"deepsaha288@yahoo.com");
console.log(addressbook.toString());
