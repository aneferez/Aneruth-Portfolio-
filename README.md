🚀 Interactive Portfolio — Built Like a Product

🌐 Live: https://aneruth-portfolio.netlify.app/

Not a static portfolio.
This is a self-updating, production-grade system that turns GitHub into a dynamic content engine.

⚡ What This Solves

Traditional portfolios:

❌ Go outdated
❌ Require manual updates
❌ Don’t reflect real work

This project:

✅ Auto-syncs with GitHub
✅ Always reflects latest work
✅ Acts as a living resume
🔥 Key Features
🔄 Real-time GitHub Integration
Automatically fetches and displays all repositories
🎯 Featured + All Projects Architecture
Curated highlights + full project list
🌗 Global Theme System
Dark/Light mode with consistent styling across components
⚡ Motion System (Framer Motion)
Subtle, performance-focused animations (not gimmicky)
📄 Resume System
View + forced download (cross-browser reliable)
📱 Responsive by Default
Built mobile-first, scales cleanly across devices
🧠 Architecture (How It’s Built)

This is structured like a real frontend system, not a one-off page.

🧩 Core Layers
src/
 ├── components/     → Reusable UI (Navbar, Section, Container)
 ├── sections/       → Page-level blocks (Hero, Projects, Contact)
 ├── api/            → External integrations (GitHub API)
 ├── utils/          → Animation + shared logic
 └── App.jsx         → Composition layer
🔌 Data Flow
GitHub API → fetchRepos() → React State → UI Render
No hardcoded data
No manual updates
Fully dynamic rendering
🎨 UI System
Tailwind CSS → utility-first styling
Consistent spacing, typography, and layout system
Gradient + glassmorphism for modern feel
🎞 Motion System
Centralized animation patterns
Section-based reveal (scroll-triggered)
Staggered grid animations for projects
🛠 Tech Stack
Frontend: React (Vite)
Styling: Tailwind CSS
Animation: Framer Motion
Data: GitHub REST API
Deployment: Netlify
📈 Why This Stands Out
Not just UI — system thinking
Not static — data-driven
Not decorative — purposeful UX

This project demonstrates:

Component architecture
API integration
State management
UX + motion design
Production deployment
🔗 Live Demo

👉 https://aneruth-portfolio.netlify.app/

🚀 Run Locally
git clone https://github.com/aneferez/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev
📌 Future Enhancements
Project filtering (by tech / tags)
GitHub topics → auto-feature logic
Contact system (EmailJS / backend)
Analytics (visitor tracking)
Performance optimization (lazy loading)
👤 Author

Aneruth
Frontend Developer | Building scalable UI systems
