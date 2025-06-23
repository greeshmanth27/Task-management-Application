# Personal Task Management Application

A modern, feature-rich task management application built with React 18 and the latest web technologies. This application helps users organize their daily tasks with a clean, intuitive interface and powerful features.



## Deployment Link

https://task-management-application-five-theta.vercel.app/

## 🚀 Features

### Core Features
- ✅ **Task Management**: Create, read, update, and delete tasks
- 📝 **Rich Task Details**: Title, description, priority levels, and due dates
- ✔️ **Status Tracking**: Mark tasks as completed or pending
- 🔍 **Advanced Filtering**: Filter tasks by status (All/Pending/Completed)
- 🔎 **Search Functionality**: Find tasks quickly by title or description
- 📊 **Task Statistics**: Visual dashboard with completion rates and counters
- 💾 **Data Persistence**: All data saved to browser's Local Storage

### Bonus Features
- 🎨 **Dark/Light Theme**: Toggle between themes with smooth transitions
- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🔄 **Multiple Sort Options**: Sort by date, priority, alphabetical, or due date
- ⏰ **Due Date Management**: Visual indicators for overdue and upcoming tasks
- ✨ **Smooth Animations**: Engaging transitions and micro-interactions
- 🎯 **Priority System**: High, Medium, Low priority levels with color coding
- 📈 **Progress Tracking**: Completion rate visualization
- 🚨 **Smart Notifications**: Visual cues for overdue tasks

## 🛠️ Technologies Used

- **React 18** - Latest version with Hooks and modern patterns
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Context API** - State management for global app state
- **Local Storage API** - Data persistence across browser sessions
- **Lucide React** - Beautiful, customizable icons
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

\`\`\`
src/
├── components/           # React components
│   ├── Header/          # App header with theme toggle
│   ├── TaskManager/     # Main task management container
│   ├── TaskForm/        # Task creation form
│   ├── TaskList/        # Task list container
│   ├── TaskCard/        # Individual task display
│   ├── TaskEditModal/   # Task editing modal
│   ├── TaskFilters/     # Search and filter controls
│   ├── TaskStats/       # Statistics dashboard
│   ├── EmptyState/      # Empty state component
│   └── ConfirmDialog/   # Confirmation dialogs
├── context/             # React Context providers
│   ├── TaskContext.jsx  # Task state management
│   └── ThemeContext.jsx # Theme state management
├── reducers/            # State reducers
│   └── taskReducer.js   # Task state reducer
├── utils/               # Utility functions
│   ├── localStorage.js  # Local storage operations
│   ├── helpers.js       # General helper functions
│   └── taskUtils.js     # Task-specific utilities
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
\`\`\`


![image](https://github.com/user-attachments/assets/917b9432-10b9-4142-a6a0-7e48a836fc2a)



## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd personal-task-manager
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

\`\`\`bash
npm run build
\`\`\`

If you're experiencing dependency resolution errors, install these exact versions to ensure compatibility:

<pre><code># Install core React packages npm install react@18.2.0 react-dom@18.2.0 # Install date handling and date picker npm install date-fns@2.30.0 react-day-picker@8.10.1 # Install development tools npm install -D vite@4.4.5 @vitejs/plugin-react@4.0.3 # Install Tailwind CSS and PostCSS dependencies npm install -D tailwindcss@3.3.3 postcss@8.4.27 autoprefixer@10.4.14 </code></pre>
✅ This setup avoids common ERESOLVE dependency conflicts with React 19 and date-fns@4.x.

The built files will be in the `dist` directory, ready for deployment.

## 🎯 Usage Guide

### Adding Tasks
1. Fill in the task title and description (required fields)
2. Select a priority level (Low, Medium, High)
3. Optionally set a due date
4. Click "Add Task" to create the task

### Managing Tasks
- **Complete/Uncomplete**: Click the circle icon next to any task
- **Edit**: Click the edit icon to modify task details
- **Delete**: Click the trash icon and confirm deletion

### Filtering and Searching
- Use the search bar to find tasks by title or description
- Filter tasks by status using the All/Pending/Completed buttons
- Sort tasks by date, priority, alphabetical order, or due date

### Theme Toggle
- Click the sun/moon icon in the header to switch between light and dark themes
- Your preference is automatically saved

## 🔧 Configuration

### Customizing Styles
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in `src/index.css`
- Individual component styling in respective component files

### Adding Features
The modular architecture makes it easy to add new features:
- Add new actions to `taskReducer.js`
- Create new components in the `components/` directory
- Add utility functions to the `utils/` directory

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Vite for the fast build tool

---

**Happy Task Managing! 🎉**
