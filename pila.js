// Definimos la clase Stack
class Stack {
  constructor() {
    this.items = [];
  }

  // Agregar elemento (push)
  push(element) {
    this.items.push(element);
  }

  // Eliminar el último elemento (pop)
  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  // Ver el último elemento (peek)
  peek() {
    return this.items[this.items.length - 1];
  }

  // Verificar si está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Tamaño de la pila
  size() {
    return this.items.length;
  }
}

// Crear una pila
const stack = new Stack();

// Insertar objetos
stack.push({ id: 1, nombre: "Juan" });
stack.push({ id: 2, nombre: "María" });
stack.push({ id: 3, nombre: "Pedro" });

console.log("Pila:", stack.items);

// Ver el elemento en la cima
console.log("Cima:", stack.peek());

// Sacar un elemento
console.log("Elemento eliminado:", stack.pop());

// Estado final
console.log("Pila final:", stack.items);