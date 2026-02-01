function moveButton() {
    const noBtn = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    // Change the text
    document.getElementById('question').innerHTML = "Yay! See you on the 14th! 🎉💖";
    
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Create and add the cat GIF
    const img = document.createElement('img');
    img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Zic3J6ZzRyc3R6ZzRyc3R6ZzRyc3R6ZzRyc3R6ZzRyc3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/vFKqnCdLPNOKc/giphy.gif";
    img.style.width = "300px";
    img.style.marginTop = "20px";
    img.style.borderRadius = "15px";
    img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    
    document.querySelector('.container').appendChild(img);
    
    // Make the background a soft gold for a "win" feel
    document.body.style.backgroundColor = "#fff9c4";
}
