const { Router } = require("express");
const messageController = require("../controllers/messageController");
const indexRouter = Router();

indexRouter.get("/", messageController.index);
indexRouter.get("/messages/:id", messageController.show);
indexRouter.get("/new", messageController.create);
indexRouter.post("/new", messageController.store);

module.exports = indexRouter;
