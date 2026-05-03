# 🚀 Interactive Portfolio — Data-Driven Frontend System

🌐 **Live:** https://aneruth-portfolio.netlify.app/

A production-grade portfolio engineered as a **data-driven UI system**.
Instead of static content, the application treats GitHub as a **source of truth**, enabling automatic updates and eliminating manual maintenance.

---

## 🧠 Problem → Solution

**Problem:**
Developer portfolios quickly become stale, misrepresenting current work and requiring manual updates.

**Solution:**
Build a **self-updating frontend system** that:

* Pulls real-time data from GitHub
* Renders projects dynamically
* Maintains a curated + complete view of work

---

## ⚙️ System Design

### 🔌 Data Pipeline

 
GitHub REST API
      ↓
fetchRepos() (API layer)
      ↓
State Management (React Hooks)
      ↓
Normalized Data
      ↓
UI Rendering (Projects / Featured)


**Key properties:**

* No hardcoded project data
* Stateless API integration
* Resilient to repo changes (add/remove/update)

-------------------------------------------------------------------------------------------------------------------------------

### 🧩 Component Architecture

```bash id="faang2"
components/
  ├── Navbar        → Navigation + theme control
  ├── Section       → Reusable layout + animation wrapper
  ├── Container     → Consistent layout constraints

sections/
  ├── Hero          → Entry + primary CTA
  ├── Featured      → Curated high-signal projects
  ├── Projects      → Full GitHub dataset
  ├── Contact       → User interaction layer

api/
  └── github.js     → External data abstraction
```

**Design principles:**

* Separation of concerns
* Reusability over duplication
* Declarative composition

-------------------------------------------------------------------------------------------------------------------------------

### 🎨 UI & State Strategy

* Tailwind CSS → deterministic styling system
* Dark/Light theme → global state-driven UI
* Consistent spacing + typography scale

-------------------------------------------------------------------------------------------------------------------------------

### 🎞 Motion System

* Framer Motion with **controlled animation scope**
* Section-level entry animations (intersection-based)
* Staggered rendering for grid performance

**Goal:** Enhance perception without degrading performance

-------------------------------------------------------------------------------------------------------------------------------

## 🚀 Core Features

* 🔄 **Real-Time GitHub Sync**
  Portfolio updates automatically with new repositories

* 🎯 **Dual-Layer Project Strategy**

  * Featured (high signal)
  * Full dataset (complete visibility)

* 🌗 **Global Theme Engine**
  System-wide dark/light toggle with consistent rendering

* 📄 **Resume Delivery System**
  Cross-browser compatible view + forced download

* 📱 **Responsive Layout System**
  Mobile-first, scalable across breakpoints

-------------------------------------------------------------------------------------------------------------------------------

## 📊 Engineering Impact

* Eliminates manual portfolio updates entirely
* Ensures **data consistency with GitHub**
* Demonstrates **API integration + UI orchestration**
* Improves maintainability via modular architecture

-------------------------------------------------------------------------------------------------------------------------------

## 🛠 Tech Stack

* React (Vite)
* Tailwind CSS
* Framer Motion
* GitHub REST API
* Netlify

-------------------------------------------------------------------------------------------------------------------------------

## 🔗 Live System

👉 https://aneruth-portfolio.netlify.app/

-------------------------------------------------------------------------------------------------------------------------------

## 🧪 Local Development

```bash id="faang3"
git clone https://github.com/aneferez/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev
```

-------------------------------------------------------------------------------------------------------------------------------

## 📌 Roadmap

* GitHub topics → automated project categorization
* Client-side caching for API optimization
* Analytics integration (traffic + engagement)
* Progressive enhancement (lazy loading, code splitting)

-------------------------------------------------------------------------------------------------------------------------------

## 👤 Author

Aneruth
Frontend Engineer focused on scalable UI systems and real-world product thinking
