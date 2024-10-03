# Web Developement

This repository contains all the learnings from my web development journey.

Feel free to contribute to this repository for any corrections or improvements

Index of Folders

1. Code0001 - Fundamentals of HTML
2. Code0002 -
3. Code0003 - 
4. Code0004 - 
5. Code0005 - 
6. Code0006 - 

# Index 
   -  [VS Code Essentials](#vs-code-essentials)
      -  [Extensions](#extensions)
      -  [Settings](#settings)
      -  [Shortcuts](#shortcuts)
      -  [Emmet Abrevations](#emmet-abrevations)
   -  [Resources](#resources)
   -  [Markdown Basics](#markdown-basics)
   -  [Git Basics](#git-basics)
   -  [Notes](#notes)


# VS Code Essentials

## Extensions

1. Live Preview - Upgrade on LiveServer
2. GitHub
3. VS code icons
4. Prettier
5. ES7 + React/Redux/React-Native Snippets
6. Thuder Cloud
7. Postman
8. Subway Surfer - To activate this extension use the This code boring ah hell 💀 command from the command palette (Ctrl + Shift + P / ⇧ ⌘ P)

## Settings

1. Mouse Zoom
2. Live view on mobile - Change the live preview Host IP to IPV4 of the local machine, then you can view the website on the mobile

## Shortcuts

1. Integrated Terminals - Ctrl + `
2. Commnad Pallete - Ctrl + Shift + P
3. Settings - Ctrl + ,
4. Alt + Click to get multiple cursors to work with
5. Alt + Shift + Arrow - To replicate a line
6. Ctrl + \ - To duplcate the pagee in two
## Emmet Abrevations

1. lorem<Num> - Gives dummy text to work with


# Resources

1. React Developer Tools - Chrome Extension
2. Web Dev - <a href="https://www.web.dev">Web Dev</a>
3. Google Fonts: <a href="https://fonts.google.com/">Google Fonts</a>
4. CSS Games - <a href="https://daily-dev-tips.com/posts/10-amazing-games-to-learn-css/">Game List</a>
5. MDN Docs - <a href="https://developer.mozilla.org/en-US/">Docs</a>
6. Loupe - Application to visualize JS program runs http://latentflip.com/loupe/
7. HTTP Dumps - To send any kind of http request to test the working of the server <a href=https://httpdump.app>HTTP Dumps</a>
8. 
9. 
10. 



# Markdown Basics

> This is a quote. Quotes are indented and a different colour.

show small bits of code with backticks: `print("hello world")`

- [x] This is a complete item
- [ ] This is an incomplete item

This is a normal Paragraph

To add a piece of code use double tabs

        this is a block for code

To self link within the same document

      [Display Name](#all-small-caps)

# Vim Commands

************* VIM commands ***************


1. shift v ---> starts visual mode for selecting the lines and we can perform operation on that

2. y ---> yank/copy the visual lines

3. p ---> paste the yanked lines

4. esc :u ---> undo

5. esc :start_line_no,end_line_no.y ---> copy the lines from "start_line_no" to "end_line_no"

6. = % ---> indentation

7. esc :se ic ---> set ignore case

8. esc :se nu ---> set line numbers in the file

9. % (i.e; shift 5) ---> takes us to the closing or ending scope of a function/snippet

10. ctrl } ---> takes us to the definition of the tag

11. shift g ---> end of file

12. esc :line_no ---> takes us to the line number in the file

13. esc /keyword ---> search for a keyword in bottom up fashion [OR]  backward search

14. esc ?keyword ---> search for a keyword in top down fashion [OR] forward search

15. esc :q! ---> trashes all changes and quit the file

16. esc :w ---> write the changes to the file

17. esc :wq ---> write the changes to the file and exit the file

18. dd ---> delete single/multiple line(s). 2dd to delete two lines, number can be changed for deleting the number of consecutive lines, like; 3dd.

19. :set relativenumber - sets the numbers in the terminal for the file which exists

20. gg - move cursor to first line

21. #G - move cursor to # line

22. GG move cursor to last line

23. CTRL+f - move cursor Forward full page

24. CTRL+b - move cursor Backwards full pageg - move cursor to first line

# Git Basics

1.  Initializing a Repository:
    To start using Git, you need to initialize a repository in your project's directory:

             git init

2.  Cloning a Repository:
    If you want to work with an existing Git repository, you can clone it to your local machine:

             git clone <repository_url>

3.  Basic Workflow:

Checking the Status:
This shows the status of your changes: modified, untracked, or staged.

      git status

Adding Changes:
This stages your changes for the next commit.

      git add <file(s)>

Committing Changes:
This creates a commit with the changes you staged.

      git commit -m "Your commit message"

4.  Branching:
    Creating a New Branch:

            git branch <branch_name>

Switching to a Branch:

      git checkout <branch_name>
      or
      git switch <branch_name>

Creating and Switching to a New Branch:

      git checkout -b <new_branch_name>
      or
      git switch -c <new_branch_name>

5.  Merging:
    Merge a Branch into the Current Branch:

             git merge <branch_name>

6.  Remote Repositories:

    Adding a Remote Repository:

             git remote add <remote_name> <repository_url>

Fetching Changes from a Remote Repository:

      git fetch <remote_name>

Pulling Changes from a Remote Repository:

      git pull <remote_name> <branch_name>

Pushing Changes to a Remote Repository:

      git push <remote_name> <branch_name>

7.  Inspecting Changes:
    Viewing Commit History:

             git log

    Viewing the Difference in Files:

          git diff

8.  Undoing Changes:
    Discard Changes in Working Directory:

             git checkout -- <file(s)>

Unstage Changes:

      git reset <file(s)>

Undo the Last Commit (while keeping changes):

      git reset HEAD^

Undo the Last Commit and Discard Changes:

      git reset --hard HEAD^

These are just the basics to get you started. Git has a rich set of features, and as you become more familiar with it, you can explore more advanced concepts like rebasing, cherry-picking, and interactive staging.

Git offers several advanced features and topics beyond the basic commands. Here are some advanced topics in Git:

1. **Rebasing:**

   - **Description:** Rebasing is the process of moving or combining a sequence of commits to a new base commit.
   - **Command:** `git rebase`

2. **Cherry-Picking:**

   - **Description:** Cherry-picking allows you to apply a specific commit from one branch to another.
   - **Command:** `git cherry-pick`

3. **Interactive Rebase:**

   - **Description:** Interactive rebase allows you to modify, delete, or squash commits during the rebase process.
   - **Command:** `git rebase -i`

4. **Submodules:**

   - **Description:** Submodules are repositories embedded within a parent repository. They allow you to include other repositories as a subdirectory.
   - **Commands:** `git submodule add`, `git submodule init`, `git submodule update`

5. **Stashing:**

   - **Description:** Stashing allows you to save changes that are not ready to be committed, so you can switch to another branch or apply the changes later.
   - **Commands:** `git stash`, `git stash apply`

6. **Git Hooks:**

   - **Description:** Git hooks are scripts that run automatically at certain points in the Git workflow, allowing you to customize and automate actions.
   - **Location:** `.git/hooks/`

7. **Reflog:**

   - **Description:** Reflog is a reference log that stores a chronological history of operations in your local repository.
   - **Command:** `git reflog`

8. **Git Worktrees:**

   - **Description:** Worktrees allow you to work on multiple branches simultaneously without switching between them in the same working directory.
   - **Command:** `git worktree`

9. **Bisect:**

   - **Description:** Bisect is a binary search tool that helps you find the commit that introduced a bug by systematically narrowing down the problematic commit.
   - **Commands:** `git bisect start`, `git bisect good`, `git bisect bad`

10. **Git Attributes:**

- **Description:** Git attributes allow you to attach metadata to files, such as identifying specific merge drivers, language settings, etc.
- **File:** `.gitattributes`

These advanced Git topics provide powerful tools for managing complex workflows, collaborating with others, and maintaining a clean and organized version history for your projects.

<img src="./Code/Src/Git Poster.png">

# Notes

## Index of Content

1. [Web Development Overview](#web-development-overview)
2. [SEO and Core Web Vitals](#seo-and-core-web-vitals)
   - [SEO overview](#)
   - [Largest Contentful Paint (LCP)](#)
   - [Cumulative Layout Shift (CLS)](#)
   - [First Input Delay (FID)](#)
   - [Total Blocking Time (TBT)]()
   - [Speed Index](#speed-index)
3. [Progressive Web Apps (PWA)](#)
4. [HTML Basics](#html-basics)
   - [HTML Document Structure](#)
   - [Importance of Meta Tag in HTML](#)
   - [Images, Lists and tables](#)
   - [Forms in HTML](#)
      -  What is the use of name attribute in input label?
      -  What is the use of for attribute in label tag?
   -  [Inline and Block Elements in HTML](#)
      -  Inline Element
      -  Block Element
   -  [Classes and ID un HTML](#)
   -  [Video, Audio and Media](#)
      -  Video
      -  Audio
      -  SVG
         -  Issue in SVG rendering
      -  Iframe
   -  Semantic HTML Tags
5. [Cascading Style Sheet](#cascading-style-sheet)
6. [Javascript](#javascript)
   -  [How JS code is executed](#how-js-code-is-executed)
   -  [Execution Context](#execution-context)
   -  [Call Stack  ](#call-stack)
   -  [Hoisting in JS](#hoisting-in-js)
   -  [Working of function in JS](#working-of-functions-in-js)
   -  [Global Objects in JS](#global-object-in-js)
   -  [Undefined VS Not Defined](#undefined-vs-not-defined)
   -  [Scope chand and Lexical Environment](#scope-chain-and-lexical-environment)  
   -  [Are Let and Const Declarartion Hoisted](#are-let-and-const-declarations-hoisted)  
   -  [Syntax Error, Reference Error and Type Error](#)  
   -  [](#)  
7. [Networks for Web Dev](#networks-for-web-dev)
   -  [Overview of Network Essentials](#)
   -  [HTTP/HTTPS](#httphttps)
      -  [HTTP](#http-hypertext-transfer-protocol)
      -  [HTTPS](#https-hypertext-transfer-protocol-secure)
      -  [HTTP Parameters](#http-parameters)
      -  [HTTP Status Code](#http-status-codes)
      -  [HTTPS](#HTTPS)
      -  [Certificate Authority](#certificate-authority)
   -  [HTTP/2 and HTTP/3](#http2-and-http3)
      -  [HTTP/2](#)
      -  [HTTP/3](#)
      -  [What are ports in Networking](#)
      -  [Domain Name Server](#)
      -  [How is a new website pushed to the DNS](#how-is-a-new-website-pushed-to-the-dns)
      -  [FQDN](#fqdn)
      -  [TCP/IP](#tcpip)
         -  [Link Layer](#)
         -  [Internet Layer](#)
         -  [Transport Layer](#)
         -  [Application Layer](#)
      -  [RESTful APIs](#)
      -  [Websockets](#)
      -  [CORS - Cross Origin Resource Sharing](#)
      -  [Cookies and Session](#)
      -  [](#)
      -  [](#)
      -  [](#)
      -  [](#)
      -  [](#)
      -  [](#)
      -  [](#)
      -  [](#)
   -  [](#)
   -  [](#)
   -  [](#)
8. [Amazon Web Sevices](#amazon-web-services)



To be added

   -  Javascript
      -  Variables and Data Types
      -  Operators
      -  Control Flow (if, else, switch)
      -  Looping (for, while, do-while)
      -  Functions and Arrow Functions
      -  Arrays and Objects
      -  DOM Manipulation
      -  Asynchronous JavaScript (Callbacks, Promises, async/await)
      -  Closures and Scope
      -  Regex 
   -  React JS
   -  Networks and how the internet works
   -  MySQL
   -  MongoDB
   -  CSS Frameworks
      -  BootStrap
      -  Tailwind
   -  API Calls
   -  


## **Web Development Overview:**

1. **Client-Side (Front-End) Development:**

   - HTML for structure.
   - CSS for styling.
   - JavaScript for interactivity.
   - Front-end frameworks/libraries like React, Angular, or Vue.js.

2. **Server-Side (Back-End) Development:**

   - Server-side languages like Node.js, Python, PHP, etc.
   - Servers process logic and interact with databases.
   - Databases (e.g., MySQL, MongoDB) for data storage.
   - Back-end frameworks (e.g., Express, Django) for development efficiency.

3. **Communication (Client-Server Interaction):**

   - HTTP/HTTPS protocols for data exchange.
   - APIs for communication between front-end and back-end.

4. **Deployment and Hosting:**

   - Web hosting services (AWS, Heroku, Netlify).
   - DNS for translating domain names to IP addresses.

5. **Version Control:**

   - Git for tracking code changes and collaboration.

6. **Security:**

   - SSL/TLS certificates for encrypted connections.
   - Authentication and authorization for data security.

7. **Testing and Debugging:**

   - Unit testing and integration testing.
   - Debugging tools for identifying and fixing bugs.

8. **Continuous Integration and Continuous Deployment (CI/CD):**
   - CI/CD pipelines for automated development, testing, and deployment.

# SEO and Core Web Vitals 

## SEO (Search Engine Optimization)

SEO stands for **Search Engine Optimization**. It is a set of practices and techniques aimed at optimizing a website to improve its visibility and ranking in search engine results pages (SERPs). The ultimate goal of SEO is to drive organic (non-paid) traffic to a website.

### Key Components of SEO

1. **On-Page SEO:** Involves optimizing individual pages of a website for specific keywords. It includes optimizing content, meta tags, images, and other elements to make them more search engine-friendly.

2. **Off-Page SEO:** Focuses on improving the website's authority and credibility through activities such as link building, social media marketing, and influencer outreach.

3. **Technical SEO:** Involves optimizing the technical aspects of a website, such as site speed, mobile-friendliness, and ensuring proper indexing by search engines.

4. **Content Quality:** Creating high-quality, relevant, and valuable content is crucial for SEO. Search engines prioritize content that satisfies user intent and provides valuable information.

5. **Keyword Research:** Identifying and targeting the right keywords that users are likely to use when searching for information related to a website's content.

6. **User Experience (UX):** A positive user experience, including easy navigation and mobile responsiveness, is important for both users and search engines.

SEO is an ongoing process, and it requires continuous effort and adaptation to changes in search engine algorithms. Websites that effectively implement SEO practices are more likely to attract organic traffic and improve their online visibility.

## Core Web Vitals

Core Web Vitals are a set of specific factors that Google considers important in determining the overall user experience of a web page. These metrics are designed to assess the speed, responsiveness, and visual stability of a webpage. Core Web Vitals are part of Google's broader effort to prioritize user experience as a ranking factor in search results.

As of my last knowledge update in January 2022, the Core Web Vitals consist of three specific metrics:

1. **Largest Contentful Paint (LCP):** This measures the loading performance of a page. It looks at the time it takes for the largest content element (e.g., an image or a block of text) to become visible to the user.

2. **First Input Delay (FID):** FID measures the responsiveness of a page. It quantifies the delay between a user's first interaction with the page (such as clicking a button) and the browser's response to that interaction.

3. **Cumulative Layout Shift (CLS):** CLS measures the visual stability of a page. It quantifies how much the content of a page shifts during loading, causing unexpected layout changes. A low CLS score indicates a more stable and user-friendly experience.

Web developers and site owners are encouraged to monitor and optimize these Core Web Vitals to improve the overall user experience of their websites. Google uses these metrics as part of its ranking algorithm, and pages that provide a better user experience may receive a boost in search engine rankings. Keep in mind that the specifics of Google's algorithms and recommendations may evolve, so it's a good idea to check for the latest information from Google's official documentation or announcements.

## Cumulative Layout Shift (CLS)

Cumulative Layout Shift (CLS) is a Core Web Vitals metric that measures the visual stability of a web page. It evaluates how much the content of a page shifts during loading, causing unexpected layout changes.

- **Objective:** CLS aims to assess the stability of a page's layout, ensuring that users do not experience abrupt and disruptive shifts in content while interacting with the website.

- **Calculation:** CLS is calculated by multiplying the impact fraction (the proportion of the viewport affected by the shift) by the distance fraction (how far the elements shifted). The cumulative score is then obtained by summing up these values over the entire lifespan of the page load.

- **Key Points:**

  - A low CLS score is desirable, indicating a more stable and user-friendly experience.
  - Common causes of layout shifts include images or iframes without specified dimensions, dynamic content loading, and late-loading web fonts.

- **Importance:** Visual stability is crucial for a positive user experience, as unexpected layout shifts can lead to accidental clicks, frustration, and a generally unpleasant browsing experience.

- **Optimization Tips:**
  - Specify dimensions for images and iframes to reserve the required space.
  - Ensure that elements do not change size or position unexpectedly during loading.
  - Prioritize the loading of critical elements to minimize shifts.

Web developers and site owners can use CLS as a key metric for optimizing their websites, improving user satisfaction by providing a visually stable browsing experience.

## Largest Contentful Paint (LCP)

Largest Contentful Paint (LCP) is a Core Web Vitals metric that measures the loading performance of a web page. It specifically evaluates the time it takes for the largest content element within the user's viewport to become visible.

- **Objective:** LCP aims to assess how quickly users can see and interact with the primary content of a page. It provides insights into the perceived loading speed from the user's perspective.

- **Key Points:**

  - The largest content element can be an image, a block of text, or another significant element on the page.
  - LCP is considered good if it occurs within the first 2.5 seconds of the page starting to load.
  - Factors influencing LCP include server response times, rendering of images and other media, and overall page structure.

- **Importance:** Google emphasizes a fast and visually complete loading experience because it contributes to a positive user experience. Pages with a quick LCP are more likely to engage and retain users.

- **Optimization Tips:**
  - Optimize and prioritize the loading of the largest content element.
  - Compress and appropriately format images to reduce their loading time.
  - Use efficient coding practices and optimize server response times.

Web developers and site owners can monitor LCP as part of their efforts to enhance the overall performance and user satisfaction of their websites.

## First Input Delay (FID)

First Input Delay (FID) is a Core Web Vitals metric that measures the responsiveness of a web page. It quantifies the delay between a user's first interaction with the page, such as clicking a button or a link, and the browser's response to that interaction.

- **Objective:** FID focuses on evaluating how quickly a page becomes interactive and responsive to user input. It provides insights into the user-perceived responsiveness of a website.

- **Calculation:** FID is measured in milliseconds and represents the time it takes for the browser to respond to the user's first input. A lower FID indicates a more responsive page.

- **Key Points:**

  - FID is crucial for user satisfaction, especially on interactive and dynamic websites.
  - A good FID is typically below 100 milliseconds.

- **Importance:** Responsive pages enhance the user experience by ensuring that interactions feel instantaneous and smooth, leading to higher user engagement and satisfaction.

- **Optimization Tips:**
  - Minimize and optimize JavaScript execution to reduce delays in responding to user input.
  - Use browser cache and prefetching to speed up the loading of critical resources.
  - Optimize server response times to ensure quick delivery of content.

Web developers and site owners can focus on optimizing FID to enhance the overall user experience and make their websites more user-friendly and interactive.

## Total Blocking Time (TBT)

Total Blocking Time (TBT) is a web performance metric that measures the total duration during which a web page is unresponsive to user input, particularly during the initial page load. It is a part of the larger set of web vitals used to assess the user experience on a website.

- **Objective:** TBT focuses on evaluating how much time users spend waiting for a page to become interactive and responsive after the initial rendering. It helps quantify the delays users might experience before they can interact with a page.

- **Calculation:** TBT is measured in milliseconds and is the sum of all the time periods during which the main thread is blocked and the page is unresponsive to user input.

- **Key Points:**

  - TBT is crucial for assessing the user-perceived performance of a website.
  - A lower TBT indicates a more responsive and user-friendly page.

- **Importance:** TBT is especially important for websites with complex layouts, heavy scripts, or multiple resources that can cause delays in rendering and interactivity.

- **Optimization Tips:**
  - Optimize and defer non-essential JavaScript to minimize main thread blocking.
  - Prioritize critical resources to ensure faster loading of essential elements.
  - Use lazy loading for images and other non-critical resources to improve initial page load times.

Web developers and site owners can focus on optimizing Total Blocking Time to enhance the overall user experience and make their websites more responsive and engaging.

## Speed Index

Speed Index is a web performance metric that quantifies how quickly the visual content of a web page is displayed during the loading process. It is a crucial indicator of the perceived loading speed of a page from the user's perspective.

- **Objective:** Speed Index aims to measure how fast a user can visually perceive the content of a web page. It considers the progressive rendering of a page's elements and provides a score that reflects the visual loading experience.

- **Calculation:** Speed Index is measured in milliseconds and is calculated by evaluating how quickly the visible area of the page is filled with content during the loading process. Lower Speed Index values indicate faster perceived loading times.

- **Key Points:**

  - Speed Index is an important metric for assessing the user experience, especially for first-time visitors.
  - A lower Speed Index implies a quicker and more visually satisfying loading experience.

- **Importance:** User satisfaction is closely tied to the perceived speed of a website. A fast-loading page with a low Speed Index contributes to a positive user experience, potentially leading to higher engagement and retention.

- **Optimization Tips:**
  - Optimize and prioritize the loading of critical resources for the visible area of the page.
  - Minimize render-blocking resources that may delay the visual rendering process.
  - Utilize techniques such as lazy loading for images and asynchronous loading of non-essential scripts.

Web developers and site owners can focus on optimizing the Speed Index to enhance the perceived loading speed of their websites and improve overall user satisfaction.


## LightHouse
Lighthouse is an open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO, and more. The SEO (Search Engine Optimization) audit in Lighthouse focuses on aspects that can impact a website's visibility and ranking on search engines. Here are some of the key SEO checks performed by Lighthouse:

1. **Meta Tags:**
   - Lighthouse checks if essential meta tags are present, such as `<title>` and `<meta name="description">`. These tags provide information about the content of the page to search engines.

2. **Viewport Meta Tag:**
   - Ensures that the viewport is properly configured. This is important for responsive web design and can affect how a page appears on different devices.

3. **Document Title:**
   - Verifies that each page has a unique and descriptive `<title>` tag. The title tag is crucial for search engine results.

4. **Meta Description:**
   - Checks if meta descriptions are provided and are within optimal length. Meta descriptions can influence click-through rates in search results.

5. **Headings:**
   - Examines the usage of heading elements (`<h1>`, `<h2>`, etc.) to ensure a proper hierarchy. Headings help search engines understand the structure and content of a page.

6. **HTTP Status Code:**
   - Verifies that the page returns a valid HTTP status code (e.g., 200 OK) and not an error status (e.g., 404 Not Found).

7. **Robots.txt:**
   - Checks for the presence and correctness of the `robots.txt` file, which instructs search engine crawlers on how to interact with the site.

8. **Sitemap:**
   - Ensures that a valid XML sitemap is provided. Sitemaps help search engines index the content of a website more effectively.

9. **Image Alt Text:**
   - Checks if images have descriptive alt text. Alt text is important for accessibility and can also contribute to SEO.

10. **Mobile Friendliness:**
    - Assesses how mobile-friendly the page is. Mobile-friendly pages are favored by search engines, especially for users on mobile devices.

11. **Page Speed:**
    - Evaluates the performance of the page, including load times. Faster-loading pages are often ranked higher in search results.

To use Lighthouse for SEO auditing, you can either use the Lighthouse Chrome extension, run it from the Chrome DevTools, or use the Lighthouse CLI (Command Line Interface). Running Lighthouse on your website can provide insights into areas that may need improvement for better search engine visibility. Keep in mind that SEO is a multifaceted discipline, and Lighthouse is just one tool in the SEO toolkit.

## web.dev

[web.dev](https://web.dev/) is a website and online platform created by Google that serves as a comprehensive resource for web developers, designers, and site owners. It provides a wealth of information, tools, and best practices related to web development, performance, and user experience.

### Key Features:

1. **Learning Resources:**

   - web.dev offers tutorials, guides, and documentation on various web development topics, including HTML, CSS, JavaScript, and modern web technologies.

2. **Performance Analysis:**

   - The platform includes tools for analyzing and optimizing the performance of websites. This includes insights into metrics like Lighthouse scores, Core Web Vitals, and other performance-related benchmarks.

3. **Best Practices:**

   - web.dev provides best practices and guidelines for creating fast, secure, and accessible web experiences. It covers topics such as SEO, progressive web apps (PWAs), and responsive design.

4. **Testing Tools:**

   - Developers can use web.dev to test their websites using tools like Lighthouse, an open-source, automated tool for improving web page quality.

5. **Updates and News:**

   - The platform shares updates and news related to web technologies, browser features, and industry trends, keeping developers informed about the latest developments.

6. **Community and Events:**
   - web.dev fosters a sense of community by providing forums for discussion and highlighting events related to web development and technology.

## Purpose

The primary purpose of web.dev is to empower web developers with the knowledge and tools needed to create high-quality, performant, and accessible websites. It aligns with Google's broader initiatives to improve the overall web ecosystem and user experience.

Developers can leverage web.dev to stay informed about best practices, test and optimize their websites, and connect with a community of like-minded professionals.

# Progressive Web Apps (PWAs)

Progressive Web Apps (PWAs) are a type of web application that leverages modern web technologies to provide a user experience similar to that of native mobile apps. PWAs are designed to work seamlessly across different devices and platforms, offering features such as offline functionality, push notifications, and smooth performance.

## Key Characteristics of PWAs:

1. **Responsive Design:**

   - PWAs are built with responsive design principles, ensuring that they adapt and provide an optimal user experience across various devices and screen sizes.

2. **Progressive Enhancement:**

   - PWAs are designed to progressively enhance their functionality based on the capabilities of the user's device and browser, allowing for a consistent experience across different environments.

3. **Offline Functionality:**

   - One of the significant features of PWAs is their ability to work offline or in low-network conditions. They achieve this through techniques like caching resources, enabling users to access content even without a reliable internet connection.

4. **App-Like Experience:**

   - PWAs aim to provide an app-like experience, including smooth animations, fluid interactions, and immersive full-screen modes, giving users a native app feel within the web browser.

5. **Installable:**

   - Users can install PWAs on their devices, creating an icon on the home screen or app drawer. This allows for quick access and a more integrated experience, blurring the lines between web and native apps.

6. **Push Notifications:**

   - PWAs can send push notifications to users, keeping them engaged with updates and relevant information, even when the PWA is not actively open in the browser.

7. **Security:**

   - PWAs are served over HTTPS to ensure a secure connection, protecting user data and maintaining the integrity of the application.

8. **Discoverability:**
   - PWAs are discoverable through search engines, making it easier for users to find and access the app through traditional web search.

## Benefits:

- **Cross-Platform Compatibility:**

  - PWAs work across different platforms, reducing the need for separate development for iOS and Android.

- **Cost-Effective Development:**

  - Developers can create a single codebase for a PWA, potentially reducing development and maintenance costs compared to building separate native apps.

- **Improved User Engagement:**
  - The enhanced user experience, offline capabilities, and push notifications contribute to increased user engagement and retention.

PWAs offer a compelling approach to web development, combining the reach of the web with the features traditionally associated with native applications.

# HTML Basics

## HTML Document Structure

- An HTML document has a hierarchical structure composed of elements.
- It starts with a declaration to specify the HTML version.
- The document is enclosed in `<html>` tags, and within that, you have `<head>` and `<body>` sections.

      <!DOCTYPE html>
      <html>
      <head>
         <!-- Meta information, title, links to stylesheets, etc. -->
      </head>
      <body>
         <!-- Content of the web page goes here -->
      </body>
      </html>

### Head Section

- The `<head>` section contains metadata about the document, like the title, character set, and links to stylesheets and scripts.

      <head>
      <title>Your Page Title</title>
      <!-- Other metadata, stylesheets, scripts, etc. -->
      </head>

### Body Section

- The `<body>` section contains the actual content of the web page, such as text, images, links, and other elements.

      <body>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
      <!-- Other content goes here -->
      </body>

### HTML Elements

- Elements are the building blocks of HTML and are represented by tags.
- Tags enclose content and usually come in pairs - an opening tag and a closing tag.
- Common elements include headings, paragraphs, lists, links, and images.

### Attributes

- HTML tags can have attributes, providing additional information about the element.
- Attributes are added to the opening tag and typically come in name/value pairs.

      <a href="https://www.example.com" target="_blank">Visit Example.com</a>
      <img src="image.jpg" alt="Description of the image">

### Comments

- Comments in HTML are created using specific syntax and are not visible on the web page.
- They are useful for adding notes or explanation

      <!-- This is a comment -->

**Paired Tags:**

- These tags come in pairs, with an opening tag and a closing tag.
- The opening tag marks the beginning of an element, and the closing tag marks the end.
- Content is placed between the opening and closing tags.

Example

      <p>This is a paragraph.</p>
      <div>This is a division.</div>

**Unpaired Tags:**

- Also known as self-closing or void tags.
- These tags don't have a separate closing tag; instead, they self-close.
- They are used for elements that do not contain content or do not have a meaningful closing tag.

Example

      <img src="image.jpg" alt="An image">
      <br>
      <hr>

## Importance of `<meta>` Tag in HTML

### Character Set Declaration

- `<meta charset="UTF-8">`: Declares the character set, ensuring proper interpretation of characters by the browser.

### Viewport Configuration

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Sets the viewport for responsive web design, controlling content width and scaling on different devices.

### Page Description and Keywords

- `<meta name="description" content="Brief description">`: Provides a brief description for search engines.
- `<meta name="keywords" content="keyword1, keyword2">`: Specifies relevant keywords for search engine optimization.

### Authorship Information

- `<meta name="author" content="Author Name">`: Includes information about the author of the document.

### Viewport and Mobile Compatibility

- Crucial for proper display on mobile devices, adapting the page layout to different screen sizes.

### HTTP Equiv Attribute for Browser Compatibility

- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Controls browser behavior, enhancing compatibility.

In summary, the `<meta>` tag is vital for providing crucial information about the HTML document, enhancing accessibility, search engine optimization, and overall user experience.

## Images, Lists and tables

### Images

It is recommended to fix the height or width of a image which is defined to prevent CLS

      <img src="image.jpg" alt="Description of the image">

      <!-- Attributes: -->
      <!--
         - src: Specifies the path to the image file.
         - alt: Provides alternative text for screen readers and in case the image cannot be displayed.
         - width: Specifies the width of the image in pixels or as a percentage.
         - height: Specifies the height of the image in pixels or as a percentage.
         - loading: Indicates how the browser should load the image ("eager" or "lazy").
         - decoding: Specifies how the image should be decoded ("sync" or "async").
         - crossorigin: Defines the CORS (Cross-Origin Resource Sharing) setting for the image.
         - usemap: Specifies a client-side image map to be used with the image.
         - ismap: Indicates that the image is part of a server-side image map.
         - referrerpolicy: Defines the referrer policy for the image.
         - style: Specifies inline CSS styles for the image.
         - class: Specifies one or more class names for the image for styling purposes.
         - id: Provides a unique identifier for the image.
         - title: Adds a title or advisory information for the image (displayed as a tooltip).
      -->

      <!-- Example with Attributes -->
      <img src="example.jpg" alt="An example image" width="300" height="200" style="border: 1px solid black;" class="image" id="exampleImage" title="Example Image">

      <!-- Self-Closing Tag -->
      <img src="logo.png" alt="Logo">

      <!-- Note: The 'alt' attribute is important for accessibility and SEO. -->

Explanation of Commonly Used Attributes for `<img>` Tag:

- **src (Source):**
  - Specifies the path to the image file.

- **alt (Alternative Text):**
  - Provides alternative text for screen readers and in case the image cannot be displayed.

- **width and height:**
  - Specifies the dimensions of the image in pixels or as a percentage.

- **loading:**
  - Indicates how the browser should load the image ("eager" or "lazy").

- **style:**
  - Specifies inline CSS styles for the image.

- **class and id:**
  - Used for applying styles or scripting to the image.

- **title:**
  - Adds a title or advisory information for the image (displayed as a tooltip).

The `img` tag is self-closing, meaning it doesn't require a closing tag. It's used to embed images in HTML documents, enhancing visual content and providing information for users with varying abilities.

### Lists

      <!-- Unordered List -->
      <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      </ul>

      <!-- Ordered List -->
      <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      </ol>

      <!-- Description List -->
      <dl>
      <dt>Term 1</dt>
      <dd>Description 1</dd>
      <dt>Term 2</dt>
      <dd>Description 2</dd>
      </dl>

## Tables

HTML tables are used to organize and display data in rows and columns. They are constructed using the `<table>` element, and various other elements are employed to define the structure and content of the table.

## Basic Table Structure:

```html
<table>
  <thead> <!-- Table Header -->
    <tr> <!-- Table Row -->
      <th>Header 1</th> <!-- Table Header Cell -->
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody> <!-- Table Body -->
    <tr>
      <td>Row 1, Cell 1</td> <!-- Table Data Cell -->
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
  <tfoot> <!-- Table Footer -->
    <tr>
      <td colspan="2">Footer Content</td> <!-- colspan spans multiple columns -->
    </tr>
  </tfoot>
</table>
```


## Key Table Elements:

- `<table>`: The container element for the entire table.
- `<thead>`, `<tbody>`, `<tfoot>`: Sections of the table (header, body, footer).
- `<tr>`: Represents a table row.
- `<th>`: Defines a table header cell.
- `<td>`: Represents a table data cell.

## Additional Attributes:

- **colspan and rowspan:**
  - `colspan`: Specifies the number of columns a cell should span.
  - `rowspan`: Specifies the number of rows a cell should span.

- **border:**
  - Specifies the width of the border around the table and its cells (not recommended; use CSS for styling).

- **align and valign:**
  - `align`: Aligns the content horizontally (deprecated, use CSS).
  - `valign`: Aligns the content vertically (deprecated, use CSS).


## Forms in HTML

HTML forms provide a way for users to input data that can be sent to a server for processing. They are created using the `<form>` element and consist of various form controls, such as text fields, checkboxes, radio buttons, and buttons.

## Basic Form Structure:
```markdown
# Forms in HTML

HTML forms provide a way for users to input data that can be sent to a server for processing. They are created using the `<form>` element and consist of various form controls, such as text fields, checkboxes, radio buttons, and buttons.

## Basic Form Structure:

```html
<form action="/submit" method="post">
  <!-- Form Controls go here -->
</form>
```

- **`action`:**
  - Specifies the URL to which the form data is sent upon submission.

- **`method`:**
  - Defines the HTTP method for sending form data (usually "get" or "post").

## Common Form Controls:

1. **Text Input:**
   ```html
   <input type="text" name="username" placeholder="Enter your username">
   ```

2. **Password Input:**
   ```html
   <input type="password" name="password" placeholder="Enter your password">
   ```

3. **Checkbox:**
   ```html
   <input type="checkbox" name="subscribe" id="subscribe" checked>
   <label for="subscribe">Subscribe to newsletter</label>
   ```

4. **Radio Buttons:**
   ```html
   <input type="radio" name="gender" value="male" checked>
   <input type="radio" name="gender" value="female">
   ```

5. **Dropdown List (Select):**
   ```html
   <select name="country">
     <option value="us">United States</option>
     <option value="uk">United Kingdom</option>
     <option value="ca">Canada</option>
   </select>
   ```

6. **Textarea:**
   ```html
   <textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
   ```

7. **Submit Button:**
   ```html
   <input type="submit" value="Submit">
   ```

8. **Reset Button:**
   ```html
   <input type="reset" value="Reset">
   ```

## Form Attributes:

- **`required`:**
  - Specifies that a form control must be filled out before submitting.

- **`disabled`:**
  - Disables a form control, preventing user interaction.

## Styling Forms:

Forms can be styled using CSS to improve their visual appearance and user experience.

## Example Form:

```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="checkbox" id="subscribe" name="subscribe" checked>
  <label for="subscribe">Subscribe to newsletter</label>

  <input type="submit" value="Submit">
</form>
```
HTML forms are essential for user interaction on websites, allowing users to submit data and interact with web applications. They are a fundamental part of building interactive and dynamic web pages.

### What is the use of for attribute in label tag?
The for attribute in the HTML `<label>` tag is used to establish a connection between the label and a specific form element. By associating the for attribute with the id attribute of a form element, it enables users to interact with the form element by clicking on the label. This association enhances accessibility, aiding users of assistive technologies and improving the overall user experience by providing a clear link between labels and their corresponding form controls.

### What is the use of name attribute in input label?

The `name` attribute in the HTML `<input>` tag is used to identify form controls when the form is submitted. It provides a key-value pair, where the `name` attribute serves as the key, and the user-inputted or predefined value of the form control serves as the value. This is crucial for server-side processing of form data, allowing server scripts to identify and handle each form control individually. Additionally, the `name` attribute is used for various purposes, including referencing form elements in JavaScript, allowing form controls to be part of a query string in URLs (e.g., in GET requests), and facilitating the organization of data submitted through forms

## Inline and Block Elements in HTML

In HTML, elements can be categorized as either inline or block-level based on how they behave in terms of layout.

### Block-Level Elements:

- **Definition:**
  - Block-level elements create a "block" on the page, taking up the full width available and starting on a new line.
  
- **Examples:**
  - `<div>`
  - `<p>`
  - `<h1>` to `<h6>`
  - `<ul>`, `<ol>`, `<li>`
  - `<table>`
  - `<form>`
  - `<header>`, `<footer>`, `<section>`, `<article>`

- **Behavior:**
  - They typically start on a new line and stretch the full width of their container.
  - They create a distinct "block" of content.

### Inline Elements:

- **Definition:**
  - Inline elements flow within the content and do not start on a new line. They only take up as much width as necessary.

- **Examples:**
  - `<span>`
  - `<a>`
  - `<strong>`, `<em>`
  - `<img>`
  - `<abbr>`, `<cite>`, `<code>`

- **Behavior:**
  - They do not start on a new line; they flow within the content.
  - They only take up as much width as necessary.

### Differentiating Factors:

- **Layout:**
  - Block-level elements create a new block and typically start on a new line, stretching the full width.
  - Inline elements flow within the content, not creating new blocks, and only take up as much width as necessary.

- **Nesting:**
  - Block-level elements can contain other block-level and inline elements.
  - Inline elements should be nested within block-level elements.

- **Examples:**
  - Block-level: `<div>`, `<p>`, `<h1>`
  - Inline: `<span>`, `<a>`, `<strong>`

## Classes and ID in HTML

In HTML, `class` and `id` are attributes used to apply styles and identify elements for scripting and styling purposes.

### Class Attribute:

- **Purpose:**
  - The `class` attribute is used to define a class for one or more HTML elements.
  - Classes are primarily used for styling multiple elements with the same styles or for applying specific styles to a group of elements.

- **Syntax:**
  ```html
  <element class="classname">
  ```

- **Example:**
  ```html
  <p class="highlight">This is a highlighted paragraph.</p>
  ```

### ID Attribute:

- **Purpose:**
  - The `id` attribute is used to uniquely identify a single HTML element on a page.
  - IDs are often used for scripting purposes or when applying styles that should only affect a specific element.

- **Syntax:**
  ```html
  <element id="uniqueID">
  ```

- **Example:**
  ```html
  <div id="header">This is the header section.</div>
  ```

### Key Differences:

- **Uniqueness:**
  - Class names can be used for multiple elements, allowing a group of elements to share the same styling.
  - ID names must be unique within a page; each ID should only be applied to a single element.

- **Styling:**
  - Styles for a class can be defined in CSS and applied to all elements with that class.
  - Styles for an ID can also be defined in CSS but are typically used for unique styling or scripting purposes.

- **Application:**
  - Classes are versatile and can be applied to multiple elements, while IDs are meant for unique identification of a specific element.

### Example Usage:

```html
<style>
  .highlight {
    color: red;
    font-weight: bold;
  }

  #header {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
  }
</style>

<p class="highlight">This is a highlighted paragraph.</p>
<div id="header">This is the header section.</div>
```

In this example, the `highlight` class applies styles to multiple elements, while the `header` ID applies unique styles to a specific element.

### Key Points

ID tag in HTML can be used to guide to a specific point in the page in the URL

      <PageURL>#<id>
      https://en.wikipedia.org/wiki/Dark_Archives#Aesthetic_and_philosophy
      // This will open the exact id in the entire page

It is possible to assign multiple classes to a tag. To do this give space while defining the class

      <div class="name hello"></div>
      Here the div tag has two classes name and hello

## Video, Audio and Media 

## Video

The `<video>` tag is used to embed video files in an HTML document. It supports multiple attributes to control the video playback.

Example usage:

      <video src="video.mp4" controls></video>

Attributes for `<video>` Tag

   -  src: Specifies the path to the video file.
   -  controls: Adds video controls, like play, pause, and volume.
   -  autoplay: Automatically starts playing the video when the page loads.
   -  loop: Repeats the video once it ends.
   -  muted: Mutes the video by default.
   -  poster: Specifies an image to be displayed before the video starts playing.
   -  width and height: Specifies the dimensions of the video.


## Audio

The `<audio>` Tag
The `<audio>` tag is used to embed audio files in an HTML document. It also supports multiple attributes for control.

Example usage:

      <audio src="audio.mp3" controls></audio>     

Attributes for `<audio>` Tag
   -  src: Specifies the path to the audio file.
   -  controls: Adds audio controls, like play, pause, and volume.
   -  autoplay: Automatically starts playing the audio when the page loads.
   -  loop: Repeats the audio once it ends.
   -  uted: Mutes the audio by default.
   -  preload: Specifies if and how the audio should be loaded when  - the page loads ('auto', 'metadata', 'none').
 

The "preload" attribute can have the following values:

-  none: This is the default value. It indicates that the browser should not preload the audio file at all. The audio file will only start downloading when the user initiates playback.

-  metadata: This value tells the browser to preload only the metadata of the audio file, such as its duration and basic information about the audio. This can be useful if you want to display the audio duration to the user without fully loading the audio data.

-  auto: This value instructs the browser to preload the entire audio file as much as possible without delaying the loading of other important page content. The browser will try to load the audio file in the background so that it's ready to play when the user decides to start it.

## Media

### SVG in HTML

SVG (Scalable Vector Graphics) is an XML-based format for two-dimensional vector graphics. It allows you to embed vector images directly into HTML using the `<svg>` element. SVG graphics are scalable without loss of quality, can be styled with CSS, and manipulated with JavaScript, making them suitable for icons, logos, and interactive graphics on the web.

#### Issues in SVG rendering
When using SVG as a seperate file it is possible that it won't get rendered, to avoid this from happening it will be required that a namespace identifier is established within the file

      <svg xmlns="http://www.w3.org/2000/svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>

## IFRAME

The `<iframe>` (inline frame) element in HTML is used to embed another document within the current HTML document. It allows you to display content from another source, such as a different webpage or external media, within the context of your page

      <iframe src="https://www.example.com" width="800" height="600" title="External Content"></iframe>  

## Semantic HTML Tags

Semantic HTML tags provide meaning to the structure of a webpage. They enhance readability, SEO, and accessibility. Common semantic tags include `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`. They convey the purpose and relationship of content, making it easier for developers and browsers to understand the page's structure.

Using semantic tags is beneficial for several reasons:

- **Readability and Maintenance:** Semantic tags make it clear what role each part of the content plays, improving code readability and making it easier to maintain.
- **SEO:** Search engines can better understand the structure and context of your content, potentially improving search engine rankings.
- **Accessibility:** Semantic HTML enhances accessibility by providing a meaningful structure that can be interpreted


Example of Semantic Tags
<img src="./Code/Src/Semantic.png">

## HTML Entities

HTML entities are special codes or symbols used to represent reserved characters in HTML. These characters have special meanings in HTML, and using entities allows you to display them correctly in the browser. Entities start with an ampersand (`&`) and end with a semicolon (`;`). Here are some common HTML entities:

1. **Text and Formatting:**
   - `&lt;` represents `<` (less than)
   - `&gt;` represents `>` (greater than)
   - `&amp;` represents `&` (ampersand)
   - `&quot;` represents `"` (double quote)
   - `&apos;` represents `'` (apostrophe/single quote)

2. **Non-Breaking Space:**
   - `&nbsp;` represents a non-breaking space. It prevents the browser from breaking a line at that point.

3. **Special Characters:**
   - `&copy;` represents © (copyright)
   - `&reg;` represents ® (registered trademark)
   - `&trade;` represents ™ (trademark)

4. **Math Symbols:**
   - `&plusmn;` represents ± (plus-minus)
   - `&times;` represents × (multiplication)
   - `&divide;` represents ÷ (division)

5. **Accented Characters:**
   - `&eacute;` represents é (e with acute accent)
   - `&Auml;` represents Ä (A with umlaut/diaeresis)

6. **Greek Letters:**
   - `&alpha;` represents α (alpha)
   - `&beta;` represents β (beta)
   - `&gamma;` represents γ (gamma)

These entities are especially useful when you need to display characters that have special meanings in HTML, such as `<`, `>`, `&`, or characters that are not easily typable on a standard keyboard. For example, if you want to display the less than symbol (<) in your HTML document, you can use `&lt;`. Similarly, `&euro;` can be used to represent the Euro symbol (€).

Always use HTML entities when you want to display reserved characters to ensure proper rendering and avoid potential issues with code interpretation.

# Cascading Style Sheet (CSS)

CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation and formatting of a document written in HTML or XML. CSS separates the structure and content of a document from its presentation, allowing web designers and developers to control the visual appearance of web pages.

Key features of CSS include:

1. **Selectors and Declarations:**
   - CSS uses selectors to target HTML elements and declarations to define how those elements should be styled.
   - Selectors can target elements based on their type, class, ID, or other attributes.

2. **Properties and Values:**
   - Declarations consist of properties and values. Properties represent the style aspects you want to change (e.g., color, font-size), and values specify how you want those aspects to change.
   - Example: `color: blue;` where `color` is the property and `blue` is the value.

3. **External and Internal Styles:**
   - CSS can be applied to HTML documents in three ways:
     - **Inline:** Applied directly to individual HTML elements using the `style` attribute.
     - **Internal/Embedded:** Placed within the `<style>` tag in the document's `<head>` section.
     - **External:** Stored in a separate CSS file and linked to the HTML document.

4. **Cascading and Specificity:**
   - The term "cascading" refers to the process by which multiple style sheets can influence the presentation of a document. Styles can cascade from external to internal to inline.
   - Specificity is a set of rules that determine which style rules are applied when multiple conflicting rules exist.

5. **Responsive Design:**
   - CSS allows for the creation of responsive designs by using media queries. Media queries enable the adaptation of styles based on characteristics like screen size, device orientation, and resolution.

6. **Box Model:**
   - HTML elements are represented as boxes, and CSS controls the size, padding, margin, and border of these boxes through the box model.

7. **Flexbox and Grid Layout:**
   - CSS provides advanced layout techniques such as Flexbox and Grid Layout, making it easier to design complex and responsive layouts.

Example of CSS code:

```css
/* Element Selector */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 20px;
}

/* Selecting elements with a specific class */
.my-class {
    font-size: 16px;
}

/* Selecting an element with a specific ID */
#my-id {
    background-color: #eaeaea;
}

```

In this example, the CSS code is defining styles for the `body`, `h1`, and `p` elements in an HTML document. The `font-family`, `background-color`, `color`, `font-size`, and `line-height` properties are used to control the appearance of these elements.

## CSS Properties
### Margin, Padding and Border

<img  src="./Code/Src/CSS Box Model.png" style="padding:5px">

### Calculating the width and height of an element
The formula for calculating the total width is as follows:

Total Width=Width+Padding-left+Padding-right+Border-left+Border-right+Margin-left+Margin-right

And the formula for calculating the total height is:

Total Height=Height+Padding-top+Padding-bottom+Border-top+Border-bottom+Margin-top+Margin-bottom


### CSS Selectors

Selectors in CSS allow you to target and style specific HTML elements. There are several types of selectors, each serving a different purpose. Here are some common types of CSS selectors:

1. **Universal Selector (`*`):**
   - Targets all elements on the page.

    ```css
    * {
        margin: 0;
        padding: 0;
    }
    ```

2. **Type or Element Selector:**
   - Selects all instances of a specified HTML element.

    ```css
    p {
        color: blue;
    }
    ```

3. **Class Selector (`.`):**
   - Selects all elements with a specific class attribute.

    ```css
    .highlight {
        background-color: yellow;
    }
    ```

4. **ID Selector (`#`):**
   - Selects a specific element with a given ID attribute.

    ```css
    #header {
        font-size: 18px;
    }
    ```

5. **Descendant Selector (Whitespace):**
   - Selects all elements that are descendants of a specified element.

    ```css
    article p {
        font-style: italic;
    }
    ```

6. **Child Selector (`>`):**
   - Selects all direct children of a specified element.

    ```css
    ul > li {
        list-style-type: square;
    }
    ```

7. **Adjacent Sibling Selector (`+`):**
   - Selects an element that is directly preceded by a specified element.

    ```css
    h2 + p {
        margin-top: 10px;
    }
    ```

8. **Attribute Selector (`[]`):**
   - Selects elements based on the presence or value of their attributes.

    ```css
    input[type="text"] {
        border: 1px solid #ccc;
    }
    ```

9. **Pseudo-classes (`:`):**
   - Selects elements based on their state or position.

    ```css
    a:hover {
        text-decoration: underline;
    }

    li:nth-child(even) {
        background-color: #f2f2f2;
    }
    ```

10. **Pseudo-elements (`::`):**
    - Selects parts of an element, such as the first line or first letter.

    ```css
    p::first-line {
        font-weight: bold;
    }

    p::first-letter {
        font-size: 150%;
    }
    ```

These are some of the basic and commonly used selectors in CSS. Combining these selectors allows for precise targeting of HTML elements and enables the creation of well-styled and structured web pages.

### Box Sizing
In CSS, the `box-sizing` property is used to control how the sizing of an element is calculated, particularly in relation to its padding and border. The `box-sizing` property can take one of the following values:

1. **`content-box` (default):**
   - This is the default value. When you set an element's width or height, the specified value only applies to the element's content box. Padding and border are then added to the specified width and height.

   Example:
   ```css
   box-sizing: content-box;
   ```

2. **`border-box`:**
   - With this value, the specified width and height include the padding and border of the element. In other words, the total size of the box is the specified width and height, and the browser adjusts the content box to accommodate the padding and border.

   Example:
   ```css
   box-sizing: border-box; 
   ```

Using `border-box` can be helpful in certain situations, especially when working with layouts where you want to ensure that the total size of an element remains consistent, regardless of its padding and border. This can simplify calculations when creating responsive designs or working with grid systems.

Example of using `border-box`:
```css
/* Apply border-box to all elements */
* {
  box-sizing: border-box;
}

/* Example of a container with padding and border */
.container {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
}
```

In the example above, the total width of the `.container` element, including padding and border, will be 300 pixels. This makes it easier to manage the layout without having to adjust calculations for padding and border separately.

### Margin Collapse

<img src="./Code/Src/Margin Collapse.png">

### Fonts

The `font` property in CSS is a shorthand that combines various font-related properties:

- **`font-style`:** Specifies the font style (normal, italic, or oblique).
- **`font-variant`:** Sets whether the text should be displayed in small caps.
- **`font-weight`:** Defines the font weight (normal, bold, bolder, lighter, or numeric value).
- **`font-size`:** Sets the font size using absolute or relative units.
- **`line-height`:** Specifies the line height with a unitless number, percentage, or length value.
- **`font-family`:** Specifies the preferred font family or a list of fallback font families.


1. Importing external fonts:
   Use one of the below codes to get the desired fonts
   
Importing Via header
```html
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
```

Importing via Style

```html
   <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
</style>
```
CSS rule to Apply

      font-family: 'Poppins', sans-serif;

2. Fallback font: This is the default font that takes the place in case the font is not able to load due to any reason

3. Text Transform: 
The `text-transform` property in CSS is used to control the capitalization of text. It has three main values:

 **`uppercase`:** Transforms all text to uppercase.

   ```css
   .example {
     text-transform: uppercase;
   }
   ```

**`lowercase`:** Transforms all text to lowercase.

   ```css
   .example {
     text-transform: lowercase;
   }
   ```

**`capitalize`:** Capitalizes the first letter of each word.

   ```css
   .example {
     text-transform: capitalize;
   }
   ```

You can apply these values to various elements in your HTML to control the appearance of text without changing the actual content.

4. text-decoration: 
Certainly! The `text-decoration` property in CSS is used to control the decoration of text. It has several values, but the most common ones are:

**`none`:** Removes any text decoration such as underline, overline, or line-through.

   ```css
   .example {
     text-decoration: none;
   }
   ```

**`underline`:** Adds an underline to the text.

   ```css
   .example {
     text-decoration: underline;
   }
   ```

**`overline`:** Adds a line above the text.

   ```css
   .example {
     text-decoration: overline;
   }
   ```

**`line-through`:** Adds a line through the middle of the text.

   ```css
   .example {
     text-decoration: line-through;
   }
   ```

You can use these values to style links or other text elements in your HTML document to enhance their visual appearance.

5. text indentation :
In CSS, you can use the `text-indent` property to control the indentation of the first line of text within an element. This property specifies the amount of space that should be left before the first line of text in a block-level element. Here's a concise explanation:

```css
.example {
  text-indent: 20px; /* or any other length value */
}
```

In this example, the first line of text within an element with the class "example" will be indented by 20 pixels. You can use different length units like pixels, ems, or percentages, as well as negative values for hanging indentation.

For example, to create a hanging indent where the first line is outdented, you can use a negative value:

```css
.example {
  text-indent: -20px;
}
```

Adjust the value according to your design preferences. This property is commonly used in paragraphs or block-level elements to create visually appealing and structured text layouts.

6. text-overflow: 

The `text-overflow` property in CSS is used to specify how overflowed content that is not displayed in a container should be signaled to the user. It is often used in combination with the `white-space` and `overflow` properties. Here's a concise explanation:

```css
.example {
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides any content that overflows the container */
  text-overflow: ellipsis; /* Displays an ellipsis (...) when content is truncated */
}
```

In this example, the text within an element with the class "example" will not wrap to the next line (`white-space: nowrap`). If the content overflows the container, it will be hidden (`overflow: hidden`), and an ellipsis (`...`) will be displayed to indicate that there is more content than is currently visible (`text-overflow: ellipsis`).

This is commonly used in scenarios where you want to show only a limited amount of text and indicate that there is more content that is not currently visible. The `text-overflow` property is particularly useful when dealing with fixed-size containers or single-line text elements.

7. word-break:
In CSS, the `word-break` property is used to control how words should break when they reach the end of a line. It is especially useful when dealing with long words or URLs that might disrupt the layout. Here's a concise explanation:

```css
.example {
  word-break: break-all; /* Breaks words to prevent overflow */
}
```

In this example, the `word-break: break-all;` style allows long words or strings to break and wrap onto the next line to prevent overflow. This can be helpful in maintaining a clean layout, especially in responsive designs.

Other common values for the `word-break` property include:

- **`normal`:** Breaks words at normal word break points (default).
- **`break-word`:** Breaks words to prevent overflow, similar to `break-all`.

```css
.example {
  word-break: normal; /* Default behavior */
}
```

Adjust the `word-break` property based on your specific design needs and the type of content you are working with.

8. text-align:
In CSS, the `text-align` property is used to control the horizontal alignment of text within an element. It can be applied to block-level and inline-level elements. Here's a concise explanation:

```css
.example {
  text-align: center; /* Aligns text to the center */
}
```

In this example, the text within an element with the class "example" will be horizontally centered. Other common values for `text-align` include:

- **`left`:** Aligns text to the left.
- **`right`:** Aligns text to the right.
- **`justify`:** Justifies the text, spreading it evenly across the width of the container.
- **`center`:** Aligns the text to the center.
- **`start`:** Aligns the text to the start of the line, which is left in left-to-right text and right in right-to-left text.
- **`end`:** Aligns the text to the end of the line, which is right in left-to-right text and left in right-to-left text.

```css
.example {
  text-align: right; /* Aligns text to the right */
}
```

Apply the `text-align` property according to your layout requirements and design preferences.

### Colors

In CSS, colors can be specified using various formats, including named colors, hexadecimal values, RGB values, RGBA values, HSL values, and HSLA values. Here's a concise explanation of each:

1. **Named Colors:**
   - CSS supports a set of predefined color names. Examples include "red," "blue," "green," and "yellow."

   ```css
   .example {
     color: red;
     background-color: lightblue;
   }
   ```

2. **Hexadecimal Values:**
   - Hexadecimal values represent colors using a six-digit code. For example, `#RRGGBB` where RR is the red component, GG is the green component, and BB is the blue component.

   ```css
   .example {
     color: #ff0000; /* Red */
     background-color: #00ff00; /* Green */
   }
   ```

3. **RGB Values:**
   - RGB values represent colors using the intensity of red, green, and blue. Each component is expressed as a number between 0 and 255.

   ```css
   .example {
     color: rgb(255, 0, 0); /* Red */
     background-color: rgb(0, 255, 0); /* Green */
   }
   ```

4. **RGBA Values:**
   - RGBA values are similar to RGB but include an additional alpha channel for transparency. The alpha value ranges from 0 (fully transparent) to 1 (fully opaque).

   ```css
   .example {
     color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
     background-color: rgba(0, 255, 0, 0.7); /* Semi-transparent green */
   }
   ```

5. **HSL Values:**
   - HSL values represent colors using hue (0 to 360), saturation (0% to 100%), and lightness (0% to 100%).

   ```css
   .example {
     color: hsl(0, 100%, 50%); /* Red */
     background-color: hsl(120, 100%, 50%); /* Green */
   }
   ```

6. **HSLA Values:**
   - HSLA values are similar to HSL but include an alpha channel for transparency.

   ```css
   .example {
     color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
     background-color: hsla(120, 100%, 50%, 0.7); /* Semi-transparent green */
   }
   ```

Choose the color format that best suits your needs, considering factors such as readability, ease of use, and support for transparency.

### Cascade Algorithm 

CSS specificity is a set of rules that determine which styles are applied to an element when conflicting styles exist. Specificity is crucial for understanding how browsers decide which style declarations to prioritize. Specificity is calculated based on the following factors, in order of importance:

1. **Inline Styles:**
   - Styles applied directly to an element using the `style` attribute have the highest specificity.

   ```html
   <div style="color: red;">This text is red.</div>
   ```

2. **ID Selectors:**
   - Styles applied using an ID selector have higher specificity than styles applied using class selectors or tag selectors.

   ```css
   #uniqueId {
     color: blue;
   }
   ```

3. **Class Selectors, Attribute Selectors, and Pseudo-Classes:**
   - Styles applied using class selectors, attribute selectors, or pseudo-classes have a medium level of specificity.

   ```css
   .exampleClass {
     color: green;
   }

   [type="text"] {
     color: orange;
   }

   a:hover {
     color: purple;
   }
   ```

4. **Type Selectors and Pseudo-Elements:**
   - Styles applied using tag selectors (element names) and pseudo-elements have the lowest specificity.

   ```css
   p {
     color: brown;
   }

   ::first-line {
     color: gray;
   }
   ```

When there is a conflict between styles, the browser uses specificity to determine which style should be applied. If two conflicting styles have the same specificity, the one that appears later in the stylesheet takes precedence.

For example:

```css
#uniqueId {
  color: blue; /* Specificity: 1 ID */
}

.exampleClass {
  color: green; /* Specificity: 1 Class */
}

p {
  color: brown; /* Specificity: 1 Type */
}

#uniqueId.exampleClass {
  color: purple; /* Specificity: 1 ID + 1 Class */
}
```

In this example, the color specified in `#uniqueId.exampleClass` will override the colors specified in `#uniqueId`, `.exampleClass`, and `p`, because it has a higher specificity. Understanding specificity is essential for writing maintainable and predictable CSS.

### Cascade Algorithm

The Cascade Algorithm in CSS is the process by which the browser determines the final styles that should be applied to an HTML element based on all the applicable style rules. The term "cascade" refers to the order of importance and the priority of rules in determining the final styles.

The cascade algorithm follows a set of rules to resolve conflicting styles and determine the specificity and source order of style rules. Here are the key steps of the cascade algorithm:

1. **Origin:**
   - The first step is to consider the origin of the style rule. There are three possible origins:
     - User Agent Stylesheet: Default styles applied by the browser.
     - User Stylesheet: Custom styles provided by the user, often through browser extensions or settings.
     - Author Stylesheet: Styles defined by the website's author.

2. **Specificity:**
   - If multiple rules from the same origin apply to an element, specificity is considered. Specificity is a measure of how specific a selector is in targeting elements. It is calculated based on the number of ID selectors, class selectors, and type selectors in a rule. The rule with higher specificity takes precedence.

3. **Importance:**
   - The `!important` declaration in a style rule gives it higher importance and overrides other rules, regardless of specificity or source order. This can be used ot override even the inline styles.

4. **Source Order:**
   - If two rules have the same specificity and importance, the one that appears later in the stylesheet takes precedence. This principle is known as the "later rule wins" rule.

5. **Inheritance:**
   - If no applicable styles are found using the cascade algorithm, or if a property is explicitly set to `inherit`, the element inherits styles from its parent element.

The cascade algorithm helps browsers handle complex scenarios where multiple style rules might apply to the same element. It ensures that the final styles are predictable and follow a logical order of priority. Understanding how the cascade works is essential for writing maintainable and effective CSS.

### CSS Specifity 
CSS specificity is calculated using four components:

1. Ten Thousand: !Imporatant is mentioned as 
2. Thousand: Count of ID selectors.
2. Hundred: Count of class selectors, attribute selectors, and pseudo-classes.
3. Ten: Count of type (tag) selectors and pseudo-elements, attribute selector.
4. One: Count of universal selectors and combinators.

Selectors with higher specificity take precedence. In case of a tie, the later rule in the stylesheet wins.

### Sizings in CSS

In CSS (Cascading Style Sheets), sizing values are used to define the dimensions of elements. There are various units and values you can use to specify sizes in CSS. Here are some of the common sizing values:

1. **Absolute Length Units:**
   - **px (Pixels):** A pixel is a unit of measurement commonly used in web design. It's a fixed-size unit.
   - **in (Inches), cm (Centimeters), mm (Millimeters):** These units represent physical measurements and are less common in web design due to the variability of screen sizes.

   ```css
   width: 200px;
   height: 2in;
   ```

2. **Relative Length Units:**
   - **% (Percentage):** Represents a percentage of the parent element's size.
   - **em:** Relative to the font-size of the element.
   - **rem:** Relative to the font-size of the root element.
   - **vw (Viewport Width), vh (Viewport Height):** Relative to the size of the viewport.

   ```css
   width: 50%;
   font-size: 1.2em;
   ```

3. **Flexible Length Units:**
   - **fr (Fractional Unit):** Used in CSS Grid layouts to distribute available space among columns or rows.

   ```css
   grid-template-columns: 1fr 2fr 1fr;
   ```

4. **Content-Based Sizing:**
   - **max-content, min-content, fit-content:** These values are used in conjunction with the `width` or `height` properties to specify the maximum, minimum, or fit-content size based on the content.

   ```css
   width: max-content;
   height: fit-content;
   ```

5. **Viewport-Percentage Lengths:**
   - **vw (Viewport Width), vh (Viewport Height):** Represents a percentage of the viewport size.

   ```css
   width: 50vw;
   height: 75vh;
   ```

6. **Calculation:**
   - The `calc()` function allows you to perform mathematical calculations to determine a value.

   ```css
   width: calc(50% - 20px);
   ```

These are just some of the commonly used sizing values in CSS. The choice of which unit to use depends on the specific requirements of your design and the behavior you want to achieve.

### Display Property

In CSS (Cascading Style Sheets), you can use the `display` property to define how an HTML element should be displayed on the web page. The `display` property can take various values, each affecting the layout and behavior of the element. Here are some common values for the `display` property:

1. **block:**
   - The element is displayed as a block-level element, starting on a new line and taking up the full width available.

   ```css
   div {
     display: block;
   }
   ```

2. **inline:**
   - The element is displayed as an inline-level element, and it does not start on a new line. It only takes up as much width as necessary.

   ```css
   span {
     display: inline;
   }
   ```

3. **inline-block:**
   - The element is displayed as an inline-level element, but it behaves like a block-level element regarding layout. It allows you to set a width and height.

   ```css
   img {
     display: inline-block;
   }
   ```

4. **none:**
   - The element is not displayed on the page. It's effectively removed from the layout.

   ```css
   .hidden {
     display: none;
   }
   ```

5. **flex:**
   - The element becomes a flex container, and its direct children become flex items. It enables a flex context for flexible box layout.

   ```css
   .flex-container {
     display: flex;
   }
   ```

6. **grid:**
   - The element becomes a grid container, and its direct children become grid items. It enables a grid context for grid layout.

   ```css
   .grid-container {
     display: grid;
   }
   ```

7. **table, table-cell, table-row:**
   - These values are used for creating table layouts. They define the element's display behavior as if it were a table, table cell, or table row.

   ```css
   .table {
     display: table;
   }

   .table-cell {
     display: table-cell;
   }

   .table-row {
     display: table-row;
   }
   ```

These are just a few examples of the `display` property values. The choice of value depends on the desired layout and styling for your specific HTML elements.


### Shadows in CSS

In CSS, you can add shadows to elements using the `box-shadow` property. The `box-shadow` property allows you to create both drop shadows and inset shadows. Here's a basic syntax:

```css
selector {
  box-shadow: h-offset v-offset blur spread color;
}
```

- **h-offset:** The horizontal distance of the shadow. Positive values move the shadow right, and negative values move it left.
- **v-offset:** The vertical distance of the shadow. Positive values move the shadow down, and negative values move it up.
- **blur:** Optional. The blur radius. A higher value creates a more blurred shadow.
- **spread:** Optional. The spread radius. A positive value expands the shadow, and a negative value contracts it.
- **color:** The color of the shadow.

Here are a few examples:

1. **Drop Shadow:**
   ```css
   .box {
     box-shadow: 2px 2px 4px #888888;
   }
   ```

2. **Inset Shadow:**
   ```css
   .box {
     box-shadow: inset 2px 2px 4px #888888;
   }
   ```

3. **Multiple Shadows:**
   ```css
   .box {
     box-shadow: 2px 2px 4px #888888, -2px -2px 4px #888888;
   }
   ```

You can customize these values based on your design preferences. The `box-shadow` property is quite versatile and can be used to add depth and dimension to your web page elements.

### Outline in CSS
In CSS, the `outline` property is used to create a visible outline around an element. It is often used to highlight an element, and it is similar to the `border` property but differs in some ways. The `outline` property doesn't take up space in the layout, and it is typically used for highlighting interactions or focus.

Here's the basic syntax for the `outline` property:

```css
selector {
  outline: [outline-color] [outline-style] [outline-width];
}
```

- **outline-color:** The color of the outline.
- **outline-style:** The style of the outline (e.g., `dotted`, `dashed`, `solid`, etc.).
- **outline-width:** The width of the outline.

Here's an example:

```css
.button {
  outline: 2px solid #3498db;
}
```

In this example, the `.button` class has a blue solid outline with a width of 2 pixels.

You can also use the `outline` property to specify each component separately:

```css
.button {
  outline-color: #3498db;
  outline-style: solid;
  outline-width: 2px;
}
```

Additionally, you can use the shorthand property `outline` with one, two, or three values. For example:

```css
.button {
  outline: 2px solid #3498db;
}
```

In this case, the values are applied in the order of color, style, and width.

It's important to note that the `outline` property is often used in conjunction with the `:focus` pseudo-class to highlight elements when they receive focus, such as with interactive elements like buttons or form fields.


### Overflow in CSS
In CSS, the `overflow` property is used to control how content that is too large to fit into an area is handled. It can be applied to block-level and replaced elements.

The `overflow` property can take several values:

1. **visible (default):** Content is not clipped, and it may overflow the container.

   ```css
   .container {
     overflow: visible;
   }
   ```

2. **hidden:** Overflowing content is clipped and not visible.

   ```css
   .container {
     overflow: hidden;
   }
   ```

3. **scroll:** A scrollbar is added to the container, allowing the user to scroll to see the overflow.

   ```css
   .container {
     overflow: scroll;
   }
   ```

4. **auto:** Similar to `scroll`, a scrollbar is added only if the content overflows.

   ```css
   .container {
     overflow: auto;
   }
   ```

5. **inherit:** The `overflow` value is inherited from the parent element.

   ```css
   .container {
     overflow: inherit;
   }
   ```

The `overflow` property is commonly used when dealing with elements of fixed dimensions or in responsive design to handle content overflow on smaller screens. It's essential for controlling the visual presentation and user experience of your webpage.

### Position Property
In CSS, the `position` property is used to control the positioning of an element within its containing element. The `position` property can take several values, each influencing the layout of the element in a different way. Here are the main values for the `position` property:

1. **static (default):** Elements are positioned according to the normal flow of the document. This is the default value.

   ```css
   .box {
     position: static;
   }
   ```

2. **relative:** Elements are positioned relative to their normal position in the document flow. Using `top`, `right`, `bottom`, and `left` properties, you can shift the element from its normal position.

   ```css
   .box {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```

3. **absolute:** Elements are removed from the normal document flow and positioned relative to the nearest positioned ancestor. If no positioned ancestor exists, it is positioned relative to the initial containing block (usually the `html` element).

   ```css
   .box {
     position: absolute;
     top: 30px;
     right: 10px;
   }
   ```

4. **fixed:** Elements are removed from the normal document flow and positioned relative to the browser window. Even if the page is scrolled, a fixed-position element stays in the same place.

   ```css
   .box {
     position: fixed;
     bottom: 0;
     right: 0;
   }
   ```

5. **sticky:** The element is treated as `relative` positioned until it crosses a specified point during scrolling, after which it is treated as `fixed` positioned.

   ```css
   .box {
     position: sticky;
     top: 10px;
   }
   ```

Understanding and appropriately using the `position` property is crucial for creating complex layouts and achieving the desired positioning effects on a webpage. Additionally, it's often used in combination with other properties like `top`, `right`, `bottom`, and `left` to precisely control the positioning of elements.


### CSS Variables
In CSS, variables are known as custom properties. Custom properties allow you to define reusable values in your stylesheets. They are defined using the `--` prefix, and their values can be reused throughout the stylesheet. Here's a basic example:

```css
:root {
  --main-color: #3498db;
  --font-size: 16px;
}

body {
  color: var(--main-color);
  font-size: var(--font-size);
}
```

In this example:

- The `:root` selector is used to define global variables. It represents the highest-level parent in the document, which is usually the `html` element.

- Two variables, `--main-color` and `--font-size`, are defined with specific values.

- These variables are then used later in the stylesheet using the `var()` function.

Custom properties provide a way to make your stylesheets more maintainable and flexible, especially when you want to reuse values or apply a consistent theme throughout your website.

You can also scope variables to specific selectors, making them more localized:

```css
.element {
  --background-color: #ecf0f1;
  background-color: var(--background-color);
}
```

In this example, `--background-color` is scoped to the `.element` selector.

Keep in mind that custom properties are well-supported in modern browsers, but older browsers may not fully support them. Always check for compatibility if you need to support a wide range of browsers.

Even it is possible to assign a value of padding via variables

```css
:root{
   --defpad:10px; 
   /* default padding */
}

p{
   padding: var(--defpad);
}
```
### Media Queries
Media queries in CSS are used to apply styles based on the characteristics of the device or viewport, allowing you to create responsive designs. Media queries enable you to tailor the styling of your web page based on factors such as screen size, resolution, device orientation, and more. Here's a basic syntax for a media query:

```css
@media media_type and (media_feature) {
  /* CSS rules to apply when the media query condition is met */
}
```

- **media_type:** Specifies the type of media the query applies to, commonly used values are `all`, `screen`, `print`, etc.
- **media_feature:** Specifies the condition that must be true for the styles within the media query to apply. It can include things like `width`, `max-width`, `min-width`, `orientation`, etc.

Here are a couple of examples:

1. **Simple Width-based Media Query:**
   ```css
   @media screen and (max-width: 600px) {
     /* Styles for screens with a width of 600 pixels or less */
     body {
       font-size: 14px;
     }
   }
   ```

2. **Combining Multiple Conditions:**
   ```css
   @media screen and (min-width: 600px) and (orientation: landscape) {
     /* Styles for screens with a width of at least 600 pixels and in landscape orientation */
     body {
       background-color: lightblue;
     }
   }
   ```

3. **Print Styles:**
   ```css
   @media print {
     /* Styles for print media */
     body {
       font-family: "Times New Roman", serif;
     }
   }
   ```

These are just basic examples, and media queries can be as simple or complex as needed for your design. They play a crucial role in creating a responsive and user-friendly layout that adapts to different devices and screen sizes.

### Float and Clear
In CSS, the `float` and `clear` properties are used for controlling the layout and positioning of elements. However, it's important to note that the use of floats has become less common in modern web design due to the availability of more robust layout techniques like Flexbox and Grid. Still, understanding these properties can be helpful for understanding legacy code and troubleshooting layout issues.

### `float` Property:

The `float` property is used to place an element to the left or right within its containing element, allowing content to flow around it.

```css
.float-left {
  float: left;
}

.float-right {
  float: right;
}
```

In the example above, elements with the class `.float-left` will be floated to the left, and elements with the class `.float-right` will be floated to the right.

### `clear` Property:

The `clear` property is used to control whether an element should be moved below (cleared) floating elements that precede it.

```css
.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}

.clear-both {
  clear: both;
}
```

- `clear: left;`: The element will be moved below any left-floating elements.
- `clear: right;`: The element will be moved below any right-floating elements.
- `clear: both;`: The element will be moved below both left and right-floating elements.

Here's a simple example combining both `float` and `clear`:

```css
.float-left {
  float: left;
  margin-right: 10px; /* Optional margin for spacing */
}

.float-right {
  float: right;
  margin-left: 10px; /* Optional margin for spacing */
}

.clear-both {
  clear: both;
}
```

```html
<div class="float-left">Left Floater</div>
<div class="float-right">Right Floater</div>
<div class="clear-both"></div>
<p>Content below floaters.</p>
```

In this example, the `clear-both` class is used to ensure that the content below the floaters doesn't wrap around them.

Again, for modern layouts, consider using Flexbox or Grid for more robust and flexible designs. Floats are mostly used in specific situations, like creating simple two-column layouts or handling older codebases.


### Flex-box

Flexbox, or the Flexible Box Layout, is a layout model in CSS that allows you to design complex layouts more efficiently and with less code than traditional models. It is particularly well-suited for distributing space along a single axis (either horizontally or vertically) and for aligning items within a container. Flexbox is a part of the CSS3 specification and is supported by modern web browsers.

Here are the key concepts and properties of Flexbox:

1. **Flex Container:**
   - To use Flexbox, you designate a container as a flex container by setting its `display` property to `flex` or `inline-flex`.

     ```css
     .container {
       display: flex;
     }
     ```

2. **Flex Direction:**
   - Determines the direction of the main axis (the primary axis along which flex items are placed).

     ```css
     .container {
       flex-direction: row | row-reverse | column | column-reverse;
     }
     ```

3. **Flex Items:**
   - Children of a flex container are called flex items.

     ```css
     .item {
       flex: <flex-grow> <flex-shrink> <flex-basis>;
     }
     ```

4. **Flex Wrap:**
   - Controls whether flex items are forced onto a single line or can be wrapped onto multiple lines.

     ```css
     .container {
       flex-wrap: nowrap | wrap | wrap-reverse;
     }
     ```

5. **Justify Content:**
   - Aligns flex items along the main axis of the flex container.

     ```css
     .container {
       justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
     }
     ```

6. **Align Items:**
   - Aligns flex items along the cross axis of the flex container.

     ```css
     .container {
       align-items: stretch | flex-start | flex-end | center | baseline;
     }
     ```

7. **Align Self:**
   - Allows the default alignment of a flex item to be overridden for that particular item.

     ```css
     .item {
       align-self: auto | flex-start | flex-end | center | baseline | stretch;
     }
     ```

8. **Flex:**
   - Shorthand property for setting the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

     ```css
     .item {
       flex: 1 1 auto;
     }
     ```

Flexbox provides a powerful and intuitive way to create responsive and dynamic layouts, and it is especially useful when dealing with unknown or dynamic sizes of elements. It's widely supported in modern browsers, making it a reliable choice for web development.


#### CSS FlexBox 

<img src="./Code/Src/FlexBox.png">

#### CSS Main Axis and cross Axis

<img src="./Code/Src/CSS Main and Cross.png">

#### CSS Flex Cheatsheet

<img src="./Code/Src/CSS Flex Cheatsheet.png">

## CSS Grid
<img src="./Code/Src/CSS Grid.png">

## CSS Frameworks

There are several CSS frameworks available that provide pre-written, standardized code and design patterns to help you build responsive and visually appealing web pages more quickly. These frameworks often include a set of CSS, HTML, and sometimes JavaScript files that you can include in your project. Here are some popular CSS frameworks:

1. **Bootstrap:**
   - **Website:** [Bootstrap](https://getbootstrap.com/)
   - **Description:** Bootstrap is one of the most popular and widely used CSS frameworks. It provides a responsive grid system, pre-styled components, and a variety of useful JavaScript plugins. Bootstrap is known for its ease of use and extensive documentation.

2. **Foundation:**
   - **Website:** [Foundation](https://get.foundation/)
   - **Description:** Foundation is a responsive front-end framework that is feature-rich and customizable. It includes a flexible grid system, UI components, and various layout options. Foundation is often chosen for its flexibility and modular structure.

3. **Bulma:**
   - **Website:** [Bulma](https://bulma.io/)
   - **Description:** Bulma is a modern CSS framework based on Flexbox. It is lightweight and easy to learn, offering a clean and simple syntax. Bulma is a good choice if you prefer a framework that doesn't rely on JavaScript and focuses on flexibility.

4. **Semantic UI:**
   - **Website:** [Semantic UI](https://semantic-ui.com/)
   - **Description:** Semantic UI is a framework designed with theming in mind. It uses human-friendly HTML to create responsive and customizable user interfaces. Semantic UI is known for its expressive and readable syntax.

5. **Tailwind CSS:**
   - **Website:** [Tailwind CSS](https://tailwindcss.com/)
   - **Description:** Tailwind CSS takes a different approach compared to other frameworks. It provides low-level utility classes that you can use to build your own designs. Tailwind is highly customizable and often preferred by developers who want more control over their styles.

6. **Materialize:**
   - **Website:** [Materialize](https://materializecss.com/)
   - **Description:** Materialize is based on Google's Material Design principles. It provides a set of pre-designed components and animations to create a consistent and visually appealing user interface.

7. **Radix** - This is genrally used along with Tailwind to get the components created.

8. **Chakra UI**
9. **Shad CN**
When choosing a CSS framework, consider factors such as your project requirements, personal preferences, and the learning curve associated with each framework. Each framework has its strengths and weaknesses, so it's essential to choose the one that best fits your needs and workflow.





# Javascript 1
JS is synchronus single threaded langauge

Everything in JS happens within the execution Context

## How JS code is executed?


## Execution Context
The two componets in execution context are:

   1. Memory Component AKA Variable Environment

      Memory Component holds variable and functions as  key value pairs 

   2. Code Componet AKA Thread of Execution
      Code component where whole JS is executed
<img src="./Code/Src/Execution Context & Call Stack.png">

## Call Stack
Call Stack maintains the order of execution of execution contexts

Call Stack is AKA 
   -  Execution Stack
   -  Program Stack
   -  Control Stack
   -  Runtime Stack
   -  Machine Stack

## Hoisting in JS

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions in your code before they are declared.

However, it's important to note that only the declarations are hoisted, not the initializations. Here's an explanation of hoisting for both variables and functions:

### Hoisting with Variables:

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

In the above example, the variable declaration `var x;` is hoisted to the top of its scope during the compilation phase. However, the assignment (`x = 5;`) remains in place. So, when the first `console.log` is encountered, `x` exists but has the value `undefined`. The second `console.log` prints the value after the assignment (`5`).

### Hoisting with Functions:

```javascript
foo(); // "Hello, I am a function!"
function foo() {
  console.log("Hello, I am a function!");
}
```

In this example, the function declaration `function foo() {...}` is hoisted to the top of its scope. Therefore, you can call the function before its actual declaration in the code.

### Caveats and Considerations:

1. **Let and Const Variables:**
   - Variables declared with `let` and `const` are hoisted as well, but they are not initialized with `undefined` like variables declared with `var`. They remain in the "temporal dead zone" until the point in the code where they are declared.

   ```javascript
   console.log(x); // ReferenceError: Cannot access 'x' before initialization
   let x = 5;
   ```

2. **Function Expressions:**
   - Hoisting works differently for function expressions. In a function expression, only the variable declaration is hoisted, not the function assignment.

   ```javascript
   // Not hoisted
   myFunction(); // TypeError: myFunction is not a function
   var myFunction = function() {
     console.log("This is a function expression.");
   };

   //Not hoisted as well
   var myFunction = () => {
      console.log("Won't work in hoisting since a variable");
   }

   //This will be hoisted
   function myFunction(){
      console.log("This will be hoisted");
   }

   ```

   In this case, the variable `myFunction` is hoisted, but it is `undefined` until the actual function assignment.

Understanding hoisting is essential for writing predictable JavaScript code. It's recommended to declare variables and functions at the top of their scope to avoid potential issues related to hoisting. Additionally, being aware of hoisting can help developers write code that is more readable and follows best practices.

## Working of functions in JS

Example: 

```javascript

var x=1;
a();
b();
console.log(x);

function a(){
   var x=10;
   console.log(x);
}

function b(){
   var x = 100;
   console.log(x);
}
```

```
Output:
   >>10
   >>100
   >>1 
```
To understand the output think in terms of execution context and call stack

Step 1 : Inital, memory is allocated to all the variables and functions
<img src="./Code/Src/JS-SS/image.png">

Step 2: When the function is invoked. It creates a seperate execution context that is independent of the global execution context. This context is deleted when the functions code is completely executed

<img src="./Code/Src/JS-SS/image-1.png">

Here both the x variables are not the same and they are different variables altogether

Step 3: then the code within a functions execution context is executed. i.e. 

```javascript
   var x=10;
   console.log(x);
```

The local execution context gets the value assigned as 10 instead of undefined and then it is logged to the console

Step 4: once function a() is executed the entire execution context is poped from the stack and a new execution context is created here for function b() as line 3 of the global execution is executed 

and then the process continues

## Global Object in JS

In JavaScript, the term "window" typically refers to the global object in a browser environment. The `window` object represents the browser window or the frame in which the JavaScript code is running. It serves as the global context for JavaScript code running in a web page.

Some common properties and methods associated with the `window` object include:

1. **Properties:**
   - `window.document`: Represents the Document object for the current page.
   - `window.location`: Provides information about the URL of the current page.
   - `window.navigator`: Contains information about the visitor's browser and system.
   - `window.innerWidth` and `window.innerHeight`: Represent the inner width and height of the browser window.

2. **Methods:**
   - `window.alert()`: Displays an alert box with a specified message and an OK button.
   - `window.prompt()`: Displays a dialog box that prompts the user for input.
   - `window.confirm()`: Displays a dialog box with a specified message and OK and Cancel buttons.

Here's a simple example that uses the `window.alert()` method:

```javascript
window.alert("Hello, this is an alert!");
```

It's important to note that in modern JavaScript, the use of `window` is often optional. For example, you can use `alert("Hello, this is an alert!");` without explicitly referencing the `window` object. However, understanding the role of the `window` object is crucial for working with the global context in web development.

## Undefined VS Not Defined

In JavaScript, "undefined" and "not defined" are related but represent different concepts.

1. **Undefined:**
   - In JavaScript, `undefined` is a primitive value and a data type. It is a special value that a variable can take if it has been declared but has not been assigned a value.
   - When you see `undefined`, it means that a variable has been declared, but it hasn't been given a value explicitly.

   ```javascript
   let variable;
   console.log(variable); // Output: undefined
   ```

   - It's also the default value of function parameters that are not provided when the function is called.

   ```javascript
   function exampleFunction(parameter) {
     console.log(parameter);
   }

   exampleFunction(); // Output: undefined
   ```

2. **Not Defined:**
   - "Not defined" typically refers to a situation where you are trying to use a variable or an identifier that has not been declared at all. In other words, the variable is not present in the current scope.

   ```javascript
   console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
   ```

   - This error occurs when you try to access a variable that hasn't been declared or is outside the current scope.

So, in summary:
- `Undefined` is a special value in JavaScript assigned to variables that have been declared but not assigned a value or to function parameters that haven't been provided.
- "Not defined" refers to situations where you are trying to use a variable or identifier that hasn't been declared at all in the current scope, resulting in a `ReferenceError`.


## Scope Chain and Lexical Environment

The scope chain is a concept in JavaScript that refers to the hierarchical structure of lexical environments in relation to the current execution context. When a function is invoked, a new execution context is created, and JavaScript uses the scope chain to resolve references to variables and functions.

The scope chain is formed by the combination of the current execution context's lexical environment and its outer (parent) lexical environments. Each lexical environment has an associated environment record, which contains the bindings of identifiers to their values or references.

Here's a simple example to illustrate the scope chain:

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    let innerVariable = "I am from the inner function";
    console.log(outerVariable); // Accessing outerVariable through the scope chain
  }

  innerFunction();
}

outerFunction();
```

In this example:

1. The `outerFunction` creates a lexical environment with an environment record containing `outerVariable`.

2. The `innerFunction` is declared inside `outerFunction`, creating a new lexical environment. The scope chain for `innerFunction` includes its own environment record and the environment record of `outerFunction`, forming a chain.

3. When `innerFunction` is executed and tries to access `outerVariable`, JavaScript looks for it in the innermost lexical environment first. If it's not found there, it continues searching in the outer lexical environment until it either finds the variable or reaches the global scope.

This process of searching for variables up the chain of lexical environments is known as the scope chain. It ensures that functions have access to variables declared in their own scope as well as in the scopes of their containing functions or the global scope. Understanding the scope chain is crucial for grasping how variable resolution works in JavaScript and how scoping affects the behavior of functions.


## are 'let' and 'const' declarations Hoisted?

let and const are hoisted - It can be said that they are in the temporal dead zone for the time being

Yes, both `let` and `const` declarations are hoisted in JavaScript, but there's a key difference in how they are hoisted compared to variables declared with `var`.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or function before it's declared in the code.

Here's an example to illustrate the hoisting behavior of `let`:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // Outputs: 5
```

Even though the `console.log(x)` appears before the `let x = 5` statement, a `ReferenceError` is thrown because the variable `x` is in the temporal dead zone until the `let` statement is encountered during execution.

The key difference between `let` and `const` regarding hoisting is that variables declared with `const` are also hoisted, but unlike `let`, they are not initialized to `undefined`. Instead, they remain in the temporal dead zone until the actual `const` declaration is reached in the code.

Here's an example:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 10;
console.log(y); // Outputs: 10
```

In this case, just like with `let`, the `console.log(y)` before the `const y = 10` statement throws a `ReferenceError` because `y` is in the temporal dead zone. The variable `y` is hoisted, but it's not initialized until the `const` declaration is reached in the code.


## Syntax error, Reference Error and Type Error
In JavaScript, `ReferenceError`, `TypeError`, and `SyntaxError` are three distinct error types that can occur during the execution of a program. Each of these errors indicates a specific issue with the code.

1. **ReferenceError:**
   - A `ReferenceError` occurs when you try to reference a variable or function that has not been declared.
   - Example:

     ```javascript
     console.log(myVariable); // ReferenceError: myVariable is not defined
     ```

     This error happens when you attempt to use a variable or function before it has been declared or if you misspell a variable name.

2. **TypeError:**
   - A `TypeError` occurs when an operation is performed on a value of the wrong type or when a value does not have the expected properties or methods.
   - Example:

     ```javascript
     let x = "Hello";
     x(); // TypeError: x is not a function
     ```

     This error can occur when trying to call a non-function, accessing properties on `null` or `undefined`, or using an operator on incompatible types, among other scenarios.

3. **SyntaxError:**
   - A `SyntaxError` occurs when there is a mistake in the structure of the code, making it invalid from a syntactic point of view.
   - Example:

     ```javascript
     if (true) {
       console.log("Syntax error" // Missing closing parenthesis
     }
     ```

     This error is typically triggered by syntax mistakes like missing parentheses, braces, or semicolons, or using reserved words incorrectly.

In summary:
- `ReferenceError` is thrown when trying to reference an undeclared variable or function.
- `TypeError` is thrown when there is an attempt to perform an operation on a value of an inappropriate type.
- `SyntaxError` is thrown when the structure of the code violates the language syntax rules.

Understanding these error types can be helpful for debugging and fixing issues in your JavaScript code.

## Temporal Dead Zone
The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when trying to access a variable before it has been declared with the `let` or `const` keyword. In other words, the temporal dead zone is the time between the start of the current scope and the point where the variable is declared.

Consider the following example:

```javascript
console.log(myVariable); // ReferenceError: myVariable is not defined

let myVariable = "Hello, world!";
```

In this example, the `console.log` statement is attempting to access `myVariable` before it has been declared with `let`. This leads to a `ReferenceError` because the variable is in the temporal dead zone at that point.

The temporal dead zone exists to catch cases where a variable is accessed before its declaration, which can help prevent bugs and make code more predictable. It's a specific behavior associated with variables declared with `let` and `const` but not with variables declared with `var`.

It's important to note that the temporal dead zone is not a physical or explicit zone in the code but rather a conceptual region of code execution where accessing the variable would result in an error. The variable exists in the scope, but it cannot be accessed until after its declaration.

Here's an example to illustrate the temporal dead zone more explicitly:

```javascript
console.log(x); // ReferenceError: x is not defined

if (true) {
  // Temporal Dead Zone starts
  console.log(x); // ReferenceError: x is not defined
  let x = 5; // Variable x is declared
  // Temporal Dead Zone ends
  console.log(x); // Outputs: 5
}
```

In this example, the temporal dead zone for variable `x` starts at the beginning of the block and ends after the declaration. Trying to access `x` within the temporal dead zone results in a `ReferenceError`.

## Block Scope 
A block is also known as compound statement.

let and const are block scoped.

We group multiple statements together where JS expects one statement.

```javascript 
{
   var a = 10;
   let b = 20;
   const c = 30;

   console.log(a);
   console.log(b);
   console.log(c);
}
   console.log(a);
   console.log(b);
   console.log(c);

```
This is an example of a block. Here the let and const have there own scope.

Block scope refers to the area within a program where a variable is accessible. In programming languages like JavaScript, variables declared with the `var` keyword have function scope, meaning they are only accessible within the function where they are declared. However, with the introduction of `let` and `const` in ECMAScript 6 (ES6), block scope was introduced.

Block scope means that a variable is only accessible within the block (a pair of curly braces `{}`) where it is defined. This is in contrast to function scope, where the variable is only accessible within the function where it is defined.

Here's an example in JavaScript:

```javascript
function exampleFunction() {
  if (true) {
    var functionScopedVariable = "I am function-scoped";
    let blockScopedVariable = "I am block-scoped";
    const alsoBlockScoped = "So am I";
  }

  console.log(functionScopedVariable); // This works
  // console.log(blockScopedVariable); // This would result in an error
  // console.log(alsoBlockScoped); // This would also result in an error
}

exampleFunction();
```

In this example, `functionScopedVariable` is accessible throughout the entire `exampleFunction` because it's declared with `var` and has function scope. On the other hand, `blockScopedVariable` and `alsoBlockScoped` are only accessible within the block where they are defined.

Block-scoped variables (declared with `let` and `const`) have the advantage of reducing the risk of unintended variable reassignments and make the code easier to reason about, especially in complex code structures.


## Shadowing in JS
In JavaScript, "shadowing" refers to the situation where a variable declared within a certain scope has the same name as a variable in an outer scope. This can lead to unexpected behavior, as the inner variable "shadows" or takes precedence over the outer variable within its scope.

Here's an example to illustrate shadowing:

```javascript
let x = 10; // Outer variable

function exampleFunction() {
  let x = 20; // Inner variable, shadows the outer variable within this function's scope
  console.log(x); // This will print 20, not 10
}

exampleFunction();

console.log(x); // This will print 10, as it refers to the outer variable
```

In this example, the inner variable `x` within the `exampleFunction` function shadows the outer variable `x`. When you reference `x` inside the function, it refers to the inner variable, not the outer one. However, outside the function, the outer variable is still accessible.

Shadowing can sometimes lead to confusion and bugs in code because it might not be immediately apparent which variable is being referred to. It's generally considered good practice to avoid shadowing variables unless there's a specific reason to do so, and it's important to be aware of the scope in which a variable is declared. The introduction of `let` and `const` with block scope in ES6 has helped mitigate some of the issues related to variable shadowing that were more prevalent with the `var` keyword and function scope.

## Closures in JS

Closure are functons which retain their lexical scope and parent lexical scope as well.


A closure in JavaScript is a feature that allows a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished execution. In other words, a closure allows a function to "close over" and remember the environment in which it was created. Closures are a powerful and fundamental concept in JavaScript, and they are commonly used to create private variables, implement data hiding, and manage state in functional programming.

Here's a simple example to illustrate closures:

```javascript
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Create a closure by calling outerFunction and assigning its result to a variable
let closure = outerFunction();

// Call the inner function, which still has access to outerVariable due to closure
closure(); // This will print: "I am from the outer function"
```

In this example, `outerFunction` contains a variable called `outerVariable` and defines an `innerFunction` inside it. When `outerFunction` is called, it returns the `innerFunction`. Even though `outerFunction` has finished executing, the `innerFunction` still has access to `outerVariable` because it forms a closure over the variables in its lexical scope (the scope in which it was defined).

Closures are commonly used in scenarios like event handlers, callbacks, and in situations where you want to create private variables. They provide a way to encapsulate functionality and data, making code more modular and maintainable. Understanding closures is crucial for writing effective and expressive JavaScript code.

### Uses of Closures:
   -  Module Design Patterns
   -  Currying
   -  Functions like once
   -  Memoize
   -  Manitaining state in async world
   -  setTimeouts
   -  Iterators

## setTimeout

## Callback Functions


























# Javascript 2

This is part 2

Node JS installation link : https://nodejs.org/en/download

## What is ECMAscript?

ECMAScript (also known as ES) is a scripting language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. It defines the scripting language features used in web development and serves as the foundation for several programming languages, with JavaScript being the most well-known implementation.

ECMAScript specifies the core features that a scripting language should provide and how those features should be implemented. It includes syntax, types, statements, keywords, operators, and objects. The specification also defines the behavior of the runtime environment that hosts the scripting language, such as web browsers.

JavaScript, as an implementation of ECMAScript, is widely used for web development to create interactive and dynamic websites. Over the years, ECMAScript has evolved through various versions, with new features and enhancements added to each iteration. Developers often refer to specific ECMAScript versions when discussing language features and compatibility, such as ES5, ES6 (also known as ECMAScript 2015), ES2016, ES2017, ES2018, ES2019, ES2020, and so on. Each new version typically introduces improvements and additions to the language, empowering developers to write more efficient and expressive code.


## let Vs Var Vs Const

In JavaScript, there is a significant difference between `let` and `var` when declaring variables:

1. **var**: Variables declared with `var` are function-scoped or globally-scoped. They can be redeclared and updated within their scope. However, they are subject to hoisting, which means the variable declaration is moved to the top of its function or global scope during compilation.

    ```javascript
    var x = 5;
    if (true) {
        var x = 10; // This reassigns the outer 'x'
        console.log(x); // Output: 10
    }
    console.log(x); // Output: 10
    ```

2. **let**: Variables declared with `let` are block-scoped. They are not hoisted to the top of their scope, and attempting to redeclare them within the same scope results in a syntax error. Additionally, they support a concept called "temporal dead zone" (TDZ), where referencing a `let` variable before its declaration within the same block results in a runtime error.

    ```javascript
    let y = 5;
    if (true) {
        let y = 10; // This creates a new 'y' within the block
        console.log(y); // Output: 10
    }
    console.log(y); // Output: 5
    ```

In summary:

- Use `var` for variables that need to be function-scoped or globally-scoped, but be cautious of potential issues with hoisting and redeclaration.
- Use `let` for variables that need to be block-scoped, providing better control over variable visibility and preventing unintentional redeclaration.


## Datatypes in JS

JavaScript is a dynamically typed language, meaning that variables can hold values of any data type without requiring explicit declaration. Here are the main data types in JavaScript:

1. **Primitive Types**:
   - **Number**: Represents numeric values, including integers and floating-point numbers.
   - **String**: Represents sequences of characters, enclosed in single (`'`) or double (`"`) quotes.
   - **Boolean**: Represents a logical value, either `true` or `false`.
   - **Undefined**: Represents a variable that has been declared but not assigned a value.
   - **Null**: Represents the intentional absence of any object value.
   - **Symbol (ES6+)**: Represents unique identifiers, primarily used as object property keys.

2. **Non-primitive (Reference) Types**:
   - **Object**: Represents a collection of key-value pairs (properties and methods). Objects can be created with the `new Object()` syntax, object literals `{}`, or with constructor functions.
   - **Array**: Represents a list of elements. Arrays can hold values of any type and are created using square brackets `[]`.
   - **Function**: Represents executable code. Functions can be defined using function declarations, function expressions, arrow functions (ES6+), or as methods of objects.
   - **Date**: Represents dates and times. Date objects are created with the `new Date()` constructor.
   - **RegExp**: Represents regular expressions for matching patterns in strings. RegExp objects are created with the `new RegExp()` constructor or with a regular expression literal.
   - **Map, Set, WeakMap, WeakSet (ES6+)**: Specialized data structures for storing key-value pairs (Map), unique values (Set), or weakly held object references (WeakMap, WeakSet).

JavaScript's dynamic typing allows variables to change types dynamically during execution, which can sometimes lead to unexpected behavior if not handled carefully. Additionally, ES6 introduced features like `let` and `const` for variable declaration, providing more control over variable scoping and immutability.


### Note

What is type of Null?

Type of Null is Object

https://stackoverflow.com/questions/18808226/why-is-typeof-null-object

## Loops
In JavaScript, there are several types of loops commonly used for iterating over arrays, objects, or executing code repeatedly. The main types of loops in JavaScript are:

1. **for loop**: It repeats a block of code a specified number of times.
   ```javascript
   for (initialization; condition; increment/decrement) {
       // code to be executed
   }
   ```

2. **while loop**: It repeats a block of code while a specified condition is true.
   ```javascript
   while (condition) {
       // code to be executed
   }
   ```

3. **do...while loop**: Similar to the while loop, but the code block is executed once before the condition is tested.
   ```javascript
   do {
       // code to be executed
   } while (condition);
   ```

4. **for...in loop**: It iterates over the enumerable properties of an object, in arbitrary order.
   ```javascript
   for (variable in object) {
       // code to be executed
   }
   ```
   ```javascript
      const person = {
         name: 'John',
         age: 30,
         city: 'New York'
      };

      for (let key in person) {
         console.log(`${key}: ${person[key]}`);
      }

   ```

5. **for...of loop**: Introduced in ES6, it iterates over iterable objects like arrays, strings, maps, sets, etc.
   ```javascript
   for (variable of iterable) {
       // code to be executed
   }
   ```

   ```javascript
      const colors = ['red', 'green', 'blue'];

      for (let color of colors) {
         console.log(color);
      }

   ```
Each type of loop has its own use cases and advantages depending on the specific scenario you're dealing with.

## Function
In JavaScript, there are several ways to define functions. Here are the most common ones:

1. **Function Declaration**:
   This is the most common and traditional way of defining a function. It starts with the `function` keyword followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.

   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }
   ```

2. **Function Expression**:
   A function expression defines a function as part of an expression. It can be stored in a variable, passed as an argument to another function, or used as an IIFE (Immediately Invoked Function Expression).

   ```javascript
   const greet = function(name) {
       return `Hello, ${name}!`;
   };
   ```

3. **Arrow Function** (ES6):
   Arrow functions provide a concise syntax for writing functions. They are especially useful for short anonymous functions.

   ```javascript
   const greet = (name) => {
       return `Hello, ${name}!`;
   };
   ```

   For single-line functions with a single return statement, you can omit the curly braces and the `return` keyword:

   ```javascript
   const greet = (name) => `Hello, ${name}!`;
   ```

4. **Function Constructor**:
   While less common and not recommended due to potential security risks, you can create functions using the Function constructor.

   ```javascript
   const greet = new Function('name', 'return "Hello, " + name + "!"');
   ```

Each of these methods has its own use cases and considerations. Function declarations and expressions are the most commonly used, while arrow functions provide a more concise syntax, especially for short anonymous functions.

## Strings in JS

In JavaScript, strings are used to represent textual data. They can contain letters, numbers, symbols, and even special characters. Here are some key points about strings in JavaScript:

1. **String Declaration**:
   You can declare strings using single quotes (`'`) or double quotes (`"`). Both are equally valid and can be used interchangeably.

   ```javascript
   let str1 = 'Hello, world!';
   let str2 = "This is a string.";
   ```

2. **String Concatenation**:
   You can concatenate strings using the `+` operator.

   ```javascript
   let firstName = 'John';
   let lastName = 'Doe';
   let fullName = firstName + ' ' + lastName; // fullName will be 'John Doe'
   ```

3. **String Length**:
   You can get the length of a string using the `length` property.

   ```javascript
   let str = 'Hello';
   console.log(str.length); // Output: 5
   ```

4. **Accessing Characters**:
   Individual characters in a string can be accessed using bracket notation with the character's index.

   ```javascript
   let str = 'Hello';
   console.log(str[0]); // Output: 'H'
   ```
5. **Template Literals** (ES6):
   Template literals allow for easier string interpolation and multiline strings. They are enclosed by backticks (`` ` ``) and can contain placeholders `${}` for embedding expressions.

   ```javascript
   let name = 'John';
   let greeting = `Hello, ${name}!`;
   ```

6. **String Methods**:
   JavaScript provides numerous built-in methods for manipulating strings, such as `toUpperCase()`, `toLowerCase()`, `charAt()`, `slice()`, `indexOf()`, `substring()`, `replace()`, `split()`, and many more.

   ```javascript
   let str = 'Hello, world!';
   console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'
   console.log(str.indexOf('world')); // Output: 7
   console.log(str.slice(7)); // Output: 'world!'
   ```

Strings are immutable in JavaScript, meaning once they are created, they cannot be changed. Any operation that appears to modify a string actually creates a new string. Therefore, methods like `toUpperCase()` or `replace()` do not change the original string; they return a new string with the desired modifications.

## Common String methods

Certainly! Here are examples of various string methods available in JavaScript:

1. **toUpperCase()**: Converts the string to uppercase.
   ```javascript
   let str = 'hello';
   console.log(str.toUpperCase()); // Output: 'HELLO'
   ```

2. **toLowerCase()**: Converts the string to lowercase.
   ```javascript
   let str = 'WORLD';
   console.log(str.toLowerCase()); // Output: 'world'
   ```

3. **charAt()**: Returns the character at a specified index.
   ```javascript
   let str = 'Hello';
   console.log(str.charAt(0)); // Output: 'H'
   ```

4. **slice()**: Extracts a section of a string and returns it as a new string.
   ```javascript
   let str = 'Hello, world';
   console.log(str.slice(7)); // Output: 'world'
   ```

5. **indexOf()**: Returns the index within the calling string object of the first occurrence of the specified value.
   ```javascript
   let str = 'hello';
   console.log(str.indexOf('e')); // Output: 1
   ```

6. **substring()**: Returns the part of the string between the start and end indexes, or to the end of the string.
   ```javascript
   let str = 'Hello, world';
   console.log(str.substring(7)); // Output: 'world'
   ```

7. **replace()**: Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
   ```javascript
   let str = 'Hello, world';
   console.log(str.replace('world', 'John')); // Output: 'Hello, John'
   ```

8. **split()**: Splits a string into an array of substrings based on a specified separator.
   ```javascript
   let str = 'apple,banana,grape';
   console.log(str.split(',')); // Output: ['apple', 'banana', 'grape']
   ```

9. **trim()**: Removes whitespace from both ends of a string.
   ```javascript
   let str = '   Hello, world   ';
   console.log(str.trim()); // Output: 'Hello, world'
   ```

10. **startsWith()**: Checks if a string starts with a specified substring.
   ```javascript
   let str = 'Hello, world';
   console.log(str.startsWith('Hello')); // Output: true
   ```

11. **endsWith()**: Checks if a string ends with a specified substring.
   ```javascript
   let str = 'Hello, world';
   console.log(str.endsWith('world')); // Output: true
   ```

12. **includes()**: Checks if a string contains the specified value.
   ```javascript
   let str = 'Hello, world';
   console.log(str.includes('world')); // Output: true
   ```

These are just some of the most commonly used string methods in JavaScript. There are many more available, each serving a different purpose in manipulating and working with strings.

## All String Methods

Here's the list of all string methods in JavaScript along with one-line definitions:

1. charAt(): Returns the character at the specified index.
2. charCodeAt(): Returns the Unicode value of the character at the specified index.
3. codePointAt(): Returns the Unicode code point of the character at the specified index.
4. concat(): Combines the text of two or more strings and returns a new string.
5. endsWith(): Checks if a string ends with a specified substring.
6. fromCharCode(): Converts Unicode values to characters.
7. includes(): Checks if a string contains the specified value.
8. indexOf(): Returns the index within the calling string object of the first occurrence of the specified value.
9. lastIndexOf(): Returns the index within the calling string object of the last occurrence of the specified value.
10. localeCompare(): Compares two strings in the current locale.
11. match(): Retrieves the result of matching a string against a regular expression.
12. matchAll(): Returns an iterator of all results matching a string against a regular expression.
13. normalize(): Returns the Unicode Normalization Form of a given string.
14. padEnd(): Pads the current string with a given string to a specified length from the end.
15. padStart(): Pads the current string with a given string to a specified length from the start.
16. repeat(): Returns a new string with a specified number of copies of the string.
17. replace(): Replaces a specified value with another value in a string.
18. search(): Searches a string for a specified value and returns the position of the match.
19. slice(): Extracts a section of a string and returns it as a new string.
20. split(): Splits a string into an array of substrings based on a specified separator.
21. startsWith(): Checks if a string starts with a specified substring.
22. substr(): Returns the characters in a string beginning at the specified location through the specified number of characters.
23. substring(): Returns the characters in a string between two indexes into the string.
24. toLocaleLowerCase(): Converts a string to lowercase, according to the host's current locale.
25. toLocaleUpperCase(): Converts a string to uppercase, according to the host's current locale.
26. toLowerCase(): Converts a string to lowercase letters.
27. toString(): Returns the string representation of an object.
28. toUpperCase(): Converts a string to uppercase letters.
29. trim(): Removes whitespace from both ends of a string.
30. trimEnd(): Removes trailing whitespace from a string.
31. trimStart(): Removes leading whitespace from a string.
32. valueOf(): Returns the primitive value of a String object.

These methods provide various functionalities for working with strings, such as manipulation, searching, comparison, and more.


## Maps & Filters in JS

In JavaScript, "filters" and "maps" are two important concepts when working with arrays.

### 1. Array.prototype.filter() Method:

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**
```javascript
const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
```

- `callback`: A function to test each element of the array. Return `true` to keep the element, `false` otherwise. It takes three arguments:
  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `filter()` was called upon.

- `thisArg` (optional): Value to use as `this` when executing `callback`.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

### 2. Array.prototype.map() Method:

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Syntax:**
```javascript
const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg])
```

- `callback`: Function that produces an element of the new array, taking three arguments:
  - `currentValue`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `map()` was called upon.

- `thisArg` (optional): Value to use as `this` when executing `callback`.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

These are fundamental methods in JavaScript for manipulating arrays. `filter()` is useful for selecting elements that meet certain criteria, while `map()` is great for transforming each element in an array according to a given function. Both methods do not modify the original array and return new arrays instead.

# CONTINUE HERE - JS APIS

## Arrow functions in JS

Arrow functions in JavaScript provide a concise syntax for writing functions. Introduced in ES6, they are particularly useful for creating anonymous functions. Here's the general syntax and key points:

### Syntax:
```javascript
const functionName = (parameters) => {
  // Function body
  return result;
};
```

### Example:
```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

#### Or, even shorter for one-liners:
If the function body is just a return statement, you can omit the curly braces `{}` and the `return` keyword.
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Key Features of Arrow Functions:
1. **Concise Syntax**: Arrow functions are more compact than regular functions.
   
   - Traditional Function:
     ```javascript
     function add(a, b) {
       return a + b;
     }
     ```
   - Arrow Function:
     ```javascript
     const add = (a, b) => a + b;
     ```

2. **Lexical `this` Binding**: Arrow functions do not have their own `this` context. They inherit `this` from the surrounding (lexical) scope, which makes them useful in situations like event handlers and callbacks.

   Example of a problem in traditional functions:
   ```javascript
   function Person() {
     this.age = 0;
   
     setInterval(function() {
       this.age++; // 'this' is not the Person object here
       console.log(this.age);
     }, 1000);
   }
   
   const person = new Person();
   ```

   Using an arrow function:
   ```javascript
   function Person() {
     this.age = 0;
   
     setInterval(() => {
       this.age++; // 'this' refers to the Person object
       console.log(this.age);
     }, 1000);
   }
   
   const person = new Person();
   ```

3. **Cannot be used as constructors**: Arrow functions cannot be used with the `new` keyword. If you need to create a constructor function, use a traditional function.

4. **No `arguments` object**: Arrow functions do not have their own `arguments` object. If you need to use `arguments`, you must use a traditional function or the rest parameter syntax (`...args`).

Let me know if you'd like more examples or a deeper dive into any specific part!


## JSON - Javascript Object Notation

JSON stands for JavaScript Object Notation. It's a lightweight data-interchange format that is easy for humans to read and write, and it's also easy for machines to parse and generate. JSON is primarily used to transmit data between a server and a web application as an alternative to XML (eXtensible Markup Language).

JSON syntax is based on a subset of JavaScript programming language, but it's language-independent, meaning it can be used with any programming language. It consists of two main structures:

1. **Objects**: An object is an unordered collection of key/value pairs. The keys are strings, and the values can be strings, numbers, arrays, objects, booleans, or null. Objects are enclosed in curly braces `{}`.

Example:
```json
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "hobbies": ["reading", "cooking", "hiking"]
}
```

2. **Arrays**: An array is an ordered list of values. Values can be strings, numbers, arrays, objects, booleans, or null. Arrays are enclosed in square brackets `[]`.

Example:
```json
[
  "apple",
  "banana",
  "orange"
]
```

JSON is commonly used in web development for transmitting data between a server and a client in APIs (Application Programming Interfaces). It's also widely used for configuration files and for storing complex data structures. JSON's simplicity and human-readability make it a popular choice for data interchange in various applications and platforms.

## Common JSON functions in JS

In JavaScript, there are several functions and methods commonly used to work with JSON data. Here are some of the most commonly used ones:

1. **JSON.stringify(Object)**: This function is used to convert a JavaScript object into a JSON string.

```javascript
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"John","age":30}
```

2. **JSON.parse(JSON)**: This function is used to parse a JSON string and convert it into a JavaScript object.

```javascript
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj); // Output: { name: "John", age: 30 }
```

3. **JSON.stringify() with Replacer Function**: You can use a replacer function as the second argument to `JSON.stringify()` to customize the serialization process.

```javascript
const obj = { name: "John", age: 30, password: "secret" };
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === "password") {
    return undefined; // Exclude password from serialization
  }
  return value;
});
console.log(jsonString); // Output: {"name":"John","age":30}
```

4. **JSON.parse() with Reviver Function**: You can use a reviver function as the second argument to `JSON.parse()` to customize the parsing process.

```javascript
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === "age") {
    return value + 10; // Increment age by 10 during parsing
  }
  return value;
});
console.log(obj); // Output: { name: "John", age: 40 }
```

These are some of the common functions and methods used for working with JSON data in JavaScript. They allow you to easily serialize JavaScript objects into JSON strings and vice versa, as well as customize the serialization and parsing process if needed.


## Anonymous functions in JS

In JavaScript, an anonymous function is a function that does not have a name. It is often defined inline, usually as a parameter to another function or assigned to a variable. Anonymous functions are commonly used in situations where a function is needed temporarily or where the function logic is simple and doesn't warrant a named declaration.

Here's an example of an anonymous function:

```javascript
// Anonymous function assigned to a variable
const printMessage = function() {
  console.log('This is an anonymous function');
};

// Invoking the anonymous function
printMessage();
```

In this example, `printMessage` is a variable that holds an anonymous function. The function itself doesn't have a name. We can later call `printMessage()` to execute the function.

Anonymous functions are often used as callback functions:

```javascript
// Anonymous function passed as a callback
setTimeout(function() {
  console.log('This is executed after 1 second');
}, 1000);
```

In this example, an anonymous function is passed as the first argument to `setTimeout`. It will be executed after a delay of 1000 milliseconds.

Arrow functions introduced in ECMAScript 6 provide a shorthand syntax for creating anonymous functions:

```javascript
// Arrow function
const add = (a, b) => {
  return a + b;
};

// Invoking the arrow function
console.log(add(2, 3)); // Outputs: 5
```

Here, `add` is an arrow function that takes two parameters and returns their sum. Arrow functions are concise and often used as anonymous functions, especially in scenarios like array methods or other functional programming constructs.

## Asynchronus vs Synchronus functions

Asynchronous and synchronous functions in JavaScript refer to how they handle time-consuming tasks or operations.

1. **Synchronous Functions**:
   - Synchronous functions execute in sequence, one after the other.
   - When a synchronous function is called, the program waits until that function completes its task before moving on to the next line of code.
   - Synchronous functions are straightforward and easier to understand because they execute in a predictable order.

   Example of a synchronous function:

   ```javascript
   function syncFunction() {
     console.log('This is a synchronous function');
   }

   console.log('Before calling syncFunction');
   syncFunction();
   console.log('After calling syncFunction');
   ```

   In this example, `'Before calling syncFunction'` is logged, then `syncFunction()` is called, and finally `'After calling syncFunction'` is logged. The code executes in a predictable, sequential manner.

2. **Asynchronous Functions**:
   - Asynchronous functions allow the program to continue executing while waiting for long-running tasks to finish.
   - They are typically used for operations that might take some time to complete, such as fetching data from a server, reading files, or waiting for user input.
   - Asynchronous functions don't block the execution of the program, allowing it to perform other tasks while waiting for the asynchronous operation to complete.

   Example of an asynchronous function using a callback:

   ```javascript
   function asyncFunction(callback) {
     setTimeout(function() {
       console.log('This is an asynchronous function');
       callback();
     }, 1000);
   }

   console.log('Before calling asyncFunction');
   asyncFunction(function() {
     console.log('Callback function executed');
   });
   console.log('After calling asyncFunction');
   ```

   In this example, `'Before calling asyncFunction'` is logged, then `asyncFunction()` is called. While waiting for the `setTimeout` to finish (after 1 second), `'After calling asyncFunction'` is logged. Finally, after the timeout, `'This is an asynchronous function'` and `'Callback function executed'` are logged.

Asynchronous functions are crucial for handling operations that involve I/O, networking, or other tasks that may take an unpredictable amount of time to complete, without blocking the main thread of execution. They are commonly used in web development to create responsive and interactive user interfaces.

## Real use of Callbacks

Callbacks are extensively used in JavaScript, particularly in asynchronous programming, where they serve as a mechanism for handling the completion or failure of asynchronous operations. Here are some real-world use cases where callbacks are commonly employed:

1. **Event Handling**: Callbacks are frequently used to handle events in web development. For instance, in an event-driven environment like a browser, you might attach event listeners to DOM elements to respond to user interactions such as clicks, mouse movements, or keyboard inputs. The callback function is invoked when the corresponding event occurs.

   ```javascript
   document.getElementById('myButton').addEventListener('click', function() {
     console.log('Button clicked!');
   });
   ```

2. **Asynchronous Operations**: Callbacks are essential for handling asynchronous operations like making HTTP requests, reading files, or executing timed operations. Instead of blocking the program's execution, asynchronous functions accept a callback function that is invoked once the operation completes.

   ```javascript
   fetchDataFromServer(function(data) {
     console.log('Data received:', data);
   });
   ```

3. **Iterating Arrays**: Callbacks are commonly used in array iteration methods such as `forEach`, `map`, `filter`, and `reduce`. They allow you to perform operations on each element of an array and provide flexibility in defining the logic for processing array elements.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function(number) {
     console.log(number);
   });
   ```

4. **Node.js Development**: In Node.js, a server-side JavaScript runtime, callbacks are extensively used for handling I/O operations, networking, and other asynchronous tasks. For example, when reading from or writing to a file, you provide a callback function to handle the result of the operation.

   ```javascript
   const fs = require('fs');
   fs.readFile('example.txt', 'utf8', function(err, data) {
     if (err) {
       console.error('Error reading file:', err);
     } else {
       console.log('File content:', data);
     }
   });
   ```

5. **Promises and Async/Await**: Although not strictly callbacks in the traditional sense, promises and async/await syntax in JavaScript are built on top of callbacks. Promises encapsulate asynchronous operations and provide a cleaner way to handle asynchronous code compared to callbacks. Async/await is a syntax for writing asynchronous code that looks synchronous, making it easier to reason about and maintain.

Callbacks play a crucial role in JavaScript programming, enabling developers to write efficient, non-blocking code and handle asynchronous tasks effectively.

## Promises 

In JavaScript, promises are objects that represent the eventual completion or failure of an asynchronous operation. They are commonly used for handling asynchronous operations such as fetching data from a server, reading files, or any operation that might take some time to complete.

Promises have three states:

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation was completed successfully.
3. **Rejected**: The operation failed.

The primary advantage of using promises is that they provide a cleaner and more structured way to deal with asynchronous code compared to traditional callback-based approaches. Promises allow you to chain multiple asynchronous operations together, making the code more readable and maintainable.

Here's a basic example of how promises work:

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    // Simulate a successful operation
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Operation succeeded
    } else {
      reject(new Error('Operation failed')); // Operation failed
    }
  }, 1000);
});

// Consuming the promise using .then() and .catch()
myPromise.then((result) => {
  console.log('Promise fulfilled with result:', result);
}).catch((error) => {
  console.error('Promise rejected with error:', error);
});
```

In this example:

- We create a new promise `myPromise`, which represents an asynchronous operation that resolves with a random number after 1 second.
- We use `.then()` to specify what to do if the promise is fulfilled (i.e., the operation succeeds) and `.catch()` to specify what to do if the promise is rejected (i.e., the operation fails).

Promises can also be chained together using `.then()`:

```javascript
myPromise
  .then((result) => {
    console.log('First promise fulfilled with result:', result);
    // Return a new promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Second promise resolved');
      }, 1000);
    });
  })
  .then((result) => {
    console.log('Second promise fulfilled with result:', result);
  })
  .catch((error) => {
    console.error('Promise rejected with error:', error);
  });
```

This chaining allows you to execute multiple asynchronous operations sequentially.


## Async Awaits
Async/await is a modern JavaScript feature introduced in ECMAScript 2017 (ES8) that provides a cleaner and more readable syntax for writing asynchronous code compared to traditional callback-based and promise-based approaches. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain.

Here's how async/await works:

1. **Async Function Declaration**: You declare a function as `async` if you want to use `await` inside it. An async function always returns a promise, which resolves with the return value of the function.

   ```javascript
   async function myAsyncFunction() {
     // Asynchronous code using await
   }
   ```

2. **Await Expression**: Inside an async function, you use the `await` keyword to pause the execution of the function until the promise is resolved. It allows you to work with promises as if they were synchronous.

   ```javascript
   async function fetchData() {
     const data = await fetch('https://api.example.com/data');
     return data.json();
   }
   ```

   In this example, `fetchData()` is an async function that pauses execution until the promise returned by `fetch()` resolves. The `await` keyword makes the code appear synchronous, even though `fetch()` is asynchronous.

3. **Error Handling**: You can use `try`/`catch` blocks to handle errors thrown by asynchronous operations inside async functions.

   ```javascript
   async function fetchData() {
     try {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       return data;
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   }
   ```

4. **Using Async/Await with Promises**: You can also use async/await with promises. The `await` keyword can be used with any promise-based function or operation.

   ```javascript
   async function myAsyncFunction() {
     const result = await myPromiseFunction();
     console.log(result);
   }
   ```

   In this example, `myPromiseFunction()` returns a promise, and `await` pauses execution until the promise is resolved.

Async/await simplifies asynchronous code by allowing developers to write code that closely resembles synchronous code, making it easier to read, write, and debug asynchronous JavaScript. However, it's important to note that async/await is built on top of promises and does not replace them; instead, it provides a more elegant way to work with promises.


## JS architecture

JavaScript browser architecture involves multiple components working together to handle various tasks, especially in web development. Here's an overview of the key components:

1. **JavaScript Engine**: This is the core of the browser's JavaScript processing. It includes the engine itself (like V8 in Chrome) and additional components for memory management, garbage collection, etc. The engine parses and executes JavaScript code.

2. **Call Stack**: The call stack is a mechanism used for managing function invocation in JavaScript. When a function is called, it's added to the top of the stack, and when it returns, it's removed from the stack. This mechanism follows the Last-In-First-Out (LIFO) principle.

3. **Event Loop**: The event loop is responsible for handling asynchronous operations in JavaScript. It continuously checks the call stack and the task queue to see if there are any tasks waiting to be processed. If the call stack is empty, it takes tasks from the queue and pushes them onto the stack for execution.

4. **Task Queue/Microtask Queue**: The task queue (also known as the message queue) holds tasks that are scheduled to be executed by the event loop. Tasks in the task queue are processed after the call stack is empty. There's also a microtask queue, which holds microtasks (such as promises) that have higher priority than regular tasks.

5. **Web APIs**: Web APIs are provided by the browser to allow JavaScript to interact with the browser environment. Examples include the DOM (Document Object Model), XMLHttpRequest, Fetch API, setTimeout, setInterval, etc. When you call these APIs, they perform asynchronous operations (like fetching data or setting timers) and then put corresponding tasks in the task queue when they are complete.

Here's a simplified overview of how these components interact:

- When JavaScript code is executed, it goes through the JavaScript engine and any synchronous tasks are added to the call stack.
- If there are asynchronous tasks (like fetching data or setting timers), they are delegated to the Web APIs.
- When these tasks are complete, they are placed in the task queue.
- The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes tasks from the task queue and pushes them onto the call stack for execution.
- This process continues, allowing JavaScript to handle both synchronous and asynchronous tasks efficiently.

Understanding this architecture is crucial for writing efficient and responsive JavaScript code, especially when dealing with asynchronous operations in web development.



## What is ECMA Script
ECMAScript (often abbreviated as ES) is a scripting language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. The most well-known implementation of ECMAScript is JavaScript. ECMAScript provides the rules, details, and guidelines that a scripting language must follow to be considered ECMAScript compliant. JavaScript, JScript, and ActionScript are examples of scripting languages that conform to the ECMAScript standard.

The standard defines the core features of the language such as syntax, types, statements, keywords, and functions, but it does not define the APIs for interacting with the environment (such as the web browser or Node.js runtime), leaving those to be defined by other standards like the W3C or WHATWG for web browsers, or Node.js for server-side JavaScript.

Since its inception, ECMAScript has gone through multiple versions, each introducing new features and improvements. Notable versions include ECMAScript 3, 5, 6 (also known as ECMAScript 2015), 7, 8, 9, 10, 11, 12, and the latest at the time of my last training data, ECMAScript 2021. Each new version typically adds features to the language, aiming to improve developer productivity, maintainability, and performance.

https://tc39.es/ecma262/#sec-numbers-and-dates

## What is JS?

JavaScript: The Implementation 
   -   JavaScript is a scripting language that conforms to the ECMAScript specification.
   It's the most widely known and used implementation of ECMAScript.
   -  Beyond ECMAScript: JavaScript includes additional features that are not part of
   the ECMAScript specification, like the Document Object Model (DOM)   manipulation, which is crucial for web development but is not defined by ECMAScript.

   #### Note : 
   - V8 User by google chrome - C 
   - SpiderMonkey User by firefox - C + Rust

# What is Node.js

Node Js is not a language. Its a runtime which runs the JS code

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, typically on a server. Node.js enables the execution of JavaScript on the server-side, providing a platform for building scalable network applications.

Key features and capabilities of Node.js include:

1. **Event-driven architecture**: Node.js is based on an event-driven, non-blocking I/O model, which allows for highly scalable and efficient applications. It utilizes asynchronous, event-driven programming, allowing it to handle multiple concurrent connections without getting blocked.

2. **V8 JavaScript engine**: Node.js is built on Google's V8 JavaScript engine, which provides high-performance execution of JavaScript code.

3. **npm (Node Package Manager)**: npm is the default package manager for Node.js, providing a vast ecosystem of open-source libraries and tools that can be easily installed and managed.

4. **Server-side scripting**: Node.js enables developers to write server-side applications in JavaScript, allowing for a unified language across the entire application stack.

5. **Cross-platform**: Node.js is designed to run on various operating systems, including Windows, macOS, and Linux, making it suitable for developing applications that need to be deployed across different environments.

6. **Scalability**: Node.js is well-suited for building highly scalable applications due to its non-blocking I/O model and event-driven architecture.

7. **Community and ecosystem**: Node.js has a large and active community of developers, contributing to its extensive ecosystem of modules and tools.

Node.js is commonly used for developing web servers, RESTful APIs, real-time applications (such as chat applications and online gaming platforms), microservices, and more. It has gained widespread adoption in both startups and large enterprises due to its performance, scalability, and developer-friendly features.

# What is Bun

Other than the fact that JS is single threaded,Node.js is slow (multiple reasons for it)
Some smart people said they wanted to re-write the JS runtime for the backend and introduced Bun
It is a significantly faster runtime. It is written in Zig
https://github.com/oven-sh/bun


## What can you do with Node.JS

1. Create clis
2. Create a video player
3. Create a game
4. Create an HTTP Server



# Express JS
Express.js, often referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed for building single-page, multi-page, and hybrid web applications.

Express.js simplifies the process of building web applications by providing a wide range of HTTP utility methods and middleware, which can be used to create powerful APIs, web servers, and more. It is known for its simplicity, flexibility, and performance.

Key features of Express.js include:

1. **Middleware**: Express.js utilizes middleware to handle requests. Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. This allows developers to write modular and reusable code to handle various aspects of the request-response cycle.

2. **Routing**: Express.js provides a simple and expressive way to define routes for handling different HTTP requests (GET, POST, PUT, DELETE, etc.) to different URL paths. Routes can be chained together to create a modular and organized application structure.

3. **Template Engines**: Express.js supports various template engines, such as Pug (formerly known as Jade), EJS (Embedded JavaScript), Handlebars, etc., allowing developers to dynamically generate HTML content based on data.

4. **Static File Serving**: Express.js allows serving static files (such as HTML, CSS, images, etc.) using built-in middleware like `express.static`.

5. **Error Handling**: Express.js provides a robust error handling mechanism to handle errors that occur during the execution of the application.

6. **Integration with Connect Middleware**: Express.js is built on top of the Connect middleware framework, which means it can seamlessly integrate with a wide range of existing Connect middleware modules.

7. **Performance**: Express.js is designed to be lightweight and fast, making it suitable for building high-performance web applications.

Overall, Express.js is widely used in the Node.js ecosystem and is popular among developers for building web applications due to its simplicity, flexibility, and extensive ecosystem of middleware and plugins.

## Things that Client or Server need to take care during HTTP

1. From Client Side:
   -  Protocol to be follower
   -  Address (URL/IP/Protocol)
   -  Route
   -  Headers, body and Query parameters
   -  Method
2. From Server Side: 
   -  Response headers
   -  Response body
   -  Status codes

![alt text](./Code/Src/Client-Server%20explanation.png)


## Code for Express JS in a realtime in Memory user application

```javascript

const express = require("express");
const port = 3000;
const app = express();

const users = [
    {
        name:"Ron",
        kidneyCount:2,
        health:100
    },
    {
        name:"Don",
        kidneyCount:2,
        health:70
    },{
        name:"Frodo",
        kidneyCount:1,
        health:50
    }
];


app.use(express.json());

console.log(users[1].name);

app.get("/",(req,res)=>{
    const name = req.query.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            res.send("Your name is "+users[i].name+" and you have "+users[i].kidneyCount+"and its health is "+users[i].health);
        }
    }
});

app.post('/add-kidney',(req,res)=>{
    const name = req.body.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].kidneyCount++;
            res.send("Kidney added for "+name+"Now the kidney count is "+users[i].kidneyCount);
            res.json(users[i]);
        }
    }
})

app.put('/health-boost',(req,res)=>{
    const name = req.body.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].health = users[i].health+20;
            res.send("Kidney health imporved for "+name+" by "+users[i].health);
            res.json(users[i]);
        }
    }
})

app.delete('/delete',(req,res)=>{
    const name = req.query.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].kidneyCount++;
            res.send("Kidney added for "+name+"Now the kidney count is "+users[i].kidneyCount);
        }
    }
})

app.listen(port);
```

## Different HTTP Handlers in Express JS

In Express.js, a popular web framework for Node.js, different types of calls (or routes) are made to handle various HTTP methods. These methods represent different types of requests made by a client (like a browser) to the server. The most commonly used HTTP methods in Express.js are:

Here’s a more detailed explanation of the different calls made in Express.js, with more extensive code examples:

### 1. **GET Request**:
   - **Purpose**: Fetch data from the server. The server returns the requested data to the client.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Example data
   const users = [
     { id: 1, name: 'John Doe' },
     { id: 2, name: 'Jane Doe' }
   ];

   // GET request to fetch all users
   app.get('/users', (req, res) => {
     res.status(200).json(users); // Responds with the users array in JSON format
   });

   // GET request to fetch a single user by ID
   app.get('/users/:id', (req, res) => {
     const user = users.find(u => u.id === parseInt(req.params.id));
     if (!user) return res.status(404).send('User not found'); // If user not found
     res.status(200).json(user); // Responds with the user data
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use GET when you want to retrieve data from the server, such as getting a list of users or fetching specific user details by ID.

### 2. **POST Request**:
   - **Purpose**: Send data to the server to create a new resource.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Middleware to parse JSON bodies
   app.use(express.json());

   const users = [
     { id: 1, name: 'John Doe' },
     { id: 2, name: 'Jane Doe' }
   ];

   // POST request to add a new user
   app.post('/users', (req, res) => {
     const newUser = {
       id: users.length + 1,  // Auto-incrementing ID
       name: req.body.name    // Getting name from the request body
     };

     users.push(newUser);  // Adding the new user to the array
     res.status(201).json(newUser); // Respond with the new user data and 201 status (Created)
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use POST when creating new resources, like adding a new user, posting a comment, or submitting a form.

### 3. **PUT Request**:
   - **Purpose**: Update an existing resource by sending the full updated data.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   app.use(express.json());

   const users = [
     { id: 1, name: 'John Doe' },
     { id: 2, name: 'Jane Doe' }
   ];

   // PUT request to update a user by ID
   app.put('/users/:id', (req, res) => {
     const user = users.find(u => u.id === parseInt(req.params.id));
     if (!user) return res.status(404).send('User not found');

     // Update the user's name
     user.name = req.body.name;
     res.status(200).json(user); // Respond with the updated user data
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use PUT when you need to update a full resource, for example, replacing all fields in a user profile.

### 4. **PATCH Request**:
   - **Purpose**: Partially update an existing resource by sending only the changed fields.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   app.use(express.json());

   const users = [
     { id: 1, name: 'John Doe', email: 'john@example.com' },
     { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
   ];

   // PATCH request to update only part of a user, e.g., their email
   app.patch('/users/:id', (req, res) => {
     const user = users.find(u => u.id === parseInt(req.params.id));
     if (!user) return res.status(404).send('User not found');

     // Update only the fields that were sent in the request body
     if (req.body.name) user.name = req.body.name;
     if (req.body.email) user.email = req.body.email;

     res.status(200).json(user); // Respond with the updated user data
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use PATCH when you only want to modify part of a resource, such as updating a user's email without affecting other details.

### 5. **DELETE Request**:
   - **Purpose**: Delete a resource from the server.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   const users = [
     { id: 1, name: 'John Doe' },
     { id: 2, name: 'Jane Doe' }
   ];

   // DELETE request to remove a user by ID
   app.delete('/users/:id', (req, res) => {
     const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
     if (userIndex === -1) return res.status(404).send('User not found');

     // Remove the user from the array
     const deletedUser = users.splice(userIndex, 1);
     res.status(200).json(deletedUser); // Respond with the deleted user
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use DELETE when removing resources, such as deleting a user or removing a post.

### 6. **ALL Method**:
   - **Purpose**: Match all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific route.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Handle any HTTP method for /users
   app.all('/users', (req, res) => {
     res.status(200).send('This route handles all HTTP methods');
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Use ALL when you want to handle every kind of request (GET, POST, etc.) to a certain route in a unified way.

### 7. **app.use() Middleware**:
   - **Purpose**: Apply middleware that runs for all requests to a particular route or globally across all routes.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Middleware that runs for every request
   app.use((req, res, next) => {
     console.log(`${req.method} request for ${req.url}`);
     next(); // Pass control to the next middleware or route handler
   });

   // Example routes
   app.get('/users', (req, res) => {
     res.status(200).send('GET request to /users');
   });

   app.post('/users', (req, res) => {
     res.status(201).send('POST request to /users');
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Middleware is often used for logging, authentication, and other tasks that need to happen with every request.

### 8. **Route Parameters**:
   - **Purpose**: Capture dynamic parameters from the URL.
   
   **Example**:
   ```javascript
   const express = require('express');
   const app = express();

   // Capture user ID from the route and respond
   app.get('/users/:id', (req, res) => {
     const userId = req.params.id;
     res.status(200).send(`User ID is: ${userId}`);
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```
   - **Usage**: Route parameters are useful when you need to pass dynamic values like IDs, usernames, etc., as part of the URL.

### 9. **Serving Static Files**:
   - **Purpose**: Serve static assets like images, HTML files, CSS, or JavaScript files.
   
   **Example**:
   ```javascript
   const express = require('express');
   const path = require('path');
   const app = express();

   // Serve static files from the 'public' directory
   app.use(express.static(path.join(__dirname, 'public')));

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

By combining these HTTP methods and route handlers, you can build RESTful APIs or web applications that handle a wide range of client requests.


## Node Mon
NodeMon, or commonly referred to as nodemon, is a utility tool for Node.js applications. It's a development dependency that helps developers in the Node.js ecosystem by automatically restarting the Node application when file changes are detected within the project directory. This capability is particularly useful during development, as it eliminates the need for manual restarting of the server every time changes are made to the codebase.

Nodemon monitors the files in the directory where the Node.js application is running and restarts the server whenever it detects any changes. This includes changes to JavaScript files, configuration files, or any other files the application depends on.

To use nodemon, developers typically install it globally or locally within their Node.js project using npm (Node Package Manager) or Yarn. Then, instead of running their Node.js application directly with `node`, they use `nodemon` to start it. For example:

```bash
nodemon server.js
```

This command will start the Node.js server defined in `server.js` and monitor the files for any changes. If a change is detected, nodemon will automatically restart the server, making the development process smoother and more efficient.

### Starting NodeMon

You can use `npx` to run nodemon without the need for global installation. Here's how you can do it:

```bash
npm install -g nodemon
npx nodemon your_app.js
```

With this command, `npx` will check if nodemon is installed locally within your project, and if not, it will automatically download and execute it. This eliminates the need for a separate installation step. Replace `your_app.js` with the main file of your Node.js application.

Using `npx` with nodemon is particularly useful if you don't want to install nodemon globally or if you're working on a project where you don't want to add nodemon as a local dependency.

## What is NPM & NPX 

### npm (Node Package Manager):

npm, short for Node Package Manager, is the default package manager for Node.js. It is used to install, manage, and share packages of code (JavaScript libraries and tools) for Node.js applications. npm comes bundled with Node.js installations by default.

With npm, you can install packages locally within your project or globally on your system. It also allows you to manage dependencies for your project by creating and maintaining a `package.json` file, which lists all the dependencies your project relies on.

Here's how you can use npm to install packages:

- **Install package locally**:
  ```bash
  npm install package-name
  ```

- **Install package globally**:
  ```bash
  npm install -g package-name
  ```

### npx:

`npx` is a tool that comes with npm (since version 5.2.0) and is used to execute Node packages. It stands for "Node Package Execute." `npx` allows you to run packages from the npm registry without needing to install them globally or locally.

`npx` runs the installed package from either the local `node_modules/.bin` directory or downloads and runs the latest version of the package if it's not already installed. It's particularly handy for running packages for one-off tasks or for trying out new tools without installing them permanently.

Here's how you can use `npx`:

```bash
npx package-name
```

This command will execute the `package-name` command, either from the local `node_modules/.bin` directory or by downloading it if necessary.

For example, you can use `npx` to run `nodemon` without installing it globally:

```bash
npx nodemon your_app.js
```

This command will run `nodemon` on `your_app.js` without needing to install `nodemon` globally or locally beforehand.

## Middlewates in Express JS

In JavaScript, specifically in the context of frameworks like **Express.js**, **middleware** refers to functions that are executed during the lifecycle of a request. Middleware functions have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. 

### Key Points About Middleware:
1. **Middleware Functions** are functions that can:
   - Execute code.
   - Modify the `req` and `res` objects.
   - End the request-response cycle.
   - Call the next middleware function using `next()`, allowing multiple middleware functions to be chained.

2. **Types of Middleware**:
   - **Application-level middleware**: Defined and applied to the whole application.
   - **Router-level middleware**: Attached to specific routes or routers.
   - **Error-handling middleware**: Used to handle errors in the application.
   - **Built-in middleware**: Middleware functions that are included with Express.
   - **Third-party middleware**: External middleware that can be integrated with Express.

### Anatomy of a Middleware Function:
```javascript
function middlewareFunction(req, res, next) {
  // Perform some operation (logging, authentication, etc.)
  console.log('Middleware executed');

  // Call next() to pass control to the next middleware function
  next();
}
```
- The function takes three arguments:
  - `req`: The request object.
  - `res`: The response object.
  - `next`: A function that passes control to the next middleware in the stack.

### Example: Basic Middleware
Here's an example of a basic middleware function that logs the current time for every incoming request:
```javascript
const express = require('express');
const app = express();

// Middleware function to log the current time
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next(); // Pass control to the next middleware/route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Example: Application-Level Middleware
Application-level middleware is bound to the app object using `app.use()` or `app.METHOD()` (where `METHOD` is an HTTP method like GET, POST, etc.).

```javascript
const express = require('express');
const app = express();

// Middleware function that runs for every request
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next(); // Move to the next middleware or route
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Example: Router-Level Middleware
Router-level middleware works the same as application-level middleware but is applied to specific routes or router instances.

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Middleware function specific to this router
router.use((req, res, next) => {
  console.log('Router-level middleware executed');
  next();
});

router.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.use('/api', router); // Attach router to the app

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Example: Error-Handling Middleware
Error-handling middleware has four arguments: `err`, `req`, `res`, and `next`. It is used for catching errors in the application.

```javascript
const express = require('express');
const app = express();

// Example route that throws an error
app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Built-in Middleware in Express:
- **express.static()**: Used to serve static assets such as HTML files, images, and CSS files.
- **express.json()**: Parses incoming requests with JSON payloads.
- **express.urlencoded()**: Parses incoming requests with URL-encoded payloads.

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Built-in middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Built-in middleware to parse JSON bodies
app.use(express.json());

app.post('/data', (req, res) => {
  res.send(`Received JSON data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Third-Party Middleware:
Express allows you to integrate third-party middleware libraries for additional functionality, such as logging, security, and body parsing. Some popular examples include:
- **morgan**: HTTP request logger.
- **helmet**: Security-related HTTP headers.
- **cookie-parser**: Parse cookies attached to client requests.

Example with `morgan`:
```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// Use morgan for logging requests
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Middleware Flow:
Middleware functions are executed in the order they are declared. If you do not call `next()`, the request-response cycle will be halted, and no further middleware or routes will be executed.

- For example:
  ```javascript
  app.use((req, res, next) => {
    console.log('First middleware');
    next();  // Passes control to the next middleware
  });

  app.use((req, res, next) => {
    console.log('Second middleware');
    next();  // Passes control to the next middleware or route handler
  });

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  ```

### Summary:
- Middleware in Express.js is a series of functions that are executed during the request-response cycle.
- It can be used for various purposes, such as modifying the request and response objects, logging, authentication, handling errors, serving static files, etc.
- Middleware functions are executed sequentially, and control is passed using `next()`.
- Express supports application-level, router-level, error-handling, built-in, and third-party middleware. You can chain them to add functionality at various stages of the request lifecycle.

By leveraging middleware effectively, you can modularize tasks such as logging, security, authentication, and error handling, which improves maintainability and scalability in your Express.js applications.


## app.use in Express JS

In **Express.js**, `app.use()` is a method used to mount middleware functions at a specific path (or globally if no path is specified) to handle incoming requests. Middleware functions that are defined using `app.use()` are executed for every request that matches the route, whether it's a GET, POST, PUT, DELETE, or any other HTTP method.

### Syntax:
```javascript
app.use([path], middlewareFunction)
```

- **path**: Optional. Specifies the route where the middleware function should be applied. If no path is specified, it defaults to `'/'`, which means the middleware will be applied to every request.
- **middlewareFunction**: A function that has access to the request (`req`), the response (`res`), and the `next` function to pass control to the next middleware.

### Key Points:
1. **Global Middleware**: If no path is provided, the middleware will be executed for every route.
2. **Route-specific Middleware**: If a path is provided, the middleware will only be executed when the route matches the path.
3. **Order Matters**: The order in which you define `app.use()` matters. Middleware functions are executed sequentially in the order they are declared.

### Example 1: Global Middleware
In this example, the middleware runs for every incoming request.
```javascript
const express = require('express');
const app = express();

// Global middleware applied to every request
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}, Method: ${req.method}`);
  next(); // Call the next middleware function
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
In this case, the middleware logs the request URL and HTTP method for every request made to the server.

### Example 2: Route-specific Middleware
This middleware only runs for requests to routes starting with `/api`.
```javascript
const express = require('express');
const app = express();

// Middleware applied only to /api routes
app.use('/api', (req, res, next) => {
  console.log(`API request made to: ${req.url}`);
  next();
});

app.get('/api/users', (req, res) => {
  res.send('User List');
});

app.get('/api/products', (req, res) => {
  res.send('Product List');
});

app.get('/home', (req, res) => {
  res.send('Home Page'); // Middleware does not apply here
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
Here, the middleware only applies to routes that begin with `/api`. It logs the API request details, but does not run for the `/home` route.

### Example 3: Using `app.use()` for Static Files
Express includes a built-in middleware `express.static()` to serve static files (HTML, CSS, JavaScript, images) from a specified directory.

```javascript
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
In this example, all static files in the `public` directory (such as images, stylesheets, or JavaScript files) will be served at their respective URLs.

### Example 4: Applying Multiple Middlewares
You can use multiple middleware functions in a single `app.use()` by passing an array of functions or by chaining them.

```javascript
const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log('Middleware 1 executed');
  next(); // Move to the next middleware
});

// Second middleware
app.use((req, res, next) => {
  console.log('Middleware 2 executed');
  next(); // Move to the next route or middleware
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
Both middleware functions will run before the `GET /` route is handled.

### Middleware Flow:
Middleware functions are executed in the order they are defined in the code. Each middleware must call `next()` to pass control to the next middleware or route handler; otherwise, the request will hang and never complete.

### Error Handling Middleware
Express also allows you to define custom error-handling middleware using `app.use()`. These middleware functions take four arguments (`err`, `req`, `res`, `next`) and are used for catching errors in the application.

```javascript
const express = require('express');
const app = express();

// Normal middleware
app.use((req, res, next) => {
  const error = new Error('Something went wrong');
  next(error); // Passes the error to the error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Server Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Summary:
- `app.use()` mounts middleware functions to handle various tasks like logging, parsing, authentication, etc.
- It can apply middleware globally (to all routes) or to specific paths.
- Middleware functions are executed in order and should call `next()` to pass control to the next function in the stack.
- `app.use()` is essential in Express.js to modularize and streamline request processing.

## app.use(express.json());

`app.use(express.json())` is a built-in middleware function in **Express.js** that parses incoming requests with a JSON payload and makes the data available under `req.body`. This middleware is essential for working with APIs and services that send data in JSON format, such as when you make a `POST` or `PUT` request with JSON data.

### What It Does:
- It **parses the JSON** data from the body of the incoming request.
- After parsing, the JSON data is available as a JavaScript object on the `req.body` property.
- It is typically used when your application needs to handle incoming JSON data, such as from forms, API clients, or external services.

### Why Use `express.json()`:
In earlier versions of Express, developers needed third-party middleware like `body-parser` to parse JSON requests. However, starting from **Express 4.16.0**, `express.json()` was built-in, so you no longer need `body-parser` for this task.

### Example:
Here's an example showing how to use `app.use(express.json())` to handle incoming JSON data in a `POST` request.

```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

app.post('/submit', (req, res) => {
  // Accessing the parsed JSON data
  const userData = req.body;
  
  console.log(userData); // Logs the JSON data sent in the request body
  res.send(`Received data: ${JSON.stringify(userData)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### How It Works:
1. **Request**: Suppose the client sends a `POST` request to `/submit` with JSON data:
   ```json
   {
     "name": "John Doe",
     "age": 30
   }
   ```
   
2. **Middleware**: The `express.json()` middleware parses the incoming request's body, so the data is available as an object in `req.body`:
   ```javascript
   {
     name: 'John Doe',
     age: 30
   }
   ```

3. **Accessing Data**: You can then easily access `req.body.name` or `req.body.age` in your route handler.

### Without `express.json()`:
If you don't use this middleware (or any other JSON body parser), `req.body` will be `undefined` for requests with JSON payloads. The server won’t understand or be able to process the incoming JSON data.

### Summary:
- `app.use(express.json())` is middleware that parses incoming requests with JSON payloads.
- It allows you to access the parsed data in `req.body`.
- It simplifies handling of JSON data in APIs and web applications.
- Without it, you cannot easily process or interact with incoming JSON data from requests.

This is especially useful for handling REST APIs where requests typically use JSON format.


## Global Catches in JS to prevent backend server leaks

In **Express.js**, **global catches** refer to mechanisms that handle errors occurring anywhere in the application. Instead of catching errors in individual route handlers or middleware, a global error handler can catch unhandled errors across the entire application. This allows centralized management of errors, making the code cleaner and easier to maintain.

### Global Error Handling in Express:

1. **Error-Handling Middleware**
   Express provides a dedicated way to define error-handling middleware, which is a special kind of middleware function designed to handle errors globally. An error-handling middleware has **four** arguments: `err`, `req`, `res`, and `next`. By convention, error-handling middleware is placed at the **end** of all middleware and route declarations.

   ### Basic Example:
   ```javascript
   const express = require('express');
   const app = express();

   // A normal route
   app.get('/', (req, res) => {
     res.send('Home Page');
   });

   // Route that deliberately throws an error
   app.get('/error', (req, res) => {
     throw new Error('Something went wrong!');
   });

   // Global error-handling middleware
   app.use((err, req, res, next) => {
     console.error(err.stack); // Log the error stack trace
     res.status(500).send('Internal Server Error!'); // Send generic response
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

   - In this example:
     - If an error occurs in any route (like in `/error`), the error-handling middleware will catch it.
     - The error handler logs the error and sends a `500 Internal Server Error` response to the client.
     - The `next()` function is used in regular middleware, but for an error middleware, `next(err)` can be used to pass the error down to this handler.

2. **Using `next(err)` to Propagate Errors**
   Express allows you to pass an error to the next middleware using `next(err)`. When an error is passed in this way, it skips all remaining non-error middleware and goes directly to the global error handler.

   ### Example:
   ```javascript
   app.get('/user/:id', (req, res, next) => {
     const userId = req.params.id;
     if (!userId) {
       // Create an error and pass it to the error-handling middleware
       const error = new Error('User ID is required');
       error.status = 400;
       return next(error);
     }
     res.send(`User ID is ${userId}`);
   });

   // Global error handler
   app.use((err, req, res, next) => {
     console.error(err.message);
     res.status(err.status || 500).send(err.message || 'Internal Server Error');
   });
   ```

   - In this case, if the user tries to access `/user/` without providing an ID, the error is passed to the global error handler using `next(error)`.
   - The error handler will return a `400` status code with the custom error message.

3. **Handling Asynchronous Errors in Express**
   For asynchronous operations (e.g., database calls or API requests), you need to ensure that errors occurring inside `async` functions or promises are properly propagated to the global error handler. One way to handle this is by using `try-catch` blocks in your asynchronous route handlers or using a utility to wrap async functions.

   ### Example with Async Function:
   ```javascript
   app.get('/async-error', async (req, res, next) => {
     try {
       // Simulate async error (like a database call failing)
       throw new Error('Async error occurred!');
     } catch (err) {
       next(err); // Pass the error to the global error handler
     }
   });

   app.use((err, req, res, next) => {
     console.error(err.message);
     res.status(500).send('Internal Server Error');
   });
   ```

4. **Error Handling for 404 Not Found**
   Express does not automatically handle `404` errors (when a route is not found). You can create a catch-all middleware to handle such cases, typically just before the global error-handling middleware.

   ### Example:
   ```javascript
   // Middleware for handling 404 errors (Not Found)
   app.use((req, res, next) => {
     res.status(404).send('Page Not Found');
   });

   // Global error handler
   app.use((err, req, res, next) => {
     console.error(err.message);
     res.status(500).send('Internal Server Error');
   });
   ```

5. **Handling Multiple Environments (Development vs Production)**
   You can customize your global error handler based on the environment (`development`, `production`, etc.). For example, in development, you might want to send detailed error messages, while in production, you might send generic responses.

   ### Example:
   ```javascript
   app.use((err, req, res, next) => {
     if (app.get('env') === 'development') {
       res.status(err.status || 500).send({
         message: err.message,
         stack: err.stack, // Include stack trace in development
       });
     } else {
       res.status(err.status || 500).send('Internal Server Error');
     }
   });
   ```

### Summary of Global Error Handling in Express:
- **Global Error Middleware**: A middleware function that handles errors throughout the application by catching them in one centralized place.
- **Error Signature**: It requires four parameters: `err`, `req`, `res`, and `next`.
- **`next(err)`**: Used to propagate errors down the middleware chain to the global error handler.
- **Async Error Handling**: Ensure asynchronous errors are caught and passed to the global error handler using `next(err)`.
- **404 Handling**: You can create a specific middleware to handle `404` errors, ensuring the client is properly informed when a page is not found.

By using a global error handler, you ensure that all uncaught errors in the application are handled uniformly, and the application doesn't crash unexpectedly.

 
# Zod

**Zod** is a TypeScript-first schema declaration and validation library commonly used in Node.js for parsing and validating data. It provides an intuitive API for defining schemas that describe the shape of data, and it allows you to validate input, parse data, and even infer TypeScript types from your schemas. Zod is particularly useful in server-side applications where incoming data from users, APIs, or other sources must be validated to ensure it is correct and safe to use.

### Key Features of Zod:
- **Schema-based validation**: You define schemas that specify the structure and type of the data.
- **Type inference**: Automatically infers TypeScript types from schemas.
- **Simple API**: Offers an easy-to-use syntax for creating schemas and validating data.
- **Parsing and sanitizing**: Zod can parse and transform input data.
- **Supports various data types**: Validates strings, numbers, arrays, objects, enums, unions, etc.
- **Error reporting**: Provides detailed error messages when validation fails.

### Installing Zod:
To install Zod in your Node.js project, run:
```bash
npm install zod
```

### Basic Usage Example:
Here's how you can use Zod to validate data in a Node.js application:

```javascript
const { z } = require('zod');

// Define a schema for a user object
const userSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(), // Validates a positive integer
  email: z.string().email(), // Email validation
});

// Data to validate
const userData = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};

// Validate the data
try {
  const validatedData = userSchema.parse(userData);
  console.log("Validation succeeded:", validatedData);
} catch (err) {
  console.error("Validation failed:", err.errors);
}
```

### Explanation:
- **Defining Schemas**: You define a schema using `z.object()`. Inside the object, you can specify fields and their types, such as `z.string()` for strings, `z.number()` for numbers, and so on.
- **Parsing Data**: The `.parse()` method validates the data against the schema. If the data passes validation, it returns the validated object; otherwise, it throws an error with details about what failed.
- **Validation of Different Data Types**: In the schema above, Zod validates that `name` is a string, `age` is a positive integer, and `email` is a valid email address.

### Handling Validation Errors:
If validation fails, Zod will throw an error with detailed information about why the validation failed.

```javascript
const invalidUserData = {
  name: "John Doe",
  age: -5, // Invalid age
  email: "not-an-email" // Invalid email
};

try {
  userSchema.parse(invalidUserData);
} catch (err) {
  console.error(err.errors); // Outputs detailed validation errors
}
```

### Advanced Usage:

#### 1. **Optional Fields and Default Values**:
You can make fields optional or provide default values.
```javascript
const schema = z.object({
  username: z.string(),
  password: z.string().optional(), // Optional field
  role: z.string().default("user") // Default value
});
```

#### 2. **Custom Validation**:
Zod allows you to define custom validation logic using `.refine()`.
```javascript
const passwordSchema = z.string().refine((val) => val.length >= 8, {
  message: "Password must be at least 8 characters long",
});
```

#### 3. **Arrays and Nested Objects**:
Zod can validate arrays and nested objects:
```javascript
const userSchema = z.object({
  name: z.string(),
  hobbies: z.array(z.string()), // Array of strings
  address: z.object({
    street: z.string(),
    city: z.string(),
  }) // Nested object validation
});
```

#### 4. **Union Types**:
You can define schemas that allow multiple types using `z.union()`.
```javascript
const schema = z.union([z.string(), z.number()]); // Allows either a string or a number
```

#### 5. **Transforming Data**:
Zod also supports transforming data during parsing.
```javascript
const schema = z.string().transform((val) => val.toUpperCase());
const transformed = schema.parse("hello"); // Output: "HELLO"
```

### Example in a Node.js API:

Zod is often used in APIs to validate incoming requests. Here’s how it might be used in an Express.js route:

```javascript
const express = require('express');
const { z } = require('zod');
const app = express();

// Parse JSON body
app.use(express.json());

// Define the schema
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().positive().optional(), // Optional age
});

app.post('/create-user', (req, res) => {
  try {
    // Validate request body
    const validatedData = createUserSchema.parse(req.body);
    res.status(201).send(validatedData);
  } catch (err) {
    res.status(400).send(err.errors); // Send validation errors
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Benefits of Using Zod:
1. **Strong TypeScript Support**: Zod is designed to work seamlessly with TypeScript, allowing you to infer types directly from your schemas, reducing redundancy and ensuring type safety.
2. **Intuitive API**: Zod's API is simple and intuitive, making it easy to write and maintain validation logic.
3. **Detailed Errors**: Zod provides helpful and detailed error messages when validation fails, making it easy to debug.
4. **Schema Composition**: You can compose complex schemas from simpler ones, making it easy to manage large applications with many data structures.

### Summary:
- **Zod** is a schema declaration and validation library for Node.js and TypeScript.
- It allows you to define the structure of data and validate incoming data using schemas.
- Zod provides a clean API to validate different types, handle errors, and even transform data.
- It’s commonly used in APIs, forms, and applications that require strict data validation and type safety.

# Fetch API Using Promises

The `Fetch API` is a modern interface in JavaScript used to make network requests. It replaces the older `XMLHttpRequest` and provides a cleaner, more powerful way to fetch resources from the web asynchronously. Here's a breakdown of how it works, and examples of how to use it in different forms.

### Basics of Fetch API

The basic syntax of the `fetch()` function is:

```javascript
fetch(url, options)
  .then(response => {
    // handle the response
  })
  .catch(error => {
    // handle errors
  });
```

- `url`: The URL to which the request is sent.
- `options` (optional): An object containing any custom settings for the request (like method, headers, body, etc.).

#### Example:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 1. **GET Request**

A GET request is the default method for `fetch()`. You don't need to specify it explicitly unless you want to add custom headers or modify settings.

#### Example: Simple GET Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // parsing the response to JSON
  .then(data => console.log(data)) // handling the JSON data
  .catch(error => console.error('Error:', error));
```

#### Example: GET Request with Headers

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 2. **POST Request**

A POST request is used to send data to the server, usually to create or update a resource. For this, you need to specify the `method` as `POST` and pass the `body` in the request.

#### Example: Simple POST Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the body of the post',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 3. **PUT Request**

PUT requests are used to update an existing resource on the server. It's similar to the POST request, but the method is `PUT`.

#### Example: PUT Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Title',
    body: 'Updated body of the post',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 4. **DELETE Request**

DELETE requests are used to remove resources from the server. The `method` is set to `DELETE`, and usually, no `body` is required.

#### Example: DELETE Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => console.log('Resource deleted:', response.status))
  .catch(error => console.error('Error:', error));
```

### 5. **Handling Different Response Types**

The `response` object provides several methods to handle different types of responses.

- `.json()` - parse JSON response.
- `.text()` - get response as plain text.
- `.blob()` - get response as a binary large object (Blob).
- `.formData()` - get response as `FormData`.
- `.arrayBuffer()` - get response as an `ArrayBuffer`.

#### Example: Handling Text Response

```javascript
fetch('https://example.com/data.txt')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### Example: Handling Blob Response

```javascript
fetch('https://example.com/image.jpg')
  .then(response => response.blob())
  .then(imageBlob => {
    const imageUrl = URL.createObjectURL(imageBlob);
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error:', error));
```

### 6. **Advanced: Using `async/await` with Fetch**

The `fetch()` function returns a Promise, so it's ideal for use with `async/await`, which makes the code more readable and easier to work with.

#### Example: Using `async/await` with Fetch

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### 7. **Handling Errors**

By default, `fetch` won't reject a promise for HTTP errors (like 404 or 500). It will only reject for network issues. Therefore, you need to check if the response status is within the successful range (200–299).

#### Example: Error Handling

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1000')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 8. **Chaining Multiple Fetch Requests**

You can chain multiple `fetch` calls to handle sequential requests. For example, you might need to make a second request after processing the data from the first.

#### Example: Chaining Fetch Requests

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log('User:', user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log('Posts:', posts))
  .catch(error => console.error('Error:', error));
```

### Conclusion

The Fetch API provides a modern, flexible, and powerful way to make network requests. With various options like handling different request methods (GET, POST, PUT, DELETE), managing headers, sending data in the request body, and processing responses in different formats, it's a core tool for web development.

Make sure to handle errors appropriately and use `async/await` for cleaner and more readable asynchronous code.

## Fetch API using Async Awaits

### Simple Example

```javascript 

async function give10NamesV2(){
    const data = await fetch('https://fakerapi.it/api/v1/persons');
    const response = await data.json();
    console.log(response);
}
```
### Other Examples 
Using `async/await` with the `Fetch API` simplifies working with Promises, making the code more readable and less nested compared to traditional `.then()` chaining. Here's how you can apply `async/await` for various `fetch()` use cases.

### 1. **GET Request**

A simple GET request using `async/await` is straightforward. You wait for the fetch to complete, then parse the response, and handle the data.

#### Example: Simple GET Request

```javascript
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getData();
```

### 2. **POST Request**

To send data to the server using the `POST` method, the process is the same as with GET, but with an additional `options` object to specify the method and request body.

#### Example: POST Request with JSON Data

```javascript
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is a new post using async/await.',
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post created:', data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

createPost();
```

### 3. **PUT Request**

A `PUT` request is used to update an existing resource on the server. Similar to `POST`, it includes a method and body.

#### Example: PUT Request for Updating Data

```javascript
async function updatePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'This is an updated post using async/await.',
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post updated:', data);
  } catch (error) {
    console.error('Error updating post:', error);
  }
}

updatePost();
```

### 4. **DELETE Request**

`DELETE` requests remove a resource from the server. The structure remains similar, but no body is required in most cases.

#### Example: DELETE Request

```javascript
async function deletePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Post deleted:', response.status);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}

deletePost();
```

### 5. **Handling Errors**

You can easily handle HTTP errors using `async/await` by checking the `response.ok` status and throwing an error if it's not successful.

#### Example: Handling Errors in Fetch

```javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchWithErrorHandling();
```

### 6. **Fetching Multiple Resources Sequentially**

You may need to fetch data in sequence, such as fetching user data and then fetching their posts. `async/await` allows you to write sequential requests in a clean, linear fashion.

#### Example: Chaining Multiple Fetch Requests

```javascript
async function fetchUserDataAndPosts() {
  try {
    // Fetch user data
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    console.log('User:', user);

    // Fetch user's posts
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserDataAndPosts();
```

### 7. **Fetching Multiple Resources Concurrently**

With `async/await`, you can also fetch multiple resources concurrently using `Promise.all()`.

#### Example: Fetching Multiple Resources in Parallel

```javascript
async function fetchMultipleResources() {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ]);

    const posts = await postsResponse.json();
    const users = await usersResponse.json();

    console.log('Posts:', posts);
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

fetchMultipleResources();
```

### 8. **Handling Different Response Types (Blob, Text, etc.)**

You can use `async/await` with `fetch()` to handle various types of responses such as plain text, blobs, or even `ArrayBuffer`.

#### Example: Handling a Blob Response

```javascript
async function fetchImage() {
  try {
    const response = await fetch('https://via.placeholder.com/150');
    const blob = await response.blob();

    const imageUrl = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

fetchImage();
```

### Conclusion

Using `async/await` with the `Fetch API` results in cleaner, more maintainable code compared to traditional `then()` chaining. It is particularly useful when handling multiple requests or complex workflows. With `try/catch`, you can also implement robust error handling to deal with issues like network failures or server errors.

# Authentication
There are some basic topics that are required to be known before we proceed

1. Hashing
2. Encryption
3. JSON Web Tokens
4. Loceal Storage

When implementing user authentication on the web, it is crucial to ensure both security and usability. Here are the key things to consider:

### 1. **Authentication Method**
   - **Password-based Authentication**: Traditional but still widely used. Make sure to hash passwords using strong algorithms like `bcrypt`, `scrypt`, or `argon2`.
   - **OAuth2**: Delegates authentication to third-party providers (Google, Facebook, etc.). It’s secure and reduces the need to store passwords.
   - **Multi-Factor Authentication (MFA)**: Adds an extra layer of security by requiring a second factor, such as a code sent to the user's phone, in addition to the password.
   - **Single Sign-On (SSO)**: Allows users to authenticate once and gain access to multiple applications without needing to log in again.
   - **Biometrics**: Uses fingerprints, facial recognition, etc., to verify identity.
   - **Passwordless Authentication**: Login methods such as magic links, email-based, or SMS OTPs are becoming more common for usability and security.

### 2. **Password Security**
   - **Hashing**: Never store plaintext passwords. Hash passwords with a secure algorithm like `bcrypt`, and store the hash in your database.
   - **Salting**: Add a unique salt to each password before hashing to prevent attackers from using precomputed hash databases (rainbow tables).
   - **Password Policies**: Enforce strong passwords with minimum length, complexity (upper/lowercase letters, numbers, symbols), and avoid common patterns.
   - **Rate Limiting**: Prevent brute force attacks by rate-limiting login attempts after a certain threshold.

### 3. **Session Management**
   - **Session Tokens**: Use tokens (e.g., JSON Web Tokens (JWT) or session IDs stored in cookies) to track user sessions.
   - **Secure Cookies**: Mark session cookies as `HttpOnly` (inaccessible via JavaScript) and `Secure` (only transmitted over HTTPS).
   - **Token Expiry**: Implement token expiration for added security. Use refresh tokens to renew access tokens if necessary.
   - **Session Hijacking Prevention**: Implement checks to ensure sessions can't be hijacked (e.g., track IPs, user agents).

### 4. **Transport Layer Security**
   - **Use HTTPS**: Always use SSL/TLS (HTTPS) to encrypt the data transmitted between the client and the server to protect against man-in-the-middle (MITM) attacks.
   - **Strict Transport Security (HSTS)**: Implement HSTS headers to enforce HTTPS connections.

### 5. **Brute Force Protection**
   - **CAPTCHA**: Implement CAPTCHA on login forms to prevent automated brute force attacks.
   - **Account Locking/Rate Limiting**: Lock an account after multiple failed login attempts or implement rate limiting to slow down potential attacks.

### 6. **Remember Me/Session Persistence**
   - **Short-lived Tokens**: If using JWT, issue short-lived tokens and require re-authentication after a certain time to minimize the risk if a token is compromised.
   - **Device Recognition**: Track devices that the user has logged in from and flag unknown devices for additional verification (e.g., email verification).

### 7. **Cross-Site Request Forgery (CSRF) Protection**
   - **Anti-CSRF Tokens**: Use CSRF tokens to prevent attackers from performing unwanted actions on behalf of an authenticated user.
   - **SameSite Cookies**: Set cookies with the `SameSite` attribute to control when they should be sent with cross-origin requests, protecting against CSRF.

### 8. **Cross-Site Scripting (XSS) Protection**
   - **Sanitize User Input**: Ensure any user input is sanitized to prevent injection of malicious scripts that could steal credentials or session data.
   - **HttpOnly Cookies**: Mark cookies as `HttpOnly` to prevent XSS attacks from accessing cookie data.

### 9. **API Authentication**
   - **API Keys**: Used to authenticate users when accessing APIs. Ensure they are not exposed in public repositories or client-side code.
   - **OAuth2/OpenID Connect**: Standard protocols for secure API authentication.
   - **Rate Limiting**: Implement rate limiting for API requests to prevent abuse.
   - **JWT (JSON Web Tokens)**: Used for stateless authentication with APIs. Store the JWT securely and validate the token on each request.

### 10. **Account Recovery**
   - **Password Reset Flow**: Allow users to reset their password securely using email verification. Always invalidate reset links after use or expiry.
   - **Security Questions**: If using security questions, ensure that the answers are not easy to guess. However, it's generally better to avoid these in favor of email-based verification.
   - **Verification Codes**: Use time-limited one-time codes (sent via email/SMS) for password resets or account recovery.

### 11. **Monitoring and Auditing**
   - **Audit Logs**: Maintain logs of authentication attempts, including failed login attempts, password changes, and account lockouts.
   - **Alerting**: Notify users of suspicious login activity, such as login from a new device or location.

### 12. **Authorization vs. Authentication**
   - **Role-Based Access Control (RBAC)**: Ensure proper authorization mechanisms are in place. Just authenticating a user is not enough; make sure they have the right permissions to access specific resources.
   - **Least Privilege Principle**: Grant users the minimum access required to perform their tasks.

### 13. **Social Engineering Protections**
   - **User Education**: Educate users about phishing attacks, especially for email-based authentication or password reset flows.
   - **Two-Factor Authentication (2FA)**: Mandate or encourage users to enable two-factor authentication, which reduces the risk of social engineering attacks.

### 14. **Compliance and Privacy**
   - **GDPR/CCPA Compliance**: Ensure that your authentication and data storage systems comply with data protection laws like GDPR (Europe) and CCPA (California).
   - **Data Encryption**: Encrypt sensitive user data (e.g., passwords, personal information) both in transit and at rest.

### 15. **Logging Out**
   - **Log Out on All Devices**: Allow users to log out from all devices and clear their session tokens.
   - **Session Timeout**: Implement idle session timeouts to log users out automatically after a period of inactivity.

---

By taking these factors into consideration, you can create a more secure, user-friendly authentication system for your web application.

## Hashing
**Hashing** is the process of converting an input (or "message") into a fixed-size string of characters, which is typically a digest that represents the original data. The output is called a **hash value**, **digest**, or **checksum**. Hashing is commonly used in data security, especially for password storage, data integrity checks, and digital signatures.

### Key Features of Hashing:

1. **Fixed Size Output**: Regardless of the size of the input, a hash function will always produce a fixed-length output. For example, SHA-256 always produces a 256-bit hash, no matter if you hash a 1 KB or a 1 GB file.

2. **Deterministic**: The same input will always produce the same hash. For example, hashing the word "password" with the same hash function will always give the same result.

3. **Fast Computation**: A good hash function should be quick to compute, even for large inputs.

4. **One-Way Function**: Hashing is a one-way operation. It is computationally infeasible to reverse a hash back to the original input (i.e., you cannot "decrypt" a hash).

5. **Unique Output for Different Inputs**: Even a small change in the input should produce a completely different hash output (this is called the **avalanche effect**).

6. **Collisions Should Be Rare**: A collision occurs when two different inputs produce the same hash value. A good hash function minimizes collisions.

### Common Uses of Hashing:

1. **Password Storage**:
   - When a user creates an account, the password they set is hashed, and the hash is stored in the database. This way, even if the database is compromised, the actual passwords are not exposed.
   - Example: If you hash "password123" using a hash function, you’ll get a fixed-size hash value. Instead of storing "password123" in the database, the system stores the hash.
   - When a user logs in, the system hashes the entered password and compares it to the stored hash to verify the password.

2. **Data Integrity**:
   - Hashing is used to verify that data has not been altered during transmission or storage. The sender and receiver can compare hash values to ensure the data is intact.
   - For example, when downloading a file, websites often provide a hash (like SHA-256) so that after downloading, the user can hash the file and compare it to ensure that it wasn’t corrupted.

3. **Digital Signatures**:
   - Hashing is used in digital signatures to confirm that the content of a message or document hasn't changed since it was signed.

4. **Message Authentication Codes (MACs)**:
   - Hashing algorithms are often used in combination with cryptographic keys to authenticate the integrity and authenticity of a message or data.

### Common Hashing Algorithms:

1. **MD5 (Message Digest 5)**:
   - Produces a 128-bit hash value.
   - Considered insecure due to vulnerabilities that allow collisions (i.e., two different inputs can produce the same hash value).
   
2. **SHA-1 (Secure Hash Algorithm 1)**:
   - Produces a 160-bit hash value.
   - Also considered insecure due to advances in collision-finding techniques.

3. **SHA-256 (Secure Hash Algorithm 256-bit)**:
   - Part of the SHA-2 family, widely used, and produces a 256-bit hash.
   - Stronger and more secure than MD5 and SHA-1.

4. **bcrypt, scrypt, Argon2**:
   - Specifically designed for hashing passwords.
   - These algorithms are slow (deliberately) and can include **salts** to protect against brute-force attacks and rainbow table attacks.

### Example of Hashing (SHA-256):

```javascript
// Example in JavaScript using the built-in crypto library (Node.js)
const crypto = require('crypto');

const input = 'password123';
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);
// Output: e3b0c44298fc1c149afbfb4c8996fb92427ae41e4649b934ca495991b7852b855
```

### Salting and Hashing

A **salt** is random data that is added to the input of a hash function to ensure that the same input (like a password) does not always produce the same hash. This is critical in password hashing to prevent attackers from using precomputed tables (rainbow tables) to quickly reverse-engineer common password hashes.

#### Example of Salted Hashing (in Pseudocode):

```text
password = "password123"
salt = "random_salt_value"
hashed_password = hash(password + salt)
```

By using a unique salt for each user, even if two users have the same password, their stored hash values will be different.

### Summary:

- **Hashing** is a process of converting input data into a fixed-size output using a hash function.
- It’s used for securing passwords, ensuring data integrity, and enabling efficient data lookups.
- Password hashing should include salting and use strong, modern algorithms like bcrypt or Argon2 to protect against attacks.


## Encryption

Encryption is the process of converting information or data into a coded format to prevent unauthorized access. In simple terms, encryption takes readable data (plaintext) and transforms it into an unreadable format (ciphertext) using an algorithm and an encryption key. Only those with the correct decryption key can revert the ciphertext back to its original, readable form.

There are two main types of encryption:

1. **Symmetric Encryption**: The same key is used for both encrypting and decrypting data. Examples include AES (Advanced Encryption Standard) and DES (Data Encryption Standard).

2. **Asymmetric Encryption**: Two keys are used—one for encryption (public key) and another for decryption (private key). Examples include RSA (Rivest-Shamir-Adleman) and ECC (Elliptic Curve Cryptography).

Encryption is widely used in securing communications, online transactions, and data storage to ensure privacy and protect sensitive information from hackers or unauthorized parties.

## JSON Web Tokens
### What are JSON Web Tokens (JWTs)?

**JSON Web Tokens (JWTs)** are a compact and secure way to represent information between two parties. They are commonly used for authentication and authorization in web applications. A JWT is a string that consists of three parts:

1. **Header**: Specifies the algorithm used to generate the signature (usually HMAC SHA256 or RSA).
2. **Payload**: Contains the claims, which are statements about an entity (typically the user) and additional metadata.
3. **Signature**: Used to verify the token’s authenticity and integrity, ensuring it hasn’t been tampered with.

A typical JWT looks like this:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### Structure Breakdown:
1. **Header**: Encoded as base64 and looks like this:
   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```
2. **Payload**: Encoded as base64 and contains claims like user information:
   ```json
   {
     "sub": "1234567890",
     "name": "John Doe",
     "iat": 1516239022
   }
   ```
3. **Signature**: Generated by combining the encoded header, payload, and a secret, then signing with the algorithm specified in the header.

### Common Real-Life Scenarios for JWT

1. **Authentication**: 
   - After a user logs in, the server generates a JWT and sends it back to the client (usually the browser). The client then includes this token in the Authorization header of subsequent requests. The server verifies the token to authenticate the user.
   
2. **Authorization**: 
   - JWTs are often used to control access to different parts of an API. For instance, after the user logs in, the server can encode user roles and permissions inside the token. The server checks the token to grant or deny access to different resources.

3. **Single Sign-On (SSO)**: 
   - JWTs are often used in SSO systems to enable users to log in across multiple applications or domains without needing to authenticate separately for each one.

### Example Use Cases in a Real Project

#### 1. **Node.js/Express Authentication with JWT**
This example demonstrates how to use JWT for authentication in a Node.js and Express app.

**Installation**:
```bash
npm install express jsonwebtoken body-parser
```

**Code**:
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key';  // Never hardcode secret in real apps, use environment variables.

// Mock user data
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// User login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Create JWT payload
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

// Protected route that requires JWT
app.get('/protected', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: `Hello ${decoded.username}, you are authenticated!` });
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

#### 2. **React Frontend with JWT Authentication**
This example shows how to use JWT in a React app to store and send the token with each request.

**Installation**:
```bash
npx create-react-app jwt-auth-example
cd jwt-auth-example
npm install axios
```

**Code**:

- **Login Component**:
```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            setToken(response.data.token);
            localStorage.setItem('jwt_token', response.data.token);
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const handleProtectedRoute = async () => {
        try {
            const jwtToken = localStorage.getItem('jwt_token');
            const response = await axios.get('http://localhost:3000/protected', {
                headers: { Authorization: jwtToken }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Access denied', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {token && <button onClick={handleProtectedRoute}>Access Protected Route</button>}
        </div>
    );
};

export default Login;
```

### How JWT Works in Real-Life Projects:
1. **Login Process**: User enters their credentials (username and password), which are sent to the backend. If they are valid, a JWT is returned.
2. **Token Storage**: The frontend (React app) stores the JWT (typically in localStorage or sessionStorage).
3. **Token Usage**: On subsequent requests, the JWT is attached to the request headers (`Authorization`) to access protected resources.
4. **Token Verification**: The backend checks the validity of the JWT and grants access if the token is valid and not expired.

### Security Considerations
- Always use HTTPS to transmit JWTs.
- Use strong secret keys for signing tokens.
- Set token expiration times (short-lived tokens).
- Consider using refresh tokens to allow users to maintain sessions securely.

## Loceal Storage
**Local Storage** in browsers is a web storage feature that allows web applications to store data locally within the user's browser. Unlike cookies, data stored in local storage is not sent back to the server with every HTTP request. It's primarily used for persisting small amounts of data (key-value pairs) for a website on the client side.

### Key Features of Local Storage:
1. **Persistent Storage**: Data persists even after the browser is closed and reopened.
2. **Client-Side Storage**: Data is stored on the user's computer, not on the server.
3. **Key-Value Pairs**: Data is stored as key-value pairs, where both the key and value are strings.
4. **Capacity**: Local storage has a higher storage capacity (usually around 5-10 MB per domain) compared to cookies.
5. **No Expiry**: Data does not expire unless explicitly removed by the web app or user.

### How to Use Local Storage

Local storage is accessed via the `localStorage` object in JavaScript, which provides methods to set, get, and remove items.

#### Common Methods:
- `localStorage.setItem(key, value)`: Stores a key-value pair.
- `localStorage.getItem(key)`: Retrieves the value of the specified key.
- `localStorage.removeItem(key)`: Removes the specified key-value pair.
- `localStorage.clear()`: Removes all key-value pairs stored in local storage.
- `localStorage.length`: Returns the number of stored key-value pairs.

### Example Usage

#### 1. **Storing Data**
```javascript
// Storing a username in local storage
localStorage.setItem('username', 'JohnDoe');
```

#### 2. **Retrieving Data**
```javascript
// Retrieving the stored username
const username = localStorage.getItem('username');
console.log(username);  // Outputs: JohnDoe
```

#### 3. **Removing Data**
```javascript
// Removing the username from local storage
localStorage.removeItem('username');
```

#### 4. **Clearing All Data**
```javascript
// Clearing all items from local storage
localStorage.clear();
```

### Real-Life Use Cases:
1. **Remembering User Preferences**: For example, storing theme preferences (light/dark mode) so that the site remembers the user's choice between sessions.
   ```javascript
   localStorage.setItem('theme', 'dark');
   ```
2. **Storing Form Data**: Save form inputs locally so users can resume filling out forms after refreshing the page.
   ```javascript
   localStorage.setItem('email', document.getElementById('email').value);
   ```
3. **Caching Data**: Store small amounts of data fetched from the server to reduce API calls and improve user experience.
   ```javascript
   localStorage.setItem('userProfile', JSON.stringify(userData));
   ```

### Limitations:
1. **Limited Storage Capacity**: Typically, browsers limit local storage to 5-10 MB per domain.
2. **String-Only Storage**: Local storage can only store strings, so other data types (e.g., objects, arrays) must be converted to strings (like JSON).
3. **No Security Mechanism**: Data in local storage is accessible to any script on the same domain, so sensitive data should not be stored here without encryption.
4. **Synchronous API**: Local storage operations are synchronous, which means they can block the main thread, affecting performance in large-scale operations.


# Databases
A **database** is an organized collection of structured information or data, stored and accessed electronically. Databases are used to efficiently store, manage, retrieve, and update large amounts of data for applications. They ensure data integrity, security, and quick access through structured query languages or APIs.

### Types of Databases

1. **Relational Databases (RDBMS)**:
   - **Definition**: These databases store data in predefined schemas (tables) consisting of rows and columns. Data can be queried using SQL (Structured Query Language). They are based on a relational model.
   - **Examples**: MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database.
   - **Use Case**: Financial systems, ERP systems, customer databases.
   - **Characteristics**: Highly structured, ACID compliance (Atomicity, Consistency, Isolation, Durability), supports relationships between tables.

2. **NoSQL Databases**:
   - **Definition**: NoSQL databases are designed for unstructured or semi-structured data. They allow for flexible schemas and can handle large amounts of data spread across multiple servers.
   - **Subtypes**:
     - **Key-Value Stores**: Store data as key-value pairs (e.g., Redis, DynamoDB).
     - **Document Databases**: Store data as JSON-like documents (e.g., MongoDB, CouchDB).
     - **Column-Family Stores**: Data is stored in columns rather than rows (e.g., Cassandra, HBase).
     - **Graph Databases**: Data is stored as nodes and edges, making them suitable for relationship-heavy data (e.g., Neo4j, Amazon Neptune).
   - **Use Case**: Real-time data analytics, big data, content management, social networks.
   - **Characteristics**: Scalability, flexible data models, optimized for distributed and large-scale data.

3. **NewSQL Databases**:
   - **Definition**: A hybrid approach combining the consistency and relational models of traditional SQL databases with the scalability of NoSQL databases.
   - **Examples**: Google Spanner, CockroachDB, VoltDB.
   - **Use Case**: High-traffic web applications requiring both scalability and transactional integrity.
   - **Characteristics**: SQL-based querying, ACID properties, horizontal scalability.

4. **In-Memory Databases**:
   - **Definition**: Databases that store data in the system's main memory (RAM) rather than on disk, providing faster data retrieval and processing.
   - **Examples**: Redis, Memcached, VoltDB.
   - **Use Case**: Caching, real-time data processing, gaming leaderboards, session storage.
   - **Characteristics**: High-speed performance, transient storage (data is lost if the server crashes unless persisted).

5. **Graph Databases**:
   - **Definition**: Specialized databases designed to store data as nodes (entities) and edges (relationships between entities). They are used to model highly interconnected data.
   - **Examples**: Neo4j, Amazon Neptune.
   - **Use Case**: Social networks, recommendation engines, fraud detection, network analysis.
   - **Characteristics**: Focused on relationships, easy to model complex structures, high performance for graph-based queries.

6. **Time-Series Databases**:
   - **Definition**: Databases optimized for storing and querying data that is indexed over time, often used for analytics.
   - **Examples**: InfluxDB, TimescaleDB, Prometheus.
   - **Use Case**: Monitoring systems, financial data (stocks), IoT devices, sensor data.
   - **Characteristics**: Efficient handling of time-based data, optimized for fast inserts and queries over large datasets.

7. **Object-Oriented Databases**:
   - **Definition**: These databases store data in the form of objects, similar to object-oriented programming languages. Data and its associated methods are stored together.
   - **Examples**: db4o, ObjectDB.
   - **Use Case**: Applications where data is represented as objects (e.g., complex scientific simulations, CAD systems).
   - **Characteristics**: Supports object-oriented concepts like inheritance, polymorphism, and encapsulation.

8. **Distributed Databases**:
   - **Definition**: Databases where data is distributed across multiple nodes or locations, often to improve performance, scalability, and fault tolerance.
   - **Examples**: Google Spanner, Cassandra, CockroachDB.
   - **Use Case**: Global-scale applications, fault-tolerant systems, cloud-based services.
   - **Characteristics**: Horizontal scalability, distributed querying, and data consistency mechanisms.

9. **Hierarchical Databases**:
   - **Definition**: Data is stored in a tree-like structure where each child node has a single parent node, similar to file systems.
   - **Examples**: IBM Information Management System (IMS).
   - **Use Case**: Banking systems, directory services.
   - **Characteristics**: Fast access to hierarchical data, rigid schema, and relationships.

10. **Network Databases**:
   - **Definition**: A more flexible model than hierarchical databases, where a child node can have multiple parent nodes. The structure forms a graph.
   - **Examples**: Integrated Data Store (IDS), IDMS.
   - **Use Case**: Telecommunications, complex networks.
   - **Characteristics**: Flexible relationship modeling, but can become complex to manage.

11. **Columnar Databases**:
   - **Definition**: A type of NoSQL database that stores data in columns rather than rows. This structure is optimized for read-heavy operations such as analytics.
   - **Examples**: Apache Cassandra, HBase, Google Bigtable.
   - **Use Case**: Big data analytics, data warehouses.
   - **Characteristics**: Efficient for querying large datasets, good for aggregation and analysis, highly scalable.

### Database Examples and Use Cases:

- **E-commerce Websites**: Typically use **relational databases** like MySQL or PostgreSQL to store product data, customer information, and order details.
- **Social Networks**: Use **graph databases** like Neo4j to model and query relationships between users, friends, likes, and shares.
- **Financial Systems**: Use **relational databases** like Oracle or SQL Server to maintain transactions, accounts, and audits with strong ACID properties.
- **Real-Time Analytics**: Often use **NoSQL databases** like Cassandra or MongoDB for fast, scalable, and flexible data ingestion and querying.
- **IoT Systems**: Use **time-series databases** like InfluxDB to efficiently store and analyze large amounts of time-based sensor data.

### Choosing the Right Database

- **Relational Databases**: Choose when you need structured, transactional data with predefined relationships (e.g., bank transactions, e-commerce).
- **NoSQL Databases**: Use when you need flexibility, scalability, and handling of semi-structured or unstructured data (e.g., big data, social media, content management).
- **In-Memory Databases**: Use for real-time data processing or caching, where speed is a top priority.
- **Graph Databases**: Ideal for applications that require deep relationship analysis (e.g., social networks, fraud detection).
- **Time-Series Databases**: Best for time-indexed data like logs, metrics, and IoT applications.

Each type of database is optimized for specific types of workloads, and the choice depends on factors like data structure, scale, performance requirements, and application complexity.

# Mongo DB 
 MongoDB is a **NoSQL** database, meaning it stores data in a flexible, non-relational format, unlike traditional SQL databases (such as MySQL or PostgreSQL) that use tables and rows. MongoDB is known for being scalable, flexible, and high-performance. It is widely used for handling large amounts of data and is popular for modern applications like web and mobile apps.

Here are the key concepts:

### 1. **Document-Oriented Database**
   MongoDB stores data in a format called **documents** (similar to JSON). Each document is a collection of **key-value pairs**, and it can vary in structure. Documents are stored in **collections**, which are the equivalent of tables in relational databases.

   Example of a MongoDB document:
   ```json
   {
     "_id": 1,
     "name": "John Doe",
     "age": 30,
     "address": {
       "street": "123 Main St",
       "city": "Anytown"
     },
     "hobbies": ["reading", "gaming", "swimming"]
   }
   ```

### 2. **Schema Flexibility**
   MongoDB does not enforce a strict schema, so each document in a collection can have a different structure. This flexibility is useful in modern applications where data models can evolve over time without the need for complex migrations.

### 3. **Scalability**
   MongoDB is designed to scale horizontally, meaning it can distribute data across multiple servers or clusters (called **sharding**). This allows MongoDB to handle large datasets efficiently by distributing the load across multiple machines.

### 4. **Indexing**
   MongoDB supports indexing on fields to improve query performance. You can create indexes on any field in a document to make lookups faster, similar to how traditional databases use indexes.

### 5. **Replication**
   MongoDB provides **replication** to ensure high availability. Data is replicated across multiple servers in a replica set, which helps with disaster recovery and maintaining data availability in case of server failure.

### 6. **Aggregation Framework**
   MongoDB’s aggregation framework allows you to perform advanced data processing and analysis. It works similarly to SQL’s `GROUP BY`, `HAVING`, and `SUM` functions. Aggregation pipelines can filter, group, and transform data in various ways.

   Example of an aggregation pipeline:
   ```json
   db.orders.aggregate([
     { $match: { status: "shipped" } },
     { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } }
   ])
   ```

### 7. **Transactions**
   While MongoDB originally lacked support for multi-document transactions, it now supports ACID (Atomicity, Consistency, Isolation, Durability) transactions across multiple documents, ensuring that operations are reliably processed, even in complex business scenarios.

### 8. **Use Cases**
   MongoDB is widely used in scenarios where flexibility and scalability are critical. Some common use cases include:
   - **Real-time analytics**
   - **Content management systems (CMS)**
   - **Internet of Things (IoT) applications**
   - **E-commerce applications**
   - **Mobile apps**

### 9. **Strengths of MongoDB**
   - **Schema Flexibility**: Adapts to changes in data structure.
   - **Scalability**: Easily handles large datasets by distributing data across servers.
   - **High Performance**: Optimized for fast reads and writes.
   - **Rich Query Language**: Supports a wide variety of query operations and aggregations.

### 10. **Drawbacks**
   - **Data Redundancy**: Denormalization can lead to duplication of data, which may result in increased storage use.
   - **Complex Queries**: While MongoDB supports advanced queries, for highly complex joins or transactions, relational databases might be more efficient.
   - **Memory Usage**: MongoDB uses memory-mapped files, which could result in high memory usage, especially for large datasets.

In summary, MongoDB is a great choice for applications that require high performance, flexibility, and scalability, especially for managing semi-structured or unstructured data.

## Example Use Case:



```javascript

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://ronaldwilson00000:<db_password>@cluster0.8sisn.mongodb.net/<Collection_Name>?retryWrites=true&w=majority&appName=Cluster0');

const table = mongoose.model('table',{
    name: String,
    email: String,
    password: String
});

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const entry = new table({
        name: username,
        email: email,
        password: password
    })  
    entry.save();
    // res.json("data saved")
    res.send("Data Saved Succesfully in the database")

});

app.listen(3000);

```
## What is a database
Good question to have at this point
Why don't we let the user hit the database directly?
What extra does the http server provide exactly?
1. Databases were are created using protocols that browsers don't understand
2. Databases don't have granual access as a first class citizen. Very hard to do user specific access in them
  This means that databases generally have one password and that it is of the nature that you either have access to all of data or to no data at all. 
  Its not secure to directly deal with the DB from the browsers 
3. There are some databases (firebase) that let you get rid of the http server and try their best to provide granola access

## What is CRUD 
CRUD stands for **Create, Read, Update, and Delete**. It refers to the four basic operations that can be performed on data in a database or any other persistent storage system. These operations are essential for most applications that handle data. Here's a breakdown of each:

1. **Create**: Adds new data to the system. For example, creating a new user profile or adding a new record to a database.

2. **Read**: Retrieves or reads existing data. For example, displaying a list of users or retrieving specific details about a product.

3. **Update**: Modifies existing data. For example, editing a user's information or changing the status of an order.

4. **Delete**: Removes data from the system. For example, deleting a user profile or removing an item from inventory.

In web applications, CRUD is often performed using HTTP methods like:
- **POST** (Create)
- **GET** (Read)
- **PUT/PATCH** (Update)
- **DELETE** (Delete) 

CRUD is a fundamental concept in software development, especially in web and database systems.

## What is ORM
**ORM** stands for **Object-Relational Mapping**. It is a programming technique that allows developers to interact with a database using an object-oriented paradigm, rather than writing raw SQL queries. An ORM provides a layer between the programming language and the relational database, enabling developers to work with databases in a more intuitive and efficient way.

### How ORM Works:
- **Mapping Objects to Tables**: In an ORM, database tables are represented as classes in the programming language, and rows in those tables are represented as instances (objects) of those classes.
- **Attributes to Columns**: The attributes of the class correspond to the columns of the database table.
- **Methods to CRUD Operations**: The methods provided by the class can perform CRUD operations, often abstracting away the need to write SQL queries manually.

### Benefits of ORM:
1. **Productivity**: Developers can interact with the database using the programming language’s syntax, without writing complex SQL queries.
2. **Abstraction**: The ORM handles the conversion between the objects in the application and the data stored in the database.
3. **Database Portability**: Because the ORM generates database-specific SQL queries, it allows easier switching between different database systems (e.g., from MySQL to PostgreSQL).
4. **Security**: ORM frameworks often protect against common database security issues like SQL injection, since the SQL queries are generated automatically.

### Popular ORM Tools:
- **Python**: SQLAlchemy, Django ORM
- **Java**: Hibernate
- **Ruby**: ActiveRecord (Rails)
- **PHP**: Eloquent (Laravel)

For example, in Django (Python), a model class is mapped to a database table, and you can create, read, update, or delete records through the model class without writing raw SQL.



## NOTE:
Let's see the API for the mongoose library
Eventually, we'll be using prisma (which is the industry standard way of doing this)
In mongoose, first you have to define the schema
This sounds counter intuitive since mongodb is schemaless?
That is true, but mongoose makes you define schema for things like autocompletions/
Validating data before it goes in the DB to make sure you're doing things right
Schemaless Dbs can be very dangerous, using schemas in mongo makes it slightly less
Dangerous

## What is a Schema in Databases
A **schema** in a database refers to the overall structure or organization of the data. It defines how data is organized and how relationships between various entities are maintained. Essentially, a database schema acts as a blueprint that describes the tables, fields (columns), data types, constraints, and relationships within the database.

### Key Components of a Database Schema:
1. **Tables**: The basic units that store data in rows and columns.
2. **Columns (Fields)**: The attributes or properties of the data stored in the table. Each column has a specific data type (e.g., integer, varchar, date).
3. **Rows (Records)**: The actual data entries within a table. Each row represents a single record.
4. **Keys**: 
   - **Primary Key**: A unique identifier for each record in a table.
   - **Foreign Key**: A key used to link records between two tables, establishing relationships.
5. **Constraints**: Rules applied to the data in tables, such as **NOT NULL**, **UNIQUE**, or **FOREIGN KEY** constraints to ensure data integrity.
6. **Relationships**: Defines how tables are related to one another, often through primary and foreign keys (e.g., one-to-many, many-to-many relationships).

### Types of Schemas:
- **Physical Schema**: Describes how data is physically stored in the database (disk storage, indexing).
- **Logical Schema**: Defines the logical structure, like the tables, columns, relationships, and constraints.
  
### Example:
In a simple e-commerce database, you might have the following schema:

- **Tables**:
  - `Users` (with columns like `user_id`, `name`, `email`)
  - `Products` (with columns like `product_id`, `name`, `price`)
  - `Orders` (with columns like `order_id`, `user_id`, `product_id`, `quantity`)
  
- **Keys**:
  - `user_id` (Primary key in `Users`)
  - `product_id` (Primary key in `Products`)
  - `user_id` and `product_id` (Foreign keys in `Orders` to establish relationships with `Users` and `Products`)

A schema is essential in organizing data efficiently and ensuring its integrity across tables in a database system.

## What is Moongose
**Mongoose** is an **Object Data Modeling (ODM)** library for **MongoDB** and **Node.js**. It provides a straightforward way to model your application data, enforce schema structure, and interact with MongoDB using JavaScript.

### Key Features of Mongoose:
1. **Schema Definition**: Mongoose allows you to define schemas for your MongoDB collections. This means you can enforce structure in what is otherwise a schema-less database. Schemas define the structure of the documents within a MongoDB collection, including field types, required fields, default values, and validation rules.
  
2. **Validation**: You can define rules and constraints for your data, such as making certain fields required or applying custom validation logic.

3. **Middleware (Hooks)**: Mongoose allows you to define middleware functions that get executed before or after certain events like saving a document (pre-save, post-save, etc.), making it useful for operations like logging, encryption, or validation.

4. **Relationships**: Mongoose provides ways to establish relationships between different collections using references (`populate`), which is MongoDB’s way of linking documents between collections.

5. **Data Models**: Once a schema is defined, Mongoose lets you create models that act as a blueprint for working with the data in a collection. Models provide an interface for performing CRUD operations on the data.

6. **Querying**: Mongoose allows you to query the database using familiar JavaScript syntax. You can perform powerful queries such as filtering, sorting, and pagination.

7. **Plugins**: Mongoose has a plugin system that allows developers to extend its functionality, adding reusable features to schemas (e.g., auto-incrementing IDs, timestamps).

### Example of Using Mongoose:

1. **Install Mongoose**:
   ```bash
   npm install mongoose
   ```

2. **Defining a Schema**:
   ```js
   const mongoose = require('mongoose');
   const Schema = mongoose.Schema;

   const userSchema = new Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: { type: Number, min: 18 }
   });

   const User = mongoose.model('User', userSchema);
   ```

3. **Connecting to MongoDB**:
   ```js
   mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB Connected'))
     .catch(err => console.log(err));
   ```

4. **Performing CRUD Operations**:
   - **Create**:
     ```js
     const newUser = new User({ name: 'John', email: 'john@example.com', age: 25 });
     newUser.save()
       .then(() => console.log('User saved!'))
       .catch(err => console.log(err));
     ```

   - **Read**:
     ```js
     User.find({ age: { $gte: 18 } })
       .then(users => console.log(users))
       .catch(err => console.log(err));
     ```

   - **Update**:
     ```js
     User.updateOne({ email: 'john@example.com' }, { $set: { age: 26 } })
       .then(() => console.log('User updated!'))
       .catch(err => console.log(err));
     ```

   - **Delete**:
     ```js
     User.deleteOne({ email: 'john@example.com' })
       .then(() => console.log('User deleted!'))
       .catch(err => console.log(err));
     ```

### Why Use Mongoose?
- **Schema Enforcement**: MongoDB itself is flexible and doesn't enforce schemas. Mongoose provides structure and validation, making it easier to manage data consistency.
- **Simplified MongoDB Queries**: It abstracts MongoDB's native commands and provides a more intuitive, JavaScript-friendly interface.
- **Middleware**: It allows you to insert logic into database operations, making it easier to handle tasks like validation, transformations, and logging.
  
Mongoose is widely used in full-stack JavaScript applications, particularly in conjunction with Node.js and Express for building scalable web applications.

## What is MongoDB Compass

**MongoDB Compass** is a **graphical user interface (GUI) tool** provided by MongoDB that allows users to visually interact with MongoDB databases. It simplifies the process of managing, querying, and analyzing MongoDB data without requiring extensive knowledge of the MongoDB query language (MQL) or command-line operations. Compass is especially useful for those who prefer a visual interface over working with MongoDB through the command line.

### Key Features of MongoDB Compass:

1. **Visual Data Exploration**:
   - Compass allows you to browse through the data stored in your MongoDB collections, view documents, and analyze the data structure.
   - You can inspect each document’s fields, data types, and values without having to write queries.

2. **Schema Visualization**:
   - Even though MongoDB is a schema-less database, Compass automatically analyzes your collections and provides a visual representation of the schema.
   - It detects field types, displays their distributions, and provides insights into how your data is structured.

3. **Query Builder**:
   - With Compass, you can build queries visually using a drag-and-drop interface or a query bar. This helps you filter, sort, and limit your data without writing MongoDB query language (MQL) commands manually.
   - It supports common MongoDB query operators, aggregation pipelines, and projections.

4. **Aggregation Framework Support**:
   - MongoDB Compass provides a visual interface for building complex aggregation pipelines, making it easier to perform data transformations, filtering, and analysis.
   - The interface breaks down each stage of the aggregation pipeline for better understanding and testing.

5. **Index Management**:
   - You can create, view, and manage indexes on your MongoDB collections. Indexes improve query performance, and Compass provides insights into the indexes used by queries.

6. **Performance Monitoring**:
   - MongoDB Compass can show you which queries are slow or underperforming, helping you identify bottlenecks in your database.
   - It provides statistics on query execution time, index usage, and other performance metrics.

7. **CRUD Operations**:
   - With Compass, you can create, read, update, and delete (CRUD) documents in your collections through a simple interface.
   - It also provides the option to duplicate documents or delete them in bulk.

8. **Validation Rules**:
   - Compass allows you to define validation rules for your MongoDB collections, helping enforce structure and data integrity.

9. **Data Export and Import**:
   - You can export documents from collections to formats like JSON or CSV.
   - Similarly, you can import data into your MongoDB collections through the Compass interface.

### When to Use MongoDB Compass:
- **Data Exploration**: It's perfect for developers and analysts who want to explore their MongoDB data without using the command line.
- **Debugging**: You can quickly inspect documents and run queries to debug issues within your MongoDB database.
- **Learning**: If you are new to MongoDB, Compass provides an intuitive way to interact with your database and learn how MongoDB works.
- **Aggregation Building**: The visual interface for creating aggregation pipelines is helpful for users who find it difficult to build complex pipelines manually.

### How to Get MongoDB Compass:
1. **Download**: MongoDB Compass is available for download from the [MongoDB website](https://www.mongodb.com/products/compass) for Windows, macOS, and Linux.
2. **Installation**: After downloading, you can install it like any other desktop application. Once installed, you can connect to your MongoDB instance using the connection string.

### Example Usage:
- **Connecting to a MongoDB Database**:
   - Open MongoDB Compass.
   - Paste your MongoDB connection string (like `mongodb://localhost:27017/mydatabase` or a remote URI).
   - Click "Connect" to access your database.
  
- **Viewing and Editing Data**:
   - Once connected, you can browse through databases and collections.
   - Click on a collection to view its documents, where you can inspect and modify them directly through the interface.

### Conclusion:
MongoDB Compass is an essential tool for developers, database administrators, and analysts who use MongoDB. It offers a powerful yet easy-to-use visual interface for managing, querying, and analyzing data, making MongoDB more accessible, especially for users who are not comfortable with the command line or raw queries.

# Jargons related to Databases

Here’s a brief overview of **Cluster**, **Databases**, and **Tables** in the context of data management, especially within database systems:

---

### 1. **Cluster**
   A **Cluster** is typically used to refer to a group of interconnected resources (such as servers, databases, or storage systems) that work together as a single system to handle large-scale workloads. Clustering improves performance, scalability, reliability, and fault tolerance.

   - **In Databases**: 
     - A database cluster refers to multiple database servers running together, often with replication, where each server (or node) holds a copy of the same database. This provides redundancy, failover capability, and load balancing.
     - For example, in a **PostgreSQL cluster**, multiple PostgreSQL instances (servers) work together as part of a distributed system.

   - **In Computing**: 
     - A compute cluster might refer to a group of machines that work together to perform large computations, common in fields like data analysis, AI, or scientific research.

---

### 2. **Database**
   A **Database** is a structured collection of data stored and organized in a way that makes it easy to access, manage, and update.

   - **Purpose**: It’s used to store information such as user records, transactions, or any other kind of structured data.
   - **Types of Databases**: 
     - **Relational Databases** (SQL-based): Data is stored in structured tables, and relationships between tables are defined. Examples include MySQL, PostgreSQL, and Oracle.
     - **NoSQL Databases**: Data is stored in more flexible formats like key-value pairs, documents, or graphs. Examples include MongoDB, Cassandra, and Redis.
   - **Example**: A bank might have a "Customer" database that stores account information like names, balances, and transaction history.

---

### 3. **Tables**
   A **Table** is a fundamental structure in a relational database that organizes data into rows and columns.

   - **Rows (Records)**: Each row represents a single record or entry in the table. For example, in a "Users" table, each row might represent a different user.
   - **Columns (Fields)**: Each column represents a different attribute or field for the data, such as "Name," "Email," or "Phone Number."
   - **Primary Key**: Tables often have a unique identifier known as the primary key (e.g., UserID) to distinguish each record.
   - **Relationships**: Tables can be related to other tables through foreign keys, allowing for more complex data organization.
   
   **Example**: In a "Products" table:
   
   | ProductID | ProductName | Price | StockQuantity |
   |-----------|-------------|-------|---------------|
   | 1         | Laptop      | 1000  | 50            |
   | 2         | Phone       | 500   | 200           |

---

### Putting It Together
In a **clustered database** setup, you can have a **database** that holds multiple **tables**. For example, a clustered PostgreSQL setup might have several databases with tables for user data, transactions, and products, ensuring high availability, scalability, and fault tolerance.



# Document Object Model 

In the context of web development, **DOM** stands for **Document Object Model**. It is a programming interface for web documents that defines the structure of a webpage so that programs can change the document structure, style, and content.

Here are the key points about the DOM:

- **Representation of a Web Page:** The DOM represents the document as a tree of nodes, where each node corresponds to part of the document (e.g., an element, an attribute, or text).
- **Interactive and Dynamic:** Through the DOM, programming languages like JavaScript can interact with and modify the content, structure, and styling of a webpage in real-time.
- **Cross-Platform and Language-Independent:** It can be used with any language that can process XML or HTML, though JavaScript is most commonly used to interact with the DOM in browsers.



Here are several examples of how the DOM can be used to make a website dynamic through JavaScript:

### 1. **Changing HTML Content**
You can change the text, images, or any other HTML content dynamically using the DOM.
```javascript
// Example: Changing text content
document.getElementById("heading").innerHTML = "Welcome to My Website!";
```

### 2. **Modifying CSS Styles**
You can change the appearance of elements dynamically by modifying their CSS styles.
```javascript
// Example: Changing the color of an element
document.getElementById("button").style.backgroundColor = "green";
```

### 3. **Creating and Removing Elements**
You can add or remove HTML elements on the fly using the DOM.
```javascript
// Example: Adding a new paragraph to a div
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a new paragraph!";
document.getElementById("content").appendChild(newParagraph);

// Example: Removing an element
let element = document.getElementById("oldElement");
element.parentNode.removeChild(element);
```

### 4. **Handling Events**
DOM allows you to listen to and respond to user actions, such as clicks, mouse movements, or keyboard input.
```javascript
// Example: Responding to a button click
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Example: Changing content on keypress
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("textBox").innerHTML = "You pressed Enter!";
    }
});
```

### 5. **Form Validation**
You can validate form input dynamically and display error messages or prevent form submission.
```javascript
// Example: Basic form validation on submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    let input = document.getElementById("email").value;
    if (input === "") {
        event.preventDefault(); // Prevent form from submitting
        alert("Email field is required!");
    }
});
```

### 6. **Toggle Classes for Animations**
You can toggle classes to create dynamic animations or other style changes.
```javascript
// Example: Toggling a class for CSS animations
document.getElementById("toggleButton").addEventListener("click", function() {
    document.getElementById("box").classList.toggle("active");
});
```
And the CSS might look like:
```css
#box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: transform 0.5s;
}

#box.active {
    transform: scale(1.5);
}
```

### 7. **Fetching Data and Displaying Results**
You can fetch data (e.g., from an API) and display it dynamically on the page.
```javascript
// Example: Fetching and displaying JSON data
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
      document.getElementById("dataDisplay").innerHTML = "Name: " + data.name;
  });
```

### 8. **Dynamically Updating Attributes**
You can dynamically modify attributes like `src`, `href`, or `alt` in images, links, etc.
```javascript
// Example: Changing image source dynamically
document.getElementById("image").src = "newImage.jpg";

// Example: Updating a link's URL dynamically
document.getElementById("link").href = "https://new-url.com";
```

### 9. **Filtering or Sorting Lists**
You can use the DOM to filter or sort items in a list based on user input.
```javascript
// Example: Filtering a list of items
document.getElementById("filterInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll(".list-item");
    
    items.forEach(function(item) {
        if (item.innerHTML.toLowerCase().includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
```

### 10. **Creating a Simple Modal Popup**
You can create dynamic modal popups using the DOM.
```javascript
// Example: Displaying a modal when a button is clicked
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});

// Example: Closing the modal when the user clicks the close button
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});
```

These examples show how DOM manipulation can create dynamic and interactive web pages.


# Debouncing 
**Debouncing** is a programming technique used to limit the rate at which a function is executed, particularly in response to frequent events such as keystrokes, mouse movements, or window resizing. It ensures that the function is not called multiple times in quick succession, but rather waits for a certain amount of time after the last event before executing.

### How Debouncing Works:
When an event (like typing or scrolling) happens repeatedly, debouncing delays the execution of the function until a specified period of inactivity (called the "wait time" or "cooldown period") has passed since the last event. This is useful for performance optimization, especially for actions that can trigger many times in a short time frame.

### Common Use Cases of Debouncing:
- **Search Input Fields:** To avoid sending multiple API requests or re-rendering results after every keystroke when a user is typing in a search box.
- **Window Resizing:** To prevent multiple unnecessary calculations or layout changes while the user is resizing a window.
- **Scroll Events:** To reduce the frequency of executing a function (like loading more data) during rapid scroll events.

### Example of Debouncing in JavaScript:
Here’s a simple implementation of a debounced function:

```javascript
function debounce(func, wait) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
```

### Example Usage:
Let's say you want to update search results only after the user stops typing for 500 milliseconds.

```javascript
const updateSearchResults = debounce(function() {
    console.log("Fetching search results...");
}, 500);

// Attaching the debounced function to the input event
document.getElementById("searchInput").addEventListener("input", updateSearchResults);
```

### How This Works:
1. **Each Time the User Types:** The `debounce` function is called, and a timer is started for 500 milliseconds (in this example).
2. **If the User Types Again Before 500 ms:** The timer is reset, meaning the function won’t be executed until 500 milliseconds have passed since the last keypress.
3. **If the User Stops Typing for More Than 500 ms:** The debounced function is finally executed, fetching search results only once after the user has finished typing.

### Benefits of Debouncing:
1. **Improves Performance:** By reducing the number of function calls, you minimize redundant processing, improving the website's performance.
2. **Resource Efficient:** Especially important for functions that require network requests (e.g., API calls), database queries, or rendering updates.
3. **Smooth User Experience:** Debouncing avoids laggy or excessive updates, creating a smoother and more efficient interaction for the user.

Debouncing is widely used in front-end development to ensure that resource-intensive functions don’t overwhelm the browser or server during events like typing, scrolling, or resizing.


## Example Use Case of Debouncing

Server Code
```javascript
const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
})

app.listen(port);

```
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function displaySum(){
            let a = document.getElementById("firstInput").value;
            let b = document.getElementById("secondInput").value;
            
            fetch("http://localhost:3000/sum?a="+a+"&b="+ b )
            .then(function(response){
                    console.log(response);
                    
                    response.text()
                        .then(function(ans){
                            document.getElementById("displayText").innerHTML = ans;                    
                        })
                        
                });
        }
        </script>

    <div>
        <input oninput="displaySum()" type="text" name="a" id="firstInput"></input>
    </div>
    <div>
        <input oninput="displaySum()" type="text" id="secondInput"></input>    
    </div>

    <p id="displayText">This is the sum</p>

</body>
</html>
```

This is without Debouncing

![alt text](image.png)

This is with Debouncing
![alt text](image-1.png)

Here only one request went out and not 6 which would have been the case without debouncing

Code used for Debouncing

Server Code
```javascript 
const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
})

app.listen(port);

```
Client Side Code 
``` html 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        
        let timeout;
        function debouncing(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                displaySum();
            },1000);
        }

        function displaySum(){
            let a = document.getElementById("firstInput").value;
            let b = document.getElementById("secondInput").value;
            
            fetch("http://localhost:3000/sum?a="+a+"&b="+ b )
            .then(function(response){
                    console.log(response);
                    
                    response.text()
                        .then(function(ans){
                            document.getElementById("displayText").innerHTML = ans;                    
                        })
                        
                });
        }
        </script>

    <div>
        <input oninput="debouncing()" type="text" name="a" id="firstInput"></input>
    </div>
    <div>
        <input oninput="debouncing()" type="text" id="secondInput"></input>    
    </div>

    <p id="displayText">This is the sum</p>

</body>
</html>

```

# Throtling
**Throttling** is another technique used in web development to control the rate at which a function is executed, particularly for handling frequent events such as scrolling, resizing, or keypresses. Unlike **debouncing**, which waits for a period of inactivity, **throttling** ensures that a function is called at a fixed rate, no matter how many times an event is triggered.

### How Throttling Works:
When an event occurs repeatedly, throttling limits the execution of a function to only once every specified period of time, even if the event continues to trigger frequently. This is particularly useful for improving performance and ensuring that heavy operations (like API calls or DOM manipulations) are not executed too often.

### Common Use Cases of Throttling:
- **Scrolling Events:** Throttling is commonly used to limit the frequency of calculations or DOM updates while a user is scrolling.
- **Window Resizing:** To avoid constantly recalculating layout changes as a window is being resized.
- **API Rate Limiting:** Throttling can ensure that API requests are not sent too frequently, adhering to rate limits imposed by the server.
- **Tracking Mouse Movements:** Limiting how often the position of the mouse is tracked and processed.

### Throttling Example in JavaScript:
Here’s an example of how throttling can be implemented:

```javascript
function throttle(func, limit) {
    let inThrottle;

    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

### Example Usage:
Let’s say you want to limit how often a function is executed while a user is scrolling, ensuring that the function runs at most once every 200 milliseconds.

```javascript
const handleScroll = throttle(function() {
    console.log("Scroll event triggered!");
}, 200);

// Attaching the throttled function to the scroll event
window.addEventListener("scroll", handleScroll);
```

### How This Works:
1. **When the Scroll Event Occurs:** The `handleScroll` function is executed immediately, but it can only be triggered again after 200 milliseconds (or whatever limit is set).
2. **If the Event Happens Frequently:** The function won't execute again until the throttling period (200 ms) has passed. This ensures that even if the user scrolls rapidly, the function is called at a controlled rate.

### Difference Between Throttling and Debouncing:
- **Debouncing:** Waits until a specified time period has passed after the *last event* before executing the function. It's useful when you want to make sure a function only runs after a certain amount of idle time (e.g., typing in a search field).
  
- **Throttling:** Ensures a function is called *at most once* in a specified time period, regardless of how often the event occurs. It's useful when you want to control the frequency of function execution during ongoing events (e.g., scrolling).

### Benefits of Throttling:
1. **Improves Performance:** By limiting the rate at which a function is called, it reduces the load on the browser and improves responsiveness, especially during frequent events like scrolling or resizing.
2. **Predictable Execution:** The function runs at consistent intervals, making the behavior more predictable.
3. **Saves Resources:** Helps avoid redundant function calls that can overwhelm both the client (browser) and server (API calls).

### When to Use Throttling:
- **Scrolling:** To control how often the scroll position is processed.
- **Resizing the Window:** To reduce how often layout recalculations occur.
- **Mouse Movements:** To limit the frequency of position tracking for dynamic interactions.
- **Network Requests:** To prevent overwhelming a server with too many requests in a short time.

Throttling ensures that expensive functions are executed at manageable intervals, providing smooth performance even during frequent, continuous events.

# React Foundation

1. document.createElement
2. document.appendChild
3. element.setAttribute
4. element.children

Here's a breakdown of these JavaScript methods used in the DOM (Document Object Model) for creating and manipulating HTML elements:

### 1. `document.createElement()`
- **Purpose**: Creates a new HTML element.
- **Usage**: This method takes a tag name as an argument (e.g., `div`, `span`, `p`, etc.) and creates a new element of that type.
- **Syntax**: 
  ```js
  let element = document.createElement(tagName);
  ```
  **Example**:
  ```js
  let div = document.createElement('div'); // Creates a new div element
  ```

### 2. `document.appendChild()`
- **Purpose**: Appends a child element to a parent element.
- **Usage**: Adds a node to the end of the list of children of a specified parent node.
- **Syntax**:
  ```js
  parentElement.appendChild(newElement);
  ```
  **Example**:
  ```js
  let div = document.createElement('div');
  document.body.appendChild(div); // Appends the div element to the body of the document
  ```

### 3. `element.setAttribute()`
- **Purpose**: Sets a new attribute or changes the value of an existing attribute on an element.
- **Usage**: This method takes two arguments: the name of the attribute and the value to assign to it.
- **Syntax**:
  ```js
  element.setAttribute(attributeName, attributeValue);
  ```
  **Example**:
  ```js
  let img = document.createElement('img');
  img.setAttribute('src', 'image.jpg'); // Sets the src attribute of the img element
  ```

### 4. `element.children`
- **Purpose**: A read-only property that returns a live HTMLCollection of the child elements of a specified element.
- **Usage**: It allows you to access and manipulate the child elements of a parent.
- **Syntax**:
  ```js
  let children = parentElement.children;
  ```
  **Example**:
  ```js
  let div = document.createElement('div');
  div.appendChild(document.createElement('p')); // Add a child element
  console.log(div.children); // Returns an HTMLCollection of the child elements
  ```

These methods are essential for dynamically creating and modifying HTML elements within a web page using JavaScript.

## Dynamic DOM without Server

``` javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
  <input type="text" id="description" placeholder="Todo description"></input> <br /><br />

  <div id="container">

  </div>
  <script>
    function createChild(title, description, id) {
      const child = document.createElement("div");
      const firstGrandParent = document.createElement("div");
      firstGrandParent.innerHTML = title;
      const secondGrandParent = document.createElement("div");
      secondGrandParent.innerHTML = description;
      const thirdGrandParent = document.createElement("button");
      thirdGrandParent.innerHTML = "Mark as done";
      thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
      child.appendChild(firstGrandParent);
      child.appendChild(secondGrandParent);
      child.appendChild(thirdGrandParent)
      child.setAttribute("id", id);
      return child;
    }
    // State will always be an array
    // Every element of state would have a title, description and id
    //
    //
    function updateDomAccToState(state) {
        const parent = document.getElementById("container");
        parent.innerHTML = "";
        for (let i = 0; i<state.length; i++) {
            const child = createChild(state[i].title, state[i].description, state[i].id);
            parent.appendChild(child);
        }
    }

    updateDomAccToState([{
      title: "Item 1",
      description: "Desc for Item 1",
      id:1
    },{
      title: "Item 2",
      description: "Desc for Item 2",
      id:2
    }
    ])

    // window.setInterval(async function() {
    //     const res = await fetch("https://sum-server.100xdevs.com/todos")
    //     const json = await res.json();
    //     updateDomAccToState(json.todos)
    // }, 5000)

  </script>
</body>

</html>

```

## Dynamic DOM with Server
Express server

``` javascript
const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());

const array = [{
	title: "Item 1",
	description: "Desc 1",
	id: 1
},{
	title: "Item 2",
	description: "Desc 2",
	id: 2
}];

app.get('/', (req, res) => {
	res.json({ todos: array }); // Send a proper JSON response with a key like "todos"
});

app.listen(port);



```
``` javascript
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
  <input type="text" id="description" placeholder="Todo description"></input> <br /><br />

  <div id="container">

  </div>
  <script>
    function createChild(title, description, id) {
      const child = document.createElement("div");
      const firstGrandParent = document.createElement("div");
      firstGrandParent.innerHTML = title;
      const secondGrandParent = document.createElement("div");
      secondGrandParent.innerHTML = description;
      const thirdGrandParent = document.createElement("button");
      thirdGrandParent.innerHTML = "Mark as done";
      thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
      child.appendChild(firstGrandParent);
      child.appendChild(secondGrandParent);
      child.appendChild(thirdGrandParent)
      child.setAttribute("id", id);
      return child;
    }
    // State will always be an array
    // Every element of state would have a title, description and id
    //
    //
    function updateDomAccToState(state) {
        const parent = document.getElementById("container");
        parent.innerHTML = "";
        for (let i = 0; i<state.length; i++) {
            const child = createChild(state[i].title, state[i].description, state[i].id);
            parent.appendChild(child);
        }
    }

    window.setInterval(async function() {
        const res = await fetch("http://localhost:3000/");
        const json = await res.json();
        updateDomAccToState(json.todos)
    }, 5000)

  </script>
</body>

</html>

```

## What is react?
React is a **JavaScript library** developed by Facebook for building user interfaces, primarily for single-page applications. It helps developers create fast, scalable, and dynamic web applications by managing the UI state efficiently. React focuses on building reusable components, making it easier to manage complex UIs.

### Key Concepts of What React Does:

### 1. **Component-Based Architecture**:
   - **Components** are the building blocks of a React application. Each component represents a part of the user interface (UI), such as a button, form, or entire page section.
   - Components are reusable, meaning the same logic and structure can be applied across different parts of the app. Components can be either **functional** or **class-based**.
   - Example:
     ```jsx
     function Greeting(props) {
       return <h1>Hello, {props.name}!</h1>;
     }
     ```
     Here, `Greeting` is a simple React component that renders a greeting message.

### 2. **Declarative UI**:
   - In React, you declare what the UI should look like based on the current state, and React takes care of updating the DOM to match that state.
   - Rather than manually updating the UI when data changes, you update the **state** in React, and it handles the UI updates for you.
   - Example: If a button click changes the state, React automatically re-renders the part of the UI that depends on that state.

### 3. **Virtual DOM**:
   - The **Virtual DOM** is one of React's key optimizations. Instead of directly manipulating the **real DOM** (which can be slow), React creates a lightweight, in-memory representation of the actual DOM.
   - When state or data changes, React compares the virtual DOM with the previous version (this process is called **reconciliation**) and updates only the parts of the real DOM that have changed.
   - This approach minimizes the number of costly updates to the DOM and makes React apps faster and more efficient.

### 4. **State and Props**:
   - **State**: Refers to data that is local to a component and can change over time. When the state changes, React re-renders the component to reflect those changes.
     - Example:
       ```jsx
       const [count, setCount] = useState(0);
       ```
   - **Props**: Short for properties, props are used to pass data from one component (usually the parent) to another (usually the child). Props are immutable and define how the component behaves.
     - Example:
       ```jsx
       <Greeting name="John" />
       ```

### 5. **One-Way Data Binding**:
   - React enforces **one-way data binding**, meaning data flows in a single direction, from parent components down to child components via props.
   - This helps ensure that the flow of data is predictable, making the app easier to debug and understand.

### 6. **JSX Syntax**:
   - React uses **JSX** (JavaScript XML), a syntax extension of JavaScript that looks like HTML but is written within JavaScript.
   - JSX makes it easier to write and visualize component structures. React components return JSX, which is then rendered to the DOM.
   - Example:
     ```jsx
     const element = <h1>Hello, world!</h1>;
     ```

### 7. **React Hooks**:
   - Hooks, such as `useState` and `useEffect`, allow developers to use state and lifecycle features in functional components, making it easier to manage state and side effects.
   - `useState` helps manage state in functional components, while `useEffect` handles side effects (like fetching data or subscribing to events).

   Example:
   ```jsx
   import React, { useState, useEffect } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `Count is ${count}`;
     }, [count]);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Increment
         </button>
       </div>
     );
   }
   ```

### 8. **Component Lifecycle**:
   - React class components have lifecycle methods (like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) that let you run code at specific points in a component's lifecycle.
   - With hooks (`useEffect`), you can handle side effects and lifecycle events in functional components.

### 9. **Routing**:
   - React itself is not a full framework and doesn't come with built-in routing, but libraries like **React Router** allow developers to manage navigation between pages or views in a React app.

### 10. **React Native**:
   - React can be extended beyond web development to mobile apps using **React Native**. This allows developers to use React’s component-based approach and state management to build mobile apps for both iOS and Android.

### Benefits of Using React:

1. **Reusable Components**: Build once, reuse anywhere. React components can be easily reused throughout the app, speeding up development.
   
2. **Efficient Updates**: The virtual DOM ensures efficient and minimal updates to the real DOM, improving performance, especially in large applications.

3. **Modular Structure**: React's component-based architecture makes it easy to break down complex UIs into smaller, manageable pieces.

4. **Unidirectional Data Flow**: One-way data binding ensures that data always flows in one direction, making the app easier to debug and maintain.

5. **Large Ecosystem**: React has a large community, which means a wide variety of tools, libraries, and frameworks are available for state management, routing, testing, and more.

React helps developers build fast, dynamic, and interactive web applications by handling UI changes efficiently, promoting component reusability, and simplifying the management of state and props.

## What is Virtual DOM

The **Virtual DOM** (VDOM) is a lightweight, in-memory representation of the **actual DOM** (Document Object Model). It is one of React's key optimizations that helps improve the performance of web applications by minimizing expensive updates to the real DOM.

### How the Virtual DOM Works:

1. **Initial Render**:
   - When a React component is rendered for the first time, React creates a virtual representation of the real DOM elements (the Virtual DOM). This virtual DOM is just a JavaScript object that mimics the structure of the real DOM but is faster to manipulate.

2. **State or Data Change**:
   - When the state or props of a React component change, React creates a new virtual DOM to represent the updated UI.

3. **Diffing Algorithm (Reconciliation)**:
   - React uses a **diffing algorithm** to compare the new virtual DOM with the previous one. This process is called **reconciliation**.
   - The algorithm identifies what has changed by comparing the two versions of the virtual DOM, pinpointing differences between the old and new representations (e.g., which elements were added, removed, or updated).

4. **Update Real DOM**:
   - Once React knows what has changed, it updates only the parts of the real DOM that need to be changed. Instead of re-rendering the entire DOM, React makes **minimal updates** to the real DOM, which makes the app faster and more efficient.

### Why the Virtual DOM is Important:

1. **Efficient DOM Manipulation**:
   - Direct manipulation of the real DOM is slow and computationally expensive. The DOM was not designed for frequent updates, and making changes to it often requires reflow (recalculating the layout of the page) and repaint (updating the visible content).
   - By using the Virtual DOM, React reduces the number of direct manipulations to the real DOM, which leads to faster updates and a more responsive user interface.

2. **Batching Changes**:
   - React batches multiple updates to the virtual DOM before applying them to the real DOM. This reduces the number of times the real DOM is manipulated, improving performance further.

3. **Predictability and Debugging**:
   - The virtual DOM makes state and UI changes predictable. Since React manages the DOM updates for you, you don't have to manually update or optimize the DOM—React does it automatically and efficiently.

### Visual Example of How the Virtual DOM Works:

1. **Initial Virtual DOM Tree**:
   ```html
   <div id="app">
     <h1>Hello, World!</h1>
     <p>React is awesome.</p>
   </div>
   ```

2. **State Change (e.g., a button click)**:
   - Let’s say a state change causes the text in the `<h1>` tag to change to "Hello, React!"

3. **New Virtual DOM**:
   ```html
   <div id="app">
     <h1>Hello, React!</h1>
     <p>React is awesome.</p>
   </div>
   ```

4. **Virtual DOM Diffing**:
   - React compares the old and new virtual DOMs. It identifies that only the `<h1>` element has changed.

5. **Real DOM Update**:
   - Instead of re-rendering the entire DOM tree, React only updates the text content of the `<h1>` tag in the real DOM.

### Summary:

- The Virtual DOM is a **JavaScript representation** of the real DOM.
- React uses it to **improve performance** by minimizing updates to the real DOM.
- The **diffing algorithm** compares the old and new virtual DOMs to find what changes need to be applied to the real DOM.
- This approach ensures that React applications remain **fast, scalable**, and **efficient**, even with frequent updates or large datasets.

In essence, the Virtual DOM helps React efficiently manage updates, enabling smoother user interfaces and reducing the overhead of direct DOM manipulation.

## What is React Native
**React Native** is an open-source framework developed by Facebook that allows developers to build **mobile applications** for both **iOS** and **Android** platforms using **JavaScript** and **React**. Unlike traditional mobile development (which uses platform-specific languages like Swift for iOS or Kotlin for Android), React Native enables developers to write code once and deploy it across multiple platforms.

### Key Features of React Native:

1. **Cross-Platform Development**:
   - With React Native, you can write one codebase in JavaScript and share it between iOS and Android, reducing development time and cost.
   - Although some platform-specific code might still be necessary (for unique features of iOS or Android), the majority of the code can be reused across both platforms.

2. **Native Components**:
   - React Native does not rely on web technologies like HTML or CSS to render components. Instead, it uses **native components** that map directly to the platform’s native UI building blocks.
   - For example, `Text`, `View`, and `Button` in React Native are abstractions of the native `UILabel`, `UIView`, and `UIButton` on iOS, and their equivalents on Android.

3. **Hot Reloading**:
   - React Native supports **hot reloading**, which allows developers to instantly see the changes they’ve made without reloading the entire app. This speeds up development and testing significantly.

4. **React Component Model**:
   - React Native uses the same **component-based architecture** as React, meaning developers familiar with React for the web can easily transition to mobile development using React Native.
   - Components manage their own state and UI, making the code modular and reusable.

5. **Performance**:
   - React Native apps offer performance close to that of native apps because they use native UI components. Unlike hybrid frameworks (such as Cordova), which render web views inside mobile apps, React Native interacts directly with native platform APIs, leading to faster and more responsive apps.

6. **Access to Native Modules and APIs**:
   - React Native allows you to write platform-specific code when needed (e.g., using Swift for iOS or Java/Kotlin for Android) by **bridging** native modules.
   - You can use third-party libraries to access device features such as the camera, GPS, accelerometer, and more, or write custom native code and integrate it with the JavaScript code.

7. **Large Community and Ecosystem**:
   - Since React Native is widely used and backed by Facebook, it has a large and active community that contributes to libraries, tools, and documentation. This ecosystem makes it easier for developers to find solutions and build apps efficiently.

### Example of React Native Code:

```jsx
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
```

- This is a simple React Native app that displays a button and a counter. When the button is pressed, the counter increments, and the text is updated. The `View`, `Text`, and `Button` components are all React Native components that map to their respective native elements.

### Advantages of React Native:

1. **Faster Development**: With a single codebase for iOS and Android, development is faster, especially when paired with hot reloading.
   
2. **Cost-Effective**: Building and maintaining one codebase instead of two (for iOS and Android) can reduce costs for businesses.

3. **Native-Like Performance**: React Native apps provide near-native performance and access to device features.

4. **Strong Ecosystem**: React Native has strong community support, with plenty of third-party libraries and integrations available.

5. **Reusable Code**: A significant portion of the code can be shared across platforms, making it easier to maintain and scale apps.

### Disadvantages of React Native:

1. **Platform-Specific Code**: In some cases, platform-specific code is still required for certain features or optimizations, which can reduce the benefits of shared code.

2. **Performance Limitations**: While React Native apps are fast, there are still performance limitations compared to fully native apps, particularly in areas like graphics-heavy applications (e.g., games).

3. **Complex Native Integrations**: If an app requires heavy use of native features or third-party native libraries, bridging between JavaScript and native code can become complex.

### React Native vs. Traditional Native Development:

- **React Native**: Write mostly in JavaScript and share code between iOS and Android. The app uses native components under the hood for UI and bridges JavaScript code to native APIs.
  
- **Traditional Native Development**: Write separate code for iOS (Swift/Objective-C) and Android (Kotlin/Java). This provides more control over platform-specific optimizations but requires more time and resources to maintain two codebases.

### Companies Using React Native:
- **Facebook**: React Native is used in the Facebook app for features like the Ads Manager.
- **Instagram**: Parts of the Instagram app, such as the profile and notification pages, are built using React Native.
- **Uber Eats**: Uber Eats uses React Native for parts of its app interface.
- **Tesla**: The Tesla mobile app, which controls vehicle features, is built using React Native.

### Summary:
React Native is a powerful framework that allows developers to build mobile applications for both iOS and Android using JavaScript and React. It offers near-native performance, fast development with code reusability, and access to native device features, making it a popular choice for building mobile apps in a more efficient and cost-effective way.

## What is React and React DOM

**React** is a **JavaScript library** developed by Facebook (now Meta) for building user interfaces, primarily for web applications. It's mainly used for creating interactive and dynamic user interfaces with the goal of improving the performance and modularity of UI components. React allows developers to build reusable components that manage their own state, which can then be combined to create complex UIs.

Here's a breakdown of the two terms:

1. **React**: 
   - React itself is not a full "website creation framework" but rather a **library** specifically focused on building user interfaces.
   - It allows you to build **components**, which are small, reusable pieces of UI.
   - It helps manage the **state** and efficiently update the UI when the state changes.
   - React focuses on the **view layer** in an application (often considered the "V" in the MVC pattern).

2. **React-DOM**:
   - **React-DOM** is an extension of React, which allows React components to be rendered and interacted with in the browser. It's responsible for updating the **DOM** (Document Object Model).
   - React by itself is UI-centric and doesn't interact directly with the DOM. React-DOM connects React components to the **web page's HTML structure**.
   - You need **React-DOM** when you're building **web applications**, as it provides the methods to render components in the browser.

### Why use React?
- **Efficient updates**: React uses a virtual DOM, which efficiently updates only the parts of the real DOM that have changed, improving performance.
- **Component-based architecture**: It allows for modularity and reusability, making code easier to maintain and extend.
- **State management**: React simplifies how data flows and changes in an application through state and props.
- **Ecosystem**: It has a large ecosystem of libraries and tools, and it's widely used for building web and mobile apps (with React Native).

### Summary:
- **React**: A library for building UI components.
- **React-DOM**: The library that renders React components into the browser DOM, making them interactive.

In the context of website creation, React is used to **build dynamic front-end UIs**. You would still need additional tools (like React-Router, state management libraries, and sometimes server-side tools) for a full-fledged web application.

# Vite 
**Vite** is a modern build tool that provides an extremely fast development environment for front-end applications. It was created by Evan You, the same developer behind Vue.js, and it is designed to address the slow development times often experienced with traditional build tools like Webpack.

### Key Features of Vite:
1. **Lightning-fast development server**:
   - Vite serves your code directly via native ES modules. This avoids the need for bundling during development, making it faster.
   - Instead of pre-bundling the entire app, Vite only processes the files that have been modified or are requested by the browser. This results in **instant server startup** times, even for large projects.

2. **Hot Module Replacement (HMR)**:
   - Vite has built-in **hot module replacement** (HMR), allowing developers to see changes reflected in the browser immediately as they edit files. This enhances the development experience by reducing reload times.

3. **Optimized build using Rollup**:
   - For production, Vite uses **Rollup**, a powerful JavaScript bundler, to bundle and optimize your code. This ensures that your code is efficiently compiled for production environments, including optimizations like **tree-shaking** and **code splitting**.

4. **Framework-agnostic**:
   - While Vite was initially built with **Vue.js** in mind, it now supports other front-end frameworks like **React**, **Svelte**, and even **Vanilla JavaScript** projects.

5. **Pre-configured for modern web development**:
   - Vite comes with built-in support for common features like CSS preprocessing, TypeScript, JSX, and more, without extensive configuration.

### Why Use Vite?
- **Faster development**: Traditional bundlers can be slow because they process your entire project before running the dev server. Vite avoids this by leveraging native ES modules and only processing files as needed.
- **Better performance for large projects**: As your project grows, Vite remains fast because it doesn't need to recompile the entire codebase when you make changes.
- **Zero config**: It's easy to get started with, requiring little to no configuration for most use cases.
  
### How does Vite work?
- **Development mode**: Vite serves files directly as ES modules. Modern browsers can handle these modules natively, so Vite doesn't need to bundle the files during development.
- **Production mode**: When you're ready to deploy your app, Vite uses Rollup to bundle your application into optimized assets, similar to how other bundlers like Webpack work in production mode.

### Vite vs Webpack:
- **Speed**: Vite is generally much faster in development mode compared to Webpack because of its "no-bundle" approach.
- **Simplicity**: Vite provides a more streamlined and modern developer experience with little configuration compared to Webpack's sometimes complex setup.

### When should you use Vite?
- When you want to build a **modern web application** and prioritize a fast and smooth development experience.
- It's a good fit for **single-page applications** (SPAs), **progressive web apps** (PWAs), or projects that use modern front-end frameworks like React, Vue, and Svelte.

In summary, Vite is a modern and fast development tool designed to improve both **development speed** and **build efficiency** in modern web projects.

# what is JSX


## What are state in react
In React, **state** refers to an object that holds data that can change over time and determines how the component renders and behaves. It is one of the core concepts in React used to create dynamic and interactive user interfaces.

### Key Points About State in React:

1. **State is Mutable**:
   - Unlike props (which are immutable), the state is mutable and can change. When the state changes, React re-renders the component to reflect those changes.

2. **State is Local and Isolated**:
   - Each component can have its own state, and that state is private to the component. It’s not shared with other components unless passed down as props.

3. **Initial State**:
   - State can be initialized when a component is created, typically in the constructor or directly using the `useState` hook (for functional components).

4. **State Updates are Asynchronous**:
   - State changes don’t happen immediately. React batches multiple updates and processes them asynchronously for performance reasons.

5. **State Triggers Re-rendering**:
   - When state is updated, the component re-renders with the new state values. This ensures that the UI stays in sync with the underlying data.

### Managing State in Different Types of Components:

#### 1. **Class Components**:
   In class-based components, state is managed using the `this.state` object, and it’s updated with `this.setState()`.

   **Example**:
   ```jsx
   class MyComponent extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         count: 0
       };
     }

     increment = () => {
       this.setState({ count: this.state.count + 1 });
     };

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={this.increment}>Increment</button>
         </div>
       );
     }
   }
   ```

#### 2. **Functional Components with Hooks**:
   In functional components, the `useState` hook is used to add state.

   **Example**:
   ```jsx
   import React, { useState } from 'react';

   function MyComponent() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

   - `useState` is a hook that takes the initial state as an argument and returns an array with two values: the current state and a function to update the state.

### Key Differences Between Props and State:
- **Props** are passed from parent to child and are immutable, whereas **state** is local to the component and can change.
- Changing **state** re-renders the component, whereas **props** don’t directly trigger a re-render unless they change in the parent component.

### Common State Use Cases:
- Tracking user input in forms (e.g., text fields, checkboxes).
- Managing UI behavior (e.g., toggling visibility, changing styles).
- Handling dynamic data from APIs or databases.

State is central to creating interactive applications where the UI responds to user actions or data changes over time.


# Note

There are three important things in react
1. State
In React, state is a built-in object that allows components to store and manage data that can change over time. This data represents the current state of the component, and when it changes, the component re-renders to reflect those changes in the UI

2. Components
In React, components are the building blocks of user interfaces. They are independent, reusable pieces of code that return HTML-like elements (JSX). Think of them as self-contained units that encapsulate a specific part of your UI, such as a button, a form, or a list

3. Re Rendering
In React JS, re-rendering is the process of updating the UI when the underlying data changes. It's a core mechanism that ensures the UI stays in sync with the application state

while developing an application, you have to define a component once 
and then all that is to be done is update the state of the app
React takes care of rerendering the application

## React ToDo Application Example
```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
 	title: "New Todo 1",
	description: "Desc ToDo 1",
	stats: false
  },{
	title: "New Todo 2",
	description: "Desc ToDo 123",
	stats: false
 
  },{
	title: "New Todo 1123",
	description: "Desc ToDo 1",
	stats: false
 
  }]);

  function addTodo(){
	setTodos([...todos,{
		title: "New State Addition",
		description:"New Ones here"
	}])
  }

  return (
	<div>
	<button onClick={addTodo}>Add Some Todo</button>
	{todos.map(function(todo){
		return <Todo title={todo.title} description={todo.description}/>
	})}
  	</div>
  )
  
}

function Todo(props){  //this is a component in which we are passing props
	return <div>
			<h1>{props.title}</h1>
			<h2>{props.description}</h2>
		</div>
}

export default App

```

# Spread Operator
In JavaScript, the ... syntax is called the spread operator or spread syntax.
It allows you to:
Expand an iterable object: (like an array, string, or object literal) into its individual elements.
Concatenate arrays: easily.
Pass multiple arguments: to a function from an array.
Copy objects or arrays: creating shallow copies.

Examples:
``` JavaScript
// Concatenating arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Spreading function arguments
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6

// Copying objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { a: 1, b: 2 }

```

# Object Destructring

Object destructuring is a feature in JavaScript (and some other programming languages) that allows you to extract properties from objects and assign them to variables in a more concise and readable way. It simplifies the process of working with object data, making it easier to work with specific properties without manually accessing each one.

### Basic Syntax

The syntax for object destructuring looks like this:

```javascript
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// Destructuring
const { name, age } = person;

console.log(name); // "John"
console.log(age);  // 30
```

In this example:
- `{ name, age }` on the left side of the assignment is the destructuring pattern.
- The variables `name` and `age` are created and assigned the corresponding values from the `person` object.

### Advantages of Object Destructuring
1. **Simplicity**: Reduces the amount of code needed to access object properties.
2. **Readability**: Makes the code easier to read and understand.
3. **Default Values**: You can assign default values to variables if the property is `undefined`.
4. **Renaming Variables**: You can rename variables while destructuring.

### Advanced Features
1. **Default Values**:
   ```javascript
   const { name, city = "Unknown" } = person;
   console.log(city); // "Unknown" (since `city` does not exist in `person`)
   ```

2. **Renaming Variables**:
   ```javascript
   const { name: firstName } = person;
   console.log(firstName); // "John"
   ```

3. **Nested Destructuring**:
   ```javascript
   const user = {
     details: {
       name: "Alice",
       age: 25,
     },
   };

   const { details: { name, age } } = user;
   console.log(name); // "Alice"
   console.log(age);  // 25
   ```

Object destructuring is widely used for handling function parameters, simplifying code, and enhancing the readability and maintainability of JavaScript code.

# Reconcilers

In React, the reconciler is a core part of the library responsible for updating the user interface (UI) efficiently. It is an algorithm that determines how React should update the DOM (Document Object Model) to match the new state of the application with minimal changes.

### **How Reconciliation Works in React:**

1. **Virtual DOM:**
   - React maintains a lightweight representation of the real DOM, called the Virtual DOM. When the state of a component changes, React creates a new Virtual DOM tree representing the new UI.

2. **Diffing Algorithm:**
   - The reconciler uses a "diffing" algorithm to compare the old Virtual DOM tree with the new one. This process is called "reconciliation." The algorithm determines the minimum number of changes needed to update the real DOM to match the new Virtual DOM.

3. **Efficient Updates:**
   - Instead of re-rendering the entire UI, the reconciler identifies which parts of the DOM need to be updated, added, or removed. This selective update process improves performance by only making the necessary changes.

4. **Keyed Elements:**
   - To optimize performance, especially when dealing with lists, React uses keys to identify which elements have changed. Keys help the reconciler correctly match elements between the old and new Virtual DOM trees, minimizing re-renders.

5. **Batching Updates:**
   - React batches multiple updates together to reduce the number of times the reconciler has to work on the DOM, further enhancing performance.

### **Key Components of React's Reconciler:**

- **Fiber Reconciler:** React’s Fiber reconciler, introduced in React 16, is an incremental and more flexible reconciliation algorithm compared to the older Stack reconciler. It breaks down rendering work into units and spreads it across multiple frames, which improves performance and responsiveness, especially for complex and large applications.

- **Priority-Based Updates:** Fiber allows React to prioritize updates based on their importance. For example, user interactions are prioritized over less urgent updates, ensuring a smoother user experience.

### **Why Reconciliation is Important:**

- **Performance Optimization:** By updating only the parts of the UI that have changed, the reconciler reduces the computational cost and makes React applications fast and efficient.
- **Smooth User Experience:** It allows React to handle complex UIs while maintaining responsiveness and minimizing layout thrashing (rapid DOM changes).

In essence, the reconciler is what makes React's component-based architecture powerful and efficient, allowing developers to build dynamic UIs without directly manipulating the DOM.

# React Deep Dive

## React Returns
1. Fragments
2. <></>
3. why cant return more than one tag

### **React Returns and Handling Multiple Elements**

React components must return a single element. This restriction is due to how React’s rendering engine works: it expects a single JSX element as the return value. However, you can group multiple elements together in a way that makes them appear as one, often using wrappers like `<div>`, React Fragments, or the shorthand `<>...</>` syntax.

Here's an overview of the concepts you mentioned and why React behaves this way:

### **1. Fragments in React**

**React Fragments** allow you to return multiple elements without adding extra nodes to the DOM. This is particularly useful when you don't want to wrap your elements inside unnecessary parent tags, such as a `<div>`, which could affect styling, layout, or accessibility.

**How to Use React Fragments:**

- **Full Fragment Syntax:**
  ```javascript
  import React from 'react';

  function MyComponent() {
    return (
      <React.Fragment>
        <h1>Title</h1>
        <p>Paragraph content.</p>
      </React.Fragment>
    );
  }
  ```

- **Short Fragment Syntax (`<>...</>`):**
  - A shorthand for `React.Fragment`, making the code cleaner.
  ```javascript
  function MyComponent() {
    return (
      <>
        <h1>Title</h1>
        <p>Paragraph content.</p>
      </>
    );
  }
  ```

### **2. Shorthand Syntax (`<>...</>`)**

The shorthand syntax, `<>...</>`, is a cleaner, more concise way to use React Fragments without having to type `React.Fragment`. It's functionally the same but is more readable.

- **Example Using `<>...</>`:**
  ```javascript
  function Example() {
    return (
      <>
        <h1>Hello, World!</h1>
        <p>This is a fragment.</p>
      </>
    );
  }
  ```

### **3. Why You Can't Return More Than One Tag**

React components must return a single element because:

1. **Single Root Requirement:**
   - React's reconciliation process relies on having a single root element in each component. This ensures predictable rendering and efficient updates.

2. **Virtual DOM Structure:**
   - The virtual DOM is a tree structure where each component returns a single node. Multiple root nodes would break the tree structure, causing rendering errors.

3. **Wrapper Solution:**
   - To work around the restriction of returning multiple elements, React requires you to wrap your elements in a single parent element, such as a `<div>`, `<React.Fragment>`, or the shorthand `<>...</>`. This wrapper provides the necessary single root.

### **Example of What Not to Do:**

React would throw an error if you tried to return multiple sibling elements directly without a wrapper:

```javascript
// This will throw an error because there are multiple top-level elements.
function ErrorExample() {
  return (
    <h1>Title</h1>
    <p>Paragraph content.</p>
  );
}
```

### **How to Fix the Error:**

Wrap the elements in a single parent, like so:

```javascript
// Using a React Fragment
function CorrectExample() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph content.</p>
    </>
  );
}
```

### **Key Takeaways**

- **Fragments and `<>...</>`** allow you to group multiple elements without adding extra nodes to the DOM.
- **React components must return a single root element** to maintain the integrity of the virtual DOM structure.
- Using **Fragments avoids unnecessary HTML** wrappers, keeping your output clean and lightweight.

This approach keeps React’s rendering predictable and efficient, aligning with how the library manages the virtual DOM. Let me know if you need further clarification!

## Rerendering

### **Re-rendering in React Explained**

**Re-rendering** in React refers to the process where a component is rendered again after its initial render. This happens whenever the component's state or props change, causing React to update the component's output to reflect the latest data or UI changes.

### **Why Re-rendering Occurs**

Re-rendering ensures that your UI stays up-to-date with the latest data or changes. The main triggers for a re-render include:

1. **State Changes:**
   - When a component's state is updated using `setState` (in class components) or state hooks like `useState`, React re-renders the component to reflect the updated state.

   ```javascript
   const [count, setCount] = useState(0);
   // Clicking this button will trigger a re-render
   <button onClick={() => setCount(count + 1)}>Increase Count</button>;
   ```

2. **Props Changes:**
   - If a component receives new or changed props, it re-renders to display the updated data passed down from its parent component.

   ```javascript
   // If parent changes the value of `title`, the child re-renders.
   <ChildComponent title={parentTitle} />;
   ```

3. **Context Updates:**
   - When a component consumes data from a `Context` provider, it will re-render whenever the context value changes.

4. **Parent Component Re-renders:**
   - If a parent component re-renders, its child components will also re-render unless they are optimized to prevent unnecessary updates.

### **How React Manages Re-rendering Efficiently**

React employs a reconciliation process that uses a virtual DOM to efficiently manage re-renders:

1. **Virtual DOM Diffing:**
   - React maintains a virtual representation of the DOM. When a component’s state or props change, React compares the new virtual DOM tree with the previous one to detect what has changed.

2. **Updating Only Changed Parts:**
   - After diffing, React applies only the necessary updates to the actual DOM, minimizing expensive DOM manipulations and improving performance.

### **Preventing Unnecessary Re-renders**

Unnecessary re-renders can impact performance, so React provides several ways to optimize components:

1. **`React.memo()`:**
   - `React.memo` is a higher-order component that prevents functional components from re-rendering unless their props change.

   ```javascript
   const MyComponent = React.memo(function MyComponent({ prop }) {
     // This component will only re-render if `prop` changes.
     return <div>{prop}</div>;
   });
   ```

2. **`shouldComponentUpdate()`:**
   - In class components, this lifecycle method can be used to control whether a component should re-render in response to changes.

3. **`useCallback` and `useMemo`:**
   - These hooks help prevent re-creating functions and values on every render, optimizing performance when used correctly.

4. **Avoid Inline Functions and Objects:**
   - Inline functions and objects are recreated on every render, which can cause child components to re-render unnecessarily.

### **Key Points to Remember**

- **Re-rendering** keeps the UI updated but can be costly if not managed properly.
- React uses virtual DOM diffing to efficiently handle updates.
- Optimization techniques like `React.memo`, `useCallback`, and careful state management can help prevent unnecessary re-renders.

Let me know if you need more details on a specific aspect of re-rendering in React!

## Re-rendering happening twice on load

The issue where the `DisplayText` component renders four times upon the initial page load (without clicking the button) can be attributed to how React's Strict Mode works in development. This behavior is not due to any problem in your code logic but is related to how React handles components in a development environment.

### **Reason for Multiple Renders in Development Mode:**

1. **React Strict Mode:**
   - When using React in development mode (particularly with Create React App or Vite), components are often rendered twice on purpose when Strict Mode is enabled. This is done to help developers identify potential side effects in their components. 
   - React renders components twice in development to catch side effects and ensure components are resilient against potential bugs.

2. **Strict Mode in Development Only:**
   - This behavior only occurs in development mode to highlight issues like side effects in `useEffect`, unintentional state mutations, or other potentially problematic patterns.
   - In production, React will not render components twice like this, and your `DisplayText` will render only twice as you expect.

### **Solution: Disabling Strict Mode**

If you want to disable this double-render behavior in development, you can remove or comment out the `StrictMode` wrapper in your `index.js` (or `main.jsx` for Vite) file:

#### **index.js / main.jsx Example:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Remove React.StrictMode wrapper to prevent double renders
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
```

**To:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Rendering without StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
```

### **Key Takeaways:**

- **Strict Mode's Purpose:** Strict Mode is beneficial during development because it helps highlight potential issues. However, it doesn't impact production performance or behavior.
- **Expected Behavior in Production:** When deployed, the component will render only once per instance, behaving as intended.

Let me know if you need further clarifications or have other questions regarding React rendering behavior!

## key in react 
### **Keys in React: What They Are and Why They Matter**

**Keys** are special attributes you can add to elements when rendering lists of items in React. They are used to help React identify which items have changed, been added, or been removed. Keys provide a way for React to keep track of elements and optimize the re-rendering process, ensuring that the DOM is updated efficiently.

### **Why Are Keys Important?**

1. **Identifying Elements Uniquely:**
   - Keys help React identify which elements need to be updated, re-ordered, or removed when the state of a list changes. Without keys, React would have to re-render all the elements, even if only one of them changed.

2. **Improving Performance:**
   - By using keys, React can selectively update only the parts of the DOM that have changed, improving the performance of your application.

3. **Maintaining Component State:**
   - Keys also help in maintaining the state of components across renders. For example, if you have an input inside a list, a key ensures that React knows which input corresponds to which data item.

### **How Keys Work in React**

- When rendering a list of elements, each element should have a unique key. This allows React to:
  - Compare the list of items between renders.
  - Keep track of each element by its key, rather than its position in the list.
  
- React recommends using a stable, unique key for each item in the list, such as:
  - A unique ID from your data.
  - The index of the item (although this is not recommended if the list can change order, as it may lead to unexpected behavior).

### **Example of Using Keys**

Here is an example of how keys are used in a React component rendering a list:

```javascript
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Do the dishes' },
    { id: 2, task: 'Take out the trash' },
    { id: 3, task: 'Mow the lawn' },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        // Use a unique key from the data (e.g., id)
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
```

### **Choosing the Right Key**

1. **Unique IDs from Data:**
   - The best practice is to use unique identifiers from your data as keys. For example, a user ID, a task ID, or any other unique value.

2. **Avoid Using Index as Key:**
   - While using the index of an array as a key might work in some cases, it is generally not recommended because:
     - It can cause issues if the list order changes.
     - It can lead to incorrect state preservation or animations.

3. **Consistency:**
   - Ensure the key is unique and consistent across re-renders. Changing keys unnecessarily can lead to performance issues.

### **Common Pitfalls When Using Keys**

- **Non-Unique Keys:**
  - If keys are not unique, React may not correctly identify elements, leading to unexpected behavior.
  
- **Missing Keys:**
  - Omitting keys altogether can cause performance issues because React will have to re-render all items in the list every time there’s a change.

### **Key Takeaways**

- **Use unique keys** to help React efficiently update and maintain the DOM.
- **Avoid using indexes** of arrays as keys unless the list items are static and never change order.
- **Keys are crucial** for maintaining component state and improving rendering performance in dynamic lists.

If you have any more questions or need further clarification on keys in React, feel free to ask!

## Wrappers components

### **Wrapper Components in React**

**Wrapper Components** are components designed to encapsulate other components or content, adding extra functionality, layout, styling, or behavior without modifying the content itself. They act as a “container” that surrounds child components, offering a way to abstract and reuse code effectively.

### **Why Use Wrapper Components?**

Wrapper components are widely used in React for the following reasons:

1. **Code Reusability:**
   - Allows common functionality or layout to be reused across multiple components, reducing duplication.

2. **Abstraction:**
   - Hides complex logic, layout, or styling within a wrapper, keeping child components focused and clean.

3. **Consistent Layout or Styling:**
   - Ensures consistent design by wrapping elements in a common structure, such as headers, footers, or sidebars.

4. **Enhanced Functionality:**
   - Adds behaviors like authentication checks, theming, error handling, or data fetching without modifying the wrapped component directly.

### **Examples of Wrapper Components**

1. **Simple Layout Wrapper:**
   - A common use case is creating a wrapper component for a consistent layout, like a card or container with padding and borders.

   ```javascript
   // Card.js - A simple wrapper component for layout
   import React from 'react';

   function Card({ children }) {
     return (
       <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
         {children}
       </div>
     );
   }

   export default Card;
   ```

   - **Usage:**
     ```javascript
     // App.js - Using the Card wrapper component
     import React from 'react';
     import Card from './Card';

     function App() {
       return (
         <Card>
           <h2>Title</h2>
           <p>This is some content inside the card wrapper.</p>
         </Card>
       );
     }

     export default App;
     ```

2. **Higher-Order Component (HOC):**
   - HOCs are wrapper components that modify the behavior of the wrapped component by taking a component as an input and returning a new component with additional props or logic.
   
   ```javascript
   // withLogging.js - An HOC that logs when the component renders
   import React from 'react';

   function withLogging(WrappedComponent) {
     return function EnhancedComponent(props) {
       console.log(`${WrappedComponent.name} is rendering`);
       return <WrappedComponent {...props} />;
     };
   }

   export default withLogging;
   ```

   - **Usage:**
     ```javascript
     // App.js - Using the HOC to wrap a component
     import React from 'react';
     import withLogging from './withLogging';

     function SimpleComponent() {
       return <p>This component is being logged by HOC!</p>;
     }

     const LoggedComponent = withLogging(SimpleComponent);

     function App() {
       return <LoggedComponent />;
     }

     export default App;
     ```

3. **Context Provider Wrappers:**
   - Wrapping components with context providers (e.g., Theme, Auth) to manage global state or share data throughout the component tree.

   ```javascript
   // ThemeContext.js - Creating a Theme Wrapper Component
   import React, { createContext, useContext } from 'react';

   const ThemeContext = createContext();

   export function ThemeProvider({ children }) {
     const theme = 'dark'; // Sample theme context value
     return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
   }

   export function useTheme() {
     return useContext(ThemeContext);
   }
   ```

   - **Usage:**
     ```javascript
     // App.js - Using ThemeProvider as a wrapper
     import React from 'react';
     import { ThemeProvider, useTheme } from './ThemeContext';

     function DisplayTheme() {
       const theme = useTheme();
       return <p>The current theme is {theme}.</p>;
     }

     function App() {
       return (
         <ThemeProvider>
           <DisplayTheme />
         </ThemeProvider>
       );
     }

     export default App;
     ```

### **Key Benefits of Wrapper Components**

1. **Separation of Concerns:**
   - Keeps the main component logic and UI separate from layout, styling, and extra functionality.
   
2. **Enhances Readability and Maintenance:**
   - By abstracting repetitive or complex code into a wrapper, your main components remain readable and easy to maintain.

3. **Dynamic Content Management:**
   - Wrappers can modify their children dynamically, such as conditionally rendering based on props or managing state for the enclosed components.

4. **Flexibility in Component Design:**
   - Easily switch or modify how child components behave or appear without altering the core component logic.

### **Conclusion**

Wrapper components are a powerful pattern in React that allow developers to manage layout, enhance functionality, and reuse code effectively. By encapsulating extra logic or structure in a wrapper, you can keep your core components clean, readable, and maintainable. Let me know if you need further examples or clarifications!


## Hooks
### **Hooks in React**

**Hooks** are special functions introduced in React 16.8 that allow you to use state and other React features (like lifecycle methods) in functional components. Prior to hooks, these features were only available in class components. Hooks enable you to write more concise and readable functional components while still leveraging React’s powerful capabilities.

### **Why Use Hooks?**

1. **State and Lifecycle Management in Functional Components:**
   - Hooks let you use state, lifecycle methods, and side effects without needing class components.

2. **Cleaner Code and Better Organization:**
   - Hooks allow you to separate logic into reusable functions, making your components easier to manage and test.

3. **Eliminate Complex Patterns:**
   - Reduce the need for complex patterns like higher-order components (HOCs) and render props, making code less verbose.

4. **Improved Reusability:**
   - You can create custom hooks to encapsulate and reuse stateful logic across different components.

### **Common Hooks in React**

1. **`useState`: Managing State in Functional Components**
   - `useState` allows you to add state to a functional component. It returns an array with the current state value and a function to update it.

   ```javascript
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0); // count is state, setCount is the updater function

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }

   export default Counter;
   ```

2. **`useEffect`: Handling Side Effects (e.g., Fetching Data, Subscriptions)**
   - `useEffect` allows you to perform side effects in functional components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

   ```javascript
   import React, { useState, useEffect } from 'react';

   function DataFetcher() {
     const [data, setData] = useState(null);

     useEffect(() => {
       // This effect runs after the component mounts
       fetch('https://api.example.com/data')
         .then((response) => response.json())
         .then((data) => setData(data));
     }, []); // Empty dependency array means this runs only once

     return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
   }

   export default DataFetcher;
   ```

3. **`useContext`: Consuming Context Values**
   - `useContext` allows you to consume context values directly within a component without needing to use a context consumer component.

   ```javascript
   import React, { useContext, createContext } from 'react';

   const ThemeContext = createContext('light');

   function DisplayTheme() {
     const theme = useContext(ThemeContext);
     return <p>The current theme is {theme}.</p>;
   }

   function App() {
     return (
       <ThemeContext.Provider value="dark">
         <DisplayTheme />
       </ThemeContext.Provider>
     );
   }

   export default App;
   ```

4. **`useRef`: Accessing DOM Elements or Storing Mutable Values**
   - `useRef` allows you to directly interact with DOM elements or keep a mutable value that does not trigger re-renders when changed.

   ```javascript
   import React, { useRef } from 'react';

   function FocusInput() {
     const inputRef = useRef(null);

     const focusInput = () => {
       inputRef.current.focus(); // Focus the input element directly
     };

     return (
       <div>
         <input ref={inputRef} type="text" />
         <button onClick={focusInput}>Focus Input</button>
       </div>
     );
   }

   export default FocusInput;
   ```

5. **`useReducer`: Managing Complex State Logic**
   - `useReducer` is an alternative to `useState` when dealing with more complex state logic, such as when you have multiple state transitions or need to handle state in a more predictable way.

   ```javascript
   import React, { useReducer } from 'react';

   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <div>
         <p>Count: {state.count}</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
       </div>
     );
   }

   export default Counter;
   ```

### **Creating Custom Hooks**

Custom hooks allow you to encapsulate reusable logic in a function that uses React hooks, making it easy to share behavior between components.

**Example of a Custom Hook:**

```javascript
// useWindowWidth.js
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
```

**Using the Custom Hook:**

```javascript
// App.js
import React from 'react';
import useWindowWidth from './useWindowWidth';

function App() {
  const width = useWindowWidth();

  return <p>Current window width: {width}px</p>;
}

export default App;
```

### **Key Benefits of Hooks**

1. **Simplify Component Logic:**
   - Hooks allow you to split one component into smaller functions based on what parts are related (like setting up a subscription or fetching data).

2. **Reuse Stateful Logic:**
   - Share reusable logic between components without changing their component hierarchy.

3. **Avoid Complexity:**
   - Eliminates the need to understand `this` in class components, avoiding common pitfalls.

4. **Improved Readability:**
   - Clean and concise code without the boilerplate of classes and lifecycle methods.

### **Conclusion**

Hooks revolutionized React by making it easier to manage state, side effects, and more within functional components. They bring functional components on par with class components, making code more readable, maintainable, and reusable. Let me know if you have any more questions or need further examples on specific hooks!

## useState
In React, `useState` is a Hook that allows you to add state to functional components. State is a way to store and manage data that can change over time in a component. The `useState` hook lets you declare a state variable, and it provides a way to update that variable when needed.

Here’s the syntax for using `useState`:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Explanation:
- `useState(0)` initializes a state variable `count` with the value `0`.
- `setCount` is the function used to update the value of `count`.
- When the button is clicked, `setCount` is called, which increments `count` by 1, and React will re-render the component to reflect the new state.

### Key Points:
- `useState` returns an array with two values: the current state and the state-updating function.
- You can pass any initial value (string, number, object, etc.) to `useState`.
- React re-renders the component every time the state changes, ensuring the UI is updated to reflect the new state.

Let me know if you want more in-depth examples or details!

## useEffect

In React, `useEffect` is another essential Hook that allows you to perform side effects in function components. It’s commonly used for tasks like fetching data, directly manipulating the DOM, setting up timers, and more. `useEffect` runs after the render, and it can also clean up when a component unmounts or when certain dependencies change.

### Basic Syntax:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Using useEffect to perform a side effect
  useEffect(() => {
    // Side effect: Update the document title
    document.title = `You clicked ${count} times`;

    // Optional cleanup function (runs when component unmounts or before the next effect is applied)
    return () => {
      console.log("Cleanup if necessary");
    };
  }, [count]); // Dependency array: Effect will only run when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Explanation:
- **`useEffect(() => { ... })`**: This is the basic form where you pass a function that contains the side effect you want to perform. In the example above, the effect updates the document’s title with the `count` value.
  
- **Dependency Array `[count]`**: The second argument to `useEffect` is an array of dependencies. The effect will only run if one of these dependencies changes. In this case, the effect runs every time `count` changes.

- **Cleanup Function**: `useEffect` can return a function, which React will call to clean up the effect. This cleanup happens before the next effect runs or when the component is unmounted. This is useful for things like removing event listeners or canceling network requests.

### Key Scenarios for `useEffect`:
1. **Fetching Data**:
   ```jsx
   useEffect(() => {
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => setData(data));
   }, []); // Empty dependency array means this effect runs only once, after the first render
   ```

2. **Setting up Subscriptions** (like WebSockets):
   ```jsx
   useEffect(() => {
     const subscription = someAPI.subscribe(() => { ... });

     // Cleanup on unmount
     return () => subscription.unsubscribe();
   }, []); // Runs only on mount and unmount
   ```

3. **Event Listeners**:
   ```jsx
   useEffect(() => {
     const handleResize = () => { ... };
     window.addEventListener('resize', handleResize);

     // Cleanup the listener when the component unmounts
     return () => window.removeEventListener('resize', handleResize);
   }, []);
   ```

### `useEffect` Variations:
- **Without Dependency Array**: If you omit the dependency array, the effect will run after every render, which can lead to performance issues if used improperly.
  
  ```jsx
  useEffect(() => {
    // This effect runs after every render
  });
  ```

- **Empty Dependency Array `[]`**: If you provide an empty array, the effect will run only once, after the initial render.

  ```jsx
  useEffect(() => {
    // This effect runs only once, after the first render
  }, []);
  ```

### Common Uses of `useEffect`:
- Fetching data from an API
- Subscribing to WebSocket or event streams
- Managing timers or intervals
- Direct DOM manipulation
- Setting up or tearing down event listeners

Let me know if you need more detailed examples or further explanation!

## Why is useEffect essential in React?

`useEffect` is essential in React for several reasons, primarily because it allows functional components to handle **side effects** in a declarative and clean manner. Here’s why it's so important:

### 1. **Handling Side Effects**:
React components are designed to manage the UI, but often, you need to interact with things outside of React's scope. **Side effects** include actions like:
- **Fetching data** from an API
- **Setting up subscriptions** (e.g., WebSockets, event listeners)
- **Manipulating the DOM** directly
- **Setting timers** or intervals
- **Managing browser storage** (e.g., localStorage)

`useEffect` allows you to handle these side effects in a structured way. In class components, this was done using lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`), but in functional components, `useEffect` consolidates these tasks.

### 2. **Declarative Side Effects**:
React promotes a **declarative approach** to building UIs, and `useEffect` aligns with that philosophy by making it clear **what should happen and when**. With `useEffect`, you specify the effect and its dependencies, allowing React to control when the effect is triggered based on those dependencies.

For example, if you want to run a side effect only when a specific piece of state (`count`) changes, you can declare this cleanly with `useEffect`:

```jsx
useEffect(() => {
  // Effect that runs when 'count' changes
  console.log(`Count changed to ${count}`);
}, [count]);
```

### 3. **Replaces Lifecycle Methods**:
Before hooks, **class components** were necessary to handle side effects through lifecycle methods like:
- `componentDidMount` (run effect once after the initial render)
- `componentDidUpdate` (run effect after every render when certain state or props change)
- `componentWillUnmount` (cleanup when the component is unmounted)

In functional components, `useEffect` serves all of these purposes:
- When you want to run something after the component mounts, use `useEffect` with an empty dependency array (`[]`).
- To handle updates, specify dependencies in the array.
- For cleanups (like unsubscribing from an API), `useEffect` can return a function that React calls when the component unmounts or before the effect runs again.

Example replacing lifecycle methods:
```jsx
useEffect(() => {
  // componentDidMount: run once on initial render
  fetchData();

  return () => {
    // componentWillUnmount: cleanup before unmounting
    cleanupSubscription();
  };
}, []); // Empty array means it runs only once after mounting
```

### 4. **Control over When Effects Run**:
`useEffect` gives you fine-grained control over **when** and **how often** your side effects are executed:
- **On every render**: Omit the dependency array (`useEffect(() => { ... })`).
- **Only once**: Provide an empty dependency array (`useEffect(() => { ... }, [])`).
- **When specific values change**: Provide those values as dependencies (`useEffect(() => { ... }, [someState, someProp])`).

This flexibility helps you manage complex workflows, like only fetching data once when the component mounts or responding to specific user interactions.

### 5. **Automatic Cleanup**:
When you use `useEffect`, you can easily handle **cleanup logic** by returning a function from your effect. This is useful for:
- Removing event listeners
- Clearing intervals or timeouts
- Unsubscribing from streams or WebSockets

Example of cleanup with event listeners:
```jsx
useEffect(() => {
  const handleScroll = () => { /* handle scrolling */ };
  window.addEventListener('scroll', handleScroll);

  return () => {
    // Cleanup the event listener when the component unmounts
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Runs only on mount and unmount
```

### 6. **Functional Component-Friendly**:
Hooks like `useEffect` allow you to use **stateful logic and side effects in functional components**, which were previously only possible in class components. This shift towards functional components is key in modern React development, and `useEffect` is central to this approach.

### Summary of Why `useEffect` is Essential:
- **Declarative Side Effects**: It lets you clearly declare side effects in a functional component.
- **Lifecycle Method Replacement**: It replaces class component lifecycle methods in a simpler, unified way.
- **Control Over Execution**: You can control when your effects run (on mount, state change, or every render).
- **Cleanup Management**: It simplifies handling resource cleanups, improving app performance and stability.
- **Functional Component Power**: It allows functional components to manage side effects and state, which was historically only possible in class components.

`useEffect` is essential for any React app that needs to handle external interactions, making it a key part of modern React development.

# Note:

if useEffet is not used in React and suppose a fetch call is used directly this would result in there being infinite fetch api calls when it is really not required for every other time the component gets rerendered

# Hooks

## useMemo
import React, { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Expensive calculation, only recalculates when `number` changes
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h1>Factorial of {number} is: {factorial}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Increment Number ({number})
      </button>
    </div>
  );
}

function calculateFactorial(n) {
  console.log('Calculating factorial...');
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
}

export default App;

## useCallback
`useCallback` is a React hook that returns a **memoized version of a callback function**. It is used to prevent a function from being recreated on every render, which can be helpful for performance optimization, especially when passing callbacks to child components that rely on reference equality to avoid unnecessary re-renders.

### Syntax:
```js
const memoizedCallback = useCallback(() => {
  // function logic here
}, [dependencies]);
```

- **First Argument**: A function (callback) that you want to memoize.
- **Second Argument**: An array of dependencies that trigger the function to be re-created when one of the dependencies changes.

### Why Use `useCallback`?
By default, React recreates functions every time a component renders. This can cause performance issues or unnecessary re-renders in child components if a new function reference is passed to them. `useCallback` helps optimize performance by ensuring the same function is reused unless its dependencies change.

### Example: Basic Use of `useCallback`

```js
import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized function: only recreated if `count` changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
```

### How it Works:
- The `increment` function is wrapped with `useCallback`, so it only gets recreated when the `count` value changes.
- If the component re-renders because of a change in `text`, the `increment` function will **not** be recreated. Without `useCallback`, the function would be recreated on every render, even though its logic and outcome don’t change.

### Why `useCallback` is Important:
1. **Prevent Unnecessary Re-renders in Child Components**: If a child component depends on a callback passed as a prop, a new function reference on every render could trigger unnecessary re-renders. `useCallback` ensures that the same function reference is passed, preventing the child from re-rendering unless the dependencies change.
2. **Performance Optimization**: It helps optimize performance in cases where recreating functions leads to overhead, especially in large components or when a function is passed as a prop.

### Example with Child Component:

```js
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  // Memoized function to increment count
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      {/* Passing memoized increment function as a prop */}
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  console.log('ChildComponent rendered');

  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
}

export default App;
```

### Without `useCallback`:
- Every time `App` re-renders, a **new function reference** for `increment` is created and passed to `ChildComponent`.
- Even if `ChildComponent` doesn't need to re-render, it will, because the function reference has changed.

### With `useCallback`:
- The `increment` function reference remains the same across renders unless its dependencies change. This prevents unnecessary re-renders of `ChildComponent`.

### Key Differences Between `useCallback` and `useMemo`:
- `**useMemo**`: Memoizes the **result** of a function.
- `**useCallback**`: Memoizes the **function itself**.

### When to Use `useCallback`:
- When passing **callback functions** to child components to prevent unnecessary re-renders.
- When you want to **optimize** performance by ensuring that functions aren't recreated unnecessarily.

Just like `useMemo`, you should be cautious when using `useCallback`. It's only useful when performance bottlenecks exist due to function re-creation or unnecessary re-renders. Overusing it can lead to unnecessary complexity without significant benefits.

## Custom Hooks in React

In React, **custom hooks** are JavaScript functions that allow you to extract and reuse logic that involves React hooks (`useState`, `useEffect`, etc.) across multiple components. Custom hooks help keep your code organized, avoid duplication, and make your components more readable and maintainable.

### Why Use Custom Hooks?
- **Reusability**: When you need to reuse hook-based logic across different components, custom hooks allow you to encapsulate that logic and share it easily.
- **Separation of Concerns**: Custom hooks help to keep your component logic clean by moving complex logic into a separate hook.
- **Encapsulation**: You can create your own abstraction layer for handling common side effects, data fetching, or state management.

### Naming Convention:
Custom hooks are typically named using the **"use"** prefix (e.g., `useCustomHook`). This is because hooks have certain rules (e.g., they must be called at the top level and not inside loops or conditionals), and the "use" prefix tells React that the function follows the rules of hooks.

### Example: A Custom Hook for Fetching Data

Suppose multiple components in your app need to fetch data from an API. You can create a custom hook to encapsulate the logic for fetching and returning data.

#### 1. Custom Hook (`useFetch`):
```js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

#### 2. Using the Custom Hook in a Component:
```js
import React from 'react';
import useFetch from './useFetch';

function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

### How it Works:
1. **Custom Hook Logic**: 
   - `useFetch` is a custom hook that takes a `url` as an argument. It uses `useState` to manage `data`, `loading`, and `error` states.
   - `useEffect` is used to fetch data from the provided `url` and update the state accordingly. 
2. **Component Usage**:
   - In the `UserList` component, the `useFetch` hook is used to fetch data. The component renders different UI based on the `loading`, `data`, or `error` states returned by the hook.

### Example: Custom Hook for Form Handling

You can also create a custom hook to handle form state and logic.

#### 1. Custom Hook (`useForm`):
```js
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => setValues(initialValues);

  return [values, handleChange, resetForm];
}

export default useForm;
```

#### 2. Using the Custom Hook in a Form Component:
```js
import React from 'react';
import useForm from './useForm';

function SignupForm() {
  const [formValues, handleInputChange, resetForm] = useForm({
    username: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    resetForm(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
```

### Benefits of Custom Hooks:
1. **Reusable Logic**: Any logic involving React hooks (`useState`, `useEffect`, etc.) can be reused across components.
2. **Simplified Components**: Components using custom hooks are easier to read and maintain, as the logic is separated into reusable chunks.
3. **Composability**: Custom hooks can be composed of other hooks or custom hooks, making it easy to build more complex features without duplicating code.

### When to Use Custom Hooks:
- **Data Fetching**: Creating a custom hook to fetch data from APIs.
- **Form Handling**: Managing form input, validation, and submission logic across multiple forms.
- **Global State Management**: Abstracting complex state logic into reusable hooks.
- **Side Effects**: Handling common side effects like setting up event listeners or subscriptions.

### Best Practices:
1. **Name with `use`**: Always prefix your custom hook with `use` to follow React's rules of hooks and to let React know that this function uses hooks internally.
2. **Reusability**: Ensure that the hook you create is generic enough to be reused across multiple components.
3. **Avoid Over-Abstraction**: Only create a custom hook when it improves code clarity or reduces duplication.

Custom hooks are a powerful tool in React for writing reusable, modular, and maintainable code, especially when managing side effects, state, and other hook-based logic.

## useRef
In React, **`useRef`** is a built-in hook that provides a way to store and persist values across renders without causing the component to re-render when the value changes. It is often used for accessing and interacting with DOM elements or for keeping track of values that should not trigger re-renders.

Here’s a breakdown of its key uses:

### 1. **Accessing DOM Elements**
   You can use `useRef` to access a DOM element directly, which is useful when you need to manipulate the element (e.g., focusing an input field, scrolling, or getting its size).

   Example:
   ```jsx
   import React, { useRef } from 'react';

   function FocusInput() {
     const inputRef = useRef(null);

     const handleFocus = () => {
       inputRef.current.focus();
     };

     return (
       <div>
         <input ref={inputRef} type="text" />
         <button onClick={handleFocus}>Focus the input</button>
       </div>
     );
   }
   ```

### 2. **Persisting Values Between Renders**
   You can also use `useRef` to keep track of a mutable value that doesn’t cause a re-render when it changes (unlike state).

   Example:
   ```jsx
   import React, { useRef, useState } from 'react';

   function Counter() {
     const renderCount = useRef(0);
     const [count, setCount] = useState(0);

     renderCount.current++;

     return (
       <div>
         <p>Count: {count}</p>
         <p>Render count: {renderCount.current}</p>
         <button onClick={() => setCount(count + 1)}>Increase Count</button>
       </div>
     );
   }
   ```

   Here, `renderCount` holds the number of renders but updating it won’t cause the component to re-render.

### Key Points:
- **Does not trigger re-renders**: Updating a `useRef` value does not cause the component to re-render, unlike `useState`.
- **Persistent value**: The value persists across renders, making it ideal for keeping track of values like timers, previous props, or counters.
- **Can hold any value**: `useRef` can store anything, not just DOM elements.



# Side Effects

In React, **side effects** refer to operations that affect something outside the function component, such as interacting with the browser, external systems, or the React component's lifecycle. React components are primarily meant to render UI based on their props and state, and when a component interacts with things outside of that (e.g., making an API request, manipulating the DOM, logging to the console), those are considered side effects.

### Examples of Side Effects in React:

1. **Fetching data from an API**:
   Making network requests is a common side effect, as it involves communication with external systems to fetch or send data.
   ```javascript
   useEffect(() => {
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => setData(data));
   }, []); // Fetching data when the component mounts
   ```

2. **Updating the document title**:
   Changing the browser's title or manipulating the DOM directly is another side effect, as it affects the browser outside of the React component's direct scope.
   ```javascript
   useEffect(() => {
     document.title = `Current count: ${count}`;
   }, [count]); // Update the document title when count changes
   ```

3. **Subscribing to or cleaning up event listeners**:
   Adding an event listener to the window or other external systems (like WebSockets) is considered a side effect.
   ```javascript
   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);
     };

     window.addEventListener('resize', handleResize);

     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []); // Add event listener when component mounts and clean up on unmount
   ```

4. **Timers and intervals**:
   Setting up intervals, timeouts, or animations often falls under side effects since they interact with external timers.
   ```javascript
   useEffect(() => {
     const interval = setInterval(() => {
       setTime(new Date());
     }, 1000);

     // Cleanup interval when the component unmounts
     return () => clearInterval(interval);
   }, []); // Only set up the timer once when the component mounts
   ```

### Managing Side Effects with `useEffect` Hook

In React functional components, side effects are managed using the `useEffect` hook. The `useEffect` hook allows you to specify a function that runs after the component renders (or after certain dependencies change) and can also handle cleanup when necessary.

### Basic `useEffect` Syntax:
```javascript
useEffect(() => {
  // Side effect (e.g., fetching data, updating title, setting up listeners)

  return () => {
    // Optional cleanup function (e.g., removing event listeners, clearing timers)
  };
}, [dependencies]); // List of dependencies to control when the effect runs
```

### When `useEffect` Runs:
- **Initial render**: When the component mounts for the first time.
- **On updates**: When any value in the `dependencies` array changes.
- **On cleanup**: When the component unmounts (if a cleanup function is returned).

### Types of Side Effects in React:
1. **Synchronous Side Effects**: These happen immediately after the component renders, like logging to the console or updating the document title.
2. **Asynchronous Side Effects**: These involve operations like fetching data, setting up timers, or subscribing to events, where the side effect completes sometime after the render (e.g., API calls).

### Why Care About Side Effects?
- **Pure vs. Impure Functions**: React encourages using **pure functions** (functions with no side effects) for rendering, as they are predictable and easy to test. However, in real-world applications, interacting with external systems (like fetching data or updating the DOM) is necessary, and that’s where side effects come into play.
  
- **Performance and Resource Management**: Properly handling side effects ensures that your app is efficient and doesn't hold onto resources (like event listeners or network connections) unnecessarily. Failing to clean up side effects (e.g., intervals or event listeners) can cause **memory leaks** or unwanted behaviors in React apps.

### Summary:
In React, side effects are any operations that affect something outside the function component, such as:
- Fetching data from an API
- Modifying the DOM (like updating the document title)
- Setting up timers or intervals
- Subscribing to external events (like WebSocket or event listeners)

These side effects are managed using `useEffect`, which helps keep them controlled and ensures proper cleanup when necessary.

## Routing

Some Jargons to be aware of:
1. Single Page Applications
2. Client Side Bundle
3. Client Side Routing

### Single Page Applications
### Client Side Bundle
### Client Side Routing

## useNavigate Hook

## Lazy Loading in React

## Prop Drilling


## Context API 

# CONTINUE HERE   

# Tailwind
**Tailwind CSS** is a modern, utility-first CSS framework that allows developers to design custom web interfaces directly in their HTML. It doesn't provide ready-made components like Bootstrap, but instead focuses on giving you **utility classes**—small, single-purpose CSS classes—that you can use to style any element exactly how you want.

### What Makes Tailwind CSS Special?

1. **Utility-First Approach**  
   Tailwind doesn’t use traditional components like buttons, cards, or forms that come with preset designs. Instead, it gives you a **set of utilities** that you can apply directly to your HTML elements. These utility classes do one thing, like setting padding, margin, font size, or background color. For example:
   
   - `p-4`: Adds padding of `1rem` (16px) to all sides.
   - `bg-blue-500`: Sets a blue background color from Tailwind’s color palette.
   - `text-center`: Centers text horizontally.
   - `font-bold`: Makes text bold.

   This approach allows for greater flexibility and control over the design without needing to override predefined styles.

2. **Highly Customizable**  
   Tailwind is built to be extremely customizable. You can configure your own design system through a configuration file (`tailwind.config.js`). This allows you to define your own color palettes, fonts, spacing, and even responsive breakpoints. Essentially, you're in control of the design instead of fitting into a pre-designed framework.

3. **Responsive Design Built-In**  
   Tailwind makes creating responsive layouts easy. You can apply utility classes that are specific to screen sizes by prefixing them with responsive breakpoints. For example:
   
   - `md:p-8`: Applies padding of `2rem` (32px) on medium screens and above.
   - `lg:text-lg`: Applies larger text only on large screens.

   This helps you quickly adapt your layout for different screen sizes without writing custom media queries.

4. **No Need for Custom CSS**  
   In many cases, you won’t need to write any custom CSS. You can compose all of your styles by simply adding utility classes to your HTML elements. If you need a unique design, you can still extend Tailwind with custom styles, but it encourages a faster, class-based approach.

5. **Performance Optimization**  
   One of the concerns with utility-first frameworks is the size of the CSS file because it includes a large number of classes. Tailwind solves this problem with its **purge** feature. When you build your project for production, it scans your HTML and removes any unused classes, drastically reducing the file size of your final CSS bundle.

---

### The Basics of Tailwind CSS:

Let’s break down the most common concepts and how you can use them:

#### 1. **Spacing (Padding, Margin)**
Tailwind has a consistent system for spacing, based on a scale (0 to 64), where the units are in `rem` (1 unit = 4px by default).

- `p-4`: Adds padding of `1rem` (16px) on all sides.
- `mt-8`: Adds top margin of `2rem` (32px).

You can also apply padding or margin to specific sides:
- `pl-6`: Padding-left.
- `mb-2`: Margin-bottom.

#### 2. **Colors**
Tailwind comes with a palette of predefined colors, and each color has different shades.

- `bg-blue-500`: Adds a blue background color.
- `text-gray-700`: Sets text color to gray with a darker shade.

You can easily customize these colors in the `tailwind.config.js` file to match your brand's design.

#### 3. **Typography**
Typography classes help you quickly adjust the appearance of text.

- `text-xl`: Sets font size to extra-large.
- `font-semibold`: Applies a semi-bold font weight.
- `leading-tight`: Adjusts line height to be more compact.

#### 4. **Flexbox and Grid**
Tailwind has built-in classes for working with layout systems like **Flexbox** and **Grid**, making it easier to create modern, responsive layouts.

- `flex`: Enables flexbox on an element.
- `justify-center`: Centers content horizontally within a flex container.
- `grid grid-cols-3`: Defines a 3-column grid layout.

#### 5. **Responsive Design**
Tailwind's responsive utilities are prefixed with screen size breakpoints, like `sm`, `md`, `lg`, and `xl`.

For example:
```html
<div class="text-center md:text-left lg:text-right">
  <!-- This text is centered on small screens, left-aligned on medium screens, and right-aligned on large screens. -->
</div>
```

#### 6. **Hover, Focus, and Other States**
Tailwind provides state-based classes to style elements when the user interacts with them.

- `hover:bg-blue-600`: Changes the background color when hovered.
- `focus:outline-none`: Removes the outline when the element is focused.

---

### Example of Using Tailwind CSS:

Here’s a simple example to demonstrate how Tailwind’s utility classes work:

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="image.jpg" alt="Example image">
  <div class="px-6 py-4">
    <h2 class="font-bold text-xl text-gray-800">Card Title</h2>
    <p class="text-gray-600">This is a description of the card.</p>
  </div>
  <div class="px-6 py-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  </div>
</div>
```

In this example, the following utility classes are used:
- `max-w-sm`: Limits the width of the card.
- `rounded`: Rounds the corners.
- `shadow-lg`: Adds a large shadow for depth.
- `bg-white`: Sets a white background.
- `px-6 py-4`: Adds horizontal and vertical padding.
- `font-bold text-xl`: Styles the heading with bold text and an extra-large font size.
- `bg-blue-500 hover:bg-blue-700`: Adds a blue background to the button, which becomes darker on hover.

### Conclusion:

Tailwind CSS allows developers to create fully customized, responsive designs directly within their HTML by using utility classes. Its utility-first approach gives you the flexibility to build unique layouts without worrying about overriding styles or creating complex CSS files.

It’s especially popular with developers who prefer **control** over pre-built components and want to work faster by using utility classes to define styles directly in the markup. Would you like to give Tailwind a try in your project?

## Mobile First Approach

The **mobile-first approach** in Tailwind CSS refers to designing and building your website or application with mobile devices as the primary focus and then progressively enhancing the design for larger screens (such as tablets and desktops). This approach starts by writing styles that work on smaller screens by default, and then adding styles for larger screens using responsive utility classes.

In Tailwind CSS, this mobile-first principle is built directly into its responsive design system.

### How it Works in Tailwind CSS

By default, all utility classes in Tailwind apply to **mobile devices first**. You then use responsive prefixes to apply styles for larger screen sizes. These responsive prefixes represent **breakpoints**, which are screen width thresholds at which different styles will take effect.

#### Example of Mobile-First in Action:

Consider the following example:
```html
<div class="p-4 md:p-8 lg:p-12 bg-gray-200">
  <p class="text-base md:text-lg lg:text-xl">
    This is a responsive paragraph.
  </p>
</div>
```

Here’s what’s happening:

1. **Mobile-first styles (no prefix)**:
   - On all screen sizes (starting from mobile), the `p-4` class applies padding of `1rem` (16px), and `text-base` applies a base font size.
   - These are the default styles, designed for smaller screens (mobile-first).

2. **`md:` prefix (for medium screens and larger)**:
   - Once the screen width reaches the `md` (medium) breakpoint (default: 768px), the `md:p-8` class overrides the default padding and increases it to `2rem` (32px). The `md:text-lg` class increases the font size to larger (`lg`).

3. **`lg:` prefix (for large screens and larger)**:
   - On screens that are `lg` (large) or wider (default: 1024px), the `lg:p-12` class applies padding of `3rem` (48px), and `lg:text-xl` increases the text size further.

In this example, you design the component with **mobile-first defaults** (small screen sizes), and progressively enhance it as the screen size increases.

### Tailwind CSS Breakpoints

Tailwind uses the following default breakpoints, which follow the mobile-first pattern:

- **`sm`**: 640px and up (small devices)
- **`md`**: 768px and up (medium devices like tablets)
- **`lg`**: 1024px and up (large devices like laptops/desktops)
- **`xl`**: 1280px and up (larger desktops)
- **`2xl`**: 1536px and up (very large screens)

You can use these breakpoints to target larger devices without affecting the styles on smaller screens.

### Benefits of Mobile-First:

1. **Better User Experience**: Most web traffic comes from mobile devices, so designing for mobile ensures a smoother user experience for the majority of users.
2. **Performance Optimization**: By starting with simpler, mobile-optimized styles and adding complexity as screen size increases, your app or website can load faster on mobile devices.
3. **Progressive Enhancement**: With mobile-first, you gradually add features and styling as the screen real estate increases, ensuring that the website remains functional even on the smallest screens.

### Mobile-First in Tailwind Practice:

```html
<div class="p-4 md:p-6 lg:p-8 bg-blue-500">
  <h1 class="text-white text-xl md:text-2xl lg:text-3xl">Hello, World!</h1>
</div>
```

- **Mobile (default)**: Uses `p-4` (padding 1rem) and `text-xl` (extra-large text).
- **Tablet (`md:`)**: When the screen is medium (`md:768px`) or larger, `p-6` (padding 1.5rem) and `text-2xl` (larger text) are applied.
- **Desktop (`lg:`)**: On large screens (`lg:1024px` and above), padding becomes `p-8` (2rem), and the text size becomes `text-3xl`.

### Conclusion:
In Tailwind CSS, the mobile-first approach is natural because all utility classes apply to mobile screens by default. You then scale up the design for larger devices using responsive prefixes like `md:`, `lg:`, and `xl:`. This approach helps you build efficient, responsive websites where smaller devices are prioritized first, ensuring a solid user experience on mobile.


# Resource
<a href="https://www.creative-tim.com/twcomponents/cheatsheet">

Cheout storybook for React components - This allows to expose certain UI components to contributors outside of the main project and ensures that if certain aspects are to be protected are protected well.

HeroIcons - https://heroicons.com/

# Difference between Axios and Fetch

**Axios** and **Fetch** are both JavaScript libraries used to make HTTP requests, but they have some differences in terms of features, ease of use, and functionality. Below is a comparison between the two:

## Resources

https://github.com/axios/axios

### 1. **Ease of Use**
   - **Axios**:
     - Axios is easier to use, especially for beginners, because it automatically handles many aspects of HTTP requests and provides a simpler API.
     - Axios automatically transforms JSON data, so you don’t need to manually parse responses.
     - Default error handling is also easier with Axios, as it throws errors for anything outside the 2xx range of HTTP status codes.
   
   - **Fetch**:
     - Fetch is built into modern browsers, so there’s no need to install additional libraries.
     - However, Fetch requires more manual configuration, and it doesn’t automatically parse JSON; you need to manually call `.json()` on the response to extract the data.
     - Fetch does not reject on HTTP errors (like 404 or 500) by default. Instead, you need to manually handle the `response.ok` property to check for errors.

### 2. **Syntax**
   - **Axios**:
     Axios uses a more concise and user-friendly syntax, especially for complex scenarios.
     
     ```javascript
     // GET request
     axios.get('/api/users')
       .then(response => {
         console.log(response.data);
       })
       .catch(error => {
         console.log(error);
       });

     // POST request
     axios.post('/api/users', {
       name: 'John Doe',
       age: 25
     })
       .then(response => {
         console.log(response.data);
       })
       .catch(error => {
         console.log(error);
       });
     ```

   - **Fetch**:
     Fetch is a native browser API, and it requires more code for similar functionality.
     
     ```javascript
     // GET request
     fetch('/api/users')
       .then(response => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then(data => {
         console.log(data);
       })
       .catch(error => {
         console.log(error);
       });

     // POST request
     fetch('/api/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         name: 'John Doe',
         age: 25
       })
     })
       .then(response => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then(data => {
         console.log(data);
       })
       .catch(error => {
         console.log(error);
       });
     ```

### 3. **Default Settings**
   - **Axios**:
     - Axios allows you to configure defaults like base URLs, headers, and timeout settings globally, which makes it easier to manage large-scale applications.
     - Example of setting a base URL:
       ```javascript
       const axiosInstance = axios.create({
         baseURL: 'https://api.example.com',
         timeout: 1000,
         headers: { 'Authorization': 'Bearer token' }
       });
       ```

   - **Fetch**:
     - Fetch requires you to set these options on each request manually. You can use helper functions to replicate Axios's baseURL behavior, but it's not built in by default.
     - There’s no timeout support in Fetch (you need to implement it manually using `Promise`).

### 4. **Response Interceptors**
   - **Axios**:
     - Axios allows the use of **interceptors** that can process requests and responses before they are handled. This is very useful for tasks like adding headers or logging.

     ```javascript
     axios.interceptors.request.use(config => {
       config.headers['Authorization'] = 'Bearer token';
       return config;
     }, error => {
       return Promise.reject(error);
     });
     ```

   - **Fetch**:
     - Fetch doesn’t have built-in support for interceptors. You would need to handle this manually by wrapping Fetch in custom functions.

### 5. **Error Handling**
   - **Axios**:
     - Axios automatically throws an error for HTTP status codes that fall outside the range of 2xx. This makes error handling simpler.
     - It also provides detailed error messages (status, headers, request body) which are useful for debugging.

   - **Fetch**:
     - Fetch **does not reject** the promise if the HTTP status code is not 200 (e.g., 404, 500). You need to check `response.ok` manually to handle errors.
     - Error handling with Fetch is less intuitive since you have to manage error states yourself.

### 6. **Browser Support**
   - **Axios**:
     - Axios works in all modern browsers and even older ones like IE11. For environments where Fetch isn’t available, Axios can be a better option.
     - Axios also works in **Node.js** environments without any additional configuration.

   - **Fetch**:
     - Fetch is a browser-native API, so it’s supported in modern browsers but may require polyfills for older browsers like Internet Explorer.

### 7. **Request Cancellation**
   - **Axios**:
     - Axios provides built-in support for request cancellation using the `CancelToken`. This feature allows you to cancel ongoing requests when needed (e.g., if a user navigates away from a page).
     
     ```javascript
     const source = axios.CancelToken.source();
     axios.get('/api/users', {
       cancelToken: source.token
     }).catch(function (thrown) {
       if (axios.isCancel(thrown)) {
         console.log('Request canceled', thrown.message);
       } else {
         // handle error
       }
     });
     // Cancel the request
     source.cancel('Operation canceled by the user.');
     ```

   - **Fetch**:
     - Fetch doesn’t natively support request cancellation. You would need to implement cancellation using **AbortController** (a newer addition to the JavaScript API) which isn’t as straightforward.

     ```javascript
     const controller = new AbortController();
     fetch('/api/users', { signal: controller.signal })
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.log('Request failed', error));

     // To cancel the request
     controller.abort();
     ```

### 8. **File Uploads**
   - **Axios**:
     - Axios supports form data and file uploads more easily with automatic handling of `FormData` objects.

     ```javascript
     const formData = new FormData();
     formData.append('file', file);
     axios.post('/upload', formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     });
     ```

   - **Fetch**:
     - Fetch can handle file uploads as well, but it requires more manual work. You need to construct a `FormData` object manually.

     ```javascript
     const formData = new FormData();
     formData.append('file', file);
     fetch('/upload', {
       method: 'POST',
       body: formData
     });
     ```

### 9. **JSON Parsing**
   - **Axios**:
     - Automatically transforms response data to JSON when the response contains a JSON object.
   
   - **Fetch**:
     - Requires manual parsing of JSON using the `.json()` method.

---

### Summary of Differences

| **Feature**               | **Axios**                                          | **Fetch**                              |
|---------------------------|----------------------------------------------------|----------------------------------------|
| **Ease of Use**            | Easier with built-in transformations               | Requires more manual work              |
| **Syntax**                 | Concise and more user-friendly                     | Native but more verbose                |
| **Error Handling**         | Automatic error handling for HTTP errors           | Manual error handling needed           |
| **Interceptors**           | Supports request and response interceptors         | No built-in support                    |
| **Response Parsing**       | Automatically parses JSON                          | Requires manual `.json()` parsing      |
| **Global Configuration**   | Supports setting defaults for headers, base URL    | Requires manual configuration          |
| **Request Cancellation**   | Supports request cancellation with `CancelToken`   | Needs `AbortController`                |
| **Browser Support**        | Supports all modern browsers, including older ones | Only supported in modern browsers      |
| **File Uploads**           | Easier file upload handling                        | More manual work                       |
| **Timeout Handling**       | Built-in support                                   | Requires manual implementation         |

### Conclusion:
- **Axios** is generally easier to use and comes with more features out of the box, making it a better option for developers who need to handle requests frequently in complex applications.
- **Fetch** is lightweight and native to modern browsers, making it ideal for simple use cases or when you want to avoid installing additional dependencies. However, it requires more manual configuration.

### Example difference between axios and fetch

```javascript
// difference between axios and fetch api

// Using only .then Syntax
// function main(){
//     fetch('https://fakerapi.it/api/v1/persons')
//         .then((res)=>{
//             res.json()
//                 .then((data)=>{
//                     console.log(data)
//                 })
//         })
// }

// Using async inside the fetch syntax
// function main(){
//     fetch('https://fakerapi.it/api/v1/persons')
//         .then(async (response)=>{
//             const data = await response.json();
//             console.log(data)
//         })
// }

// Using only async await throughout 
// async function main() {
//     const response = await fetch('https://fakerapi.it/api/v1/persons')
//     const data = await response.json();
//     console.log(data)
// }


// Changing the method of how it is retreived  
// async function main() {
//     const response = await fetch('https://fakerapi.it/api/v1/persons',{
//         // method: "POST"   //sending headers 
//     })
//     const data = await response.json();
//     console.log(data)
// }


// Using Axios 
// const axios = require('axios');

// async function main() {
//     const response = await axios.get('https://fakerapi.it/api/v1/persons')
//     console.log(response.data)
//     console.log(response.data.data[0])
// }

// Using axios for post request and send the body and headers along with it 
// used http dump website to send the headers throug
const axios = require('axios');

async function main() {
    const response = await axios.post(
        'https://httpdump.app/dumps/57457a2e-622f-4ecf-af1f-6e21fee91b08',{
            username: "Ron",
            body: "123123"
        },
        {
            hearders:{
                authorization: "Bearer 123123"
            }
        }
    )
    console.log(response.data)
}

main()
```

# Typescript
Type

## Types of Language
### Compiilerd and interpreted languages

**Compiled Languages**
=====================

These languages are compiled into machine code before execution.

| Language | Description |
| --- | --- |
| C/C++ | Compile to native machine code. Used for systems programming, game development, and
high-performance applications. |
| Fortran | Compile to native machine code. Used for scientific computing, numerical analysis, and
high-performance applications. |
| Pascal | Compile to native machine code. Used for building operating systems, embedded systems, and
high-performance applications. |

**Interpreted Languages**
=====================

These languages are executed line by line by an interpreter at runtime.

| Language | Description |
| --- | --- |
| Python | Interpreted with a virtual machine (VM). Used for web development, data analysis, artificial
intelligence, and scripting. |
| JavaScript | Interpreted with a VM. Used for client-side scripting in web browsers, game development,
and mobile app development. |
| Ruby | Interpreted with a VM. Used for web development, back-end programming, and scripting. |

**Hybrid Languages**
==================

These languages combine compilation and interpretation.

| Language | Description |
| --- | --- |
| Java | Compiled to bytecode, which is then executed by a JVM (Java Virtual Machine). Used for Android
app development, web development, and enterprise software development. |
| C# | Compiled to intermediate language (IL), which is then executed by the .NET Common Language Runtime
(CLR). Used for Windows desktop and mobile app development, and game development. |

**Scripting Languages**
=====================

These languages are typically interpreted and used for scripting.

| Language | Description |
| --- | --- |
| PHP | Interpreted with a VM. Used for web development, especially for server-side scripting. |
| Perl | Interpreted with a VM. Used for system administration, network programming, and text processing.
|

**Other Types**
==============

* **Object-oriented languages**: Compile or interpret to object code, which can then be executed by an
interpreter or compiled to native machine code.
* **Just-In-Time (JIT) compilers**: Compile source code into machine code at runtime, but still use
interpretation for performance and flexibility.

Note that some languages may overlap between categories, and individual implementations can vary.

### Strongly typed and loselly typed 
**Strongly Typed Languages**
========================

In strongly typed languages, the data type of a variable is known at compile time. This means that the
compiler checks the types of variables, function parameters, and return values to ensure they match.

Characteristics:

* **Type safety**: The compiler checks for type mismatches, preventing runtime errors.
* **No implicit conversions**: You must explicitly convert between data types using casting or functions.
* **Fewer runtime errors**: Since the compiler checks types at compile time, you're less likely to
encounter runtime errors due to type mismatches.

Examples of strongly typed languages:

* C
* C++
* Java
* C#
* Rust
* Go

**Loosely Typed Languages**
========================

In loosely typed languages, the data type of a variable is not known at compile time. This means that the
language allows for implicit conversions between data types, which can lead to runtime errors.

Characteristics:

* **Type safety**: The compiler may not check for type mismatches, allowing for some flexibility.
* **Implicit conversions**: You don't need to explicitly convert between data types; the language will
handle it automatically.
* **More runtime errors**: Since the compiler doesn't enforce type checks at compile time, you're more
likely to encounter runtime errors due to type mismatches.

Examples of loosely typed languages:

* Python
* JavaScript (in some contexts)
* PHP
* Ruby
* Perl

**Hybrid Typing**
================

Some languages use a combination of strong and loose typing. For example:

* **Statically typed with dynamic typing**: Languages like C# have static typing for compile-time checks,
but also allow dynamic typing through reflection or late binding.
* **Dynamically typed with type checking**: Languages like Python have dynamic typing by default, but may
still enforce type checking using tools like type checkers or linters.

**Benefits and Drawbacks**
========================

Strongly typed languages:

* Benefits: Fewer runtime errors, improved code readability, and maintainability.
* Drawbacks: More verbose code, slower development time due to explicit type definitions.

Loosely typed languages:

* Benefits: Faster development time, more flexibility in coding styles.
* Drawbacks: Higher risk of runtime errors, less maintainable code.

Ultimately, the choice between strongly typed and loosely typed languages depends on your project's
requirements, team experience, and personal preferences.

### What exactly is typescript

=====================

TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the
development experience. It was created by Microsoft and is widely used in large-scale JavaScript
applications.

### Key Features of TypeScript:

#### 1. **Static Typing**

TypeScript allows you to add type annotations to your code, which enables the compiler to check for
errors at compile-time rather than runtime. This helps catch type-related bugs early on, making it easier
to maintain and scale your application.

#### 2. **Interfacing with JavaScript**

TypeScript can interface with existing JavaScript libraries and frameworks seamlessly, allowing you to
leverage their features without modifying them.

#### 3. **Object-Oriented Programming (OOP) Support**

TypeScript supports OOP concepts like classes, inheritance, and interfaces, making it easier to organize
and structure your codebase.

#### 4. **Module System**

TypeScript has its own module system, which allows you to break down your application into smaller,
self-contained modules. This improves code organization and reusability.

### Benefits of Using TypeScript:

*   **Improved Code Quality**: TypeScript helps catch type-related bugs early on, resulting in
higher-quality code.
*   **Better Code Completion**: With TypeScript's type annotations, code completion becomes more accurate
and helpful.
*   **Easier Maintenance**: As your application grows, TypeScript's static typing and OOP support make it
easier to maintain and scale.

### Use Cases for TypeScript:

*   **Large-Scale JavaScript Applications**
*   **Enterprise Software Development**
*   **Complex Web Applications**

### How to Get Started with TypeScript?

1.  Install the TypeScript compiler (`ts-node` or `tsc`) using npm or yarn.
2.  Create a new project and set up your development environment.
3.  Start writing TypeScript code, taking advantage of its features and benefits.

By adopting TypeScript into your development workflow, you can build high-quality, maintainable
applications that scale with ease.

## How to start a typescript project

Step 1 - Install Typescript globally

> npm install -g typescript

Step 2 - Initialize an empty node.js project with typescript

>> npm init -y
>> npx tsc --init

_________________

To initialize a TypeScript project, follow these steps:

1. Install Node.js and npm (Node Package Manager) on your system.
2. Create a new directory for your project and navigate into it in the terminal/command prompt.
3. Run the command: `npm init -y` to create a basic `package.json` file.
4. Install TypeScript by running: `npm install --save-dev typescript`
5. Initialize a new TypeScript project by running: `npx tsc --init`

This will create a basic `tsconfig.json` file and set up the TypeScript compiler.

6. Create your first TypeScript file (e.g., `main.ts`) and start writing your code.

That's it! Your TypeScript project is now initialized and ready to go.


## What is type inference


# Postgres 

# Prisma 

# NextJS

# Docker
Docker is a popular platform used by developers and system administrators to develop, deploy, and run applications with ease. It utilizes containerization technology, which allows you to package an application and its dependencies into a standardized unit known as a container.

Here's a breakdown of key concepts and benefits of Docker:

1. **Containerization**: Containers are lightweight, portable, and isolated environments that encapsulate an application and its dependencies. Docker containers ensure consistency across different environments, making it easier to develop and deploy applications reliably.

2. **Image**: An image is a read-only template used to create containers. It contains everything needed to run an application, including the code, runtime, libraries, and dependencies. Images are built from a Dockerfile, which specifies the configuration and steps to create the image.

3. **Dockerfile**: A Dockerfile is a text file that contains instructions for building a Docker image. It specifies the base image, commands to install dependencies, configure the environment, and set up the application. Dockerfiles promote reproducibility and automation in the image creation process.

4. **Docker Engine**: Docker Engine is the core component of Docker that runs containers. It includes a server, a REST API, and a command-line interface (CLI) for managing containers, images, networks, and volumes.

5. **Container Registry**: Docker Hub is a public registry that hosts thousands of pre-built Docker images shared by the community. You can also use private registries to store and manage your own Docker images securely.

Benefits of Docker include:

- **Consistency**: Docker containers ensure consistent behavior across different environments, from development to production.
- **Isolation**: Containers provide process isolation, enabling multiple applications to run independently on the same host without interference.
- **Portability**: Docker containers can be easily moved between different environments, such as on-premises servers, cloud platforms, and developer laptops.
- **Efficiency**: Containers share the host operating system kernel, resulting in minimal overhead and faster startup times compared to virtual machines.
- **Scalability**: Docker simplifies the process of scaling applications horizontally by spinning up multiple containers to handle increased workload.

Overall, Docker revolutionizes the way applications are developed, deployed, and managed, making it an indispensable tool in modern software development and operations.

## How to install Docker 
To install Docker on Windows, follow these steps:

### 1. **Enable Windows Subsystem for Linux (WSL) 2:**
Docker Desktop on Windows requires WSL 2 to run Linux containers. First, enable WSL 2 on your system.

1. Open **PowerShell** as Administrator.
2. Run the following command to enable the WSL feature:
   ```bash
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```
3. Enable the Virtual Machine Platform feature:
   ```bash
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
4. Restart your computer.

5. After restarting, set WSL 2 as the default version by running:
   ```bash
   wsl --set-default-version 2
   ```

6. Install a Linux distribution (such as Ubuntu) from the Microsoft Store, if you don’t have one already.

### 2. **Install Docker Desktop:**
Now, download and install Docker Desktop, which provides a graphical interface to manage Docker containers.

1. Go to the [Docker Desktop for Windows download page](https://www.docker.com/products/docker-desktop).
2. Download the installer by clicking **Download for Windows**.
3. Run the installer and follow the instructions on the setup wizard.
   - Ensure the option to use WSL 2 as the backend is selected.
4. Once the installation is complete, open Docker Desktop.

### 3. **Verify Docker Installation:**
After installation, verify Docker is running by opening **PowerShell** and typing:
```bash
docker --version
```
This should display the version of Docker installed.

You can also run a test container:
```bash
docker run hello-world
```
This will pull the test image from Docker Hub and run a container, outputting a message confirming the installation.

---

Now Docker is installed and ready to use on your Windows system!

## Docker Image
Docker images are the core building blocks used in Docker to create containers. They are read-only templates that contain everything needed to run a piece of software, including the application code, runtime environment, libraries, dependencies, and configuration files. These images are used to create containers, which are isolated environments that run the application.

### Key Concepts of Docker Images:

1. **Layers:**
   - Docker images are built in layers. Each instruction in a Dockerfile (which is used to create an image) adds a layer to the image. Layers help reduce duplication and speed up the building process, as Docker caches layers that don’t change.

2. **Base Image:**
   - The starting point for any Docker image. A base image can be a lightweight operating system like Ubuntu or Alpine, or a minimal environment like Node.js. You can either use pre-built base images from Docker Hub or create custom ones.

3. **Dockerfile:**
   - Docker images are usually defined using a **Dockerfile**, which is a text file containing instructions on how to build the image, such as what base image to use, what commands to run, what files to copy, etc.

4. **Portability:**
   - Images can be transferred easily across different environments, ensuring consistency. This means that if an application works on one machine, it will work the same way on any other machine that uses the same Docker image.

5. **Versioning:**
   - Docker images are versioned and tagged. Tags help to identify versions, for example, `node:14-alpine` refers to version 14 of the Node.js image built on the lightweight Alpine Linux.

6. **Docker Hub:**
   - Docker Hub is a repository where developers can share Docker images. You can pull images from Docker Hub, such as `nginx`, `mysql`, or `python`, and use them to run containers.

### Example of a Docker Image:

A simple example is the official **nginx** image:

```bash
docker pull nginx
docker run -d -p 8080:80 nginx
```
This will pull the `nginx` image from Docker Hub and run an NGINX web server inside a container on port 8080 of your machine.

### Use Cases of Docker Images:
- **Packaging applications:** Docker images bundle application code and dependencies, making it easier to ship and run software consistently across different environments.
- **Continuous Integration/Continuous Deployment (CI/CD):** Docker images ensure a consistent environment for testing, building, and deploying applications.
- **Microservices:** Docker images can package individual services in a microservices architecture.

In summary, Docker images are templates that define how to create containers, enabling a consistent and portable way to package and run applications.

## DockerHub

Docker Hub is a cloud-based repository where Docker users can store, share, and distribute Docker images. It serves as the default registry for Docker and is the most popular platform for developers to find, download, and manage Docker images.

### Key Features of Docker Hub:

1. **Public and Private Repositories:**
   - Docker Hub offers both **public** and **private repositories**. Public repositories are accessible by anyone, and they typically host popular open-source images (e.g., `nginx`, `ubuntu`, `mysql`). Private repositories are only accessible to authorized users, allowing teams to store proprietary or sensitive images securely.

2. **Official Images:**
   - Docker Hub hosts **official images**—well-maintained, verified, and trusted images for popular software (e.g., `python`, `nginx`, `redis`). These are created and maintained by the developers of the software or by the Docker team.
   
3. **Community Contributions:**
   - Users and developers can upload and share their own Docker images on Docker Hub. This enables collaboration and sharing of custom software environments.
   
4. **Image Tags and Versions:**
   - Images on Docker Hub are tagged to represent different versions of the software. For example, the `node` image might have tags like `node:14-alpine`, `node:16`, etc., representing different versions or configurations of the Node.js runtime.

5. **Image Pull and Push:**
   - **Pulling an image**: You can download a Docker image from Docker Hub using the `docker pull` command.
     ```bash
     docker pull nginx
     ```
   - **Pushing an image**: After creating or modifying an image locally, you can upload it (push) to Docker Hub.
     ```bash
     docker push username/repository-name
     ```

6. **Automated Builds:**
   - Docker Hub can automatically build images from a linked GitHub or Bitbucket repository. When code changes in the repository, Docker Hub can automatically create and push a new Docker image.

7. **Searchable Image Index:**
   - Docker Hub has a searchable index of images. Developers can search for software they need, find official or community-provided images, and pull them into their environment.

8. **Docker Hub CLI Integration:**
   - Docker CLI (Command Line Interface) integrates directly with Docker Hub, making it easy to interact with Docker Hub repositories from your terminal. For example, you can use:
     ```bash
     docker search <image-name>
     ```
     to search for images or
     ```bash
     docker login
     ```
     to authenticate with Docker Hub.

9. **Security Scanning:**
   - Docker Hub offers security scanning for vulnerabilities in Docker images. This is especially important for teams using third-party images, as it helps ensure the security of the application stack.

### Common Commands with Docker Hub:
- **Login to Docker Hub:**
  ```bash
  docker login
  ```
  This prompts for your Docker Hub credentials and allows you to interact with your private repositories.

- **Pull an Image:**
  ```bash
  docker pull <image-name>
  ```
  Downloads the specified image to your local machine.

- **Push an Image:**
  ```bash
  docker push <username>/<repository-name>
  ```
  Uploads a locally built image to your Docker Hub repository.

### Example:
To use the official NGINX image from Docker Hub:
```bash
docker pull nginx
docker run -d -p 8080:80 nginx
```
This will pull the `nginx` image from Docker Hub and run it in a container, making the NGINX web server available on port 8080 of your machine.

### Use Cases of Docker Hub:
- **Effortless Access to Popular Software**: Docker Hub provides a quick way to access popular applications, databases, programming languages, and tools as pre-configured images.
- **Continuous Integration/Deployment**: Integrate Docker Hub with CI/CD pipelines to ensure automated deployments using containerized images.
- **Collaboration**: Teams can use Docker Hub to share Docker images, making development, testing, and deployment more efficient and consistent.

In summary, Docker Hub is a centralized service where users can manage and share Docker images, making it a vital tool for containerized application development and deployment.

## Containers
Containers are lightweight, portable, and isolated environments that allow applications to run consistently across different computing environments. A container packages the application along with all its dependencies, libraries, configuration files, and runtime into a single unit, ensuring that the application runs the same way regardless of where it is deployed.

### Key Characteristics of Containers:

1. **Isolation:**
   - Containers provide process and resource isolation. This means that each container runs independently and doesn't interfere with others, even though they share the same host operating system.
   
2. **Lightweight:**
   - Containers are much lighter than virtual machines because they share the host system’s kernel. They do not require a full operating system for each instance, leading to efficient resource usage.

3. **Portability:**
   - Since containers package the application and its dependencies together, they can run on any system that has a container runtime (such as Docker), making them highly portable across different environments (e.g., development, testing, production).

4. **Consistency:**
   - Containers ensure consistent environments. Whether the app is running on a developer’s laptop or in a cloud data center, the container ensures that the application will behave the same way because all its dependencies are packaged together.

5. **Efficiency:**
   - Containers use fewer system resources compared to virtual machines because they share the host OS’s kernel. This leads to faster startup times and reduced overhead in managing the infrastructure.

### Containers vs. Virtual Machines:

- **Containers:** 
  - Share the host OS kernel.
  - Lightweight and faster to start.
  - Isolated at the process level.
  
- **Virtual Machines (VMs):** 
  - Have their own OS and virtualized hardware.
  - More resource-heavy and take longer to start.
  - Isolated at the OS level.

### How Containers Work:
- **Docker Images:** Containers are created from images. A Docker image is a read-only template with instructions for creating a container. Once a container is created from an image, it becomes a runnable instance.
  
- **Container Runtime:** Containers are managed by a container runtime (such as Docker). This runtime is responsible for starting, stopping, and managing the container lifecycle. Other runtimes include Kubernetes, containerd, and Podman.

### Common Use Cases for Containers:

1. **Microservices Architecture:**
   - Containers are often used to run individual components of microservices, enabling independent development, deployment, and scaling of services.
   
2. **Continuous Integration/Continuous Deployment (CI/CD):**
   - Containers ensure consistent environments for development, testing, and production, making it easier to automate and streamline CI/CD pipelines.

3. **Development and Testing:**
   - Containers provide an isolated environment for testing new software versions without affecting the host machine or other applications.

4. **Cloud and Scalability:**
   - Containers can be easily deployed and scaled in cloud environments. Many cloud platforms, like AWS, Google Cloud, and Azure, provide native support for containerized applications.

### Example of Container Usage with Docker:

To run an NGINX web server in a container, you would use the following commands:

1. **Pull the NGINX Image:**
   ```bash
   docker pull nginx
   ```

2. **Run the Container:**
   ```bash
   docker run -d -p 8080:80 nginx
   ```

   This command:
   - Runs the `nginx` container in detached mode (`-d`).
   - Maps port 8080 on the host to port 80 inside the container (`-p 8080:80`).
   - Uses the official `nginx` image from Docker Hub.

### Advantages of Using Containers:

1. **Faster Deployment and Startup:**
   - Containers start much faster than virtual machines because they do not need to boot up a complete OS.
   
2. **Better Resource Utilization:**
   - Containers share the host system’s kernel, making them more efficient in terms of CPU, memory, and storage usage compared to VMs.
   
3. **Simplified Development Workflow:**
   - Developers can package their application and all dependencies into a container, ensuring that it behaves the same in development, staging, and production environments.

4. **Isolation and Security:**
   - Containers run in isolation, ensuring that the failure or compromise of one container does not affect other containers on the same host.

5. **Scalability:**
   - Containers are ideal for scaling applications. Orchestrators like Kubernetes can automate the management and scaling of containerized applications based on demand.

### Container Orchestration:
When deploying many containers across different environments, container orchestration platforms like **Kubernetes** or **Docker Swarm** are used to manage the lifecycle, scaling, and networking of containers in production.

In summary, containers are a powerful way to package and deploy applications in a consistent, lightweight, and scalable environment, offering significant advantages over traditional virtual machines.

## How does the containers interact with the local machine
Containers interact with the local machine’s ports through **port mapping** or **port forwarding**, which allows services running inside the container to be accessible from outside the container, such as from the host machine or external devices. Containers themselves have their own isolated networking stack, but to expose their services (like a web server) to the outside world, they need to map their internal ports to the host machine’s ports.

Here’s a deeper dive into how containers interact with the local machine’s ports:

### Key Concepts of Container Port Mapping:

1. **Container Networking Stack:**
   - Containers have an isolated networking environment, meaning they operate in their own namespace. Inside a container, the processes think they are running on their own machine with private networking, including their own IP addresses, ports, and routing tables.

2. **Internal vs. External Ports:**
   - **Internal Port**: This is the port inside the container where the application or service is running (e.g., NGINX running on port 80 inside the container).
   - **External Port**: This is the port on the host machine (your local computer or server) that you expose to the outside world, mapping it to the container’s internal port so that the service is accessible.

3. **Port Mapping (Binding Ports):**
   - Docker allows you to bind container ports to your local machine’s ports. This way, traffic hitting a specific port on your host machine gets forwarded to the corresponding port inside the container.
   - When you run a container, you specify which ports to bind using the `-p` or `--publish` option. The format is:
     ```bash
     docker run -p <host-port>:<container-port> <image-name>
     ```
     This command maps the container’s internal port to the host’s external port.

### Example of Port Mapping:

Let’s say you want to run an NGINX container that serves a web page, and you want to access it from your browser on your local machine.

1. **Run the Container:**
   ```bash
   docker run -d -p 8080:80 nginx
   ```
   - `-d`: Runs the container in detached mode (in the background).
   - `-p 8080:80`: Maps port 8080 on the local machine (host) to port 80 inside the container (where NGINX is listening).

   In this case:
   - NGINX inside the container listens on **port 80**.
   - The container’s port 80 is mapped to **port 8080** on the host.
   - You can now access the NGINX server by opening `http://localhost:8080` in your web browser.

2. **Multiple Containers on Different Ports:**
   If you want to run multiple containers on the same local machine, each container needs to be mapped to a different external port on the host. For example:
   ```bash
   docker run -d -p 8080:80 nginx
   docker run -d -p 8081:80 nginx
   ```
   - This allows two NGINX containers to run simultaneously, with the first accessible on `localhost:8080` and the second on `localhost:8081`.

### How Port Mapping Works Under the Hood:

1. **NAT and Networking:**
   When Docker starts a container, it creates a network namespace for it, meaning the container has its own isolated network interface. To enable communication between the container and the outside world, Docker uses **NAT (Network Address Translation)**.
   - Docker configures the host system’s networking to forward traffic from a specific port on the host to the container’s port.
   - Docker’s default bridge network (typically `docker0` interface) routes traffic between the host and containers using NAT, translating incoming traffic on the host port to the container’s private IP address and port.

2. **Bridge Network (Default):**
   By default, Docker containers are connected to a virtual bridge network (called `bridge`). Each container is assigned a virtual IP address on this bridge, and the host machine can communicate with containers using this IP address. However, for external access (outside the host machine), you need to expose and map container ports to host ports using `-p`.

3. **Docker Network Modes:**
   - **Bridge Mode** (default): Each container gets a virtual IP on a bridge network, and you need to map ports manually for external access.
   - **Host Mode**: The container shares the host’s network stack. In this mode, containers don’t have their own IP addresses, and services inside the container can bind directly to host ports without needing port mapping.
   - **None Mode**: The container has no network interfaces and is isolated.
   - **Custom Networks**: You can create custom Docker networks for more complex setups, allowing containers to communicate with each other using their container names instead of IPs.

### Docker Run Port Mapping Example:
Let’s explore how to map different ports for a web server running in a container.

```bash
docker run -d -p 5000:80 nginx
```

- This command maps port **5000** on the host to port **80** inside the container. If NGINX is serving content on port 80 inside the container, you can now access it by navigating to `http://localhost:5000`.

If you want to allow access to this service from external machines (e.g., a different computer on the same network), you would access it using the host’s IP address and the mapped port:
```bash
http://<host-ip>:5000
```

### Common Scenarios:

1. **Web Applications:**
   - If you’re running a web application in a container (e.g., a Node.js or Python Flask app), you would expose the internal port where the app is running (e.g., port 3000 or 5000) to an external port on the host machine.
   
   Example:
   ```bash
   docker run -d -p 3000:3000 my-node-app
   ```

2. **Multiple Services (Microservices Architecture):**
   - In a microservices architecture, each service can be containerized and exposed on different ports. For instance, a frontend service might run on port 8080, while the backend service runs on port 8081.
   ```bash
   docker run -d -p 8080:80 frontend-service
   docker run -d -p 8081:80 backend-service
   ```

3. **Database Containers:**
   - If you’re running a database like MySQL or PostgreSQL in a container, you’ll need to expose the database port (e.g., 3306 for MySQL) to access it from the host or other containers.
   ```bash
   docker run -d -p 3306:3306 mysql
   ```

4. **Cross-Container Communication:**
   - Containers can communicate with each other over the Docker network without exposing their ports to the host. They do this using their internal IP addresses or container names when they’re part of the same Docker network.

### Security Considerations:

- **Exposing Ports:** When you map a port from a container to your host machine, that port becomes accessible from outside. For security reasons, be mindful of which ports you expose and how they are accessible, especially if your host machine is exposed to the internet.
- **Firewall Rules:** Configure your firewall to control access to the ports you expose, ensuring that only trusted sources can connect.

---

In summary, containers interact with the local machine’s ports through **port mapping**, allowing services running inside the container to be accessed externally. This makes it easy to run isolated applications in containers while still making them available to users or other systems via the host’s network.

# Networks for Web Dev

## Overview of Networks essentials

Here are some important network concepts that can help you in your role:

1. **HTTP/HTTPS**: Understand the basics of the Hypertext Transfer Protocol (HTTP) and its secure counterpart, HTTPS. Know how these protocols are used for communication between clients (browsers) and servers.

2. **DNS (Domain Name System)**: Learn how DNS works and how domain names are translated into IP addresses. Understand the importance of DNS in web development and how it affects website performance.

3. **TCP/IP**: Have a fundamental understanding of the Transmission Control Protocol (TCP) and Internet Protocol (IP). These are the foundational protocols of the internet.

4. **RESTful APIs**: Learn about Representational State Transfer (REST) and how RESTful APIs work. Understand the principles of RESTful design and how to interact with APIs using HTTP methods.

5. **WebSockets**: Familiarize yourself with WebSockets, a communication protocol that enables real-time bidirectional communication between clients and servers. It's commonly used in applications that require real-time updates.

6. **CORS (Cross-Origin Resource Sharing)**: Understand the concept of cross-origin requests and how CORS is used to control access to resources on different domains. This is crucial when dealing with API requests from the frontend.

7. **Cookies and Sessions**: Learn about cookies and sessions, and how they are used for maintaining user state across web applications. Understand the security implications and best practices for handling user sessions.

8. **SSL/TLS**: Gain knowledge about Secure Socket Layer (SSL) and Transport Layer Security (TLS) protocols. Understand how they are used to secure data transmission over the internet, especially in the context of HTTPS.

9. **Web Performance Optimization**: Understand how network performance impacts web applications. Learn about techniques such as minification, compression, and caching to optimize the loading speed of web pages.

10. **Content Delivery Network (CDN)**: Know how CDNs work and how they can be used to distribute the delivery of web content across multiple servers geographically. This helps in improving the speed and availability of your web assets.

11. **HTTP/2 and HTTP/3**: Stay updated on the latest versions of the HTTP protocol. HTTP/2 and HTTP/3 introduce improvements in terms of speed and efficiency, and understanding them can be beneficial for optimizing web performance.

12. **Network Security**: Have a basic understanding of common security practices, such as avoiding mixed content, implementing secure communication protocols, and protecting against common web vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

By grasping these network concepts, you'll be better equipped to build efficient, secure, and high-performing frontend web applications.

## HTTP/HTTPS 

HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure) are protocols that define how data is transmitted over the internet. They are the foundation of any data exchange on the web and play a crucial role in the communication between clients (such as web browsers) and servers.

### HTTP (Hypertext Transfer Protocol):

1. **Plain Text Transmission**: HTTP is a protocol used for transmitting hypertext (text with links) over the internet. It operates over a connectionless and stateless protocol, typically using TCP (Transmission Control Protocol).

2. **Request-Response Model**: In the HTTP model, a client sends a request to a server for a particular resource (like a webpage), and the server responds with the requested resource along with an HTTP status code that indicates the success or failure of the request.

3. **Stateless Nature**: Each request from the client to the server is independent, and the server does not maintain any information about the client's previous requests. This statelessness simplifies the design but can be challenging for certain types of applications.

4. **Example HTTP Request:**
   ```http
   GET /index.html HTTP/1.1
   Host: www.example.com
   ```

5. **Example HTTP Response:**
   ```http
   HTTP/1.1 200 OK
   Content-Type: text/html
   
   <!DOCTYPE html>
   <html>
   <head>
       <title>Example Page</title>
   </head>
   <body>
       <h1>Hello, World!</h1>
   </body>
   </html>
   ```

### HTTPS (Hypertext Transfer Protocol Secure):

1. **Secured Communication**: HTTPS is a secure version of HTTP that adds a layer of encryption to the data transmitted between the client and the server. It uses SSL/TLS protocols to encrypt the communication, ensuring that the data exchanged remains confidential and secure from eavesdroppers.

2. **Secure Data Transfer**: With HTTPS, the data is encrypted before being sent and decrypted upon arrival at the destination. This encryption helps protect sensitive information such as login credentials, personal details, and financial transactions.

3. **URL Scheme and Port**: In a URL, the use of HTTPS is indicated by the URL scheme "https://" and is typically associated with port 443 (by default). For example: `https://www.example.com`.

4. **Example HTTPS Request (similar to HTTP):**
   ```https
   GET /index.html HTTP/1.1
   Host: www.example.com
   ```

5. **Example HTTPS Response (similar to HTTP):**
   ```https
   HTTP/1.1 200 OK
   Content-Type: text/html
   
   <!DOCTYPE html>
   <html>
   <head>
       <title>Secure Example Page</title>
   </head>
   <body>
       <h1>Hello, Secure World!</h1>
   </body>
   </html>
   ```

In summary, while HTTP facilitates the exchange of data on the web, HTTPS adds a layer of security through encryption, making it safer for transmitting sensitive information. As of best practices, it is recommended to use HTTPS to ensure the confidentiality and integrity of data in transit.

### HTTP Parameters
When a client makes an HTTP request to a server, the server responds with an HTTP response that includes several parameters or fields. The key parameters returned over HTTP include:

1. **Status Line:**
   - This line includes the HTTP version, a three-digit status code, and a human-readable status message. For example:
     ```
     HTTP/1.1 200 OK
     ```
     Here, "HTTP/1.1" is the version, "200" is the status code indicating a successful response, and "OK" is the status message.

2. **Headers:**
   - HTTP headers provide additional information about the server's response or the requested resource. Common headers include:
     - **Content-Type:** Specifies the type of data being returned (e.g., text/html, application/json).
     - **Content-Length:** Indicates the size of the response body in bytes.
     - **Date:** The date and time when the response was generated.
     - **Server:** Identifies the server software being used.
     - **Set-Cookie:** Sets a cookie on the client's browser.

3. **Empty Line:**
   - An empty line separates the headers from the response body. It marks the end of the header section and signals the beginning of the body.

4. **Response Body:**
   - The response body contains the actual data or resource requested by the client. The format and content of the body depend on the type of request and the resource being accessed.

5. **Cookies:**
   - Cookies are often included in the response headers to store information on the client side for subsequent requests. They can be used to maintain session information, track user preferences, etc.

6. **Status Code:**
   - While the status code is part of the status line, it's worth emphasizing. The status code is a three-digit numerical code that indicates the success or failure of the request. Common status codes include:
     - **2xx (Successful):** The request was successful.
     - **3xx (Redirection):** The client needs to take additional action to complete the request.
     - **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled.
     - **5xx (Server Error):** The server failed to fulfill a valid request.

These six components together make up the essential parts of an HTTP response. They provide information about the result of the request, the server's characteristics, and the data being returned.

### HTTP Status Codes
HTTP status codes are three-digit numbers that indicate the outcome of an HTTP request made by a client to a server. Each status code is grouped into one of five classes, indicating the general type of response. Here is an overview of some commonly encountered HTTP status codes:

1. **1xx (Informational):**
   - **100 Continue:** The server has received the initial part of the request, and the client should proceed with the rest of the request.

2. **2xx (Success):**
   - **200 OK:** The request was successful, and the server has returned the requested data.
   - **201 Created:** The request was successful, and a new resource was created.
   - **204 No Content:** The request was successful, but there is no additional information to send in the response body.

3. **3xx (Redirection):**
   - **301 Moved Permanently:** The requested resource has been permanently moved to a new location.
   - **302 Found (or 303 See Other):** The requested resource resides temporarily at a different location.
   - **304 Not Modified:** The client's cached copy is still valid, and there is no need to transfer the requested resource again.

4. **4xx (Client Error):**
   - **400 Bad Request:** The server could not understand the request due to malformed syntax or other client-side error.
   - **401 Unauthorized:** Authentication is required, and the user has not provided valid credentials.
   - **403 Forbidden:** The server understood the request, but the client does not have permission to access the requested resource.
   - **404 Not Found:** The requested resource could not be found on the server.

5. **5xx (Server Error):**
   - **500 Internal Server Error:** A generic error message indicating that an unexpected condition was encountered on the server.
   - **501 Not Implemented:** The server does not support the functionality required to fulfill the request.
   - **502 Bad Gateway:** The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
   - **503 Service Unavailable:** The server is temporarily unable to handle the request, usually due to overloading or maintenance.

### HTTPS
HTTPS, or Hypertext Transfer Protocol Secure, is the secure version of HTTP (Hypertext Transfer Protocol), the protocol used for transmitting data over the World Wide Web. HTTPS adds a layer of encryption to ensure that the data exchanged between a user's web browser and a website remains confidential and secure. This is particularly important when sensitive information, such as login credentials, personal details, or financial transactions, is being transmitted.

Key features of HTTPS include:

1. **Encryption:**
   - HTTPS uses encryption protocols, typically SSL (Secure Sockets Layer) or its successor, TLS (Transport Layer Security), to encrypt the data transmitted between the client and the server. This encryption helps protect the information from being intercepted or tampered with by malicious actors during transit.

2. **URL Scheme and Port:**
   - In a URL, the use of HTTPS is indicated by the scheme "https://" at the beginning of the web address. The default port for HTTPS is 443. For example: `https://www.example.com`.

3. **Data Integrity:**
   - HTTPS not only encrypts data but also ensures its integrity. This means that the data cannot be altered or corrupted during transmission. If any tampering is detected, the connection is usually terminated.

4. **Authentication:**
   - HTTPS provides a level of authentication by using digital certificates. These certificates are issued by Certificate Authorities (CAs) and verify the identity of the website. Users can be more confident that they are connecting to the legitimate website and not an imposter.

5. **Trust Indicators:**
   - Browsers display trust indicators, such as a padlock icon or the word "Secure" in the address bar, to signal that a website is using HTTPS. This helps users feel more confident about the security of their connection.

6. **SEO Benefits:**
   - Search engines like Google consider HTTPS as a ranking factor. Websites using HTTPS may receive a slight boost in search engine rankings compared to non-secure counterparts.

7. **Secure Cookies:**
   - Cookies transmitted over HTTPS are more secure than those sent over HTTP. This is crucial for maintaining secure user sessions and protecting sensitive information.

8. **Compliance:**
   - Many regulatory requirements and industry standards, such as PCI DSS (Payment Card Industry Data Security Standard), mandate the use of HTTPS to ensure the security of sensitive data.

9. **HTTP/2 and HTTP/3 Support:**
   - Modern versions of the HTTP protocol, such as HTTP/2 and HTTP/3, are designed to work optimally with HTTPS, offering improved performance and efficiency for web applications.

In summary, HTTPS is a critical security measure for websites, providing encryption, data integrity, and authentication. As online security concerns continue to grow, the adoption of HTTPS has become a standard practice for any website that handles sensitive information.

### Certificate Authority

Certificate Authorities (CAs) are entities that play a crucial role in the implementation of secure communication over the internet, particularly in the context of HTTPS (Hypertext Transfer Protocol Secure). Their primary function is to issue digital certificates, which are cryptographic documents that verify the authenticity of a website's identity and enable the secure exchange of information between a user's browser and the web server.

Here's an overview of how Certificate Authorities work and their role in online security:

1. **Digital Certificates:**
   - A digital certificate is a digital document that contains information about the identity of the certificate holder (such as a website) and the public key associated with that entity.

2. **Public Key Infrastructure (PKI):**
   - CAs operate within a framework known as Public Key Infrastructure. In PKI, each entity (such as a website or an individual) has a pair of cryptographic keys: a public key and a private key. The public key is included in the digital certificate, while the private key is kept secret.

3. **Issuance of Certificates:**
   - When a website owner wishes to secure their site with HTTPS, they obtain a digital certificate from a Certificate Authority. The CA verifies the identity of the website owner before issuing the certificate.

4. **Verification Process:**
   - The verification process typically involves the CA confirming that the entity requesting the certificate has control over the domain for which the certificate is requested. This may include domain validation, organization validation, or extended validation depending on the level of assurance required.

5. **Types of Certificates:**
   - CAs can issue different types of certificates, including:
     - **Domain Validation (DV) Certificates:** Verify control over the domain.
     - **Organization Validation (OV) Certificates:** Include verification of the organization's identity.
     - **Extended Validation (EV) Certificates:** Provide the highest level of validation, including legal entity verification.

6. **Root Certificates:**
   - CAs have their own digital certificates known as root certificates. These root certificates are stored in web browsers and other devices, forming the trust anchor for the entire certificate chain. Browsers trust websites that have certificates issued by recognized root CAs.

7. **Certificate Revocation:**
   - CAs maintain Certificate Revocation Lists (CRLs) or use the Online Certificate Status Protocol (OCSP) to allow browsers to check whether a certificate is still valid. This is important in case a certificate needs to be revoked due to compromise or other security concerns.

8. **Trust Hierarchy:**
   - The trust in the system is established through a hierarchical structure, with root CAs at the top. Browsers and devices come pre-installed with a set of root certificates that are considered trustworthy. Any certificates issued by these trusted roots are also trusted.

By providing a trusted third-party verification mechanism, Certificate Authorities contribute to the security and integrity of online communication, assuring users that they are interacting with legitimate websites and not malicious impostors. However, the CA system is not without challenges, and there have been instances of security concerns and discussions about improving the overall trust model.

## HTTP/2 and HTTP/3

HTTP/2 and HTTP/3 are two successive versions of the HTTP protocol, the foundation of data communication on the World Wide Web. These newer versions are designed to improve the performance and efficiency of web communication compared to their predecessor, HTTP/1.1.

### HTTP/2:

1. **Multiplexing:** HTTP/2 introduces multiplexing, allowing multiple requests and responses to be sent in parallel over a single connection. This reduces latency and speeds up the loading of web pages.

2. **Header Compression:** Header data is compressed, resulting in a more efficient use of network resources. This is especially beneficial for reducing overhead in situations where numerous small assets need to be loaded.

3. **Binary Protocol:** While HTTP/1.1 uses plaintext for communication, HTTP/2 employs a binary protocol. This makes it more compact and less prone to human error in parsing.

4. **Server Push:** HTTP/2 supports server push, allowing the server to push resources to the client's cache before they are explicitly requested. This can lead to faster page loads by anticipating the client's needs.

5. **Stream Prioritization:** The ability to prioritize different streams of data enables more efficient loading of critical resources, improving the user experience.

### HTTP/3:

1. **Transport Protocol:** HTTP/3 is built on top of the QUIC (Quick UDP Internet Connections) transport protocol rather than TCP, which is used by HTTP/1.1 and HTTP/2. QUIC is designed to be faster and more reliable by reducing latency and addressing issues associated with TCP.

2. **Multiplexing and Concurrency:** Like HTTP/2, HTTP/3 supports multiplexing, allowing multiple requests and responses to be processed concurrently. However, HTTP/3 achieves this over a single QUIC connection.

3. **Connection Migration:** In cases of network changes (such as switching from Wi-Fi to mobile data), HTTP/3 allows for the migration of a connection without disrupting ongoing transactions.

4. **Improved Flow Control:** HTTP/3 incorporates refined flow control mechanisms, addressing some of the limitations of previous versions and optimizing resource utilization.

5. **Reduced Head-of-Line Blocking:** HTTP/3 aims to minimize the impact of head-of-line blocking, a situation where the transmission of one resource is delayed by the slow transmission of another. This is achieved through independent stream prioritization.

6. **Enhanced Security:** HTTP/3 is designed to be more secure by default, with the encryption of transport built into the protocol. This is in contrast to HTTP/2, where encryption (HTTPS) is recommended but not mandatory.

Both HTTP/2 and HTTP/3 are designed to improve the performance of web applications, providing faster and more efficient communication between clients and servers. The adoption of these newer protocols can lead to improved user experiences, especially in terms of faster page loading times and reduced latency. However, the successful deployment of these protocols depends on factors such as server and client support, as well as the specific characteristics of the network.


### What are ports in networking?
In networking, a port refers to a communication endpoint. It's a virtual or physical point within a computer system where network connections can be established. Ports are essential for enabling communication between different devices or processes over a network.

Here are two types of ports commonly used in networking:

1. **Physical Ports:**
   Physical ports refer to the actual connectors on networking devices, such as routers, switches, and computers. These connectors are used to physically plug in cables to establish a wired connection. Examples include Ethernet ports, USB ports, and HDMI ports.

2. **Logical Ports:**
   Logical ports, on the other hand, are used in the context of networking protocols to identify specific services or processes running on a device. In networking, these logical ports are numbered, and each number is associated with a particular service. The most well-known system for logical ports is the Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) system.

   - **TCP Ports:**
TCP is a connection-oriented protocol, providing reliable and ordered delivery of data. Each TCP connection is identified by a unique combination of source IP address, source port, destination IP address, and destination port. Here are some well-known TCP ports:
      1. **Port 21 - FTP (File Transfer Protocol):**
         - Used for transferring files between a client and a server.

      2. **Port 22 - SSH (Secure Shell):**
         - Provides secure access to a remote device over a network.

      3. **Port 23 - Telnet:**
         - Enables command-line access to a remote device.

      4. **Port 80 - HTTP (Hypertext Transfer Protocol):**
         - Used for unsecured web traffic.

      5. **Port 443 - HTTPS (HTTP Secure):**
         - Used for secure web traffic with encryption.

      6. **Port 25 - SMTP (Simple Mail Transfer Protocol):**
         - Used for sending emails.

      7. **Port 110 - POP3 (Post Office Protocol 3):**
         - Retrieves emails from a server.

      8. **Port 143 - IMAP (Internet Message Access Protocol):**
         - Retrieves emails with more features than POP3.         

   - **UDP Ports:**
     UUDP is a connectionless protocol that provides faster communication but without the reliability guarantees of TCP. UDP ports are used for various purposes, often where a slight loss of data is acceptable:
      1. **Port 53 - DNS (Domain Name System):**
         - Resolves domain names to IP addresses.

      2. **Port 67/68 - DHCP (Dynamic Host Configuration Protocol):**
         - Assigns IP addresses to devices on a network.

      3. **Port 161/162 - SNMP (Simple Network Management Protocol):**
         - Manages and monitors network devices.

      4. **Port 69 - TFTP (Trivial File Transfer Protocol):**
         - A simpler form of FTP for lightweight file transfers.

      5. **Port 123 - NTP (Network Time Protocol):**
         - Synchronizes the clocks of devices on a network.
      

When data is sent over a network, it is addressed to a specific IP address and port number combination. The IP address identifies the device, and the port number identifies the specific service or application on that device.

Understanding and managing ports is crucial for configuring firewalls, routers, and other networking devices to allow or block specific types of traffic. Port numbers help ensure that data is directed to the correct application or service on a device.


### Domain Name Server

DNS stands for Domain Name System. It is a fundamental component of the internet that serves as a decentralized system to translate human-readable domain names into numerical IP addresses. Computers and network devices communicate using IP addresses, which are numerical labels assigned to each device connected to a network. However, IP addresses can be challenging for people to remember.

Here's how DNS works:

1. **Domain Names:**
   - Every device connected to the internet has an IP address, but it's more convenient for people to use domain names (like www.example.com) to access websites and services.

2. **DNS Servers:**
   - DNS operates as a distributed database system. When you enter a domain name in a web browser, your device needs to know the corresponding IP address. It queries DNS servers to obtain this information.

3. **DNS Resolution:**
   - The process of finding the IP address associated with a domain name is called DNS resolution. It involves multiple steps:
     - **Local DNS Resolver:** Your device checks its local DNS resolver (often provided by your Internet Service Provider) to see if it already knows the IP address for the requested domain.
     - **Recursive DNS Servers:** If the local resolver doesn't have the information, it queries higher-level DNS servers, known as recursive DNS servers. These servers may have the information cached or, if not, they will recursively query other DNS servers until the information is found.

4. **Root DNS Servers:**
   - The DNS resolution process starts with root DNS servers, which are a critical part of the DNS hierarchy. They provide information about top-level domain (TLD) servers.

5. **Top-Level Domain (TLD) Servers:**
   - TLD servers contain information about the specific domain extensions (like .com, .org, .net). They direct queries to the authoritative DNS servers for the second-level domain.

6. **Authoritative DNS Servers:**
   - Authoritative DNS servers hold the specific IP address information for a domain. They are the final stop in the DNS resolution process.

7. **Caching:**
   - To improve efficiency, DNS servers cache information for a certain period. If a DNS server has recently looked up a domain's IP address, it can provide that information without querying other servers.

DNS is crucial for the proper functioning of the internet. Without DNS, users would need to memorize IP addresses for every website they want to visit, which is not practical. The system's hierarchical structure and distributed nature contribute to the reliability and efficiency of DNS.

<img src="./Code/Src/DNS.png">


### How is a new website pushed to the DNS

Adding a new website to the DNS involves a process that includes the domain registration and updating the DNS records. Here's a step-by-step overview of how a new website is added to the DNS:

1. **Domain Registration:**
   - The first step is for the website owner to register a new domain with a domain registrar. This involves choosing an available domain name and providing contact information. The domain registrar is an accredited organization that manages the reservation of domain names in specific top-level domains (TLDs).

2. **Registrar's DNS Servers:**
   - When a domain is registered, the domain registrar typically provides default DNS settings for the domain. These settings include the DNS server information where the domain's DNS records can be managed.

3. **Setting DNS Records:**
   - The website owner, or someone authorized to manage the DNS records, needs to log in to the registrar's website or use other provided tools to set up the necessary DNS records. These records include:
     - **Name Servers:** These indicate which DNS servers are authoritative for the domain.
     - **A Records (Address Records):** These map the domain to the corresponding IP address of the web server hosting the website.
     - **CNAME Records (Canonical Name Records):** These provide an alias for the domain, often used for subdomains or redirects.
     - **MX Records (Mail Exchange Records):** These specify mail servers responsible for receiving emails for the domain.

4. **Propagation:**
   - After DNS records are updated, it takes some time for the changes to propagate across the global DNS system. This process, known as DNS propagation, can take from a few hours to up to 48 hours. During this time, DNS servers worldwide update their caches with the new DNS information.

5. **Global DNS Update:**
   - Once DNS propagation is complete, the domain is officially part of the global DNS system, and users worldwide can access the website using the registered domain name.

6. **Content Hosting:**
   - Simultaneously or before DNS registration, the website owner needs to host the website's content on a web server. The IP address associated with the domain in the DNS records points to this web server.

It's important to note that different registrars may have slightly different interfaces for managing DNS records. Additionally, domain owners can use different DNS hosting providers if they choose not to use the default DNS services provided by the registrar.

Overall, the process involves coordinating with the domain registrar to set up the necessary DNS records and ensuring that the web content is hosted on a server accessible through the specified IP address.

### FQDN

FQDN stands for Fully Qualified Domain Name. It represents the complete domain name for a specific host on the internet, including its top-level domain (TLD) and all the levels of subdomains. An FQDN provides the absolute location of a specific resource in the Domain Name System (DNS) hierarchy.

The structure of an FQDN is hierarchical, with each level separated by dots (periods). The order is from the most specific (subdomain) to the most general (top-level domain). The FQDN includes the following components:

1. **Host Name (Subdomain):**
   - This is the specific name assigned to the host or device within the domain. For example, in the FQDN "www.example.com," "www" is the host name.

2. **Domain Name:**
   - The domain name specifies the general location or organization to which the host belongs. In the example "www.example.com," "example" is the domain name.

3. **Top-Level Domain (TLD):**
   - The TLD is the highest level in the DNS hierarchy and often indicates the type or purpose of the domain. In "www.example.com," ".com" is the TLD.

Putting it all together, the FQDN is formed by concatenating these components, with each level separated by dots. For example:
```
www.example.com
```

In this FQDN:
- "www" is the host name.
- "example" is the domain name.
- ".com" is the TLD.

FQDNs are essential for specifying the precise location of resources on the internet. They are commonly used in settings such as web hosting, email configuration, and network administration. The complete and hierarchical nature of FQDNs helps ensure that there is no ambiguity in identifying specific hosts within the vast domain structure of the internet.

### TCP/IP

Certainly! Let's continue with a bit more detail about each layer in the TCP/IP model:

### 1. **Link Layer (or Network Interface Layer):**
   - At this layer, devices are identified by their physical addresses, often referred to as MAC (Media Access Control) addresses.
   - Protocols at this layer include Ethernet for wired connections and Wi-Fi for wireless connections.
   - It deals with the framing of data into frames, error detection, and basic flow control.

### 2. **Internet Layer:**
   - **Internet Protocol (IP):**
     - IP is a connectionless, best-effort delivery protocol.
     - It provides a logical addressing scheme using IP addresses (IPv4 or IPv6).
     - IP is responsible for routing packets across different networks, allowing data to traverse multiple routers to reach its destination.

   - **Internet Control Message Protocol (ICMP):**
     - ICMP is used for network diagnostics, error reporting, and generating error messages. For example, the famous "ping" command uses ICMP.

   - **Routing Protocols:**
     - Protocols like Routing Information Protocol (RIP), Open Shortest Path First (OSPF), and Border Gateway Protocol (BGP) operate at this layer to determine the best path for data to travel between networks.

### 3. **Transport Layer:**
   - **Transmission Control Protocol (TCP):**
     - Provides a reliable, connection-oriented service.
     - Breaks data into segments, adds sequencing and error-checking information, and ensures delivery in the correct order.
     - Used for applications where data integrity is crucial, such as web browsing, email, and file transfers.

   - **User Datagram Protocol (UDP):**
     - Provides a connectionless, unreliable service.
     - Faster than TCP but does not guarantee delivery or order of packets.
     - Suitable for applications like real-time streaming, online gaming, and certain types of video conferencing.

### 4. **Application Layer:**
   - This layer directly interacts with end-user applications and supports various protocols for different services.
      - **Hypertext Transfer Protocol (HTTP):**
         - Used for transferring web pages and is the foundation of the World Wide Web.
         - Secured version, HTTPS, adds a layer of encryption using protocols like SSL/TLS.

      - **File Transfer Protocol (FTP):**
         - Facilitates the transfer of files between computers on a network.

      - **Simple Mail Transfer Protocol (SMTP):**
         - Manages the sending of emails.

      - **Post Office Protocol (POP) and Internet Message Access Protocol (IMAP):**
         - Protocols for retrieving emails from a mail server.

      - **Domain Name System (DNS):**
         - Resolves human-readable domain names to IP addresses.

      - **Other Protocols:**
         - Various other protocols, such as Telnet for remote login, SNMP for network management, and DHCP for dynamic IP address assignment, operate at the application layer.

The TCP/IP model's modular design allows for flexibility and scalability, making it a foundational framework for the internet's architecture and the basis for communication in modern networking environments. Each layer has a specific set of functions, and the protocols within each layer work together to enable end-to-end communication between devices on a network.

### Restful APIs

RESTful APIs (Representational State Transfer APIs) are a type of web API (Application Programming Interface) that adheres to the principles and constraints of REST architectural style. REST is an architectural style for designing networked applications, and it was introduced by Roy Fielding in his doctoral dissertation in 2000. RESTful APIs are commonly used in web development to enable communication between systems over the internet.

Here are key principles and characteristics of RESTful APIs:

1. **Statelessness:**
   - Each request from a client to a server must contain all the information needed to understand and fulfill the request. The server should not store any information about the client's state between requests. This enhances scalability and simplifies the design.

2. **Client-Server Architecture:**
   - The client and server are separate entities that communicate over a network. The client is responsible for the user interface and user experience, while the server is responsible for processing requests, managing resources, and handling business logic.

3. **Uniform Interface:**
   - RESTful APIs have a uniform and consistent interface, which simplifies interactions. The uniform interface is defined by four constraints:
      - **Resource Identification:** Resources (such as data entities or services) are identified by URIs (Uniform Resource Identifiers).
      - **Resource Manipulation through Representations:** Resources can be manipulated using representations, such as JSON or XML. The client interacts with representations of resources rather than the resources themselves.
      - **Self-Descriptive Messages:** Each message from the server to the client contains enough information for the client to understand how to process the response.
      - **Hypermedia as the Engine of Application State (HATEOAS):** The client interacts with the application entirely through hypermedia provided dynamically by the application servers. This allows the server to control the state of the application.

4. **Stateless Communication:**
   - Communication between the client and server is stateless, meaning that each request from a client to a server must contain all the information needed to understand and fulfill that request. The server does not store any information about the client's state between requests.

5. **Resource-Based:**
   - In a RESTful API, resources are the key abstractions, and each resource is identified by a unique URI. Resources can represent entities like data objects, services, or concepts.

6. **HTTP Methods:**
   - RESTful APIs use standard HTTP methods for communication, such as:
      - **GET:** Retrieve a resource.
      - **POST:** Create a new resource.
      - **PUT:** Update an existing resource or create a new resource if it doesn't exist.
      - **DELETE:** Delete a resource.

7. **Stateless Operations:**
   - Each request from a client to a server must contain all the information needed to understand and fulfill the request. The server should not store any information about the client's state between requests.

RESTful APIs are widely used in web development due to their simplicity, scalability, and ease of integration. They are commonly employed to enable communication between web and mobile applications and backend servers, allowing different systems to interact in a standardized and efficient manner.


### Websockets
WebSockets is a communication protocol that provides full-duplex communication channels over a single, long-lived connection between a client and a server. It is designed to be implemented in web browsers and web servers but can be used in any application where real-time communication is needed.

Here are some key points about WebSockets:

1. **Full-Duplex Communication:** Unlike traditional web communication, which is typically request-response based (like HTTP), WebSockets allow for bidirectional communication. This means that both the client and the server can send messages to each other independently.

2. **Low Latency:** WebSockets are designed to reduce latency compared to traditional HTTP communication. Once a WebSocket connection is established, the overhead of opening and closing connections for each request is eliminated.

3. **Persistent Connection:** WebSockets provide a persistent connection between the client and the server, allowing for real-time data exchange without the need to repeatedly open and close connections.

4. **Efficiency:** WebSockets have a smaller overhead compared to HTTP, as they don't need to include headers in each message. This makes them more efficient for scenarios where a large number of small messages need to be sent quickly.

5. **Event-Driven Model:** WebSockets use an event-driven model, where the server or the client can trigger events to send or receive messages. This makes them well-suited for real-time applications such as chat applications, online gaming, financial trading platforms, and collaborative editing tools.

6. **Security:** WebSockets can be secured using the same protocols as HTTP, such as TLS/SSL, providing a secure channel for data transmission.

To use WebSockets, both the client and the server must support the WebSocket protocol. WebSockets are typically initiated through a WebSocket handshake, and once the connection is established, messages can be sent in both directions without the need to re-establish the connection for each message. JavaScript in web browsers provides a WebSocket API for client-side implementation, and various programming languages and frameworks support WebSocket server-side implementation.

### CORS (Cross Origin Resouce Sharing)
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages from one origin (domain) can request and interact with resources from another origin. The same-origin policy is a security measure implemented by web browsers to prevent scripts from one domain from making requests to a different domain, which could potentially lead to security vulnerabilities.

CORS allows servers to specify which origins are permitted to access their resources, and it defines a set of headers that browsers use to enforce these restrictions. Here's a brief overview of how CORS works:

1. **Origin:** An origin is a combination of protocol, domain, and port. For example, "https://www.example.com" is considered a different origin from "http://api.example.com."

2. **Same-Origin Policy:** Browsers, by default, follow the same-origin policy, which means that a web page served from one origin is not allowed to make requests to a different origin using certain web APIs, particularly XMLHttpRequest and Fetch API.

3. **Cross-Origin Requests:** When a web page makes a request to a different origin, it is considered a cross-origin request. CORS provides a way for the server to specify which origins are allowed to access its resources.

4. **CORS Headers:** When a server receives a cross-origin request, it can include specific HTTP headers in its response to inform the browser whether the request should be allowed. The main CORS headers include:
   - **`Access-Control-Allow-Origin`:** Specifies which origins are allowed to access the resource. It can be a specific origin, a comma-separated list of origins, or the special value "*" (allowing any origin).
   - **`Access-Control-Allow-Methods`:** Specifies the HTTP methods (e.g., GET, POST) that are allowed when accessing the resource.
   - **`Access-Control-Allow-Headers`:** Specifies which HTTP headers can be used during the actual request.
   - **`Access-Control-Allow-Credentials`:** Indicates whether the browser should include credentials (like cookies or HTTP authentication) in the request.
   - **`Access-Control-Expose-Headers`:** Specifies which headers are exposed to the response and can be accessed by the requesting client.

By utilizing these headers, servers can control and restrict cross-origin requests based on their security policies. CORS is crucial for maintaining the security of web applications while allowing controlled access to resources from different origins.
### Cookkies and Sessions
Cookies and sessions are both mechanisms used in web development to manage and maintain stateful information between a client (usually a web browser) and a server. They are essential for tasks such as user authentication, tracking user preferences, and maintaining user-specific data. While they serve similar purposes, they operate in slightly different ways.

### Cookies:

1. **Definition:** Cookies are small pieces of data stored on the client's device (usually in the form of text files) by the web browser. Each cookie is associated with a specific domain and is sent between the client and the server with each HTTP request.

2. **Storage:** Cookies can store limited amounts of data, usually up to a few kilobytes. They are often used for lightweight information such as user preferences, session identifiers, or tracking information.

3. **Persistence:** Cookies can be persistent or session-based. Persistent cookies are stored on the client's device for a specified duration, even after the browser is closed, while session cookies are temporary and are deleted when the browser is closed.

4. **Accessibility:** Cookies can be accessed and modified by both the client-side (JavaScript running in the browser) and the server-side (HTTP headers).

5. **Use Cases:** Cookies are commonly used for tasks like user authentication (storing session tokens), remembering user preferences, tracking user behavior for analytics, and maintaining shopping cart contents in e-commerce applications.

### Sessions:

1. **Definition:** Sessions are a server-side mechanism for maintaining stateful information. A session is created on the server when a user interacts with a web application, and a unique session identifier is often stored on the client side as a cookie.

2. **Storage:** Sessions can store larger amounts of data compared to cookies since the data is stored on the server. The session data associated with a particular user is usually kept on the server, and only a session identifier is stored as a cookie on the client side.

3. **Persistence:** Sessions are typically more transient than persistent cookies. The session data is maintained for the duration of a user's interaction with the web application and is often cleared when the user closes the browser or after a certain period of inactivity.

4. **Accessibility:** Session data is stored and managed exclusively on the server, and only a session identifier (often stored in a cookie) is used to associate the client with the server-side session data.

5. **Use Cases:** Sessions are commonly used for user authentication (storing user details securely on the server), storing temporary data during a user's visit, and managing server-side state in web applications.

In summary, cookies are small pieces of data stored on the client side, accessible by both the client and the server, while sessions are server-side storage mechanisms associated with a specific user and identified by a session identifier stored on the client side as a cookie. Both cookies and sessions play crucial roles in creating dynamic, personalized web applications.

### SSL and TLS
SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network, commonly the internet. They are used to secure data transmission and ensure the privacy and integrity of information exchanged between a client (such as a web browser) and a server.

### SSL (Secure Sockets Layer):

1. **Introduction:** SSL was developed by Netscape in the mid-1990s as a protocol for securing communications over the internet.

2. **Security Layers:** SSL operates as a lower-level security protocol and is designed to establish a secure connection between a client and a server. It provides encryption, data integrity, and authentication.

3. **Versions:** SSL has had several versions, including SSL 2.0, SSL 3.0, and SSL 3.1 (which is often referred to as TLS 1.0). SSL 2.0 and SSL 3.0 are considered insecure and have been largely deprecated.

### TLS (Transport Layer Security):

1. **Introduction:** TLS is the successor to SSL and was introduced to address the vulnerabilities found in SSL. It was first defined in 1999 as TLS 1.0.

2. **Security Layers:** Like SSL, TLS provides a secure communication layer between a client and a server. It includes features such as encryption, data integrity, and authentication. TLS is designed to be backward compatible with SSL, but the two protocols are not interoperable.

3. **Versions:** TLS has seen several versions, including TLS 1.0, TLS 1.1, TLS 1.2, and TLS 1.3. TLS 1.2 and TLS 1.3 are widely used today, with TLS 1.3 being the most recent version (as of my last knowledge update in January 2022).

### Key Similarities and Differences:

- **Encryption:** Both SSL and TLS use cryptographic algorithms to encrypt data during transmission, preventing unauthorized parties from intercepting and reading the information.

- **Authentication:** Both protocols support server authentication, allowing clients to verify the identity of the server with which they are communicating.

- **Versions:** TLS is considered the successor to SSL, and while the terms are often used interchangeably, it's important to note that SSL has been largely deprecated due to security vulnerabilities in earlier versions.

- **Usage:** The terms "SSL" and "TLS" are often used colloquially to refer to the secure connection in web browsers, but in modern contexts, TLS is the more accurate term.

In practice, the use of SSL has been largely phased out in favor of TLS due to the known vulnerabilities in SSL. Websites and web applications typically use TLS to establish secure connections, especially for HTTPS (HTTP Secure) connections, which encrypt the data exchanged between web browsers and servers.

### Web Performance Optimization
Web performance optimization involves various techniques and best practices aimed at improving the speed, responsiveness, and overall user experience of websites or web applications. Faster-loading websites tend to result in better user engagement, higher conversion rates, and improved search engine rankings. Here are some key strategies for web performance optimization:

1. **Optimize Images:**
   - Compress images to reduce file sizes without compromising quality.
   - Use responsive images and the `srcset` attribute to deliver different image sizes based on device characteristics.
   - Consider using modern image formats like WebP, which often provide better compression.

2. **Minify and Concatenate Files:**
   - Minify CSS, JavaScript, and HTML files to remove unnecessary characters and reduce file sizes.
   - Concatenate multiple files into a single file to reduce the number of HTTP requests.

3. **Leverage Browser Caching:**
   - Set appropriate cache headers to enable browser caching for static assets like images, CSS, and JavaScript.
   - Use versioning or unique filenames for updated assets to ensure that browsers fetch the latest versions when needed.

4. **Use a Content Delivery Network (CDN):**
   - Distribute static assets across multiple servers globally using a CDN to reduce latency and improve load times for users in different geographic locations.

5. **Enable Gzip Compression:**
   - Enable Gzip or Brotli compression on the server to reduce the size of text-based assets (CSS, JavaScript, HTML) before they are sent to the client.

6. **Optimize Critical Rendering Path:**
   - Prioritize the loading of critical resources needed to render the initial view of a page.
   - Use the "async" or "defer" attributes for non-critical JavaScript to avoid blocking rendering.

7. **Reduce Server Response Time:**
   - Optimize server-side code and database queries to minimize response times.
   - Use caching mechanisms at the server level to store and reuse frequently requested data.

8. **Lazy Loading:**
   - Implement lazy loading for images and other non-critical resources so that they are loaded only when they come into the user's viewport.

9. **Minimize HTTP Requests:**
   - Reduce the number of HTTP requests by minimizing the number of resources required to load a page.
   - Combine CSS and JavaScript files, and use CSS sprites for small images.

10. **Optimize Fonts:**
    - Limit the number of fonts and font weights/styles used on a page.
    - Use the `font-display` property to control how fonts are displayed during loading.

11. **Asynchronous Loading:**
    - Load non-essential JavaScript asynchronously to prevent it from blocking other resources.
    - Use the `async` or `defer` attribute for external scripts.

12. **Optimize Third-Party Scripts:**
    - Evaluate and optimize third-party scripts to minimize their impact on page load times.
    - Consider loading third-party scripts asynchronously.

13. **Monitor and Analyze Performance:**
    - Use tools like Google PageSpeed Insights, Lighthouse, or WebPageTest to identify performance bottlenecks and receive recommendations for improvement.
    - Regularly monitor website performance and make adjustments as needed.

14. **Implement Responsive Design:**
    - Use responsive design principles to create a consistent user experience across different devices.
    - Serve appropriately sized images and adapt layouts based on the user's device.

By combining these techniques, web developers can significantly improve the performance of their websites, leading to faster load times and a better user experience. It's important to regularly assess and update performance optimizations as the website evolves and new technologies emerge.

### Content Delievry Network (CDN)
A Content Delivery Network (CDN) is a geographically distributed network of servers that work together to deliver web content, such as text, images, videos, scripts, and other media, to users based on their geographic location. The primary goal of a CDN is to reduce latency, optimize load times, and enhance the overall performance of websites and web applications by bringing content closer to the end-users.

Key characteristics and components of a CDN include:

1. **Edge Servers:**
   - CDNs consist of strategically placed servers, known as edge servers or edge locations, distributed across various geographic locations.
   - These edge servers store cached copies of static content, reducing the distance between the user and the server.

2. **Content Caching:**
   - CDNs cache static content, such as images, CSS files, and JavaScript, on edge servers.
   - Cached content is served from the nearest edge server to the user, reducing the need for the user's request to travel all the way to the origin server.

3. **Load Balancing:**
   - CDNs use load balancing to distribute incoming traffic across multiple servers to ensure optimal resource utilization and prevent any single server from being overwhelmed.

4. **Latency Reduction:**
   - By serving content from servers that are physically closer to the user, CDNs significantly reduce latency and improve the overall performance of web applications.

5. **Distributed Architecture:**
   - CDNs have a distributed architecture that allows them to scale easily and handle large amounts of traffic by leveraging multiple servers in different locations.

6. **Security Features:**
   - CDNs often provide security features such as DDoS (Distributed Denial of Service) protection, Web Application Firewall (WAF), and SSL/TLS encryption, enhancing the security of websites.

7. **Dynamic Content Acceleration:**
   - Some advanced CDNs offer features for accelerating the delivery of dynamic content by optimizing the communication between the origin server and edge servers.

8. **Origin Shield:**
   - CDNs may employ an "origin shield" or "mid-tier cache" to reduce the load on the origin server by serving as an additional caching layer between the edge servers and the origin.

9. **Analytics and Reporting:**
   - CDNs often provide analytics tools that offer insights into website performance, user behavior, and traffic patterns.

10. **Scalability:**
    - CDNs are designed to scale easily, allowing websites to handle increased traffic without a proportional increase in the load on the origin server.

Popular CDN providers include Akamai, Cloudflare, Amazon CloudFront, Fastly, and many others. Websites and web applications leverage CDNs to ensure fast and reliable content delivery, particularly for global audiences, and to improve the overall user experience by minimizing latency and optimizing load times.

### Network Security
Network security is crucial in the context of web development to protect web applications, user data, and the overall integrity of the communication between clients and servers. Here are some key considerations and practical tips for network security in the realm of web development:

1. **HTTPS (SSL/TLS Encryption):**
   - Always use HTTPS to encrypt data in transit between the user's browser and the web server. This is especially important for securing sensitive information such as login credentials and personal data.

2. **Secure Socket Layer (SSL) and Transport Layer Security (TLS):**
   - Keep the SSL/TLS protocols updated to the latest versions to ensure strong encryption. Disable support for older and less secure protocols (e.g., SSLv2, SSLv3) to mitigate vulnerabilities.

3. **Content Security Policy (CSP):**
   - Implement Content Security Policy headers to mitigate the risk of cross-site scripting (XSS) attacks by controlling which resources are allowed to be loaded on a webpage.

4. **HTTP Strict Transport Security (HSTS):**
   - Enable HSTS to ensure that browsers communicate with the server over HTTPS only. This helps prevent man-in-the-middle attacks that attempt to downgrade connections to unencrypted HTTP.

5. **Cross-Origin Resource Sharing (CORS):**
   - Configure CORS settings appropriately to control which domains are permitted to make requests to your web server. This helps prevent unauthorized cross-origin requests.

6. **Web Application Firewall (WAF):**
   - Implement a Web Application Firewall to filter and monitor HTTP traffic between a web application and the internet. WAFs can help protect against various web-based attacks, including SQL injection and cross-site scripting.

7. **Securing Session Management:**
   - Use secure session management practices, including secure, random session IDs, and mechanisms like secure cookies with the 'HttpOnly' and 'Secure' flags to prevent session hijacking and cross-site scripting.

8. **Input Validation and Sanitization:**
   - Always validate and sanitize user inputs to prevent injection attacks, such as SQL injection and cross-site scripting. Use parameterized queries for database access.

9. **Security Headers:**
   - Set security headers like X-Content-Type-Options, X-Frame-Options, and Referrer-Policy to enhance the security posture of your web application.

10. **Two-Factor Authentication (2FA):**
    - Encourage or enforce the use of two-factor authentication for user accounts to add an extra layer of security beyond passwords.

11. **Regular Security Audits and Code Reviews:**
    - Conduct regular security audits and code reviews to identify and fix vulnerabilities in your web application codebase.

12. **File Upload Security:**
    - If your application allows file uploads, validate file types, limit file sizes, and store files in a secure location. Consider using anti-virus scanners for uploaded files.

13. **Security Patch Management:**
    - Keep all software, including web servers, frameworks, and libraries, up-to-date with the latest security patches. Regularly check for and apply updates.

14. **Monitoring and Incident Response:**
    - Implement monitoring tools to detect suspicious activities and establish an incident response plan to handle security incidents promptly.


By incorporating these network security measures into web development practices, developers can create more robust and secure web applications, protecting both the application and its users from potential threats. Regularly staying informed about evolving security threats is also essential to adapt security measures accordingly.


# Amazon Web Services

Free tier account
Instance on the AWS

AWS (Amazon Web Services) is a comprehensive cloud computing platform offered by Amazon. It provides a wide range of services, including computing power, storage, databases, machine learning, analytics, networking, and security, among others. Businesses and developers use AWS to build, deploy, and manage applications and services without needing to maintain physical servers or data centers.

Key services in AWS include:

1. **EC2 (Elastic Compute Cloud)**: Virtual servers for running applications.
2. **S3 (Simple Storage Service)**: Scalable object storage for data.
3. **RDS (Relational Database Service)**: Managed databases like MySQL, PostgreSQL, and more.
4. **Lambda**: Serverless computing service that allows running code in response to events without provisioning servers.
5. **DynamoDB**: NoSQL database service for fast, flexible data storage.
6. **VPC (Virtual Private Cloud)**: Networking service for setting up secure cloud environments.
7. **CloudFront**: Content delivery network (CDN) for distributing content globally.
8. **IAM (Identity and Access Management)**: For managing user permissions and security.

AWS operates on a "pay-as-you-go" pricing model, meaning users only pay for the resources they use. It is highly scalable, making it suitable for both small startups and large enterprises.

## AWS Storage and Distribution


### Storage
In AWS, storage services are designed to provide scalable, secure, and cost-effective solutions for storing different types of data. AWS offers various storage options tailored for specific use cases, from large-scale data backups to high-performance database applications.

Here are some of the key storage services in AWS:

### 1. **Amazon S3 (Simple Storage Service)**
   - **Type**: Object storage
   - **Use case**: Ideal for storing any kind of unstructured data (images, videos, backups, archives, logs, etc.)
   - **Features**: 
     - Scalable storage with high durability (99.999999999% durability)
     - Designed for low latency and high throughput
     - Flexible storage classes for cost optimization (e.g., S3 Standard, S3 Glacier for archival)
     - Lifecycle policies to manage object storage costs

### 2. **Amazon EBS (Elastic Block Store)**
   - **Type**: Block storage
   - **Use case**: Used as storage volumes for Amazon EC2 instances, similar to hard drives for virtual servers
   - **Features**:
     - Persistent storage that remains even after the EC2 instance is stopped
     - High-performance options for databases, big data, and transactional workloads
     - Snapshots for backups and disaster recovery

### 3. **Amazon EFS (Elastic File System)**
   - **Type**: Managed file storage
   - **Use case**: Provides scalable file storage for use with AWS cloud services and on-premises resources
   - **Features**:
     - Supports NFS (Network File System) protocol
     - Ideal for workloads requiring shared access to files (like web servers, content management, or development environments)
     - Automatically scales up and down based on usage
     - Available in two storage classes: Standard and Infrequent Access

### 4. **Amazon FSx**
   - **Type**: File storage
   - **Use case**: Specialized managed file systems for specific environments
   - **Features**:
     - **Amazon FSx for Windows File Server**: Fully managed Windows-native file systems.
     - **Amazon FSx for Lustre**: High-performance file systems designed for workloads like machine learning, high-performance computing, and big data analytics.
     - Both services allow integration with existing on-premises systems or AWS workloads.

### 5. **Amazon S3 Glacier**
   - **Type**: Archival storage
   - **Use case**: Long-term archival of data that is accessed infrequently but needs to be durable and secure
   - **Features**:
     - Low-cost storage solution for data archiving
     - Retrieval times range from minutes to hours (depending on selected retrieval method)
     - Designed for data retention, regulatory compliance, and backups

### 6. **AWS Snow Family**
   - **Type**: Edge computing and data migration services
   - **Use case**: For physical transfer of large amounts of data to/from AWS, especially in environments where network connectivity is limited or unavailable
   - **Services**:
     - **AWS Snowball**: Physical device for transferring large data sets to AWS
     - **AWS Snowmobile**: Shipping container-sized device for petabyte-scale data transfer
     - **AWS Snowcone**: Smaller, rugged, and secure edge computing device

### 7. **Amazon Backup**
   - **Type**: Centralized backup service
   - **Use case**: Automates and centralizes the backup of AWS services and on-premises systems
   - **Features**:
     - Integrates with services like EBS, RDS, DynamoDB, and more
     - Allows for automated backup scheduling, retention policies, and compliance reporting

### 8. **AWS Storage Gateway**
   - **Type**: Hybrid cloud storage solution
   - **Use case**: Connects on-premises environments to cloud storage in AWS, enabling hybrid cloud storage architectures
   - **Features**:
     - Offers three types of gateways: File Gateway, Tape Gateway, and Volume Gateway
     - Allows seamless integration of on-premises applications with AWS storage services (like S3)

### 9. **Amazon RDS (Relational Database Service) Storage**
   - **Type**: Managed storage for relational databases
   - **Use case**: Provides automatically managed storage for databases like MySQL, PostgreSQL, and SQL Server
   - **Features**:
     - Automated backups, snapshots, and scaling
     - Supports different storage types like General Purpose SSD and Provisioned IOPS (for high performance)

### 10. **Amazon DynamoDB Storage**
   - **Type**: NoSQL database storage
   - **Use case**: Used for storing large amounts of structured and semi-structured data with low-latency access
   - **Features**:
     - Managed NoSQL service with automatic scaling
     - Backup, restore, and cross-region replication capabilities

AWS storage solutions are designed to meet different scalability, performance, and cost requirements, making it versatile for all kinds of applications.


### Distributions

AWS provides various distributions channel to share different types of stores to user all across the world

AWS provides several types of distributions to help developers, businesses, and organizations deploy, manage, and deliver applications and content to end users globally. AWS distributions optimize content delivery, software deployment, and cloud computing infrastructure. Here are the main AWS distribution services:

### 1. **Amazon CloudFront**
   - **Type**: Content Delivery Network (CDN)
   - **Purpose**: CloudFront helps in delivering content (like websites, videos, APIs, or other web assets) to users with low latency and high transfer speeds.
   - **Key Features**:
     - Uses a global network of edge locations to cache content closer to users.
     - Supports both static (e.g., images, videos) and dynamic content (e.g., APIs, real-time data).
     - Integrated with AWS services like S3, Elastic Load Balancing (ELB), and EC2.
     - Provides security features like AWS Shield (DDoS protection), AWS Web Application Firewall (WAF), and SSL/TLS encryption.
   - **Use Cases**:
     - Fast and secure content delivery for websites, media streaming, or gaming applications.
     - Reduces latency for API services by distributing dynamic content.

### 2. **AWS Outposts**
   - **Type**: On-premises infrastructure
   - **Purpose**: AWS Outposts extends AWS infrastructure, services, and tools to on-premises data centers or co-location environments.
   - **Key Features**:
     - Provides AWS hardware installed on-premises that runs AWS services and infrastructure locally.
     - Ensures low-latency applications, as compute and storage resources are located on-site.
     - Fully managed service from AWS, but hardware is owned and maintained by AWS.
     - Supports workloads like EC2, EBS, RDS, ECS, EKS, and more on-premises.
   - **Use Cases**:
     - For applications that require low latency or local data processing but still want to integrate with the broader AWS cloud.
     - Ideal for regulated industries or locations with intermittent internet access.

### 3. **Amazon EKS Anywhere**
   - **Type**: Kubernetes distribution
   - **Purpose**: EKS Anywhere provides a way to create and operate Kubernetes clusters on-premises using the same tools as in the AWS cloud.
   - **Key Features**:
     - Simplifies the deployment of Kubernetes clusters on bare-metal or virtual machines in on-premises environments.
     - Enables a consistent Kubernetes environment across on-premises and AWS.
     - Integrates with other AWS services like AWS Identity and Access Management (IAM), CloudWatch, and ECR (Elastic Container Registry).
   - **Use Cases**:
     - Hybrid cloud environments where businesses want to maintain a consistent Kubernetes environment between on-premises and AWS.
     - Companies looking to run containerized applications in data centers while leveraging AWS management capabilities.

### 4. **AWS Local Zones**
   - **Type**: Local computing and storage distribution
   - **Purpose**: AWS Local Zones are extensions of AWS Regions that place compute, storage, and other services closer to large population centers or industrial hubs.
   - **Key Features**:
     - Brings AWS services like EC2, EBS, VPC, and more to edge locations for low-latency applications.
     - Typically used for latency-sensitive workloads like real-time gaming, media production, or edge AI/ML applications.
     - Allows businesses to meet local data residency requirements by keeping data closer to users.
   - **Use Cases**:
     - Applications requiring ultra-low latency, such as live video processing, augmented/virtual reality (AR/VR), and real-time analytics.
     - For customers who need to maintain regulatory compliance with local data residency rules.

### 5. **AWS Wavelength**
   - **Type**: 5G edge computing distribution
   - **Purpose**: Wavelength embeds AWS compute and storage services at the edge of 5G networks, bringing applications closer to end users for ultra-low latency.
   - **Key Features**:
     - Works with telecom providers to deploy AWS infrastructure within 5G networks.
     - Enables developers to build and deploy applications that need near-real-time response times (e.g., AR/VR, autonomous vehicles, IoT, and smart cities).
     - Reduces the need to route traffic through the internet, cutting down on latency.
   - **Use Cases**:
     - High-performance mobile applications, autonomous vehicles, connected devices, and smart city solutions.
     - Latency-critical applications that require processing near the end-users (e.g., gaming, video streaming, and immersive experiences).

### 6. **AWS Global Accelerator**
   - **Type**: Network performance distribution service
   - **Purpose**: AWS Global Accelerator improves the availability and performance of applications by directing traffic through the AWS global network.
   - **Key Features**:
     - Provides a static IP address that can be used to front your application, reducing the need for users to remember multiple IPs or domain names.
     - Automatically routes traffic to the nearest available AWS region for high availability and better performance.
     - Improves global user experiences for latency-sensitive applications like gaming, financial transactions, and media processing.
   - **Use Cases**:
     - High-availability, globally distributed applications.
     - Websites or services that serve international customers and need consistent performance.

### 7. **Amazon AppStream 2.0**
   - **Type**: Application streaming distribution
   - **Purpose**: Amazon AppStream 2.0 is a fully managed service that allows you to stream desktop applications to users without installing them locally.
   - **Key Features**:
     - Users can access applications from any device with a web browser without downloading or installing software.
     - Fully managed by AWS, removing the need to manage infrastructure or worry about updates.
     - Offers integration with other AWS services for security, authentication, and scalability.
   - **Use Cases**:
     - Software as a service (SaaS) applications, providing remote access to complex or high-performance applications.
     - Simplifying access to business-critical applications for distributed workforces.

---

### Benefits of AWS Distributions
- **Global Reach**: AWS distributions provide global access to applications and content with low latency.
- **Scalability**: As the demand for content and applications grows, AWS scales seamlessly to meet that demand.
- **Reliability**: Distributed infrastructure ensures that applications and content are available to end users without downtime.
- **Security**: Integrated security features like encryption, identity management, and DDoS protection keep distributed applications secure.

AWS distributions are designed to optimize content delivery, application performance, and infrastructure deployment across different environments, from on-premises to the cloud and edge locations.

## How are frontend deployed on AWS

Deploying a React frontend on AWS involves using several AWS services that provide infrastructure and hosting for web applications. Here's a step-by-step guide on how to deploy a React frontend on AWS, covering different AWS services:

### 1. **Using Amazon S3 and CloudFront (Static Website Hosting)**

This is one of the most common ways to deploy a React app since React apps are static (HTML, JavaScript, and CSS files). Here's how:

#### Steps:

- **Build your React app**:
  1. Run the `npm run build` command to create an optimized production build in the `build` directory.
  
- **Create an S3 Bucket**:
  2. Go to the **S3** service on AWS and create a new bucket. Ensure that the bucket name is globally unique.
  3. In the bucket's **Properties** section, enable **Static Website Hosting**. Set the **index document** (usually `index.html`) and optionally an error document (`index.html` for single-page apps).
  
- **Upload your build files to S3**:
  4. Upload all the files in your `build` directory to the S3 bucket.
  5. In the **Permissions** section, set the bucket policy to allow public read access to the files (this is needed for a static website).

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

- **Enable CloudFront (Optional but Recommended)**:
  6. Create a **CloudFront distribution** to serve your S3 bucket content. CloudFront improves performance by caching content at edge locations globally, providing low-latency access to users.
  7. In the CloudFront setup, specify your S3 bucket as the origin and make sure to set the default root object to `index.html`.
  
- **Access your React app**:
  8. After CloudFront finishes deploying, your React app will be available at the CloudFront distribution's domain name.

#### Benefits:
- S3 provides highly durable and scalable storage.
- CloudFront reduces latency and adds security features like SSL/TLS certificates.

### 2. **Using AWS Amplify**

AWS Amplify is an easy-to-use service that simplifies the process of deploying and managing frontend web apps. It integrates well with React and other JavaScript frameworks and also provides backend services.

#### Steps:

- **Set up AWS Amplify**:
  1. Go to the **AWS Amplify** Console and click on "Get Started" under "Deploy."
  
- **Connect your Git repository**:
  2. Connect Amplify to your code repository (GitHub, GitLab, Bitbucket, AWS CodeCommit, etc.).
  3. AWS Amplify will automatically detect your React app and offer to set up the build configuration.
  
- **Configure Build and Deploy Settings**:
  4. Amplify will create a build pipeline for your React app. Review the default build configuration (which will run `npm install` and `npm run build`).
  
- **Deploy**:
  5. Click "Save and Deploy." Amplify will automatically build and deploy your app to a globally available URL.
  6. You can set up custom domain names, environment variables, and backend services if needed.

#### Benefits:
- Simplified deployment and hosting workflow.
- Automatic continuous deployment (CD) for each commit in your Git repository.
- Integrated backend support (authentication, storage, APIs) if needed.

### 3. **Using Elastic Beanstalk (For Full-Stack Applications)**

If your React app is part of a full-stack application (with Node.js or an API backend), you can deploy it using **AWS Elastic Beanstalk**.

#### Steps:

- **Create a new Elastic Beanstalk environment**:
  1. In the **Elastic Beanstalk** console, create a new environment for your React app. Select "Web server environment."
  
- **Choose Platform**:
  2. Choose a platform like **Node.js** (if your React app uses Node.js as its backend). Elastic Beanstalk will provide all necessary infrastructure (EC2 instances, load balancers, etc.) for the deployment.

- **Deploy your React App**:
  3. Package your React app and backend in a `.zip` file or use a CI/CD pipeline to upload your source code.
  4. Use the **Elastic Beanstalk CLI** or console to deploy the app. Elastic Beanstalk will handle scaling, load balancing, and health monitoring.

#### Benefits:
- Suitable for full-stack applications or more complex setups.
- Elastic Beanstalk manages the infrastructure, scaling, and deployment processes.

### 4. **Using Amazon Lightsail**

Amazon Lightsail provides a simpler way to deploy applications, with pre-configured virtual private servers (VPS) and a more predictable pricing structure.

#### Steps:

- **Create a Lightsail Instance**:
  1. In the **Lightsail** console, create a new instance and choose an operating system (Linux/Ubuntu).
  2. Choose a pricing plan based on your resource needs (CPU, RAM, storage).

- **Set up the server**:
  3. SSH into the Lightsail instance and install Node.js, Nginx, and any other dependencies needed to serve your React app.
  
- **Build and deploy your React app**:
  4. Upload your React build files to the server, and use Nginx or Apache to serve them.
  5. Set up the domain name, SSL certificates, and any custom configurations required.

#### Benefits:
- Simple, cost-effective for small applications.
- More control over the virtual server for custom configurations.

### 5. **Using EC2 and Docker**

For more flexibility, you can deploy your React app on an **EC2 instance** or a **Docker container** on EC2.

#### Steps:

- **Launch an EC2 instance**:
  1. In the **EC2** console, launch a new instance and choose an AMI (Amazon Machine Image), like Ubuntu or Amazon Linux.
  
- **Set up the environment**:
  2. SSH into the EC2 instance and install the required software (Node.js, Nginx, or Docker).
  
- **Deploy your React app**:
  3. Upload your build files to the EC2 instance or use Docker to containerize your React app.
  4. Configure Nginx or serve your React app with Node.js.
  
- **Set up a load balancer (optional)**:
  5. You can set up an **Elastic Load Balancer (ELB)** for better scalability and high availability.

#### Benefits:
- Full control over the instance, allowing for custom configuration.
- Ideal for large-scale or highly customized applications.

### Summary of AWS Services for React Frontend Deployment

| **Service**                | **Use Case**                                  | **Benefits**                          |
|----------------------------|-----------------------------------------------|---------------------------------------|
| **Amazon S3 + CloudFront**  | Static websites (simple frontend apps)        | Low-cost, scalable, fast global CDN   |
| **AWS Amplify**             | Simplified deployment for React apps          | Easy setup, continuous deployment     |
| **Elastic Beanstalk**       | Full-stack apps or complex infrastructures    | Managed infrastructure, scaling       |
| **Amazon Lightsail**        | Small to medium apps with predictable pricing | Simple and cost-effective             |
| **EC2 + Docker**            | Highly customizable deployment                | Full control over infrastructure      |

Each method has its advantages, depending on the complexity of the app, need for customization, and level of control over the infrastructure.

## Workings of Cloud Front

## Workings of S3 Storage and how it is related to Cloud Front




# What is Cloud Computing?
Cloud computing refers to the delivery of computing services, including storage, processing power, and applications, over the internet. Instead of owning and maintaining physical hardware and software resources, users can access and use these resources on-demand from cloud service providers.

Key characteristics of cloud computing include:

1. **On-Demand Self-Service:** Users can provision and manage computing resources as needed without requiring human intervention from the service provider.

2. **Broad Network Access:** Cloud services are accessible over the internet from a variety of devices, such as laptops, smartphones, and tablets.

3. **Resource Pooling:** Cloud providers pool computing resources to serve multiple customers, with different physical and virtual resources dynamically assigned and reassigned according to demand.

4. **Rapid Elasticity:** Cloud resources can be quickly and easily scaled up or down to accommodate changes in demand, providing flexibility and cost efficiency.

5. **Measured Service:** Cloud computing resources are metered, and users are billed based on their usage. This pay-as-you-go model allows for cost optimization and efficient resource utilization.

Cloud computing can be categorized into three main service models:

1. **Infrastructure as a Service (IaaS):** Provides virtualized computing resources over the internet. Users can rent virtual machines, storage, and networking infrastructure.

2. **Platform as a Service (PaaS):** Offers a platform that includes not only the underlying infrastructure but also the development tools and services needed to build and deploy applications without managing the underlying infrastructure.

3. **Software as a Service (SaaS):** Delivers software applications over the internet on a subscription basis. Users can access these applications through a web browser without needing to install or maintain them locally.

Cloud computing is used by businesses and individuals for various purposes, including data storage, data processing, hosting applications, and more. Major cloud service providers include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and others.

#

