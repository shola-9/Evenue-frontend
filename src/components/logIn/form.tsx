import { useState } from "react";
import { handleInputChange } from "../global/handleInputChange";
import loginFn from "../../lib/users/login";
import styles from "../global/styles/signup&loginG9D.module.css";
import { LogIn } from "../../typesAndInterfaces/users/logIn";
import { useNavigate, useLocation } from "react-router-dom";
import { MaxInputLength } from "../global/maxInputLength";

export const Form = () => {
  const [formDetails, setFormDetails] = useState<LogIn>({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      loginFn({
        email: formDetails.email,
        password: formDetails.password,
        setErrMsg,
      }).then((res) => {
        if (res?.message.includes("successful")) {
          if (location.state?.from) {
            navigate(location.state.from);
          } else {
            navigate("/profile");
          }
        }
      });
      // navigate("/profile");
    } catch (error) {}
  };
  // when the max length is reached, a message display below the specific input
  // when the input is invalid on blur, add a className of pesudo class :invalid
  return (
    <div className={styles.containerG9D}>
      {errMsg && <p className={styles.errMsg}>{errMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            value={formDetails.email}
            id="email"
            required
            aria-required
            onChange={(e) => handleInputChange<LogIn>(e, setFormDetails)}
            autoComplete="email"
            maxLength={60}
          />
          {formDetails.email.length === 60 && <MaxInputLength />}
        </div>
        <div>
          <label htmlFor="password"> Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formDetails.password}
            id="password"
            required
            aria-required
            onChange={(e) => handleInputChange<LogIn>(e, setFormDetails)}
            autoComplete="new-password"
            maxLength={100}
          />
          <div className={styles.showPasswordArea}>
            {showPassword ? (
              <p onClick={(e) => setShowPassword(false)}>Hide password</p>
            ) : (
              <p onClick={(e) => setShowPassword(true)}>Show password</p>
            )}
          </div>
          {formDetails.email.length === 100 && <MaxInputLength />}
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
};
