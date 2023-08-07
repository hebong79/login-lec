"use strict"
// 변수에 #을 붙이면 private 변수로 변환된다.
class UserStorage {
    static #users = {
        id : ["hdw", "김팀장", "공대장"],
        password : ["1234", "1234", "12345"], 
        name: ["hdw", "kim", "kong"],
    };
    

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if( users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        //console.log(newUsers)
        return newUsers;
    }
}

module.exports = UserStorage;