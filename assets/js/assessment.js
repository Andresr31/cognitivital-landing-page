// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


var diagnosticPara = document.querySelector('#result');
var testBtn = document.querySelector('#start-btn');
var btnResult = document.querySelector('#resultView');
var info = document.querySelector('#info');

let countdown;
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.getElementById('message');
const result = document.getElementById('result');

// Base de conocimiento
const fruits = ['ACEROLA', 'ACHIOTE', 'AGUACATE', 'AJO', 'AKEE', 'ALBARICOQUE', 'ALMENDRA', 'ANACARDO', 'ANANÁ', 'ANONA', 'ARÁNDANO', 'AZUFAIFO', 'BABACO', 'BACABA', 'BANANA', 'BELLOTA', 'BERENJENA', 'BIRIBÁ', 'BOROJO', 'BOROJÓ', 'BREVA', 'CACAO', 'CAIMITO', 'CALABAZA', 'CAMUCAMU', 'CAQUI', 'CASTAÑA', 'CEREZA', 'CHAYOTE', 'CHIRIMOYA', 'CIRUELA', 'COCONA', 'COCO', 'COPOAZÚ', 'CURUBA', 'DÁTIL', 'DURAZNO', 'DOVYALIS', 'ESCARAMUJO', 'FEIJOA', 'FRESA', 'FRAMBUESA', 'FRUTADEDRAGÓN', 'FRUTADELMONJE', 'FRUTODELBAOBAB', 'GARCINIA', 'GOYAVIER', 'GROSELLA', 'GUANÁBANA', 'GUAYABA', 'GUINDO', 'GUARANÁ', 'HIGO', 'HUITO', 'ICACO', 'ILAMA', 'INGA', 'JACA', 'JENGIBRE', 'JITOMATE', 'JOCOTE', 'JUJUBA', 'KARANDA', 'KIWI', 'KIWICHA', 'KAKI', 'LIMA', 'LIMÓN', 'LITCHI', 'LÚCUMA', 'LULO', 'MANDARINA', 'MANGO', 'MANZANA', 'MARACUYÁ', 'MAMEY', 'MANGOSTÁN', 'MAQUI', 'MELÓN', 'MEMBRILLO', 'MIRTILO', 'MORA', 'MORICHE', 'MORTIÑO', 'NANCE', 'NARANJA', 'NÍSPERO', 'NOGAL', 'OLIVO', 'ORONJA', 'PAPAYA', 'PASA', 'PERA', 'PEPINO', 'PHYSALIS', 'PIÑA', 'PITANGA', 'PITAHAYA', 'PLÁTANO', 'POMARROSA', 'POMELO', 'QUENEPA', 'QUINOTO', 'QUENEPA', 'RAMBUTÁN', 'RAPSODIA', 'RICINO', 'SANDÍA', 'SAPOTE', 'SERBAL', 'SIRIGUELA', 'TAMARILLO', 'TAMARINDO', 'TÉ', 'TORONJA', 'TUNA', 'UCHUVA', 'UVA', 'UVILLA', 'VAINILLA', 'YACA', 'YAMBO', 'ZAPOTE', 'ZARZAMORA'];
const animals = ['ABEJA', 'ÁGUILA', 'ACARO', 'ACEDÍA', 'AVESTRUZ', 'AGAPORNI', 'ALBATROS', 'ALCE', 'ALONDRA', 'ANACONDA', 'ANGUILA', 'ANTÍLOPE', 'ARMADILLO', 'ASNO', 'ATÚN', 'AYE-AYE', 'BABIRUSA', 'BABOSA', 'BACALAO', 'BALLENA', 'BISONTE', 'BOA', 'BÚFALO', 'BÚHO', 'BURRO', 'BUITRE', 'CABALLO', 'CABRA', 'CACATÚA', 'CAIMÁN', 'CALAMAR', 'CAMALEÓN', 'CAMELLO', 'CANARIO', 'CANGREJO', 'CARACOL', 'CARIBÚ', 'CASTOR', 'CEBRA', 'CERDO', 'CHACAL', 'CHINCHILLA', 'CHIMPANCÉ', 'CIGÜEÑA', 'CIERVO', 'COALA', 'COCODRILO', 'COLIBRÍ', 'COMADREJA', 'CÓNDOR', 'CONEJO', 'COYOTE', 'DELFÍN', 'DINGO', 'DODO', 'DRAGÓNDEKOMODO', 'DUGONGO', 'ELEFANTE', 'ERIZO', 'ESCARABAJO', 'ESCORPIÓN', 'ESTURIÓN', 'ESTORNINO', 'FAISÁN', 'FALCÓN', 'FENNEC', 'FLAMENCO', 'FOCA', 'FOSA', 'FRAILECILLO', 'GACELA', 'GALLINA', 'GALLO', 'GARRAPATA', 'GATO', 'GAVIOTA', 'GECO', 'GERBO', 'GIBA', 'GORILA', 'GORGOJO', 'GRILLO', 'GUACAMAYO', 'GUEPARDO', 'GUISANTEDEMAR', 'HALCÓN', 'HAMSTER', 'HIENA', 'HIPOCAMPO', 'HIPOPÓTAMO', 'HORMIGA', 'HURÓN', 'IGUANA', 'IMPALA', 'ISÓPODO', 'JAGUAR', 'JIRAFA', 'JIRIGUERO', 'KIWI', 'KINKAJÚ', 'KOALA', 'KRIL', 'LAGARTIJA', 'LAGARTO', 'LAMPREA', 'LANGOSTA', 'LÉMUR', 'LEÓN', 'LEOPARDO', 'LINCE', 'LLAMA', 'LOBO', 'LORO', 'LUCIÉRNAGA', 'LOMBRIZ', 'MAMBA', 'MAMUT', 'MANDRIL', 'MANATÍ', 'MANTIS', 'MAPACHE', 'MARIPOSA', 'MEJILLÓN', 'MIRLO',
    'MOFETA', 'MORSA', 'MOSCA', 'MOSQUITO', 'MULA', 'NARVAL', 'NAUTILUS', 'ÑANDÚ', 'NUTRIA', 'OCELOTE', 'ORCA', 'ORNITORRINCO', 'OSO', 'OVEJA', 'PALOMA', 'PANDA', 'PANGOLÍN', 'PATO', 'PAVO', 'PEZ', 'PERRO', 'PINGÜINO', 'PUMA', 'PULPO', 'QUETZAL', 'QUIRQUINCHO', 'RABODETORO', 'RANA', 'RATA', 'RATÓN', 'RAYA', 'RINOCERONTE', 'ROEDOR', 'SALAMANDRA', 'SALTAMONTES', 'SARDINA', 'SERPIENTE', 'SAPO', 'SURICATA', 'TÁBANO', 'TAPIR', 'TERMITA', 'TIGRE', 'TIBURÓN', 'TOPO', 'TORTUGA', 'TUCÁN', 'URRACA', 'VACA', 'VÍBORA', 'VICUÑA', 'WALABÍ', 'WAPITÍ', 'XENOPUS', 'YAK', 'YEGUA', 'ZANCUDO', 'ZORRO', 'ZORZAL'];
