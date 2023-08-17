import React from "react";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { ContainerContextPage6, ContainerTable11 } from "./style";
import Table3 from "@components/Table3";
import { useForm } from "react-hook-form";
const Page6 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ContainerContextPage6>
      <div className="title-mid-page6">
        <div className="title-label-mid">別紙修理見積</div>
        <div style={{ float: "right", color: "white", margin: 15 }}>
          <CaretDownOutlined className="icon-file" style={{ fontSize: 30 }} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="context-container-form-pg6">
          <div className="context-form-left-pg6">
            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">User: </span>
              </div>
              <div className="div-inputs-wrapper">
                <div className="div-input-single">
                  <input
                    type="text"
                    className="div-input-box"
                    id="username"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && <span>Username is required</span>}
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">Pass: </span>
              </div>
              <div className="div-inputs-wrapper">
                <div className="input-single1">
                  <input
                    type="password"
                    className="input-box1"
                    id="password"
                    {...register("password", { required: true, minLength: 6 })}
                  />

                  <div className="input-box2">~</div>
                </div>
                <input
                  type="password"
                  className="input-box3"
                  id="respass"
                  {...register("respass", { required: true, minLength: 6 })}
                />
                {errors.respass && <span>PassWord is required</span>}
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">Email: </span>
              </div>
              <div className="input-and-button-wrapper-pg6">
                <div className="input-basic-pg6">
                  <input
                    type="text"
                    className="input-pg6"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
                <div className="button-input-wrapper-pg6">
                  <button type="button" className="button-pg6"></button>
                </div>
                {errors.email && <span>Email is required</span>}
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">Phone: </span>
              </div>
              <div className="input-and-button-wrapper-pg6">
                <div className="input-basic-pg6">
                  <input
                    type="text"
                    className="input-pg6"
                    id="phone"
                    {...(register("phone"),
                    {
                      required: true,
                      maxLength: 10,
                      minLength: 10,
                    })}
                  />
                </div>
                <div className="button-input-wrapper-pg6">
                  <button type="button" className="button-pg6"></button>
                </div>
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">Address: </span>
              </div>
              <div className="input-and-button-wrapper-pg6">
                <div className="input-basic-pg6">
                  <input
                    type="text"
                    className="input-pg6"
                    id="address"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="button-input-wrapper-pg6">
                  <button type="button" className="button-pg6"></button>
                </div>
                {errors.address && <span>Address is required</span>}
              </div>
            </div>
          </div>
          <div className="context-form-right-pg6">
            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">Pass: </span>
              </div>
              <div className="div-inputs-wrapper">
                <div className="input-single1">
                  <input
                    type="text"
                    className="input-box1"
                    id="password"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  <div className="input-box2">~</div>
                </div>
                <input
                  type="text"
                  className="input-box3"
                  id="respass"
                  {...register("respass", { required: true, minLength: 6 })}
                />
                {errors.respass && <span>PassWord is required</span>}
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize"> 成アプ</span>
              </div>
              <div className="input-and-button-wrapper-pg6">
                <div className="input-basic-pg6">
                  <input type="text" className="input-pg6" />
                </div>
                <div className="button-input-wrapper-pg6">
                  <button type="button" className="button-pg6"></button>
                </div>
              </div>
            </div>

            <div className="div-input-row">
              <div className="div-label-inputs">
                <span className="fontSize">User: </span>
              </div>
              <div className="div-inputs-wrapper">
                <div className="div-input-single">
                  <input
                    type="text"
                    className="div-input-box"
                    id="username"
                    {...register("username", { required: true })}
                  />
                </div>
                {errors.username && <span>Username is required</span>}
              </div>
            </div>

            {/* button */}
            <div className="div-input-row-button">
              <div className="div-label-inputs">
                <span className="fontSize"></span>
              </div>
              <div className="button-page6">
                <button className="button-left-page6">Submit</button>
                <Link to="/page7">
                  <button className="button-right-page6" type="submit">
                    X
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <Table11 /> */}
      <ContainerTable11>
        <div className="table11-row1">
          <div className="row1-column1"></div>
          <div className="row1-column2">発_資料</div>
          <div className="row1-column3">資料</div>
          <div className="row1-column4">
            <div className="column4-row1">理見積</div>
            <div className="column5-row1">理見積</div>
          </div>
        </div>
        <div className="table11-row2">
          <div className="row2-column1"></div>
          <div className="row2-column2">理見積</div>
          <div className="row2-column3">積</div>
          <div className="row2-column4">理見</div>
        </div>

        <div className="table11-row3">
          <div className="row3-column1"></div>
          <div className="row3-column2">理見積</div>
          <div className="row3-column3">
            <div className="column4-row3">理見積</div>
            <div className="column5-row3">見積</div>
          </div>
          <div className="row3-column4">
            <div className="column6-row3">積アプリ</div>
            <div className="column7-row3">アプリ</div>
          </div>
        </div>
      </ContainerTable11>

      <Table3 />
      <Table3 />
    </ContainerContextPage6>
  );
};

export default Page6;
