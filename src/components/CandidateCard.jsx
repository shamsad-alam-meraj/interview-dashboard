import React, { useState } from "react";
import RatingStars from "./RatingStars";

export default function CandidateCard({ candidate, markInterviewed }) {
  const [showFull, setShowFull] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Candidate Card */}
      <div
        className={`border rounded-2xl p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white ${
          candidate.interviewed ? "opacity-70" : ""
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-semibold ${candidate.avatarColor} shadow-md`}
            >
              {candidate.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <div className="font-semibold text-base sm:text-lg">
                {candidate.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {candidate.role} • {candidate.experience}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end text-sm sm:text-base">
            <RatingStars value={candidate.rating} />
            {candidate.rating >= 4.5 && (
              <span className="text-yellow-500 text-xs sm:text-sm font-semibold mt-1">
                ⭐ Top Rated
              </span>
            )}
            <span className="text-xs mt-1 text-gray-400">
              {candidate.interviewed ? "Interviewed" : "Pending"}
            </span>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 border-t pt-2 sm:pt-3 gap-2 sm:gap-0">
          <div>
            <div className="font-medium">{candidate.schedule.date}</div>
            <div className="text-gray-500">{candidate.schedule.time}</div>
          </div>
          <div className="text-left sm:text-right">
            <div className="font-medium">{candidate.schedule.interviewer}</div>
            <div className="text-gray-500">Interviewer</div>
          </div>
        </div>

        {/* Feedback Notes */}
        <div className="text-sm text-gray-700 mt-1 sm:mt-2">
          <strong className="text-gray-500 text-xs">Notes:</strong>{" "}
          {showFull
            ? candidate.feedback.notes
            : `${candidate.feedback.notes.slice(0, 60)}...`}
          {candidate.feedback.notes.length > 60 && (
            <button
              className="text-indigo-600 ml-1 text-xs font-medium"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2 sm:mt-3">
          <button
            onClick={() => markInterviewed(candidate.id)}
            disabled={candidate.interviewed}
            className={`w-full sm:w-auto px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              candidate.interviewed
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
            }`}
          >
            {candidate.interviewed ? "Interviewed" : "Mark Interviewed"}
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            View Feedback
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5 sm:p-6 relative shadow-lg">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">
              Feedback for {candidate.name}
            </h3>
            <div className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base">
              <strong>Rating:</strong> {candidate.feedback.rating} / 5
              <br />
              <strong>Notes:</strong> {candidate.feedback.notes}
            </div>
            {/* Close button top-right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
