import { Paper } from "@mui/material";
import { Tabs } from "Components";

const PickingBagging = () => {
  return (
    <div className="w-screen h-screen flex-center">
      <Paper className="container">
        <div className="py-4 bg-white h-screen">
          <Tabs />
        </div>
      </Paper>
    </div>
  );
};

export default PickingBagging;
