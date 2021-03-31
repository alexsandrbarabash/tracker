import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  MdPauseCircleOutline,
  MdPlayCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { Wrapper } from "./Activity.style";
import { ActivityProps } from "../common/model";
import { useInterval } from "../common/useInterval";

const Activity: React.FC<ActivityProps> = ({
  active,
  index,
  onRemove,
  title,
  onActiveDisactive,
  width,
  time,
}) => {
  const { timeStopwatch, play, stop } = useInterval(active, time);

  const secondsToHms = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${h <= 9 ? "0" + h : h}:${m <= 9 ? "0" + m : m}:${
      s <= 9 ? "0" + s : s
    }`;
  };

  const shortTitle = (title: string): string => {
    let length = 15;

    if (width >= 500) {
      length = 30;
    }

    if (title.length >= length) {
      return title.substr(0, length - 4) + "...";
    }
    return title;
  };

  return (
    <Wrapper index={index} active={active}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={5} sm={5}>
          <span>{shortTitle(title)}</span>
        </Grid>
        <Grid item xs={2} sm={3}>
          <time>{secondsToHms(timeStopwatch)}</time>
        </Grid>
        <Grid item xs={1} sm={1}>
          {active ? (
            <MdPauseCircleOutline
              size="35px"
              color="#212120"
              style={{ cursor: "pointer" }}
              onClick={() => {
                stop();
                onActiveDisactive(index, timeStopwatch);
              }}
            />
          ) : (
            <MdPlayCircleOutline
              size="35px"
              color="#212120"
              style={{ cursor: "pointer" }}
              onClick={() => {
                play();
                onActiveDisactive(index, timeStopwatch);
              }}
            />
          )}
        </Grid>
        <Grid item xs={1} sm={1}>
          <MdRemoveCircleOutline
            size="35px"
            color="#d57382"
            style={{ cursor: "pointer" }}
            onClick={() => onRemove(index)}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Activity;
