import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emaijs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { EarthCanvas } from "../../../components";
import { slideIn } from "../../../utils/motion";

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    if (form.name !== "" && form.email !== "") {
      emaijs
        .send(
          "service_s7jl9hl",
          "template_5bi7xsf",
          {
            from_name: form.name,
            to_name: "P&T",
            from_email: form.email,
            to_email: "austinphan2022@gmail.com",
            message: form.message,
          },
          "n2DXqgt7TsC4NAGxy"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          () => {
            setLoading(false);
            alert("Something went wrong.");
          }
        );
    } else {
      alert("Please enter a name and email!");
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("clabel1")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder={t("cplaceholder1")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("clabel2")}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder={t("cplaceholder2")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("clabel3")}</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder={t("cplaceholder3")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {t("cbutton")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default ContactForm;
