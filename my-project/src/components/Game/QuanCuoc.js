import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
export default function QuanCuoc(props) {
  let { qc } = props;
  const dispatch = useDispatch();
  const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
    return {
      to: { scale: 1.5 },
      from: { scale: 1 },
      reset: true,
    };
  });

  const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
    return {
      to: { scale: 1.5 },
      from: { scale: 1 },
      reset: true,
    };
  });
  // setInCrease({ scale: 1 });
  // setDeCrease({ scale: 1 });
  return (
    <div className="mt-3 ">
      <img src={qc.hinhAnh} style={{ width: 250, marginLeft: "30px" }} alt="" />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 250, margin: "0 auto" }}
      >
        <animated.button
          className="btn btn-danger mr-3"
          style={{
            transform: propsUseSpringInCrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setInCrease({ scale: 1.5 });
            setDeCrease({ scale: 1 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              qc,
              tangGiam: true,
            });
          }}
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span className="mt-2" style={{ color: "yellow", fontSize: 25 }}>
          {qc.diemCuoc}
        </span>
        <animated.button
          className="btn btn-danger ml-3"
          style={{
            transform: propsUseSpringDeCrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDeCrease({ scale: 1.5 });
            setInCrease({ scale: 1 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              qc,
              tangGiam: false,
            });
          }}
        >
          <i className="fa fa-minus"></i>
        </animated.button>
      </div>
    </div>
  );
}
