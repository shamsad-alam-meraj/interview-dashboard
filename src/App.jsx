import React, { useState, useMemo } from "react";
import CandidateList from "./components/CandidateList";
import SearchFilter from "./components/SearchFilter";
import SidebarSchedule from "./components/SidebarSchedule";
import SidebarFeedback from "./components/SidebarFeedback";
import { initialCandidates } from "./data";

export default function App() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [query, setQuery] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const arr = candidates.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q);
      const matchesRating = c.rating >= minRating;
      return matchesQuery && matchesRating;
    });
    if (sortBy === "rating") return arr.sort((a, b) => b.rating - a.rating);
    if (sortBy === "experience")
      return arr.sort(
        (a, b) => parseInt(b.experience) - parseInt(a.experience)
      );
    if (sortBy === "name")
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }, [candidates, query, minRating, sortBy]);

  function markInterviewed(id) {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, interviewed: true } : c))
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Interview Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Manage candidates, schedules and company feedback in one place.
            </p>
          </div>

          <SearchFilter
            query={query}
            setQuery={setQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            minRating={minRating}
            setMinRating={setMinRating}
          />
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h2 className="text-lg font-medium mb-3">
                Candidates ({filtered.length})
              </h2>
              <CandidateList
                candidates={filtered}
                markInterviewed={markInterviewed}
              />
            </div>
          </section>

          <aside className="space-y-4">
            <SidebarSchedule candidates={candidates} />
            <SidebarFeedback candidates={candidates} />
          </aside>
        </main>

        <footer className="mt-6 text-center text-sm text-gray-500">
          Interview Dashboard @ 2025
        </footer>
      </div>
    </div>
  );
}
