import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function DiemCuoc() {
  let tongDiem = useSelector((state) => state.BaiTapBauCuaReducer.tongDiem);
  const dispatch = useDispatch();
  return (
    <div>
      <h3
        className="text-center display-4 "
        style={{ color: "#58FA58", marginTop: 0 }}
      >
        GAME BẦU CUA LAMDEV
      </h3>

      <div className="text-center mt-5">
        <span
          style={{ fontSize: "20px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          Tiền thưởng: <span className="text-warning">{tongDiem}$</span>
        </span>
      </div>

      <div className="text-center mt-5">
        <button
          style={{ fontSize: "15px", borderRadius: "5%", border: "none" }}
          className="p-2 text-white bg-success"
          onClick={() => {
            dispatch({
              type: "PLAY_AGAIN",
            });
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
