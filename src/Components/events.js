import moment from "moment";

let DefaultEvents = [
  {
    title: "온살",
    start: new Date(2021, 9, 6),
    end: new Date(2021, 9, 6),
  },
  {
    title: "제압",
    start: new Date(2021, 9, 7),
    end: new Date(2021, 9, 7),
  },
  {
    title: "봉바",
    start: new Date(2021, 9, 8),
    end: new Date(2021, 9, 8),
  },
  {
    title: "쇄빙",
    start: new Date(2021, 9, 9),
    end: new Date(2021, 9, 9),
  },
];

let Events = [];
for (let i = 0; i < 30; i++) {
  Events.push({
    title: DefaultEvents[0].title,
    start: new moment(DefaultEvents[0].start).add(i * 4, "days")._d,
    end: new moment(DefaultEvents[0].end).add(i * 4, "days")._d,
    onsal: 1,
  });
  Events.push({
    title: DefaultEvents[1].title,
    start: new moment(DefaultEvents[1].start).add(i * 4, "days")._d,
    end: new moment(DefaultEvents[1].end).add(i * 4, "days")._d,
    secure: 1,
  });
  Events.push({
    title: DefaultEvents[2].title,
    start: new moment(DefaultEvents[2].start).add(i * 4, "days")._d,
    end: new moment(DefaultEvents[2].end).add(i * 4, "days")._d,
    sealRock: 1,
  });
  Events.push({
    title: DefaultEvents[3].title,
    start: new moment(DefaultEvents[3].start).add(i * 4, "days")._d,
    end: new moment(DefaultEvents[3].end).add(i * 4, "days")._d,
    shatter: 1,
  });
}
export default Events;
