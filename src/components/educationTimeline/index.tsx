import React, { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { TrophyOutlined } from "@ant-design/icons";

import './EducationTimeline.scss';
import 'react-vertical-timeline-component/style.min.css';

const EducationTimeline: FC = () => {
  return (
    <div className="education-timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2020 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: '35px', textAlign: 'center' }}
          icon={<TrophyOutlined />}
        >
          <h3 className="vertical-timeline-element-title timeline-white-color">Aptech Computer Educationr</h3>
          <h4 className="vertical-timeline-element-subtitle timeline-white-color">Ho Chi Minh City</h4>
          <p>ADSE (Advanced Diploma in Software Engineering)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: '35px', textAlign: 'center' }}
          icon={<TrophyOutlined />}
        >
          <h3 className="vertical-timeline-element-title">University of Labour and Social Affairs
            (Campus II)</h3>
          <h4 className="vertical-timeline-element-subtitle">Ho Chi Minh City</h4>
          <p>Bachelor of Human Resource Management</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EducationTimeline;