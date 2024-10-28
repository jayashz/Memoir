import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseAsync("memories.db");

export function dbInit() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS memories (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}