import React, { useEffect, useState } from "react";
import FormContainer from "../../components/FormContainer";
import ItemSearch from "../../components/ItemSearch";
import { Form, Button, Row, Table, Image } from "react-bootstrap";
import Resizer from "react-image-file-resizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  createCategory,
  deleteCategory,
  listCategory,
  categoryUploadFile,
} from "../../actions/categoryActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import CategoryImageUploader from "../../components/form/CategoryImageUploader";
import {
  CATEGORY_CREATE_RESET,
  UPLOAD_CATEGORY_IMAGE_RESET,
} from "../../constants/categoryConstants";
import { useNavigate } from "react-router-dom";

const CategoryScreen = () => {
  const alert = useAlert();
  const [errorMessage, setErrorMessage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //check logged in user
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  //showCategory list
  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: loadingCategory,
    categories,
    error: errorCategory,
  } = categoryList;

  //delete category
  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { success: successDelete } = categoryDelete;

  //create category
  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, success, error } = categoryCreate;

  useEffect(() => {
    if (userInfo && userInfo.role === "admin") {
      dispatch(listCategory());
      if (success) {
        alert.success("Category Created");
        setCategory("");
        setImage({});
        dispatch({ type: UPLOAD_CATEGORY_IMAGE_RESET });
        dispatch({ type: CATEGORY_CREATE_RESET });
      }
    } else {
      navigate("/");
    }
  }, [dispatch, userInfo, success, successDelete, alert, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory({ category, image }));
  };

  const deleteHandler = (slug) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(deleteCategory(slug));
    }
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        150,
        150,
        "PNG",
        100,
        0,
        (uri) => {
          setErrorMessage("");
          dispatch(categoryUploadFile(uri));
        },
        "base64"
      );
    }
  };

  const searched = (keyword) => (category) =>
    category.name.toLowerCase().includes(keyword);
  return (
    <>
      <FormContainer>
        {success && <Message variant="success">Category Added</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler} className="my-5">
          <Form.Group controlId="image" className="mt-1">
            <CategoryImageUploader
              setImage={setImage}
              image={image}
              onError={errorMessage}
            />
            {image && !image.public_id && (
              <Form.Control
                className="mt-3"
                type="file"
                onChange={uploadFileHandler}
                accept="image/*"
                size="md"
              />
            )}
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="my-3"
            disabled={loading}
          >
            Create {loading && <Loader size="size-sm" />}
          </Button>
        </Form>
      </FormContainer>
      <Row>
        {loadingCategory ? (
          <Loader />
        ) : errorCategory ? (
          <Message variant="danger">{errorCategory}</Message>
        ) : (
          <>
            <ItemSearch setKeyword={setKeyword} keyword={keyword} />
            <Table
              striped
              bordered
              hover
              responsive
              className="table-sm"
              variant="dark"
            >
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>SLUG</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {categories.filter(searched(keyword)).map((category) => (
                  <tr key={category._id}>
                    <td>
                      <Image
                        src={category?.image?.url}
                        rounded
                        style={{ width: "40px" }}
                      />
                    </td>
                    <td>{category.name}</td>
                    <td>{category.slug}</td>
                    <td>
                      <LinkContainer
                        to={`/admin/category/${category.slug}/edit`}
                      >
                        <Button variant="dark" className="btn-sm">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(category.slug)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Row>
    </>
  );
};

export default CategoryScreen;
