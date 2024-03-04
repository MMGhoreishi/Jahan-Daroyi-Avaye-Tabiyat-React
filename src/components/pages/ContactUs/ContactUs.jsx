import { Helmet } from "react-helmet";
import * as yup from "yup";
import { Form, useSubmit } from "react-router-dom";
import { useFormik } from "formik";
import { FormGuide } from "../..";

const validationSchema = yup.object({
  fname: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  femail: yup.string().email("آدرس ایمیل نامعتبر است"),
  fphoneNumber: yup.number().required("لطفا شماره تلفن همراه خود را وارد کنید"),
  fsubject: yup.string().required("لطفا عنوان را وارد کنید"),
  fmessage: yup.string().required("لطفا پیام خود را وارد کنید"),
});

const ContactUs = () => {
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
        <title>تماس با ما</title>
      </Helmet>
      <main id="main">
        {/* ======= Contact Section ======= */}
        <section className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>تماس با ما</h2>
              <p>
                از حضور شما دوست عزیز در سایت جهان دارویی آوای طبیعت بسیار
                خوشحالیم و باعث افتخار ما است در صورت داشتن هرگونه نیاز به ثبت
                تیکت پشتیبانی و یا نظرات و یا انتقادات و پیشنهادات یا ثبت هرگونه
                تیکت شکایت از طریق فرم تماس با ما زیر می توانید اقدام برای
                ارتباط با تیم پشتیبانی سایت کنید و در اسرع وقت به شما از طریق
                ارسال ایمیل یا تماس با شماره تلفن همراه شما پاسخ داده خواهد شد
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <div className="row">
                      <div className="col">
                        <i className="bi bi-geo-alt float-end"></i>
                      </div>
                      <div className="col-lg-9 col-10">
                        <h4>آدرس:</h4>
                        <p>
                          مهرآباد جنوبی - خ دانشگاه هوایی شمالی - خ شهید قادری -
                          پلاک 29 - طبقه اول
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="email">
                    <div className="row">
                      <div className="col">
                        <i className="bi bi-envelope float-end"></i>
                      </div>
                      <div className="col-lg-9 col-10">
                        <h4>ایمیل:</h4>
                        <p style={{ fontFamily: "thinoo" }}>info@example.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="phone">
                    <div className="row">
                      <div className="col">
                        <i className="bi bi-phone float-end"></i>
                      </div>
                      <div className="col-lg-9 col-10">
                        <h4>شماره موبایل:</h4>
                        <p style={{ direction: "ltr", textAlign: "right" }}>
                          +98 936 399 8946
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <FormGuide />
                <Form
                  method="post"
                  className="contact-form"
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
                        placeholder="عنوان"
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
                      placeholder="پیام شما"
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
                    <button type="submit">ارسال پیام</button>

                    <button
                      className="d-none"
                      id="myclearbtn-contactUs"
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
        {/* End Contact Section  */}
      </main>
      {/* End #main */}
    </>
  );
};

export default ContactUs;
