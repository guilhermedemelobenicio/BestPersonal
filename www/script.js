// 1. Menu Mobile Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 2. Detecção de Android / App
const checkAppMode = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobileSize = window.innerWidth < 600;

    if (isAndroid || isMobileSize) {
        document.body.classList.add('is-app');
    } else {
        document.body.classList.remove('is-app');
    }
};

// Roda ao carregar e ao redimensionar a tela
window.addEventListener('load', checkAppMode);
window.addEventListener('resize', checkAppMode);

// ==========================================================
// BANCO DE DADOS COMPLETO DE EXERCÍCIOS
// ==========================================================
const exercisesDB = [
    // --- ABDOMEN ---
    { id: 1, name: "Abdominal Canivete", category: "abdomen", video: "videos/agachamento.mp4" },
    { id: 2, name: "Abdominal Canivete Alternado", category: "abdomen", video: "./videos/abdominal-canivete-alternado.mp4" },
    { id: 3, name: "Abdominal com Rodinha Solo com Apoio", category: "abdomen", video: "./videos/rodinha-apoio.mp4" },
    { id: 4, name: "Abdominal Crunches Máquina", category: "abdomen", video: "" },
    { id: 5, name: "Abdominal Dead Bug", category: "abdomen", video: "" },
    { id: 6, name: "Abdominal Dead Bug Isométrico", category: "abdomen", video: "" },
    { id: 7, name: "Abdominal Dragon Fly", category: "abdomen", video: "" },
    { id: 8, name: "Abdominal Escalador", category: "abdomen", video: "" },
    { id: 9, name: "Abdominal Infra Bola Suíça", category: "abdomen", video: "" },
    { id: 10, name: "Abdominal Infra Bola Suíça com Amplitude", category: "abdomen", video: "" },
    { id: 11, name: "Abdominal Infra com as Pernas Estendidas", category: "abdomen", video: "" },
    { id: 12, name: "Abdominal Infra com as Pernas Flexionadas", category: "abdomen", video: "" },
    { id: 13, name: "Abdominal Infra com as Pernas Flexionadas com Elevação de Quadril", category: "abdomen", video: "" },
    { id: 14, name: "Abdominal Infra Cruzado com Cone", category: "abdomen", video: "" },
    { id: 15, name: "Abdominal Infra Isometria no Banco Declinado", category: "abdomen", video: "" },
    { id: 16, name: "Abdominal Infra no Banco Declinado com Pernas Estendidas", category: "abdomen", video: "" },
    { id: 17, name: "Abdominal Infra no Banco Declinado com Pernas Estendidas Elevação de Quadril", category: "abdomen", video: "" },
    { id: 18, name: "Abdominal Infra no Banco Declinado com Pernas Flexionadas", category: "abdomen", video: "" },
    { id: 19, name: "Abdominal Infra no Banco Declinado com Pernas Flexionadas Elevação de Quadril", category: "abdomen", video: "" },
    { id: 20, name: "Abdominal Infra Paralelas com Pernas Estendidas", category: "abdomen", video: "" },
    { id: 21, name: "Abdominal Infra Paralelas com Pernas Flexionadas", category: "abdomen", video: "" },
    { id: 22, name: "Abdominal Infra Pernas Estendidas (Curto)", category: "abdomen", video: "" },
    { id: 23, name: "Abdominal Infra Pernas Flexionadas (Curto)", category: "abdomen", video: "" },
    { id: 24, name: "Abdominal Infra Suspenso Pernas Estendidas", category: "abdomen", video: "" },
    { id: 25, name: "Abdominal Infra Suspenso Pernas Flexionadas", category: "abdomen", video: "" },
    { id: 26, name: "Abdominal Máquina", category: "abdomen", video: "" },
    { id: 27, name: "Abdominal no Slide", category: "abdomen", video: "" },
    { id: 28, name: "Abdominal Oblíquio Unilateral", category: "abdomen", video: "" },
    { id: 29, name: "Abdominal Oblíquo Alternado", category: "abdomen", video: "" },
    { id: 30, name: "Abdominal Oblíquo Alternado com Pedalada", category: "abdomen", video: "" },
    { id: 31, name: "Abdominal Oblíquo Alternado na Bola Suíça", category: "abdomen", video: "" },
    { id: 32, name: "Abdominal Obliquo Barra Fixa", category: "abdomen", video: "" },
    { id: 33, name: "Abdominal Oblíquo com Halteres", category: "abdomen", video: "" },
    { id: 34, name: "Abdominal Oblíquo Máquina Extensão Lombar", category: "abdomen", video: "" },
    { id: 35, name: "Abdominal Oblíquo na Polia", category: "abdomen", video: "" },
    { id: 36, name: "Abdominal Obliquo pernas elevada", category: "abdomen", video: "" },
    { id: 37, name: "Abdominal Oblíquo Unilateral", category: "abdomen", video: "" },
    { id: 38, name: "Abdominal Oblíquo Unilateral na Polia Alta", category: "abdomen", video: "" },
    { id: 39, name: "Abdominal Oblíquo Unilateral na Polia Baixa", category: "abdomen", video: "" },
    { id: 40, name: "Abdominal Pêndulo", category: "abdomen", video: "" },
    { id: 41, name: "Abdominal Prancha Isométrica", category: "abdomen", video: "" },
    { id: 42, name: "Abdominal Remador", category: "abdomen", video: "" },
    { id: 43, name: "Abdominal Remador com Apoio", category: "abdomen", video: "" },
    { id: 44, name: "Abdominal Remador no Banco", category: "abdomen", video: "" },
    { id: 45, name: "Abdominal Supra Banco Declinado", category: "abdomen", video: "" },
    { id: 46, name: "Abdominal Supra com Corda na Polia", category: "abdomen", video: "" },
    { id: 47, name: "Abdominal Supra com Corda na Polia no Chão", category: "abdomen", video: "" },
    { id: 48, name: "Abdominal Supra na Bola Suiça", category: "abdomen", video: "" },
    { id: 49, name: "Abdominal Supra no Solo Pés Altos", category: "abdomen", video: "" },
    { id: 50, name: "Abdominal Supra Pernas Dobradas", category: "abdomen", video: "" },
    { id: 51, name: "Abdominal Supra Solo", category: "abdomen", video: "" },
    { id: 52, name: "Abdominal Tesoura", category: "abdomen", video: "" },
    { id: 53, name: "Abdominal trocando bola suica", category: "abdomen", video: "" },
    { id: 54, name: "Obliquo em Isometria no Banco Lombar", category: "abdomen", video: "" },
    { id: 55, name: "Pallof Press", category: "abdomen", video: "" },
    { id: 56, name: "Perdigueiro Alternado", category: "abdomen", video: "" },
    { id: 57, name: "Perdigueiro Isométrico", category: "abdomen", video: "" },
    { id: 58, name: "Perdigueiro Unilateral", category: "abdomen", video: "" },
    { id: 59, name: "Prancha Alta", category: "abdomen", video: "" },
    { id: 60, name: "Prancha com Flexão de Perna no TRX", category: "abdomen", video: "" },
    { id: 61, name: "Prancha Cruzada", category: "abdomen", video: "" },
    { id: 62, name: "Prancha Dinâmica", category: "abdomen", video: "" },
    { id: 63, name: "Prancha Invertida", category: "abdomen", video: "" },
    { id: 64, name: "Prancha Isométrica Alta Alternando Membros Inferiores", category: "abdomen", video: "" },
    { id: 65, name: "Prancha Isométrica Alternando Membros Inferiores", category: "abdomen", video: "" },
    { id: 66, name: "Prancha Isometrica com Trx", category: "abdomen", video: "" },
    { id: 67, name: "Prancha Isometrica Lateral Alta", category: "abdomen", video: "" },
    { id: 68, name: "Prancha Isometrica Lateral Baixa", category: "abdomen", video: "" },
    { id: 69, name: "Prancha Isométrica na Bola Suíça", category: "abdomen", video: "" },
    { id: 70, name: "Prancha no Bosu", category: "abdomen", video: "" },
    { id: 71, name: "Prancha Peso Alternando", category: "abdomen", video: "" },
    { id: 72, name: "Prancha Toque no Ombros", category: "abdomen", video: "" },
    { id: 73, name: "Superman com Bastão", category: "abdomen", video: "" },
    
    // --- PEITO ---
    { id: 100, name: "Banco Supino Declinado", category: "peito", video: "" },
    { id: 101, name: "Banco Supino Inclinado", category: "peito", video: "" },
    { id: 102, name: "Banco Supino Reto", category: "peito", video: "" },
    { id: 103, name: "Crossover Polia Alta", category: "peito", video: "" },
    { id: 104, name: "Crossover Polia Baixa", category: "peito", video: "" },
    { id: 105, name: "Crossover Unilateral na Polia Baixa", category: "peito", video: "" },
    { id: 106, name: "Crucifixo Banco declinado com Halteres", category: "peito", video: "" },
    { id: 107, name: "Crucifixo com Halteres", category: "peito", video: "" },
    { id: 108, name: "Crucifixo Deitado na Polia", category: "peito", video: "" },
    { id: 109, name: "Crucifixo Inclinado com Halteres", category: "peito", video: "" },
    { id: 110, name: "Crucifixo Inclinado na polia", category: "peito", video: "" },
    { id: 111, name: "Crucifixo Máquina", category: "peito", video: "" },
    { id: 112, name: "Crucifixo na Polia Média", category: "peito", video: "" },
    { id: 113, name: "Crucifixo Sentado na polia", category: "peito", video: "" },
    { id: 114, name: "Crucifixo TRX", category: "peito", video: "" },
    { id: 115, name: "Flexão de Braço no Smith", category: "peito", video: "" },
    { id: 116, name: "Flexão de Braço TRX", category: "peito", video: "" },
    { id: 117, name: "Flexão de Braços", category: "peito", video: "" },
    { id: 118, name: "Flexão de Braços com Apoio", category: "peito", video: "" },
    { id: 119, name: "Flexão de Braços na Parede", category: "peito", video: "" },
    { id: 120, name: "Manguito Rotador Externo", category: "peito", video: "" },
    { id: 121, name: "Manguito Rotador Interno", category: "peito", video: "" },
    { id: 122, name: "Peck Deck", category: "peito", video: "" },
    { id: 123, name: "Supino Declinado Barra Reta", category: "peito", video: "" },
    { id: 124, name: "Supino Declinado com Halteres", category: "peito", video: "" },
    { id: 125, name: "Supino Inclinado com Barra Reta", category: "peito", video: "" },
    { id: 126, name: "Supino Inclinado com Halteres", category: "peito", video: "" },
    { id: 127, name: "Supino Inclinado Smith", category: "peito", video: "" },
    { id: 128, name: "Supino Maquina (Pegada Neutra)", category: "peito", video: "" },
    { id: 129, name: "Supino Maquina (Pegada Pronada)", category: "peito", video: "" },
    { id: 130, name: "Supino Máquina Inclinado (Pegada Neutra)", category: "peito", video: "" },
    { id: 131, name: "Supino Máquina Inclinado (Pegada Pronada)", category: "peito", video: "" },
    { id: 132, name: "Supino na Polia", category: "peito", video: "" },
    { id: 133, name: "Supino na Polia Alta", category: "peito", video: "" },
    { id: 134, name: "Supino na Polia Banco Inclinado", category: "peito", video: "" },
    { id: 135, name: "Supino na Polia Banco Reto", category: "peito", video: "" },
    { id: 136, name: "Supino na Polia Sentado", category: "peito", video: "" },
    { id: 137, name: "Supino Reto com Barra Reta", category: "peito", video: "" },
    { id: 138, name: "Supino Reto com Halteres", category: "peito", video: "" },
    { id: 139, name: "Supino Reto Maquina", category: "peito", video: "" },
    { id: 140, name: "Supino Reto no Smith", category: "peito", video: "" },
    
    // ... DORSAL ...
    { id: 200, name: "Banco Lombar Isometria", category: "costas", video: "" },
    { id: 201, name: "Barra Fixa (Pegada Aberta)", category: "costas", video: "" },
    { id: 202, name: "Barra Fixa (Pegada Fechada)", category: "costas", video: "" },
    { id: 203, name: "Barra Fixa Gráviton (Pegada Aberta)", category: "costas", video: "" },
    { id: 204, name: "Barra Fixa Gráviton (Pegada Neutra)", category: "costas", video: "" },
    { id: 205, name: "Barra Fixa Gráviton (Pegada Supinada)", category: "costas", video: "" },
    { id: 206, name: "Barra Horizontal no Smith", category: "costas", video: "" },
    { id: 207, name: "Crucifixo Inverso com Halteres", category: "costas", video: "" },
    { id: 208, name: "Crucifixo Inverso Máquina", category: "costas", video: "" },
    { id: 209, name: "Crucifixo Inverso na Polia Alta", category: "costas", video: "" },
    { id: 210, name: "Crucifixo Inverso na Polia Baixa", category: "costas", video: "" },
    { id: 211, name: "Crucifixo Inverso na Polia Média", category: "costas", video: "" },
    { id: 212, name: "Crucifixo Inverso no Banco Inclinado", category: "costas", video: "" },
    { id: 213, name: "Crucifixo Inverso Sentado", category: "costas", video: "" },
    { id: 214, name: "Crucifixo Inverso Unilateral na Polia", category: "costas", video: "" },
    { id: 215, name: "Depressão Escapular no Smith", category: "costas", video: "" },
    { id: 216, name: "Elevação Y na Polia", category: "costas", video: "" },
    { id: 217, name: "Extensão de Lombar Maquina", category: "costas", video: "" },
    { id: 218, name: "Face Pull", category: "costas", video: "" },
    { id: 219, name: "Hiperextensao de Lombar", category: "costas", video: "" },
    { id: 220, name: "Hiperextensao de Lombar Solo", category: "costas", video: "" },
    { id: 221, name: "Pulldown Barra Aberta", category: "costas", video: "" },
    { id: 222, name: "Pulldown Barra Reta", category: "costas", video: "" },
    { id: 223, name: "Pulldown com Corda", category: "costas", video: "" },
    { id: 224, name: "Pulldown Máquina Unilateral", category: "costas", video: "" },
    { id: 225, name: "Pulldown Polia Dupla", category: "costas", video: "" },
    { id: 226, name: "Pullover com Anilha", category: "costas", video: "" },
    { id: 227, name: "Pullover com Barra na Polia Baixa", category: "costas", video: "" },
    { id: 228, name: "Pullover com Barra Reta", category: "costas", video: "" },
    { id: 229, name: "Pullover com Corda na Polia Baixa", category: "costas", video: "" },
    { id: 230, name: "Pullover com Halteres", category: "costas", video: "" },
    { id: 231, name: "Pullover TRX", category: "costas", video: "" },
    { id: 232, name: "Puxada Aberta Barra reta", category: "costas", video: "" },
    { id: 233, name: "Puxada Aberta Barra reta atras", category: "costas", video: "" },
    { id: 234, name: "Puxada Articulada Aberta", category: "costas", video: "" },
    { id: 235, name: "Puxada Fechada barra reta", category: "costas", video: "" },
    { id: 236, name: "Puxada fechada pronada barra reta", category: "costas", video: "" },
    { id: 237, name: "Puxada Neutra barra H", category: "costas", video: "" },
    { id: 238, name: "Puxada Neutra triangulo", category: "costas", video: "" },
    { id: 239, name: "Puxada Semi Pronada Polia Alta", category: "costas", video: "" },
    { id: 240, name: "Puxada unilateral", category: "costas", video: "" },
    { id: 241, name: "Remada Alta na Polia Alta com Corda", category: "costas", video: "" },
    { id: 242, name: "Remada Alta na Polia Media com Corda", category: "costas", video: "" },
    { id: 243, name: "Remada Alta Sentado na Polia Alta (Pegada Neutra)", category: "costas", video: "" },
    { id: 244, name: "Remada Alta Sentado na Polia Alta Com Corda", category: "costas", video: "" },
    { id: 245, name: "Remada Baixa (Pegada Pronada)", category: "costas", video: "" },
    { id: 246, name: "Remada Baixa Barra H", category: "costas", video: "" },
    { id: 247, name: "Remada Baixa na Polia Baixa (Pegada Neutra)", category: "costas", video: "" },
    { id: 248, name: "Remada Baixa na Polia Baixa (Pegada Pronada)", category: "costas", video: "" },
    { id: 249, name: "Remada Baixa na Polia Baixa (Pegada Supinada)", category: "costas", video: "" },
    { id: 250, name: "Remada Baixa Supinada", category: "costas", video: "" },
    { id: 251, name: "Remada Baixa Triangulo", category: "costas", video: "" },
    { id: 252, name: "Remada Baixa Unilateral neutra", category: "costas", video: "" },
    { id: 253, name: "Remada Baixa unilateral pronada", category: "costas", video: "" },
    { id: 254, name: "Remada Baixa unilateral supinada", category: "costas", video: "" },
    { id: 255, name: "Remada Cavalinho (Pegada Neutra)", category: "costas", video: "" },
    { id: 256, name: "Remada Cavalinho (Pegada Pronada)", category: "costas", video: "" },
    { id: 257, name: "Remada Cavalinho (Pegada Supinada)", category: "costas", video: "" },
    { id: 258, name: "Remada Curvada com Anilha", category: "costas", video: "" },
    { id: 259, name: "Remada Curvada com Barra Reta (Pegada Neutra)", category: "costas", video: "" },
    { id: 260, name: "Remada Curvada com Barra Reta (Pegada Pronada)", category: "costas", video: "" },
    { id: 261, name: "Remada Curvada com Barra Reta (Pegada Supinada)", category: "costas", video: "" },
    { id: 262, name: "Remada Curvada com Halteres (Pegada Neutra)", category: "costas", video: "" },
    { id: 263, name: "Remada Curvada com Halteres (Pegada Pronada)", category: "costas", video: "" },
    { id: 264, name: "Remada Curvada com Halteres (Pegada Supinada)", category: "costas", video: "" },
    { id: 265, name: "Remada Curvada no Smith (Pronada)", category: "costas", video: "" },
    { id: 266, name: "Remada Curvada no Smith (Supinada)", category: "costas", video: "" },
    { id: 267, name: "Remada Fechada com Halteres no Banco Inclinado", category: "costas", video: "" },
    { id: 268, name: "Remada Máquina (Pegada Neutra)", category: "costas", video: "" },
    { id: 269, name: "Remada Máquina (Pegada Pronada)", category: "costas", video: "" },
    { id: 270, name: "Remada Máquina (Pegada Supinada)", category: "costas", video: "" },
    { id: 271, name: "Remada TRX (Pegada Neutra)", category: "costas", video: "" },
    { id: 272, name: "Remada TRX (Pegada Pronada)", category: "costas", video: "" },
    { id: 273, name: "Remada TRX (Pegada Supinada)", category: "costas", video: "" },
    { id: 274, name: "Remada Unilateral com Halteres no Banco Inclinado (Serrote)", category: "costas", video: "" },
    { id: 275, name: "Remada Unilateral Halteres (Serrote)", category: "costas", video: "" },
    { id: 276, name: "Remada Unilateral na Polia Baixa", category: "costas", video: "" },
    { id: 277, name: "Retração Escapular no Banco 45º", category: "costas", video: "" },
    
    // ... OMBROS ...
    { id: 300, name: "Desenvolvimento Arnold Sentado", category: "ombros", video: "" },
    { id: 301, name: "Desenvolvimento Barra Reta", category: "ombros", video: "" },
    { id: 302, name: "Desenvolvimento Barra Reta Atrás", category: "ombros", video: "" },
    { id: 303, name: "Desenvolvimento com Anilha", category: "ombros", video: "" },
    { id: 304, name: "Desenvolvimento com Halteres (Pegada Neutra)", category: "ombros", video: "" },
    { id: 305, name: "Desenvolvimento com Halteres Sentado", category: "ombros", video: "" },
    { id: 306, name: "Desenvolvimento em Pé com Halteres", category: "ombros", video: "" },
    { id: 307, name: "Desenvolvimento Máquina (Pegada Neutra)", category: "ombros", video: "" },
    { id: 308, name: "Desenvolvimento Máquina (Pegada Pronada)", category: "ombros", video: "" },
    { id: 309, name: "Desenvolvimento na Polia Baixa", category: "ombros", video: "" },
    { id: 310, name: "Desenvolvimento no Smith", category: "ombros", video: "" },
    { id: 311, name: "Desenvolvimento Sentado com Anilha", category: "ombros", video: "" },
    { id: 312, name: "Desenvolvimento Sentado com Barra Reta", category: "ombros", video: "" },
    { id: 313, name: "Desenvolvimento Sentado com Barra Reta Atrás", category: "ombros", video: "" },
    { id: 314, name: "Desenvolvimento Sentado com Halteres (Pegada Neutra)", category: "ombros", video: "" },
    { id: 315, name: "Desenvolvimento Unilateral com Halteres", category: "ombros", video: "" },
    { id: 316, name: "Desenvolvimento Unilateral na Polia Baixa", category: "ombros", video: "" },
    { id: 317, name: "Elevação Frontal Alternada", category: "ombros", video: "" },
    { id: 318, name: "Elevação Frontal com Anilha", category: "ombros", video: "" },
    { id: 319, name: "Elevação Frontal com Halteres", category: "ombros", video: "" },
    { id: 320, name: "Elevação Frontal com Halteres (Pegada Neutra)", category: "ombros", video: "" },
    { id: 321, name: "Elevação Frontal com Kettlebell", category: "ombros", video: "" },
    { id: 322, name: "Elevação Frontal Inversa com Barra Reta", category: "ombros", video: "" },
    { id: 323, name: "Elevação Frontal Inversa com Halteres", category: "ombros", video: "" },
    { id: 324, name: "Elevação Frontal Isometria com Barra Reta", category: "ombros", video: "" },
    { id: 325, name: "Elevação Frontal Isometria com Halteres", category: "ombros", video: "" },
    { id: 326, name: "Elevação Frontal Isométrica Sentado com Halteres (Pegada Neutra)", category: "ombros", video: "" },
    { id: 327, name: "Elevação Frontal Isométrica Sentado com Halteres (Pegada Pronada)", category: "ombros", video: "" },
    { id: 328, name: "Elevação Frontal na Polia Baixa (Pegada Pronada)", category: "ombros", video: "" },
    { id: 329, name: "Elevação Frontal na Polia Baixa (Pegada Supinada)", category: "ombros", video: "" },
    { id: 330, name: "Elevação Frontal na Polia com Corda", category: "ombros", video: "" },
    { id: 331, name: "Elevação Frontal Polia Diagonal", category: "ombros", video: "" },
    { id: 332, name: "Elevação Frontal Sentado com Barra Reta", category: "ombros", video: "" },
    { id: 333, name: "Elevação Frontal Sentado com Halteres", category: "ombros", video: "" },
    { id: 334, name: "Elevação Frontal Unilateral com Halteres", category: "ombros", video: "" },
    { id: 335, name: "Elevação Frontal Unilateral Isometria com Halteres", category: "ombros", video: "" },
    { id: 336, name: "Elevação Frontal Unilateral na Polia (Pegada Neutra)", category: "ombros", video: "" },
    { id: 337, name: "Elevação Frontal Unilateral na Polia (Pegada Pronada)", category: "ombros", video: "" },
    { id: 338, name: "Elevação Frontal Unilateral na Polia (Pegada Supinada)", category: "ombros", video: "" },
    { id: 339, name: "Elevação Lateral com Halteres", category: "ombros", video: "" },
    { id: 340, name: "Elevação Lateral Inclinado com Halteres", category: "ombros", video: "" },
    { id: 341, name: "Elevação Lateral Isometria com Halteres", category: "ombros", video: "" },
    { id: 342, name: "Elevação Lateral Isometria Sentado com Halteres", category: "ombros", video: "" },
    { id: 343, name: "Elevacão Lateral Sentado com Halteres", category: "ombros", video: "" },
    { id: 344, name: "Elevacao Lateral Simultanea na Polia Baixa", category: "ombros", video: "" },
    { id: 345, name: "Elevação Lateral Unilateral com Halteres", category: "ombros", video: "" },
    { id: 346, name: "Elevação Lateral Unilateral na Polia Baixa neutra", category: "ombros", video: "" },
    { id: 347, name: "Elevação Lateral Unilateral Sentado com Halteres", category: "ombros", video: "" },
    { id: 348, name: "Encolhimento de Ombros com Barra na Polia", category: "ombros", video: "" },
    { id: 349, name: "Encolhimento de Ombros com Barra na Polia com Rotação", category: "ombros", video: "" },
    { id: 350, name: "Encolhimento de Ombros com Barra Reta", category: "ombros", video: "" },
    { id: 351, name: "Encolhimento de Ombros com Barra Reta Atrás", category: "ombros", video: "" },
    { id: 352, name: "Encolhimento de Ombros com Halteres", category: "ombros", video: "" },
    { id: 353, name: "Encolhimento de Ombros no Smith Pela Frente", category: "ombros", video: "" },
    { id: 354, name: "Encolhimento de Ombros no Smith Pelas Costas", category: "ombros", video: "" },
    { id: 355, name: "Remada Alta com Barra W", category: "ombros", video: "" },
    { id: 356, name: "Remada Alta com Kettlebell", category: "ombros", video: "" },
    { id: 357, name: "Remada Alta na Polia Baixa com Barra Reta", category: "ombros", video: "" },
    { id: 358, name: "Remada Alta na Polia Baixa com Corda", category: "ombros", video: "" },
    { id: 359, name: "Remada Alta no Smith", category: "ombros", video: "" },
    
    // ... BICEPS ...
    { id: 400, name: "Bíceps Unilateral na Polia Alta", category: "biceps", video: "" },
    { id: 401, name: "Rosca Alternada Banco Inclinado", category: "biceps", video: "" },
    { id: 402, name: "Rosca Alternada com Halteres", category: "biceps", video: "" },
    { id: 403, name: "Rosca Alternada na Polia Baixa", category: "biceps", video: "" },
    { id: 404, name: "Rosca Concentrada", category: "biceps", video: "" },
    { id: 405, name: "Rosca Concentrada na Polia Baixa", category: "biceps", video: "" },
    { id: 406, name: "Rosca Direta 21 Barra W", category: "biceps", video: "" },
    { id: 407, name: "Rosca Direta 21 com Barra Reta", category: "biceps", video: "" },
    { id: 408, name: "Rosca Direta 21 com Halteres", category: "biceps", video: "" },
    { id: 409, name: "Rosca Direta 21 na Polia Baixa", category: "biceps", video: "" },
    { id: 410, name: "Rosca Direta Alternada Sentado com Halteres", category: "biceps", video: "" },
    { id: 411, name: "Rosca direta Banco Inclinado", category: "biceps", video: "" },
    { id: 412, name: "Rosca Direta Barra H", category: "biceps", video: "" },
    { id: 413, name: "Rosca Direta Barra Reta", category: "biceps", video: "" },
    { id: 414, name: "Rosca Direta Barra W", category: "biceps", video: "" },
    { id: 415, name: "Rosca Direta com Barra Reta no Banco Declinado", category: "biceps", video: "" },
    { id: 416, name: "Rosca Direta com Barra W no Banco Declinado", category: "biceps", video: "" },
    { id: 417, name: "Rosca Direta com Halteres", category: "biceps", video: "" },
    { id: 418, name: "Rosca Direta Isométrica com Halteres", category: "biceps", video: "" },
    { id: 419, name: "Rosca Direta na Polia (Barra Reta)", category: "biceps", video: "" },
    { id: 420, name: "Rosca Direta na Polia (Barra W)", category: "biceps", video: "" },
    { id: 421, name: "Rosca Direta na Polia Baixa", category: "biceps", video: "" },
    { id: 422, name: "Rosca Direta na Polia Baixa com Corda", category: "biceps", video: "" },
    { id: 423, name: "Rosca Direta na Polia Inclinado", category: "biceps", video: "" },
    { id: 424, name: "Rosca Direta na Polia Inclinado Alternado", category: "biceps", video: "" },
    { id: 425, name: "Rosca Direta na Polia Inclinado Unilateral", category: "biceps", video: "" },
    { id: 426, name: "Rosca Direta na Polia Sentado", category: "biceps", video: "" },
    { id: 427, name: "Rosca Direta na Polia Sentado Alternado", category: "biceps", video: "" },
    { id: 428, name: "Rosca Direta na Polia Sentado Unilateral", category: "biceps", video: "" },
    { id: 429, name: "Rosca Direta no TRX", category: "biceps", video: "" },
    { id: 430, name: "Rosca Direta Sentada com Halteres", category: "biceps", video: "" },
    { id: 431, name: "Rosca Inversa na Polia Baixa", category: "biceps", video: "" },
    { id: 432, name: "Rosca Martelo 21 Sentado", category: "biceps", video: "" },
    { id: 433, name: "Rosca Martelo Alternada com Halteres", category: "biceps", video: "" },
    { id: 434, name: "Rosca Martelo Alternada Isométrica com Halteres", category: "biceps", video: "" },
    { id: 435, name: "Rosca Martelo Alternado Banco Inclinado", category: "biceps", video: "" },
    { id: 436, name: "Rosca Martelo com Halteres", category: "biceps", video: "" },
    { id: 437, name: "Rosca Martelo Direta Banco Inclinado", category: "biceps", video: "" },
    { id: 438, name: "Rosca Martelo Sentado Alternado com Halteres", category: "biceps", video: "" },
    { id: 439, name: "Rosca Martelo Sentado com Halteres", category: "biceps", video: "" },
    { id: 440, name: "Rosca Scott Alternada com Halteres", category: "biceps", video: "" },
    { id: 441, name: "Rosca Scott Barra H", category: "biceps", video: "" },
    { id: 442, name: "Rosca Scott com Barra Reta", category: "biceps", video: "" },
    { id: 443, name: "Rosca Scott com Barra W", category: "biceps", video: "" },
    { id: 444, name: "Rosca Scott com Halteres", category: "biceps", video: "" },
    { id: 445, name: "Rosca Scott Máquina", category: "biceps", video: "" },
    { id: 446, name: "Rosca Scott Martelo Alternado com Halteres", category: "biceps", video: "" },
    { id: 447, name: "Rosca Scott Martelo com Halteres", category: "biceps", video: "" },
    { id: 448, name: "Rosca Scott Unilateral com Halteres", category: "biceps", video: "" },
    { id: 449, name: "Rosca Simultaneo na Polia Alta", category: "biceps", video: "" },
    { id: 450, name: "Rosca Unilateral com Halteres", category: "biceps", video: "" },
    { id: 451, name: "Rosca Unilateral com Trx", category: "biceps", video: "" },
    { id: 452, name: "Rosca Unilateral na Polia Baixa", category: "biceps", video: "" },
    { id: 453, name: "Rosca Zottman", category: "biceps", video: "" },
    
    // ... TRICEPS ...
    { id: 500, name: "Extensão Tríceps Máquina", category: "triceps", video: "" },
    { id: 501, name: "Flexão de Braço (Pegada Fechada)", category: "triceps", video: "" },
    { id: 502, name: "Tríceps Banco com Pernas Dobradas", category: "triceps", video: "" },
    { id: 503, name: "Tríceps Banco com Pernas Esticadas", category: "triceps", video: "" },
    { id: 504, name: "Tríceps Barra Encostado na Polia", category: "triceps", video: "" },
    { id: 505, name: "Tríceps Coice com Halteres", category: "triceps", video: "" },
    { id: 506, name: "Triceps Coice na Polia", category: "triceps", video: "" },
    { id: 507, name: "Tríceps Coice no Banco", category: "triceps", video: "" },
    { id: 508, name: "Tríceps Coice Unilateral com Halteres", category: "triceps", video: "" },
    { id: 509, name: "Triceps Coice Unilateral na Polia Baixa", category: "triceps", video: "" },
    { id: 510, name: "Tríceps Cruzado com Polia Alta", category: "triceps", video: "" },
    { id: 511, name: "Tríceps Francês com Anilha", category: "triceps", video: "" },
    { id: 512, name: "Tríceps Francês com Barra", category: "triceps", video: "" },
    { id: 513, name: "Tríceps Francês com Halteres", category: "triceps", video: "" },
    { id: 514, name: "Tríceps Francês na Polia com Barra Reta", category: "triceps", video: "" },
    { id: 515, name: "Tríceps Francês na Polia com Corda", category: "triceps", video: "" },
    { id: 516, name: "Tríceps Francês Sentado com Anilha", category: "triceps", video: "" },
    { id: 517, name: "Tríceps Francês Sentado com Barra Reta", category: "triceps", video: "" },
    { id: 518, name: "Tríceps Francês Sentado com Barra W", category: "triceps", video: "" },
    { id: 519, name: "Tríceps Francês Sentado com Halteres", category: "triceps", video: "" },
    { id: 520, name: "Tríceps Francês Unilateral com Halteres", category: "triceps", video: "" },
    { id: 521, name: "Tríceps Francês Unilateral na Polia", category: "triceps", video: "" },
    { id: 522, name: "Tríceps Francês Unilateral Sentado com Halteres", category: "triceps", video: "" },
    { id: 523, name: "Tríceps Invertido na Polia com Barra", category: "triceps", video: "" },
    { id: 524, name: "Triceps na Parede", category: "triceps", video: "" },
    { id: 525, name: "Tríceps na Polia Barra W", category: "triceps", video: "" },
    { id: 526, name: "Tríceps na Polia com Barra Reta", category: "triceps", video: "" },
    { id: 527, name: "Tríceps na Polia com Corda", category: "triceps", video: "" },
    { id: 528, name: "Triceps Paralela Máquina (Pegada Neutra)", category: "triceps", video: "" },
    { id: 529, name: "Triceps Paralela Máquina (Pegada Pronada)", category: "triceps", video: "" },
    { id: 530, name: "Triceps Paralelas no Gráviton", category: "triceps", video: "" },
    { id: 531, name: "Tríceps Supinado com Anilha", category: "triceps", video: "" },
    { id: 532, name: "Tríceps Supinado com Barra Reta", category: "triceps", video: "" },
    { id: 533, name: "Tríceps Supinado com Halteres", category: "triceps", video: "" },
    { id: 534, name: "Tríceps Testa Barra Reta", category: "triceps", video: "" },
    { id: 535, name: "Tríceps Testa com Barra na Polia Baixa", category: "triceps", video: "" },
    { id: 536, name: "Tríceps Testa com Barra W", category: "triceps", video: "" },
    { id: 537, name: "Tríceps Testa com Corda na Polia Baixa", category: "triceps", video: "" },
    { id: 538, name: "Tríceps Testa com Halteres", category: "triceps", video: "" },
    { id: 539, name: "Tríceps Testa na Polia com Barra Reta", category: "triceps", video: "" },
    { id: 540, name: "Tríceps Testa na Polia com Corda", category: "triceps", video: "" },
    { id: 541, name: "Tríceps Testa no Banco Inclinado com Barra Reta", category: "triceps", video: "" },
    { id: 542, name: "Tríceps Testa no Banco Inclinado com Barra W", category: "triceps", video: "" },
    { id: 543, name: "Tríceps Testa no Banco Inclinado com Halteres", category: "triceps", video: "" },
    { id: 544, name: "Tríceps Testa no Banco Inclinado na Polia", category: "triceps", video: "" },
    { id: 545, name: "Tríceps Testa no TRX", category: "triceps", video: "" },
    { id: 546, name: "Tríceps Testa Unilateral com Halteres", category: "triceps", video: "" },
    { id: 547, name: "Tríceps Testa Unilateral Isométrico com Halteres", category: "triceps", video: "" },
    { id: 548, name: "Tríceps Testa Unilateral na Polia", category: "triceps", video: "" },
    { id: 549, name: "Triceps Unilateral na Polia Alta (Pegada Neutra)", category: "triceps", video: "" },
    { id: 550, name: "Triceps Unilateral na Polia Alta (Pegada Pronada)", category: "triceps", video: "" },
    { id: 551, name: "Triceps Unilateral na Polia Alta (Pegada Supinada)", category: "triceps", video: "" },

    // ... ANTEBRAÇO ...
    { id: 600, name: "Rosca de Punho (Pegada Pronada)", category: "antebraco", video: "" },
    { id: 601, name: "Rosca de Punho (Pegada Supinada)", category: "antebraco", video: "" },
    { id: 602, name: "Rosca Inversa Barra W", category: "antebraco", video: "" },
    { id: 603, name: "Rosca Inversa com Barra Reta", category: "antebraco", video: "" },
    { id: 604, name: "Rosca Inversa com Halteres", category: "antebraco", video: "" },
    { id: 605, name: "Rosca Scott Inversa Barra Reta", category: "antebraco", video: "" },
    { id: 606, name: "Rosca Scott Inversa Barra W", category: "antebraco", video: "" },

    // ... QUADRICEPS ...
    { id: 700, name: "Afundo", category: "quadriceps", video: "" },
    { id: 701, name: "Afundo Alternado com Salto", category: "quadriceps", video: "" },
    { id: 702, name: "Afundo Alternado no Smith", category: "quadriceps", video: "" },
    { id: 703, name: "Afundo com Barra Livre", category: "quadriceps", video: "" },
    { id: 704, name: "Afundo com Elevação de Perna no Smith", category: "quadriceps", video: "" },
    { id: 705, name: "Afundo com Halteres", category: "quadriceps", video: "" },
    { id: 706, name: "Afundo com Halteres entre Steps", category: "quadriceps", video: "" },
    { id: 707, name: "Afundo com Step", category: "quadriceps", video: "" },
    { id: 708, name: "Afundo com Step Atrás", category: "quadriceps", video: "" },
    { id: 709, name: "Afundo no Smith", category: "quadriceps", video: "" },
    { id: 710, name: "Afundo no Smith com Step Atrás", category: "quadriceps", video: "" },
    { id: 711, name: "Afundo no Smith com Step na Frente", category: "quadriceps", video: "" },
    { id: 712, name: "Afundo Pliométrico TRX", category: "quadriceps", video: "" },
    { id: 713, name: "Afundo TRX", category: "quadriceps", video: "" },
    { id: 714, name: "Afundo Unilateral TRX", category: "quadriceps", video: "" },
    { id: 715, name: "Agachamento Búlgaro", category: "quadriceps", video: "" },
    { id: 716, name: "Agachamento Búlgaro no TRX", category: "quadriceps", video: "" },
    { id: 717, name: "Agachamento com Barra Hexagonal", category: "quadriceps", video: "" },
    { id: 718, name: "Agachamento com bola suiça", category: "quadriceps", video: "" },
    { id: 719, name: "Agachamento com Desenvolvimento (Halter no Chão)", category: "quadriceps", video: "" },
    { id: 720, name: "Agachamento com Desenvolvimento com Halteres", category: "quadriceps", video: "" },
    { id: 721, name: "Agachamento com Desenvolvimento Kettlebell", category: "quadriceps", video: "" },
    { id: 722, name: "Agachamento com Halter na Frente", category: "quadriceps", video: "" },
    { id: 723, name: "Agachamento com Halteres", category: "quadriceps", video: "" },
    { id: 724, name: "Agachamento com Salto", category: "quadriceps", video: "" },
    { id: 725, name: "Agachamento com Salto no Caixote", category: "quadriceps", video: "" },
    { id: 726, name: "Agachamento Frontal com Barra Livre", category: "quadriceps", video: "" },
    { id: 727, name: "Agachamento Frontal Smith", category: "quadriceps", video: "" },
    { id: 728, name: "Agachamento Hack", category: "quadriceps", video: "" },
    { id: 729, name: "Agachamento Hack Invertido", category: "quadriceps", video: "" },
    { id: 730, name: "Agachamento Hack Invertido Unilateral", category: "quadriceps", video: "" },
    { id: 731, name: "Agachamento Hack Pés Juntos", category: "quadriceps", video: "" },
    { id: 732, name: "Agachamento Isométrico", category: "quadriceps", video: "" },
    { id: 733, name: "Agachamento Isométrico com Panturrilha", category: "quadriceps", video: "" },
    { id: 734, name: "Agachamento Isométrico na Parede", category: "quadriceps", video: "" },
    { id: 735, name: "Agachamento Lateral Alternado", category: "quadriceps", video: "" },
    { id: 736, name: "Agachamento Livre", category: "quadriceps", video: "" },
    { id: 737, name: "Agachamento Livre com Barra", category: "quadriceps", video: "" },
    { id: 738, name: "Agachamento Livre com Barra no Suporte", category: "quadriceps", video: "" },
    { id: 739, name: "Agachamento Livre com Braços Estendidos", category: "quadriceps", video: "" },
    { id: 740, name: "Agachamento Livre com Desenvolvimento", category: "quadriceps", video: "" },
    { id: 741, name: "Agachamento Livre com Insistência", category: "quadriceps", video: "" },
    { id: 742, name: "Agachamento na Polia Baixa", category: "quadriceps", video: "" },
    { id: 743, name: "Agachamento no Bosu", category: "quadriceps", video: "" },
    { id: 744, name: "Agachamento no Smith Unilateral", category: "quadriceps", video: "" },
    { id: 745, name: "Agachamento no TRX", category: "quadriceps", video: "" },
    { id: 746, name: "Agachamento Overhead", category: "quadriceps", video: "" },
    { id: 747, name: "Agachamento Smith", category: "quadriceps", video: "" },
    { id: 748, name: "Agachamento Unilateral no Hack", category: "quadriceps", video: "" },
    { id: 749, name: "Agachamento Unilateral no Smith com Step", category: "quadriceps", video: "" },
    { id: 750, name: "Avanço", category: "quadriceps", video: "" },
    { id: 751, name: "Avanço Alternado com Barra", category: "quadriceps", video: "" },
    { id: 752, name: "Avanço Barra entre as Pernas", category: "quadriceps", video: "" },
    { id: 753, name: "Búlgaro com Barra", category: "quadriceps", video: "" },
    { id: 754, name: "Búlgaro com Halter", category: "quadriceps", video: "" },
    { id: 755, name: "Búlgaro com Halter Mão Inversa", category: "quadriceps", video: "" },
    { id: 756, name: "Búlgaro com Halteres", category: "quadriceps", video: "" },
    { id: 757, name: "Búlgaro Inclinado para Frente", category: "quadriceps", video: "" },
    { id: 758, name: "Cadeira Extensora", category: "quadriceps", video: "" },
    { id: 759, name: "Cadeira Extensora Unilateral", category: "quadriceps", video: "" },
    { id: 760, name: "Leg Press 45", category: "quadriceps", video: "" },
    { id: 761, name: "Leg Press 45 Pés Afastados", category: "quadriceps", video: "" },
    { id: 762, name: "Leg Press 45 Unilateral", category: "quadriceps", video: "" },
    { id: 763, name: "Leg Press 90 no Smith", category: "quadriceps", video: "" },
    { id: 764, name: "Leg press 90°", category: "quadriceps", video: "" },
    { id: 765, name: "Leg Press 90° Unilateral", category: "quadriceps", video: "" },
    { id: 766, name: "Leg Press Horizontal", category: "quadriceps", video: "" },
    { id: 767, name: "Leg Press Horizontal Unilateral", category: "quadriceps", video: "" },
    { id: 768, name: "Passada com Barra Reta", category: "quadriceps", video: "" },
    { id: 769, name: "Passada com Halteres", category: "quadriceps", video: "" },
    { id: 770, name: "Passada em Avanço", category: "quadriceps", video: "" },
    { id: 771, name: "Passada em Avanço com Barra", category: "quadriceps", video: "" },
    { id: 772, name: "Passada em Avanço com Halteres", category: "quadriceps", video: "" },
    { id: 773, name: "Pistol TRX", category: "quadriceps", video: "" },
    { id: 774, name: "Recúo + Avanço", category: "quadriceps", video: "" },
    { id: 775, name: "Recuo com Barra", category: "quadriceps", video: "" },
    { id: 776, name: "Recuo com Halteres", category: "quadriceps", video: "" },
    { id: 777, name: "Sissy Squat", category: "quadriceps", video: "" },
    { id: 778, name: "Sobe/Desce no Banco", category: "quadriceps", video: "" },
    { id: 779, name: "Subida no Caixote com Barra", category: "quadriceps", video: "" },
    { id: 780, name: "Subida no Caixote com Caneleira", category: "quadriceps", video: "" },
    { id: 781, name: "Subida no Caixote no Smith", category: "quadriceps", video: "" },

    // ... GLUTEOS ...
    { id: 800, name: "Abdução de Quadril 4 Apoios", category: "gluteos", video: "" },
    { id: 801, name: "Abdução de Quadril 4 Apoios com Caneleira", category: "gluteos", video: "" },
    { id: 802, name: "Abdução de Quadril em Pé com Caneleira", category: "gluteos", video: "" },
    { id: 803, name: "Abdução de Quadril Máquina", category: "gluteos", video: "" },
    { id: 804, name: "Abdução de Quadril Máquina com Corpo a Frente", category: "gluteos", video: "" },
    { id: 805, name: "Abdução de Quadril na Polia Baixa Unilateral", category: "gluteos", video: "" },
    { id: 806, name: "Abdução de Quadril Unilateral com Caneleira", category: "gluteos", video: "" },
    { id: 807, name: "Adução de Quadril", category: "gluteos", video: "" },
    { id: 808, name: "Adução de Quadril com Caneleira", category: "gluteos", video: "" },
    { id: 809, name: "Adução de Quadril Máquina", category: "gluteos", video: "" },
    { id: 810, name: "Adução de Quadril na Polia Unilateral", category: "gluteos", video: "" },
    { id: 811, name: "Adução Simultânea", category: "gluteos", video: "" },
    { id: 812, name: "Adução Simultânea com Caneleira", category: "gluteos", video: "" },
    { id: 813, name: "Agachamento Sumô", category: "gluteos", video: "" },
    { id: 814, name: "Agachamento Sumô com Barra", category: "gluteos", video: "" },
    { id: 815, name: "Agachamento Sumô com Desenvolvimento", category: "gluteos", video: "" },
    { id: 816, name: "Agachamento Sumô com Halteres", category: "gluteos", video: "" },
    { id: 817, name: "Agachamento Sumo com Kettlebell", category: "gluteos", video: "" },
    { id: 818, name: "Agachamento Sumô com Salto", category: "gluteos", video: "" },
    { id: 819, name: "Agachamento Sumô no Smith", category: "gluteos", video: "" },
    { id: 820, name: "Agachamento Sumô no Step com Halteres", category: "gluteos", video: "" },
    { id: 821, name: "Ativação de Glúteo com Elevação Pélvica", category: "gluteos", video: "" },
    { id: 822, name: "Ativação de Glúteo com Elevação Pélvica com Step", category: "gluteos", video: "" },
    { id: 823, name: "Deslocamento Lateral com Elástico", category: "gluteos", video: "" },
    { id: 824, name: "Elevação de Quadril", category: "gluteos", video: "" },
    { id: 825, name: "Elevação de Quadril apoiando banco nas costas", category: "gluteos", video: "" },
    { id: 826, name: "Elevação de Quadril apoiando banco nos pés", category: "gluteos", video: "" },
    { id: 827, name: "Elevação de Quadril com Barra", category: "gluteos", video: "" },
    { id: 828, name: "Elevação de Quadril com Step", category: "gluteos", video: "" },
    { id: 829, name: "Elevação de Quadril na Bola Suíça", category: "gluteos", video: "" },
    { id: 830, name: "Elevação de Quadril na Maquina", category: "gluteos", video: "" },
    { id: 831, name: "Elevação de Quadril Pernas Cruzadas", category: "gluteos", video: "" },
    { id: 832, name: "Elevação de Quadril Toque nos Pés", category: "gluteos", video: "" },
    { id: 833, name: "Elevação de Quadril Unilateral", category: "gluteos", video: "" },
    { id: 834, name: "Elevação de Quadril Unilateral na Bola Suíça", category: "gluteos", video: "" },
    { id: 835, name: "Extensão de Quadril Banco", category: "gluteos", video: "" },
    { id: 836, name: "Glúteo Gráviton", category: "gluteos", video: "" },
    { id: 837, name: "Glúteos 4 Apoios Coice", category: "gluteos", video: "" },
    { id: 838, name: "Gluteos 4 Apoios Coice com Banco na Polia", category: "gluteos", video: "" },
    { id: 839, name: "Gluteos 4 Apoios Coice Pernas Flexionadas com Banco na Polia", category: "gluteos", video: "" },
    { id: 840, name: "Gluteos 4 Apoios com Banco na Polia", category: "gluteos", video: "" },
    { id: 841, name: "Glúteos 4 Apoios no Smith", category: "gluteos", video: "" },
    { id: 842, name: "Glúteos 4 Apoios Perna Estendida com Caneleira", category: "gluteos", video: "" },
    { id: 843, name: "Glúteos 4 Apoios Perna Flexionada com Caneleira", category: "gluteos", video: "" },
    { id: 844, name: "Glúteos Coice na Polia", category: "gluteos", video: "" },
    { id: 845, name: "Glúteos Coice na Polia Pernas Estendidas", category: "gluteos", video: "" },
    { id: 846, name: "Salto Lateral com Step", category: "gluteos", video: "" },
    
    // ... POSTERIOR ...
    { id: 900, name: "Bom Dia", category: "posterior", video: "" },
    { id: 901, name: "Cadeira Flexora", category: "posterior", video: "" },
    { id: 902, name: "Cadeira Flexora Unilateral", category: "posterior", video: "" },
    { id: 903, name: "Flexão de Joelhos com Caneleiras", category: "posterior", video: "" },
    { id: 904, name: "Flexão de Quadril 90° na polia", category: "posterior", video: "" },
    { id: 905, name: "Flexão de Quadril em Pé com Caneleira", category: "posterior", video: "" },
    { id: 906, name: "Flexão Nórdica", category: "posterior", video: "" },
    { id: 907, name: "Flexão Nórdica Adaptada", category: "posterior", video: "" },
    { id: 908, name: "Flexão Nórdica Inversa", category: "posterior", video: "" },
    { id: 909, name: "Flexão Nórdica Inversa TRX", category: "posterior", video: "" },
    { id: 910, name: "Flexor Isométrica na Bola Suíça", category: "posterior", video: "" },
    { id: 911, name: "Flexora Deitada com Peso Entre as Pernas", category: "posterior", video: "" },
    { id: 912, name: "Flexora Deitada na Polia com Banco", category: "posterior", video: "" },
    { id: 913, name: "Flexora na Bola Suíça", category: "posterior", video: "" },
    { id: 914, name: "Flexora TRX", category: "posterior", video: "" },
    { id: 915, name: "Flexora Unilateral", category: "posterior", video: "" },
    { id: 916, name: "Flexora Unilateral Deitada na Polia com Banco", category: "posterior", video: "" },
    { id: 917, name: "Levantamento Terra", category: "posterior", video: "" },
    { id: 918, name: "Levantamento Terra Sumô", category: "posterior", video: "" },
    { id: 919, name: "Mesa Flexora", category: "posterior", video: "" },
    { id: 920, name: "Mesa Flexora Unilateral", category: "posterior", video: "" },
    { id: 921, name: "Posterior de Coxa", category: "posterior", video: "" },
    { id: 922, name: "Stiff com Halteres", category: "posterior", video: "" },
    { id: 923, name: "Stiff na Polia (Pés Apoiados na Anilha)", category: "posterior", video: "" },
    { id: 924, name: "Stiff na Polia Baixa", category: "posterior", video: "" },
    { id: 925, name: "Stiff no Smith", category: "posterior", video: "" },
    { id: 926, name: "Stiff pés afastados com Barra Livre", category: "posterior", video: "" },
    { id: 927, name: "Stiff pés próximo com Barra Livre", category: "posterior", video: "" },
    { id: 928, name: "Stiff Sumô com Barra", category: "posterior", video: "" },
    { id: 929, name: "Stiff Sumô com Halteres", category: "posterior", video: "" },
    { id: 930, name: "Stiff Unilateral", category: "posterior", video: "" },

    // ... PANTURRILHA ...
    { id: 950, name: "Extensão de Panturrilha Maquina", category: "panturrilha", video: "" },
    { id: 951, name: "Extensão de Panturrilha Maquina unilateral", category: "panturrilha", video: "" },
    { id: 952, name: "Panturrilha Hack", category: "panturrilha", video: "" },
    { id: 953, name: "Panturrilha Inclinada no Smith", category: "panturrilha", video: "" },
    { id: 954, name: "Panturrilha Inclinada Unilateral no Smith", category: "panturrilha", video: "" },
    { id: 955, name: "panturrilha na parede", category: "panturrilha", video: "" },
    { id: 956, name: "Panturrilha no Leg Press 45", category: "panturrilha", video: "" },
    { id: 957, name: "Panturrilha no Leg Press Horizontal", category: "panturrilha", video: "" },
    { id: 958, name: "Panturrilha no Smith", category: "panturrilha", video: "" },
    { id: 959, name: "Panturrilha no Smith com Step", category: "panturrilha", video: "" },
    { id: 960, name: "Panturrilha no Step", category: "panturrilha", video: "" },
    { id: 961, name: "Panturrilha Sentado", category: "panturrilha", video: "" },
    { id: 962, name: "Panturrilha Sentado Maquina", category: "panturrilha", video: "" },
    { id: 963, name: "Panturrilha Unilateral na Parede", category: "panturrilha", video: "" },
    { id: 964, name: "Panturrilha Unilateral no Hack", category: "panturrilha", video: "" },
    { id: 965, name: "Panturrilha Unilateral no Leg Horizontal", category: "panturrilha", video: "" },
    { id: 966, name: "Panturrilha Unilateral no Leg Press 45", category: "panturrilha", video: "" },
    { id: 967, name: "Panturrilha Unilateral no Smith", category: "panturrilha", video: "" },
    { id: 968, name: "Panturrilha Unilateral no Smith com Step", category: "panturrilha", video: "" },
    { id: 969, name: "Panturrilha Unilateral no Step", category: "panturrilha", video: "" },

    // ... CARDIO ...
    { id: 1000, name: "Air bike", category: "cardio", video: "" },
    { id: 1001, name: "Bicicleta", category: "cardio", video: "" },
    { id: 1002, name: "Bicicleta Horizontal", category: "cardio", video: "" },
    { id: 1003, name: "Bike Spinning", category: "cardio", video: "" },
    { id: 1004, name: "Bike Spinning Alta", category: "cardio", video: "" },
    { id: 1005, name: "Bike Spinning Sentado", category: "cardio", video: "" },
    { id: 1006, name: "Corrida no Step", category: "cardio", video: "" },
    { id: 1007, name: "Eliptico", category: "cardio", video: "" },
    { id: 1008, name: "Eliptico Inclinado", category: "cardio", video: "" },
    { id: 1009, name: "Escada Máquina", category: "cardio", video: "" },
    { id: 1010, name: "Esteira Caminhada", category: "cardio", video: "" },
    { id: 1011, name: "Esteira com Inclinação", category: "cardio", video: "" },
    { id: 1012, name: "Esteira Sprint", category: "cardio", video: "" },
    { id: 1013, name: "Esteira Trote", category: "cardio", video: "" },
    { id: 1014, name: "Polichinelo", category: "cardio", video: "" },
    { id: 1015, name: "Polichinelo Frontal", category: "cardio", video: "" },
    { id: 1016, name: "Pular Corda", category: "cardio", video: "" },
    { id: 1017, name: "Pular Corda Cruzada", category: "cardio", video: "" },
    { id: 1018, name: "Remo", category: "cardio", video: "" },

    // ... ELASTICO ...
    { id: 1100, name: "Abdominal Cruzado", category: "elastico", video: "" },
    { id: 1101, name: "Abdominal Escalador", category: "elastico", video: "" },
    { id: 1102, name: "Abdominal Infra Bike", category: "elastico", video: "" },
    { id: 1103, name: "Abdominal Obliquo", category: "elastico", video: "" },
    { id: 1104, name: "Abdominal Obliquo Em Pé", category: "elastico", video: "" },
    { id: 1105, name: "Abdominal Tesoura", category: "elastico", video: "" },
    { id: 1106, name: "Abdução 4 Apoios", category: "elastico", video: "" },
    { id: 1107, name: "Abdução Decúbito Lateral", category: "elastico", video: "" },
    { id: 1108, name: "Abdução Decúbito Lateral Pernas Flexionados", category: "elastico", video: "" },
    { id: 1109, name: "Abdução do Quadril Sentada", category: "elastico", video: "" },
    { id: 1110, name: "Abdução em Pé", category: "elastico", video: "" },
    { id: 1111, name: "Abdução Ombros", category: "elastico", video: "" },
    { id: 1112, name: "Adução Decúbito Lateral", category: "elastico", video: "" },
    { id: 1113, name: "Afundo", category: "elastico", video: "" },
    { id: 1114, name: "Afundo - Elástico", category: "elastico", video: "" },
    { id: 1115, name: "Afundo - Faixa Elastica", category: "elastico", video: "" },
    { id: 1116, name: "Agachamento + Abdução Alternado", category: "elastico", video: "" },
    { id: 1117, name: "Agachamento - Elástico", category: "elastico", video: "" },
    { id: 1118, name: "Agachamento - Faixa Elástica", category: "elastico", video: "" },
    { id: 1119, name: "Agachamento - Mini Band", category: "elastico", video: "" },
    { id: 1120, name: "Agachamento Isometrico + Abdução", category: "elastico", video: "" },
    { id: 1121, name: "Agachamento Sumô com Elástico", category: "elastico", video: "" },
    { id: 1122, name: "Agachamento unilateral na parede", category: "elastico", video: "" },
    { id: 1123, name: "Alongamento Borboleta", category: "elastico", video: "" },
    { id: 1124, name: "Alongamento de Posteriores Sentado Unilateral", category: "elastico", video: "" },
    { id: 1125, name: "Bíceps Alternado - Elástico", category: "elastico", video: "" },
    { id: 1126, name: "Bíceps Alternado - Faixa Elástica", category: "elastico", video: "" },
    { id: 1127, name: "Biceps Concentrado", category: "elastico", video: "" },
    { id: 1128, name: "Bíceps Concentrado - Elástico", category: "elastico", video: "" },
    { id: 1129, name: "Bíceps Concentrado - Faixa Elástica", category: "elastico", video: "" },
    { id: 1130, name: "Bíceps em Pé - Elástico", category: "elastico", video: "" },
    { id: 1131, name: "Bíceps em pé - Faixa Elástica", category: "elastico", video: "" },
    { id: 1132, name: "Biceps Sentado", category: "elastico", video: "" },
    { id: 1133, name: "Crucifixo - Elastico", category: "elastico", video: "" },
    { id: 1134, name: "Crucifixo - Faixa Elástica", category: "elastico", video: "" },
    { id: 1135, name: "Crucifixo Inverso - Elastico", category: "elastico", video: "" },
    { id: 1136, name: "Crucifixo Inverso - Faixa Elástica", category: "elastico", video: "" },
    { id: 1137, name: "Desenvolvimento - Elástico", category: "elastico", video: "" },
    { id: 1138, name: "Desenvolvimento - Faixa Elástica", category: "elastico", video: "" },
    { id: 1139, name: "Elevação de Ombros - Elástico", category: "elastico", video: "" },
    { id: 1140, name: "Elevação de Ombros - Faixa Elástico", category: "elastico", video: "" },
    { id: 1141, name: "Elevação de Quadril", category: "elastico", video: "" },
    { id: 1142, name: "Elevação de Quadril Unilateral", category: "elastico", video: "" },
    { id: 1143, name: "Elevação Frontal - Elástico", category: "elastico", video: "" },
    { id: 1144, name: "Elevação Frontal - Faixa Elástica", category: "elastico", video: "" },
    { id: 1145, name: "Elevação Lateral - Elástico", category: "elastico", video: "" },
    { id: 1146, name: "Elevação Lateral - Faixa Elástica", category: "elastico", video: "" },
    { id: 1147, name: "Extensão de Joelho Unilateral Sentado", category: "elastico", video: "" },
    { id: 1148, name: "Extensão de Quadril em Pé", category: "elastico", video: "" },
    { id: 1149, name: "Flexão de Joelho Decúbito Ventral", category: "elastico", video: "" },
    { id: 1150, name: "Flexão de Quadril", category: "elastico", video: "" },
    { id: 1151, name: "Flexão de Quadril em Pé", category: "elastico", video: "" },
    { id: 1152, name: "Flexão de Quadril Pernas Flexionado", category: "elastico", video: "" },
    { id: 1153, name: "Glúteo 4 Apoios", category: "elastico", video: "" },
    { id: 1154, name: "Gluteo 4 Apoios - Elástico", category: "elastico", video: "" },
    { id: 1155, name: "Glúteo 4 Apoios Pernas Estendidas", category: "elastico", video: "" },
    { id: 1156, name: "Glúteo 4 Apoios Pernas Flexionados", category: "elastico", video: "" },
    { id: 1157, name: "Glúteo Coice", category: "elastico", video: "" },
    { id: 1158, name: "Glutos 4 Apoios - Faixa Elástica", category: "elastico", video: "" },
    { id: 1159, name: "Pancha + Flexão de Quadril", category: "elastico", video: "" },
    { id: 1160, name: "Prancha + Remada", category: "elastico", video: "" },
    { id: 1161, name: "Prancha com Abdução", category: "elastico", video: "" },
    { id: 1162, name: "Pulldown - Elástico", category: "elastico", video: "" },
    { id: 1163, name: "Pulldown - Faixa Elástica", category: "elastico", video: "" },
    { id: 1164, name: "Remada Aberta em Pé - Elástico", category: "elastico", video: "" },
    { id: 1165, name: "Remada Aberta em Pé- Faixa Elástica", category: "elastico", video: "" },
    { id: 1166, name: "Remada Aberta Sentado - Elástica", category: "elastico", video: "" },
    { id: 1167, name: "Remada Aberta Sentado - Faixa Elástica", category: "elastico", video: "" },
    { id: 1168, name: "Remada Curvada em Pé - Elástico", category: "elastico", video: "" },
    { id: 1169, name: "Remada Curvada em Pé - Faixa Elástica", category: "elastico", video: "" },
    { id: 1170, name: "Remada Fechada em Pé - Elástico", category: "elastico", video: "" },
    { id: 1171, name: "Remada Fechada em Pé - Faixa Elástica", category: "elastico", video: "" },
    { id: 1172, name: "Remada Fechada Sentado - Elástico", category: "elastico", video: "" },
    { id: 1173, name: "Remada Fechada Sentado - Faixa Elástica", category: "elastico", video: "" },
    { id: 1174, name: "Remada Fechada Unilateral", category: "elastico", video: "" },
    { id: 1175, name: "Stiff Unilateral", category: "elastico", video: "" },
    { id: 1176, name: "Supino em Pé - Elástico", category: "elastico", video: "" },
    { id: 1177, name: "Supino em Pé - Faixa Elástica", category: "elastico", video: "" },
    { id: 1178, name: "Tríceps", category: "elastico", video: "" },
    { id: 1179, name: "Tríceps - Elástico", category: "elastico", video: "" },
    { id: 1180, name: "Tríceps - Faixa Elástica", category: "elastico", video: "" },
    { id: 1181, name: "Triceps Coice em Pé - elastico", category: "elastico", video: "" },
    { id: 1182, name: "Triceps Coice em Pé - Faixa Elástica", category: "elastico", video: "" },
    { id: 1183, name: "Tríceps Coice em pé Livre - Elástico", category: "elastico", video: "" },
    { id: 1184, name: "Tríceps Coice em pé Livre - Faixa Elástica", category: "elastico", video: "" },
    { id: 1185, name: "Tríceps Francês", category: "elastico", video: "" },
    { id: 1186, name: "Tríceps Francês - Elástico", category: "elastico", video: "" },
    { id: 1187, name: "Tríceps Unilateral - Faixa Elástica", category: "elastico", video: "" },
    { id: 1188, name: "Tríceps Unileral - Elástico", category: "elastico", video: "" },

    // ... FUNCIONAL ...
    { id: 1200, name: "Escada de agilidade salto com uma perna", category: "funcional", video: "" },
    { id: 1201, name: "Escada de agilidade salto fora", category: "funcional", video: "" },
    { id: 1202, name: "Flexão Alternada no Step", category: "funcional", video: "" },
    { id: 1203, name: "Flexora no slide", category: "funcional", video: "" },
    { id: 1204, name: "Meio burpee", category: "funcional", video: "" },
    { id: 1205, name: "Minhoca", category: "funcional", video: "" },
    { id: 1206, name: "Mini Jump", category: "funcional", video: "" },
    { id: 1207, name: "Passada lateral com agachamento", category: "funcional", video: "" },
    { id: 1208, name: "Polichinelo com Deslocamento Lateral", category: "funcional", video: "" },
    { id: 1209, name: "Salto com obstaculos", category: "funcional", video: "" },
    { id: 1210, name: "Salto com obstaculos II", category: "funcional", video: "" },
    { id: 1211, name: "Skipping", category: "funcional", video: "" },
    { id: 1212, name: "Skipping Alto", category: "funcional", video: "" },
    { id: 1213, name: "Skipping com Step", category: "funcional", video: "" },
    { id: 1214, name: "Skipping Toque nos Pés", category: "funcional", video: "" },
    { id: 1215, name: "Slide", category: "funcional", video: "" },
    { id: 1216, name: "Subida Frontal Unilateral no Step", category: "funcional", video: "" },
    { id: 1217, name: "Subida Lateral Unilateral no Step", category: "funcional", video: "" },
    { id: 1218, name: "Subida no Caixote com Halteres", category: "funcional", video: "" },
    { id: 1219, name: "Suicídio com Cones", category: "funcional", video: "" },
    { id: 1220, name: "Swing Kettlebell", category: "funcional", video: "" },
    { id: 1221, name: "Swing kettlebell sem Agachar", category: "funcional", video: "" },
    { id: 1222, name: "Swing Kettlebell Trocando a Mão", category: "funcional", video: "" },
    { id: 1223, name: "Swing kettlebell unilateral", category: "funcional", video: "" }
];

