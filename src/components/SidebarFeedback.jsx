import React from "react";

export default function SidebarFeedback({ candidates }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <h3 className="font-medium">Feedback Summary</h3>
      <div className="mt-3 grid grid-cols-1 gap-3">
        {candidates.map((c) => (
          <div key={c.id} className="border p-2 rounded-md">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{c.name}</div>
              <div className="text-xs text-gray-500">
                {c.feedback.rating} / 5
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-1 truncate">
              {c.feedback.notes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
