import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log("client");
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  client.close();
  return result;
}

export async function playCountIncrement(client, collection, document) {
  console.log("play-count");
  const db = client.db();

  const result = await db.collection(collection).findOneAndUpdate(document);
  client.close();
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  console.log("getAllDocs");
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .limit(10)
    .sort(sort)
    .toArray();
  // console.log("db-util", documents);
  console.log("check");
  client.close();
  return documents;
}

export async function getSelectedDocuments(
  client,
  collection,
  sort,
  filter = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  client.close();
  return documents;
}

export async function getDocument(client, collection, filter = {}) {
  const db = client.db();
  const documents = await db.collection(collection).findOne(filter);
  // console.log("db-util", documents);
  client.close();
  return documents;
}

// functions for incrementing playcount on 'shows' collection in 'some' database:
//  db.shows.update({"_id" : ObjectId("61814803d8966d7a88cf99e4") }, { $inc: { playCount: 1 } } )