// ==========================================================
// DEFINIÇÕES DAS TÉCNICAS (Dicionário de Texto)
// ==========================================================
const techniqueDefinitions = {
    'biset': { title: 'Bi-set', desc: 'Executar dois exercícios diferentes para o mesmo grupo muscular consecutivamente, sem descanso.' },
    'dropset': { title: 'Drop Set', desc: 'Realizar até a falha, reduzir a carga (20%) e continuar imediatamente até nova falha.' },
    'restpause': { title: 'Rest-Pause', desc: 'Fazer repetições até a falha, descansar 10-15s e tentar mais repetições com a mesma carga.' },
    'superset': { title: 'Super Set', desc: 'Executar dois exercícios para grupos musculares opostos (ex: Bíceps e Tríceps) sem intervalo.' },
    'piramide': { title: 'Pirâmide', desc: 'Aumentar a carga e diminuir as repetições a cada série (Crescente) ou o inverso.' },
    'circuito': { title: 'Circuito', desc: 'Realizar uma série de vários exercícios em sequência com pouco ou nenhum descanso.' },
    'forcadas': { title: 'Rep. Forçadas', desc: 'Parceiro ajuda levemente na fase positiva após a falha para completar o movimento.' }
};

// ==========================================================
// LÓGICA DE ABAS E GESTÃO DE TREINOS
// ==========================================================
let treinos = [
    { id: 'A', titulo: 'Treino A - Peito e Tríceps', html: '' },
    { id: 'B', titulo: 'Treino B', html: '' },
    { id: 'C', titulo: 'Treino C', html: '' }
];
let treinoAtualId = 'A';

