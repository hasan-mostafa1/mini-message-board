const db = require("../db/queries");

async function index(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function show(req, res) {
  const message = await db.getMessage(req.params.id);
  res.render("message", { message: message[0] });
}

function create(req, res) {
  res.render("form", { title: "New Message" });
}

async function store(req, res) {
  const newMessage = {
    sender: req.body.sender,
    text: req.body.message,
    added: new Date(),
  };
  await db.addMessage(newMessage.text, newMessage.sender, newMessage.added);
  res.redirect("/");
}

module.exports = { index, show, create, store };
