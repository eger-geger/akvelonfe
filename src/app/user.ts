export class User {
    constructor(
        public email:string,
        public firstname:string,
        public lastname:string,
        public birthdate:Date,
        readonly id:number = getUserId()
    ){

    }
}

function getUserId():number{
    return new Date().getTime() + Math.random()*1000000;
}