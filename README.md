# Web Developement

This repository is the entire culmiantion of all the learnings of Web Development

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

