import React from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [1800, 1800, 1800],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  }));

  set({ xyz: [0, 0, 0] });
  const { xucXacItem } = props;
  return (
    <React.Fragment>
      <animated.div
        style={{
          transform: propsDice.xyz.interpolate(
            (x, y, z) =>
              `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
          ),
        }}
      >
        <img style={{ width: 50 }} src={xucXacItem.hinhAnh} alt="" />
      </animated.div>
    </React.Fragment>
  );
}
