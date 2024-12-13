# NASA APOD Viewer

🌌 **NASA APOD Viewer** is a React-based web application that showcases NASA's Astronomy Picture of the Day (APOD). It allows users to view NASA's stunning daily images or videos, explore photos from previous days, and learn about the universe. This app was designed with a focus on clean UI, dynamic updates, and secure API usage.

---

## 🛠 Features

- **Dynamic Daily Updates**: Automatically fetches and displays today's APOD, yesterday's, and tomorrow's (when available).
- **Rich Content**: Each image or video includes a title, description, date, and copyright information (if available).
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
- **Environment Variable Security**: Keeps the NASA API key secure using `.env` files.
- **Manual Refresh**: Fetches the latest data on user demand.

---

## 🚀 Technologies Used

- **React.js**: Frontend framework for building dynamic UI.
- **NASA APOD API**: Source of daily astronomy images and videos.
- **CSS**: For styling the app's layout and hover effects.
- **Environment Variables**: To securely manage the API key.

---

## 🔑 Setup Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Obtain a free API key from the [NASA API portal](https://api.nasa.gov/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nasa-apod-viewer.git
   cd nasa-apod-viewer
2. npm install 
3. npm run dev