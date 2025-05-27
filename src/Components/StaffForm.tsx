import React, { useEffect } from "react";
import { Button, Drawer, Form, Input } from "antd";
interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
  setStaffs: (e: any) => void;
  staffs: any[];
  selectedItem: any;
}
const StaffForm: React.FC<props> = ({
  open,
  setOpen,
  setStaffs,
  staffs,
  selectedItem,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedItem !== null) {
      form.setFieldsValue(selectedItem);
    }
  }, [selectedItem]);

  const onfinish = (e: any) => {
    e["id"] = staffs.length + 1;
    setStaffs([...staffs, e]);
    console.log(e);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        height={280}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <Form onFinish={onfinish} form={form}>
          <div className="flex flex-row">
            <Form.Item name="name">
              <Input placeholder="Name"></Input>
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Email"></Input>
            </Form.Item>{" "}
          </div>
          <div className="flex flex-row">
            <Form.Item name="role">
              <Input placeholder="Role"></Input>
            </Form.Item>{" "}
            <Form.Item name="status">
              <Input placeholder="Status  "></Input>
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default StaffForm;
