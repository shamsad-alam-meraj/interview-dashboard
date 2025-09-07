import React from "react";

export default function SearchFilter({
  query,
  setQuery,
  sortBy,
  setSortBy,
  minRating,
  setMinRating,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full sm:w-auto flex-wrap">
      {/* Search Input */}
      <div className="relative w-full sm:w-64 md:w-80">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or role..."
          className="w-full px-3 py-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          onClick={() => setQuery("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
        >
          ✕
        </button>
      </div>

      {/* Sort By */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full sm:w-auto px-3 py-2 border rounded-md bg-white"
      >
        <option value="rating">Sort: Rating</option>
        <option value="experience">Sort: Experience</option>
        <option value="name">Sort: Name</option>
      </select>

      {/* Min Rating */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <label className="text-sm text-gray-600">Min Rating</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="px-2 py-1 border rounded-md bg-white"
        >
          <option value={0}>Any</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={4.5}>4.5+</option>
        </select>
      </div>
    </div>
  );
}
