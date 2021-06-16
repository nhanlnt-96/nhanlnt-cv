import React, { FC } from "react";
import { DownloadOutlined, FileTextOutlined } from "@ant-design/icons";
import EducationTimeline from "../../components/educationTimeline";
import { Button } from "antd";
import ResumeSkills from "../../components/resumeSkills";

import "./Resume.scss";

const Resume: FC = () => {
  return (
    <div className='resume-component animation-class'>
      <div className='resume-container'>
        <div className='resume-title'>
          <FileTextOutlined style={{ fontSize: "40px" }} />
          <h2>Resume</h2>
        </div>
        <div className="resume-body">
          <div className='resume-content'>
            <div className='resume-education'>
              <EducationTimeline />
            </div>
            <div className='resume-skills'>
              <ResumeSkills />
            </div>
          </div>
          <div className='resume-download'>
            <Button type='primary' icon={<DownloadOutlined />} size='large'>
              <a
                href='https://nhanlnt-96.github.io/a4-cv/'
                target='_blank'
                rel='noreferrer'
                className='down-link'
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
