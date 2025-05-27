import { Button, Divider } from "antd";
import StaffTable from "../Components/StaffTable";
import StaffForm from "../Components/StaffForm";
import { useState } from "react";

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [staffs, setStaffs] = useState([
    {
      id: 1,
      name: "Trivenugopal Kadali",
      email: "Trivenugopal@gmail.com",
      role: "manager",
      status: "active",
    },
  ]);
  const [SelectedItem, setSelectedItem] = useState(null);

  const handleEdit = (_record: any) => {
    setOpen(true);
    setSelectedItem(_record);
  };

  const handleDelete = (record: any) => {
    console.log(record);
    setStaffs(staffs.filter((e) => e.id !== record.id));
  };
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
        <StaffTable
          data={staffs}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <StaffForm
          open={open}
          setOpen={setOpen}
          setStaffs={setStaffs}
          staffs={staffs}
          selectedItem={SelectedItem}
        />
      </div>
    </div>
  );
};

export default Staff;
