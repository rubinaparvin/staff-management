import React from "react";
import { Button, Space, Table } from "antd";
import type { TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface props {
  data: any;
  handleDelete: (record: any) => void;
  handleEdit: (record: any) => void;
}

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
  tags: string[];
}

const StaffTable: React.FC<props> = ({ data, handleDelete, handleEdit }) => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Email  Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>
            <EditOutlined />
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return <Table<DataType> columns={columns} dataSource={data} />;
};

export default StaffTable;
