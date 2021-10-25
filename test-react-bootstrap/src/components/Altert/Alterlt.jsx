import React from "react";

function Alterlt() {
  return (
    <div className="container mt-3">
      <h2>Alerts</h2>
      <p>
        The button with class="btn-close" and data-bs-dismiss="alert" is used to
        close the alert box.
      </p>
      <p>The alert-dismissible class aligns the button to the right.</p>
      <div className="alert alert-success alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Success!</strong> This alert box could indicate a successful or
        positive action.
      </div>
      <div className="alert alert-info alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Info!</strong> This alert box could indicate a neutral
        informative change or action.
      </div>
      <div className="alert alert-warning alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Warning!</strong> This alert box could indicate a warning that
        might need attention.
      </div>
      <div className="alert alert-danger alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Danger!</strong> This alert box could indicate a dangerous or
        potentially negative action.
      </div>
      <div className="alert alert-primary alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Primary!</strong> Indicates an important action.
      </div>
      <div className="alert alert-secondary alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Secondary!</strong> Indicates a slightly less important action.
      </div>
      <div className="alert alert-dark alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Dark!</strong> Dark grey alert.
      </div>
      <div className="alert alert-light alert-dismissible">
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        <strong>Light!</strong> Light grey alert.
      </div>
    </div>
  );
}

export default Alterlt;
