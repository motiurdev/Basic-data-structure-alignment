class Queue{
    constructor() {
        this.queue = []
    }
    euqueue(element){
        this.queue.push(element)
    }

    dequeue(){
        return this.queue.shift()
    }
}

const premiks = new Queue()
premiks.euqueue("Rakib")
premiks.euqueue("Salman")
premiks.euqueue("Asik")
premiks.euqueue("Sakib")
premiks.euqueue("Bulbul")
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
premiks.dequeue()
console.log(premiks.queue)
