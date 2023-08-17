import React from "react";
import { ContainerContextPage7, ContainerTable13 } from "./style";
import { useForm } from "react-hook-form";
const Page7 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ContainerContextPage7>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-input-row-pg7">
          <div className="div-label-inputs-pg7">
            <span className="fontSize">User: </span>
          </div>
          <div className="div-inputs-wrapper-pg7 ">
            <div className="div-input-single-pg7">
              <input
                type="text"
                className="div-input-box-pg7"
                id="username"
                {...register("username", { required: true })}
              />
              {errors.username && <span>Username is required</span>}
            </div>
          </div>
        </div>
        <div className="div-input-row-pg7">
          <div className="div-label-inputs-pg7">
            <span className="fontSize">Pass: </span>
          </div>
          <div className="div-inputs-wrapper-pg7">
            <div className="div-input-single-pg7">
              <input
                type="text"
                className="div-input-box-pg7"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span>Password must have at least 6 characters</span>
              )}
            </div>
          </div>
        </div>
        <div className="div-input-row-pg7">
          <div className="div-label-inputs-pg7">
            <span className="fontSize">Email: </span>
          </div>
          <div className="div-inputs-wrapper-pg7">
            <div className="div-input-single-pg7">
              <input
                type="text"
                className="div-input-box-pg7"
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
        <div className="div-input-row-pg7">
          <div className="div-label-inputs-pg7">
            <span className="fontSize">Phone: </span>
          </div>
          <div className="div-inputs-wrapper-pg7">
            <div className="div-input-single-pg7">
              <input
                type="text"
                className="div-input-box-pg7"
                id="phone"
                {...(register("phone"),
                {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
            </div>
            <div className="button-pg7">
              <button className="button-left-pg7">プリ開</button>
              <button className="button-right-pg7" type="submit">
                リ開
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <Table13 /> */}
      <ContainerTable13>
        <div className="table13-row1">
          <div className="table13-row1-column1"></div>
          <div className="table13-row1-column2">別紙修理見積</div>
          <div className="table13-row1-column3">別紙修</div>
          <div className="table13-row1-column4">理見積書</div>
        </div>
        <div className="table13-row2">
          <div className="table13-row2-column1">
            <div className="border-table13">修</div>
          </div>
          <div className="table13-row2-column2">100000</div>
          <div className="table13-row2-column3">見積</div>
          <div className="table13-row2-column4">見積</div>
        </div>
        <div className="table13-row3">
          <div className="table13-row3-column1">
            <div className="border-table13">修</div>
          </div>
          <div className="table13-row3-column2">100000</div>
          <div className="table13-row3-column3">見積</div>
          <div className="table13-row3-column4">見積</div>
        </div>
        <div className="table13-row4">
          <div className="table13-row4-column1">
            <div className="border-table13">修</div>
          </div>
          <div className="table13-row4-column2">10000</div>
          <div className="table13-row4-column3">見積</div>
          <div className="table13-row4-column4">見積</div>
        </div>
      </ContainerTable13>
    </ContainerContextPage7>
  );
};

export default Page7;
