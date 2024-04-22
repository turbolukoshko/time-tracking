export type RouteType = {
  name: string;
  path: string;
};

export const routes: RouteType[] = [
  {
    name: "Daily",
    path: "/daily",
  },
  {
    name: "Weekly",
    path: "/weekly",
  },
  {
    name: "Monthly",
    path: "/monthly",
  },
];
