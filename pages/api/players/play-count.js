import { connectDatabase, getDocument } from "../../../helpers/db-util";
// import NewComment from "../../../components/input/new-comment";

async function handler(req, res) {
  const showId = req.body.showId;
  console.log("play-count", showId);

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connnecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    // const enteredPlayclicks = req.body.playclicks;
    // const enteredTag = req.body.tag;
    // const enteredShowMessage = req.body.message;
    // const enteredAudioSrc = req.body.audioSrc;
    // const enteredTrackDetails = req.body.trackDetails;

    // if (!enteredShowTitle) {
    //   res.status(422).json({ message: "You must enter a title for this show" });
    //   return;
    // }

    // if (!enteredTag) {
    //   res.status(422).json({ message: "You must enter a tag for this show to display correctly" });
    //   return;
    // }

    // if (!enteredAudioSrc) {
    //   res.status(422).json({ message: "Do you really think this is going to work without audio?" });
    //   return;
    // }

    // if (!enteredTrackDetails) {
    //   res.status(422).json({ message: "You must enter a tracklist" });
    //   return;
    // }

    // try {
    //   client = await connectDatabase();
    // } catch (error) {
    //   res.status(500).json({ message: "Connnecting to the database failed" });
    //   return;
    // }

    // const newShow = {
    //   title: enteredShowTitle,
    //   tag: enteredTag,
    //   message: enteredShowMessage,
    //   audioSrc: enteredAudioSrc,
    //   trackDetails: enteredTrackDetails,
    //   id: showId,
    // };

    let result;
    const showIdJson = JSON.parse(showId);
    let ObjectId = require("mongodb").ObjectId;
    console.log("ObjectId", ObjectId(showIdJson));
    const db = client.db("timeline");

    try {
      // const showIdJson = JSON.parse(showId);
      console.log("try", showIdJson);
      result = await db
        .collection("shows")
        .updateOne({ _id: ObjectId(showIdJson) }, { $inc: { playCount: 1 } });
      console.log("result", result);
      res.status(201).json({ message: "Play counter udated" });
      // return result;
      // playCountIncrement(
      //   client,
      //   "shows",
      //   { _id: showId },
      //   { $inc: { playCount: 1 } }
      // );

      // res.status(201).json({ message: "Updated Play Count" });
      // client.close();
    } catch (error) {
      res.status(500).json({ message: "inserting data to the database failed" });
      return;
    }

    // const db = client.db();

    // await db.collection("emails").insertOne({ email: userEmail });

    // res.status(201).json({ message: "Show Player data submitted!!" });
  }

  if (req.method === "GET") {
    console.log("get");
    let shows;
    const showId = req.query;
    console.log("GETshowId", showId);
    // const showIdJson = JSON.parse(showId);
    console.log("getShowIdJSON", showId);
    let ObjectId = require("mongodb").ObjectId;
    console.log("countGET", ObjectId(showId));
    // const db = client.db("timeline");

    // const tag = req.query;
    try {
      console.log("getTRY");
      let document = await getDocument(client, "shows", { showId: ObjectId(showId) }); // maybe add this to filter at the end: , { showId: showId }
      // documents = await documents.filter((document) => document.tag !== tag);
      res.status(200).json({ show: document });
      // console.log("api-documents", documents);
    } catch (error) {
      res.status(500).json({ message: "Fetching show failed" });
    }
  }

  client.close();
  // res.status(201).json({ message: "Signed Up!!" });
}

export default handler;
