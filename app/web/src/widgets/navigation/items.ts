import {
  AlertTriangle,
  Calendar,
  CheckSquare,
  HelpCircle,
  LayoutDashboard,
  LayoutPanelLeft,
  type LucideIcon,
  Mail,
  MessageCircle,
  Settings,
  Shield,
  Users,
} from "lucide-react";

export interface NavItem {
  title: string;
  to: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    to: string;
    isActive?: boolean;
  }[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const NAVIGATION_DATA = {
  user: {
    name: "OctalMesh",
    email: "admin@octalmesh.com",
  },
  navGroups: [
    {
      label: "Dashboards",
      items: [
        {
          title: "Dashboard 1",
          to: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Dashboard 2",
          to: "/dashboard-2",
          icon: LayoutPanelLeft,
        },
      ],
    },
    {
      label: "Apps",
      items: [
        {
          title: "Mail",
          to: "/mail",
          icon: Mail,
        },
        {
          title: "Tasks",
          to: "/tasks",
          icon: CheckSquare,
        },
        {
          title: "Chat",
          to: "/chat",
          icon: MessageCircle,
        },
        {
          title: "Calendar",
          to: "/calendar",
          icon: Calendar,
        },
        {
          title: "Users",
          to: "/users",
          icon: Users,
        },
      ],
    },
    {
      label: "Pages",
      items: [
        {
          title: "Auth Pages",
          to: "#",
          icon: Shield,
          items: [
            {
              title: "Sign In",
              to: "/sign-in",
            },
            {
              title: "Sign Up",
              to: "/sign-up",
            },
            {
              title: "Forgot Password",
              to: "/forgot-password",
            },
          ],
        },
        {
          title: "Errors",
          to: "#",
          icon: AlertTriangle,
          items: [
            {
              title: "Unauthorized",
              to: "/unauthorized",
            },
            {
              title: "Forbidden",
              to: "/forbidden",
            },
            {
              title: "Not Found",
              to: "/not-found",
            },
            {
              title: "Internal Server Error",
              to: "/internal-server-error",
            },
            {
              title: "Under Maintenance",
              to: "/under-maintenance",
            },
          ],
        },
        {
          title: "Settings",
          to: "#",
          icon: Settings,
          items: [
            {
              title: "User Settings",
              to: "/settings/user",
            },
            {
              title: "Account Settings",
              to: "/settings/account",
            },
            {
              title: "Appearance",
              to: "/settings/appearance",
            },
            {
              title: "Notifications",
              to: "/settings/notifications",
            },
            {
              title: "Connections",
              to: "/settings/connections",
            },
          ],
        },
        {
          title: "FAQs",
          to: "/faqs",
          icon: HelpCircle,
        },
      ],
    },
  ],
};

export const FLAT_NAVIGATION_ITEMS = NAVIGATION_DATA.navGroups
  .flatMap((group) =>
    group.items.flatMap((item) => {
      if (item.items) {
        return item.items.map((subItem) => ({
          title: subItem.title,
          to: subItem.to,
          group: group.label,
          icon: item.icon,
        }));
      }
      return [
        {
          title: item.title,
          to: item.to,
          group: group.label,
          icon: item.icon,
        },
      ];
    }),
  )
  .filter((item) => item.to !== "#");
