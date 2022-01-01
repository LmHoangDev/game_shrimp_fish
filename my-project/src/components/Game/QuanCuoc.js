import React from "react";
import { useDispatch } from "react-redux";
export default function QuanCuoc(props) {
  let { qc } = props;
  const dispatch = useDispatch();
  return (
    <div className="mt-3 ">
      <img src={qc.hinhAnh} style={{ width: 250, marginLeft: "30px" }} alt="" />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 250, margin: "0 auto" }}
      >
        <button
          className="btn btn-danger mr-3"
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              qc,
              tangGiam: true,
            });
          }}
        >
          <i className="fa fa-plus"></i>
        </button>
        <span className="mt-2" style={{ color: "yellow", fontSize: 25 }}>
          {qc.diemCuoc}
        </span>
        <button
          className="btn btn-danger ml-3"
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              qc,
              tangGiam: false,
            });
          }}
        >
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
}
