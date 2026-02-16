import { type ComponentType, lazy, Suspense } from "react";
import { Navigate, Outlet, type RouteObject, useRoutes } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// <editor-fold desc="Page Components (Lazy Loaded)">
const Dashboard = Loadable(lazy(() => import("@/app/dashboard/page")));
const Dashboard2 = Loadable(lazy(() => import("@/app/dashboard-2/page")));

const Mail = Loadable(lazy(() => import("@/app/mail/page")));
const Tasks = Loadable(lazy(() => import("@/app/tasks/page")));
const Chat = Loadable(lazy(() => import("@/app/chat/page")));
const Calendar = Loadable(lazy(() => import("@/app/calendar/page")));
const Users = Loadable(lazy(() => import("@/app/users/page")));
const FAQs = Loadable(lazy(() => import("@/app/faqs/page")));

const UserSettings = Loadable(lazy(() => import("@/app/settings/user/page")));
const AccountSettings = Loadable(lazy(() => import("@/app/settings/account/page")));
const AppearanceSettings = Loadable(lazy(() => import("@/app/settings/appearance/page")));
const NotificationSettings = Loadable(lazy(() => import("@/app/settings/notifications/page")));
const ConnectionSettings = Loadable(lazy(() => import("@/app/settings/connections/page")));

const SignIn = Loadable(lazy(() => import("@/app/auth/sign-in/page")));
const SignUp = Loadable(lazy(() => import("@/app/auth/sign-up/page")));
const ForgotPassword = Loadable(lazy(() => import("@/app/auth/forgot-password/page")));

const NotFound = Loadable(lazy(() => import("@/app/errors/not-found/page")));
const Unauthorized = Loadable(lazy(() => import("@/app/errors/unauthorized/page")));
const Forbidden = Loadable(lazy(() => import("@/app/errors/forbidden/page")));
const InternalError = Loadable(lazy(() => import("@/app/errors/internal-server-error/page")));
const Maintenance = Loadable(lazy(() => import("@/app/errors/under-maintenance/page")));

// </editor-fold>

/**
 * The main route configuration for the application.
 * This array defines all the routes and their corresponding components.
 */
export function AppRoutes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/dashboard" replace />,
    },
    // Main Application Branch
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "dashboard-2", element: <Dashboard2 /> },
        { path: "mail", element: <Mail /> },
        { path: "tasks", element: <Tasks /> },
        { path: "chat", element: <Chat /> },
        { path: "calendar", element: <Calendar /> },
        { path: "users", element: <Users /> },
        { path: "faqs", element: <FAQs /> },
      ],
    },
    // Settings Branch
    {
      path: "settings",
      element: <Outlet />,
      children: [
        { path: "user", element: <UserSettings /> },
        { path: "account", element: <AccountSettings /> },
        { path: "appearance", element: <AppearanceSettings /> },
        { path: "notifications", element: <NotificationSettings /> },
        { path: "connections", element: <ConnectionSettings /> },
      ],
    },
    // Auth Branch
    {
      path: "auth",
      element: <Outlet />,
      children: [
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
        { path: "forgot-password", element: <ForgotPassword /> },
      ],
    },
    // Error Branch
    {
      path: "errors",
      children: [
        { path: "unauthorized", element: <Unauthorized /> },
        { path: "forbidden", element: <Forbidden /> },
        { path: "internal-server-error", element: <InternalError /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "not-found", element: <NotFound /> },
      ],
    },
    // Global 404 Catch-all
    { path: "*", element: <NotFound /> },
  ];

  return useRoutes(routes);
}

/**
 * HOC to wrap lazy-loaded components with `Suspense`.
 * This ensures consistent loading states across the application.
 *
 * @param Component - The component to be lazy loaded and wrapped in `Suspense`.
 * @returns A new component wrapped in `Suspense` with a fallback.
 */
function Loadable(Component: ComponentType<any>) {
  function WrappedComponent(props: any) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Component {...props} />
      </Suspense>
    );
  }

  const name = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `Loadable(${name})`;

  return WrappedComponent;
}
