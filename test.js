const AdminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "<AdminDashBoard></AdminDashBoard>,",
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: " <CreateAdmin></CreateAdmin>,",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent></CreateStudent>,",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty></CreateFaculty>,",
      },
    ],
  },
];

const newArray = AdminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.Children) {
    item.Children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

console.log(newArray);
