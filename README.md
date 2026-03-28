# Nexus Admin Dashboard

A modern, responsive admin dashboard built with React, Vite, and Tailwind CSS.

## Preview

> Clean dark/light interface with sidebar navigation, charts, user management, reports, and settings.

## Tech Stack

- **React 18** — UI framework
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Recharts** — charts and data visualization
- **Lucide React** — icons

## Features

- 🌗 Dark / Light mode toggle
- 📊 Revenue and activity charts
- 👥 User management table with search and filters
- 📋 Reports page with export options
- ⚙️ Settings with profile, security, notifications and preferences tabs
- 📱 Fully responsive layout
- 🔐 Login screen with demo access

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/nexus-admin.git

# Enter the project folder
cd nexus-admin/nexus

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Demo Access

On the login screen, enter **any email and password** to access the dashboard.

## Project Structure

```
nexus/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Charts.jsx
│   │   ├── RecentTable.jsx
│   │   └── StatCard.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## License

MIT — free to use and modify.
