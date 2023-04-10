import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";
// import NewComment from "../../../components/input/new-comment";

async function handler(req, res) {
  // const tag = req.query;
  // const showTag = req.query.tags;
  // console.log("api-tag", Object.values(tag));
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connnecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    const enteredShowTitle = req.body.title;
    const enteredTag = req.body.tag;
    const enteredShowMessage = req.body.message;
    const enteredAudioSrc = req.body.audioSrc;
    const enteredTrackDetails = req.body.trackDetails;

    if (!enteredShowTitle) {
      res.status(422).json({ message: "You must enter a title for this show" });
      return;
    }

    if (!enteredTag) {
      res.status(422).json({
        message: "You must enter a tag for this show to display correctly",
      });
      return;
    }

    if (!enteredAudioSrc) {
      res.status(422).json({
        message: "Do you really think this is going to work without audio?",
      });
      return;
    }

    if (!enteredTrackDetails) {
      res.status(422).json({ message: "You must enter a tracklist" });
      return;
    }

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connnecting to the database failed" });
      return;
    }

    const newShow = {
      title: enteredShowTitle,
      tag: enteredTag,
      message: enteredShowMessage,
      audioSrc: enteredAudioSrc,
      trackDetails: enteredTrackDetails,
      // id: tag,
    };

    let result;

    try {
      result = await insertDocument(client, "shows", newShow);
      newShow._id = result.insertedId;
      res.status(201).json({ message: "added show", show: newShow });
      // client.close()
    } catch (error) {
      res
        .status(500)
        .json({ message: "inserting data to the database failed" });
      return;
    }

    res.status(201).json({ message: "Show Player data submitted!!" });
  }

  if (req.method === "GET") {
    let shows;

    try {
      let documents = await getAllDocuments(client, "shows", { _id: -1 }); // maybe add this to filter at the end: , { showId: showId }
      // documents = await documents.filter((document) => document.tag !== tag);

      res.status(200).json({ shows: documents });
    } catch (error) {
      res.status(500).json({ message: "Fetching shows failed" });
    }
  }
}

export default handler;
