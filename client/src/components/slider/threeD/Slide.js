import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BgDiv = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  margin: 10px auto;
`;

const ImageDiv = styled.div`
  margin: 0;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 40%;
  z-index: 1;
  transform: scaleX(2) scaleY(1.1);
`;

const Slide = ({ imageUrl, bgImage, alt, name, setCatSlug, slug }) => {
  console.log(bgImage);
  return (
    <BgDiv backgroundImage={bgImage}>
      <ImageDiv>
        <div
          variant="dark"
          style={{
            // backgroundColor: '#f6e58d',
            padding: "10px",
            margin: "0px 10px",
            borderBottom: "solid 3px #019fb6",
          }}
          className="d-flex flex-column justify-content-center align-items-center hover-zoom"
          onClick={() => {
            setCatSlug(slug);
          }}
        >
          {/* <img src={imageUrl} alt={alt} className="img-thumbnail" />
          <small style={{ color: "#ffffff" }}>{name}</small> */}
          <Card style={{ width: "6.4rem" }} className="my-1 p-1 rounded">
            <Card.Body>
              <Link
                onClick={() => {
                  setCatSlug(slug);
                }}
                alt=""
              >
                <Card.Img
                  src={imageUrl}
                  style={{ height: "5rem" }}
                  variant="top"
                />
              </Link>
            </Card.Body>
            <Card.Footer>
              <Link
                onClick={() => {
                  setCatSlug(slug);
                }}
              >
                <Card.Text as="div">
                  <small className="badge bg-secondary  text-wrap">
                    {name}
                  </small>
                </Card.Text>
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </ImageDiv>
    </BgDiv>
  );
};

export default Slide;
