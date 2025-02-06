
Graph Visualizer🚀 IntroductionGraph Visualizer is a simple web application built with React, Redux, and React Flow. It allows users to create and interact with graph nodes dynamically.
🎨 Features🖌 Select nodes and customize their appearance
🎨 Change node colors
🔠 Adjust node font size
🔄 Real-time updates with Redux state management
⚡ Fast and optimized with Vite
📦 InstallationClone the repository and install dependencies:
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
npm install🔥 Development ServerStart the development server with hot reloading:
npm run devThe app will be available at: http://localhost:5173
📦 Build for ProductionTo create an optimized production build:
npm run buildThe built files will be located in the dist folder.
🚀 Preview Production BuildTo preview the production build locally:
npm run preview🛠 Project Structure├── src/                 # Source files
│   ├── components/      # Reusable UI components          
│   ├── redux/           # Redux state management
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── styles/          # Global styles
│   ├── main.tsx         # Entry point
│   ├── App.tsx          # Main App component
├── public/              # Static files
├── .gitignore           # Ignored files for Git
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation📜 ScriptsCommandDescriptionnpm run devStart development servernpm run buildBuild for productionnpm run previewPreview production buildnpm run lintRun ESLint (if configured)npm run formatFormat code with Prettier (if configured)📄 LicenseThis project is licensed under the MIT License.
