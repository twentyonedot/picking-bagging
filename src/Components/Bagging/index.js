/* import { LabelledTextFieldWithAdornments } from "Components"; */
import { Divider } from "@mui/material";

const Bagging = () => {
  return (
    <div style={{ background: "#E9E9E9" }}>
      <div className="px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-base font-semibold pr-3">SCAN BIN CODE</p>
            <p className=" px-4 py-1 rounded" style={{ background: "#F3F6F9" }}>
              w46w346346q4
            </p>
          </div>
          <div className="flex items-center mx-8">
            <p className="pr-3 text-xs font-semibold">
              Primary <br />
              Bin Color:
            </p>
            <div className="w-20 h-8 bg-red-800 rounded"></div>
          </div>
          <div className="flex">
            <div>
              <p># of Bins: 3</p>
            </div>
            <div className="flex">
              <div className="w-8 h-8 bg-red-800 rounded"></div>
              <div className="w-8 h-8 bg-red-800 rounded"></div>
              <div className="w-8 h-8 bg-red-800 rounded"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-sm ">Order ID: 124123412</p>
          <p className="font-semibold text-sm "># items ordered: 5</p>
          <p className="font-semibold text-sm underline">
            # items picked: 4 (80% complete)
          </p>
        </div>
        <div className="flex justify-center items-center my-8">
          <p className="font-semibold text-base">Picked by: John Doe</p>
        </div>
        <Divider
          variant="middle"
          light
          sx={{ borderBottomWidth: "3px", background: "#888C9F" }}
        />
        <div>
          <div className="flex">
            <p>Bin 1</p>
            <p>w46w346346q4</p>
            <p>008</p>
          </div>
          <div>
            <p>Bin 2</p>
            <p>124124512541325</p>
            <p>235</p>
            <div>Verified</div>
          </div>
          <div>
            <p>Bin 3</p>
            <p>6426234523434</p>
            <p>754</p>
            <div>
              Incorrect bin scanned This bin is not associated to this order.
              Find the right bin
            </div>
          </div>
          <div>
            <p>Bin 4</p>
            <p>124124512541325</p>
          </div>
        </div>
        <div>
          <button>Start Bagging</button>
        </div>
      </div>
    </div>
  );
};

export default Bagging;
