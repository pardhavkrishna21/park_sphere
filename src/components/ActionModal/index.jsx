import { useEffect, useId, useState } from "react";
import "./index.css";

const ActionModal = ({ action, onClose }) => {
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedRequests = JSON.parse(localStorage.getItem("parkSphereRequests") || "[]");
    localStorage.setItem("parkSphereRequests", JSON.stringify([...savedRequests, { ...action, email, createdAt: new Date().toISOString() }]));
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="action-modal" aria-labelledby={titleId} aria-modal="true" role="dialog" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        {submitted ? (
          <div className="modal-result">
            <span aria-hidden="true">✓</span><h2 id={titleId}>You’re all set</h2>
            <p>Your request has been saved on this device. We’ll use <strong>{email}</strong> for your ParkSphere update.</p>
            <button className="modal-primary" type="button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <><p className="modal-eyebrow">PARKSPHERE</p><h2 id={titleId}>{action.title}</h2><p>{action.description}</p>
            <form onSubmit={handleSubmit}><label htmlFor="request-email">Email address</label><input id="request-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" required autoFocus /><button className="modal-primary" type="submit">{action.buttonLabel}</button></form>
          </>
        )}
      </section>
    </div>
  );
};

export default ActionModal;
