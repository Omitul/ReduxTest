import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashBoard";
import { CreateAdmin } from "../pages/admin/CreateAdmin";
import { CreateFaculty } from "../pages/admin/CreateFaculty";
import { CreateStudent } from "../pages/admin/CreateStudent";

// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

// type TSidebarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSidebarItem[];
// };

export const AdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    Children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

// eslint-disable-next-line react-refresh/only-export-components
// export const adminSidebarItems = AdminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.Children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.Children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//programmatical way
// export const AdminRoutes = AdminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.Children) {
//     item.Children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

///hardcoded way
// const AdminPaths = [
//   { index: true, element: <AdminDashBoard></AdminDashBoard> },
//   { path: "dashboard", element: <AdminDashBoard></AdminDashBoard> },
//   { path: "create-student", element: <CreateStudent></CreateStudent> },
//   { path: "create-admin", element: <CreateAdmin></CreateAdmin> },
//   { path: "create-faculty", element: <CreateFaculty></CreateFaculty> },
// ];
