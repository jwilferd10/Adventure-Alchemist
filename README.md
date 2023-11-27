[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Release](https://img.shields.io/github/release/jwilferd10/Adventure-Alchemist.svg)](https://github.com/jwilferd10/Adventure-Alchemist/releases/latest)

![Adventure Alchemist Logo](assets/images/adventurealchemist.png)

<h1 align="center">
  Unleash Your Creativity With Our Dungeon Generator!
</h1>

:computer: **Live Deployment**: https://jwilferd10.github.io/Adventure-Alchemist/

:computer: **Github Repository**: https://github.com/jwilferd10/Adventure-Alchemist

## :open_file_folder: Table of Contents:
  - [Preview](#camera-preview)
  - [Demo](#movie_camera-demo)
  - [Description](#wave-description)
  - [User Story](#book-user-story)
  - [Resources Used](#floppy_disk-resources-used)
  - [Getting Started](#minidisc-usage)
  - [Contact Information](#e-mail-contributors-and-contact-information)

## :camera: Preview:
<p float="left">
  <img src= "assets/images/DesktopImg.png"/>
  <img src= "assets/images/MobileImg.png"/>
</p>

## :movie_camera: Demo:
![image](assets/images/AADeskGif.gif)
![image](assets/images/AAMobGif.gif)

## :wave: Description: 

### 🔮 Adventure Alchemist: Dungeon Scenario Generator

Adventure Alchemist is a tool designed to simplify and enhance the process of generating captivating dungeon scenarios for tabletop RPGs, including DnD campaigns. Whether you're a seasoned Dungeon Master or a curious player, this application empowers you to effortlessly create, save, and recall unique scenarios based on your preferences.

If you're looking for ways to change things up on your tabletop games, try us out! 

### 🚀 Features:

- Utilizes algorithms to create imaginative and engaging scenarios.
- Considers factors such as dungeon theme, interior/exterior setting, size, monster types and difficulty for a more diverse experience.
- Provides both dungeon masters and players with dynamic and invigorating scenarios.

### 🎯 Modern Approach:
The development of Adventure Alchemist represents a fusion of insights from previous projects and modern JavaScript techniques. Leveraging arrow functions, the codebase is characterized by concise and readable syntax, enhancing both clarity and maintainability.

Adventure Alchemist is organized into ES6 JavaScript modules, ensuring clean separation of concerns and streamlined maintenance. Modules for DOM manipulation, localStorage management, scenario generation, and user interactions contribute to reusability and easy collaboration.

### 🌐 Accessible and Open:
Adventure Alchemist originated as a commission and has been made public for the community to benefit from. The repository encourages exploration and collaboration, with the codebase thoughtfully organized and easily modifiable. Feel free to delve into the code, contribute, and customize it to your needs.

### 💭 Developer Notes:
This application has been a very fun journey, it was immensely entertaining coming up with a variety of scenarios. Most fun was coming up with a framework on how Adventure Alchemist would work, a lot of that development came from back and forth conversations between with the client and I. There's a few more memorable moments I'm taking away from this app, such as troubleshooting and fixing issues with localStorage and adhering to modern techniques by using ES6 modules. 

### 🙏 Thank You!
For your interest in Adventure Alchemist. I hope this tool enriches your RPG experiences and adds a spark of creativity to your campaigns. Take a moment to explore the repository, and don't hesitate to share your feedback or contribute to the project. Happy coding!

## :book: User Story:
**AS A Dungeon Master for a DnD Campaign**
- I WANT to be able to generate random dungeon scenarios quickly and easily
    - SO THAT I can have engaging and varied gameplay experiences without spending a lot of time planning.
- I WANT to have the ability to customize the generated scenarios based on party level, dungeon size, and theme
    - SO THAT I can create scenarios that best fit my campaign and preferences.
- I WANT to be able to save my generated scenarios
    - SO THAT I can easily access them later and reuse them for future gameplay sessions.
- I WANT the app to provide me with detailed descriptions of the generated scenarios, including enemies, loot, and traps
    - SO THAT I can better plan my strategy and tactics in advance.
- I WANT to be able to easily share the generated scenarios with other players in my campaign
    - SO THAT we can collaborate and discuss our approach to the scenarios.
- I WANT to be able to access the generated scenarios offline
    - SO THAT I can use them even when I don't have an internet connection available.

**GIVEN a Dungeon Scenario Generator**
- WHEN I input party level, dungeon size, and theme preferences
  - THEN I click 'Generate'
  - THEN I am presented with a unique and randomized dungeon scenario that fits my preferences
  - THEN I can save the scenario for later use or generate a new one
  
## :floppy_disk: Resources Used:
- HTML
- CSS
- JavaScript
- Bootstrap5

## :minidisc: Usage:
To use Adventure Alchemist:

1. Select your preferenced content to generate
2. Click the 'Generate' button
3. Review the generated scenario details
4. Optionally, click the 'generate' button again to generate a new scenario with the same preferences

Repeat steps 1-4 as desired

### Running Locally
Because Adventure Alchemist is using ES6 Modules, the app WILL NOT function if you use `Open in Browser` (VSCode) 

So to run the app locally, you can use a tool like `http-server`. If you haven't already installed it, you can install it globally using npm:

```bash
npm install -g http-server
```

After installing, navigate to the root directory of Adventure Alchemist and run the following command:

```
http-server -p 3000 --cors --module
```
This will start an HTTP server that serves Adventure Alchemist on port 3000. You can then access the app by opening your web browser and navigating to `http://localhost:3000`.

Please note that the provided command assumes you have `Node.js` and `npm` installed on your system.
  
## :e-mail: Contributors and Contact Information:
- ### [jwilferd10](https://github.com/jwilferd10)
- ### [agwal](agwalvisual@gmail.com)
  - [Digital Portfolio](https://www.escapemotions.com/community/user/Agwal)
