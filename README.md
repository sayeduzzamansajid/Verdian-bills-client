# Bill Management Client

A comprehensive web application designed to help users manage their bills, track expenses, and visualize spending habits. Built with React, Firebase, and Tailwind CSS.

## 🚀 Live Demo

[[Live Demo](https://veridian-bills.pages.dev/)]

## ✨ Features

- **User Authentication**: Secure Login and Registration using Firebase.
- **Dashboard**: Overview of your billing status.
- **Bill Management**: 
  - **Add Bills**: Easily input new bills with details.
  - **View All Bills**: A comprehensive list of all managed bills.
  - **My Bills**: Filtered view for logged-in user's bills.
  - **Bill Details**: Detailed view of specific bills.
- **Profile Management**: Update and view user profile information.
- **Responsive Design**: Fully responsive interface built with Tailwind CSS and DaisyUI.
- **Private Routes**: Protected pages ensuring only authenticated users can access sensitive data.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & [DaisyUI](https://daisyui.com/) v5
- **Routing**: [React Router](https://reactrouter.com/) v7
- **Authentication**: [Firebase](https://firebase.google.com/)
- **Http Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) & [SweetAlert2](https://sweetalert2.github.io/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) (implied capability)

## ⚙️ Installation & Usage

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bill-management-client.git
   cd bill-management-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a project on [Firebase Console](https://console.firebase.google.com/).
   - Copy your Firebase configuration.
   - Update `src/Firebase/Firebase.config.js` with your credentials or use environment variables (Recommended).

   Example `.env.local` file:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── Components/    # Reusable UI components
├── Context/       # Context providers (e.g., AuthContext)
├── Firebase/      # Firebase configuration
├── Layouts/       # Page layouts (MainLayout, etc.)
├── Pages/         # Application pages (Home, Login, Bills, etc.)
├── Private/       # Protected route wrappers
├── Routes/        # Routing configuration
└── assets/        # Static assets
```
