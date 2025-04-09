export default function handler(req, res) {
  const VERIFY_TOKEN = "garveetop";

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else if (req.method === "POST") {
    const body = req.body;
    console.log("Received webhook:", JSON.stringify(body, null, 2));
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
}
