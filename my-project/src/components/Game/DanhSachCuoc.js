import React from "react";
import { useSelector } from "react-redux";
import QuanCuoc from "./QuanCuoc";

export default function DanhSachCuoc() {
  let danhSachCuoc = useSelector(
    (state) => state.BaiTapBauCuaReducer.danhSachCuoc
  );
  console.log(danhSachCuoc);
  // const renderQuanCuoc = () => {
  //   return danhSachCuoc.map((item, index) => {
  //     return (
  //       <div className="col-4" key={index}>
  //         <QuanCuoc qc={item} />
  //       </div>
  //     );
  //   });
  // };
  return (
    <div className="row mt-5">
      {danhSachCuoc.map((item, index) => {
        return (
          <div className="col-4" key={index}>
            <QuanCuoc qc={item} />
          </div>
        );
      })}
    </div>
  );
}
