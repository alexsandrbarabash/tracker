import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Wrapper } from "./AddActivity.style";
import { GoPlay } from "react-icons/go";
import { AddActivityProps } from "../common/model";

const AddActivity: React.FC<AddActivityProps> = ({
  onAdd,
}) => {
  const [value, setValue] = useState("");
  const handlerAdd = () => {
    if (value.trim()) {
      onAdd({
        title: value,
        active: true,
        updateTime: null,
        startTime: Date.now(),
        time: 0
      });
      setValue("");
    }
  };

  return (
    <Wrapper>
      <Grid container direction="row" alignItems="center" xs={12}>
        <Grid item xs={10} md={11}>
          <input
            type="text"
            placeholder="Enter track name"
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
            }}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key === "Enter") {
                handlerAdd();
              }
            }}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <GoPlay
            size="50px"
            color="#3faf6c"
            style={{ cursor: "pointer", marginTop: "5px" }}
            onClick={() => {
              handlerAdd();
            }}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AddActivity;
