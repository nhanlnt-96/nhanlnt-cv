import React, { FC } from 'react';
import { Divider, Progress } from "antd";
import { resumeCodeSkills, resumeDesignSkills } from "../../configs/resumeSkills.config";

import './ResumeSkills.scss';

const ResumeSkills: FC = () => {
  return (
    <div className="resume-skills-component">
      <div className="skills-code">
        <Divider>CODING SKILLS</Divider>
        <div className="skills-item">
          {
            resumeCodeSkills.map((val) =>
              <Progress
                key={val.id}
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={val.percent}
                format={() => val.label}
              />
            )
          }
        </div>
      </div>
      <div className="skills-design">
        <Divider>DESIGN SKILLS</Divider>
        <div className="skills-item">
          {
            resumeDesignSkills.map((val) =>
              <Progress
                key={val.id}
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={val.percent}
                format={() => val.label}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;