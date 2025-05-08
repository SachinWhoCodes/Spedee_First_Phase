**Spedee First Phase Developer Documentation**

**1. Introduction**

This documentation provides a comprehensive overview of the Spedee First Phase project, a mobile application developed using React Native and the Expo framework. Named "webview_app," the app serves as a native wrapper for displaying web content, enhanced with native UI elements such as bottom tabs for navigation. This guide is designed to equip new developers with the knowledge needed to understand, set up, and extend the codebase, ensuring a smooth onboarding process for future teams.


**2. Project Overview**

The Spedee First Phase project is a cross-platform mobile application that delivers a seamless user experience on Android, iOS, and web platforms. It leverages Expo for streamlined development and deployment, React Navigation for intuitive screen transitions, and Tailwind CSS via Nativewind for efficient styling. The core functionality centers around a webview component that renders web content, likely from a specific website or web application, with additional native features to enhance usability.


**3. Technologies and Dependencies**

The project is built with a robust stack of modern mobile development tools and libraries, as detailed in the package.json file. The following table summarizes the key technologies and their purposes:







**Technology/Library
Version
Purpose**



React Native
0.79.2
Framework for building cross-platform mobile applications.


Expo
~53.0.6
Toolchain for developing, building, and deploying React Native apps.


React Navigation
Various
Handles navigation, including bottom tabs for screen transitions.


Nativewind
4.1.23
Integrates Tailwind CSS for utility-first styling in React Native.


Tailwind CSS
3.4.17
Provides utility classes for styling UI components.


React Native WebView
13.13.5
Renders web content within the app, likely the core feature.


Expo Router
~5.0.5
Enables file-based routing for organizing app screens.


React Native Reanimated
~3.17.4
Supports animations and gestures in the UI.


Expo Modules
Various
Provide features like blur effects, haptic feedback, and image handling.


TypeScript
~5.8.3
Adds static typing to JavaScript for improved code reliability.





**Additional Notes:**

The app supports both JavaScript and TypeScript, with TypeScript used for type safety, as indicated by tsconfig.json and @types/react.
Styling is managed via Tailwind CSS through Nativewind, enabling rapid UI development with utility classes.
The expo-linking module suggests support for deep linking, allowing navigation to specific app content via URLs.

**4. Project Structure**

The project adheres to the standard Expo project structure, utilizing file-based routing managed by Expo Router. The following table outlines key directories and files:



Directory/File
Purpose



app/
Contains the main application code, with files defining routes/screens.


app/_layout.js
Configures the router and navigation structure, likely setting up bottom tabs.


app/index.js
Defines the home screen or primary route of the app.


assets/
Stores static assets like images (e.g., logo.png for icon and splash).


components/
(If present) Reusable UI components shared across screens.


app.json
Configures app metadata (name, icon, splash screen, etc.).


package.json
Lists dependencies, scripts, and project metadata.


tsconfig.json
Configures TypeScript settings for the project.


.gitignore
Specifies files/directories to exclude from version control (e.g., node_modules/).


**File-Based Routing:**

Expo Router uses the file structure in app/ to define navigation routes. For example, app/index.js corresponds to the root route (/), and app/about.js would correspond to /about.
The app/_layout.js file typically defines the navigation container, such as a bottom tab navigator, and shared layout components.

**Configuration:**

The app.json file specifies the app’s name ("webview_app"), slug, icon (assets/images/logo.png), and splash screen settings. It also enables the new React Native architecture and configures EAS for builds.
The .gitignore file excludes common build artifacts and the app-example/ directory, indicating custom code resides in app/.

**5. Setting Up the Development Environment**
To set up the project for development, follow these steps:

**Install Prerequisites:**

Install Node.js (includes npm).
Optionally, install the Expo CLI: npm install -g expo-cli.
For Android development, install Android Studio and set up an emulator.
For iOS development, install Xcode (macOS only) and set up a simulator.


**Clone the Repository:**
git clone https://github.com/SachinWhoCodes/Spedee_First_Phase.git


**Navigate to the Project Directory:**
cd Spedee_First_Phase


**Install Dependencies:**
npm install


**Start the Development Server:**
npx expo start


This launches the Metro bundler and provides a QR code to open the app in the Expo Go app or emulators.
To target specific platforms:
Android: npx expo start --android
iOS: npx expo start --ios
Web: npx expo start --web




**Run the App:**

Use the Expo Go app on a physical device to scan the QR code.
Alternatively, use Android Studio or Xcode emulators/simulators for testing.



**Notes:**

Ensure a stable internet connection for the initial setup, as Expo downloads dependencies and assets.
If TypeScript errors occur, verify that tsconfig.json is correctly configured and run npm install again.

**6. Understanding the Codebase**

The codebase is organized around Expo Router’s file-based routing, with the app/ directory serving as the core of the application. Below are key aspects of the codebase:
Navigation

