
const instruments = {

    violao: {
        name: "Violão",
        category: "Cordas • Instrumento acústico",
        

        characteristics: `
            Instrumento versátil, presente em diversos
            estilos musicais. Seu som permite acompanhar
            vozes, criar melodias e explorar diferentes ritmos.
        `,

        functioning: `
            O som é produzido pela vibração das cordas,
            que são dedilhadas ou tocadas com uma palheta.
            A caixa acústica amplifica o som.
        `,

        relationship: `
            Foi aos 16 anos que descobri minha paixão pelo violão.
            Aprendi sozinho e dediquei muito tempo à prática.
            Quando consegui meu primeiro emprego, foi a primeira
            coisa que comprei. Logo comecei a tocar em eventos
            escolares, intervalos culturais, apresentações e
            encontros com amigos. Sempre gostei de explorar
            diferentes estilos, do rock ao funk, do MPB ao
            sertanejo. O violão foi o começo de tudo.
        `
    },

    piano: {
        name: "Piano",
        category: "Teclas • Instrumento acústico",
        image: "img/piano.jpg",

        characteristics: `
            Conhecido por sua grande extensão musical e
            versatilidade, o piano está presente principalmente
            na música clássica, mas também em diversos outros
            gêneros musicais.
        `,

        functioning: `
            Ao pressionar uma tecla, um mecanismo interno
            aciona um pequeno martelo que atinge uma corda,
            produzindo o som. Os pedais permitem modificar
            sua sonoridade.
        `,

        relationship: `
            O piano representa uma das minhas maiores conquistas
            musicais. Desde pequeno, sempre fui apaixonado por
            música clássica, que fez parte do meu cotidiano,
            e ter um piano era um sonho antigo. Quando finalmente
            comprei o meu, comecei a aprender sozinho e, já no
            segundo dia, estava conseguindo tocar músicas mais
            complexas. Hoje, gosto de explorar diferentes
            repertórios, desde músicas natalinas até grandes
            clássicos de épocas passadas.
        `
    },

    ukulele: {
        name: "Ukulele",
        category: "Cordas • Instrumento acústico",
        image: "img/ukulele.jpg",

        characteristics: `
            Instrumento de origem havaiana, conhecido pelo
            tamanho compacto e pela sonoridade leve e agradável.
            É bastante utilizado em músicas populares e acústicas.
        `,

        functioning: `
            Possui geralmente quatro cordas, que são dedilhadas
            ou tocadas com os dedos ou uma palheta. As notas
            e os acordes são formados pressionando as cordas
            contra os trastes.
        `,

        relationship: `
            Minha curiosidade pelo ukulele começou durante
            um trabalho escolar sobre instrumentos musicais.
            Como já tinha vontade de conhecer algo novo,
            aproveitei a pesquisa para descobrir mais sobre ele.
            O interesse surgiu durante esse processo e, pouco
            tempo depois, comprei meu próprio ukulele e comecei
            a aprender a tocar.
        `
    },

    cavaquinho: {
        name: "Cavaquinho",
        category: "Cordas • Instrumento acústico",
        image: "img/cavaquinho.jpg",

        characteristics: `
            Instrumento muito presente na música brasileira,
            especialmente no samba e no pagode. Pequeno e de
            sonoridade brilhante, possui participação marcante
            na construção dos ritmos.
        `,

        functioning: `
            Possui quatro cordas, tocadas com os dedos ou
            uma palheta. A combinação das notas e dos acordes
            permite criar acompanhamentos rítmicos e melodias.
        `,

        relationship: `
            O cavaquinho chegou até mim por meio de um amigo
            que estava se desfazendo do instrumento e decidiu
            me presentear. Como já tinha facilidade em aprender
            instrumentos de corda sozinho, enxerguei nele uma
            nova oportunidade de aprendizado e um desafio
            que queria experimentar.
        `
    },

    gaita: {
        name: "Gaita",
        category: "Sopro • Harmônica",
        image: "img/gaita.jpg",

        characteristics: `
            Também conhecida como harmônica, é um instrumento
            compacto e muito presente no blues, jazz e na música
            popular. Apesar do tamanho pequeno, produz melodias
            expressivas e cheias de personalidade.
        `,

        functioning: `
            O som é produzido pela passagem do ar através
            de pequenas palhetas metálicas internas. Ao soprar
            e aspirar o ar, diferentes notas são emitidas.
        `,

        relationship: `
            Sempre tive vontade de aprender um instrumento
            de sopro. Por ser apaixonado por jazz e blues,
            a gaita despertava especialmente minha curiosidade.
            Era algo diferente dos instrumentos que eu já
            conhecia e representava um novo desafio. Quando
            ganhei uma de presente, comecei a praticar e logo
            consegui aprender a tocar várias músicas.
        `
    },

    pandeiro: {
        name: "Pandeiro",
        category: "Percussão",
        image: "img/pandeiro.jpg",

        characteristics: `
            Instrumento de percussão muito importante na música
            brasileira. Presente no samba, no pagode e em diversos
            ritmos populares, combina diferentes sons em um
            único instrumento.
        `,

        functioning: `
            É formado por uma estrutura circular, uma pele
            esticada e pequenas peças metálicas chamadas
            platinelas. O som é produzido por batidas, toques
            dos dedos e movimentos que fazem as platinelas vibrar.
        `,

        relationship: `
            Meu interesse pelo pandeiro surgiu quando comecei
            a gostar cada vez mais de pagode. Foi um instrumento
            com o qual aprendi rapidamente e, depois de comprar
            o meu primeiro, comecei a participar de rodas de
            samba e pagode com amigos, além de tocar em barzinhos
            mais intimistas. Com ele, descobri uma nova forma
            de participar da música, agora também por meio
            da percussão.
        `
    },

    guitarra: {
        name: "Guitarra",
        category: "Cordas • Instrumento elétrico",
        image: "img/guitarra.jpg",

        characteristics: `
            Instrumento muito associado ao rock, mas também
            presente em diversos outros estilos musicais.
            Sua versatilidade permite produzir sons suaves,
            marcantes e distorcidos.
        `,

        functioning: `
            As cordas metálicas vibram e seus captadores
            transformam essa vibração em sinal elétrico,
            enviado a um amplificador que reproduz o som.
        `,

        relationship: `
            Por já conhecer outros instrumentos de corda,
            sempre tive interesse em aprender guitarra.
            Ainda não tenho uma em casa, mas encontrei uma
            maneira de manter esse contato: costumo frequentar
            um barzinho de rock que possui karaokê e instrumentos
            disponíveis. Sempre que vou com meus amigos,
            aproveito a oportunidade para tocar e me divertir.
        `
    },

    ganza: {
        name: "Ganzá",
        category: "Percussão",
        image: "img/ganza.jpg",

        characteristics: `
            Instrumento de percussão muito utilizado em ritmos
            brasileiros, como samba e pagode. Sua principal
            função é marcar o ritmo e acrescentar textura
            sonora à música.
        `,

        functioning: `
            Geralmente possui formato cilíndrico e contém
            pequenas partículas em seu interior. O som é
            produzido ao sacudir o instrumento, fazendo com
            que essas partículas se choquem contra suas paredes.
        `,

        relationship: `
            Minha curiosidade pelo ganzá surgiu naturalmente
            por já estar envolvido com instrumentos de percussão
            e ritmos como samba, pagode e reggae. Por sua
            simplicidade e pela contribuição que oferece
            à música, acabou despertando meu interesse em
            conhecer e experimentar mais esse instrumento.
        `
    }

};


