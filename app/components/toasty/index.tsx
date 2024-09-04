"use client";

import { useEffect } from "react";

type ToastyProps = {
  text: string;
  onClose: Function;
};

const Toasty = ({ text, onClose }: ToastyProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-neutral bg-primary">
        <span className="color-primary">{text}</span>
      </div>
    </div>
  );
};

export default Toasty;
