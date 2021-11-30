$(document).foundation()

$(document).ready(() => {
    $(document.body).addClass("loaded")

    const target = window.document.getElementById('pulseSpan')

    const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
    const colorLetter = letter => `<span style="color: hsla(${345 + (Math.random()*30 - 15)}, 100%, 40%, 1);">${letter}</span>`;
    const flickerAndColorText = text => 
    text
        .split('')
        .map(flickerLetter)
        .map(colorLetter)
        .join('');
    const neonGlory = target => {
        target.innerHTML = flickerAndColorText(target.textContent);
        for (let i = 0; i < target.children.length; i++) {
            const t2 = target.children[i]
            setTimeout(() => neonGlory(t2), (Math.random()*8 + 4) * 1000)
        }
    }
    

    neonGlory(target);
});