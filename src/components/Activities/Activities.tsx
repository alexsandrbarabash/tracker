import React, { useState, useEffect, useRef } from "react";
import AddActivity from "../AddActivity/AddActivity";
import Grid from "@material-ui/core/Grid";
import { Wrapper } from "./Activities.style";
import Activity from "../Activity/Activity";
import { ActivitiesObject } from "../common/model";
import { useStorage } from "../common/useStorage";

const Activities = () => {
  const { get, create } = useStorage();
  const [activities, setActivities] = useState<ActivitiesObject[]>([]);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let data = get();

    if (data) {
      data = data.map((item) => {
        if (item.active) {
          if (!item.updateTime) {
            item.time = Math.round(Date.now() / 1000 - item.startTime! / 1000);
          } else {
            item.time =
              Math.round(Date.now() / 1000 - item.updateTime! / 1000) +
              item.time;
            item.updateTime = Date.now();
          }
        }
        return item;
      });
      setActivities(data);
    }
  }, []);

  useEffect(() => {
    create(activities);
  }, [activities]);

  const handlerAdd = (activity: ActivitiesObject) => {
    setActivities((prev) => [...prev, activity]);
  };

  const handlerRemove = (indexRemoveElement: number) => {
    const activitiesNew = activities.filter(
      (item, index) => index !== indexRemoveElement
    );
    setActivities(activitiesNew);
  };

  const handlerActiveDisactive = (indexActiveDisactive: number) => {
    const activitiesNew = activities.map((item, index) => {
      if (index === indexActiveDisactive) {
        item.active = !item.active;
        item.updateTime = Date.now();
      }
      return item;
    });

    setActivities(activitiesNew);
  };

  return (
    <Wrapper ref={ref}>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid item xs={12}>
          <h1>tracker</h1>
          <AddActivity onAdd={handlerAdd} />
          {activities.map((item, index) => (
            <Activity
              key={index}
              active={item.active}
              index={index}
              title={item.title}
              onRemove={handlerRemove}
              onActiveDisactive={handlerActiveDisactive}
              width={ref?.current?.clientWidth}
              time={item.time}
            />
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Activities;
