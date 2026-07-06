import app from "./src/app.js"
import authRouter from "./routes/auth.routes.js"
import { connectDB } from "./src/config/database.js"

connectDB();

app.use("/api/auth", authRouter);
app.listen(3000);