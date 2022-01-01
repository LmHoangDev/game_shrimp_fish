import React from "react";

export default function XucXac(props) {
  const { xucXacItem } = props;
  return (
    <React.Fragment>
      <img style={{ width: 50 }} src={xucXacItem.hinhAnh} alt="" />
    </React.Fragment>
  );
}
