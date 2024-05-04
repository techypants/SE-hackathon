import React from "react";
import IssueComp from "../../components/issues";

export default function WorkerDashboard() {
  // Sample data
  const sampleIssueData = [
    {
      id: 1,
      machineId: "M001",
      machineName: "Machine 1",
      issue: "Issue with component X",
      prob: "High",
      mdate: "2024-05-15", // Sample maintenance date
      reqDays: 9, // Sample required days for maintenance
    },
    {
      id: 2,
      machineId: "M002",
      machineName: "Machine 2",
      issue: "Issue with component Y",
      prob: "Medium",
      mdate: "2024-04-25", // Sample maintenance date
      reqDays: 7, // Sample required days for maintenance
    },
    {
      id: 3,
      machineId: "M003",
      machineName: "Machine 3",
      issue: "Issue with component Z",
      prob: "Low",
      mdate: "2024-05-03", // Sample maintenance date
      reqDays: 3, // Sample required days for maintenance
    },
  ];
  

  return (
    <>
      {sampleIssueData.map((issue) => (
        <IssueComp
          key={issue.id}
          machineId={issue.machineId}
          machineName={issue.machineName}
          issue={issue.issue}
          prob={issue.prob}
          mdate={issue.mdate}
          reqDays={issue.reqDays}
        />
      ))}
    </>
  );
}
