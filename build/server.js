import cors from "cors";
import express, { Router } from "express";
import { router } from "./router.js";
const app = express();
app.use(cors());
app.use("/api", router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map