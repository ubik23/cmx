# cmx

Place your comics in the app/assets folder and add the filenames to the 'n' array at the top of the app/js/main.js file. 

You might want to translate the button names as I've created this project to distribute a french language comic. The classnames are all in english.

You'll find the translations in js/main.js

Just run the 'gulp' command in the terminal and all files will be transfered from app to dist and watched accordingly. BrowserSync will launch the index.html for you.

#TODO

There's no routing in place yet, so you won't be able to link to a specific comic yet (unless you link to the actual image).

Buttons need to be deactivated when there is no next/last or previous/first comics available.

Preloading images would be nice ^_^


