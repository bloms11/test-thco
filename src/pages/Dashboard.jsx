import React from "react";
import Datablocks from "../components/Datablocks";
import MarkettingBlock from "../components/MarkettingBlock";
import Graph from "../components/Graph";
import Orders from "../components/Orders";

const Dashboard = () => {
  return (
    <div>
      <Datablocks />
      <div className="grid grid-cols-2 max-[1420px]:grid-cols-1 gap-x-10 w-full mt-12">
        <div className=" grid grid-cols-1">
          <MarkettingBlock />
          <Graph />
        </div>
        <Orders />
      </div>
    </div>
  );
};

export default Dashboard;
