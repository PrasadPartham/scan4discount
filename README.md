📌 Scan4Discount

Scan4Discount is a smart QR-based discount platform that helps businesses attract and retain customers effortlessly. By offering instant, scannable discounts, it encourages repeat visits and builds customer loyalty through an automated discount loop.

🚀 Features

🔳 QR Code based discount system

🎁 Randomized discount rewards

🔁 Encourages repeat customer visits

📊 Simple and scalable business flow

🌍 Region-based routing (/us and /in)

📩 Contact & Newsletter APIs

💳 Pricing page with structured plans

🧠 How It Works

Customer scans QR code

Instant discount is revealed

Purchase is made

Customer returns for more discounts

Business grows through repeat visits

🏗 Tech Stack

Next.js 16 (App Router)

TypeScript

Tailwind CSS

Lucide Icons

Vercel Deployment

Proxy (Geo-based Region Routing)

🌍 Region-Based Routing

The application automatically detects user location and redirects:

🇺🇸 USA → /us

🇮🇳 India → /in

Powered by Next.js Proxy (Edge Runtime).

📂 Project Structure
app/
 ├── [region]/
 │    ├── page.tsx
 │    ├── features/
 │    ├── pricing/
 │    ├── contact/
 │    └── register/
 ├── api/
 │    ├── contact/
 │    ├── newsletter/
 │    └── register/
 ├── layout.tsx
 └── globals.css

⚙️ Installation

Clone the repository:

git clone https://github.com/yourusername/scan4discount.git
cd scan4discount


Install dependencies:

npm install


Run development server:

npm run dev


Build for production:

npm run build

🚀 Deployment

The project is optimized for Vercel deployment.

Push to GitHub

Import project in Vercel

Deploy

Geo-based routing works automatically in production.

📌 Future Improvements

Analytics dashboard for businesses

Admin control panel

Customer scan tracking

Reward customization

Performance optimization

📄 License

this project belong to Visys Cloud solutions 
iam using this in my git for testing purpose in vercel.