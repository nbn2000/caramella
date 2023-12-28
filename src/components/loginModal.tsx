import { Cancel } from "@/svg/view";
import { useEffect, useRef } from "react";
import { Types } from "@nixjs23n6/types";

declare global {
  interface Window {
    TelegramLoginWidgetCb: any;
  }
}

const LoginModal = ({ setOpen, open }: { setOpen: any; open: boolean }) => {
  const telegramRef = useRef<Types.Nullable<HTMLButtonElement>>(null);
  const modalClass = open ? "fixed" : "hidden";
  const handleSubmit = () => {
    const timeout: any = setTimeout(() => {
      setOpen(false);
      clearTimeout(timeout);
    }, 500);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://telegram.org/js/telegram-widget.js?22`;
    script.async = true;
    const attributes = {
      "data-telegram-login": "register_caramella_bot",
      "data-size": "large",
      "data-request-access": "write",
      "data-userpic": "true",
      "data-onauth": "onTelegramAuth(user)",
    };

    for (const [k, v] of Object.entries(attributes)) {
      v !== undefined && script.setAttribute(k, `${v}`);
    }

    telegramRef.current!.appendChild(script);

    return () => {
      if (telegramRef.current) {
        telegramRef.current.innerHTML = "";
      }
      if (window.TelegramLoginWidgetCb) {
        delete window.TelegramLoginWidgetCb;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="modal"
      className={`modal-box z-50 py-8 px-16 boxShadow bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalClass}`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute text-orange right-[2%] top-[2%]"
      >
        <Cancel />
      </button>
      <button ref={telegramRef}>telegramBot</button>
    </div>
  );
};

export default LoginModal;
