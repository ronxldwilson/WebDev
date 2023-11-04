# Web Developement

Total Time Spent : 2 Hrs

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

## Settings
1. Mouse Zoom
2. Live view on mobile - Change the live preview Host IP to IPV4 of the local machine, then you can view the website on the mobile 

## Shortcuts
1. Integrated Terminals - Ctrl + `
2. Commnad Pallete - Ctrl + Shift + P 
3. Settings - Ctrl + ,
4. Alt + Click to get multiple cursors to work with
5. Alt + Shift + Arrow - To replicate a line

## Emmet Abrevations
1. lorem<Num> - Gives dummy text to work with

# Markdown Basics
> This is a quote. Quotes are indented and a different colour.

show small bits of code with backticks: `print("hello world")` 

- [x] This is a complete item
- [ ] This is an incomplete item

This is a normal Paragraph

To add a piece of code use double tabs

        this is a block for code

# Git Basics

1. Initializing a Repository:
To start using Git, you need to initialize a repository in your project's directory:

         git init

2. Cloning a Repository:
If you want to work with an existing Git repository, you can clone it to your local machine:

         git clone <repository_url>
3. Basic Workflow:

Checking the Status: 
This shows the status of your changes: modified, untracked, or staged.
   
      git status

Adding Changes:
This stages your changes for the next commit.

      git add <file(s)>

Committing Changes:
This creates a commit with the changes you staged.

      git commit -m "Your commit message"

4. Branching:
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

5. Merging:
Merge a Branch into the Current Branch:

         git merge <branch_name> 
6. Remote Repositories:
Adding a Remote Repository:
      
         git remote add <remote_name> <repository_url>

Fetching Changes from a Remote Repository:
      
      git fetch <remote_name>

Pulling Changes from a Remote Repository:
      
      git pull <remote_name> <branch_name>

Pushing Changes to a Remote Repository:
      
      git push <remote_name> <branch_name>

7. Inspecting Changes:
Viewing Commit History:

         git log
Viewing the Difference in Files:

      git diff

8. Undoing Changes:
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

# Notes

Index of Content

1. Web Development Overview
2. HTML Basics
   -  HTML Document Structure
   - Importance of Meta Tag in HTML
   - Images, Lists and tables



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

### Lists

### Tables

# SEO and Core Web Vitals in HTML

