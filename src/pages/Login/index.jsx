import React from "react";
import sty from "./style.module.css";
import Layout from "../../components/user/Layout";

const Login = () => {
  return (
    <Layout>
      <div class={sty.wrapper}>
        <div class={sty.login_box}>
          <div class={sty.login_header}>
            <span> Login</span>
          </div>
          <form enctype="multipart/form-data" onsubmit="return login()">
            <div class={sty.input_box}>
              <input
                type="text"
                id={sty.user}
                class={sty.input_field}
                required
              />

              <label for="user" class={sty.label}>
                Username
              </label>
              <i class={`${sty.box} ${sty.bx_user} ${sty.icon}`}></i>
            </div>
            <div class={sty.input_box}>
              <input
                type="password"
                id={sty.pass}
                class={sty.input_field}
                autocomplete="off"
              />
              <label for="pass" class={sty.label}>
                Password
              </label>
              <i class="bx bx-lock-alt icon" id="show-password"></i>
            </div>
            <div class={sty.remember_forgot}>
              <div class={sty.remember_me}>
                <input type="checkbox" id="remember" />
                <label for="remember">Remember me</label>
              </div>
              <div class={sty.forgot}>
                <a href="#">Forgot password</a>
              </div>
            </div>

            <div class="input_box">
              <input type="submit" class={sty.input_submit} value="Login" />
            </div>
            <div class={sty.register}>
              <span>
                Don't have an account?
                <a href="#">Register</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
