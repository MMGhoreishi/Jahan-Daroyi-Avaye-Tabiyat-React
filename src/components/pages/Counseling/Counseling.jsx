import { Helmet } from "react-helmet";
import * as yup from "yup";
import { Form, useSubmit } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

const validationSchema = yup.object({
  fname: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  femail: yup
    .string()
    .email("آدرس ایمیل نامعتبر است")
    .required("لطفا ایمیل خود را وارد کنید"),
  fphoneNumber: yup.number().required("لطفا شماره تلفن همراه خود را وارد کنید"),
  fsubject: yup.string().required("لطفا نوع مشاوره را انتخاب کنید"),
  fmessage: yup.string().required("لطفا پیام در خواست مشاوره خود را وارد کنید"),
});

const Counseling = () => {
  const [subject, setSubject] = useState("انتخاب نوع مشاوره");
  const [subjectError, setSubjectError] = useState(false);

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

  const setDropdownItemSubject = (value) => {
    setSubject(value);
    setSubjectError(false);
    formik.values.fsubject = value;
  };

  return (
    <>
      <Helmet>
        <title>درخواست مشاوره</title>
      </Helmet>
      <main id="main">
        {/* ======= Counseling Section ======= */}
        <section className="counseling">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>درخواست مشاوره</h2>
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
                  className="counseling-form"
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
                        type="hidden"
                        className="form-control"
                        name="fsubject"
                        id="fsubject"
                        placeholder={subject}
                        value={formik.values.fsubject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="dropdown">
                        <div
                          className="d-grid"
                          onBlur={() =>
                            setSubjectError(
                              subject === "انتخاب نوع مشاوره" ? true : false
                            )
                          }
                        >
                          <button
                            type="button"
                            className="btn btn-block dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            {subject}
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <span className="dropdown-header">
                                امراض مفصلی و استخوان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("درد و آرتروز زانو")
                                }
                              >
                                درد و آرتروز زانو
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پوکی استخوان")
                                }
                              >
                                پوکی استخوان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("نرمی استخوان")
                                }
                              >
                                نرمی استخوان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "روماتیسم مفصلی استخوانی"
                                  )
                                }
                              >
                                روماتیسم مفصلی استخوانی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیسک کمر")
                                }
                              >
                                دیسک کمر
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                امراض مغز و اعصاب
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "استرس، اضطراب و بی قراری"
                                  )
                                }
                              >
                                استرس، اضطراب و بی قراری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("بی خوابی عصبی")
                                }
                              >
                                بی خوابی عصبی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سیاتیک عصبی")
                                }
                              >
                                سیاتیک عصبی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سردرد و میگرن عصبی")
                                }
                              >
                                سردرد و میگرن عصبی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("افسردگی")
                                }
                              >
                                افسردگی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("رعشد و لرزش اعضا")
                                }
                              >
                                رعشد و لرزش اعضا
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تشنج و صرع")
                                }
                              >
                                تشنج و صرع
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("ام اس")}
                              >
                                ام اس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پارکینسون")
                                }
                              >
                                پارکینسون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دردهای عصبی")
                                }
                              >
                                دردهای عصبی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("آلزایمر")
                                }
                              >
                                آلزایمر
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">گوارش</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سوء هاضمه")
                                }
                              >
                                سوء هاضمه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("گاستریت معده")
                                }
                              >
                                گاستریت معده
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کولیت روده")
                                }
                              >
                                کولیت روده
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ورم و بزرگی شکم")
                                }
                              >
                                ورم و بزرگی شکم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("یبوست مزاج")
                                }
                              >
                                یبوست مزاج
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("بی اشتهایی")
                                }
                              >
                                بی اشتهایی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پر اشتهایی")
                                }
                              >
                                پر اشتهایی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("اسهال مزمن")
                                }
                              >
                                اسهال مزمن
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("انگل ها")
                                }
                              >
                                انگل ها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("هموروئید بواسیر")
                                }
                              >
                                هموروئید بواسیر
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                گوش و حلق و بینی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "آنفولانزا و سرماخوردگی"
                                  )
                                }
                              >
                                آنفولانزا و سرماخوردگی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("آنژین و گلودرد")
                                }
                              >
                                آنژین و گلودرد
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("زکام و حساسیت")
                                }
                              >
                                زکام و حساسیت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تب های عفونی")
                                }
                              >
                                تب های عفونی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سینوزیت")
                                }
                              >
                                سینوزیت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("پولیپ")}
                              >
                                پولیپ
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("حس بویایی")
                                }
                              >
                                حس بویایی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ضعف صدا و حنجره")
                                }
                              >
                                ضعف صدا و حنجره
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "تروئید پرکار و کم کار"
                                  )
                                }
                              >
                                تروئید پرکار و کم کار
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("لکنت زبان")
                                }
                              >
                                لکنت زبان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ضعف شنوایی")
                                }
                              >
                                ضعف شنوایی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("صدای گوش")
                                }
                              >
                                صدای گوش
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                دستگاه ادراری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "سنگ های دستگاه ادراری"
                                  )
                                }
                              >
                                سنگ های دستگاه ادراری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پروستات")
                                }
                              >
                                پروستات
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "تکرر ادرار و مشکلات ادراری"
                                  )
                                }
                              >
                                تکرر ادرار و مشکلات ادراری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("درد و ورم کلیه")
                                }
                              >
                                درد و ورم کلیه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سوزش ادرار")
                                }
                              >
                                سوزش ادرار
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(" عفونتهای ادراری")
                                }
                              >
                                عفونتهای ادراری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">پوست</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("لک و جوش")
                                }
                              >
                                لک و جوش
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("خارش و حساسیت پوستی")
                                }
                              >
                                خارش و حساسیت پوستی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("چروک صورت")
                                }
                              >
                                چروک صورت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تیرگی و بدرنگی پوست")
                                }
                              >
                                تیرگی و بدرنگی پوست
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دور چشم")
                                }
                              >
                                دور چشم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("منافذ و ناصافی پوست")
                                }
                              >
                                منافذ و ناصافی پوست
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "ترک های پوستی و پاشنه"
                                  )
                                }
                              >
                                ترک های پوستی و پاشنه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("زگیل و میخچه")
                                }
                              >
                                زگیل و میخچه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("خارپاشنه")
                                }
                              >
                                خارپاشنه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تعریق زیاد پوست")
                                }
                              >
                                تعریق زیاد پوست
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("ناخن")}
                              >
                                ناخن
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("عوارض پوستی دست ها")
                                }
                              >
                                عوارض پوستی دست ها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                امراض زنان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("عفونت ها")
                                }
                              >
                                عفونت ها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "خونریزی و لک بینی ، ترشحات"
                                  )
                                }
                              >
                                خونریزی و لک بینی ، ترشحات
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("قاعدگی دردناک")
                                }
                              >
                                قاعدگی دردناک
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("نامنظمی ماهانه")
                                }
                              >
                                نامنظمی ماهانه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "کیست و فیبروم تخمدان و رحم"
                                  )
                                }
                              >
                                کیست و فیبروم تخمدان و رحم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کیست سینه")
                                }
                              >
                                کیست سینه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کمبود شیر مادران")
                                }
                              >
                                کمبود شیر مادران
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("عوارض یائسگی")
                                }
                              >
                                عوارض یائسگی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("یائسگی زودرس")
                                }
                              >
                                یائسگی زودرس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "تنبلی تخمدان و ناباروری"
                                  )
                                }
                              >
                                تنبلی تخمدان و ناباروری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("خشکی واژن")
                                }
                              >
                                خشکی واژن
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سرد مزاجی")
                                }
                              >
                                سرد مزاجی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تهوع بارداری")
                                }
                              >
                                تهوع بارداری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                کبد - کیسه صفرا
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کبد چرب")
                                }
                              >
                                کبد چرب
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سنگ و لجن کیسه صفرا")
                                }
                              >
                                سنگ و لجن کیسه صفرا
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                قلب و عروق
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ضعف و تپش قلب")
                                }
                              >
                                ضعف و تپش قلب
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "انسداد عروق و شریان قلب"
                                  )
                                }
                              >
                                انسداد عروق و شریان قلب
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سکته قلبی")
                                }
                              >
                                سکته قلبی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("درد و تیرکشیدن قلب")
                                }
                              >
                                درد و تیرکشیدن قلب
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">ریه</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("آسم و تنگی نفس")
                                }
                              >
                                آسم و تنگی نفس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سرفه های ریوی")
                                }
                              >
                                سرفه های ریوی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ذات الریه و برونشیت")
                                }
                              >
                                ذات الریه و برونشیت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("آمفیزم ریوی")
                                }
                              >
                                آمفیزم ریوی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سل ریوی")
                                }
                              >
                                سل ریوی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">مو</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ریزش و کم پشتی ابرو")
                                }
                              >
                                ریزش و کم پشتی ابرو
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "ریزش و کم پشتی موی سر"
                                  )
                                }
                              >
                                ریزش و کم پشتی موی سر
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("شوره - موخوره")
                                }
                              >
                                شوره - موخوره
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("پرمویی")}
                              >
                                پرمویی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سفیدی زودرس مو")
                                }
                              >
                                سفیدی زودرس مو
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کم پشتی ریش")
                                }
                              >
                                کم پشتی ریش
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("طاسی زودرس")
                                }
                              >
                                طاسی زودرس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                چاقی لاغری
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "چاقی و افزایش وزن و سایز بدن"
                                  )
                                }
                              >
                                چاقی و افزایش وزن و سایز بدن
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("لاغری مفرط بدن")
                                }
                              >
                                لاغری مفرط بدن
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("لاغری صورت")
                                }
                              >
                                لاغری صورت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("حجم دهنده")
                                }
                              >
                                حجم دهنده
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                اعتیاد آورها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ترک سیگار")
                                }
                              >
                                ترک سیگار
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ترک مشروبات الکلی")
                                }
                              >
                                ترک مشروبات الکلی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ترک مواداعتیادآور")
                                }
                              >
                                ترک مواداعتیادآور
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                دستگاه گردش خون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("دیابت")}
                              >
                                دیابت
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("فشار خون")
                                }
                              >
                                فشار خون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("چربی خون")
                                }
                              >
                                چربی خون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("اسید اوریک")
                                }
                              >
                                اسید اوریک
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کراتین خون")
                                }
                              >
                                کراتین خون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("غلظت و پلاکت خون")
                                }
                              >
                                غلظت و پلاکت خون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("واریس")}
                              >
                                واریس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کم خونی")
                                }
                              >
                                کم خونی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("ضعف ایمنی")
                                }
                              >
                                ضعف ایمنی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("کمبود انرژی")
                                }
                              >
                                کمبود انرژی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">
                                قوای جنسی مردان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("انزال زودرس")
                                }
                              >
                                انزال زودرس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("اختلال نعوظ")
                                }
                              >
                                اختلال نعوظ
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("بی میلی و سردی")
                                }
                              >
                                بی میلی و سردی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "ناباروری مردان و تقویت اسپرم"
                                  )
                                }
                              >
                                ناباروری مردان و تقویت اسپرم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("هیدروسل و واریکوسل")
                                }
                              >
                                ئیدروسل و واریکوسل
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">دهان</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("جرم و سیاهی دندان")
                                }
                              >
                                جرم و سیاهی دندان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("زخم های دهان")
                                }
                              >
                                زخم های دهان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("خونریزی و عفونت لثه")
                                }
                              >
                                خونریزی و عفونت لثه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "التهاب مزمن و درد دندان"
                                  )
                                }
                              >
                                التهاب مزمن و درد دندان
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">چشم</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("تقویت بینایی")
                                }
                              >
                                تقویت بینایی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("حساسیت و آبریزش چشم")
                                }
                              >
                                حساسیت و آبریزش چشم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "پیشگیری از بروز آب مروارید"
                                  )
                                }
                              >
                                پیشگیری از بروز آب مروارید
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                            <li>
                              <span className="dropdown-header">متفرقه</span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("میگرن و سردردها")
                                }
                              >
                                میگرن و سردردها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("سرگیجه")}
                              >
                                سرگیجه
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("ام اس")}
                              >
                                ام اس
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("آلزایمر")
                                }
                              >
                                آلزایمر
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پارکینسون")
                                }
                              >
                                پارکینسون
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() => setDropdownItemSubject("ایدز")}
                              >
                                ایدز
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("سرطان ها")
                                }
                              >
                                سرطان ها
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "ضعف حافظه و یادگیری و فراموشی"
                                  )
                                }
                              >
                                ضعف حافظه و یادگیری و فراموشی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پراکندگی ذهن و افکار")
                                }
                              >
                                پراکندگی ذهن و افکار
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("عفونت های داخلی")
                                }
                              >
                                عفونت های داخلی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("راز سلامت و جوانی")
                                }
                              >
                                راز سلامت و جوانی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "چکار کنیم سالم و جوان بمانیم"
                                  )
                                }
                              >
                                چکار کنیم سالم و جوان بمانیم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "چکار کنیم پرانرژی و شاد و سرحال باشیم"
                                  )
                                }
                              >
                                چکار کنیم پرانرژی و شاد و سرحال باشیم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject(
                                    "چکار کنیم از تنبلی دوری کرده فعال شویم"
                                  )
                                }
                              >
                                چکار کنیم از تنبلی دوری کرده فعال شویم
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("پرخوابی")
                                }
                              >
                                پرخوابی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("بی حوصلگی و بی حالی")
                                }
                              >
                                بی حوصلگی و بی حالی
                              </span>
                            </li>
                            <li>
                              <span
                                className="dropdown-item"
                                onClick={() =>
                                  setDropdownItemSubject("دیگر موارد")
                                }
                              >
                                دیگر موارد
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* {formik.touched.fsubject && formik.errors.fsubject && (
                        <div className="alert alert-danger text-center">
                          {formik.errors.fsubject}
                        </div>
                      )} */}
                      {subjectError ? (
                        <div className="alert alert-danger text-center">
                          لطفا نوع مشاوره را انتخاب کنید
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="fmessage"
                      rows="5"
                      placeholder="اعلام شرح وضعیت"
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
                    <button
                      type="submit"
                      onClick={() =>
                        setSubjectError(
                          subject === "انتخاب نوع مشاوره" ? true : false
                        )
                      }
                    >
                      ارسال درخواست مشاوره
                    </button>
                    <button
                      className="d-none"
                      id="myclearbtn-counseling"
                      onClick={formik.handleReset}
                    >
                      پاک کردن
                    </button>
                  </div>
                </Form>

                <button
                  className="d-none"
                  id="myclearbtn-counseling2"
                  onClick={() => setSubject("انتخاب نوع مشاوره")}
                >
                  پاک کردن
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End Counseling Section  */}
      </main>
      {/* End #main */}
    </>
  );
};

export default Counseling;
