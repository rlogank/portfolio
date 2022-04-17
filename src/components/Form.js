import LoadingIcons from "react-loading-icons";
import toast from "react-hot-toast";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaTimes } from "react-icons/fa";

const Form = () => {
  const [valid, setValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [submitText, setSubmitText] = useState(true);

  const form = useRef();

  useEffect(() => {
    const regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.length > 1) {
      setNameValid(true);
    } else setNameValid(false);
    if (message.length > 9) {
      setMessageValid(true);
    } else {
      setMessageValid(false);
    }

    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    if (nameValid && emailValid && messageValid) {
      setValid(true);
      console.log("all valid");
    }
  }, [email, message, name, emailValid, messageValid, nameValid]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitText(false);

    emailjs
      .sendForm(
        "service_35apada",
        "template_8kxrtpi",
        form.current,
        "user_tAQ7fCFjRQu6fmw4eBSXt"
      )
      .then(
        (result) => {
          toast.success("Your email has been sent! Thank you.", {
            position: "bottom-center"
          });
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSubmitText(true)
          setShowErrors(false)
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      )
      .then(form.current.reset());
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      className=" w-full overflow-hidden rounded-xl bg-black bg-opacity-[7.5%] p-5 text-base text-neutral-700 lg:p-10"
    >
      <form className="" ref={form} id="quote-form" onSubmit={sendEmail}>
        <div className="space-y-5">
          <div className="flex gap-5">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              required
              placeholder="Name"
              className="flex w-1/2 cursor-pointer self-center rounded-lg bg-black bg-opacity-[15%] py-2 px-3.5 text-white placeholder-white outline outline-transparent transition hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-blue-400 "
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="flex w-1/2 cursor-pointer self-center rounded-lg bg-black bg-opacity-[15%] py-2 px-3.5 text-white placeholder-white outline outline-transparent transition hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-blue-400 "
            />
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            name="message"
            id="message"
            autoComplete="message"
            required
            placeholder="Message"
            className="flex w-full cursor-pointer resize-none self-center rounded-lg bg-black bg-opacity-[15%] py-2 px-3.5 text-white placeholder-white outline outline-transparent transition hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-blue-400 "
          />
        </div>
        <div className="flex pt-5 text-xs font-normal text-white">
          {showErrors && (
            <div className="flex flex-col">
              {name.length < 2 && (
                <div className="flex items-center gap-1">
                  <FaTimes />
                  Invalid name
                </div>
              )}
              {!emailValid && (
                <div className="flex items-center gap-1">
                  <FaTimes />
                  Invalid email
                </div>
              )}
              {!messageValid && (
                <div className="flex items-center gap-1">
                  <FaTimes />
                  Message too short
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => {
              setShowErrors(true);
            }}
            className={
              !valid
                ? "ml-auto flex h-[48px] w-[86.48px] cursor-not-allowed items-center justify-center  self-start rounded-lg bg-black bg-opacity-20 px-4 py-3 text-base font-medium transition"
                : "ml-auto flex h-[48px] w-[86.48px] items-center justify-center self-start rounded-lg bg-black bg-opacity-[15%] px-4 py-3 text-base  font-medium outline outline-transparent  transition hover:bg-opacity-20 focus:bg-opacity-25 focus:outline-blue-400"
            }
          >
            {submitText ? (
              "Submit"
            ) : (
              <LoadingIcons.TailSpin className="flex h-5 w-5 justify-center self-center" />
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