// ==========================================
// 2. ELEMENTOS DO HTML
// ==========================================

const instrumentCards = document.querySelectorAll(".instrument-card");

const modal = document.getElementById("instrument-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");


// ==========================================
// 3. ABRIR MODAL
// ==========================================

function openModal(instrumentKey) {

    const instrument = instruments[instrumentKey];

    if (!instrument) return;

    modalBody.innerHTML = `

        

        <div class="modal-information">

            <h2 id="modal-title">
                ${instrument.name}
            </h2>

            <span class="modal-category">
                ${instrument.category}
            </span>

            <div class="modal-section">

                <h3>♫ Características</h3>

                <p>${instrument.characteristics}</p>

            </div>

            <div class="modal-section">

                <h3>⚙ Funcionamento</h3>

                <p>${instrument.functioning}</p>

            </div>

            <div class="modal-section">

                <h3>♡ Minha relação</h3>

                <p>${instrument.relationship}</p>

            </div>

        </div>

    `;

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

}


// ==========================================
// 4. FECHAR MODAL
// ==========================================

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Fechar pelo botão X

modalClose.addEventListener("click", closeModal);


// Fechar clicando fora da janela

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});


// Fechar pressionando ESC

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }

});


// ==========================================
// 5. CLIQUE NOS CARTÕES DOS INSTRUMENTOS
// ==========================================

instrumentCards.forEach(card => {

    card.addEventListener("click", function() {

        const instrumentKey = this.dataset.instrument;

        openModal(instrumentKey);

    });

});

// ==========================================
// 6. MODO CLARO E MODO ESCURO
// ==========================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Aplicar tema
function applyTheme(theme) {

    document.body.classList.toggle("dark-mode", theme === "dark");

    if (theme === "dark") {

        themeIcon.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

    } else {

        themeIcon.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

    }

    localStorage.setItem("instrumentum-theme", theme);
}

// Recuperar tema salvo
const savedTheme = localStorage.getItem("instrumentum-theme");

applyTheme(savedTheme || "light");

// Alternar tema ao clicar
themeToggle.addEventListener("click", function() {

    const isDark = document.body.classList.contains("dark-mode");

    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);

});


