import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../Routes/AdminRoutes";
import { facultyPaths } from "../../Routes/FacultyRoutes";
import { studentPaths } from "../../Routes/StudentRoutes";
import { useAppSelector } from "../../redux/features/hook";
import { SelectCurrentUser } from "../../redux/features/Auth/AuthSlice";

const userRole = {
  ADMIN: "superAdmin",
  STUDENT: "student",
  FACULTY: "faculty",
};

export const Sidebar = () => {
  let sidebarItems;
  //const role = "admin";
  const user = useAppSelector(SelectCurrentUser);
  console.log(user.role);
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(AdminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;
  }
  return (
    <Sider>
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH UNIVERSITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};
