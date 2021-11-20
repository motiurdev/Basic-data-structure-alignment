class Dictionary {
    constructor() {
        this.dictionary = {}
    }

    add(key,value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key]
    }
}

const person = new Dictionary;
person.add("name","Motiur")
person.add("phone","01980605303")
person.get("name")
console.log(person.dictionary)