import { Divider } from "antd";

const Dashboard = () => {
  return (
    <div className=" bg-slate-200 px-10 h-[100vh] ">
      <h1 className="text-3xl p-10 font-bold ">Dashboard</h1>
      <div
        style={{ borderRadius: "20px" }}
        className="flex-grow h-[75vh] bg-white px-6 py-4"
      >
        <div className=" flex flex-row p-2  justify-between w-full ">
          {" "}
          <p className=" text-center font-medium text-2xl">All Staff</p>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default Dashboard;
