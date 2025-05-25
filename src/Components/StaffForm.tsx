import React from "react";
import { Button, Drawer, Form, Input } from "antd";
interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
  setStaffs: (e: any) => void;
  staffs: any[];
}
const StaffForm: React.FC<props> = ({ open, setOpen, setStaffs, staffs }) => {
  const onfinish = (e: any) => {
    console.log(e);
    setStaffs([...staffs, e]);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <Form onFinish={onfinish}>
          <Form.Item name="name">
            <Input placeholder="Name"></Input>
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Email"></Input>
          </Form.Item>{" "}
          <Form.Item name="role">
            <Input placeholder="Role"></Input>
          </Form.Item>{" "}
          <Form.Item name="status">
            <Input placeholder="Status  "></Input>
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default StaffForm;
