import React, { FC } from 'react';
import { FileTextOutlined } from "@ant-design/icons";

const Resume: FC = () => {
  return (
    <>
      <div className="resume-title">
        <FileTextOutlined />
        <h2>Resume</h2>
      </div>
    </>
  );
};

export default Resume;