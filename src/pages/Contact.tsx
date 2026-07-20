import { useState } from "react";
import type { SubmitEvent } from "react";
import useHttp from "../hooks/useHttp";
import usePageTitle from "../hooks/usePageTitle";

const CONTACT_URL =
  "https://daltondaytonportfolio-default-rtdb.firebaseio.com/messages.json";

const inputClasses = (isValid: boolean) =>
  `rounded-xl border bg-surface px-4 py-3 text-primary outline-none transition-colors focus:border-accent ${
    isValid ? "border-border" : "border-accent"
  }`;

const ContactPage = () => {
  usePageTitle("Contact | Dalton Dayton");

  const { isLoading, error, sendRequest } = useHttp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validity, setValidity] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const contactMessage = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    const formValidity = {
      name: contactMessage.name !== "",
      email: contactMessage.email.includes("@"),
      message: contactMessage.message !== "",
    };
    setValidity(formValidity);

    if (!formValidity.name || !formValidity.email || !formValidity.message) {
      return;
    }

    const response = await sendRequest<{ name: string }>({
      url: CONTACT_URL,
      method: "POST",
      body: contactMessage,
    });

    if (!response) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Contact
          </h1>
          <p className="text-xl text-secondary">
            Have a question or want to work together? Send a message.
          </p>
        </div>

        {submitted ? (
          <p className="text-lg leading-relaxed text-secondary">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={inputClasses(validity.name)}
              />
              {!validity.name && (
                <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                  Please enter your name.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClasses(validity.email)}
              />
              {!validity.email && (
                <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={inputClasses(validity.message)}
              />
              {!validity.message && (
                <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                  Please enter a message.
                </p>
              )}
            </div>

            {error && (
              <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                Sending failed: {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="self-start rounded-full px-6 py-3 text-sm font-medium text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: "var(--color-accent)" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  "var(--color-accent-hover)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor =
                  "var(--color-accent)";
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default ContactPage;
