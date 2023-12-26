import axios from "axios";
import { toast } from "react-toastify";
import clientConfig from "../clientConfig";

export const sendPostComment = async ({ request, params }) => {
  const formData = await request.formData();
  const { name, email, comment } = Object.fromEntries(formData);

  const data = JSON.stringify({
    post: params.postId,
    author_name: name,
    author_email: email,
    content: comment,
  });

  await axios
    .post(`${clientConfig.siteUrl}/wp-json/wp/v2/comments`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        document.getElementById("myclearbtn").click();

        toast.success("دیدگاه شما ثبت شد و مورد بررسی قرار می گیرد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};

export const contactUs = async ({ request }) => {
  const formData = await request.formData();
  const { fname, femail, fphoneNumber, fsubject, fmessage } =
    Object.fromEntries(formData);

  const formData2 = new FormData();
  formData2.set("your-name", fname);
  formData2.set("your-email", femail);
  formData2.set("your-tel", fphoneNumber);
  formData2.set("your-subject", fsubject);
  formData2.set("your-message", fmessage);

  await axios
    .post(
      `${clientConfig.siteUrl}/wp-json/contact-form-7/v1/contact-forms/67/feedback`,
      formData2,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      if (res.data.status === "mail_sent") {
        document.getElementById("myclearbtn-contactUs").click();

        toast.success("پیام شما با موفقیت ارسال شد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else
        toast.error("خطایی رخ داد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};

export const counseling = async ({ request }) => {
  const formData = await request.formData();
  const { fname, femail, fphoneNumber, fsubject, fmessage } =
    Object.fromEntries(formData);

  const formData2 = new FormData();
  formData2.set("your-name", fname);
  formData2.set("your-email", femail);
  formData2.set("your-tel", fphoneNumber);
  formData2.set("your-subject", fsubject);
  formData2.set("your-message", fmessage);

  await axios
    .post(
      `${clientConfig.siteUrl}/wp-json/contact-form-7/v1/contact-forms/8/feedback`,
      formData2,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then(async (res) => {
      if (res.data.status === "mail_sent") {
        document.getElementById("myclearbtn-counseling").click();
        document.getElementById("myclearbtn-counseling2").click();

        await axios
          .post(
            `${clientConfig.siteUrl}/wp-json/twentytwentythree/v2/post-ncounter`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 200)
              toast.success("پیام درخواست مشاوره شما با موفقیت ارسال شد", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
          })
          .catch((err) => {
            toast.error("خطایی رخ داد", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      } else {
        toast.error("خطایی رخ داد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};

export const agencyForm = async ({ request }) => {
  const formData = await request.formData();
  const { fname, femail, fphoneNumber, fsubject, fmessage } =
    Object.fromEntries(formData);

  const formData2 = new FormData();
  formData2.set("your-name", fname);
  formData2.set("your-email", femail);
  formData2.set("your-tel", fphoneNumber);
  formData2.set("your-subject", fsubject);
  formData2.set("your-message", fmessage);

  await axios
    .post(
      `${clientConfig.siteUrl}/wp-json/contact-form-7/v1/contact-forms/78/feedback`,
      formData2,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then(async (res) => {
      if (res.data.status === "mail_sent") {
        document.getElementById("myclearbtn-agencyForm").click();

        toast.success(
          "درخواست نمایندگی با موفقیت ثبت شد. با شما تماس خواهیم گرفت",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else
        toast.error("خطایی رخ داد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};

export const productPurchaseRequest = async ({ request }) => {
  const formData = await request.formData();
  const { fname, femail, fphoneNumber, fsubject, fmessage } =
    Object.fromEntries(formData);

  const formData2 = new FormData();
  formData2.set("your-name", fname);
  formData2.set("your-email", femail);
  formData2.set("your-tel", fphoneNumber);
  formData2.set("your-subject", fsubject);
  formData2.set("your-message", fmessage);

  await axios
    .post(
      `${clientConfig.siteUrl}/wp-json/contact-form-7/v1/contact-forms/87/feedback`,
      formData2,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then(async (res) => {
      if (res.data.status === "mail_sent") {
        document.getElementById("myclearbtn-productForm").click();

        toast.success("درخواست خرید با موفقیت ثبت شد با شما تماس خواهیم گرفت", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else
        toast.error("خطایی رخ داد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};

export const packagePurchaseRequest = async ({ request }) => {
  const formData = await request.formData();
  const { fname, femail, fphoneNumber, fsubject, fmessage } =
    Object.fromEntries(formData);

  const formData2 = new FormData();
  formData2.set("your-name", fname);
  formData2.set("your-email", femail);
  formData2.set("your-tel", fphoneNumber);
  formData2.set("your-subject", fsubject);
  formData2.set("your-message", fmessage);

  await axios
    .post(
      `${clientConfig.siteUrl}/wp-json/contact-form-7/v1/contact-forms/89/feedback`,
      formData2,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    )
    .then(async (res) => {
      if (res.data.status === "mail_sent") {
        document.getElementById("myclearbtn-packageForm").click();

        toast.success("درخواست خرید با موفقیت ثبت شد با شما تماس خواهیم گرفت", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else
        toast.error("خطایی رخ داد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    })
    .catch((err) => {
      toast.error("خطایی رخ داد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

  return null;
};