function renderTabs() {
    const container = document.getElementById('tabs-container');
    container.innerHTML = '';
    
    treinos.forEach(treino => {
        const isActive = treino.id === treinoAtualId;
        const btn = document.createElement('button');
        btn.className = `tab-btn ${isActive ? 'active' : ''}`;
        btn.innerText = `Treino ${treino.id}`;
        btn.onclick = () => mudarAba(treino.id);
        container.appendChild(btn);
    });
}

function mudarAba(novoId) {
    const inputTitulo = document.getElementById('workout-title');
    const listaExercicios = document.getElementById('workout-list');
    
    // Salva o estado atual
    const treinoAntigo = treinos.find(t => t.id === treinoAtualId);
    if(treinoAntigo) {
        treinoAntigo.titulo = inputTitulo.value;
        treinoAntigo.html = listaExercicios.innerHTML;
    }

    // Carrega o novo estado
    treinoAtualId = novoId;
    const novoTreino = treinos.find(t => t.id === novoId);
    
    renderTabs();
    inputTitulo.value = novoTreino.titulo;
    listaExercicios.innerHTML = novoTreino.html;
}

function adicionarTreino(tipo) {
    let novoId;
    if (tipo === 'letra') {
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letrasUsadas = treinos.filter(t => isNaN(t.id)).map(t => t.id);
        const ultimaLetra = letrasUsadas.length > 0 ? letrasUsadas[letrasUsadas.length - 1] : '';
        const proximoIndex = alfabeto.indexOf(ultimaLetra) + 1;
        novoId = alfabeto[proximoIndex] || 'Z';
    } else {
        const numerosUsados = treinos.filter(t => !isNaN(t.id)).map(t => parseInt(t.id));
        const ultimoNumero = numerosUsados.length > 0 ? Math.max(...numerosUsados) : 0;
        novoId = (ultimoNumero + 1).toString();
    }

    if(treinos.some(t => t.id === novoId)) {
        alert("Limite de sequencia atingido ou ID já existe.");
        return;
    }

    treinos.push({ id: novoId, titulo: `Treino ${novoId}`, html: '' });
    mudarAba(novoId);
}

