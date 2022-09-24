import { Express } from "express";
import clientRouter from "./client.routes";
import contactRouter from "./countact.routes";

const appRoutes = (app: Express) => {
  app.use("/clients", clientRouter);
  app.use("/contacts", contactRouter);
  // app.use("/genres", genreRouter);
  // app.use("/login", sessionRouter);
  // app.use("/movies", moviesRouter);
  // app.use("/reviews", reviewsRouter);
};

export default appRoutes;
