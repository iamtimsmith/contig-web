import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("/game", "pages/game.tsx"),
  route("/rules", "pages/rules.tsx"),
  route("/settings", "pages/settings.tsx"),
] satisfies RouteConfig;
