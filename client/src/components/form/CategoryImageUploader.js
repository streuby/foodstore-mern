import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import demoImage from "../../image/image-placeholder.png";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Message from "../Message";
import { categoryRemoveFile } from "../../actions/categoryActions";
import {
  REMOVE_CATEGORY_IMAGE_RESET,
  UPLOAD_CATEGORY_IMAGE_RESET,
} from "../../constants/categoryConstants";

const CategoryImageUploader = ({ setImage, image, onError }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const categoryFileUpload = useSelector((state) => state.categoryFileUpload);
  const { loading, uploadData, error, success } = categoryFileUpload;

  const categoryFileRemove = useSelector((state) => state.categoryFileRemove);
  const {
    loading: loadingFileRemove,
    error: errorFileRemove,
    success: successFileRemove,
  } = categoryFileRemove;

  useEffect(() => {
    setImage(uploadData);
    if (successFileRemove) {
      dispatch({ type: UPLOAD_CATEGORY_IMAGE_RESET });
      dispatch({ type: REMOVE_CATEGORY_IMAGE_RESET });
    }
  }, [uploadData, setImage, successFileRemove, dispatch]);

  useEffect(() => {
    setErrorMessage(onError);
  }, [onError]);

  const removeImageHandler = (public_id) => {
    dispatch(categoryRemoveFile(public_id));
  };

  return (
    <Row className="d-flex align-items-end">
      <Form.Label>Upload Image</Form.Label>
      {error && <Message riant="danger">{error}</Message>}
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      {errorFileRemove && <Message variant="danger">{errorFileRemove}</Message>}
      <Col md={4}>
        {image && image.url ? (
          <Image src={image.url} thumbnail fluid />
        ) : (
          <Image src={demoImage} thumbnail fluid />
        )}
      </Col>
      <Col md={6}>
        {image && image.public_id && (
          <Button
            variant="danger"
            onClick={() => removeImageHandler(image.public_id)}
          >
            Remove Image
          </Button>
        )}
      </Col>
      <Col md={2}>
        {loading || loadingFileRemove ? (
          <Loader size="size-sm" />
        ) : success ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default CategoryImageUploader;
