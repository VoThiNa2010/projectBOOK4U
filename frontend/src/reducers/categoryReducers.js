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

  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} from "../constants/categoryConstants";
import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from "../constants/productConstants";

export const categoryListReducers = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productsListOfCategoryReducers = (
  state = { ProductsOfCategory: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_PRODUCTS_REQUEST:
      return { loading: true, ProductsOfCategory: [] };
    case CATEGORY_LIST_PRODUCTS_SUCCESS:
      return { loading: false, ProductsOfCategory: action.payload };
    case CATEGORY_LIST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const addOneCategoryReducer = (state ={}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true }
    case CREATE_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case CREATE_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const deleteOneCategoryReducer = (state = {}, action) => {
  switch(action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true }
    case DELETE_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case DELETE_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const addOneProductReducer = (state ={}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true }
    case CREATE_PRODUCT_SUCCESS:
      return { loading: false, success: true }
    case CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const deleteOneProductReducer = (state = {}, action) => {
  switch(action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true }
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true }
    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}