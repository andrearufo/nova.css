<p align="center">
  <img width="460" src="https://andrearufo.github.io/nova.css/novalogo.png">
</p>

# Nova.css

**Nova.css** is an(other) simple and minimalistic CSS framework for your webpages. Made in pure SCSS and compiled with Gulp

## Structure

You can use the `<header>` and `<main>` and `<footer>` elements of HTML for create a basic structure.

Here an example of basic structure:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>

    <meta charset="utf-8">
    <title>Nova.css</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/nova.min.css">
    <link rel="shortcut icon" href="favicon.ico">

</head>
<body>

    <header class="stiky">
        <div class="container">

            <nav>
                <h5>
                    <img src="novalogo.svg" class="logo">
                    Nova.css
                </h5>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>

        </div>
    </header>

    <main>
        <div class="container">

            <h1>Welcome</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            <h2>Continue</h2>

            <div class="row">
                <div class="col">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>
                <div class="col">

                    pLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </div>
            </div>

        </div>
    </main>

    <footer>
        <div class="container">

            Made with Nova.css by Andrea Rufo

        </div>
    </footer>

</body>
</html>

```

### Header

In the header container you may use the  `<nav>` tag to organize:

- an hamburger button
- a brand name in the `<h5>` block
- a simple inline menu inside an `<ul>` block

## Classes

- `.stiky` for the siky header
- `.container` to wrap the content
- `.row` for contain the grid coloumns
- `.col` a coloumns of the grid
- `.card` a card container
- `.btn` a simple button
- `.btn.btn-outline` a simple button wit only the outline
- `.btn.btn-ghost` a trasparent button like a ghost
- `.hamburger` a simple and animated menu icon
- `.text-{left, center, right}` to align text
- `.text-{left, center, right}-{large, small}` to align text in the breakpoint
- `.float-{left, center, right}` for the float elements
- `.float-{left, center, right}-{large, small}` for the float elements in the breakpoint
- `.display-{none, block}` for display or hide elements
- `.display-{none, block}-{large, small}` for display or hide elements in the breakpoint
