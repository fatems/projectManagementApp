import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { useState } from "react";
import classes from "./Login.module.css";
const Login = () => {
  //   const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const renderErrorMessage = (name) =>
  //     name === errorMessages.name && (
  //       <div className="error">{errorMessages.message}</div>
  //     );
  const submitHandler = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
  return (
    <>
      <div className={classes.goBack}>
        <p>بازگشت به صفحه اصلی</p>
      </div>
      <div className={classes.container}>
        <Card className={classes.form}>
          <h3 className={classes.appName}>Fate</h3>
          <Button className={classes.button}>ورود با حساب گوگل</Button>
          <Button className={classes.button}>ساختن حساب کاربری</Button>
          <hr
            style={{
              color: "rgba(15, 31, 48, 0.3)",
              backgroundColor: "rgba(15, 31, 48, 0.3)",
              height: ".2",
              width: "100%",
            }}
          />
          <form>
            <div className={classes.formControl}>
              <label htmlFor="uname">نام کاربری</label>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  name="uname"
                  required
                />
              </div>
            </div>
            <div className={classes.formControl}>
              <label htmlFor="pass">رمز عبور</label>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="password"
                  name="pass"
                  required
                />
              </div>
            </div>
            <Button className={classes.purpleButton}>ورود</Button>
          </form>
        </Card>
      </div>
    </>
  );
};
export default Login;
