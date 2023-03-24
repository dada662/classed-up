# ClassedUp
### Video Demo: <https://youtu.be/aCpAm7fMDIg>
### Description: 
My project is a chrome extension. It replaces the images of a web page with images of classic paintings. The extension displays a javascript alert containing an interesting fact, there's a default fact if no key word is found in the body of the webpage, else there's a fact for each key word (key words: week, history, school). 
The extension when clicked on the icon displays a webpage with a quote. 
- classedup.js: A javascript file that does most of the work. It replaces the images from any website with images in the /final_project/photos folder which are classic paintings images. This first part I used the code from The Coding Train vido <https://www.youtube.com/watch?v=8zMMOdI5SOk&list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS&index=5>. 
It declares an array with the filenames of the png files in the photos folder, then looks for the images in the webpage using the 'img' tag name, finally it iterates over each image in the webpage and replaces it with the classic painting image that is picked in a random order to makes sure that the first image in the photos folder doesn't always replace the first image in the website.
The second part of the code uses the text in the body of the same webpage and looks for the key words: **history, school, week**. 
   - **history** : The webpage displays: Leonardo da Vinci is unquestionably one of the most famous artists in history. Ironically, one quirk that made him such a genius was that he was easily distracted.
   - **school** : The webpage displays: Raphael was only in his mid-20s when he began The School of Athens.
   - **week** : The webpage displays: Van Gogh began working on Irises during his first week at the asylum in Saint-Rémy, France.
   - **default** : The webpage displays: Art used to be an Olympic event. 
If one of the words is found a javascript alert is displayed with an interesting fact containing the first key word, in case more than one key word is found the alert will display the fact related to the first word in the code *(if the body of the webpage contains the words history and school the alert will display the fact related to the keyword **history**, or school and week the alert will display the fact related to school)*. In case no key word is found the javascript alert displays a default fact.
- manifest.json: A JSON file that presents the extension and it provides the necessary information for its proper functioning:
  - manifest v3
  - name of the extension ("ClassedUp") (1.0)
  - ressources needed to execute the extension properly (classic paintings images folder directory and the urls the extension should work on)
  - the javascript file name in which the needed code exist
  - the extension icon
  - the html file name for the popup
I used the code from the same video and the migration document to migrate from v2 to v3 because the code from the video uses the v2 document.
- popup_style.css: A css stylesheet. To keep up with the theme, the popup webpage has a classic painting as the background and the writing is in white because that's the most readable color against the background.
- popup.html: An extension webpage that displays a quote said by Leonardo Da Vinci *(Art is never finished, only abandoned.)* with the background of a classical painting. 
- icon.png: The extension icon.
- background.jpg: The popup webpage image. 
##### How to use:
1. Activate the extension
2. Visit any webpage (if it has images they'll be replaced with classic paintings and an alert will be displayed as explained abosve, if the webpage doesn't have images only the alert will be displayed)
3. Click on the extension icon the alert will be displayed again, after clicking on OK the popup page will be displayed