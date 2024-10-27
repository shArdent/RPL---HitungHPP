import * as SQLite from "expo-sqlite";


export const db = SQLite.openDatabaseSync("produk.db");

export const initDb = async () => {
    try {
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    total_price FLOAT
);

CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    price FLOAT,
    unit TEXT CHECK(unit IN ('kg', 'g', 'l', 'ml', 'pcs', 'pack'))
);

CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    ingredient_id INTEGER,
    quantity FLOAT,
    ingredient_price FLOAT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);
        `);
    } catch (error) {
        console.log(error);
    }
};

export const showTable = async () => {
    try {
        const result = await db.getAllAsync("SELECT * FROM products;");

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}