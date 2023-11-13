const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['1230bar.JPG','blackdress.JPG','pinkDress.JPG','redjeans.JPG'];
/* Declaring the alternative text for each image file */
const alts = {
    '1230.JPG' : 'Justin Timberlakes 12/30 Bar',
    'blackdress.JPG': 'lex and meg outside of Miranda Lamberts',
    'pinkDress.JPG': 'pink dresses for the big 21',
    'redjeans.JPG': '2 girls in Nashville'
}
/* Looping through images */
for(const image of images){
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e=> {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=> {
   const btnClass = btn.getAttribute('class');
   if(btnClass === 'dark'){
    btn.setAttribute('class','light');
    btn.textContent='Lighten';
    overlay.style.backgroundColor = 'rbga(0,0,0,0)';
   }
}

)