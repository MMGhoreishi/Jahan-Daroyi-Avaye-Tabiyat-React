import { Helmet } from "react-helmet";
import * as yup from "yup";
import { Form, useSubmit } from "react-router-dom";
import { useFormik } from "formik";

const validationSchema = yup.object({
  fname: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  femail: yup
    .string()
    .email("آدرس ایمیل نامعتبر است")
    .required("لطفا ایمیل خود را وارد کنید"),
  fphoneNumber: yup.number().required("لطفا شماره تلفن همراه خود را وارد کنید"),
  fsubject: yup.string().required("لطفا عنوان نمایندگی را وارد کنید"),
  fmessage: yup.string().required("لطفا توضیحات نمایندگی را وارد کنید"),
});

const AgencyForm = () => {
  const submit = useSubmit();

  const formik = useFormik({
    initialValues: {
      fname: "",
      femail: "",
      fphoneNumber: "",
      fsubject: "",
      fmessage: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      submit(values, { method: "post" });
    },
  });

  return (
    <>
      <Helmet>
        <title>درخواست نمایندگی</title>
      </Helmet>
      <main id="main">
        {/* ======= Agency Form Section ======= */}
        <section className="agencyForm">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>درخواست نمایندگی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <Form
                  method="post"
                  className="agencyForm-form"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fname && formik.errors.fname && (
                        <div className="alert alert-danger text-center">
                          {formik.errors.fname}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="femail"
                        id="email"
                        placeholder="ایمیل شما"
                        value={formik.values.femail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.femail && formik.errors.femail && (
                        <div className="alert alert-danger text-center">
                          {formik.errors.femail}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="fphoneNumber"
                        id="fphoneNumber"
                        placeholder="شماره تلفن همراه"
                        value={formik.values.fphoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fphoneNumber &&
                        formik.errors.fphoneNumber && (
                          <div className="alert alert-danger text-center">
                            {formik.errors.fphoneNumber}
                          </div>
                        )}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="text"
                        className="form-control"
                        name="fsubject"
                        id="subject"
                        placeholder="عنوان نمایندگی"
                        value={formik.values.fsubject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fsubject && formik.errors.fsubject && (
                        <div className="alert alert-danger text-center">
                          {formik.errors.fsubject}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="fmessage"
                      rows="5"
                      placeholder="توضیحات نمایندگی"
                      value={formik.values.fmessage}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.fmessage && formik.errors.fmessage && (
                      <div className="alert alert-danger text-center">
                        {formik.errors.fmessage}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit">ارسال درخواست نمایندگی</button>

                    <button
                      className="d-none"
                      id="myclearbtn-agencyForm"
                      onClick={formik.handleReset}
                    >
                      پاک کردن
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
        {/* End Agency Form Section  */}
      </main>
      {/* End #main */}
    </>
  );
};

export default AgencyForm;
