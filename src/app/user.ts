export interface User {
  id:number;
  name:string;
  username:string;
  email:string;
  phone:string;
  website:string;
  company?:Company;
  address?:Address;
}

export interface Company {
  name:string;
  cactchPhrase:string;
  bs:string;
}


export interface Address {
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo?:Geo
}

export interface Geo {
  lat:string;
  lng:string;
}