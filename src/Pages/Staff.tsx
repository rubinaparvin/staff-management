import { Button, Divider } from "antd";
import StaffTable from "../Components/StaffTable";
import StaffForm from "../Components/StaffForm";
import { useState } from "react";

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [staffs, setStaffs] = useState([
    {
      name: "Trivenugopal Kadali",
      email: "Trivenugopal@gmail.com",
      role: "manager",
      status: "active",
    },
  ]);
  return (
    <div className=" bg-slate-200 px-10 h-[100vh] ">
      <h1 className="text-3xl p-10 font-bold ">Manage Staff</h1>
      <div
        style={{ borderRadius: "20px" }}
        className="flex-grow h-[75vh] bg-white px-6 py-4"
      >
        <div className=" flex flex-row p-2  justify-between w-full ">
          {" "}
          <p className=" text-center font-medium text-2xl">All Staff</p>
          <Button
            type="primary"
            className=" flex flex-row"
            onClick={() => setOpen(true)}
          >
            Add Staff
          </Button>
        </div>
        <Divider />
        <StaffTable data={staffs} />
        <StaffForm
          open={open}
          setOpen={setOpen}
          setStaffs={setStaffs}
          staffs={staffs}
        />
      </div>
    </div>
  );
};

export default Staff;
