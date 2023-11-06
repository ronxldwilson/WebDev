# Web Developement

Total Time Spent : 18 Hrs

This repository is the entire cumulation of all the learnings of Web Development

Index of Folders

1. Code0001 - Fundamentals of HTML
2.

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
4. CSS Games - <a href="https://daily-dev-tips.com/posts/10-amazing-games-to-learn-css/
">Game List</a>

# Markdown Basics

> This is a quote. Quotes are indented and a different colour.

show small bits of code with backticks: `print("hello world")`

- [x] This is a complete item
- [ ] This is an incomplete item

This is a normal Paragraph

To add a piece of code use double tabs

        this is a block for code

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

1. Web Development Overview
2. SEO and Core Web Vitals
   - SEO overview
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)
   - First Input Delay (FID)
   - Total Blocking Time (TBT)
   - Speed Index
3. Progressive Web Apps (PWA)
4. HTML Basics
   - HTML Document Structure
   - Importance of Meta Tag in HTML
   - Images, Lists and tables
   - Forms in HTML
      -  What is the use of name attribute in input label?
      -  What is the use of for attribute in label tag?
   -  Inline and Block Elements in HTML
      -  Inline Element
      -  Block Element
   -  Classes and ID un HTML
   -  Video, Audio and Media
      -  Video
      -  Audio
      -  SVG
         -  Issue in SVG rendering
      -  Iframe
   -  Semantic HTML Tags
5. Cascading Style Sheet (CSS)

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

# web.dev

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

## HTML Basics

### HTML Document Structure

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

## Explanation of Commonly Used Attributes for `<img>` Tag:

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

<img src="./Code/Src/FlexBox.png">

# Javascript
