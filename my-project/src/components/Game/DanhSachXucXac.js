import React from "react";
import XucXac from "./XucXac";
// import { head } from "lodash";

export default function DanhSachXucXac() {
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: "50%" }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: "75px" }}>
            <XucXac />
          </div>
          <div className="col-6 text-right mt-5">
            <XucXac />
          </div>
          <div className="col-6 text-left mt-5">
            <XucXac />
          </div>
        </div>
      </div>
    </div>
  );
}
