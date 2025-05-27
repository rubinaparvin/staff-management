import React from "react";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Store/auth";

const StaffHeader: React.FC = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  return (
    <Header className="flex items-center justify-between px-full bg-[#fff]">
      <div className="text-black text-xl font-bold">Staff Management</div>

      <Button
        type="primary"
        onClick={() => {
          navigate("/login");
          logOut();
        }}
      >
        Log Out
      </Button>
    </Header>
  );
};

export default StaffHeader;
