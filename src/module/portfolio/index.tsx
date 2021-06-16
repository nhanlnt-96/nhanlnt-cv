import React, { FC, useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { portfolioContent } from "../../configs/portfolio.config";
import { Button, Modal } from "antd";
import { GithubOutlined, CodeOutlined } from "@ant-design/icons";

import "./Portfolio.scss";

const Portfolio: FC = () => {
  const [visible, setVisible] = useState(false);
  const [portfolioId, setPortFolioId] = useState(0);

  const onShowModalBtn = (id: number) => {
    setVisible(true);
    setPortFolioId(id);
  };

  const handleCancel = () => {
    setVisible(false);
    console.log(visible);
  };

  return (
    <div className='portfolio-component animation-class'>
      <div className='portfolio-title'>
        <AppstoreOutlined style={{ fontSize: "40px" }} />
        <h2>Portfolio</h2>
      </div>
      <div className='portfolio-content'>
        {portfolioContent.map((val) => (
          <div
            key={val.id}
            className='portfolio-item'
            onClick={() => onShowModalBtn(val.id)}
          >
            <div className='portfolio-img'>
              <img src={val.image} alt='portfolio-img' />
            </div>
            <div className='portfolio-text'>
              <h2>{val.title}</h2>
            </div>
          </div>
        ))}
      </div>
      {portfolioContent.map(
        (val) =>
          val.id === portfolioId && (
            <Modal
              visible={visible}
              title={val.title}
              footer={[
                <Button key='back' onClick={handleCancel}>
                  Cancel
                </Button>,
              ]}
              onCancel={handleCancel}
              width={700}
            >
              <img
                src={val.image}
                alt='portfolio-img'
                style={{ width: "100%" }}
              />
              <div className='subtitle-modal' style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  {val.subtitle}
                </p>
              </div>
              <div
                className='btn-modal'
                style={{
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button type='primary' icon={<GithubOutlined />} size='large'>
                  <a
                    href={val.github}
                    target='_blank'
                    rel='noreferrer'
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    Github
                  </a>
                </Button>
                <Button
                  type='primary'
                  icon={<CodeOutlined />}
                  size='large'
                  disabled={val.id === 2 && true}
                >
                  <a
                    href={val.live}
                    target='_blank'
                    rel='noreferrer'
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    Live version
                  </a>
                </Button>
              </div>
            </Modal>
          )
      )}
    </div>
  );
};

export default Portfolio;
