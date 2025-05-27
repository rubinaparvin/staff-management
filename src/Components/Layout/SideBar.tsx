import { ProductOutlined, TeamOutlined } from "@ant-design/icons";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/app/dashboard" />}>
          {" "}
          <ProductOutlined />
          Dashboard
        </MenuItem>
        <MenuItem component={<Link to="/app/staff" />}>
          <TeamOutlined /> Staff
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
