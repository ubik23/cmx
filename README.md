#CMX

This project is designed to enable comic book artists to create the fastest website possible for their own webcomics. The website functions like an SPA (single page application), so you need to tell your server that all requests should deliver the index.html page. On initial load, the JS preloads all the possible choices the visitor can make into the HTML so that the response time is always lightning quick. Their is also basic router functionality that enables each comic (page) to have its own unique URL. Comics are hardcoded as PNG files for now, so if you need to use another format you'll need to edit the script a bit.

Place your comics in the app/assets folder and add the filenames to the 'n' array at the top of the app/js/main.js file. The initial comic (latest) is hard-coded in the HTML for a faster load time.

You might want to translate the button names as I've created this project to distribute a french language comic. The classnames are all in english. You'll find the translations in js/main.js

Just run the 'gulp' command in the terminal and all files will be transfered from app to dist and watched accordingly. BrowserSync will launch the index.html for you.

The default image is hard-coded and its height and width is set to the size of my own comic. You'll want to change these to reflect your own comic.

Have fun!

#TODO

-Support other/multiple file formats.

-Buttons need to be deactivated when there is no next/last or previous/first comics available.

-Enable navigation using arrow keys from the keyboard.

-Enable Swiping on phones.

-Move comic data to a json file to enable metadate for each strip/page.

-Create a json file automaticaly from the images in the assets folder.
