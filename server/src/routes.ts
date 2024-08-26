import { Hono } from "hono";
import { BlankEnv, BlankSchema } from "hono/types";
import { indexRoutes } from "./bot";

export function registerRoutes(app: Hono<BlankEnv, BlankSchema, "/">) {
  const apiRoutes = app.basePath("/api").route("/", indexRoutes);

  return apiRoutes;
}
