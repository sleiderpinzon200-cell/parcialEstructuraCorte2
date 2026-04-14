class Cola {
    constructor() {
        this.items = [];
    }

    // Agregar elemento a la cola (enqueue)
    enqueue(elemento) {
        this.items.push(elemento);
        console.log("Agregado: " + elemento);
    }

    // Eliminar elemento de la cola (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            console.log("La cola está vacía");
            return null;
        }
        let elemento = this.items.shift();
        console.log("Eliminado: " + elemento);
        return elemento;
    }

    // Ver el elemento al frente sin eliminarlo
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    // Verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Obtener el tamaño de la cola
    size() {
        return this.items.length;
    }
}

// Ejemplo de uso
let cola = new Cola();

// Agregar números
cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);

// Eliminar números
cola.dequeue();
cola.dequeue();