function excluirTreinoAtual() {
    if(treinos.length <= 1) {
        alert("Você precisa ter pelo menos um treino.");
        return;
    }

    if(confirm(`Tem certeza que deseja excluir o Treino ${treinoAtualId}?`)) {
        const index = treinos.findIndex(t => t.id === treinoAtualId);
        treinos.splice(index, 1);
        
        const novoIndex = index > 0 ? index - 1 : 0;
        treinoAtualId = treinos[novoIndex].id;
        
        renderTabs();
        const treino = treinos.find(t => t.id === treinoAtualId);
        document.getElementById('workout-title').value = treino.titulo;
        document.getElementById('workout-list').innerHTML = treino.html;
    }
}

// ==========================================================
// MODAL DE EXERCÍCIOS E FILTROS
// ==========================================================
let currentCategory = 'todos';
const modal = document.getElementById('exerciseModal');
const grid = document.getElementById('exercisesGrid');

function openExerciseModal() { modal.classList.remove('hidden'); renderExercises(); }
function closeExerciseModal() { modal.classList.add('hidden'); }

function renderExercises() {
    grid.innerHTML = '';
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = exercisesDB.filter(ex => (currentCategory === 'todos' || ex.category === currentCategory) && ex.name.toLowerCase().includes(term));
    
    if(filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--gray-400); padding: 2rem;">Nenhum exercício encontrado.</div>';
        return;
    }

    filtered.forEach(ex => {
        let mediaHtml = '';
        if(ex.video && ex.video.length > 0) {
            mediaHtml = `<video src="${ex.video}" muted loop onmouseover="this.play()" onmouseout="this.pause(); this.currentTime=0;"></video>`;
        } else {
            mediaHtml = `<span style="font-size: 0.7rem; font-weight: 700; color: var(--gray-400); text-transform: uppercase;">Sem vídeo</span>`;
        }

        const card = document.createElement('div');
        card.className = "exercise-select-card";
        card.onclick = () => selectExercise(ex);
        card.innerHTML = `
            <div class="preview-container">
                 ${mediaHtml}
            </div>
            <h4 class="ex-card-title">${ex.name}</h4>
            <span class="ex-card-cat">${ex.category}</span>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if(btn.dataset.cat === cat) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderExercises();
}

function filterExercises() { renderExercises(); }

// ==========================================================
// ADICIONAR EXERCÍCIO AO TREINO
// ==========================================================
function selectExercise(ex) {
    closeExerciseModal();
    const list = document.getElementById('workout-list');
    const newCard = document.createElement('div');
    const isCardio = ex.category === 'cardio';
    
    let thumbnailHtml = '';
    if(ex.video && ex.video.length > 0) {
        thumbnailHtml = `<video src="${ex.video}" controls preload="metadata"></video>`;
    } else {
        thumbnailHtml = `<span style="font-size: 0.6rem; color: var(--gray-400); font-weight: 700;">SEM VÍDEO</span>`;
    }

    newCard.className = "exercise-card-item";
    
    newCard.innerHTML = `
        <div class="video-thumb-small">
             ${thumbnailHtml}
        </div>

        <div class="exercise-details">
            <div class="exercise-top-row">
                <div>
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-cat-tag">${ex.category}</span>
                </div>
                <button onclick="this.closest('.exercise-card-item').remove()" class="btn-remove">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div class="exercise-inputs-grid">
                <div class="input-col">
                    <label>${isCardio ? 'Tempo' : 'Séries'}</label>
                    <input type="text" placeholder="${isCardio ? '20min' : '3'}" class="input-mini">
                </div>
                <div class="input-col">
                    <label>${isCardio ? 'Intensidade' : 'Reps'}</label>
                    <input type="text" placeholder="${isCardio ? 'Mod' : '8-12'}" class="input-mini">
                </div>
                <div class="input-col">
                    <label>${isCardio ? 'Distância' : 'Carga'}</label>
                    <input type="text" placeholder="-" class="input-mini">
                </div>
                <div class="input-col">
                    <label>Intervalo</label>
                    <input type="text" placeholder="60s" class="input-mini">
                </div>
            </div>

            <div class="technique-row">
                ${!isCardio ? `
                <div style="position: relative; flex: 1;">
                    <select onchange="updateTechniqueInfo(this)" class="select-tech">
                        <option value="">Técnica (Nenhuma)</option>
                        <option value="biset">Bi-set</option>
                        <option value="dropset">Drop Set</option>
                        <option value="restpause">Rest-Pause</option>
                        <option value="superset">Super Set</option>
                        <option value="piramide">Pirâmide</option>
                        <option value="circuito">Circuito</option>
                        <option value="forcadas">Rep. Forçadas</option>
                    </select>
                    <div class="info-icon hidden">?
                        <div class="tooltip-box">
                            <span class="tooltip-title">Título</span>
                            <span class="tooltip-desc">Descrição aqui...</span>
                        </div>
                    </div>
                </div>
                ` : ''}
                
                <input type="text" placeholder="Observações..." class="input-obs">
            </div>
        </div>
    `;
    list.appendChild(newCard);
}

// Atualiza Tooltip da Técnica
function updateTechniqueInfo(selectElement) {
    const container = selectElement.parentElement;
    const iconContainer = container.querySelector('.info-icon');
    const titleSpan = container.querySelector('.tooltip-title');
    const descSpan = container.querySelector('.tooltip-desc');
    const selectedValue = selectElement.value;

    if (selectedValue && techniqueDefinitions[selectedValue]) {
        const info = techniqueDefinitions[selectedValue];
        titleSpan.textContent = info.title;
        descSpan.textContent = info.desc;
        
        iconContainer.classList.remove('hidden');
        iconContainer.classList.add('flex');
    } else {
        iconContainer.classList.add('hidden');
        iconContainer.classList.remove('flex');
    }
}

// --- INICIALIZAÇÃO UNIFICADA DO BEST PERSONAL ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderiza as abas iniciais
    if (typeof renderTabs === "function") renderTabs();
    
    // 2. Carrega dados do aluno do LocalStorage
    const dadosTexto = localStorage.getItem('alunoRecemCadastrado');
    if (dadosTexto) {
        const aluno = JSON.parse(dadosTexto);
        const nomeElement = document.getElementById('displayNome');
        if (nomeElement) nomeElement.innerText = aluno.nome;
        
        const detalhesElement = document.getElementById('displayDetalhes');
        if (detalhesElement) {
            const objetivoFormatado = aluno.objetivo.charAt(0).toUpperCase() + aluno.objetivo.slice(1);
            detalhesElement.innerText = `${objetivoFormatado} • Novo Aluno`;
        }
    }

    // 3. DETECÇÃO DE PLATAFORMA (Crucial para o seu S9 FE)
    // Verificamos se está rodando via Capacitor ou se a URL indica Android
    const isCapacitor = window.hasOwnProperty('Capacitor');
    
    if (isCapacitor) {
        document.body.classList.add('is-app');
        console.log("Modo App: Ativado no S9 FE");
        // alert("O TABLET DETECTOU O APP!"); // Opcional: remover após testar
    } else {
        console.log("Modo Web: Ativado");
    }
});

// Mantive sua função de foto e mudança de aba abaixo, fora do DOMContentLoaded
if (document.getElementById('foto-input')) {
    document.getElementById('foto-input').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('preview-img').src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNÇÃO DO OLHINHO (VER SENHA) ---
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                // Muda a cor do ícone para o ciano da sua marca quando ativo
                this.style.color = isPassword ? '#00d4ff' : 'rgba(255, 255, 255, 0.4)';
            }
        });
    });

    // --- 2. VALIDAÇÃO DE CAMPOS IGUAIS ---
    const form = document.querySelector('.auth-form');
    const email = document.getElementById('email');
    const emailConfirm = document.getElementById('email-confirm');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');

    // Função que aplica as cores de erro ou sucesso
    function validateMatch(field1, field2) {
        if (field2.value.length > 0) {
            // Se estiver diferente = Vermelho | Se estiver igual = Ciano (Pro)
            field2.style.borderColor = (field1.value !== field2.value) ? '#ff4d4d' : '#00d4ff';
        } else {
            field2.style.borderColor = ''; // Reseta a cor se o campo estiver vazio
        }
    }

    // Executa a validação enquanto o usuário digita
    if (email && emailConfirm) {
        emailConfirm.addEventListener('input', () => validateMatch(email, emailConfirm));
    }
    if (password && passwordConfirm) {
        passwordConfirm.addEventListener('input', () => validateMatch(password, passwordConfirm));
    }
    // --- VALIDAÇÃO PARA A TELA DE RECUPERAÇÃO ---
const recoverPass = document.getElementById('password');
const recoverConfirm = document.getElementById('password-confirm');

if (recoverPass && recoverConfirm) {
    recoverConfirm.addEventListener('input', () => validateMatch(recoverPass, recoverConfirm));
}

    // --- 3. TRAVA DE SEGURANÇA NO ENVIO ---
    if (form) {
        form.addEventListener('submit', (e) => {
            const isEmailMatch = email && emailConfirm ? email.value === emailConfirm.value : true;
            const isPassMatch = password && passwordConfirm ? password.value === passwordConfirm.value : true;

            if (!isEmailMatch || !isPassMatch) {
                e.preventDefault(); // Impede o envio do formulário
                alert('Atenção: Os campos de confirmação (E-mail ou Senha) não coincidem!');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recoveryModal');
    const forgotLink = document.querySelector('.forgot-link');
    const closeBtn = document.querySelector('.close-modal');

    // Abre o modal ao clicar em "Esqueci minha senha"
    

    // Fecha o modal
    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = 'none'; };
    }

    window.onclick = (e) => {
        if (e.target == modal) { modal.style.display = 'none'; }
    };
});

// Funções de navegação do Modal
function goToStep2() {
    const email = document.getElementById('recovery-email').value;
    if(email.includes('@')) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
}

function finishRecovery() {
    alert('Senha alterada com sucesso! Agora você pode fazer o login.');
    location.reload(); // Recarrega a página para voltar ao login limpo
}
// ==========================================================
/* ==========================================================
   LÓGICA DE RECUPERAÇÃO DE SENHA - BEST PERSONAL PRO
   ========================================================== */

let timeLeft = 60;
let timerId;

// 1. Função de Navegação entre Etapas
function handleNextStep(stepNumber) {
    const emailInput = document.getElementById('recovery-email');
    
    // Validação ao sair do Passo 1
    if (stepNumber === 2) {
        if (!emailInput || !emailInput.value.includes('@')) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }
        startTimer(); // Inicia o contador automaticamente ao ir para o passo 2
    }

    // Gerencia a troca de classes "active"
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    const nextStep = document.getElementById('step' + stepNumber);
    if (nextStep) nextStep.classList.add('active');
}

// 2. Função do Cronômetro (Unificada)
function startTimer() {
    timeLeft = 60;
    const btn = document.getElementById('resend-btn');
    const txt = document.getElementById('timer-text');
    const timerElement = document.getElementById('timer');

    if (btn) btn.style.display = 'none';
    if (txt) txt.style.display = 'block';
    if (timerElement) timerElement.innerText = timeLeft;
    
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        if (timerElement) timerElement.innerText = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            if (txt) txt.style.display = 'none';
            if (btn) btn.style.display = 'inline-block';
        }
    }, 1000);
}

// 3. Função chamada pelo botão "Reenviar código" no HTML
function resendCode() {
    console.log("Enviando novo código...");
    // Aqui você pode adicionar o alerta de código enviado se desejar
    startTimer(); 
}

// 4. Finalização e Redirecionamento para Pré-Login
function handleFinishReset() {
    const p1 = document.getElementById('password');
    const p2 = document.getElementById('password-confirm');

    if (!p1 || !p2) return;

    if (p1.value === "" || p2.value === "") {
        alert("Por favor, preencha as senhas.");
        return;
    }

    if (p1.value.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }

    if (p1.value !== p2.value) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Senha alterada com sucesso!");
    // Redireciona para a tela de pré-login como solicitado
    window.location.href = 'prelogin.html'; 
}

/* 5. Validação da borda vermelha/ciano em tempo real (Mantida Original) */
document.addEventListener('input', function(e) {
    if (e.target.id === 'password' || e.target.id === 'password-confirm') {
        const s1 = document.getElementById('password');
        const s2 = document.getElementById('password-confirm');
        const msgErro = document.getElementById('password-error');

        if (s2.value.length > 0) {
            if (s1.value !== s2.value) {
                s2.style.border = "2px solid #ff4d4d"; 
                if (msgErro) msgErro.style.display = 'block';
            } else {
                s2.style.border = "2px solid #00d4ff"; 
                if (msgErro) msgErro.style.display = 'none';
            }
        } else {
            s2.style.border = "";
            if (msgErro) msgErro.style.display = 'none';
        }
    }
});
/************************** PAGINA DE CHAT E NOTIFICAÇÕES*********************** */
/* ==========================================================
   LÓGICA DA PÁGINA DE CHAT
   ========================================================== */

function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    
    // Verificação de segurança: se não estiver na página de chat, para a execução
    if (!input || !chatBox) return;
    
    // Não envia se estiver vazio
    if (input.value.trim() === "") return;

    // 1. Cria o elemento da mensagem
    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg personal';
    msgDiv.textContent = input.value;

    // 2. Adiciona ao chat
    chatBox.appendChild(msgDiv);
    
    // 3. Limpa o campo e foca novamente
    input.value = "";
    input.focus();

    // 4. Rola para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event Listener para enviar com a tecla ENTER
// (Usamos verificação do ID para garantir que só funcione no chat)
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && e.target.id === 'chat-input') {
        sendMessage();
    }
});

// Ao carregar a página, garante que o chat esteja rolado para baixo
window.addEventListener('load', function() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
/* ============================== CHAT E NOTIFICAÇÕES - FIM ============================== */
/* ==========================================================
   LÓGICA CHAT E MENU MOBILE
   ========================================================== */

// 1. Função de Enviar Mensagem
function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    // Validação simples
    if (!input || !chatBox || input.value.trim() === "") return;

    // Criar elemento HTML da mensagem
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message sent';
    
    // Pegar hora atual
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    msgDiv.innerHTML = `
        <p>${input.value}</p>
        <span class="time">${timeString}</span>
    `;

    // Adicionar ao chat
    chatBox.appendChild(msgDiv);
    
    // Limpar campo
    input.value = "";
    input.focus();

    // Rolar para o final
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 2. Enviar com Enter
const chatInput = document.getElementById('chat-input');
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// 3. Garantir que o Menu Mobile funcione nesta página
const btnToggle = document.getElementById('btn-toggle-menu');
const sidebar = document.getElementById('sidebar-menu');

if (btnToggle && sidebar) {
    btnToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('menu-aberto');
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('menu-aberto') && !sidebar.contains(e.target) && !btnToggle.contains(e.target)) {
            sidebar.classList.remove('menu-aberto');
        }
    });
}
/***************************** PAGAMENTO PERSONAL ************************************************/
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DO MENU LATERAL ---
    const btnToggle = document.getElementById('btn-toggle-menu');
    const sidebar = document.getElementById('sidebar-menu');

    if (btnToggle && sidebar) {
        btnToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('menu-aberto');
        });

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('menu-aberto') && !sidebar.contains(e.target) && !btnToggle.contains(e.target)) {
                sidebar.classList.remove('menu-aberto');
            }
        });
    }

    // --- 2. TROCAR PLANO E ATUALIZAR VALOR ---
    const plans = document.querySelectorAll('.plan-card');
    const totalDisplay = document.getElementById('total-display');

    plans.forEach(plan => {
        plan.addEventListener('click', () => {
            plans.forEach(p => p.classList.remove('selected'));
            plan.classList.add('selected');
            const price = plan.getAttribute('data-price');
            if (totalDisplay) {
                totalDisplay.innerText = `R$ ${price}`;
            }
        });
    });

    // --- 3. ALTERNAR MÉTODOS DE PAGAMENTO (CARTÃO/PIX) ---
    const methodBtns = document.querySelectorAll('.method-btn');
    const cardArea = document.getElementById('card-area');
    const pixArea = document.getElementById('pix-area');

    methodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            methodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.getAttribute('data-target');
            if (target === 'card-area') {
                cardArea.style.display = 'block';
                pixArea.style.display = 'none';
            } else {
                cardArea.style.display = 'none';
                pixArea.style.display = 'block';
            }
        });
    });

    // --- 4. EXIBIR FORMULÁRIO DE NOVO CARTÃO ---
    const btnShowCardForm = document.getElementById('btn-show-card-form');
    const newCardForm = document.getElementById('new-card-form');
    if (btnShowCardForm && newCardForm) {
        btnShowCardForm.addEventListener('click', () => {
            newCardForm.style.display = 'block';
        });
    }

    // --- 5. FUNÇÃO COPIAR PIX ---
    const btnCopyPix = document.getElementById('btn-copy-pix');
    const pixCodeInput = document.getElementById('pix-code');

    if (btnCopyPix && pixCodeInput) {
        btnCopyPix.addEventListener('click', () => {
            navigator.clipboard.writeText(pixCodeInput.value).then(() => {
                const originalText = btnCopyPix.innerText;
                btnCopyPix.innerText = "Copiado!";
                btnCopyPix.style.background = "#00ff88";
                
                setTimeout(() => {
                    btnCopyPix.innerText = originalText;
                    btnCopyPix.style.background = "#00E5FF";
                }, 2000);
            });
        });
    }
});
// --- LÓGICA DO BOTÃO ATUALIZAR ASSINATURA ---
const btnConfirmar = document.getElementById('btn-confirmar-assinatura');

if (btnConfirmar) {
    btnConfirmar.addEventListener('click', () => {
        const valorFinal = document.getElementById('total-display').innerText;
        const metodoAtivo = document.querySelector('.method-btn.active').innerText;
        
        // Simulação de carregamento no botão
        const textoOriginal = btnConfirmar.innerText;
        btnConfirmar.innerText = "Processando...";
        btnConfirmar.disabled = true;
        btnConfirmar.style.opacity = "0.7";
        btnConfirmar.style.cursor = "not-allowed";

        // Simula uma resposta do servidor após 2 segundos
        setTimeout(() => {
            alert(`Sucesso! Sua assinatura foi atualizada para o valor de ${valorFinal} via ${metodoAtivo}.`);
            
            // Volta o botão ao estado normal
            btnConfirmar.innerText = textoOriginal;
            btnConfirmar.disabled = false;
            btnConfirmar.style.opacity = "1";
            btnConfirmar.style.cursor = "pointer";
            
            // Aqui você poderia redirecionar o usuário:
            // window.location.href = "paginaPersonal.html";
        }, 2000);
    });
}
/***************************** INTERAÇÃO CHAT E NOTIFICAÇÕES*****************/
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const btnToggle = document.getElementById('btn-toggle-menu');
    const sidebar = document.getElementById('sidebar-menu');
    btnToggle?.addEventListener('click', () => sidebar.classList.toggle('menu-aberto'));

    // Lógica de Abas (Chat vs Notificações)
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Enviar Mensagem
    const btnSend = document.getElementById('btn-send-msg');
    const inputMsg = document.getElementById('input-msg');
    const chatScroll = document.getElementById('chat-scroll');

    btnSend?.addEventListener('click', () => {
        if (inputMsg.value.trim() !== "") {
            const msg = document.createElement('div');
            msg.className = 'bubble sent';
            msg.innerText = inputMsg.value;
            chatScroll.appendChild(msg);
            inputMsg.value = "";
            chatScroll.scrollTop = chatScroll.scrollHeight;
        }
    });

    // Trocar Aluno no Chat
    const chatItems = document.querySelectorAll('.student-chat-item');
    const chatHeaderName = document.getElementById('current-chat-name');

    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            chatItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            chatHeaderName.innerText = item.getAttribute('data-name');
            // Aqui você carregaria as mensagens específicas do aluno
        });
    });
});