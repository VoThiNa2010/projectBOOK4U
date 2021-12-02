import axios from "axios";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_PRODUCTS_FAIL,
  CATEGORY_LIST_PRODUCTS_REQUEST,
  CATEGORY_LIST_PRODUCTS_SUCCESS,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
} from "../constants/categoryConstants";

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get("/api/category");
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsOfCategory = (pathName) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/api/category/getproducts/${pathName}`);
    console.log("***", data);
    dispatch({
      type: CATEGORY_LIST_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewCategory =
  (categoryName, pathName) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_CATEGORY_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post("/api/category/add", { categoryName, pathName }, config);

      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteCategory =
  (categoryPathName) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_CATEGORY_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`/api/category/${categoryPathName}`, config);
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const addNewProduct =
  (name, brand, pathCategory, description, price, countInStock, image) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_PRODUCT_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        "/api/category/addProduct",
        {
          name,
          brand,
          pathCategory,
          description,
          price,
          countInStock,
          image,
        },
        config
      );

      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
