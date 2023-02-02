import React from "react";
import "/home/xceltec-94/materialui-demo/src/css/photo.css";
function LoginForm() {
  return (
    <div id="middle">
      <form className="loginform">
        <div className="form-inner">
          <h1>Log In</h1>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type={"text"} name="name" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input type={"email"} name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Passw: </label>
            <input
              type={"Password"}
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="submit">
          <button className="btn btn-warning">Submit</button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
