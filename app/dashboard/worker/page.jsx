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
    },
    {
      id: 2,
      machineId: "M002",
      machineName: "Machine 2",
      issue: "Issue with component Y",
    },
    {
      id: 3,
      machineId: "M003",
      machineName: "Machine 3",
      issue: "Issue with component Z",
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
        />
      ))}
    </>
  );
}
