import { Router } from "express";
import {
  getBlog,
  getDestination,
  getPackage,
  listBlogs,
  listDestinations,
  listPackages
} from "../controllers/catalogController";

export const catalogRouter = Router();

catalogRouter.get("/destinations", listDestinations);
catalogRouter.get("/destinations/:slug", getDestination);
catalogRouter.get("/packages", listPackages);
catalogRouter.get("/packages/:slug", getPackage);
catalogRouter.get("/blogs", listBlogs);
catalogRouter.get("/blogs/:slug", getBlog);
