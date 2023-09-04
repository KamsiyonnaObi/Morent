import _ from "underscore";
import { ICar } from "@/types/mongoose";

export function getDropDownData(data: ICar[]) {
  const dropDowns = [
    {
      name: "Location",
      description: "Location - Select your city",
      icon: "/Mark.svg",
      filterElements: _.keys(
        _.countBy(data, function (data: ICar) {
          return data.location;
        })
      ),
    },
    {
      name: "Availability To",
      description: "Select your date",
      icon: "/Mark.svg",
    },
    {
      name: "Calendar",
      description: "Select your date",
      icon: "/Calendar.svg",
    },
  ];

  const sideBarFilter = [
    {
      id: "type",
      name: "TYPE",
      filterElements: _.keys(
        _.countBy(data, function (data: ICar) {
          return data.cartype.replace(/\s/g, "");
        })
      ),
      count: _.values(
        _.countBy(data, function (data: ICar) {
          return data.cartype;
        })
      ),
    },
    {
      id: "capacity",
      name: "CAPACITY",
      filterElements: _.keys(
        _.countBy(data, function (data: ICar) {
          return data.capacity;
        })
      ),
      count: _.values(
        _.countBy(data, function (data: ICar) {
          return data.capacity;
        })
      ),
    },
  ];
  return [dropDowns, sideBarFilter];
}
