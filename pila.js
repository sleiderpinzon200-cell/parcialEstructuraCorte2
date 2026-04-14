class Pila {
    constructor() {
        this.items = [];
    }

    // Agregar elemento a la pila (push)
    push(elemento) {
        this.items.push(elemento);
        console.log("Agregado: " + elemento.Nombre + " - " + elemento.Edad);
    }

    // Eliminar elemento de la pila (pop)
    pop() {
        if (this.items.length === 0) {
            return null; // Pila vacía
        }
        let elemento = this.items.pop();
        console.log("Eliminado: " + elemento.Nombre + " - " + elemento.Edad);
        return elemento;
    }

    // Ver el elemento en la cima sin eliminarlo
    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Obtener el tamaño de la pila
    size() {
        return this.items.length;
    }
}

// Ejemplo de uso
let pila = new Pila();

// Agregar objetos
pila.push({ Nombre: "Orlando", Edad: 30 });
pila.push({ Nombre: "Ana", Edad: 25 });
pila.push({ Nombre: "Luis", Edad: 20 });
pila.push({ Nombre: "Maria", Edad: 28 });
// Eliminar el último elemento
let ultimo = pila.pop();
console.log(ultimo);
console.log(ultimo);
console.log("-------------------");
// Ver el elemento en la cima
console.log(pila.peek());
console.log("-------------------");
// Verificar si la pila está vacía
console.log(pila.isEmpty());
console.log("-------------------");
// Obtener el tamaño de la pila
console.log(pila.size());
console.log("-------------------");