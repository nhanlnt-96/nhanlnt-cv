import React, { FC } from "react";
import {
  PhoneOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PushpinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import "./Contact.scss";

const ContactComponent: FC = () => {
  return (
    <div className='contact-component animation-class'>
      <div className='contact-title'>
        <PhoneOutlined style={{ fontSize: "40px" }} />
        <h2>Contact</h2>
      </div>
      <div className="contact-container">
        <div className='contact-social'>
          <Divider>CONNECT ME</Divider>
          <div className='social-item'>
            <a
              href='https://www.facebook.com/thiennhan.lenguyen/'
              target='_blank'
              rel='noreferrer'
              className='down-link'
            >
              <FacebookOutlined style={{ fontSize: "50px" }} />
            </a>
            <a
              href='https://www.linkedin.com/in/nhanlnt'
              target='_blank'
              rel='noreferrer'
              className='down-link'
            >
              <LinkedinOutlined style={{ fontSize: "50px" }} />
            </a>
            <a
              href='https://github.com/nhanlnt-96'
              target='_blank'
              rel='noreferrer'
              className='down-link'
            >
              <GithubOutlined style={{ fontSize: "50px" }} />
            </a>
          </div>
        </div>
        <div className='contact-reach'>
          <Divider>REACH ME</Divider>
          <div className='reach-item'>
            <p>
              <PushpinOutlined /> Ho Chi Minh City
            </p>
            <p>
              <PhoneOutlined /> 0981 939 841
            </p>
            <p>
              <MailOutlined /> nhanlnt@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
