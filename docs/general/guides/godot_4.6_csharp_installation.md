# Installing Godot 4.6 with C# Support on Windows 11

This guide will walk you through installing Godot 4.6 with C# scripting capabilities on Windows 11. C# support in Godot requires the .NET SDK to be installed alongside the Godot engine.

## Prerequisites

Before starting, ensure you have:
- Windows 11 (64-bit)
- Administrator access to your computer
- Stable internet connection
- Approximately 2GB of free disk space

## Step 1: Install .NET SDK

Godot 4.6 with C# requires .NET 8.0 SDK or later.

### 1.1 Download .NET SDK

1. Open your web browser and navigate to: https://dotnet.microsoft.com/download
2. Click on the **.NET 8.0** (or later) download button
3. Under the **SDK** column, click the Windows x64 installer download link
4. The file will be named something like `dotnet-sdk-8.0.xxx-win-x64.exe`

### 1.2 Install .NET SDK

1. Locate the downloaded installer file (usually in your Downloads folder)
2. Double-click the installer to run it
3. If prompted by User Account Control, click **Yes** to allow the installation
4. Follow the installation wizard:
   - Click **Install** to begin
   - Wait for the installation to complete (this may take a few minutes)
   - Click **Close** when finished

### 1.3 Verify .NET Installation

1. Open **Command Prompt** or **PowerShell**:
   - Press `Windows + R`
   - Type `cmd` and press Enter
2. Type the following command and press Enter:
   ```
   dotnet --version
   ```
3. You should see a version number like `8.0.xxx` displayed
4. If you see an error, restart your computer and try again

## Step 2: Download Godot 4.6 (C# Version)

### 2.1 Download the Correct Version

1. Navigate to the official Godot download page: https://godotengine.org/download/windows/
2. **Important**: You need the **.NET version**, not the standard version
3. Look for **Godot Engine - .NET** section
4. Click the download button for **Godot 4.6 .NET** (64-bit)
5. The file will be named something like `Godot_v4.6-stable_mono_win64.zip`

**Note**: The "mono" in the filename refers to C# support (this naming convention comes from Godot's use of the Mono framework, though it now uses .NET).

### 2.2 Extract Godot

1. Locate the downloaded ZIP file in your Downloads folder
2. Right-click the ZIP file and select **Extract All...**
3. Choose a permanent location for Godot. Recommended locations:
   - `C:\Godot\` (create this folder if needed)
   - `C:\Program Files\Godot\`
   - A dedicated folder in your Documents
4. Click **Extract**
5. After extraction, you'll find a file named `Godot_v4.6-stable_mono_win64.exe`

**Important**: Do not run Godot from your Downloads or Temp folders. Always extract it to a permanent location first.

## Step 3: First-Time Setup

### 3.1 Create a Desktop Shortcut (Optional but Recommended)

1. Navigate to the folder where you extracted Godot
2. Right-click on `Godot_v4.6-stable_mono_win64.exe`
3. Select **Send to** > **Desktop (create shortcut)**
4. You can rename the shortcut to something simpler like "Godot 4.6 C#"

### 3.2 Launch Godot for the First Time

1. Double-click the Godot executable (or your desktop shortcut)
2. If Windows Defender SmartScreen appears:
   - Click **More info**
   - Click **Run anyway**
3. The Godot Project Manager window will open

### 3.3 Verify C# Support

1. In the Project Manager, click **New Project**
2. Under **Renderer**, you should see the rendering options
3. In the project creation dialog, look for a checkbox or dropdown that says **Enable C# support** or **.NET**
4. If you see this option, C# is properly configured
5. Click **Cancel** for now (we're just verifying)

## Step 4: Create Your First C# Project

### 4.1 Set Up a Test Project

1. In the Project Manager, click **New Project**
2. Give your project a name (e.g., "CSharpTest")
3. Choose a project path where your project will be saved
4. Select your preferred renderer (Forward+ is recommended for beginners)
5. **Check the box** for **C# Support** or select **.NET** as the scripting language
6. Click **Create & Edit**

### 4.2 Verify C# Scripting Works

1. Once the editor opens, right-click in the FileSystem panel (bottom-left)
2. Select **Create New** > **Script**
3. In the script creation dialog:
   - Template: **Empty**
   - Language: Should show **C#** (if .NET is working correctly)
   - Path/Name: Use the default or type a name like `test.cs`
4. Click **Create**
5. A C# script editor should open with basic template code
6. If you see C# code (with `using Godot;` at the top), everything is working correctly!

## Troubleshooting

### Problem: "The .NET SDK is not installed" error

**Solution**:
1. Verify .NET is installed by running `dotnet --version` in Command Prompt
2. Restart your computer to ensure environment variables are updated
3. If still not working, uninstall and reinstall .NET SDK
4. Make sure you downloaded the SDK, not just the runtime

### Problem: C# option doesn't appear in project creation

**Solution**:
1. You may have downloaded the wrong version of Godot
2. Download the **.NET** or **mono** version, not the standard version
3. Delete the incorrect version and re-download

### Problem: Godot won't run or shows error messages

**Solution**:
1. Make sure you've extracted Godot from the ZIP file
2. Don't run it directly from the ZIP or Downloads folder
3. Check that your antivirus isn't blocking Godot
4. Run Godot as Administrator (right-click > Run as administrator)

### Problem: Scripts won't compile or show MSBuild errors

**Solution**:
1. Close Godot completely
2. Navigate to your project folder
3. Delete the `.godot` folder (hidden folder)
4. Reopen the project in Godot
5. Let Godot rebuild the project files

## Next Steps

Now that Godot 4.6 with C# is installed:

1. **Learn the Interface**: Explore the Godot editor and familiarize yourself with the panels
2. **Follow Tutorials**: Check the official Godot documentation at https://docs.godotengine.org/
3. **C# Documentation**: Review Godot's C# specific docs at https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/
4. **Create Sample Projects**: Start with simple 2D or 3D projects to learn the basics

## Additional Resources

- **Official Godot Website**: https://godotengine.org/
- **Godot Documentation**: https://docs.godotengine.org/
- **C# API Reference**: https://docs.godotengine.org/en/stable/classes/
- **Community Forums**: https://forum.godotengine.org/
- **Discord Community**: Available through the Godot website

## Summary of Installation

✅ Install .NET SDK 8.0 or later  
✅ Download Godot 4.6 .NET version  
✅ Extract Godot to a permanent location  
✅ Launch Godot and verify C# support  
✅ Create a test project with C# enabled  

---

*Last updated: February 2026 for Godot 4.6*
