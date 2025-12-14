import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route("Sign-In", "routes/root/SignIn.tsx"),
    layout("routes/admin/AdminLayout.tsx", [
        route("dashboard","routes/admin/Dashboard.tsx"),
        route("allusers","routes/admin/AllUsers.tsx"),
    ])
] satisfies RouteConfig;
