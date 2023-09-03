import { Form, useSubmit } from "react-router-dom";
import parse from "html-react-parser";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Moment from "react-moment";
import "moment/locale/fa";
import { postCommentsPagination } from "../../helpers/pagination/pagination";

const validationSchema = yup.object({
  name: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  email: yup
    .string()
    .email("آدرس ایمیل نامعتبر است")
    .required("لطفا ایمیل خود را وارد کنید"),
  comment: yup.string().required("لطفا نظر خود را وارد کنید"),
});

const Comments = ({ comments, commentCount, postId }) => {
  const submit = useSubmit();
  const [getComments, setComments] = useState(comments);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      submit(values, { method: "post" });
    },
  });

  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <Form
            method="post"
            className="comment-form"
            onSubmit={formik.handleSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="نام و نام خانوادگی"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="alert alert-danger text-center">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="ایمیل شما"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="alert alert-danger text-center">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="نظر شما"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.comment && formik.errors.comment && (
                <div className="alert alert-danger text-center">
                  {formik.errors.comment}
                </div>
              )}
            </div>
            <div className="text-center">
              <button type="submit">ارسال نظر</button>
              <button
                className="d-none"
                id="myclearbtn"
                onClick={formik.handleReset}
              >
                پاک کردن
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className="row">
        {getComments.length > 0 ? (
          <>
            {getComments.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="user-comment col-12 py-3 rounded mt-3"
                >
                  <div className="head">
                    <span>
                      <i className="bx bxs-user-pin"></i>
                      {comment.author_name} (
                      <Moment fromNow locale="fa">
                        {comment.date}
                      </Moment>
                      )
                    </span>
                  </div>
                  <div className="content">
                    {parse(comment.content.rendered)}
                  </div>
                </div>
              );
            })}

            {/*Start Pagination*/}
            <div className="text-center">
              <div className="d-inline-block">
                <ReactPaginate
                  previousLabel={"قبل"}
                  nextLabel={"بعد"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={commentCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(n) =>
                    postCommentsPagination(n, postId, setComments)
                  }
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
            {/*End Pagination*/}
          </>
        ) : (
          <div className="user-comment col-12 py-3 rounded mt-3 text-center">
            <div className="content">هنوز دیدگاهی ثبت نشده است</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
