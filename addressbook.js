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

        let regexname = new RegExp('[A-Z]{1}[a-z]{3,}');
        let regexaddress = new RegExp('[A-Z]{1}[a-z]{4,}');
        let regexpincode = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        let regexphone = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        let emailregex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

        if( regexname.test(params[0]) && regexname.test(params[1]) ){
            this.firstname = params[0];
            this.lastname = params[1];
        }else{ throw "Incorrect name"; }

        if( regexaddress.test(params[2]) && regexaddress.test(params[3]) && regexaddress.test(params[4]) ){
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        }else{ throw "Incorrect Address or City or State"; }

        if( regexpincode.test(params[5]) ){
            this.zip = params[5];
        }else{ throw "Incorrect Pincode"; }

        if( regexphone.test(params[6]) ){
            this.phone_number = params[6];
        }else{ throw "Incorrect PhoneNumber"; }

        if( emailregex.test(params[7]) ){
            this.email = params[7];   
        }else{ throw "Incorrect Email Id"; }
    }

    get getfirstname(){ return this.firstname; }
    
    set setfirstname(firstname){ 
        let regexname = RegExp('[A-Z]{1}[a-z]{3,}');
        if(regexname.test(firstname)){
            this.firstname = firstname;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    toString(){
        return "FirstName= " +this.firstname+ " LastName= " +this.lastname+ " Address= " +this.address+ " City= " 
        +this.city+ " State= " +this.state+ " Zip= " +this.zip+ " PhoneNumber= " +this.phone_number+ " Email= " +this.email;
    }
}

let addressBook = [];
try{
    let contact1 = new AddressBook("Mark","Robinson","Malibu","Venice","California",100019,9019291971,"mark@gmail.com");
    let contact2 = new AddressBook("Robert","Downey","Broklyn","Manhattan","Newyork",300013,8918192191,"robert@gmail.com");
    
    addressBook.push(contact1); 
    addressBook.push(contact2);
    
    if( contact1.getfirstname == "Mark" ){
        contact1.setfirstname = "Maggie";
    }
}catch(e){
    console.error(e);
}

console.log(addressBook);
