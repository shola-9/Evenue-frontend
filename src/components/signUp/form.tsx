import { useState } from "react";
import { handleInputChange } from "../global/handleInputChange";
import { SignUp } from "../../typesAndInterfaces/users/signUp";
import signUpFn from "../../lib/users/signUp";
import styles from "../global/styles/signup&loginG9D.module.css";
import { MaxInputLength } from "../global/maxInputLength";

export const Form = () => {
  const [formDetails, setFormDetails] = useState<SignUp>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      signUpFn({
        first_name: formDetails.first_name,
        last_name: formDetails.last_name,
        email: formDetails.email,
        password: formDetails.password,
        setErrMsg,
      });
    } catch (error) {}
  };
  // when the max length is reached, a message display below the specific input
  // when the input is invalid on blur, add a className of pesudo class :invalid
  return (
    <div className={styles.containerG9D}>
      {errMsg && <p className={styles.errMsg}>{errMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name"> First Name</label>
          <input
            type="text"
            name="first_name"
            value={formDetails.first_name}
            id="first_name"
            required
            aria-required
            onChange={(e) => handleInputChange<SignUp>(e, setFormDetails)}
            autoComplete="given-name"
            maxLength={20}
          />
          <div>
            {formDetails.first_name.length === 20 && <MaxInputLength />}
          </div>
        </div>
        <div>
          <label htmlFor="last_name"> Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formDetails.last_name}
            id="last_name"
            required
            aria-required
            onChange={(e) => handleInputChange<SignUp>(e, setFormDetails)}
            autoComplete="family-name"
            maxLength={20}
          />
          <div>{formDetails.last_name.length === 20 && <MaxInputLength />}</div>
        </div>
        <div>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            value={formDetails.email}
            id="email"
            required
            aria-required
            onChange={(e) => handleInputChange<SignUp>(e, setFormDetails)}
            autoComplete="email"
            maxLength={60}
          />
          <div>{formDetails.email.length === 60 && <MaxInputLength />}</div>
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
            onChange={(e) => handleInputChange<SignUp>(e, setFormDetails)}
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
          <div>{formDetails.password.length === 100 && <MaxInputLength />}</div>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};
