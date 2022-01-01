import React from "react";
import { useSelector, useDispatch } from "react-redux";
import XucXac from "./XucXac";
// import { head } from "lodash";

export default function DanhSachXucXac(props) {
  const mangXucXac = useSelector(
    (state) => state.BaiTapBauCuaReducer.mangXucXac
  );
  const dispatch = useDispatch();
  console.log(mangXucXac);
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      >
        <div className="row">
          <div className="col-12 text-center mt-2">
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-4 text-left">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <button
          className="btn btn-success p2"
          style={{ fontSize: "25px" }}
          onClick={() => {
            dispatch({ type: "PLAY_GAME" });
          }}
        >
          Xốc
        </button>
      </div>
    </div>
  );
}
