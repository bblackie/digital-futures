# Installing GDevelop 5 on Windows 11

This guide will walk you through installing GDevelop 5, the open-source, no-code game engine, on Windows 11. GDevelop uses visual programming (events) instead of traditional coding, making it accessible for beginners while still being powerful enough for advanced game development.

## Prerequisites

Before starting, ensure you have:
- Windows 11 (64-bit)
- Administrator access to your computer
- Stable internet connection
- Approximately 500MB of free disk space
- Recommended: At least 4GB RAM (8GB+ for larger projects)

## Understanding GDevelop Installation Options

GDevelop offers three ways to use the software:

1. **Desktop Application (Recommended)** - Installed on your computer, works offline
2. **Web Version** - Runs in browser, no installation needed, requires internet
3. **Portable Version** - Can run from USB drive, no installation required

This guide focuses on the **Desktop Application** as it's the most suitable for classroom use and provides the best performance.

## Step 1: Download GDevelop 5

### 1.1 Navigate to the Official Download Page

1. Open your web browser
2. Navigate to: https://gdevelop.io/ or https://gdevelop.io/download/
3. The website should display download options for different platforms

### 1.2 Choose Your Download Option

**For Desktop Installation (Recommended):**

1. Look for the **Download GDevelop** button for Windows
2. You'll see two options:
   - **Installer (.exe)** - Standard installation (recommended)
   - **Portable (.zip)** - No installation required, can run from anywhere
3. Click **Download** for the installer version
4. The file will download (approximately 150-200MB)
5. File will be named something like `GDevelop-5-Setup-x.x.x.exe`

**Alternative: Portable Version**

1. If you prefer the portable version, click on the **.zip** download option
2. File will be named something like `GDevelop-5-x.x.x-Windows.zip`

## Step 2: Install GDevelop (Desktop Version)

### 2.1 Run the Installer

1. Locate the downloaded `.exe` file in your Downloads folder
2. Double-click the installer file to run it
3. If prompted by User Account Control, click **Yes** to allow the installation
4. If Windows Defender SmartScreen appears:
   - Click **More info**
   - Click **Run anyway**

### 2.2 Follow the Installation Wizard

1. **Language Selection**:
   - Choose your preferred language
   - Click **OK**

2. **Welcome Screen**:
   - Read the welcome message
   - Click **Next**

3. **License Agreement**:
   - Read the license (GDevelop is open-source under MIT license)
   - Click **I Agree**

