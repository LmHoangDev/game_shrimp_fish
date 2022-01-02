const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png" },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      console.log(action);
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (quanCuoc) => quanCuoc.ma === action.qc.ma
      );
      console.log(index);
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      return {
        ...state,
        danhSachCuoc: danhSachCuocUpdate,
      };
    }
    case "PLAY_GAME":
      console.log(action);
      const mangXucXacRD = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        mangXucXacRD.push(state.danhSachCuoc[soNgauNhien]);
      }
      state.mangXucXac = mangXucXacRD;
      mangXucXacRD.forEach((item, index) => {
        let indexXXNN = state.danhSachCuoc.findIndex((qc) => qc.ma === item.ma);
        if (indexXXNN !== -1) {
          state.tongDiem += state.danhSachCuoc[indexXXNN].diemCuoc;
        }
      });
      state.danhSachCuoc.forEach((item, index) => {
        let xucXacNN = mangXucXacRD.findIndex((qc) => qc.ma === item.ma);
        if (xucXacNN !== -1) {
          state.tongDiem += item.diemCuoc;
        }
      });
      state.danhSachCuoc = state.danhSachCuoc.map((item, index) => {
        return { ...item, diemCuoc: 0 };
      });
      return { ...state };
    case "PLAY_AGAIN":
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((item, index) => {
        return { ...item, diemCuoc: 0 };
      });
      return { ...state };
    default:
      return state;
  }
};
