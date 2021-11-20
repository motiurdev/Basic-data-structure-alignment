class Stack {
    constructor(){
        this.stack = []
    }
    add(element){
         this.stack.push(element)
    }
    remove(){
        return this.stack.pop()
    }
}

const palties = new Stack()
palties.add("Motiur")
palties.add("Misu")
palties.add("Bolbul")
palties.add("Kabul")
palties.add("kamal")

console.log(palties.stack)
palties.remove()
console.log(palties.stack)
palties.remove()
console.log(palties.stack)