const profesions = ['ABOGADO', 'ABOGADA', 'ACTOR', 'ACTRIZ', 'ACTUARIO', 'ACTUARIA', 'ADMINISTRADOR', 'ADMINISTRADORA', 'AGENTE DE SEGUROS', 'AGRICULTOR', 'AGRICULTORA', 'ALBAÑIL', 'ALGUACIL', 'ANALISTA DE SISTEMAS', 'ANTROPÓLOGO', 'ANTROPÓLOGA', 'APICULTOR', 'APICULTORA', 'ARQUITECTO', 'ARQUITECTA', 'ARCHIVISTA', 'ARQUEÓLOGO', 'ARQUEÓLOGA', 'ARTISTA', 'ASTRÓNOMO', 'ASTRÓNOMA', 'ATLETA', 'AUTOR', 'AUTORA', 'AUXILIAR DE VUELO', 'BAILARÍN', 'BAILARINA', 'BARBERO', 'BARBERA', 'BIBLIOTECARIO', 'BIBLIOTECARIA', 'BIÓLOGO', 'BIÓLOGA', 'BOMBERO', 'BOMBERA', 'BOTÁNICO', 'BOTÁNICA', 'CAJERO',
    'CAJERA', 'CAMARERO', 'CAMARERA', 'CARNICERO', 'CARNICERA', 'CARPINTERO', 'CARPINTERA', 'CARTERO', 'CARTERA', 'CIENTÍFICO', 'CIENTÍFICA', 'CIRUJANO', 'CIRUJANA', 'COCINERO', 'COCINERA', 'COMERCIANTE', 'CONDUCTOR', 'CONDUCTORA', 'CONTADOR', 'CONTADORA', 'CONTRATISTA', 'COREÓGRAFO', 'COREÓGRAFA', 'CRIADOR', 'CRIADORA', 'CRIMINÓLOGO', 'CRIMINÓLOGA', 'DENTISTA', 'DIBUJANTE', 'DIETISTA', 'DIPLOMÁTICO', 'DIPLOMÁTICA', 'DISEÑADOR GRÁFICO', 'DISEÑADORA GRÁFICA', 'DISEÑADOR INDUSTRIAL', 'DISEÑADORA INDUSTRIAL', 'DISEÑADOR DE MODAS', 'DISEÑADORA DE MODAS', 'DOCENTE',
    'DOCTOR', 'DOCTORA', 'ECONOMISTA', 'EDITOR', 'EDITORA', 'ELECTRICISTA', 'EMBAJADOR', 'EMBAJADORA', 'EMPRENDEDOR', 'EMPRENDEDORA', 'ENFERMERO', 'ENFERMERA', 'ENTOMÓLOGO', 'ENTOMÓLOGA', 'ENTRENADOR PERSONAL', 'ENTRENADORA PERSONAL', 'ESCENÓGRAFO', 'ESCENÓGRAFA', 'ESCRITOR', 'ESCRITORA', 'ESPECIALISTA EN MARKETING', 'ESTILISTA', 'FARMACÉUTICO', 'FARMACÉUTICA', 'FILÓSOFO', 'FILÓSOFA', 'FÍSICO', 'FÍSICA', 'FOTÓGRAFO', 'FOTÓGRAFA', 'FUMIGADOR', 'FUMIGADORA', 'GANADERO', 'GANADERA', 'GEÓGRAFO', 'GEÓGRAFA', 'GEÓLOGO', 'GEÓLOGA', 'GERENTE', 'GESTOR CULTURAL', 'GESTORA CULTURAL',
    'GUÍA TURÍSTICO', 'GUÍA TURÍSTICA', 'HERRERO', 'HERRERA', 'HISTORIADOR', 'HISTORIADORA', 'HORTICULTOR', 'HORTICULTORA', 'INGENIERO AGRÓNOMO', 'INGENIERA AGRÓNOMA', 'INGENIERO CIVIL', 'INGENIERA CIVIL', 'INGENIERO DE SOFTWARE', 'INGENIERA DE SOFTWARE', 'INGENIERO ELÉCTRICO', 'INGENIERA ELÉCTRICA', 'INGENIERO INDUSTRIAL', 'INGENIERA INDUSTRIAL', 'INGENIERO MECÁNICO', 'INGENIERA MECÁNICA', 'INSPECTOR', 'INSPECTORA', 'INTÉRPRETE', 'JARDINERO', 'JARDINERA', 'JEFE DE OBRA', 'JEFA DE OBRA', 'JUEZ', 'JUEZA', 'LOCUTOR', 'LOCUTORA', 'MAESTRO', 'MAESTRA', 'MARINERO', 'MARINERA',
    'MECÁNICO', 'MECÁNICA', 'MÉDICO', 'MÉDICA', 'METEORÓLOGO', 'METEORÓLOGA', 'MINERO', 'MINERA', 'MÚSICO', 'MÚSICA', 'NEURÓLOGO', 'NEURÓLOGA', 'NUTRICIONISTA', 'ODONTÓLOGO', 'ODONTÓLOGA', 'OFTALMÓLOGO', 'OFTALMÓLOGA', 'OPERADOR DE MAQUINARIA', 'OPERADORA DE MAQUINARIA', 'PALEONTÓLOGO', 'PALEONTÓLOGA', 'PANADERO', 'PANADERA', 'PARAMÉDICO', 'PARAMÉDICA', 'PELUQUERO', 'PELUQUERA', 'PERIODISTA', 'PILOTO', 'PINTOR', 'PINTORA', 'PLOMERO', 'PLOMERA', 'POETA', 'POLICÍA', 'POLÍTICO', 'POLÍTICA', 'PROFESOR', 'PROFESORA', 'PROGRAMADOR', 'PROGRAMADORA', 'PSICÓLOGO', 'PSICÓLOGA', 'PSIQUIATRA',
    'PUBLICISTA', 'QUÍMICO', 'QUÍMICA', 'RADIÓLOGO', 'RADIÓLOGA', 'RECEPCIONISTA', 'REDACTOR', 'REDACTORA', 'REPARTIDOR', 'REPARTIDORA', 'SACERDOTE', 'SACERDOTISA', 'SOCIÓLOGO', 'SOCIÓLOGA', 'SOLDADOR', 'SOLDADORA', 'TAXISTA', 'TÉCNICO DE LABORATORIO', 'TÉCNICA DE LABORATORIO', 'TÉCNICO EN INFORMÁTICA', 'TÉCNICA EN INFORMÁTICA', 'TERAPEUTA', 'TOPOGRAFO', 'TOPOGRAFA', 'TRADUCTOR', 'TRADUCTORA', 'TRANSPORTISTA', 'VETERINARIO', 'VETERINARIA', 'VIGILANTE', 'VITICULTOR', 'VITICULTORA', 'ZAPATERO', 'ZAPATERA', 'ZOOLÓGO', 'ZOOLÓGA'];


