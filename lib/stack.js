class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (this.isEmpty()) throw new Error('Stack is already empty');
        return this.elements.pop();
    }

    size() {
        return this.elements.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        return this.elements.join('');
    }

    peek() {
        if (this.isEmpty()) throw new Error('Stack is already empty');
        return this.elements[this.elements.length - 1];
    }
}

module.exports = Stack