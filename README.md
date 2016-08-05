#CMX

This project is designed to enable comic book artists to create the fastest website possible to deliver their webcomics to their readers in a free and unobtrusive manner. The website functions like an SPA (single page application) and handles all URLS within the index.html page. You need to tell your server that all unresolved requests should deliver the index.html page. On initial load, the JS preloads all the possible choices of comics that the visitor can make, hidden within the HTML so that the response time to display the next comic is always lightning quick. There is also some basic routing functionality that enables each comic (page) to have its own unique URL (even though the page doesn't change). The files for the comics are hardcoded as PNGs for now, so if you need to use another format you'll need to edit the script a bit.

How to set up your comic:

Place your comics in the app/assets folder and add the filenames to the 'n' array at the top of the app/js/main.js file. The initial comic (latest) is hard-coded in the HTML for a faster load time, so be sure to change the url on the IMG tag within the index.html file.

You might want to translate the button names as I've created this project to distribute a french language comic. The classnames are all in english, so it should be relatively simple to figure out what each class does. You'll find the translations at the very top of the js/main.js file in the app folder.

To get a local server running on your computer, just run the 'gulp' command in the terminal and all the necessary files will be transfered from the app folder to dist folder and watched accordingly. BrowserSync will launch the index.html for you in your default browser.

As mentioned earlier, the default image is hard-coded in the index.html file and its height and width is set to the size of my own comic. You'll want to change these to reflect the size your own comic pages. The rest of the CSS rules should work fine and give you a nice responsive site to distribute your comic.

Have fun!

#TODO

-Support other/multiple file formats.

-Buttons need to be deactivated when there is no next/last or previous/first comics available.

-Enable navigation using arrow keys from the keyboard.

-Enable Swiping on phones.

-Move comic data to a json file to enable metadata for each strip/page.

-Create a json file automaticaly from the images in the assets folder.

-Add about page (including functionality for more pages routed with js as a spa).
