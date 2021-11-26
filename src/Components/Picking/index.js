import { PickingOrder } from "Components";
import { Grid } from "@mui/material";

const Picking = () => {
  return (
    <Grid className="flex justify-center container" item xs={12}>
      <Grid item xs={12}>
        <PickingOrder
          orderID={124123412}
          orderQty={5}
          pickedItems={2}
          time={{ start_time: "11:00am", elapsed_time: "00:10:01" }}
        />
      </Grid>
      <Grid item xs={12}>
        <PickingOrder
          orderID={346262452}
          orderQty={5}
          pickedItems={2}
          time={{ start_time: "11:00am", elapsed_time: "00:10:01" }}
        />
      </Grid>
    </Grid>
  );
};

export default Picking;
