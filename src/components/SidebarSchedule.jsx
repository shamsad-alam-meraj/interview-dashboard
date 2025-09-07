import React from "react";

export default function SidebarSchedule({ candidates }) {
  const today = new Date().toISOString().slice(0, 10);
  const todayInterviews = candidates.filter((c) => c.schedule.date === today);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <h3 className="font-medium">Today's Schedule</h3>
      <div className="mt-3 space-y-3">
        {todayInterviews.length === 0 && (
          <div className="text-sm text-gray-500">
            No interviews scheduled for today.
          </div>
        )}
        {todayInterviews.map((c) => (
          <div key={c.id} className="flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${c.avatarColor}`}
            >
              {c.name.split(" ")[0][0]}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-gray-500">
                {c.schedule.time} • {c.schedule.interviewer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