var items = ['F', 'A', 'S', 'M', 'FRUTAS', 'ANIMALES', 'PROFESIONES'];
var totals = [0, 0, 0, 0, 0, 0, 0];
var iterator = 0;
var words = [];

// var numLetter = randomLetter();

var itemSelected = '';

// var contFruits = 0;
// var contAnimals = 0;
// var contProfesions = 0;

const recognition = new webkitSpeechRecognition();

// function randomLetter() {
//     var number = Math.floor(Math.random() * letters.length);
//     return number;
//   }

function start() {
    itemSelected = items[iterator];
    testBtn.disabled = true;
    clearResult()
    if (iterator < items.length) {
        let type;
        if (iterator >= 4) {
            type = 2;
        } else {
            type = 1;
        }
        startTraining(type, items[iterator])
    } else {
        var assessmentForm = new bootstrap.Modal(document.getElementById('assessmentForm'));
        assessmentForm.show();
    }


}
function startTraining(type, item) {
    document.querySelector('#word').textContent = item;
    startTimer()
    testSpeech(type, item)

}

function startTimer() {
    let secondsRemaining = 60;
    displayMessage("");
    displayTimeLeft(secondsRemaining);
    countdown = setInterval(() => {
        secondsRemaining--;
        if (secondsRemaining < 0) {
            clearInterval(countdown);
            hits = [... new Set(words)];
            displayMessage("¡Tiempo Agotado! Respuestas correctas categoría " + itemSelected + ": " + hits.length);
            totals[iterator] = hits.length;
            // setTimeout(function(){}, 2000);

            // Detener
            recognition.abort();
            iterator++;
            if (iterator < items.length) {
                testBtn.innerHTML = "Siguiente..."
            } else {
                testBtn.innerHTML = "Finalizar valoración"
            }

            testBtn.disabled = false;
            return;
        }
        displayTimeLeft(secondsRemaining);
    }, 1000);



}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function displayMessage(message) {
    messageDisplay.textContent = message;
}

