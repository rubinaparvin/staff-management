import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../Store/auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleFinish = (values: any) => {
    console.log(values);
    login();
    navigate("/app/staff");
  };
  return (
    <div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/colorful-shopping-bags_23-2147652050.jpg?semt=ais_hybrid&w=740"
          className="w-full h-full object-cover fixed"
        />
        <div className="flex flex-row items-center p-10 px-15 h-[100vh]">
          <Card className=" mx-[10px] w-100 h-[85vh] rounded-3xl ">
            <div className=" m-10 text-center  ">
              <h1 className="text-3xl  text-orange-400 font-bold ">
                Welcome Back
              </h1>
              <p className="text-slate-400 text-center p-2">
                Please enter your details
              </p>
            </div>

            <Form onFinish={handleFinish}>
              <Form.Item name={"email"}>
                <Input placeholder="Enter Email"></Input>
              </Form.Item>
              <Form.Item name={"password"}>
                {" "}
                <Input placeholder="Enter Password"></Input>
              </Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