4. **Choose Install Location**:
   - Default location is usually: `C:\Users\[YourUsername]\AppData\Local\Programs\GDevelop 5\`
   - You can click **Browse** to change the location if desired
   - Click **Next**

5. **Select Start Menu Folder**:
   - Keep the default "GDevelop 5" folder name
   - Or customize if you prefer
   - Check **Create a desktop shortcut** if you want easy access
   - Click **Install**

6. **Installing**:
   - Wait for the installation to complete (usually 1-2 minutes)
   - You'll see a progress bar

7. **Completing Setup**:
   - Check **Run GDevelop 5** to launch it immediately (optional)
   - Click **Finish**

### 2.3 Alternative: Portable Installation

If you chose the portable .zip version:

1. Locate the downloaded `.zip` file in your Downloads folder
2. Right-click the ZIP file and select **Extract All...**
3. Choose a permanent location:
   - `C:\GDevelop\` (create this folder if needed)
   - `C:\Program Files\GDevelop\`
   - A dedicated folder in your Documents
   - USB drive (if you want to run it on multiple computers)
4. Click **Extract**
5. Navigate into the extracted folder
6. Find and double-click `GDevelop.exe` to run the program

**Create Desktop Shortcut (Optional):**
1. Right-click on `GDevelop.exe`
2. Select **Send to** > **Desktop (create shortcut)**
3. Rename to "GDevelop 5" if desired

## Step 3: First-Time Launch and Setup

### 3.1 Launch GDevelop

**If you used the installer:**
1. Click the Windows **Start** button
2. Type "GDevelop"
3. Click on **GDevelop 5** when it appears
4. Or use the desktop shortcut if you created one

**If you used the portable version:**
1. Navigate to your GDevelop folder
2. Double-click `GDevelop.exe`

### 3.2 First Launch Experience

When you first launch GDevelop, you may see:

1. **Welcome Dialog** or **Getting Started** screen:
   - This provides quick tips and tutorials
   - You can click through to learn about GDevelop
   - Or click **Skip** or close the dialog to proceed

2. **Optional Account Creation**:
   - GDevelop may prompt you to create a free account
   - **An account is NOT required** to use GDevelop
   - Benefits of creating an account:
     - Cloud projects (access from anywhere)
     - One-click publishing to web
     - Leaderboards and analytics
   - You can click **Skip** or **Continue without account**
   - You can always create an account later

3. **Main Interface Loads**:
   - You'll see the GDevelop home screen with:
     - **Create a new project** options
     - **Example games and templates**
     - **Learn** section with tutorials
     - **Recent projects** (empty on first launch)

## Step 4: Create Your First Project

### 4.1 Explore the Start Page

Before creating a project, notice these sections:

- **Create a new project**: Start from scratch or use templates
- **Examples**: Pre-made games you can open and study
- **Tutorials**: Built-in learning resources
- **Recent Projects**: Your recently opened projects appear here

### 4.2 Create a Test Project

Let's create a simple project to verify everything works:

1. Click on **Create a new project**

2. You'll see project templates:
   - **Empty project** - Completely blank
   - **Platformer** - Side-scrolling game template
   - **Space Shooter** - Top-down shooter template
   - **Isometric** - Isometric game template
   - Many others...

3. For testing, select **Empty project** or any template you're curious about

4. **Choose where to save**:
   - Click **Choose Folder**
   - Create or select a folder for your GDevelop projects
   - Recommended: Create `C:\Users\[YourUsername]\Documents\GDevelop Projects\`
   - Give your project a name (e.g., "MyFirstGame")
   - Click **Select Folder** or **OK**

5. Click **Create project**

6. GDevelop will open the project editor

### 4.3 Understand the Project Editor Interface

Once your project opens, you'll see several main areas:

**Top Bar:**
- **File** menu - Save, open, export
- **Edit** menu - Preferences and settings
- **View** menu - Show/hide panels
- **Play** button (▶) - Test your game
- **Preview** options - Different preview modes

**Left Sidebar - Project Manager:**
- **Scenes** - Different screens/levels in your game
- **External events** - Reusable event sheets
- **External layouts** - Reusable scene layouts
- **Resources** - Images, sounds, fonts

**Center Area - Scene Editor:**
- Visual editor where you place objects
- Canvas where you design your game levels
- Toolbar with object placement tools

**Right Sidebar - Properties Panel:**
- Shows properties of selected objects
- Instance properties
- Behaviors and effects

**Bottom Panel - Events Editor:**
- Where you create game logic using visual events
- No coding required - uses condition/action blocks

### 4.4 Test the Editor

Let's add a simple object to verify everything works:

1. In the **Scene Editor** (center area), right-click on the canvas
2. Select **Add a new object**
3. Choose **Sprite** (for 2D images)
4. Name it "Player" (or anything you like)
5. Click **Add**
6. You'll now need to add an animation/image:
   - Click **Add an animation**
   - Click **Add** (to add a frame)
   - Click **Choose a file** to add an image
   - Or click **Choose an AI-generated image** (if available)
   - For testing, you can use any image on your computer
   - Or just leave it with the placeholder and click **Apply**
7. Click and drag in the scene to place your object
8. You should see your object appear in the scene!

### 4.5 Run a Quick Test

1. Click the **Play** button (▶) in the top toolbar
2. Or press **F5** on your keyboard
3. A preview window should open showing your scene
4. If you see your scene (even if it's just empty or has one object), GDevelop is working correctly!
5. Close the preview window when done

### 4.6 Save Your Project

1. Go to **File** > **Save** (or press `Ctrl + S`)
2. Your project will save to the folder you selected earlier
3. You'll see a `.json` file and a folder with your project name

## Step 5: Recommended Initial Settings

### 5.1 Set Auto-Save Preferences

1. Go to **File** > **Preferences** (or **Edit** > **Preferences**)
2. Look for **Auto-save** options:
   - Enable **Auto-save every X minutes**
   - Set interval to 2-5 minutes (recommended)
3. Preferences usually save automatically

### 5.2 Configure Performance Settings

1. In **Preferences**, look for **Performance** or **Editor** settings
2. Options you might want to adjust:
   - **Show FPS in preview** - Helpful for monitoring performance
   - **Update only visible editors** - Can improve performance on slower machines
   - **Maximum FPS** - Usually 60 is fine

### 5.3 Set Up Themes (Optional)

1. In **Preferences**, look for **Appearance** or **Theme**
2. Choose between:
   - **GDevelop Dark** (default, easier on eyes)
   - **GDevelop Light** (bright theme)
   - **Solarized Dark** (alternative dark theme)
3. Select your preference and the theme will update immediately

### 5.4 Language Settings

1. In **Preferences**, find **Language** settings
2. Select your preferred language
3. GDevelop supports many languages
4. Restart GDevelop for the language change to fully take effect

## Step 6: Install Extensions (Optional but Recommended)

GDevelop uses extensions to add functionality. Some useful ones to know about:

### 6.1 Browse Extensions

1. In your project, click on **Functions/Behaviors** or the extension icon
2. Or go to **Project Manager** (left sidebar) and look for **Extensions**
3. Click **Create or search for new extensions**

### 6.2 Recommended Beginner Extensions

Some popular and useful extensions:
- **Platformer Character** - Pre-made platformer movement
- **Top-down Movement** - Movement for top-down games
- **Health (life points)** - Add health systems
- **Draggable Object** - Make objects draggable with mouse
- **Text Entry** - Create text input fields
- **Firebase** - Online features like leaderboards

To install an extension:
1. Search for it in the extension panel
2. Click on it to view details
3. Click **Install in project**

## Troubleshooting

### Problem: GDevelop won't start or shows a blank screen

**Solution**:
1. Make sure you've extracted the program if using portable version
2. Try running as administrator:
   - Right-click GDevelop shortcut or .exe
   - Select **Run as administrator**
3. Check Windows Defender isn't blocking it
4. Reinstall GDevelop
5. Clear the cache:
   - Windows + R, type `%appdata%`
   - Find and delete the `GDevelop` folder
   - Restart GDevelop

### Problem: Preview window doesn't open when clicking Play

**Solution**:
1. Check if a preview window opened but is behind other windows
2. Press `Alt + Tab` to cycle through open windows
3. Try **File** > **Export** > **Web (HTML5)** as an alternative
4. Check your antivirus/firewall isn't blocking the preview server
5. Try a different preview mode from the dropdown next to the Play button

### Problem: Can't add images or resources

**Solution**:
1. Make sure image files are in a supported format (.png, .jpg, .jpeg, .webp)
2. Try copying the image to your project folder first
3. Check file isn't corrupted by opening it in another program
4. Verify you have write permissions to the project folder

### Problem: Interface is too small or too large

**Solution**:
1. Go to **File** > **Preferences**
2. Look for **Zoom level** or **UI Scale**
3. Adjust the slider to make interface larger or smaller
4. Alternatively, use `Ctrl + Mouse Wheel` to zoom in/out in some panels
5. Check your Windows display scaling settings (might affect GDevelop)

### Problem: Performance is slow or laggy

**Solution**:
1. Close unnecessary programs to free up RAM
2. Reduce the number of objects in your scene
3. In Preferences, disable unnecessary visual effects
4. Update your graphics drivers
5. For preview lag, try reducing preview resolution:
   - In scene properties, adjust preview resolution
   - Or use **Network preview** instead of default preview

### Problem: Can't find saved project

**Solution**:
1. Check the folder you selected when creating the project
2. Look in **Recent Projects** on the home screen
3. Use **File** > **Open** to browse for the `.json` file
4. Search your computer for `.json` files
5. Check **Documents\GDevelop Projects** folder

### Problem: Error messages about missing features or objects

**Solution**:
1. Make sure all required extensions are installed
2. Check **Project Manager** > **Extensions**
3. Install any missing extensions the project requires
4. If opening an example, it should automatically install needed extensions

## Understanding GDevelop's Features

### Event System
- Visual programming using conditions and actions
- No coding required, but very powerful
- Works like: "**When** [condition] happens, **then** do [action]"
- Example: When mouse is clicked on Player, then Play a sound

### Objects
- **Sprites** - 2D images with animations
- **Text** - Display text on screen
- **Tiled Sprite** - Repeating patterns (walls, platforms)
- **Particle Emitters** - Visual effects (fire, rain, explosions)
- **Panel Sprite** - UI elements that scale properly
- **Shape Painter** - Draw geometric shapes
- **Video** - Play video files
- And many more...

### Behaviors
- Pre-made functionalities you can add to objects
- Platformer behavior, Physics behavior, etc.
- Save time instead of programming from scratch

### Publishing Options
- **Windows** - .exe executable
- **Linux** - Linux executable
- **macOS** - macOS application
- **Android** - APK file
- **iOS** - Xcode project
- **Web** - HTML5 (can publish to GDevelop Games, itch.io, etc.)
- **Facebook Instant Games**

## Next Steps

Now that GDevelop 5 is installed:

1. **Complete Built-in Tutorials**:
   - Open **Learn** tab from home screen
   - Follow the beginner tutorials
   - Work through example projects

2. **Study Example Games**:
   - From home screen, click **Examples**
   - Open games like "Platformer", "Space Shooter"
   - Study their events to learn techniques

3. **Create Your First Real Project**:
   - Start with a simple game idea
   - Platformer or top-down game are good starters
   - Keep scope small for first project

4. **Watch Video Tutorials**:
   - GDevelop official YouTube channel
   - Community tutorial makers

5. **Join the Community**:
   - GDevelop Forum: https://forum.gdevelop.io/
   - Discord server (linked from website)
   - Reddit: r/gdevelop

## Essential Keyboard Shortcuts

- `Ctrl + S` - Save project
- `Ctrl + Z` - Undo
- `Ctrl + Y` or `Ctrl + Shift + Z` - Redo
- `F5` - Preview game
- `Ctrl + F` - Search in events
- `Ctrl + Space` - Auto-complete in events
- `Delete` - Delete selected object/event
- `Ctrl + C` / `Ctrl + V` - Copy/Paste
- `Ctrl + D` - Duplicate selected object/event

## Additional Resources

- **Official Website**: https://gdevelop.io/
- **Documentation/Wiki**: https://wiki.gdevelop.io/
- **Tutorials**: https://gdevelop.io/page/tutorials
- **Forum**: https://forum.gdevelop.io/
- **YouTube Channel**: GDevelop official channel
- **Discord Community**: Available from website
- **Asset Resources**:
  - https://opengameart.org/ (free game assets)
  - https://kenney.nl/ (free game assets)
  - https://freesound.org/ (free sound effects)

## Free Asset Resources for Students

Since GDevelop is for game creation, you'll need graphics and sounds:

**Graphics:**
- Kenney.nl - Thousands of free game assets
- OpenGameArt.org - Community-created assets
- itch.io - Many free asset packs
- Piskel - Free online sprite editor

**Sounds and Music:**
- Freesound.org - Sound effects
- OpenGameArt.org - Music and sounds
- Incompetech - Royalty-free music
- LMMS - Free music creation software

**Tools:**
- Piskel - Pixel art and sprite editor (online)
- GIMP - Free image editor
- Audacity - Free audio editor

## Tips for Teachers

If you're setting up GDevelop for a classroom:

1. **Portable Version Benefits**:
   - Install to network drive for access on all computers
   - Students can save to their own folders
   - No admin rights needed on student computers

2. **Example Projects**:
   - Create template projects for students to start from
   - Share project folders via network or USB

3. **Extension Pre-installation**:
   - Create a starter project with common extensions already installed
   - Distribute this as the base project for students

4. **Asset Library**:
   - Curate a folder of approved/licensed assets
   - Share on network drive for students to use

5. **Lesson Plans**:
   - GDevelop wiki has educational resources
   - Community forum has teaching sections

## Summary of Installation

✅ Download GDevelop 5 installer or portable version  
✅ Install or extract GDevelop to permanent location  
✅ Launch GDevelop and complete first-time setup  
✅ Create a test project and verify functionality  
✅ Configure auto-save and preferences  
✅ Familiarize yourself with the interface and event system  
✅ Explore example projects and tutorials  
✅ Download free assets for your projects  

---

*Last updated: February 2026 for GDevelop 5*

**Note**: GDevelop is actively developed and frequently updated with new features. Check the official website regularly for updates and new functionality.
