const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => res.send("OH BOY... not good. Wrong route!"));

module.exports = router;
