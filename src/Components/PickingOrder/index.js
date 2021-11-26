import { useState } from "react";
import { Grid, Divider } from "@mui/material";
import { PickingItemCard, CustomModal } from "Components";

const PickingOrder = (props) => {
  const { orderID, orderQty, pickedItems, time } = props;
  //states
  const [bins, setBins] = useState([]);
  const [open, setOpen] = useState(false);
  const [ambientStatus, setAmbientStatus] = useState(true);
  const [refrigeratedStatus, setRefrigeratedStatus] = useState(true);
  const [frozenStatus, setFrozenStatus] = useState(true);

  //handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const setBinsHandler = (bin) => {
    setBins((prevState) => [...prevState, bin]);
  };
  const setAmbientStatusHandler = (status) => {
    return () => setAmbientStatus(status);
  };
  const setRefrigeratedStatusHandler = (status) => {
    return () => setRefrigeratedStatus(status);
  };
  const setFrozenStatusHandler = (status) => {
    return () => setFrozenStatus(status);
  };

  return (
    <div className="border" style={{ background: "#979797" }}>
      <CustomModal
        open={open}
        handleClose={handleClose}
        setBinsHandler={setBinsHandler}
      />
      <Grid container xs={12} className="flex p-4">
        <Grid item xs={7}>
          <p className="font-semibold text-sm text-white">
            Order ID: {orderID}
          </p>
          <p className="font-semibold text-sm text-white mt-4">SCAN BIN</p>
          <div className="flex mt-2">
            {bins?.map((bin, index) => (
              <div className="w-9 h-8 bg-white flex-center rounded cursor-pointer">
                {index + 1}
              </div>
            ))}
            <div
              className="w-9 h-8 bg-white flex-center rounded cursor-pointer"
              onClick={handleOpen}
            >
              +
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <p className="font-semibold text-sm text-white">
            # items ordered: {orderQty}
          </p>
          <p className="font-semibold text-sm text-white mt-2 underline">
            # items picked: {pickedItems}
            <br /> ({Math.round((pickedItems * 100) / 5)}% complete)
          </p>
          <p className="font-semibold text-sm text-white mt-3">
            Start time: {time.start_time} Time elapsed: {time.elapsed_time}
          </p>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        light
        sx={{ borderBottomWidth: "3px", background: "#fff" }}
      />
      <div className="storage-types flex justify-around mt-4">
        <div
          className="shadow-md rounded flex justify-center items-center px-6 py-2 cursor-pointer"
          style={
            ambientStatus
              ? { background: "#FED688" }
              : { background: "#979797" }
          }
          onClick={setAmbientStatusHandler((prevState) => !prevState)}
        >
          <p className="font-semibold text-xs text-black">Ambient</p>
        </div>
        <div
          className="shadow-md rounded flex justify-center items-center px-6 py-2 cursor-pointer"
          style={
            refrigeratedStatus
              ? { background: "#30B35A" }
              : { background: "#979797" }
          }
          onClick={setRefrigeratedStatusHandler((prevState) => !prevState)}
        >
          <p className="font-semibold text-xs text-black">Refrigerated</p>
        </div>
        <div
          className="shadow-md rounded flex justify-center items-center px-6 py-2 cursor-pointer"
          style={
            frozenStatus ? { background: "#00A0EF" } : { background: "#979797" }
          }
          onClick={setFrozenStatusHandler((prevState) => !prevState)}
        >
          <p className="font-semibold text-xs text-black">Frozen</p>
        </div>
      </div>
      <div className="my-8">
        <PickingItemCard />
        <PickingItemCard />
        <PickingItemCard />
        <PickingItemCard />
      </div>
    </div>
  );
};

export default PickingOrder;
