# 📝 Nott App (Flutter + Node.js)

A beginner-friendly full-stack note-taking app demonstrating how to connect a Flutter frontend with a Node.js backend using REST APIs.

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## 🚀 Features

✨ **Core Functionality**
- ➕ Create notes with a beautiful UI
- 👀 View all notes in a responsive list
- 🗑️ Delete notes with swipe gesture or button
- 🔄 Real-time refresh after operations
- ⚡ Fast in-memory storage

🎨 **UI/UX Enhancements**
- Modern Material Design 3
- Smooth animations and transitions
- Swipe-to-delete functionality
- Delete confirmation dialogs
- Error handling with user-friendly messages
- Loading states and empty states
- Responsive design

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Flutter (Dart) |
| Backend | Node.js + Express |
| HTTP Client | http package |
| Database | In-memory (future: MongoDB) |
| API | RESTful |

## 🗂️ Project Structure

```
nott/
│
├── backend/
│   ├── server.js              # Express server with REST API
│   └── package.json           # Node.js dependencies
│
└── frontend/
    ├── lib/
    │   ├── main.dart         # App entry point with theming
    │   ├── screens/
    │   │   └── notes_screen.dart    # Main notes UI
    │   └── services/
    │       └── api_service.dart     # HTTP API calls
    └── pubspec.yaml          # Flutter dependencies
```

## ⚙️ Backend Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd backend
npm install express cors
```

### Run the Server

```bash
node server.js
```

Server runs at 👉 **http://localhost:3000**

### Available Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/notes` | Get all notes | - |
| `POST` | `/notes` | Add a new note | `{ "text": "Note content" }` |
| `DELETE` | `/notes/:id` | Delete a note | - |

## 💙 Frontend Setup

### Prerequisites
- Flutter SDK (3.0 or higher)
- Dart SDK
- Android Studio / Xcode (for mobile)
- Chrome (for web)

### Installation

```bash
cd frontend
flutter pub get
```

### Configure API Endpoint

Update the `baseUrl` in `lib/services/api_service.dart`:

```dart
// For Android Emulator
static const String baseUrl = 'http://10.0.2.2:3000';

// For iOS Simulator
static const String baseUrl = 'http://localhost:3000';

// For Physical Device (replace with your machine's IP)
static const String baseUrl = 'http://192.168.1.XXX:3000';
```

### Run the App

```bash
# For Chrome (web)
flutter run -d chrome

# For Android Emulator
flutter run -d android

# For iOS Simulator
flutter run -d ios

# List available devices
flutter devices
```

## 🔧 Configuration

### Finding Your Machine's IP Address

**Linux/macOS:**
```bash
ip addr show    # or ifconfig
```

**Windows:**
```bash
ipconfig
```

Look for your local IP (usually starts with `192.168.x.x` or `10.0.x.x`)

## 📱 Screenshots

### Features Showcase
- ✅ Beautiful card-based note layout
- ✅ Numbered notes with circular avatars
- ✅ Swipe-to-delete gesture support
- ✅ Confirmation dialogs before deletion
- ✅ Empty state with helpful illustration
- ✅ Error state with retry functionality
- ✅ Smooth loading indicators
- ✅ Floating snackbar notifications

## 🛠️ Troubleshooting

### Common Issues

**1. Connection Refused / Network Error**
- Ensure backend server is running
- Check if the `baseUrl` matches your setup
- For Android emulator, use `10.0.2.2` instead of `localhost`
- Check firewall settings

**2. CORS Error**
- Backend already has CORS enabled via `cors` package
- Ensure server is properly restarted after code changes

**3. Flutter Dependencies**
```bash
flutter clean
flutter pub get
```

**4. Check Server Connectivity**
```bash
# Test from command line
curl http://localhost:3000/notes

# Should return: []
```

## 🚦 Development Workflow

1. **Start Backend Server**
   ```bash
   cd backend
   node server.js
   ```

2. **Start Flutter App**
   ```bash
   cd frontend
   flutter run
   ```

3. **Hot Reload** - Press `r` in the Flutter terminal to hot reload changes

4. **Hot Restart** - Press `R` for a full restart

## 📚 Learning Resources

### Flutter
- [Flutter Documentation](https://docs.flutter.dev/)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Flutter Codelabs](https://docs.flutter.dev/codelabs)

### Node.js & Express
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [REST API Best Practices](https://restfulapi.net/)

## 🎯 Future Enhancements

- [ ] Add MongoDB for persistent storage
- [ ] Implement user authentication
- [ ] Add note editing functionality
- [ ] Add note categories/tags
- [ ] Search and filter notes
- [ ] Dark mode support
- [ ] Note sharing functionality
- [ ] Cloud sync
- [ ] Rich text formatting
- [ ] Image attachments

## 🤝 Contributing

Contributions are welcome! This is a learning project perfect for beginners.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for learning purposes.

## 👨‍💻 Author

**Sukanya**
- GitHub: [@sukanya1426](https://github.com/sukanya1426)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you learn Flutter and Node.js!

---

**Happy Coding! 🎉**
