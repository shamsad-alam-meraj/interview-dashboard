# [Interview Dashboard](https://skillvi-interview-dashboard.netlify.app/)

A **responsive Interview Dashboard UI** built with **React.js** and **Tailwind CSS**, designed to manage candidates, interview schedules, and company feedback.

## 📂 Project Structure

- `src/components/` – React components (`CandidateCard`, `CandidateList`, `RatingStars`, `SearchFilter`, etc.)
- `src/data/` – Initial candidate data (`initialCandidates.js`)
- `src/App.jsx` – Main dashboard layout
- `src/index.css` – Tailwind CSS configuration
- `public/` – Static assets like images and screenshots

## 🚀 How to Run the Project

1. **Clone the repository**

```bash
    git clone https://github.com/shamsad-alam-meraj/interview-dashboard.git
```

```bash
   cd interview-dashboard
```

2. **Install dependencies**

```bash
   npm install
```

3.  **Start the development server**

```bash
   npm run dev
```

4. **Open in browser**

```bash
   Visit http://localhost:5173 or the URL shown in your terminal
```

# 💡 Assumptions Made

- Candidate data is stored locally in initialCandidates.js
- Each candidate has a rating (0–5) and an interviewed status
- Avatar colors are pre-defined in the data (bg-indigo-500, bg-green-500, etc.)
- Feedback is textual; longer notes are truncated with 'Read More / Show Less'
- No backend integration; all actions are handled in React state

# ✨ Extra Features Implemented

- Search and Filter by candidate name, role, rating, or status
- Sorting by rating, experience, or name
- Top Rated Badge for candidates with rating ≥ 4.5
- Expandable Feedback Notes with 'Read More / Show Less'
- View Feedback Modal with blurry background instead of alert
- Mark Interviewed Button disables for already interviewed candidates
- Responsive grid layout for mobile, tablet, and desktop
- Hover effects and card animations for better interactivity

# 🎨 Screenshots

- path: "./public/images/screenshots/Full_Page.png" - name: "Full Page Screenshot"
- path: "./public/images/screenshots/Interviewied_Card.png" - name: "Interviewed Card Screenshot"
- path: "./public/images/screenshots/Search.png" - name: "Search Screenshot"
- path: "./public/images/screenshots/Sort_By_Experience.png" - name: "Sort by Experience Screenshot"
- path: "./public/images/screenshots/Sort_By_Rating.png" - name: "Sort by Rating Screenshot"
- path: "./public/images/screenshots/View_Feedback_Modal.png" - name: "Full Page Screenshot"

# ⚡ Technologies Used

- React.js: "Frontend framework"
- Tailwind CSS: "Styling & responsive layout"
- JavaScript: "Logic and state management (ES6+)"

# 📌 Notes

- Built for demonstration purposes
- Can be extended to integrate with a backend API for real candidate data
- Mobile-friendly design with responsive layout and accessible modal
