import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface props {
  data: any;
}

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
  tags: string[];
}

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
    render: () => (
      <Space size="middle">
        <Button>
          <EditOutlined />
        </Button>
        <Button>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const StaffTable: React.FC<props> = ({ data }) => (
  <Table<DataType> columns={columns} dataSource={data} />
);

export default StaffTable;
