import React, { useState } from "react";
import { Grid } from "@mui/material";

const PickingItemCard = () => {
  const [pickedStatus, setPickedStatus] = useState(false);
  const [currentQty, setCurrentQty] = useState(0);
  return (
    <Grid item xs={12} className="flex px-4  justify-between items-center pb-2">
      <Grid item xs={3} className="px-2">
        <p className="text-center text-white text-xs font-semibold">
          Sub-Category
        </p>
      </Grid>
      <Grid item xs={9}>
        <div>
          <p
            className="text-center text-xs font-semibold"
            style={{ backgroundColor: "#FED688" }}
          >
            Ambient
          </p>
          <div className="flex justify-between bg-white pt-2 px-2">
            <div className="flex">
              <div className="w-12 h-10 bg-black rounded"></div>
              <p className="pl-3 font-semibold text-xs text-black">
                Aloo bhujia, 800 gms 2pk (Haldiram’s)
              </p>
            </div>
            <div>
              <p
                className="font-semibold text-xs "
                style={{ color: "#979797" }}
              >
                ORDERED
              </p>
              <p className="font-semibold text-2xl text-center text-black">
                x3
              </p>
            </div>
          </div>
          <div className="action-btns flex justify-between bg-white p-2">
            <div className="mx-auto">
              <p
                className="font-semibold text-xs text-center cursor-pointer"
                style={
                  pickedStatus ? { color: "#979797" } : { color: "#3F941D" }
                }
                onClick={() => setPickedStatus((prevState) => !prevState)}
              >
                {pickedStatus ? "UNPICK" : "MARK PICKED"}
              </p>
            </div>
            <div className="mx-auto">
              <p
                className=" text-xs text-center cursor-pointer"
                style={{ color: "#3699FF" }}
              >
                Edit Qty
              </p>
            </div>
            <div className="mx-auto">
              <p
                className=" text-xs text-center cursor-pointer"
                style={{ color: "#FF0000" }}
              >
                Out of stock
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PickingItemCard;
