import { type ComponentType, lazy, Suspense } from "react";
import { Navigate, Outlet, type RouteObject, useRoutes } from "react-router-dom";
import { LoadingSpinner } from "@/shared/ui/loading-spinner.tsx";

// <editor-fold desc="Page Components (Lazy Loaded)">
const Dashboard = Loadable(lazy(() => import("@/pages/dashboard/page.tsx")));
const Dashboard2 = Loadable(lazy(() => import("@/pages/dashboard-2/page.tsx")));

const Mail = Loadable(lazy(() => import("@/pages/mail/page.tsx")));
const Tasks = Loadable(lazy(() => import("@/pages/tasks/page.tsx")));
const Chat = Loadable(lazy(() => import("@/pages/chat/page.tsx")));
const Calendar = Loadable(lazy(() => import("@/pages/calendar/page.tsx")));
const Users = Loadable(lazy(() => import("@/pages/users/page.tsx")));
const FAQs = Loadable(lazy(() => import("@/pages/faqs/page.tsx")));

const UserSettings = Loadable(lazy(() => import("@/pages/settings/user/page.tsx")));
const AccountSettings = Loadable(lazy(() => import("@/pages/settings/account/page.tsx")));
const AppearanceSettings = Loadable(lazy(() => import("@/pages/settings/appearance/page.tsx")));
const NotificationSettings = Loadable(lazy(() => import("@/pages/settings/notifications/page.tsx")));
const ConnectionSettings = Loadable(lazy(() => import("@/pages/settings/connections/page.tsx")));

const SignIn = Loadable(lazy(() => import("@/pages/auth/sign-in/page.tsx")));
const SignUp = Loadable(lazy(() => import("@/pages/auth/sign-up/page.tsx")));
const ForgotPassword = Loadable(lazy(() => import("@/pages/auth/forgot-password/page.tsx")));

const NotFound = Loadable(lazy(() => import("@/pages/errors/not-found/page.tsx")));
const Unauthorized = Loadable(lazy(() => import("@/pages/errors/unauthorized/page.tsx")));
const Forbidden = Loadable(lazy(() => import("@/pages/errors/forbidden/page.tsx")));
const InternalError = Loadable(lazy(() => import("@/pages/errors/internal-server-error/page.tsx")));
const Maintenance = Loadable(lazy(() => import("@/pages/errors/under-maintenance/page.tsx")));

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
