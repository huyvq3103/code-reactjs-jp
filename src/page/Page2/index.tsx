import React from "react";
import { Link } from "react-router-dom";
import { ContainerPage2 } from "./style";
import { useForm } from "react-hook-form";

const Page2: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerPage2>
        <div className="context-form-container">
          <div className="form-container">
            <div className="group-inputs">
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Username: </span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-single">
                    <input
                      type="text"
                      className="input-box"
                      id="username"
                      {...register("username", { required: true })}
                    />
                    {errors.username && <span>Username is required</span>}
                  </div>
                </div>
              </div>
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Password: </span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-single">
                    <input
                      type="password"
                      className="input-box"
                      id="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.password && errors.password.type === "required" && (
                      <span>Password is required</span>
                    )}
                    {errors.password &&
                      errors.password.type === "minLength" && (
                        <span>Password must have at least 6 characters</span>
                      )}
                  </div>
                </div>
              </div>
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize"> Country: </span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-single">
                    <input
                      type="text"
                      className="input-box"
                      id="country"
                      {...register("country", { required: true })}
                    />
                    {errors.country && <span>Country is required</span>}
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Phone: </span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-single">
                    <input
                      type="text"
                      className="input-box"
                      id="phone"
                      {...(register("phone"),
                      {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                    />
                    {errors.phone && <span>Username is required</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="group-inputs">
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Email</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input
                        type="text"
                        className="input-box"
                        id="email"
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      {errors.email && <span>Email is required</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Nation</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input type="text" className="input-box" />
                    </div>
                    <div className="button-input-wrapper">
                      <button type="button" className="button"></button>
                    </div>
                  </div>

                  <div className="input-long">
                    <input type="text" className="input-box" />
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Job</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input type="text" className="input-box" />
                    </div>
                    <div className="button-input-wrapper">
                      <button type="button" className="button"></button>
                    </div>
                  </div>

                  <div className="input-long">
                    <input type="text" className="input-box" />
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Favourite</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input type="text" className="input-box" />
                    </div>
                    <div className="button-input-wrapper">
                      <button type="button" className="button"></button>
                    </div>
                  </div>

                  <div className="input-long">
                    <input type="text" className="input-box" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-input-row">
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Address</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input type="text" className="input-box" />
                    </div>
                    <div className="button-input-wrapper">
                      <button type="button" className="button"></button>
                    </div>
                  </div>
                  <div className="input-long">
                    <input type="text" className="input-box" />
                  </div>
                </div>
              </div>
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Note:</span>
                </div>
                <div className="inputs-wrapper">
                  <div className="input-and-button-wrapper">
                    <div className="input-basic">
                      <input
                        type="text"
                        className="input-box"
                        id="note"
                        {...register("note", { required: true })}
                      />
                      {errors.note && <span>Note is required</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-input-end">
              <div className="input-row">
                <div className="label-inputs">
                  <span className="fontSize">Navigation: </span>
                </div>
                <div className="inputs-wrapper">
                  <div className=" input-only">
                    <input
                      type="text"
                      className="input-box"
                      id="navigation"
                      {...register("navigation", { required: true })}
                    />
                    {errors.navigation && <span>Navigation is required</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="button1">
              <Link to="/page3">Page3</Link>
            </button>
            <button className="button2" type="submit">
              Submit Form
            </button>
          </div>
        </div>
      </ContainerPage2>
    </form>
  );
};

export default Page2;
