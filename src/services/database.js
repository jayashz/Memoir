import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("memories.db");

export async function dbInit() {
  try{
    await database.execAsync(`CREATE TABLE IF NOT EXISTS memories (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )`);
  }catch(error){
    console.log('Error initialization:',error);
  }

}

export async function insertMemory(memory) {
  try{
    await database.prepareAsync(`INSERT INTO memories (title, description, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          memory.title,
          memory.description,
          memory.imageUri,
          memory.address,
          memory.location.lat,
          memory.location.lng,
        ])
  } catch(error){
    console.log('Error in inserting to database:',error);
  }
  const res = await database.getAllAsync(`SELECT * FROM memories`);
  console.log(res);
}