// ==========================================
// 7. ANO ATUAL (OPCIONAL)
// ==========================================

// Caso exista um elemento com id="current-year",
// ele receberá automaticamente o ano atual.

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
// ==========================================
// 8. PIANO INTERATIVO
// ==========================================

const pianoKeys = document.querySelectorAll(".piano-key");

let pianoAudio = null;
const activePianoVoices = new Map();

function initializePianoAudio() {
    if (!pianoAudio) {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        pianoAudio = new AudioContextClass();
    }

    if (pianoAudio.state === "suspended") {
        pianoAudio.resume();
    }
}

function getPianoFrequency(note) {
    const notes = {
        C: 0, D: 2, E: 4, F: 5,
        G: 7, A: 9, B: 11
    };

    const match = note.match(/^([A-G])(#?)(\d)$/);

    if (!match) return 440;

    const letter = match[1];
    const sharp = match[2] === "#" ? 1 : 0;
    const octave = Number(match[3]);

    const midi = (octave + 1) * 12 + notes[letter] + sharp;

    return 440 * Math.pow(2, (midi - 69) / 12);
}

function playPianoKey(key) {
    if (activePianoVoices.has(key)) return;

    initializePianoAudio();

    const frequency = getPianoFrequency(key.dataset.note);
    const now = pianoAudio.currentTime;

    const masterGain = pianoAudio.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.3, now + 0.008);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    masterGain.connect(pianoAudio.destination);

    const oscillators = [];

    // Harmônicos para dar corpo à nota
    const harmonics = [
        { multiple: 1, volume: 1 },
        { multiple: 2, volume: 0.35 },
        { multiple: 3, volume: 0.16 },
        { multiple: 4, volume: 0.07 }
    ];

    harmonics.forEach(partial => {
        const oscillator = pianoAudio.createOscillator();
        const partialGain = pianoAudio.createGain();

        oscillator.type = "triangle";
        oscillator.frequency.value =
            frequency * partial.multiple;

        partialGain.gain.value = partial.volume;

        oscillator.connect(partialGain);
        partialGain.connect(masterGain);

        oscillator.start(now);
        oscillators.push(oscillator);
    });

    activePianoVoices.set(key, {
        oscillators,
        masterGain
    });

    key.classList.add("active");

    // Decaimento natural do som
    setTimeout(() => {
        const voice = activePianoVoices.get(key);

        if (voice && voice.oscillators === oscillators) {
            stopPianoKey(key);
        }
    }, 2500);
}

function stopPianoKey(key) {
    const voice = activePianoVoices.get(key);

    if (!voice) return;

    const now = pianoAudio.currentTime;

    voice.masterGain.gain.cancelScheduledValues(now);
    voice.masterGain.gain.setTargetAtTime(0.0001, now, 0.08);

    voice.oscillators.forEach(oscillator => {
        oscillator.stop(now + 0.3);
    });

    activePianoVoices.delete(key);
    key.classList.remove("active");
}
// Toque com mouse ou tela sensível ao toque

pianoKeys.forEach(key => {

    key.addEventListener("pointerdown", function(event) {
        event.preventDefault();

        playPianoKey(key);

        key.setPointerCapture(event.pointerId);
    });

    key.addEventListener("pointerup", function() {
        stopPianoKey(key);
    });

    key.addEventListener("pointercancel", function() {
        stopPianoKey(key);
    });

    key.addEventListener("lostpointercapture", function() {
        stopPianoKey(key);
    });

});

// Toque pelo teclado do computador

const pianoKeyboardMap = {
    KeyZ: "C4",
    KeyS: "C#4",
    KeyX: "D4",
    KeyD: "D#4",
    KeyC: "E4",
    KeyV: "F4",
    KeyG: "F#4",
    KeyB: "G4",
    KeyH: "G#4",
    KeyN: "A4",
    KeyJ: "A#4",
    KeyM: "B4",

    KeyQ: "C5",
    Digit2: "C#5",
    KeyW: "D5",
    Digit3: "D#5",
    KeyE: "E5",
    KeyR: "F5",
    Digit5: "F#5",
    KeyT: "G5",
    Digit6: "G#5",
    KeyY: "A5",
    Digit7: "A#5",
    KeyU: "B5"
};

document.addEventListener("keydown", function(event) {

    if (event.repeat) return;

    const note = pianoKeyboardMap[event.code];

    if (!note) return;

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.isContentEditable
    ) return;

    const key = document.querySelector(
        `.piano-key[data-note="${note}"]`
    );

    if (key) {
        event.preventDefault();
        playPianoKey(key);
    }

});

document.addEventListener("keyup", function(event) {

    const note = pianoKeyboardMap[event.code];

    if (!note) return;

    const key = document.querySelector(
        `.piano-key[data-note="${note}"]`
    );

    if (key) {
        stopPianoKey(key);
    }

});

window.addEventListener("blur", function() {

    pianoKeys.forEach(key => stopPianoKey(key));

});