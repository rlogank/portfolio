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
  const [sent, setSent] = useState(false);

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
            position: "bottom-center",
          });
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSubmitText(true);
          setShowErrors(false);
          setSent(true);
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
      id="bottom"
      className="w-full bg-gray-200 px-2.5 py-10 dark:bg-bgDarkest sm:px-5 md:py-20 lg:py-44"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-start">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <header>
            <h3
              data-aos="fade"
              className="heading text-center text-4xl font-bold tracking-tight sm:transition-all sm:text-center md:text-left md:text-4xl lg:text-5xl"
            >
              Let's work together,
            </h3>
            <h3
              data-aos="fade"
              className="heading text-center text-4xl font-bold tracking-tight text-rose-600 sm:transition-all dark:text-rose-400 sm:text-center md:text-left md:text-4xl lg:text-5xl"
            >
              contact me
            </h3>
            <p
              data-aos="fade"
              className="mt-2.5 max-w-[535px] text-center sm:text-center md:text-left lg:mt-5"
            >
              I am looking to bring my A-game to a full-time salaried web development position. Doing freelance in the meantime. I am open to all kinds of web-dev
              work and even collaboration.
            </p>
          </header>
          <div>
            <section
              data-aos="fade"
              data-aos-delay="200"
              className="mx-auto max-w-screen-lg rounded-[4px] border-t-4 border-rose-600 bg-gray-100 p-5 shadow-md dark:border-rose-400 dark:bg-bgDarker md:p-5"
            >
              <form
                className=""
                ref={form}
                id="quote-form"
                onSubmit={sendEmail}
              >
                <div className="space-y-2.5 text-sm md:space-y-5">
                  <div className="flex gap-2.5 md:gap-5">
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
                      title="Name"
                      placeholder="Name"
                      className="flex w-1/2 cursor-pointer self-center rounded-[4px] py-2 px-3.5 outline outline-transparent sm:transition-all hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-rose-600 dark:bg-bgDark dark:focus:outline-rose-400"
                    />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      title="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Email"
                      className="flex w-1/2 cursor-pointer self-center rounded-[4px] py-2 px-3.5 outline outline-transparent sm:transition-all hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-rose-600 dark:bg-bgDark dark:focus:outline-rose-400"
                    />
                  </div>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    title="Message"
                    type="text"
                    name="message"
                    id="message"
                    autoComplete="message"
                    required
                    placeholder="Message"
                    className="flex w-full cursor-pointer resize-none self-center rounded-[4px] py-2 px-3.5 outline outline-transparent sm:transition-all hover:bg-opacity-20  focus:cursor-text focus:bg-opacity-25 focus:outline-rose-600 dark:bg-bgDark dark:focus:outline-rose-400"
                  />
                </div>
                <div className="flex pt-2.5 text-xs font-normal md:pt-5">
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
                        ? "ml-auto flex cursor-not-allowed items-center justify-center self-start rounded-[4px] bg-rose-600 px-3.5 py-2 text-sm font-medium text-white sm:transition dark:bg-bgDark dark:text-gray-300"
                        : "!-100 ml-auto flex items-center justify-center self-start rounded-[4px] bg-rose-600 px-3.5 py-2 text-sm font-medium text-white outline outline-transparent sm:transition hover:shadow-md focus:shadow-none sm:active:scale-95 dark:bg-rose-400 dark:text-bgDarkest"
                    }
                  >
                    {submitText ? (
                      sent ? (
                        "Sent!"
                      ) : (
                        "Submit"
                      )
                    ) : (
                      <LoadingIcons.TailSpin className="flex h-5 w-5 justify-center self-center" />
                    )}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
