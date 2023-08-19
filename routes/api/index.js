const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const friendsRoutes = require("./friendsRoutes");
const reactionRoutes = require("./reactionRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("./friendlist", friendsRoutes);
router.use("/reaction", reactionRoutes);
