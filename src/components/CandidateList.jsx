import React from "react";
import CandidateCard from "./CandidateCard";

export default function CandidateList({ candidates, markInterviewed }) {
  if (candidates.length === 0)
    return (
      <div className="text-center text-gray-500 py-10">
        No candidates match your filters.
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {candidates.map((c) => (
        <CandidateCard
          key={c.id}
          candidate={c}
          markInterviewed={markInterviewed}
        />
      ))}
    </div>
  );
}
