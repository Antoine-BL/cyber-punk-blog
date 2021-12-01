$(document).foundation()

$(document).ready(() => {
    $(document.body).addClass("loaded")

    applyNeon();
    applyTextGlitch();

    function applyNeon() {
        const targets = window.document.getElementsByClassName('neon')

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
        
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            neonGlory(target);
        }
    }
    
    function applyTextGlitch() {
        const targets = window.document.getElementsByClassName('text-glitch');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&(){}:';

        const textGlitch = (target, originalText) => {
            const delay = 100;
            const nbIter = 4;
            
            if (target.children.length > 0) {
                for (let child of target.children){
                    textGlitch(child)
                }
            } else {
                for (let i = 0 ; i < nbIter; i++) {
                    let text = "";
                    for (let i = 0; i < originalText.length; i++) {
                        if (originalText.charAt(i) == ' '){
                            letter = " ";
                        } else {
                            letter = characters.charAt(Math.floor(Math.random() * characters.length))
                        }
                        text += letter;
                    }
                    setTimeout(() => target.innerText = text, delay * i);
                }
                setTimeout(() => target.innerText = originalText, nbIter * delay);
            }
        }

        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const subtargets = [];
            
            subtargetElements = target.getElementsByClassName('glitch-target');
            for (const subtarget of subtargetElements) {
                subtargets.push([subtarget, subtarget.innerText]);
            }

            if (target.classList.contains('text-glitch-mouseover')) {
                target.addEventListener('mouseenter', () => {
                    for (const sub of subtargets) {
                        const el = sub[0];
                        const ogText = sub[1];
                        textGlitch(el, ogText);

                    }
                })
                target.addEventListener('mouseleave', () => {
                    for (const sub of subtargets) {
                        const el = sub[0];
                        const ogText = sub[1];
                        textGlitch(el, ogText);

                    }
                })
            }
        }
    }
});