function testSpeech(type, item) {
    recognition.continuous = true;
    recognition.lang = 'es-ES';
    recognition.interimResult = false;

    recognition.start();


    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toUpperCase().trim();
        if (text.includes(" ")) {
            for (let i = 0; i < text.split(" ").length; i++) {
                let word = text.split(" ")[i];
                if (type === 1) {
                    validateLetter(word, item)
                } else if (type === 2) {
                    validateCategory(word, item)
                }
            }
        } else {
            if (type === 1) {
                validateLetter(text, item)
            } else if (type === 2) {
                validateCategory(text, item)
            }
        }




    }

}

function validateCategory(word, category) {
    let band = false;
    switch (category) {
        case 'FRUTAS':
            if (fruits.includes(word)) {
                words.push(word);
                band = true;
            }

            break;
        case 'ANIMALES':
            if (animals.includes(word)) {
                words.push(word);
                band = true;
            }

            break;
        case 'PROFESIONES':
            if (profesions.includes(word)) {
                words.push(word);
                band = true;
            }
            break;
    }
    addWordDOM(word, band);
}
function validateLetter(word, letter) {
    if (word.charAt(0) == letter) {
        words.push(word);
        // console.log(words);
        addWordDOM(word, true);
    } else {
        addWordDOM(word, false);
    }
}

function addWordDOM(word, status) {
    if (status) {
        const wordCorrect = document.createElement("span");
        wordCorrect.className += "badge bg-primary text-light my-1 mx-1";
        wordCorrect.textContent = word;
        result.appendChild(wordCorrect);
    } else {
        const wordWrong = document.createElement("span");
        wordWrong.className += "badge bg-danger text-light my-1 mx-1";
        wordWrong.textContent = word;
        result.appendChild(wordWrong);
    }

}

