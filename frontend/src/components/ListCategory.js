import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/categoryAction";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Cate from "../components/Cate";
import "./MyStyle.css";

function ListCategory() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList || {});
  const { loading, error, categories } = categoryList;
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);


  return (
    <div className="brand-overlay">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div id="brand-list">
          {(categories || []).map((cate) => (
            <div key={cate._id}>
              <Cate cate={cate} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default ListCategory;
