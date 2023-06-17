class ProductManager {
    constructor() {
        this.products = [];
        this.newProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title.trim() || !description.trim() || !price || !thumbnail.trim() || !code || !stock) {
            console.error("Error: todos los campos son obligatorios");
            return;
        }

        if (this.products.some((product) => product.code === code)) {
            console.error(`Error: el producto con el código ${code} ya existe`);
            return;
        }

        const newProduct = {
            id: this.newProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        this.newProductId++;

        console.log("Producto agregado con éxito. El nuevo producto es:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Error: producto no encontrado");
        }
    }
}

// Pruebas para ver si funciona ok el codigo de la clase ProductManager

const managerCreador = new ProductManager();

// Aca llamo a getProducts, para devolver un arreglo vacío []
console.log(managerCreador.getProducts());

// Aca agrego un producto utilizando el método addProduct. Estos son los datos que figuraban en la consigna
managerCreador.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);

console.log(managerCreador.getProducts());

//  aca agrego un producto con el mismo código, para que arroje error un error
managerCreador.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    50
);

// Solicito un producto que no existe con getProductById para que arroje el error
console.log(managerCreador.getProductById(10));

// Aca llamo a productos que existen con  getProductById 
console.log(managerCreador.getProductById(1));

// los dos primeros pruductos estan con los datos correctos para que se vea la creacion del Id en forma correlativa


managerCreador.addProduct(
    "Productos lácteos",
    "leche descremada",
    150,
    "https://static.cotodigital3.com.ar/sitios/fotos/medium/00290300/00290385.jpg?3.0.157a",
    145693,
    249
);

managerCreador.addProduct(
    "Productos lácteos",
    "leche entera",
    150,
    "https://static.cotodigital3.com.ar/sitios/fotos/medium/00170500/00170599.jpg?3.0.157a",
    145694,
    260
);

// en este caso cargue un code repetido para que me diga que el producto ya existe 
managerCreador.addProduct(
    "Productos lácteos",
    "leche larga vida",
    150,
    "https://static.cotodigital3.com.ar/sitios/fotos/medium/00508900/00508922.jpg?3.0.157a",
    145694,
    100
);

// En este caso no agregué el precio para que muestre un mensaje de error de campos obligatorios
managerCreador.addProduct(
    "Productos lácteos",
    "leche larga vida 2",
    150,
    "https://static.cotodigital3.com.ar/sitios/fotos/medium/00508900/00508922.jpg?3.0.157a",
    145695,

);

managerCreador.addProduct(
    "  leche  ",
    "leche larga vida 3",
    150,
    "https://static.cotodigital3.com.ar/sitios/fotos/medium/00508900/00508922.jpg?3.0.157a",
    145696,
    360
);