function clearResult() {
    words = [];
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

/////////////////////////////////////////////////////////////////////////////////////
// Graficos de resultados

function createRadarChart(canvasId, data1, data2, labels) {
    const maxValue = 20;

    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2.5;
    const numPoints = labels.length;

    // Función para dibujar el gráfico de telaraña con color de relleno
    function drawRadarChart(data, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 / numPoints) * i;
            const x = centerX + Math.cos(angle) * (data[i] / maxValue) * radius;
            const y = centerY + Math.sin(angle) * (data[i] / maxValue) * radius;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            // Dibujar etiquetas de valores en cada punto
            ctx.font = "8px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText(data[i], x + (x > centerX ? 5 : -15), y + (y > centerY ? 15 : -10));
        }
        ctx.closePath();
        ctx.globalAlpha = 0.2;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.stroke();
    }

    // Función para dibujar las líneas y etiquetas
    function drawGrid() {
        ctx.strokeStyle = "#ccc";
        for (let i = 0; i <= maxValue; i++) {
            ctx.beginPath();
            for (let j = 0; j < numPoints; j++) {
                const angle = (Math.PI * 2 / numPoints) * j;
                const x = centerX + Math.cos(angle) * (i / maxValue) * radius;
                const y = centerY + Math.sin(angle) * (i / maxValue) * radius;
                if (j === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            ctx.stroke();
        }

        // Dibujar líneas desde el centro y etiquetas
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 / numPoints) * i;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();

            // Dibujar etiquetas de los puntos
            ctx.font = "10px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText(labels[i], x + (x > centerX ? 5 : -40), y + (y > centerY ? 15 : -5));
        }
    }

    // Dibujar la cuadrícula y los gráficos
    drawGrid();
    drawRadarChart(data1, 'rgba(255, 99, 132, 0.6)'); // Relleno rojo
    drawRadarChart(data2, 'rgba(54, 162, 235, 0.6)'); // Relleno azul
}


/////////////////////////////////////////////////////////////////////////////////////

function finishAssessment() {
    const assessmentProcess = document.getElementById("assessmentProcess");
    assessmentProcess.className += " d-none";

    var assessmentForm = document.getElementById('assessmentForm');
    var modal = bootstrap.Modal.getInstance(assessmentForm)
    modal.hide();

    const chartsResult = document.getElementById("chartsResult");
    chartsResult.className -= " d-none";

    const labels = ["M", "ANIMALES", "FRUTAS", "PROFESIONES", "F", "A", "S"];


    const values = [totals[3], totals[5], totals[4], totals[6], totals[0], totals[1], totals[2]];
    let referencesGender = []
    let referencesAge = []
    let referencesEducation = []


    // Base de conocimiento

    // Genero promedio
    const dataMen = [10.1, 10.6, 10.0, 11.2, 15.9, 12.4, 11.9];
    const dataWomen = [10.3, 10.6, 9.8, 11.2, 15.9, 13.7, 11.5];

    // Edad en rango promedio

    // 18 A 55 años
    const dataAge1 = [11.8, 12.4, 11.3, 13.2, 18.3, 14.9, 13.8];
    // 56 a 75 años
    const dataAge2 = [9.9, 10.1, 9.6, 10.8, 15.6, 13.0, 11.4];
    // Mayor de 75
    const dataAge3 = [8.6, 8.8, 8.5, 9.1, 13.0, 11.1, 9.4];

    // Escolaridad promedio
    // 1 A 5 años
    const schooling1 = [8.0, 8.1, 7.6, 8.6, 13.0, 11.3, 9.0];
    // 6 a 12 años
    const schooling2 = [10.1, 10.4, 9.8, 11.1, 15.9, 13.2, 11.5];
    // Mayor de 12
    const schooling3 = [12.9, 13.7, 12.6, 14.5, 19.3, 15.3, 15.2];

    const fullName = document.getElementById('fullName').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;

    if (fullName && gender && age && education) {
        if (gender === 'hombre') {
            referencesGender = dataMen;
        }

        if (age === '1') {
            referencesAge = dataAge1
        } else if (age === '2') {
            referencesAge = dataAge2
        } else {
            referencesAge = dataAge3
        }

        if (education === '1') {
            referencesEducation = schooling1;
        } else if (age === '2') {
            referencesEducation = schooling2;
        } else {
            referencesEducation = schooling3;
        }

        // Crear gráficos pequeños con valores diferentes
        createRadarChart('radarChartGenero', values, referencesGender, labels);
        createRadarChart('radarChartEdad', values, referencesAge, labels);
        createRadarChart('radarChartEscolaridad', values, referencesEducation, labels);
    } else {
        alert('Por favor complete todos los campos.');
    }

}

testBtn.addEventListener('click', start);
btnResult.addEventListener('click', finishAssessment);
