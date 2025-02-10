import React from "react";
import {
  HiCheckCircle,
  HiOutlineXCircle,
  HiInformationCircle,
} from "react-icons/hi2";

const ALERT_TYPES = {
  success: {
    bgColor: "bg-success",
    icon: HiCheckCircle,
    textColor: "text-success-content",
  },
  error: {
    bgColor: "bg-danger",
    icon: HiOutlineXCircle,
    textColor: "text-danger-content",
  },
  info: {
    bgColor: "bg-info",
    icon: HiInformationCircle,
    textColor: "text-info-content",
  },
};

const Alert = ({ type = "info", title, message, isVisible, onClose }) => {
  React.useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const { bgColor, icon: Icon, textColor } = ALERT_TYPES[type];

  return (
    <div
      className={`fixed left-0 right-0 z-50 mx-4 bottom-36 transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div
        className={`flex items-center gap-4 p-4 rounded-lg ${bgColor} ${textColor}`}
      >
        <div>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-base font-bold">{title}</span>
          {message && <span className="text-xs">{message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Alert;
