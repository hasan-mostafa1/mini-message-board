const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
indexRouter.get("/new", (req, res) =>
  res.render("form", { title: "New Message" }),
);
indexRouter.post("/new", (req, res) => {
  const newMessage = {
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});
module.exports = indexRouter;
