# 04_react
React.js is a JavaScript library which is help to build best, fast and complex UI (User Interface).

## Command in React 

### for New App with npx
```terminal
npx create-react-app 01basicreact
```

### for Build with npm
```terminal
 npm run build
```

### for New App with vite
```terminal
npm create vite@latest
```

### for NPM install (Node Module)
```terminal
npm i
```

### for NPM Run
```terminal
npm run dev
```

## Syntax Name
### fragment
```jsx
    <>
    
    </>
```

# Tailwind Install (vite)

## Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

``` terminal 

npm install tailwindcss @tailwindcss/vite

```

## Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

```jsx

    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
})

```
## Import Tailwind CSS 
Add an @import to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

## Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

```terminal

    npm run dev
    
```

# React functional Components (boilerplate Code)
React snippets plugin -> rfce 

```jsx
import React from 'react'

function functionName(){
    return (
        <div>
            Content
        </div>
    )
}
export default functionName

```

# React Router DOM

```terminal

    npm install react-router-dom
    
```




