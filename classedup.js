console.log('"Art is never finished, only abandoned." - Leonardo Da Vinci')

let filenames = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
    "10.jpg", "11.jpg", "12.jpg"
];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs) {
    console.log(imgElt.src)
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'photos/' + filenames[r];
    let url = chrome.runtime.getURL(file);
    imgElt.src = url;
    console.log(url);
}

let text = document.body.innerText;
if ((text.match(/history/gi)) !== null) {
    alert("Leonardo da Vinci is unquestionably one of the most famous artists in history. Ironically, one quirk that made him such a genius was that he was easily distracted.");
} else if ((text.match(/school/gi)) !== null) {
    alert("Raphael was only in his mid-20s when he began The School of Athens.");
} else if ((text.match(/week/gi)) !== null) {
    alert("Van Gogh began working on Irises during his first week at the asylum in Saint-Rémy, France.");
} else {
    alert("Art used to be an Olympic event.");
}