The app uses React Navigation with the @react-navigation/bottom-tabs package, indicating a bottom tab navigation structure.
The app/_layout.js file configures the navigation container, defining tabs for different screens (e.g., Home, About).
Each tab corresponds to a route file in app/ (e.g., index.js for the home screen).

**WebView Integration**

The react-native-webview dependency powers the app’s core feature, rendering web content.
The URL(s) loaded in the webview are defined in route files (e.g., app/index.js). Developers should inspect these files to identify the target website or web application.
The webview may be wrapped in a native UI with navigation controls or other elements.

**Styling**

Styling is managed using Tailwind CSS via Nativewind, allowing developers to apply utility classes (e.g., bg-blue-500, p-4) directly in JSX/TSX components.
Refer to Tailwind’s documentation for available classes and customization options.

**Animations and Interactions**

The react-native-reanimated library supports animations and gestures, potentially used for transitions, interactive elements, or custom UI effects.
The expo-haptics module enables haptic feedback (e.g., vibrations) for user interactions.
The expo-blur module may be used for blur effects in the UI, such as overlays or backgrounds.

**TypeScript**

The project uses TypeScript for type safety, with types defined for React components (@types/react) and other dependencies.
Ensure that components and functions include appropriate type annotations to maintain code reliability.

**Additional Features**

Deep Linking: The expo-linking module supports deep linking, allowing external URLs to navigate to specific app content (configured via the scheme in app.json: webviewapp).
Image Handling: The expo-image module optimizes image loading and display, likely used for assets like icons or splash screens.
Safe Area and Screens: The react-native-safe-area-context and react-native-screens libraries ensure proper handling of device-specific layouts (e.g., notches, status bars) and optimized screen rendering.

**7. Building and Deploying**

The app is configured for building and deployment using Expo Application Services (EAS). The app.json file includes an EAS project ID, facilitating streamlined builds. Follow these steps:

Set Up Expo Account:

Create an account at Expo and log in:expo login




**Configure EAS:**

Ensure the EAS CLI is installed: npm install -g eas-cli.
Verify the project ID in app.json (b1a27eb4-09cd-4347-9ddb-d19f8409a22e).
Run eas config to review or update build settings.


**Build the App:**

For Android:eas build --platform android


For iOS:eas build --platform ios


This generates APK (Android) or IPA (iOS) files for distribution.


**Submit to App Stores:**

Use eas submit --platform android or --platform ios to submit builds to Google Play Store or Apple App Store, respectively.
Ensure you have the necessary developer accounts and credentials.


**Web Deployment:**

The app supports web deployment (react-native-web), configured with Metro bundler (app.json).
Run npx expo start --web to test the web version locally.
Deploy the web version using expo export:web and host the output on a static hosting service.



**Notes:**

The new React Native architecture is enabled (newArchEnabled: true in app.json), which may require specific build configurations. Refer to Expo’s documentation for compatibility details.
Ensure all assets (e.g., assets/images/logo.png) are correctly referenced and included in builds.

**8. API Integrations**

No specific API client libraries (e.g., Axios) are listed in package.json, suggesting that the app may rely on the built-in fetch API or similar for network requests. If the webview loads a dynamic web application, it likely handles its own API calls. Developers should inspect route files for any fetch or HTTP request logic to identify external API dependencies.


**9. Testing**

The package.json does not list testing frameworks like Jest or React Testing Library, indicating that automated tests may not be implemented. However, the presence of eslint and eslint-config-expo ensures code quality through linting. To add tests:

Install Jest: npm install --save-dev jest jest-expo.
Configure Jest for Expo following Expo’s testing guide.
Write unit tests for components and integration tests for navigation flows.

For manual testing, use the Expo Go app or emulators to verify functionality across platforms.


**10. Additional Notes for Developers**

Exploring the Codebase: Start by reviewing the app/ directory to understand the navigation structure and webview implementation. Look for files like _layout.js, index.js, or other route-specific files.
Tailwind CSS: Familiarize yourself with Tailwind’s utility classes to style components efficiently. Customize the Tailwind configuration (tailwind.config.js) if needed.
Expo Router: When adding new screens, create files in app/ (e.g., app/settings.js for a /settings route). Refer to Expo Router’s documentation for advanced routing patterns.
TypeScript: Use TypeScript for type-safe code. Run npm run lint to check for type errors and linting issues.
Resetting the Project: The npm run reset-project script moves the starter code to app-example/ and creates a blank app/ directory. Avoid running this unless intending to start from scratch.
Community Resources: Join the Expo Discord or explore Expo’s GitHub for support and updates.

This documentation serves as a comprehensive starting point for new developers to get acquainted with the Spedee First Phase project. For detailed insights, inspect the specific files and code within the repository.
