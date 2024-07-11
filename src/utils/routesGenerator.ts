import { TRoute, TUserPath } from "../types";

// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

// type TUserPath = {
//   name: string;
//   path?: string;
//   element?: ReactNode;
//   Children?: TUserPath[];
// };

export const routeGenerator = (items: TUserPath[]) => {
  console.log(items);
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.Children) {
      item.Children.forEach((child) => {
        acc.push({
          path: child.path!, //not null option, mane obossoi string thakbe Children e
          element: child.element,
        });
        console.log(child.element);
      });
    }

    return acc;
  }, []);

  return routes;
};
