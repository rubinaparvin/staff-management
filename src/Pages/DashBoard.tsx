import { Divider } from "antd";

const Dashboard = () => {
  return (
    <div className=" bg-slate-200 px-10 h-[100vh] ">
      <h1 className="text-3xl p-10 font-bold ">Dashboard</h1>
      <div
        style={{ borderRadius: "20px" }}
        className="flex-grow h-[75vh] bg-slate-100 px-6 py-4"
      >
        <div className=" flex flex-row p-2  justify-between w-full ">
          {" "}
          <p className=" text-center font-medium text-2xl">All Staff</p>
        </div>
        <Divider />
        <div className="flex justify-start gap-10 rounded-2xl ">
          <div
            style={{ borderRadius: "10px" }}
            className=" bg-white border-[#9254de] p-8"
          >
            <p> Total Staff</p>
            <p className="text-3xl font-bold mt-1">489</p>
          </div>{" "}
          <div style={{ borderRadius: "10px" }} className=" bg-white p-8">
            <p>Total Active Staff</p>
            <p className="text-3xl font-bold mt-1">129</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
