let weeks = [
  { id: "semana-01", label: "Semana 01", title: "Tecnología de producción" },
  { id: "semana-02-03", label: "Semana 02-03", title: "Maximización del beneficio" },
  { id: "semana-04", label: "Semana 04", title: "Minimización del costo" },
  { id: "semana-05", label: "Semana 05", title: "Geometría de costos" }
];

const courses = [
  {
    id: "economia-produccion",
    acronym: "EPC",
    title: "Economía de la Producción Competitiva",
    subtitle: "Unidad 1",
    description: "Guía, teoría y ejercicios de producción, beneficios y costos."
  },
  {
    id: "poder-mercado",
    acronym: "EPM",
    title: "Economía de la Empresa con Poder de Mercado",
    subtitle: "Unidades 1-4",
    description: "Monopolio, oligopolio, teoría de juegos, concentración e información asimétrica."
  },
  {
    id: "analisis-estados-financieros",
    acronym: "AEF",
    title: "Análisis de Estados Financieros",
    subtitle: "Curso base",
    description: "Balance general, estado de resultados, flujo de efectivo, ratios y diagnóstico financiero."
  },
  {
    id: "ingles-placement-upc",
    acronym: "ING",
    title: "UPC English Placement",
    subtitle: "Basic · A1 · A2 · B1 · B2",
    description: "Level-based route for grammar, reading, listening and vocabulary."
  }
];

let topics = [
  {
    id: "empresa-tecnologia",
    week: "semana-01",
    title: "Empresa, tecnología y función de producción",
    question: "¿Qué puede producir la empresa con los factores que tiene?",
    formulas: ["\\[y=f(x_1,x_2,\\ldots,x_n)\\]", "\\[\\text{Tecnología}=\\{(x,y):x\\text{ puede producir }y\\}\\]"],
    explanation: [
      "La empresa no produce en el vacío: produce dentro de una tecnología. La tecnología resume qué combinaciones de trabajo, capital, materias primas u otros insumos pueden convertirse en una cantidad de producto.",
      "Una función de producción no dice cuánto quiere producir la empresa; dice cuánto puede producir si usa ciertos factores. Por eso es una restricción técnica.",
      "La diferencia clave es esta: la tecnología responde a una pregunta física, mientras que la optimización responde a una pregunta económica."
    ],
    example: "Si \\(y=2L^{1/2}K^{1/2}\\), la producción depende de trabajo \\(L\\) y capital \\(K\\). Si duplicas ambos factores y la función tiene rendimientos constantes, la producción también se duplica.",
    graph: "production"
  },
  {
    id: "isocuantas-rts",
    week: "semana-01",
    title: "Isocuantas, producto marginal y RTS",
    question: "¿Cómo sustituye la empresa un factor por otro sin cambiar producción?",
    formulas: ["\\[\\operatorname{PMg}_i=\\frac{\\partial y}{\\partial x_i}\\]", "\\[\\operatorname{RTS}_{12}=-\\frac{\\operatorname{PMg}_1}{\\operatorname{PMg}_2}\\]"],
    explanation: [
      "Una isocuanta muestra combinaciones de factores que producen el mismo nivel de producto. Si te mueves sobre la misma isocuanta, cambias la mezcla de factores, pero no cambias y.",
      "El producto marginal mide cuánto aumenta la producción cuando sube un factor, manteniendo los demás constantes. Es una idea de corto plazo cuando algún factor no puede ajustarse.",
      "La RTS es la pendiente de la isocuanta: indica cuánto de un factor puede sacrificarse si se usa más del otro manteniendo la producción."
    ],
    example: "Si \\(PMg_1=8\\) y \\(PMg_2=4\\), entonces \\(RTS=-\\frac{8}{4}=-2\\). La empresa puede reducir 2 unidades de \\(x_2\\) si aumenta 1 unidad de \\(x_1\\), manteniendo \\(y\\) constante de forma aproximada.",
    graph: "isoquant"
  },
  {
    id: "rendimientos",
    week: "semana-01",
    title: "Rendimientos de escala",
    question: "¿Qué pasa si todos los insumos crecen al mismo tiempo?",
    formulas: ["\\[f(tx_1,tx_2)>t f(x_1,x_2)\\quad\\text{crecientes}\\]", "\\[f(tx_1,tx_2)=t f(x_1,x_2)\\quad\\text{constantes}\\]", "\\[f(tx_1,tx_2)<t f(x_1,x_2)\\quad\\text{decrecientes}\\]"],
    explanation: [
      "Los rendimientos de escala no se calculan cambiando un solo factor. Se calculan multiplicando todos los factores por la misma constante.",
      "En Cobb-Douglas, \\(y=Ax_1^a x_2^b\\), basta sumar exponentes. Si \\(a+b\\) es mayor que \\(1\\), hay rendimientos crecientes; si es igual a \\(1\\), constantes; si es menor que \\(1\\), decrecientes.",
      "Puede haber producto marginal decreciente y rendimientos crecientes de escala al mismo tiempo porque son preguntas distintas."
    ],
    example: "Para \\(y=4L^{1/2}K^{1/3}\\), \\(a+b=\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}\\). Como \\(\\frac{5}{6}<1\\), hay rendimientos decrecientes de escala.",
    graph: "returns"
  },
  {
    id: "beneficio",
    week: "semana-02-03",
    title: "Beneficio económico y costo de oportunidad",
    question: "¿La empresa gana de verdad si considera lo que dejó de hacer?",
    formulas: ["\\[\\pi=IT-CE\\]", "\\[CE=\\text{costo contable}+\\text{costo de oportunidad}\\]"],
    explanation: [
      "El beneficio económico es más exigente que el beneficio contable porque incluye costos de oportunidad. Si el dueño trabaja en su empresa, su tiempo también tiene valor aunque no aparezca como sueldo pagado.",
      "Una decisión empresarial debe compararse contra la mejor alternativa sacrificada. Esa alternativa es el costo de oportunidad.",
      "Por eso una empresa puede tener beneficio contable positivo y beneficio económico bajo o incluso negativo."
    ],
    example: "Si el beneficio contable es 500 y el dueño sacrificó un sueldo alternativo de 180, el beneficio económico es 320.",
    graph: "opportunity"
  },
  {
    id: "max-beneficio",
    week: "semana-02-03",
    title: "Maximización del beneficio",
    question: "¿Cuándo conviene producir o contratar más?",
    formulas: ["\\[\\pi=p\\,y-w_1x_1-w_2x_2\\]", "\\[p\\cdot \\operatorname{PMg}_i=w_i\\]", "\\[\\operatorname{IMg}=\\operatorname{CMg}\\]"],
    explanation: [
      "La empresa competitiva toma precios como datos. No decide el precio del mercado; decide cuánto producir y cuántos factores usar.",
      "La regla \\(p\\cdot PMg=w\\) dice que el valor monetario de lo que aporta la última unidad del factor debe igualar lo que cuesta.",
      "Si \\(p\\cdot PMg>w\\), el factor todavía aporta más de lo que cuesta y conviene usar más. Si \\(p\\cdot PMg<w\\), conviene usar menos."
    ],
    example: "Si \\(p=8\\) y \\(PMg=3\\), el valor del producto marginal es \\(p\\cdot PMg=8\\cdot3=24\\). Si el salario del factor es \\(20\\), conviene contratar más; si es \\(30\\), conviene contratar menos.",
    graph: "profit"
  },
  {
    id: "min-costo",
    week: "semana-04",
    title: "Minimización del costo",
    question: "¿Cómo producir una cantidad dada gastando lo mínimo?",
    formulas: ["\\[\\min_{x_1,x_2} C=w_1x_1+w_2x_2\\quad\\text{s.a.}\\quad y=f(x_1,x_2)\\]", "\\[x_2=\\frac{C}{w_2}-\\frac{w_1}{w_2}x_1\\]", "\\[\\operatorname{RTS}_{12}=-\\frac{w_1}{w_2}\\]"],
    explanation: [
      "La minimización del costo no pregunta cuánto producir. Esa cantidad ya está fijada. Pregunta cuál combinación de factores permite producirla al menor costo.",
      "La isocuanta representa la producción objetivo y la isocosto representa el gasto. El óptimo interior ocurre donde ambas curvas son tangentes.",
      "La intuición es potente: la sustitución técnica entre factores debe coincidir con la sustitución que imponen los precios de mercado."
    ],
    example: "Si \\(w_1=10\\) y \\(w_2=5\\), la pendiente de la isocosto es \\(-\\frac{w_1}{w_2}=-\\frac{10}{5}=-2\\). En un óptimo interior, la \\(RTS\\) también debe ser \\(-2\\).",
    graph: "costmin"
  },
  {
    id: "costos-cp-lp",
    week: "semana-05",
    title: "Costos de corto y largo plazo",
    question: "¿Cómo cambia el costo cuando aumenta la producción?",
    formulas: ["\\[C(y)=C_v(y)+F\\]", "\\[\\operatorname{CMe}=\\operatorname{CVMe}+\\operatorname{CFMe}\\]", "\\[\\operatorname{CMg}=\\frac{\\partial C}{\\partial y}\\]"],
    explanation: [
      "En el corto plazo hay factores fijos. Por eso el costo total se separa en costo variable y costo fijo.",
      "El costo fijo medio cae cuando aumenta la producción porque el mismo costo fijo se reparte entre más unidades.",
      "El costo marginal cruza al costo medio en su mínimo: si el marginal está debajo del promedio, lo baja; si está encima, lo sube."
    ],
    example: "Si \\(C(y)=y^2+100\\), entonces \\(CMg=2y\\). Para \\(y=10\\), \\(CMg=20\\). El costo fijo medio es \\(\\frac{100}{10}=10\\).",
    graph: "costcurves"
  },
  {
    id: "escala-alcance",
    week: "semana-05",
    title: "Economías de escala, alcance y aprendizaje",
    question: "¿Por qué algunas empresas se vuelven más eficientes al crecer?",
    formulas: ["\\[EC=\\frac{\\operatorname{CMg}}{\\operatorname{CMe}}\\]", "\\[IEE=1-EC\\]", "\\[EA=\\frac{C(x)+C(y)-C(x,y)}{C(x,y)}\\]"],
    explanation: [
      "Hay economías de escala cuando producir más reduce el costo medio o cuando duplicar producción cuesta menos que duplicar el costo.",
      "Las economías de alcance aparecen cuando producir dos bienes juntos cuesta menos que producirlos por separado.",
      "La curva de aprendizaje explica reducciones de costo por experiencia acumulada: la empresa aprende, corrige procesos y desperdicia menos."
    ],
    example: "Si \\(CMg=12\\) y \\(CMe=16\\), entonces \\(EC=\\frac{12}{16}=0.75\\) e \\(IEE=1-0.75=0.25\\). Como \\(IEE>0\\), hay economías de escala.",
    graph: "scale"
  }
];

const state = {
  courseId: "economia-produccion",
  weekId: weeks[0].id,
  topicId: topics[0].id,
  theoryLevel: "facil",
  practiceLevel: "facil",
  viewed: new Set()
};

const topicList = document.querySelector("#topicList");
const guideView = document.querySelector("#guideView");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const progressHint = document.querySelector("#progressHint");
const coursesView = document.querySelector("#coursesView");
const appShell = document.querySelector("#appShell");
const courseList = document.querySelector("#courseList");
const weekTabs = document.querySelector("#weekTabs");
const classesPanel = document.querySelector("#classesPanel");
const toggleClassesButton = document.querySelector("#toggleClasses");
const placementTargetDate = new Date("2026-06-20T10:00:00-05:00");

function typesetMath() {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function currentTopic() {
  return topics.find((topic) => topic.id === state.topicId) || topics.find((topic) => topic.week === state.weekId) || topics[0];
}

function weekLabel(weekId) {
  return weeks.find((week) => week.id === weekId)?.label || "";
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;"
  })[char]);
}

function graphSvg(type) {
  const graphAssets = {
    production: ["assets/graphs/graph-1.png", "Gráfico LaTeX de función de producción"],
    isoquant: ["assets/graphs/graph-2.png", "Gráfico LaTeX de isocuanta e isocosto"],
    returns: ["assets/graphs/graph-3.png", "Gráfico LaTeX de rendimientos de escala"],
    opportunity: ["assets/graphs/graph-4.png", "Gráfico LaTeX de costo de oportunidad"],
    profit: ["assets/graphs/graph-5.png", "Gráfico LaTeX de maximización del beneficio"],
    costmin: ["assets/graphs/graph-6.png", "Gráfico LaTeX de minimización del costo"],
    costcurves: ["assets/graphs/graph-7.png", "Gráfico LaTeX de costos medios y marginales"],
    scale: ["assets/graphs/graph-8.png", "Gráfico LaTeX de escala y aprendizaje"],
    marketpower: ["assets/graphs/market-1.png", "Gráfico LaTeX de fuentes del poder de mercado"],
    monopoly: ["assets/graphs/market-2.png", "Gráfico LaTeX de monopolio"],
    naturalmonopoly: ["assets/graphs/market-3.png", "Gráfico LaTeX de monopolio natural"],
    discrimination: ["assets/graphs/market-4.png", "Gráfico LaTeX de discriminación de precios"],
    monopsony: ["assets/graphs/market-5.png", "Gráfico LaTeX de monopsonio"],
    concentration: ["assets/graphs/market-6.png", "Gráfico LaTeX de concentración de mercado"],
    oligopoly: ["assets/graphs/market-7.png", "Gráfico LaTeX de oligopolio"],
    gamematrix: ["assets/graphs/market-8.png", "Gráfico LaTeX de matriz de teoría de juegos"],
    dominant: ["assets/graphs/market-9.png", "Gráfico LaTeX de estrategia dominante"],
    repeatedgame: ["assets/graphs/market-10.png", "Gráfico LaTeX de juegos repetidos"],
    asymmetric: ["assets/graphs/market-11.png", "Gráfico LaTeX de información asimétrica"]
  };
  const asset = graphAssets[type];
  if (asset) {
    return `<img class="concept-chart latex-chart" src="${asset[0]}" alt="${asset[1]}" loading="lazy" />`;
  }

  const common = `
    <defs>
      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" class="grid-line" />
      </pattern>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
      </marker>
    </defs>
    <rect x="18" y="16" width="384" height="236" rx="10" class="graph-bg" />
    <rect x="64" y="40" width="296" height="180" class="grid-box" />
    <line x1="64" y1="220" x2="365" y2="220" class="axis" marker-end="url(#arrow)" />
    <line x1="64" y1="220" x2="64" y2="35" class="axis" marker-end="url(#arrow)" />`;
  const graphs = {
    production: `${common}
      <path d="M82 202 C116 178, 146 141, 184 112 C226 80, 284 62, 342 54" class="curve"/>
      <circle cx="184" cy="112" r="4.5" class="point"/>
      <line x1="184" y1="112" x2="184" y2="220" class="guide-line"/><line x1="184" y1="112" x2="64" y2="112" class="guide-line"/>
      <text x="254" y="58" class="graph-label">producción</text><text x="338" y="242" class="axis-label">insumo</text><text x="34" y="46" class="axis-label">producto</text>`,
    isoquant: `${common}
      <path d="M88 198 C126 147, 162 128, 202 128 C248 128, 294 92, 336 58" class="curve"/>
      <line x1="82" y1="62" x2="344" y2="204" class="cost-line"/>
      <circle cx="202" cy="127" r="4.8" class="point"/>
      <line x1="202" y1="127" x2="202" y2="220" class="guide-line"/><line x1="202" y1="127" x2="64" y2="127" class="guide-line"/>
      <text x="275" y="77" class="graph-label">isocuanta</text><text x="254" y="190" class="graph-label red">isocosto</text><text x="214" y="123" class="graph-label">tangencia</text>
      <text x="344" y="242" class="axis-label">factor 1</text><text x="35" y="48" class="axis-label">factor 2</text>`,
    returns: `${common}
      <path d="M84 194 L340 86" class="avg-curve"/>
      <path d="M84 204 C143 178, 226 105, 340 52" class="curve"/>
      <path d="M84 180 C150 134, 236 116, 340 110" class="var-curve"/>
      <text x="254" y="57" class="graph-label">crecientes</text><text x="268" y="93" class="graph-label gold">constantes</text><text x="242" y="127" class="graph-label blue">decrecientes</text>
      <text x="335" y="242" class="axis-label">escala</text><text x="34" y="48" class="axis-label">producto</text>`,
    opportunity: `${common}
      <rect x="104" y="116" width="58" height="104" rx="4" class="bar-a"/><rect x="236" y="82" width="58" height="138" rx="4" class="bar-b"/>
      <line x1="162" y1="116" x2="236" y2="82" class="muted-line"/><text x="170" y="100" class="graph-label">costo de oportunidad</text>
      <text x="94" y="242" class="axis-label">beneficio contable</text><text x="218" y="242" class="axis-label">beneficio económico</text><text x="35" y="48" class="axis-label">monto</text>`,
    profit: `${common}
      <path d="M84 194 C132 136, 198 103, 340 66" class="curve"/>
      <line x1="86" y1="176" x2="342" y2="90" class="cost-line"/>
      <circle cx="210" cy="134" r="4.8" class="point"/>
      <line x1="210" y1="134" x2="210" y2="220" class="guide-line"/><line x1="210" y1="134" x2="64" y2="134" class="guide-line"/>
      <text x="224" y="132" class="graph-label">óptimo</text><text x="270" y="72" class="graph-label">producción</text><text x="248" y="102" class="graph-label red">isobeneficio</text>
      <text x="342" y="242" class="axis-label">factor x</text><text x="35" y="48" class="axis-label">producto y</text>`,
    costmin: `${common}
      <path d="M88 198 C126 147, 162 128, 202 128 C248 128, 294 92, 336 58" class="curve"/>
      <line x1="82" y1="62" x2="344" y2="204" class="cost-line"/>
      <line x1="118" y1="86" x2="370" y2="222" class="muted-line"/>
      <circle cx="202" cy="127" r="4.8" class="point"/>
      <text x="215" y="123" class="graph-label">mínimo costo</text><text x="264" y="192" class="graph-label red">isocosto menor</text><text x="276" y="76" class="graph-label">producto objetivo</text>
      <text x="344" y="242" class="axis-label">factor 1</text><text x="35" y="48" class="axis-label">factor 2</text>`,
    costcurves: `${common}
      <path d="M86 188 C132 124, 184 116, 340 188" class="avg-curve"/>
      <path d="M88 204 C146 190, 214 76, 346 70" class="curve"/>
      <path d="M86 166 C134 126, 202 138, 340 174" class="var-curve"/>
      <circle cx="184" cy="116" r="4.8" class="point"/>
      <line x1="184" y1="116" x2="184" y2="220" class="guide-line"/>
      <text x="318" y="75" class="graph-label">marginal</text><text x="314" y="194" class="graph-label gold">medio</text><text x="305" y="166" class="graph-label blue">variable medio</text><text x="196" y="112" class="graph-label">mínimo</text>
      <text x="344" y="242" class="axis-label">producción y</text><text x="30" y="48" class="axis-label">costo</text>`,
    scale: `${common}
      <path d="M88 86 C154 91, 238 116, 340 170" class="curve"/>
      <path d="M88 176 C154 132, 238 105, 340 88" class="avg-curve"/>
      <line x1="92" y1="176" x2="92" y2="220" class="guide-line"/><line x1="306" y1="95" x2="306" y2="220" class="guide-line"/>
      <text x="216" y="84" class="graph-label">curva de aprendizaje</text><text x="232" y="179" class="graph-label gold">CMe por escala</text>
      <text x="320" y="242" class="axis-label">experiencia / escala</text><text x="30" y="48" class="axis-label">costo</text>`,
    monopoly: `${common}
      <path d="M86 70 L344 196" class="curve"/>
      <path d="M90 92 L318 216" class="var-curve"/>
      <line x1="82" y1="174" x2="346" y2="174" class="cost-line"/>
      <circle cx="210" cy="174" r="4.8" class="point"/>
      <line x1="210" y1="174" x2="210" y2="220" class="guide-line"/>
      <line x1="210" y1="174" x2="210" y2="130" class="guide-line"/>
      <text x="300" y="190" class="graph-label">D=P(Q)</text><text x="274" y="212" class="graph-label blue">IMg</text><text x="94" y="166" class="graph-label red">CMg</text><text x="218" y="126" class="graph-label">Pₘ</text><text x="214" y="190" class="graph-label">Qₘ</text>
      <text x="344" y="242" class="axis-label">cantidad Q</text><text x="35" y="48" class="axis-label">precio/costo</text>`,
    naturalmonopoly: `${common}
      <path d="M86 74 C150 98, 236 138, 344 190" class="avg-curve"/>
      <path d="M86 126 C152 136, 246 155, 346 174" class="cost-line"/>
      <path d="M86 66 L344 196" class="curve"/>
      <circle cx="230" cy="148" r="4.8" class="point"/>
      <text x="286" y="186" class="graph-label gold">CMe decreciente</text><text x="286" y="165" class="graph-label red">CMg bajo</text><text x="302" y="192" class="graph-label">demanda</text><text x="238" y="145" class="graph-label">escala eficiente</text>
      <text x="344" y="242" class="axis-label">usuarios Q</text><text x="35" y="48" class="axis-label">costo/precio</text>`,
    discrimination: `${common}
      <path d="M86 62 L344 200" class="curve"/>
      <line x1="88" y1="184" x2="344" y2="184" class="cost-line"/>
      <rect x="92" y="77" width="48" height="107" class="bar-a"/><rect x="142" y="104" width="48" height="80" class="bar-a"/><rect x="192" y="130" width="48" height="54" class="bar-a"/><rect x="242" y="157" width="48" height="27" class="bar-a"/>
      <text x="96" y="72" class="graph-label">P₁</text><text x="147" y="99" class="graph-label">P₂</text><text x="198" y="125" class="graph-label">P₃</text><text x="292" y="198" class="graph-label">D</text><text x="96" y="177" class="graph-label red">CMg</text>
      <text x="340" y="242" class="axis-label">unidades</text><text x="35" y="48" class="axis-label">precio</text>`,
    monopsony: `${common}
      <path d="M86 202 L344 72" class="curve"/>
      <path d="M92 220 L294 66" class="var-curve"/>
      <path d="M86 76 C150 112, 230 160, 344 210" class="cost-line"/>
      <circle cx="202" cy="142" r="4.8" class="point"/>
      <line x1="202" y1="142" x2="202" y2="220" class="guide-line"/>
      <text x="298" y="82" class="graph-label">Oferta w(L)</text><text x="255" y="95" class="graph-label blue">GMg</text><text x="290" y="202" class="graph-label red">VPMg</text><text x="210" y="137" class="graph-label">Lₘ</text>
      <text x="344" y="242" class="axis-label">factor L</text><text x="35" y="48" class="axis-label">salario/valor</text>`,
    concentration: `${common}
      <rect x="96" y="84" width="42" height="136" rx="4" class="bar-a"/><rect x="150" y="112" width="42" height="108" rx="4" class="bar-b"/><rect x="204" y="142" width="42" height="78" rx="4" class="bar-a"/><rect x="258" y="166" width="42" height="54" rx="4" class="bar-b"/>
      <line x1="86" y1="96" x2="344" y2="96" class="muted-line"/>
      <text x="96" y="78" class="graph-label">s₁²</text><text x="150" y="106" class="graph-label">s₂²</text><text x="204" y="136" class="graph-label">s₃²</text><text x="258" y="160" class="graph-label">s₄²</text><text x="252" y="90" class="graph-label">umbral alto</text>
      <text x="326" y="242" class="axis-label">empresas</text><text x="35" y="48" class="axis-label">participación</text>`,
    oligopoly: `${common}
      <path d="M86 70 L344 198" class="curve"/>
      <path d="M102 198 C148 150, 216 122, 326 96" class="var-curve"/>
      <path d="M104 210 C166 176, 238 138, 340 78" class="avg-curve"/>
      <circle cx="190" cy="136" r="4.8" class="point"/><circle cx="250" cy="111" r="4.8" class="point"/>
      <text x="292" y="194" class="graph-label">D</text><text x="255" y="98" class="graph-label blue">respuesta rival</text><text x="278" y="84" class="graph-label gold">mejor respuesta</text><text x="196" y="132" class="graph-label">qᵢ</text>
      <text x="336" y="242" class="axis-label">cantidad</text><text x="35" y="48" class="axis-label">precio</text>`,
    gamematrix: `<svg class="concept-chart" viewBox="0 0 420 270" role="img" aria-label="Matriz de pagos">
      <rect x="18" y="16" width="384" height="236" rx="10" class="graph-bg" />
      <rect x="96" y="62" width="250" height="160" class="grid-box" />
      <line x1="221" y1="62" x2="221" y2="222" class="axis"/><line x1="96" y1="142" x2="346" y2="142" class="axis"/>
      <text x="140" y="50" class="graph-label">Empresa B: Alto</text><text x="256" y="50" class="graph-label">Empresa B: Bajo</text><text x="24" y="108" class="axis-label">A: Alto</text><text x="24" y="188" class="axis-label">A: Bajo</text>
      <text x="142" y="110" class="graph-label">(50, 50)</text><text x="260" y="110" class="graph-label">(10, 100)</text><text x="142" y="190" class="graph-label">(100, 10)</text><text x="262" y="190" class="graph-label">(20, 20)</text>
      <circle cx="293" cy="186" r="5" class="point"/><text x="304" y="191" class="graph-label red">Nash</text>
    </svg>`,
    repeatedgame: `${common}
      <path d="M82 190 C120 190, 158 190, 196 190 C230 190, 272 122, 338 82" class="curve"/>
      <path d="M82 206 L338 206" class="cost-line"/>
      <line x1="196" y1="40" x2="196" y2="220" class="muted-line"/>
      <text x="92" y="184" class="graph-label">desvío hoy</text><text x="212" y="84" class="graph-label">cooperación si futuro importa</text><text x="205" y="214" class="graph-label red">castigo</text><text x="173" y="56" class="axis-label">δ crítico</text>
      <text x="344" y="242" class="axis-label">factor de descuento δ</text><text x="35" y="48" class="axis-label">valor esperado</text>`,
    asymmetric: `<svg class="concept-chart" viewBox="0 0 420 270" role="img" aria-label="Información asimétrica">
      <rect x="18" y="16" width="384" height="236" rx="10" class="graph-bg" />
      <rect x="44" y="92" width="92" height="58" rx="10" class="bar-a"/><rect x="166" y="92" width="92" height="58" rx="10" class="bar-b"/><rect x="288" y="92" width="92" height="58" rx="10" class="bar-a"/>
      <line x1="136" y1="121" x2="166" y2="121" class="axis"/><line x1="258" y1="121" x2="288" y2="121" class="axis"/>
      <text x="66" y="126" class="graph-label">Principal</text><text x="190" y="126" class="graph-label">Contrato</text><text x="317" y="126" class="graph-label">Agente</text>
      <path d="M90 170 C150 226, 280 226, 334 170" class="muted-line"/><text x="138" y="222" class="graph-label red">información privada</text><text x="54" y="188" class="axis-label">selección adversa: antes</text><text x="244" y="188" class="axis-label">riesgo moral: después</text>
    </svg>`
  };
  const selectedGraph = graphs[type] || graphs.production;
  return selectedGraph.startsWith("<svg") ? selectedGraph : `<svg class="concept-chart" viewBox="0 0 420 270" role="img" aria-label="Gráfico conceptual">${selectedGraph}</svg>`;
}

function graphMath(type) {
  const items = {
    production: [
      ["Función de producción", "\\[y=f(x)\\]"],
      ["Lectura del punto", "\\[x=x_A\\quad\\Longrightarrow\\quad y=f(x_A)\\]"]
    ],
    isoquant: [
      ["Isocuanta", "\\[f(x_1,x_2)=q_0\\]"],
      ["Tangencia", "\\[\\operatorname{RTS}_{12}=-\\frac{\\operatorname{PMg}_1}{\\operatorname{PMg}_2}=-\\frac{w_1}{w_2}\\]"]
    ],
    returns: [
      ["Crecientes", "\\[f(t x_1,t x_2)>t f(x_1,x_2)\\]"],
      ["Constantes", "\\[f(t x_1,t x_2)=t f(x_1,x_2)\\]"],
      ["Decrecientes", "\\[f(t x_1,t x_2)<t f(x_1,x_2)\\]"]
    ],
    opportunity: [
      ["Beneficio económico", "\\[\\pi_e=IT-C_{contable}-C_{oportunidad}\\]"],
      ["Costo económico", "\\[CE=C_{contable}+C_{oportunidad}\\]"]
    ],
    profit: [
      ["Regla del insumo", "\\[p\\cdot \\operatorname{PMg}_i=w_i\\]"],
      ["Regla de producción", "\\[\\operatorname{IMg}=\\operatorname{CMg}\\]"]
    ],
    costmin: [
      ["Isocosto", "\\[C=w_1x_1+w_2x_2\\]"],
      ["Condición de mínimo costo", "\\[\\operatorname{RTS}_{12}=-\\frac{w_1}{w_2}\\]"]
    ],
    costcurves: [
      ["Costo total", "\\[C(y)=C_v(y)+F\\]"],
      ["Costo marginal", "\\[\\operatorname{CMg}=\\frac{\\partial C}{\\partial y}\\]"],
      ["Cruce relevante", "\\[\\operatorname{CMg}=\\operatorname{CMe}\\quad\\text{en el mínimo de }\\operatorname{CMe}\\]"]
    ],
    scale: [
      ["Elasticidad costo-producto", "\\[EC=\\frac{\\operatorname{CMg}}{\\operatorname{CMe}}\\]"],
      ["Economías de escala", "\\[IEE=1-EC>0\\]"]
    ],
    marketpower: [
      ["Índice de Lerner", "\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]"],
      ["Demanda menos elástica", "\\[|\\varepsilon_d|\\downarrow\\quad\\Longrightarrow\\quad L\\uparrow\\]"],
      ["Fuentes principales", "\\[\\text{barreras}+\\text{diferenciación}+\\text{pocos rivales}\\]"]
    ],
    monopoly: [
      ["Decisión de cantidad", "\\[\\operatorname{IMg}(Q_m)=\\operatorname{CMg}(Q_m)\\]"],
      ["Precio de monopolio", "\\[P_m=P(Q_m)\\]"],
      ["Pérdida social", "\\[Q_m<Q_c\\quad\\text{y}\\quad P_m>\\operatorname{CMg}\\]"]
    ],
    naturalmonopoly: [
      ["Subaditividad de costos", "\\[C(Q)<C(q_1)+C(q_2)\\]"],
      ["Costo medio decreciente", "\\[\\frac{C(Q)}{Q}\\downarrow\\]"]
    ],
    discrimination: [
      ["Segmentos", "\\[\\max \\sum_i P_i(q_i)q_i-C\\!\\left(\\sum_i q_i\\right)\\]"],
      ["Regla por elasticidad", "\\[\\frac{P_i-\\operatorname{CMg}}{P_i}=\\frac{1}{|\\varepsilon_i|}\\]"]
    ],
    monopsony: [
      ["Oferta de factores", "\\[w=w(L)\\]"],
      ["Gasto marginal", "\\[\\operatorname{GMg}=w(L)+L\\frac{dw}{dL}\\]"],
      ["Óptimo del comprador", "\\[\\operatorname{VPMg}_L=\\operatorname{GMg}\\]"]
    ],
    concentration: [
      ["Índice de Lerner", "\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]"],
      ["Concentración de cuatro firmas", "\\[CR4=s_1+s_2+s_3+s_4\\]"],
      ["Herfindahl-Hirschman", "\\[HHI=\\sum_{i=1}^{n}s_i^2\\]"]
    ],
    oligopoly: [
      ["Cantidad total", "\\[Q=q_i+q_{-i}\\]"],
      ["Beneficio de la firma", "\\[\\pi_i=P(Q)q_i-C_i(q_i)\\]"],
      ["Mejor respuesta", "\\[q_i^*=R_i(q_{-i})\\]"]
    ],
    gamematrix: [
      ["Juego normal", "\\[G=\\{N,S,u\\}\\]"],
      ["Pago del jugador", "\\[u_i(s_i,s_{-i})\\]"]
    ],
    dominant: [
      ["Dominancia", "\\[u_i(s_i^*,s_{-i})\\ge u_i(s_i,s_{-i})\\quad\\forall s_{-i}\\]"],
      ["Equilibrio dominante", "\\[s^*=(s_1^*,s_2^*)\\]"]
    ],
    repeatedgame: [
      ["Valor presente", "\\[VA=\\sum_{t=0}^{T}\\delta^t\\pi_t\\]"],
      ["Cooperación sostenible", "\\[VA_{coop}\\ge VA_{desviar}\\]"]
    ],
    asymmetric: [
      ["Selección adversa", "\\[E(\\text{tipo}\\mid\\text{contrato})\\ne E(\\text{tipo})\\]"],
      ["Riesgo moral", "\\[a\\ \\text{no observable después del contrato}\\]"],
      ["Agente-principal", "\\[\\max_{contrato}\\ E(\\pi_P)\\quad\\text{s.a. incentivos del agente}\\]"]
    ]
  };

  return (items[type] || items.production).map(([label, formula]) => `
    <div class="math-legend-item">
      <span>${escapeHtml(label)}</span>
      <div>${escapeHtml(formula)}</div>
    </div>
  `).join("");
}

function renderTopics() {
  const weekTopics = topics.filter((topic) => topic.week === state.weekId);
  topicList.innerHTML = weekTopics.map((topic, index) => `
    <button class="module-card ${topic.id === state.topicId ? "active" : ""} ${state.viewed.has(topic.id) ? "done" : ""}" data-topic="${topic.id}">
      <small>${weekLabel(topic.week)}</small>
      <h3>${index + 1}. ${topic.title}</h3>
      <span>${topic.question}</span>
    </button>
  `).join("");
}

function renderWeekTabs() {
  weekTabs.innerHTML = weeks.map((week) => `
    <button class="week-tab ${week.id === state.weekId ? "active" : ""}" data-week="${week.id}">
      <span>${escapeHtml(week.label)}</span>
      <strong>${escapeHtml(week.title)}</strong>
    </button>
  `).join("");
}

function isFinanceUnifiedExamWeek() {
  return state.courseId === "analisis-estados-financieros";
}

function configureWeekModeTabs() {
  const isFinanceWeek = isFinanceUnifiedExamWeek();
  const hasPractice = practiceBank(state.weekId).length > 0;
  const hasBalancePractice = state.courseId === "analisis-estados-financieros" && state.weekId === "aef-semana-02";
  const learnButton = document.querySelector('.week-mode-btn[data-section="learn"]');
  const theoryButton = document.querySelector('.week-mode-btn[data-section="theory"]');
  const balanceButton = document.querySelector('.week-mode-btn[data-section="balance"]');
  const practiceButton = document.querySelector('.week-mode-btn[data-section="practice"]');
  const theoryEyebrow = document.querySelector("#theory .section-head .eyebrow");
  const theoryTitle = document.querySelector("#theoryTitle");
  const theoryIntro = document.querySelector("#theory .section-head > div > p:not(.eyebrow)");
  const hubIntro = document.querySelector(".study-hub-head div > p:not(.eyebrow)");
  const topic = currentTopic();

  if (learnButton) {
    learnButton.hidden = false;
    learnButton.textContent = isFinanceWeek ? "Guía" : "Guía / teoría";
  }
  if (practiceButton) {
    practiceButton.hidden = isFinanceWeek && !hasPractice;
    practiceButton.textContent = isFinanceWeek ? "Práctica" : "Ejercicios prácticos";
  }
  if (theoryButton) {
    theoryButton.hidden = false;
    theoryButton.textContent = isFinanceWeek ? "Examen" : "Examen teórico";
  }
  if (balanceButton) {
    balanceButton.hidden = !hasBalancePractice;
    balanceButton.textContent = "Balance General";
  }

  if (theoryEyebrow) theoryEyebrow.textContent = isFinanceWeek ? weekLabel(state.weekId) : "Examen de teoría";
  if (theoryTitle) {
    theoryTitle.innerHTML = isFinanceWeek
      ? '<span class="title-icon">🧠</span> Examen'
      : '<span class="title-icon">🧠</span> Examen de teoría';
  }
  if (theoryIntro) {
    theoryIntro.textContent = isFinanceWeek
      ? (topic.intro || "Practica los conceptos principales de la semana con preguntas de opción múltiple.")
      : "Comprueba definiciones, intuición económica y condiciones de optimización.";
  }
  if (hubIntro) {
    hubIntro.textContent = isFinanceWeek
      ? "Selecciona la semana, estudia su guía y resuelve el examen o la práctica cuando corresponda."
      : "Selecciona una semana y trabaja su guía, examen teórico o ejercicios prácticos desde un solo lugar.";
  }
}

function selectWeek(weekId) {
  if (!weeks.some((week) => week.id === weekId)) return;
  state.weekId = weekId;
  const firstTopic = topics.find((topic) => topic.week === weekId) || topics[0];
  state.topicId = firstTopic.id;
  document.querySelector("#theoryWeek").value = weekId;
  document.querySelector("#practiceWeek").value = weekId;
  renderWeekTabs();
  renderTopics();
  renderGuide();
  renderChoiceQuiz(weekId, state.theoryLevel);
  renderPracticeQuiz(weekId, state.practiceLevel);
  renderBalancePracticeArea();
  configureWeekModeTabs();
  activateSection("learn");
}

function renderMarketPowerWeekGuide() {
  return String.raw`
    <article class="week-guide">
      <section class="week-hero">
        <span class="eyebrow">Unidad 1</span>
        <h2>Semana 1: El poder de mercado de un agente económico</h2>
        <p class="week-subtitle">Poder de mercado, monopolio, elasticidad precio de la demanda e ingreso marginal.</p>
        <p>En esta semana se estudia cómo una empresa puede influir sobre el precio de mercado, cuáles son las fuentes del poder de mercado y por qué la elasticidad de la demanda es clave para entender las decisiones de producción y precios.</p>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>01</span>
          <h3>Fuentes del poder de mercado</h3>
          <p>El poder de mercado aparece cuando una empresa no toma el precio como dado, sino que puede influir sobre él mediante sus decisiones de producción, precio o estrategia.</p>
        </div>
        <div class="source-grid">
          <article class="study-card"><div class="card-icon">E</div><h4>Elasticidad de la demanda</h4><p>Cuanto menos sensible sea la cantidad demandada frente a cambios en el precio, mayor capacidad tendrá la empresa para subir precios sin perder muchos compradores.</p><strong>Idea clave: demanda menos elástica, mayor margen posible.</strong><small>Ejemplo: un medicamento sin sustitutos suele permitir mayor margen que una bebida con muchas alternativas.</small></article>
          <article class="study-card"><div class="card-icon">N</div><h4>Número de empresas</h4><p>Cuantas menos empresas existan, mayor será la posibilidad de que una firma influya en el precio o en la cantidad del mercado.</p><strong>Idea clave: menos rivales, mayor influencia.</strong><small>Ejemplo: un proveedor único de un servicio local pesa más que un vendedor en un mercado con muchos competidores.</small></article>
          <article class="study-card"><div class="card-icon">R</div><h4>Relación entre empresas</h4><p>Si las empresas compiten agresivamente, el poder de mercado disminuye. Si coordinan, coluden o actúan estratégicamente, puede aumentar.</p><strong>Idea clave: la conducta estratégica también crea poder.</strong><small>Ejemplo: dos firmas que evitan guerras de precios pueden sostener precios más altos.</small></article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>02</span><h3>¿Por qué aparece un monopolio?</h3><p>Un monopolio puede surgir por la tecnología de costos, por coordinación entre empresas o por ventajas acumuladas por una firma que llegó primero.</p></div>
        <div class="cause-grid">
          <article class="cause-card"><h4>Escala Mínima Eficiente y demanda</h4><p>La Escala Mínima Eficiente es el nivel de producción donde una empresa alcanza costos medios bajos. Si esa escala es muy grande frente a la demanda total, puede ser eficiente que solo una o pocas empresas produzcan.</p></article>
          <article class="cause-card"><h4>Colusión o cártel</h4><p>Varias empresas pueden coordinarse para actuar como si fueran una sola empresa monopólica, reduciendo la competencia y elevando precios.</p></article>
          <article class="cause-card"><h4>Productor histórico</h4><p>La primera empresa en posicionarse puede ganar ventajas de marca, experiencia, infraestructura, clientes o acceso a canales de distribución.</p></article>
        </div>
        <div class="chart-pair">
          <figure class="econ-diagram"><figcaption>Gráfico A: Mercado competitivo</figcaption><svg viewBox="0 0 760 420" role="img" aria-label="Diagrama económico de EME en mercado competitivo"><defs><marker id="arrow-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#111"/></marker></defs><line x1="82" y1="342" x2="710" y2="342" class="econ-axis" marker-end="url(#arrow-a)"/><line x1="82" y1="342" x2="82" y2="50" class="econ-axis" marker-end="url(#arrow-a)"/><text x="56" y="58" class="econ-var">p</text><text x="710" y="378" class="econ-var">y</text><line x1="118" y1="82" x2="676" y2="298" class="econ-demand"/><path d="M126 132C154 218 184 245 220 245C258 245 292 214 326 134" class="econ-cme"/><line x1="82" y1="245" x2="540" y2="245" class="econ-guide"/><line x1="220" y1="245" x2="220" y2="342" class="econ-guide"/><line x1="540" y1="245" x2="540" y2="342" class="econ-guide"/><circle cx="220" cy="245" r="7" class="econ-point"/><circle cx="540" cy="245" r="7" class="econ-point"/><text x="94" y="235" class="econ-label">P*</text><text x="198" y="372" class="econ-label">EME</text><text x="528" y="372" class="econ-label">y*</text><text x="575" y="282" class="econ-label">Demanda</text><text x="266" y="150" class="econ-label">CMe</text></svg></figure>
          <figure class="econ-diagram"><figcaption>Gráfico B: Mercado concentrado o monopólico</figcaption><svg viewBox="0 0 760 420" role="img" aria-label="Diagrama económico de EME en mercado concentrado"><defs><marker id="arrow-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#111"/></marker></defs><line x1="82" y1="342" x2="710" y2="342" class="econ-axis" marker-end="url(#arrow-b)"/><line x1="82" y1="342" x2="82" y2="50" class="econ-axis" marker-end="url(#arrow-b)"/><text x="56" y="58" class="econ-var">p</text><text x="710" y="378" class="econ-var">y</text><line x1="118" y1="82" x2="676" y2="298" class="econ-demand"/><path d="M142 110C210 214 292 245 382 245C470 245 560 216 632 116" class="econ-cme"/><line x1="82" y1="245" x2="540" y2="245" class="econ-guide"/><line x1="382" y1="245" x2="382" y2="342" class="econ-guide"/><line x1="540" y1="245" x2="540" y2="342" class="econ-guide"/><circle cx="382" cy="245" r="7" class="econ-point"/><circle cx="540" cy="245" r="7" class="econ-point"/><text x="94" y="235" class="econ-label">P*</text><text x="358" y="372" class="econ-label">EME</text><text x="528" y="372" class="econ-label">y*</text><text x="575" y="282" class="econ-label">Demanda</text><text x="590" y="130" class="econ-label">CMe</text></svg></figure>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>03</span><h3>Elasticidad precio de la demanda</h3><p>La elasticidad precio de la demanda mide la variación porcentual de la cantidad demandada dividida entre la variación porcentual del precio.</p></div>
        <div class="formula-highlight"><div>\[\varepsilon_{q,p}=\frac{\%\Delta q}{\%\Delta p}\]</div><div>\[\varepsilon=\frac{\Delta q}{\Delta p}\cdot\frac{\bar p}{\bar q}\]</div></div>
        <div class="text-columns"><p>La pendiente no es suficiente para medir sensibilidad porque depende de las unidades de medida. Si la cantidad se mide en litros o hectolitros, la pendiente cambia.</p><p>La elasticidad corrige ese problema porque mide cambios porcentuales. Suele ser negativa porque precio y cantidad demandada se mueven en sentido contrario; para clasificarla se usa \(|\varepsilon|\).</p></div>
        <aside class="key-idea"><strong>Idea clave</strong><p>La pendiente mide cambios en unidades. La elasticidad mide cambios porcentuales. Por eso la elasticidad permite comparar mejor la sensibilidad de distintos mercados.</p></aside>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>04</span><h3>Determinantes de la elasticidad</h3></div>
        <div class="responsive-table"><table><thead><tr><th>Determinante</th><th>Efecto sobre elasticidad</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Sustituibilidad del bien</td><td>Más sustitutos disponibles → demanda más elástica.</td><td>Una marca de café enfrenta sustitutos cercanos.</td></tr><tr><td>Generalidad del bien</td><td>Un bien general suele tener demanda menos elástica; uno específico, más elástica.</td><td>Alimentos en general vs. una variedad específica.</td></tr><tr><td>Porcentaje del ingreso</td><td>Mayor proporción del ingreso destinada al bien → mayor elasticidad.</td><td>Un auto pesa más que una goma de mascar.</td></tr><tr><td>Tiempo</td><td>A mayor tiempo para adaptarse → mayor elasticidad.</td><td>Con gasolina cara, después se puede cambiar de transporte.</td></tr><tr><td>Bienes esenciales</td><td>Cuanto más necesario sea un bien → menor elasticidad.</td><td>Medicinas urgentes o servicios básicos.</td></tr></tbody></table></div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>05</span><h3>Tipos de elasticidad</h3></div>
        <div class="responsive-table"><table><thead><tr><th>Tipo</th><th>Condición</th><th>Interpretación</th><th>Ejemplo</th></tr></thead><tbody><tr><td>Elástica</td><td><span class="math-badge">\(|\varepsilon|>1\)</span></td><td>La cantidad cambia proporcionalmente más que el precio.</td><td>Bienes con sustitutos.</td></tr><tr><td>Inelástica</td><td><span class="math-badge">\(0<|\varepsilon|<1\)</span></td><td>La cantidad cambia proporcionalmente menos que el precio.</td><td>Medicinas necesarias.</td></tr><tr><td>Unitaria</td><td><span class="math-badge">\(|\varepsilon|=1\)</span></td><td>Cantidad y precio cambian proporcionalmente igual.</td><td>Punto específico de una demanda lineal.</td></tr><tr><td>Perfectamente elástica</td><td><span class="math-badge">\(|\varepsilon|=\infty\)</span></td><td>A un precio dado se demanda cualquier cantidad.</td><td>Caso teórico.</td></tr><tr><td>Perfectamente inelástica</td><td><span class="math-badge">\(|\varepsilon|=0\)</span></td><td>La cantidad no cambia aunque cambie el precio.</td><td>Bien extremadamente necesario sin sustitutos.</td></tr></tbody></table></div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>06</span><h3>Elasticidad en una demanda lineal</h3><p>En una demanda lineal, la pendiente es constante, pero la elasticidad cambia dependiendo del punto de la curva.</p></div>
        <p>La pendiente no es igual a la elasticidad. La pendiente mide la relación entre cambios absolutos de precio y cantidad, mientras que la elasticidad mide cambios porcentuales.</p>
        <figure class="svg-chart-card wide-chart"><figcaption>Demanda lineal y zonas de elasticidad</figcaption><svg viewBox="0 0 920 460" role="img" aria-label="Demanda lineal con zonas de elasticidad"><rect x="18" y="18" width="884" height="424" rx="20" class="svg-panel"/><g class="chart-grid"><path d="M110 360H800 M110 300H800 M110 240H800 M110 180H800 M110 120H800 M110 60H800"/><path d="M190 60V360 M290 60V360 M390 60V360 M490 60V360 M590 60V360 M690 60V360"/></g><path d="M108 362H820" class="axis-line"/><path d="M110 364V52" class="axis-line"/><text x="64" y="64" class="axis-label">Precio p</text><text x="760" y="404" class="axis-label">Cantidad q</text><path d="M148 76L760 360" class="demand-line thick"/><circle cx="148" cy="76" r="8" class="point-green"/><circle cx="300" cy="146" r="7" class="point-green"/><circle cx="454" cy="218" r="8" class="point-orange"/><circle cx="620" cy="294" r="7" class="point-green"/><circle cx="760" cy="360" r="8" class="point-green"/><text x="170" y="82" class="elastic-label">Perfectamente elástica |ε| = ∞</text><text x="330" y="132" class="elastic-label">Elástica |ε| &gt; 1</text><text x="478" y="218" class="elastic-label">Unitaria |ε| = 1</text><text x="642" y="292" class="elastic-label">Inelástica 0 &lt; |ε| &lt; 1</text><text x="520" y="382" class="elastic-label">Perfectamente inelástica |ε| = 0</text></svg></figure>
        <aside class="common-error"><strong>Error común</strong><p>Creer que pendiente y elasticidad son lo mismo. En una demanda lineal la pendiente es constante, pero la elasticidad cambia a lo largo de la curva.</p></aside>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>07</span><h3>Elasticidad e ingreso marginal</h3><p>El ingreso marginal mide cuánto cambia el ingreso total cuando se vende una unidad adicional.</p></div>
        <div class="formula-highlight"><div>\[IMg=\frac{\Delta IT}{\Delta q}\]</div><div>\[IT=p\cdot q\]</div><div>\[IMg=p\left(1-\frac{1}{|\varepsilon|}\right)\]</div></div>
        <div class="mr-grid"><article class="mr-card positive"><h4>Demanda elástica</h4><span>\(|\varepsilon|>1\)</span><strong>IMg positivo</strong><p>Al aumentar \(q\), el ingreso total aumenta.</p></article><article class="mr-card neutral"><h4>Demanda unitaria</h4><span>\(|\varepsilon|=1\)</span><strong>IMg = 0</strong><p>El ingreso total está en su máximo.</p></article><article class="mr-card negative"><h4>Demanda inelástica</h4><span>\(0<|\varepsilon|<1\)</span><strong>IMg negativo</strong><p>Al aumentar \(q\), el ingreso total disminuye.</p></article></div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>08</span><h3>¿Cómo se fija el precio?</h3><p>Una empresa busca elegir el precio y la cantidad que le generen mayor beneficio.</p></div>
        <div class="formula-highlight"><div>\[\pi=IT-CT\]</div><div>\[\frac{\Delta\pi}{\Delta q}=IMg-\frac{\Delta CT}{\Delta q}\]</div></div>
        <p>Si la empresa aumenta producción en una zona inelástica, el ingreso marginal cae, los costos aumentan y los beneficios pueden caer.</p>
        <div class="flow-diagram" aria-label="Flujo de fijación de precios"><span>Aumenta \(q\)</span><span>baja \(p\)</span><span>IMg cae</span><span>costos suben</span><span>beneficios caen</span></div>
        <aside class="key-idea"><strong>Conclusión</strong><p>Una empresa con poder de mercado no debería producir en la parte inelástica de la demanda si busca maximizar beneficios, porque vender más exige bajar el precio y el ingreso adicional puede ser negativo.</p></aside>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>09</span><h3>Ingreso marginal en una demanda lineal inversa</h3></div>
        <div class="derivation-box"><div>\[p=a-bq\]</div><div>\[IT=p\cdot q\]</div><div>\[IT=(a-bq)q=aq-bq^2\]</div><div>\[IMg=a-2bq\]</div></div>
        <p>La demanda inversa representa el ingreso medio. El ingreso marginal tiene el mismo intercepto vertical que la demanda, pero el doble de pendiente; por eso corta el eje de cantidad en la mitad. Con demanda negativa, el precio es mayor que el ingreso marginal.</p>
        <figure class="svg-chart-card wide-chart"><figcaption>Demanda inversa e ingreso marginal</figcaption><svg viewBox="0 0 880 430" role="img" aria-label="Demanda inversa e ingreso marginal"><rect x="18" y="18" width="844" height="394" rx="20" class="svg-panel"/><g class="chart-grid"><path d="M100 340H780 M100 280H780 M100 220H780 M100 160H780 M100 100H780"/><path d="M190 72V340 M300 72V340 M410 72V340 M520 72V340 M630 72V340 M740 72V340"/></g><path d="M98 342H796" class="axis-line"/><path d="M100 344V64" class="axis-line"/><text x="42" y="74" class="axis-label">Precio / Ingreso</text><text x="730" y="382" class="axis-label">Cantidad</text><path d="M100 88L720 340" class="demand-line thick"/><path d="M100 88L410 340" class="marginal-line thick"/><circle cx="100" cy="88" r="7" class="point-green"/><circle cx="410" cy="340" r="7" class="point-orange"/><circle cx="720" cy="340" r="7" class="point-green"/><text x="74" y="82" class="chart-label">a</text><text x="646" y="234" class="chart-label demand-text">D = IMe</text><text x="306" y="218" class="chart-label mr-text">IMg</text><text x="384" y="374" class="chart-label">a/2b</text><text x="698" y="374" class="chart-label">a/b</text></svg></figure>
      </section>

      <section class="guide-section summary-guide">
        <div class="section-heading"><span>10</span><h3>Resumen de la guía</h3></div>
        <ul><li>El poder de mercado es la capacidad de influir en el precio.</li><li>Sus fuentes principales son elasticidad de la demanda, número de empresas y relación entre empresas.</li><li>El monopolio puede aparecer por escala mínima eficiente, colusión o ventaja del productor histórico.</li><li>La elasticidad mide sensibilidad en términos porcentuales.</li><li>En una demanda lineal, la elasticidad cambia a lo largo de la curva.</li><li>El ingreso marginal depende de la elasticidad.</li><li>Si la demanda es elástica, el ingreso marginal es positivo.</li><li>Si la demanda es unitaria, el ingreso marginal es cero.</li><li>Si la demanda es inelástica, el ingreso marginal es negativo.</li><li>Si \(p=a-bq\), entonces \(IMg=a-2bq\).</li></ul>
      </section>
    </article>
  `;
}

function economicGraphScales({ width = 640, height = 420, pad = 58, xMax = 100, yMax = 100 } = {}) {
  const plotW = width - pad * 2;
  const plotH = height - pad * 2;
  return {
    width,
    height,
    pad,
    xMax,
    yMax,
    x: (value) => pad + (value / xMax) * plotW,
    y: (value) => height - pad - (value / yMax) * plotH
  };
}

function econLine(scale, x1, y1, x2, y2, className) {
  return `<line x1="${scale.x(x1)}" y1="${scale.y(y1)}" x2="${scale.x(x2)}" y2="${scale.y(y2)}" class="${className}"/>`;
}

function econGuide(scale, x1, y1, x2, y2) {
  return econLine(scale, x1, y1, x2, y2, "econ-guide");
}

function econPoint(scale, x, y, label = "", dx = 6, dy = -8) {
  return `<circle cx="${scale.x(x)}" cy="${scale.y(y)}" r="5" class="econ-point"/>${label ? econLabel(scale, x, y, label, dx, dy) : ""}`;
}

function econLabel(scale, x, y, text, dx = 0, dy = 0, className = "econ-label") {
  return `<text x="${scale.x(x) + dx}" y="${scale.y(y) + dy}" class="${className}">${text}</text>`;
}

function econPolygon(scale, points, className) {
  return `<polygon points="${points.map(([x, y]) => `${scale.x(x)},${scale.y(y)}`).join(" ")}" class="${className}"/>`;
}

function econRect(scale, x1, y1, x2, y2, className) {
  const left = Math.min(scale.x(x1), scale.x(x2));
  const top = Math.min(scale.y(y1), scale.y(y2));
  return `<rect x="${left}" y="${top}" width="${Math.abs(scale.x(x2)-scale.x(x1))}" height="${Math.abs(scale.y(y2)-scale.y(y1))}" class="${className}"/>`;
}

function econAxes(scale, id, yLabel = "P", xLabel = "Y") {
  return `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#111"/></marker></defs>
    <line x1="${scale.pad}" y1="${scale.height - scale.pad}" x2="${scale.width - scale.pad + 20}" y2="${scale.height - scale.pad}" class="econ-axis" marker-end="url(#${id})"/>
    <line x1="${scale.pad}" y1="${scale.height - scale.pad}" x2="${scale.pad}" y2="${scale.pad - 22}" class="econ-axis" marker-end="url(#${id})"/>
    <text x="${scale.pad - 30}" y="${scale.pad - 14}" class="econ-var">${yLabel}</text>
    <text x="${scale.width - scale.pad + 20}" y="${scale.height - scale.pad + 34}" class="econ-var">${xLabel}</text>`;
}

function economicGraphCard(title, description, svg, note = "") {
  return `<figure class="economic-graph-card">
    <figcaption>
      <strong>${title}</strong>
      <span>${description}</span>
    </figcaption>
    ${svg}
    ${note ? `<p>${note}</p>` : ""}
  </figure>`;
}

function latexGraphCard(title, description, fileName, alt, note = "") {
  return economicGraphCard(
    title,
    description,
    `<img class="econ-svg-img" src="public/econ-graphs/${fileName}.svg" alt="${alt}" loading="lazy">`,
    note
  );
}

function latexGraphPairCard(title, description, graphs, note = "") {
  const images = graphs.map((graph) => `
    <img class="econ-svg-img" src="public/econ-graphs/${graph.file}.svg" alt="${graph.alt}" loading="lazy">
  `).join("");
  return economicGraphCard(title, description, `<div class="mini-graph-grid">${images}</div>`, note);
}

function economicSvg(id, inner, ariaLabel, options = {}) {
  const scale = economicGraphScales(options);
  return `<svg viewBox="0 0 ${scale.width} ${scale.height}" role="img" aria-label="${ariaLabel}">${econAxes(scale, id, options.yLabel || "P", options.xLabel || "Y")}${inner(scale)}</svg>`;
}

function monopolySvg(kind) {
  const graphMap = {
    max: {
      title: "Elección de producción",
      description: "El monopolista expande producción mientras el ingreso marginal supere al costo marginal.",
      file: "monopoly-production",
      alt: "Diagrama TikZ de elección de producción del monopolio con IMg, CMg e y estrella",
      note: "El óptimo se ubica donde la contribución marginal neta se vuelve cero."
    },
    linear: {
      title: "Equilibrio y beneficios",
      description: "La cantidad se determina por IMg = CMg; el precio se lee sobre la demanda.",
      file: "monopoly-linear-demand-profit",
      alt: "Diagrama TikZ de demanda lineal, ingreso marginal, costos y beneficio del monopolista",
      note: "El rectángulo sombreado muestra \\((P_m-CMe)Y_m\\)."
    },
    exercise: {
      title: "Ejercicio 1",
      description: "Demanda inversa, ingreso marginal y beneficio del monopolista.",
      file: "exercise-1-monopoly",
      alt: "Diagrama TikZ del ejercicio D de p igual a 100 menos 2p y C de y igual a 2y",
      note: "El equilibrio se obtiene de \\(50-y=2\\), por eso \\(y=48\\) y \\(P=26\\)."
    },
    welfare: {
      title: "Ineficiencia asignativa",
      description: "El monopolio cobra más y vende menos que la asignación competitiva.",
      file: "monopoly-deadweight-loss",
      alt: "Diagrama TikZ de monopolio, excedentes y pérdida irrecuperable de eficiencia",
      note: "El triángulo sombreado es excedente que desaparece: no lo recibe ni el consumidor ni el productor."
    },
    producerloss: {
      title: "Ejercicio 4",
      description: "Separación entre transferencia al productor y pérdida de eficiencia.",
      file: "exercise-4-surplus",
      alt: "Diagrama TikZ de excedente del productor y pérdida de excedente del consumidor",
      note: "El área A cambia de manos; el área B se pierde para la sociedad."
    },
    perfect: {
      title: "Demanda perfectamente elástica",
      description: "Cuando la firma enfrenta una demanda horizontal, el precio disciplina el margen.",
      file: "perfectly-elastic-demand",
      alt: "Diagrama TikZ de demanda perfectamente elástica e intersección con costo marginal",
      note: "El resultado se aproxima a competencia perfecta porque \\(P=IMg\\)."
    }
  };
  if (graphMap[kind]) {
    const graph = graphMap[kind];
    return latexGraphCard(graph.title, graph.description, graph.file, graph.alt, graph.note);
  }
  if (kind === "nosupply") {
    return latexGraphPairCard(
      "La oferta en monopolio",
      "No existe una curva de oferta única: el resultado depende de la forma de la demanda.",
      [
        { file: "monopoly-no-supply-a", alt: "Diagrama TikZ donde cambia el precio sin cambiar la cantidad en monopolio" },
        { file: "monopoly-no-supply-b", alt: "Diagrama TikZ donde cambia la cantidad sin cambiar el precio en monopolio" }
      ],
      "Una misma condición de costos puede asociarse con cambios de precio, cantidad o ambos."
    );
  }
  if (kind === "cost") {
    return latexGraphPairCard(
      "Aumento del costo marginal",
      "El alza de costos desplaza el óptimo: sube el precio y baja la cantidad.",
      [
        { file: "marginal-cost-increase-consumer-surplus", alt: "Diagrama TikZ del efecto de un aumento del costo marginal en el excedente del consumidor" },
        { file: "marginal-cost-increase-profit", alt: "Diagrama TikZ del efecto de un aumento del costo marginal en el beneficio del monopolista" }
      ],
      "Al aumentar CMg, cae el excedente del consumidor y también se reduce el margen total disponible."
    );
  }
  return "";

  if (kind === "max") {
    const svg = economicSvg("mono-max-arrow", (s) => {
      const yStar = 52;
      const cStar = 44;
      return `
        ${econLine(s, 8, 82, 94, 10, "econ-mr")}
        <path d="M${s.x(7)} ${s.y(18)} C ${s.x(24)} ${s.y(24)}, ${s.x(38)} ${s.y(34)}, ${s.x(52)} ${s.y(44)} C ${s.x(70)} ${s.y(58)}, ${s.x(84)} ${s.y(70)}, ${s.x(96)} ${s.y(82)}" class="econ-mc"/>
        ${econGuide(s, yStar, cStar, yStar, 0)}
        ${econPoint(s, yStar, cStar, "IMg = CMg", 8, -8)}
        ${econLabel(s, yStar, 0, "y*", -8, 24)}
        ${econLabel(s, 18, 55, "CMg < IMg", 0, 0, "econ-label good-zone")}
        ${econLabel(s, 15, 48, "sigo produciendo", 0, 0, "econ-label good-zone")}
        ${econLabel(s, 66, 35, "CMg > IMg", 0, 0, "econ-label bad-zone")}
        ${econLabel(s, 66, 28, "no sigo produciendo", 0, 0, "econ-label bad-zone")}
        ${econLabel(s, 86, 16, "IMg", 0, 0, "econ-label mr-text")}
        ${econLabel(s, 86, 82, "CMg", 0, 0, "econ-label mc-text")}
      `;
    }, "Elección de producción del monopolio", { yLabel: "C", xLabel: "y" });
    return economicGraphCard("Elección de producción", "El monopolista expande producción mientras el ingreso marginal supere al costo marginal.", svg, "El óptimo se ubica donde la contribución marginal neta se vuelve cero.");
  }

  if (kind === "linear") {
    const svg = economicSvg("mono-linear-arrow", (s) => {
      const ym = 44, pm = 64, cme = 36, cmg = 48;
      return `
        ${econRect(s, 0, cme, ym, pm, "profit-area")}
        ${econLine(s, 6, 88, 96, 12, "econ-demand")}
        ${econLine(s, 6, 88, 52, 0, "econ-mr")}
        <path d="M${s.x(7)} ${s.y(46)} C ${s.x(22)} ${s.y(26)}, ${s.x(38)} ${s.y(30)}, ${s.x(52)} ${s.y(38)} C ${s.x(66)} ${s.y(48)}, ${s.x(80)} ${s.y(55)}, ${s.x(94)} ${s.y(58)}" class="econ-cme"/>
        <path d="M${s.x(8)} ${s.y(24)} C ${s.x(30)} ${s.y(30)}, ${s.x(52)} ${s.y(48)}, ${s.x(94)} ${s.y(72)}" class="econ-mc"/>
        ${econGuide(s, ym, 0, ym, pm)}
        ${econGuide(s, 0, pm, ym, pm)}
        ${econGuide(s, 0, cme, ym, cme)}
        ${econPoint(s, ym, pm, "Pm", 8, -8)}
        ${econPoint(s, ym, cme, "CMe", 8, 14)}
        ${econPoint(s, ym, cmg, "", 0, 0)}
        ${econLabel(s, ym, 0, "ym", -8, 24)}
        ${econLabel(s, 70, 33, "Demanda", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 42, 12, "IMg", 0, 0, "econ-label mr-text")}
        ${econLabel(s, 79, 74, "CMg", 0, 0, "econ-label mc-text")}
        ${econLabel(s, 78, 54, "CMe", 0, 0, "econ-label cme-text")}
        ${econLabel(s, 17, 51, "Beneficio", 0, 0)}
      `;
    }, "Equilibrio y beneficios con demanda lineal");
    return economicGraphCard("Equilibrio y beneficios", "La cantidad se determina por IMg = CMg; el precio se lee sobre la demanda.", svg, "El rectángulo sombreado muestra \\((P_m-CMe)Y_m\\).");
  }

  if (kind === "exercise") {
    const svg = economicSvg("mono-ex-arrow", (s) => {
      const ym = 48, pm = 26, c = 2;
      return `
        ${econRect(s, 0, c, ym, pm, "profit-area")}
        ${econLine(s, 0, 50, 100, 0, "econ-demand")}
        ${econLine(s, 0, 50, 50, 0, "econ-mr")}
        ${econLine(s, 0, c, 100, c, "econ-mc-flat")}
        ${econGuide(s, ym, 0, ym, pm)}
        ${econGuide(s, 0, pm, ym, pm)}
        ${econGuide(s, 0, c, ym, c)}
        ${econPoint(s, ym, pm, "P=26", 8, -8)}
        ${econPoint(s, ym, c, "CMe=2", 8, 16)}
        ${econLabel(s, ym, 0, "y=48", -14, 24)}
        ${econLabel(s, 64, 18, "P = 50 - y/2", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 33, 15, "IMg = 50 - y", 0, 0, "econ-label mr-text")}
        ${econLabel(s, 73, c, "CMg = CMe = 2", 0, -6, "econ-label mc-text")}
        ${econLabel(s, 18, 15, "π = (26 - 2)48 = 1,152", 0, 0)}
      `;
    }, "Ejercicio D(p)=100-2p y C(y)=2y", { yMax: 55 });
    return economicGraphCard("Ejercicio 1", "Demanda inversa, ingreso marginal y beneficio del monopolista.", svg, "El equilibrio se obtiene de \\(50-y=2\\), por eso \\(y=48\\) y \\(P=26\\).");
  }

  if (kind === "nosupply") {
    const mini = (variant) => economicSvg(`mono-nosupply-${variant}`, (s) => {
      if (variant === "a") {
        const y = 48;
        return `
          ${econLine(s, 5, 88, 95, 22, "econ-demand")}
          ${econLine(s, 5, 72, 95, 6, "econ-demand secondary-demand")}
          ${econLine(s, 5, 88, 48, 0, "econ-mr")}
          ${econLine(s, 5, 72, 48, 0, "econ-mr secondary-mr")}
          <path d="M${s.x(10)} ${s.y(18)} C ${s.x(30)} ${s.y(26)}, ${s.x(48)} ${s.y(38)}, ${s.x(80)} ${s.y(58)}" class="econ-mc"/>
          ${econGuide(s, y, 0, y, 60)}
          ${econGuide(s, 0, 60, y, 60)}
          ${econGuide(s, 0, 44, y, 44)}
          ${econPoint(s, y, 60, "P1", 8, -6)}
          ${econPoint(s, y, 44, "P2", 8, 12)}
          ${econLabel(s, y, 0, "y1,2", -12, 24)}
          ${econLabel(s, 78, 32, "D1", 0, 0, "econ-label demand-text")}
          ${econLabel(s, 80, 17, "D2", 0, 0, "econ-label demand-text")}
        `;
      }
      return `
        ${econLine(s, 5, 84, 95, 20, "econ-demand")}
        ${econLine(s, 12, 98, 94, 30, "econ-demand secondary-demand")}
        ${econLine(s, 5, 84, 48, 0, "econ-mr")}
        ${econLine(s, 12, 98, 58, 0, "econ-mr secondary-mr")}
        <path d="M${s.x(10)} ${s.y(22)} C ${s.x(34)} ${s.y(30)}, ${s.x(54)} ${s.y(40)}, ${s.x(82)} ${s.y(60)}" class="econ-mc"/>
        ${econGuide(s, 42, 0, 42, 54)}
        ${econGuide(s, 56, 0, 56, 54)}
        ${econGuide(s, 0, 54, 56, 54)}
        ${econPoint(s, 42, 54, "P1,2", 8, -8)}
        ${econPoint(s, 56, 54, "", 0, 0)}
        ${econLabel(s, 42, 0, "y1", -7, 24)}
        ${econLabel(s, 56, 0, "y2", -7, 24)}
        ${econLabel(s, 78, 31, "D1", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 79, 44, "D2", 0, 0, "econ-label demand-text")}
      `;
    }, variant === "a" ? "Precio cambia sin cambiar cantidad" : "Cantidad cambia sin cambiar precio", { width: 560, height: 360, yMax: 100 });
    return economicGraphCard("La oferta en monopolio", "No existe una curva de oferta única: el resultado depende de la forma de la demanda.", `<div class="mini-graph-grid">${mini("a")}${mini("b")}</div>`, "Una misma condición de costos puede asociarse con cambios de precio, cantidad o ambos.");
  }

  if (kind === "welfare") {
    const svg = economicSvg("mono-welfare-arrow", (s) => {
      const ym = 42, yc = 70, pm = 68, pc = 38, cme = 30;
      return `
        ${econPolygon(s, [[0, 92], [0, pm], [ym, pm]], "consumer-area")}
        ${econRect(s, 0, cme, ym, pm, "producer-area")}
        ${econPolygon(s, [[ym, pm], [yc, pc], [ym, pc]], "deadweight-area")}
        ${econLine(s, 5, 92, 96, 14, "econ-demand")}
        ${econLine(s, 5, 92, 52, 0, "econ-mr")}
        <path d="M${s.x(8)} ${s.y(24)} C ${s.x(30)} ${s.y(28)}, ${s.x(50)} ${s.y(38)}, ${s.x(94)} ${s.y(58)}" class="econ-mc"/>
        <path d="M${s.x(8)} ${s.y(42)} C ${s.x(24)} ${s.y(26)}, ${s.x(42)} ${s.y(30)}, ${s.x(58)} ${s.y(38)} C ${s.x(76)} ${s.y(46)}, ${s.x(88)} ${s.y(50)}, ${s.x(96)} ${s.y(52)}" class="econ-cme"/>
        ${econGuide(s, ym, 0, ym, pm)}
        ${econGuide(s, yc, 0, yc, pc)}
        ${econGuide(s, 0, pm, ym, pm)}
        ${econGuide(s, 0, pc, yc, pc)}
        ${econPoint(s, ym, pm, "A", 7, -8)}
        ${econPoint(s, ym, pc, "B", 7, 14)}
        ${econPoint(s, yc, pc, "C", 7, -8)}
        ${econPoint(s, ym, cme, "E", 7, 14)}
        ${econPoint(s, yc, 0, "F", 6, -8)}
        ${econPoint(s, 0, pm, "H", 8, -8)}
        ${econLabel(s, 0, pm, "Pm", -34, 4)}
        ${econLabel(s, 0, pc, "Pc", -34, 4)}
        ${econLabel(s, ym, 0, "ym", -8, 24)}
        ${econLabel(s, yc, 0, "yc", -8, 24)}
        ${econLabel(s, 14, 79, "Excedente del consumidor", 0, 0)}
        ${econLabel(s, 13, 48, "Excedente del productor", 0, 0)}
        ${econLabel(s, 48, 50, "Pérdida", 0, 0)}
        ${econLabel(s, 48, 44, "irrecuperable", 0, 0)}
        ${econLabel(s, 72, 28, "Demanda", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 43, 10, "IMg", 0, 0, "econ-label mr-text")}
        ${econLabel(s, 78, 56, "CMg", 0, 0, "econ-label mc-text")}
        ${econLabel(s, 79, 49, "CMe", 0, 0, "econ-label cme-text")}
      `;
    }, "Monopolio e ineficiencia asignativa");
    return economicGraphCard("Ineficiencia asignativa", "El monopolio cobra más y vende menos que la asignación competitiva.", svg, "El triángulo sombreado es excedente que desaparece: no lo recibe ni el consumidor ni el productor.");
  }

  if (kind === "producerloss") {
    const svg = economicSvg("mono-prod-loss-arrow", (s) => {
      const ym = 45, yc = 76, pm = 66, pc = 30;
      return `
        ${econRect(s, 0, pc, ym, pm, "producer-area")}
        ${econPolygon(s, [[ym, pm], [yc, pc], [ym, pc]], "deadweight-area")}
        ${econLine(s, 5, 88, 96, 14, "econ-demand")}
        ${econLine(s, 5, 88, 52, 0, "econ-mr")}
        ${econLine(s, 4, pc, 96, pc, "econ-mc-flat")}
        ${econGuide(s, ym, 0, ym, pm)}
        ${econGuide(s, yc, 0, yc, pc)}
        ${econGuide(s, 0, pm, ym, pm)}
        ${econGuide(s, 0, pc, yc, pc)}
        ${econPoint(s, ym, pm, "Pm", 8, -8)}
        ${econPoint(s, ym, pc, "A", 8, 14)}
        ${econPoint(s, yc, pc, "B", 8, -8)}
        ${econLabel(s, ym, 0, "ym", -8, 24)}
        ${econLabel(s, yc, 0, "yc", -8, 24)}
        ${econLabel(s, 16, 49, "A", 0, 0)}
        ${econLabel(s, 52, 45, "B", 0, 0)}
        ${econLabel(s, 56, 76, "Pérdida excedente consumidor = A + B", 0, 0)}
        ${econLabel(s, 56, 69, "Pérdida eficiencia social = B", 0, 0)}
        ${econLabel(s, 73, 31, "Demanda", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 74, pc, "CMg = CMe", 0, -6, "econ-label mc-text")}
      `;
    }, "Excedente del productor y pérdida de excedente");
    return economicGraphCard("Ejercicio 4", "Separación entre transferencia al productor y pérdida de eficiencia.", svg, "El área A cambia de manos; el área B se pierde para la sociedad.");
  }

  if (kind === "cost") {
    const graph = (id, profit = false) => economicSvg(`mono-cost-${id}`, (s) => {
      const y1 = 52, y2 = 40, p1 = 55, p2 = 64, c1 = 26, c2 = 38;
      return `
        ${profit ? econRect(s, 0, c1, y1, p1, "producer-area") + econRect(s, 0, c2, y2, p2, "profit-area") : econPolygon(s, [[0, 88], [0, p1], [y1, p1]], "consumer-area") + econPolygon(s, [[0, 88], [0, p2], [y2, p2]], "consumer-area after-area")}
        ${econLine(s, 5, 88, 96, 12, "econ-demand")}
        ${econLine(s, 5, 88, 52, 0, "econ-mr")}
        ${econLine(s, 4, c1, 96, c1, "econ-mc-flat")}
        ${econLine(s, 4, c2, 96, c2, "econ-mc-flat cost-shift")}
        ${econGuide(s, y1, 0, y1, p1)}
        ${econGuide(s, y2, 0, y2, p2)}
        ${econGuide(s, 0, p1, y1, p1)}
        ${econGuide(s, 0, p2, y2, p2)}
        ${econPoint(s, y1, p1, "P1", 8, 10)}
        ${econPoint(s, y2, p2, "P2", 8, -8)}
        ${econLabel(s, y1, 0, "Y1", -8, 24)}
        ${econLabel(s, y2, 0, "Y2", -8, 24)}
        ${econLabel(s, 72, c1, "CMg1", 0, -6, "econ-label mc-text")}
        ${econLabel(s, 72, c2, "CMg2", 0, -6, "econ-label mc-text")}
        ${econLabel(s, 70, 26, "Demanda", 0, 0, "econ-label demand-text")}
        ${econLabel(s, 32, 16, "IMg", 0, 0, "econ-label mr-text")}
        ${profit ? econLabel(s, 16, 45, "beneficio menor", 0, 0) : econLabel(s, 12, 78, "EC disminuye", 0, 0)}
      `;
    }, profit ? "Beneficio antes y después" : "Excedente del consumidor antes y después");
    return economicGraphCard("Aumento del costo marginal", "El alza de costos desplaza el óptimo: sube el precio y baja la cantidad.", `<div class="mini-graph-grid">${graph("cs", false)}${graph("profit", true)}</div>`, "Al aumentar CMg, cae el excedente del consumidor y también se reduce el margen total disponible.");
  }

  if (kind === "perfect") {
    const svg = economicSvg("mono-perfect-arrow", (s) => {
      const p = 46, y = 56;
      return `
        ${econLine(s, 5, p, 96, p, "econ-demand")}
        <path d="M${s.x(8)} ${s.y(20)} C ${s.x(24)} ${s.y(24)}, ${s.x(42)} ${s.y(35)}, ${s.x(y)} ${s.y(p)} C ${s.x(72)} ${s.y(58)}, ${s.x(88)} ${s.y(72)}, ${s.x(96)} ${s.y(82)}" class="econ-mc"/>
        ${econGuide(s, y, 0, y, p)}
        ${econGuide(s, 0, p, y, p)}
        ${econPoint(s, y, p, "equilibrio", 8, -8)}
        ${econLabel(s, 7, p, "D = IMg", 0, -8, "econ-label demand-text")}
        ${econLabel(s, 82, 78, "CMg", 0, 0, "econ-label mc-text")}
        ${econLabel(s, 0, p, "Pm", -34, 4)}
        ${econLabel(s, y, 0, "Ym", -8, 24)}
        ${econLabel(s, 36, 24, "No existe pérdida irrecuperable de eficiencia", 0, 0)}
      `;
    }, "Demanda perfectamente elástica");
    return economicGraphCard("Demanda perfectamente elástica", "Cuando la firma enfrenta una demanda horizontal, el precio disciplina el margen.", svg, "El resultado se aproxima a competencia perfecta porque \\(P=IMg\\).");
  }

  return "";
}

function renderMonopolyWeekGuide() {
  return String.raw`
    <article class="week-guide">
      <section class="week-hero">
        <span class="eyebrow">Unidad 1 · Semana 2</span>
        <h2>Monopolio: producción, precio e ineficiencia asignativa</h2>
        <p class="week-subtitle">Elección de producción, demanda lineal, ingreso marginal, markup, beneficios y bienestar.</p>
        <p>Esta semana estudia cómo decide una empresa que enfrenta toda la demanda del mercado. A diferencia de una firma competitiva, el monopolista reconoce que su precio depende de la cantidad que elige vender.</p>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>01</span><h3>Características del monopolio</h3><p>El monopolio concentra la venta de un bien en una sola empresa y por eso la firma enfrenta la demanda de mercado.</p></div>
        <div class="source-grid">
          <article class="study-card"><div class="card-icon">1</div><h4>Un solo vendedor</h4><p>La empresa no toma el precio como dato: sus decisiones de cantidad afectan el precio de mercado.</p><strong>Clave: poder para influir en precios.</strong></article>
          <article class="study-card"><div class="card-icon">B</div><h4>Barreras de entrada</h4><p>Patentes, escala, control de insumos, licencias o redes pueden impedir que entren rivales.</p><strong>Clave: la entrada no disciplina el precio.</strong></article>
          <article class="study-card"><div class="card-icon">D</div><h4>Demanda exógena</h4><p>La firma toma la demanda como restricción: puede elegir un punto sobre ella, no inventarla libremente.</p><strong>Clave: precio y cantidad se eligen juntos.</strong></article>
        </div>
        <div class="responsive-table"><table><thead><tr><th>Rasgo</th><th>Interpretación económica</th></tr></thead><tbody><tr><td>Bien único o sin sustitutos cercanos</td><td>La demanda que enfrenta la firma es menos sensible al precio.</td></tr><tr><td>Información imperfecta</td><td>Consumidores o rivales pueden no conocer todas las alternativas.</td></tr><tr><td>Altas barreras a la entrada</td><td>El margen puede sostenerse durante más tiempo.</td></tr></tbody></table></div>
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>02</span><h3>Decisión de producción del monopolista</h3><p>El monopolista elige la cantidad \(y\). Luego el precio se lee en la demanda inversa \(p(y)\).</p></div>
        <div class="formula-highlight"><div><strong>Beneficio</strong>\[\pi(y)=p(y)y-C(y)\]</div><div><strong>Condición de óptimo</strong>\[IMg=CMg\]</div></div>
        <div class="mr-grid"><article class="mr-card positive"><h4>Si \(IMg>CMg\)</h4><p>La unidad adicional aporta más ingreso que costo. Conviene producir más.</p></article><article class="mr-card neutral"><h4>Si \(IMg=CMg\)</h4><p>La ganancia marginal neta es cero. Es el candidato natural a óptimo.</p></article><article class="mr-card negative"><h4>Si \(IMg<CMg\)</h4><p>La unidad adicional cuesta más de lo que aporta. No conviene expandir producción.</p></article></div>
        ${monopolySvg("max")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>03</span><h3>Decisión de precio y elasticidad</h3><p>El precio elegido depende de la elasticidad. En el óptimo con poder de mercado, el monopolista opera en el tramo elástico de la demanda.</p></div>
        <div class="formula-highlight"><div><strong>Regla de markup</strong>\[p(y)=\frac{CMg}{1-\frac{1}{|\varepsilon|}}\]</div><div><strong>Lectura</strong>\[P>CMg\quad\text{si la demanda no es perfectamente elástica}\]</div></div>
        <aside class="key-idea"><strong>Idea clave</strong><p>Si la demanda es inelástica, aumentar la cantidad reduce el ingreso total y además aumenta costos; por eso no es consistente con maximización de beneficios. Si la demanda es perfectamente elástica, el margen desaparece y el resultado se acerca a competencia perfecta.</p></aside>
        ${monopolySvg("perfect")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>04</span><h3>Demanda lineal e ingreso marginal</h3><p>Con demanda inversa lineal, el ingreso marginal parte del mismo intercepto que la demanda, pero cae al doble de velocidad.</p></div>
        <div class="derivation-box"><div>\[p(y)=a-by\]</div><div>\[IT=p(y)y=ay-by^2\]</div><div>\[IMg=a-2by\]</div></div>
        ${monopolySvg("linear")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>05</span><h3>Ejemplo numérico del monopolista</h3><p>Si \(D(p)=100-2p\), entonces \(p=50-\frac{y}{2}\). Con costo \(C(y)=2y\), el costo marginal es \(CMg=2\).</p></div>
        <div class="derivation-box"><div>\[IT=50y-\frac{y^2}{2}\]</div><div>\[IMg=50-y\]</div><div>\[50-y=2\Rightarrow y=48\]</div><div>\[P=26,\quad \pi=(26-2)\cdot48=1152\]</div></div>
        ${monopolySvg("exercise")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>06</span><h3>Oferta en monopolio</h3><p>En monopolio no existe una curva de oferta independiente. La cantidad elegida depende simultáneamente del costo marginal y de la forma de la demanda.</p></div>
        <div class="text-columns"><p>En competencia perfecta, la curva de oferta se relaciona directamente con el costo marginal porque la empresa toma el precio como dado.</p><p>En monopolio, el mismo costo marginal puede generar distintos precios y cantidades si cambia la demanda. Por eso no hay una relación única precio-cantidad que pueda llamarse oferta.</p></div>
        <div class="cause-grid"><article class="cause-card"><h4>Cambia precio, no cantidad</h4><p>Una rotación de demanda puede mantener el punto \(IMg=CMg\) en la misma cantidad.</p></article><article class="cause-card"><h4>Cambia cantidad, no precio</h4><p>Otra demanda puede desplazar la cantidad elegida sin modificar el precio observado.</p></article><article class="cause-card"><h4>Cambian ambos</h4><p>En general, precio y cantidad se mueven juntos porque dependen de demanda y costos.</p></article></div>
        ${monopolySvg("nosupply")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>07</span><h3>Ineficiencia asignativa</h3><p>El monopolio restringe producción respecto de competencia perfecta: \(Y_m<Y_c\) y \(P_m>P_c\). La diferencia genera pérdida irrecuperable de eficiencia.</p></div>
        ${monopolySvg("welfare")}
        ${monopolySvg("producerloss")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>08</span><h3>Aumento del costo marginal</h3><p>Cuando aumenta el costo marginal, el monopolista reduce cantidad y eleva precio. El excedente del consumidor cae y los beneficios de la empresa también pueden disminuir.</p></div>
        ${monopolySvg("cost")}
      </section>

      <section class="guide-section">
        <div class="section-heading"><span>09</span><h3>Resumen comparativo</h3></div>
        <div class="responsive-table"><table><thead><tr><th>Estructura</th><th>Rasgo clave</th><th>Precio y cantidad</th></tr></thead><tbody><tr><td>Competencia perfecta</td><td>Muchas empresas precio-aceptantes.</td><td>\(P=CMg\), sin poder de mercado.</td></tr><tr><td>Competencia monopolística</td><td>Muchas firmas con diferenciación.</td><td>Algún margen, limitado por sustitutos.</td></tr><tr><td>Oligopolio</td><td>Pocas empresas interdependientes.</td><td>Precio depende de reacción estratégica.</td></tr><tr><td><strong>Monopolio</strong></td><td><strong>Una sola empresa, barreras de entrada y demanda de mercado.</strong></td><td><strong>Elige \(Y_m\) con \(IMg=CMg\), cobra \(P_m\) en la demanda y genera \(P_m>CMg\).</strong></td></tr><tr><td>Monopolio natural</td><td>Costos medios decrecientes por escala.</td><td>Una firma puede ser eficiente, pero requiere regulación.</td></tr><tr><td>Monopsonio</td><td>Un comprador relevante.</td><td>Poder de mercado del lado de la compra.</td></tr></tbody></table></div>
      </section>
    </article>
  `;
}

function renderFinanceWeek1Guide() {
  return `
    <article class="week-guide finance-guide">
      <section class="week-hero">
        <span class="eyebrow">Semana 01 · Análisis de Estados Financieros</span>
        <h2>Semana 1: Marco Conceptual de la Información Financiera y NIC 1</h2>
        <p class="week-subtitle">Marco Conceptual, negocio en marcha, características cualitativas y presentación de estados financieros.</p>
        <p>Esta semana estudia las bases que permiten preparar, presentar e interpretar estados financieros de propósito general. El Marco Conceptual entrega los principios para entender la información financiera, mientras que la NIC 1 ordena cómo debe presentarse un juego completo de estados financieros.</p>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>01</span>
          <h3>Objetivos de aprendizaje</h3>
          <p>Al terminar esta guía deberías poder explicar qué información comunican los estados financieros, qué cualidades debe tener esa información y cómo se organiza bajo NIC 1.</p>
        </div>
        <div class="objective-grid">
          <article><strong>Comprender</strong><p>Qué es el Marco Conceptual de la Información Financiera y para qué sirve.</p></article>
          <article><strong>Identificar</strong><p>Los objetivos de los estados financieros de propósito general.</p></article>
          <article><strong>Explicar</strong><p>La hipótesis fundamental de negocio en marcha y sus efectos.</p></article>
          <article><strong>Diferenciar</strong><p>Características cualitativas fundamentales y de mejora.</p></article>
          <article><strong>Reconocer</strong><p>Los estados financieros que conforman un juego completo según NIC 1.</p></article>
          <article><strong>Comprender</strong><p>La utilidad de las notas a los estados financieros.</p></article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>02</span>
          <h3>Marco Conceptual de la Información Financiera</h3>
          <p>El Marco Conceptual describe el objetivo y los conceptos que sostienen la información financiera con propósito general.</p>
        </div>
        <div class="source-grid">
          <article class="study-card"><div class="card-icon">MC</div><h4>Qué es</h4><p>Es una base conceptual que ordena cómo pensar la información financiera: sus objetivos, supuestos, cualidades y elementos principales.</p><strong>Idea clave: no es una lista de asientos, es el mapa conceptual de las NIIF.</strong></article>
          <article class="study-card"><div class="card-icon">NIIF</div><h4>Para qué sirve</h4><p>Ayuda a que las normas se construyan sobre conceptos coherentes y a que la información financiera sea útil para los usuarios.</p><strong>Idea clave: da consistencia a la preparación e interpretación.</strong></article>
          <article class="study-card"><div class="card-icon">Doc</div><h4>A quién ayuda</h4><p>Apoya al Consejo al desarrollar Normas NIIF, a los preparadores cuando no hay una norma específica y a los usuarios al interpretar la información.</p><strong>Idea clave: conecta norma, preparación y lectura financiera.</strong></article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>03</span>
          <h3>Definición y objetivos de los estados financieros</h3>
          <p>Los estados financieros son representaciones estructuradas de la situación financiera y del rendimiento de una entidad en periodos determinados.</p>
        </div>
        <aside class="key-idea"><strong>Una forma sencilla de verlo</strong><p>Los estados financieros son una foto financiera y una historia económica de la empresa: muestran qué tiene, qué debe, cuánto ganó o perdió y cómo se movió su efectivo.</p></aside>
        <div class="cause-grid">
          <article class="cause-card"><h4>Situación financiera</h4><p>Permiten observar activos, pasivos y patrimonio en una fecha específica.</p></article>
          <article class="cause-card"><h4>Rendimiento</h4><p>Informan ingresos, gastos, ganancias o pérdidas generadas durante un periodo.</p></article>
          <article class="cause-card"><h4>Flujos de efectivo</h4><p>Muestran cómo entra y sale efectivo por operación, inversión y financiamiento.</p></article>
        </div>
        <div class="clean-list">
          <p><strong>Objetivos principales:</strong></p>
          <ul>
            <li>Suministrar información sobre la situación financiera de la entidad.</li>
            <li>Mostrar el rendimiento económico obtenido en un periodo.</li>
            <li>Informar sobre los flujos de efectivo y su origen.</li>
            <li>Ayudar a usuarios externos a tomar decisiones económicas.</li>
            <li>Mostrar los resultados de la gestión realizada por la administración.</li>
            <li>Apoyar la proyección de flujos de efectivo futuros.</li>
          </ul>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>04</span>
          <h3>Hipótesis fundamental: negocio en marcha</h3>
          <p>La información financiera normalmente se prepara suponiendo que la entidad continuará operando en el futuro previsible.</p>
        </div>
        <div class="text-columns">
          <p>La gerencia debe evaluar si la empresa tiene capacidad para seguir funcionando. Si no existe intención ni necesidad de liquidar o cerrar operaciones, los estados financieros se preparan bajo el supuesto de continuidad.</p>
          <p>Si la empresa está en liquidación o no puede seguir operando, el supuesto cambia: la información debe prepararse pensando en valores de liquidación, es decir, cuánto podría recuperarse al vender activos o cancelar obligaciones.</p>
        </div>
        <aside class="key-idea"><strong>Ejemplo breve</strong><p>Si una empresa seguirá operando normalmente, sus activos se presentan bajo el supuesto de uso continuo. Pero si está en liquidación, los activos deben evaluarse pensando en cuánto podrían venderse.</p></aside>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>05</span>
          <h3>Características cualitativas de la información financiera</h3>
          <p>La información financiera no basta con existir: debe ser útil. Para eso necesita cualidades fundamentales y cualidades de mejora.</p>
        </div>
        <div class="responsive-table">
          <table>
            <thead><tr><th>Tipo</th><th>Característica</th><th>Qué significa</th><th>Ejemplo de estudio</th></tr></thead>
            <tbody>
              <tr><td><strong>Fundamental</strong></td><td>Relevancia / materialidad</td><td>Puede influir en decisiones. Es material si su omisión o error puede afectar decisiones económicas.</td><td>No revelar un cambio importante en depreciación puede cambiar la evaluación del resultado.</td></tr>
              <tr><td><strong>Fundamental</strong></td><td>Representación fiel</td><td>La información debe representar correctamente los fenómenos económicos: completa, neutral y libre de error.</td><td>No basta con mostrar una cifra; debe estar explicada y sin sesgo.</td></tr>
              <tr><td><strong>De mejora</strong></td><td>Comparabilidad</td><td>Permite comparar periodos o empresas mediante políticas contables uniformes.</td><td>Usar criterios consistentes para analizar dos años de resultados.</td></tr>
              <tr><td><strong>De mejora</strong></td><td>Verificabilidad</td><td>Diferentes observadores pueden comprobar la información o llegar a conclusiones similares.</td><td>Un saldo puede respaldarse con documentos y cálculos revisables.</td></tr>
              <tr><td><strong>De mejora</strong></td><td>Oportunidad</td><td>La información llega a tiempo para influir en decisiones.</td><td>Un reporte entregado demasiado tarde pierde utilidad.</td></tr>
              <tr><td><strong>De mejora</strong></td><td>Comprensibilidad</td><td>Se presenta de forma clara para usuarios con conocimiento razonable de negocios y economía.</td><td>Notas ordenadas ayudan a entender políticas y riesgos.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>06</span>
          <h3>NIC 1: Presentación de Estados Financieros</h3>
          <p>La NIC 1 regula la presentación de estados financieros con propósito general. Su importancia está en ordenar qué estados se presentan, cómo se estructuran y qué información mínima debe revelarse para que los usuarios puedan entenderlos.</p>
        </div>
        <div class="statement-grid">
          <article><span>01</span><strong>Estado de situación financiera</strong><p>Presenta activos, pasivos y patrimonio en una fecha determinada.</p></article>
          <article><span>02</span><strong>Estado de resultados integrales</strong><p>Muestra ingresos, gastos, ganancias o pérdidas del periodo.</p></article>
          <article><span>03</span><strong>Estado de cambios en el patrimonio</strong><p>Explica movimientos de capital, reservas y resultados acumulados.</p></article>
          <article><span>04</span><strong>Estado de flujos de efectivo</strong><p>Clasifica entradas y salidas de efectivo en operación, inversión y financiamiento.</p></article>
          <article><span>05</span><strong>Notas a los estados financieros</strong><p>Revelan bases de preparación, políticas contables e información adicional relevante.</p></article>
          <article><span>06</span><strong>Estado por reexpresión</strong><p>Se presenta cuando corresponde por reexpresión o reclasificación relevante.</p></article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>07</span>
          <h3>Estado de situación financiera</h3>
          <p>Informa la situación financiera de la empresa en un momento determinado. Su lectura central es: qué recursos controla, qué obligaciones tiene y cuál es la participación residual de los propietarios.</p>
        </div>
        <div class="source-grid">
          <article class="study-card"><div class="card-icon">A</div><h4>Activos</h4><p>Recursos controlados por la entidad como resultado de sucesos pasados, de los que se espera obtener beneficios económicos.</p><strong>Ejemplos: efectivo, inventarios, cuentas por cobrar, activos fijos e intangibles.</strong></article>
          <article class="study-card"><div class="card-icon">P</div><h4>Pasivos</h4><p>Obligaciones presentes surgidas de sucesos pasados que requerirán salida de recursos para su cancelación.</p><strong>Ejemplos: cuentas por pagar, préstamos y obligaciones financieras.</strong></article>
          <article class="study-card"><div class="card-icon">Pat</div><h4>Patrimonio</h4><p>Representa la participación residual de los propietarios. Incluye capital emitido, reservas de capital y resultados acumulados.</p><strong>Idea clave: es lo que queda luego de reconocer activos y pasivos.</strong></article>
        </div>
        <div class="finance-comparison-grid">
          <article class="finance-comparison-card">
            <h4>Activos corrientes</h4>
            <p>Se esperan realizar, vender o consumir en el ciclo normal de operaciones o dentro de 12 meses.</p>
            <small>Ejemplo: inventarios o cuentas por cobrar de corto plazo.</small>
          </article>
          <article class="finance-comparison-card">
            <h4>Activos no corrientes</h4>
            <p>Son bienes de permanencia prolongada que apoyan la operación por más de un periodo.</p>
            <small>Ejemplo: maquinaria, edificios, marcas o activos intangibles.</small>
          </article>
          <article class="finance-comparison-card">
            <h4>Pasivos corrientes</h4>
            <p>Obligaciones que deberán cumplirse en un periodo que no excede 12 meses.</p>
            <small>Ejemplo: proveedores, impuestos por pagar o deuda de corto plazo.</small>
          </article>
          <article class="finance-comparison-card">
            <h4>Pasivos no corrientes</h4>
            <p>Obligaciones de largo plazo, normalmente mayores a un año.</p>
            <small>Ejemplo: préstamo bancario de largo plazo o bonos por pagar.</small>
          </article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>08</span>
          <h3>Estado de resultados integrales</h3>
          <p>Muestra la situación económica de la empresa durante un periodo. Es una herramienta clave para medir rentabilidad y rendimiento.</p>
        </div>
        <div class="responsive-table">
          <table>
            <thead><tr><th>Estado de situación financiera</th><th>Estado de resultados integrales</th></tr></thead>
            <tbody>
              <tr><td>Se lee como una foto en una fecha determinada.</td><td>Se lee como una película del rendimiento durante un periodo.</td></tr>
              <tr><td>Presenta activos, pasivos y patrimonio.</td><td>Presenta ingresos, gastos, ganancias o pérdidas.</td></tr>
              <tr><td>Ayuda a evaluar liquidez, solvencia y estructura financiera.</td><td>Ayuda a evaluar rentabilidad y desempeño económico.</td></tr>
            </tbody>
          </table>
        </div>
        <aside class="key-idea"><strong>Regla de lectura</strong><p>Si los ingresos son mayores que los gastos, hay ganancia. Si los gastos son mayores que los ingresos, hay pérdida. Las cuentas de resultados se cancelan de un ejercicio a otro porque miden desempeño del periodo.</p></aside>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>09</span>
          <h3>Clasificación de ingresos y gastos</h3>
          <p>La NIC 1 ayuda a ordenar la información del rendimiento para distinguir lo habitual, lo eventual y lo financiero.</p>
        </div>
        <div class="finance-ledger-grid">
          <article class="finance-ledger-card">
            <h4>Ingresos</h4>
            <dl>
              <div><dt>Actividades ordinarias</dt><dd>Ventas de bienes o servicios del negocio, netas de descuentos y rebajas.</dd></div>
              <div><dt>Otros ingresos operativos</dt><dd>Venta eventual de un activo fijo, recuperación de impuestos o ingresos por siniestros.</dd></div>
              <div><dt>Ingresos financieros</dt><dd>Intereses generados por depósitos, cuentas bancarias o colocaciones de capital.</dd></div>
            </dl>
          </article>
          <article class="finance-ledger-card">
            <h4>Gastos</h4>
            <dl>
              <div><dt>Costo de ventas</dt><dd>Costo de producir bienes vendidos o costo de mercaderías vendidas.</dd></div>
              <div><dt>Gastos de ventas</dt><dd>Publicidad, comisiones, distribución o gastos asociados a vender.</dd></div>
              <div><dt>Gastos administrativos</dt><dd>Sueldos administrativos, alquiler de oficinas o servicios de gestión.</dd></div>
              <div><dt>Otros gastos operativos</dt><dd>Pérdidas eventuales, como daños por siniestros o fenómenos naturales.</dd></div>
              <div><dt>Gastos financieros</dt><dd>Intereses por préstamos u obligaciones financieras.</dd></div>
            </dl>
          </article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>10</span>
          <h3>Otros estados financieros del juego completo</h3>
          <p>Además del estado de situación financiera y el estado de resultados integrales, el juego completo permite explicar cambios patrimoniales, movimientos de efectivo y detalles que no caben en los estados principales.</p>
        </div>
        <div class="cause-grid">
          <article class="cause-card"><h4>Estado de cambios en el patrimonio</h4><p>Muestra variaciones patrimoniales, movimientos de capital realizados por propietarios, distribuciones, utilidades o pérdidas acumuladas y movimientos del ejercicio.</p></article>
          <article class="cause-card"><h4>Estado de flujos de efectivo</h4><p>Permite evaluar la capacidad de generar efectivo y equivalentes. Se divide en actividades de operación, inversión y financiamiento.</p></article>
          <article class="cause-card"><h4>Notas a los estados financieros</h4><p>Revelan bases de preparación, políticas contables, objetivos y políticas de gestión de riesgos e información adicional relevante.</p></article>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <span>11</span>
          <h3>Caso de aplicación: cambio de vida útil de un activo fijo</h3>
          <p>Una empresa cambia la vida útil usada para calcular la depreciación de un activo fijo. El cambio tiene impacto material en los estados financieros, pero la compañía decide no revelarlo.</p>
        </div>
        <div class="case-box">
          <div><strong>Por qué debe revelarse</strong><p>Porque modifica la medición del gasto por depreciación y puede afectar la utilidad, el valor en libros del activo y la interpretación del desempeño.</p></div>
          <div><strong>Qué característica se afecta</strong><p>Se afecta la relevancia/materialidad porque la omisión puede influir en decisiones, y también la representación fiel porque los estados no muestran completamente el fenómeno económico.</p></div>
          <div><strong>Por qué importa al usuario</strong><p>Un inversionista, acreedor o analista podría evaluar mal la rentabilidad, el valor de los activos o la gestión si no conoce el cambio.</p></div>
          <div><strong>Relación con las notas</strong><p>Las notas existen precisamente para revelar políticas contables, cambios relevantes y explicaciones necesarias para comprender los estados financieros.</p></div>
        </div>
      </section>

      <section class="guide-section summary-guide">
        <div class="section-heading">
          <span>12</span>
          <h3>Cierre de la guía</h3>
          <p>Estas son las ideas que conviene dominar antes del examen.</p>
        </div>
        <div class="clean-list">
          <ul>
            <li>El Marco Conceptual orienta la preparación e interpretación de la información financiera.</li>
            <li>Los estados financieros sirven para tomar decisiones económicas y evaluar la gestión.</li>
            <li>La hipótesis de negocio en marcha es clave para preparar información bajo continuidad.</li>
            <li>La información debe ser relevante y representar fielmente la realidad económica.</li>
            <li>Las características de mejora aumentan la utilidad de información que ya es relevante y fiel.</li>
            <li>La NIC 1 ordena la presentación de los estados financieros de propósito general.</li>
            <li>Las notas complementan y explican información necesaria para comprender los estados principales.</li>
          </ul>
        </div>
      </section>
    </article>
  `;
}

const balancePracticeLevels = {
  facil: {
    classify: [
      { id: "caja", name: "Caja", amount: 1200, category: "Activo", subcategory: "activo-corriente", explain: "Caja pertenece al activo corriente porque representa dinero disponible para la empresa." },
      { id: "bancos", name: "Bancos", amount: 5200, category: "Activo", subcategory: "activo-corriente", explain: "Bancos es activo corriente porque es efectivo disponible en cuentas bancarias." },
      { id: "mercaderias", name: "Mercaderías", amount: 8800, category: "Activo", subcategory: "activo-corriente", explain: "Mercaderías es activo corriente porque se espera vender dentro del ciclo normal de operaciones." },
      { id: "proveedores", name: "Proveedores", amount: 3900, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Proveedores pertenece al pasivo corriente porque es una obligación de pago de corto plazo." },
      { id: "capital", name: "Capital social", amount: 11300, category: "Patrimonio", subcategory: "patrimonio", explain: "Capital social pertenece al patrimonio porque representa el aporte de los socios." }
    ],
    builder: [
      { id: "efectivo", name: "Efectivo", amount: 3000, category: "Activo", subcategory: "activo-corriente", explain: "Efectivo es activo corriente por su disponibilidad inmediata." },
      { id: "inventarios", name: "Inventarios", amount: 7000, category: "Activo", subcategory: "activo-corriente", explain: "Inventarios es activo corriente porque se espera vender en el ciclo normal." },
      { id: "mobiliario", name: "Mobiliario", amount: 10000, category: "Activo", subcategory: "activo-no-corriente", explain: "Mobiliario es activo no corriente porque se usa por más de un periodo." },
      { id: "proveedores-bg", name: "Proveedores", amount: 5000, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Proveedores es pasivo corriente por ser deuda de corto plazo." },
      { id: "capital-bg", name: "Capital social", amount: 15000, category: "Patrimonio", subcategory: "patrimonio", explain: "Capital social es patrimonio porque corresponde a aportes de propietarios." }
    ]
  },
  medio: {
    classify: [
      { id: "cxc", name: "Cuentas por cobrar", amount: 9600, category: "Activo", subcategory: "activo-corriente", explain: "Cuentas por cobrar es activo corriente porque representa derechos de cobro de corto plazo." },
      { id: "maquinaria", name: "Maquinaria", amount: 34000, category: "Activo", subcategory: "activo-no-corriente", explain: "Maquinaria es activo no corriente porque se usa en operaciones durante varios periodos." },
      { id: "tributos", name: "Tributos por pagar", amount: 4200, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Tributos por pagar es pasivo corriente porque es una obligación exigible en el corto plazo." },
      { id: "prestamo-lp", name: "Préstamo bancario a largo plazo", amount: 18000, category: "Pasivo", subcategory: "pasivo-no-corriente", explain: "El préstamo de largo plazo es pasivo no corriente por vencer en más de un año." },
      { id: "reservas", name: "Reservas", amount: 5200, category: "Patrimonio", subcategory: "patrimonio", explain: "Las reservas son patrimonio porque provienen de utilidades retenidas con destino específico." }
    ],
    builder: [
      { id: "bancos-m", name: "Bancos", amount: 10500, category: "Activo", subcategory: "activo-corriente", explain: "Bancos se clasifica como activo corriente por disponibilidad." },
      { id: "cobrar-m", name: "Cuentas por cobrar comerciales", amount: 14500, category: "Activo", subcategory: "activo-corriente", explain: "Son derechos de cobro de corto plazo." },
      { id: "maquinaria-m", name: "Maquinaria", amount: 42000, category: "Activo", subcategory: "activo-no-corriente", explain: "Maquinaria es activo no corriente." },
      { id: "tributos-m", name: "Tributos por pagar", amount: 7000, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Tributos por pagar es deuda corriente." },
      { id: "prestamo-m", name: "Préstamo bancario a largo plazo", amount: 22000, category: "Pasivo", subcategory: "pasivo-no-corriente", explain: "Vence en un plazo mayor a un año." },
      { id: "capital-m", name: "Capital social", amount: 30000, category: "Patrimonio", subcategory: "patrimonio", explain: "Capital social representa aportes de socios." },
      { id: "utilidades-m", name: "Resultados acumulados", amount: 8000, category: "Patrimonio", subcategory: "patrimonio", explain: "Resultados acumulados forman parte del patrimonio." }
    ]
  },
  dificil: {
    classify: [
      { id: "depreciacion", name: "Depreciación acumulada", amount: -7600, category: "Activo", subcategory: "activo-no-corriente", explain: "Depreciación acumulada es una cuenta correctora del activo no corriente; reduce el valor de los activos fijos." },
      { id: "utilidad", name: "Utilidad del ejercicio", amount: 12800, category: "Patrimonio", subcategory: "patrimonio", explain: "La utilidad del ejercicio incrementa el patrimonio mientras no se distribuya." },
      { id: "inventario-final", name: "Inventario final", amount: 15400, category: "Activo", subcategory: "activo-corriente", explain: "Inventario final es activo corriente porque se espera vender en el ciclo normal." },
      { id: "cxc-vencidas", name: "Cuentas por cobrar vencidas", amount: 6800, category: "Activo", subcategory: "activo-corriente", explain: "Aunque estén vencidas, siguen siendo derechos de cobro; debe evaluarse su recuperabilidad." },
      { id: "obligaciones", name: "Obligaciones financieras", amount: 25000, category: "Pasivo", subcategory: "pasivo-no-corriente", explain: "Obligaciones financieras de largo plazo pertenecen al pasivo no corriente." }
    ],
    builder: [
      { id: "caja-d", name: "Caja y bancos", amount: 9000, category: "Activo", subcategory: "activo-corriente", explain: "Es efectivo disponible, por eso es activo corriente." },
      { id: "inv-d", name: "Inventario final", amount: 18000, category: "Activo", subcategory: "activo-corriente", explain: "El inventario final se espera vender dentro del ciclo normal." },
      { id: "cxc-d", name: "Cuentas por cobrar vencidas", amount: 6000, category: "Activo", subcategory: "activo-corriente", explain: "Son derechos de cobro; si hubiera incobrabilidad se reconocería una estimación separada." },
      { id: "ppe-d", name: "Propiedad, planta y equipo", amount: 70000, category: "Activo", subcategory: "activo-no-corriente", explain: "Son activos usados por más de un periodo." },
      { id: "dep-d", name: "Depreciación acumulada", amount: -16000, category: "Activo", subcategory: "activo-no-corriente", explain: "Es cuenta correctora del activo no corriente y se resta del valor bruto." },
      { id: "prov-d", name: "Proveedores", amount: 11000, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Proveedores es obligación de corto plazo." },
      { id: "trib-d", name: "Tributos por pagar", amount: 5000, category: "Pasivo", subcategory: "pasivo-corriente", explain: "Tributos por pagar es pasivo corriente." },
      { id: "oblig-d", name: "Obligaciones financieras", amount: 28000, category: "Pasivo", subcategory: "pasivo-no-corriente", explain: "Se asume deuda financiera de largo plazo." },
      { id: "capital-d", name: "Capital social", amount: 30000, category: "Patrimonio", subcategory: "patrimonio", explain: "Capital social representa aportes de propietarios." },
      { id: "utilidad-d", name: "Utilidad del ejercicio", amount: 13000, category: "Patrimonio", subcategory: "patrimonio", explain: "La utilidad del ejercicio aumenta el patrimonio." }
    ]
  }
};

const balanceSubcategoryLabels = {
  "activo-corriente": "Activo corriente",
  "activo-no-corriente": "Activo no corriente",
  "pasivo-corriente": "Pasivo corriente",
  "pasivo-no-corriente": "Pasivo no corriente",
  patrimonio: "Patrimonio"
};

function money(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}S/ ${Math.abs(value).toLocaleString("es-PE")}`;
}

function renderBalancePracticeModule() {
  return `
    <section class="balance-lab" id="balancePractice" data-level="facil">
      <div class="section-heading">
        <span>BG</span>
        <h3>Prácticas Interactivas: Balance General</h3>
        <p>Practica cómo se clasifica cada cuenta y cómo se construye un balance general que cumpla la ecuación contable.</p>
      </div>
      <div class="balance-intro">
        <p>El balance general muestra la situación financiera de una empresa mediante tres grandes elementos: activo, pasivo y patrimonio.</p>
        <div class="balance-equation">\\[Activo=Pasivo+Patrimonio\\]</div>
      </div>
      <div class="balance-level-tabs" aria-label="Dificultad de prácticas de balance">
        <button class="balance-level-btn active" data-balance-level="facil" type="button">Fácil</button>
        <button class="balance-level-btn" data-balance-level="medio" type="button">Medio</button>
        <button class="balance-level-btn" data-balance-level="dificil" type="button">Difícil</button>
      </div>
      <div id="balancePracticeBody"></div>
    </section>
  `;
}

function balancePracticeTemplate(level) {
  const data = balancePracticeLevels[level] || balancePracticeLevels.facil;
  const classOptions = ["Activo", "Pasivo", "Patrimonio"];
  const subOptions = Object.entries(balanceSubcategoryLabels);
  return `
    <div class="balance-practice-layout">
      <article class="balance-panel">
        <div class="balance-panel-head">
          <div><p class="eyebrow">Práctica 1</p><h4>Clasificación de cuentas</h4></div>
          <button class="ghost-btn" data-balance-action="verify-classification" type="button">Verificar respuestas</button>
        </div>
        <div class="balance-account-list">
          ${data.classify.map((account) => `
            <div class="balance-account-card" data-classify-card="${account.id}">
              <div><strong>${escapeHtml(account.name)}</strong><span>${money(account.amount)}</span></div>
              <div class="balance-choice-row">
                ${classOptions.map((option) => `<button type="button" data-classify="${account.id}" data-value="${option}">${option}</button>`).join("")}
              </div>
              <p class="balance-feedback" hidden></p>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="balance-panel">
        <div class="balance-panel-head">
          <div><p class="eyebrow">Práctica 2</p><h4>Construcción del Balance General</h4></div>
          <button class="ghost-btn" data-balance-action="verify-builder" type="button">Verificar balance</button>
        </div>
        <p class="balance-case">Asigna cada cuenta a su sección. Los totales se actualizan automáticamente con tu clasificación.</p>
        <div class="balance-builder-list">
          ${data.builder.map((account) => `
            <label class="balance-builder-card" data-builder-card="${account.id}">
              <span><strong>${escapeHtml(account.name)}</strong><small>${money(account.amount)}</small></span>
              <select data-builder="${account.id}" aria-label="Clasificación de ${escapeHtml(account.name)}">
                <option value="">Sin clasificar</option>
                ${subOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}
              </select>
              <p class="balance-feedback" hidden></p>
            </label>
          `).join("")}
        </div>
        <div class="balance-totals" aria-label="Totales del balance">
          <div><span>Total Activo</span><strong data-total="activo">S/ 0</strong></div>
          <div><span>Total Pasivo</span><strong data-total="pasivo">S/ 0</strong></div>
          <div><span>Total Patrimonio</span><strong data-total="patrimonio">S/ 0</strong></div>
          <div><span>Pasivo + Patrimonio</span><strong data-total="pasivo-patrimonio">S/ 0</strong></div>
        </div>
        <div class="balance-status" data-balance-status hidden></div>
      </article>
    </div>
  `;
}

function currentBalanceData() {
  const level = document.querySelector("#balancePractice")?.dataset.level || "facil";
  return balancePracticeLevels[level] || balancePracticeLevels.facil;
}

function renderBalancePracticeLevel(level = "facil") {
  const root = document.querySelector("#balancePractice");
  if (!root) return;
  root.dataset.level = level;
  root.querySelectorAll(".balance-level-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.balanceLevel === level);
  });
  root.querySelector("#balancePracticeBody").innerHTML = balancePracticeTemplate(level);
  updateBalanceTotals();
  typesetMath();
}

function updateBalanceTotals() {
  const root = document.querySelector("#balancePractice");
  if (!root) return;
  const data = currentBalanceData();
  const totals = { activo: 0, pasivo: 0, patrimonio: 0 };
  data.builder.forEach((account) => {
    const selected = root.querySelector(`[data-builder="${account.id}"]`)?.value;
    if (selected?.startsWith("activo")) totals.activo += account.amount;
    if (selected?.startsWith("pasivo")) totals.pasivo += account.amount;
    if (selected === "patrimonio") totals.patrimonio += account.amount;
  });
  const totalMap = {
    activo: totals.activo,
    pasivo: totals.pasivo,
    patrimonio: totals.patrimonio,
    "pasivo-patrimonio": totals.pasivo + totals.patrimonio
  };
  Object.entries(totalMap).forEach(([key, value]) => {
    const target = root.querySelector(`[data-total="${key}"]`);
    if (target) target.textContent = money(value);
  });
}

function verifyBalanceClassification() {
  const root = document.querySelector("#balancePractice");
  const data = currentBalanceData();
  data.classify.forEach((account) => {
    const card = root.querySelector(`[data-classify-card="${account.id}"]`);
    const selected = card?.querySelector(".selected")?.dataset.value || "";
    const feedback = card?.querySelector(".balance-feedback");
    const correct = selected === account.category;
    card?.classList.toggle("correct", correct);
    card?.classList.toggle("incorrect", !correct);
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = correct
        ? `Correcto. ${account.explain}`
        : `Revisa: ${account.name} pertenece a ${account.category}. ${account.explain}`;
    }
  });
}

function verifyBalanceBuilder() {
  const root = document.querySelector("#balancePractice");
  const data = currentBalanceData();
  let allCorrect = true;
  data.builder.forEach((account) => {
    const card = root.querySelector(`[data-builder-card="${account.id}"]`);
    const selected = root.querySelector(`[data-builder="${account.id}"]`)?.value || "";
    const feedback = card?.querySelector(".balance-feedback");
    const correct = selected === account.subcategory;
    allCorrect = allCorrect && correct;
    card?.classList.toggle("correct", correct);
    card?.classList.toggle("incorrect", !correct);
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = correct
        ? `Correcto. ${account.explain}`
        : `Debe ir en ${balanceSubcategoryLabels[account.subcategory]}. ${account.explain}`;
    }
  });
  updateBalanceTotals();
  const totals = { activo: 0, pasivo: 0, patrimonio: 0 };
  data.builder.forEach((account) => {
    const selected = root.querySelector(`[data-builder="${account.id}"]`)?.value;
    if (selected?.startsWith("activo")) totals.activo += account.amount;
    if (selected?.startsWith("pasivo")) totals.pasivo += account.amount;
    if (selected === "patrimonio") totals.patrimonio += account.amount;
  });
  const diff = totals.activo - (totals.pasivo + totals.patrimonio);
  const status = root.querySelector("[data-balance-status]");
  if (!status) return;
  status.hidden = false;
  status.classList.toggle("success", allCorrect && diff === 0);
  status.classList.toggle("warning", !(allCorrect && diff === 0));
  status.innerHTML = allCorrect && diff === 0
    ? "<strong>Balance cuadrado.</strong><p>Excelente: tus clasificaciones cumplen Activo = Pasivo + Patrimonio.</p>"
    : `<strong>Revisa la clasificación.</strong><p>Diferencia actual: ${money(diff)}. Pista: verifica si mezclaste activos corrientes/no corrientes o pasivos con patrimonio.</p>`;
}

function initBalancePractice() {
  const root = document.querySelector("#balancePractice");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";
  root.addEventListener("click", (event) => {
    const levelButton = event.target.closest("[data-balance-level]");
    if (levelButton) {
      renderBalancePracticeLevel(levelButton.dataset.balanceLevel);
      return;
    }
    const classifyButton = event.target.closest("[data-classify]");
    if (classifyButton) {
      const card = root.querySelector(`[data-classify-card="${classifyButton.dataset.classify}"]`);
      card?.querySelectorAll("[data-classify]").forEach((button) => button.classList.remove("selected"));
      classifyButton.classList.add("selected");
      card?.classList.remove("correct", "incorrect");
      const feedback = card?.querySelector(".balance-feedback");
      if (feedback) feedback.hidden = true;
      return;
    }
    const action = event.target.closest("[data-balance-action]")?.dataset.balanceAction;
    if (action === "verify-classification") verifyBalanceClassification();
    if (action === "verify-builder") verifyBalanceBuilder();
  });
  root.addEventListener("change", (event) => {
    if (event.target.matches("[data-builder]")) {
      event.target.closest(".balance-builder-card")?.classList.remove("correct", "incorrect");
      const feedback = event.target.closest(".balance-builder-card")?.querySelector(".balance-feedback");
      if (feedback) feedback.hidden = true;
      updateBalanceTotals();
    }
  });
  renderBalancePracticeLevel(root.dataset.level || "facil");
}

function renderBalancePracticeArea() {
  const container = document.querySelector("#balanceView");
  if (!container) return;
  const showBalancePractice = state.courseId === "analisis-estados-financieros" && state.weekId === "aef-semana-02";
  if (!showBalancePractice) {
    container.innerHTML = `<article class="empty-state"><h3>Práctica de balance no disponible</h3><p>Esta herramienta está preparada para la Semana 2 del curso de análisis financiero.</p></article>`;
    return;
  }
  container.innerHTML = renderBalancePracticeModule();
  initBalancePractice();
  typesetMath();
}

function renderGuide() {
  const topic = currentTopic();
  document.querySelector("#topicEyebrow").textContent = `${weekLabel(topic.week)} · Concepto clave`;
  if (state.courseId === "ingles-placement-upc") {
    guideView.innerHTML = renderEnglishLevelGuide(topic);
    typesetMath();
    return;
  }
  if (state.courseId === "analisis-estados-financieros") {
    if (state.weekId === "aef-semana-01") {
      guideView.innerHTML = renderFinanceWeek1Guide();
      typesetMath();
      return;
    }
    if (financeWeekGuides[state.weekId]) {
      guideView.innerHTML = renderGenericFinanceGuide(topic);
      typesetMath();
      return;
    }
    guideView.innerHTML = `
      <article class="week-guide">
        <section class="week-hero">
          <span class="eyebrow">${escapeHtml(weekLabel(topic.week))}</span>
          <h2>${escapeHtml(topic.title)}</h2>
          <p class="week-subtitle">${topic.intro ? escapeHtml(topic.intro) : "Contenido pendiente por desarrollar."}</p>
        </section>
      </article>
    `;
    return;
  }
  if (state.courseId === "poder-mercado" && topic.id === "pm-poder-mercado") {
    guideView.innerHTML = renderMarketPowerWeekGuide();
    typesetMath();
    return;
  }
  if (state.courseId === "poder-mercado" && topic.id === "pm-monopolio") {
    guideView.innerHTML = renderMonopolyWeekGuide();
    typesetMath();
    return;
  }
  guideView.innerHTML = `
    <div class="guide-layout">
      <section class="guide-main">
        <p class="eyebrow">${escapeHtml(topic.question)}</p>
        <h2>${escapeHtml(topic.title)}</h2>
        <div class="concept-grid">
          ${topic.explanation.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <div class="deep-box">
          <h3>Ejemplo guiado</h3>
          <p>${escapeHtml(topic.example)}</p>
        </div>
      </section>
      <aside class="formula-box visual-guide">
        <h3>Gráfico</h3>
        ${graphSvg(topic.graph)}
        <div class="math-legend" aria-label="Lectura matemática del gráfico">
          <h3>Lectura matemática</h3>
          ${graphMath(topic.graph)}
        </div>
        <h3>Fórmulas clave</h3>
        ${topic.formulas.map((formula) => `<div class="formula">${escapeHtml(formula)}</div>`).join("")}
      </aside>
    </div>
  `;
  typesetMath();
}

function renderEnglishLevelGuide(topic) {
  return `
    <div class="english-level-guide">
      <section class="english-level-hero">
        <p class="eyebrow">${escapeHtml(weekLabel(topic.week))}</p>
        <h2>${escapeHtml(topic.title)}</h2>
        <p>${escapeHtml(topic.question)}</p>
      </section>
      <section class="english-skill-grid" aria-label="Habilidades del nivel">
        ${(topic.skills || []).map((skill) => `
          <article>
            <span>${escapeHtml(skill.label)}</span>
            <h3>${escapeHtml(skill.title)}</h3>
            <p>${escapeHtml(skill.detail)}</p>
          </article>
        `).join("")}
      </section>
      <section class="english-fill-map">
        <div>
          <h3>What we will add here</h3>
          <ul>
            ${(topic.fill || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>Level goal</h3>
          <p>${escapeHtml(topic.example)}</p>
        </div>
      </section>
    </div>
  `;
}

function updateProgress() {
  const pct = Math.round((state.viewed.size / topics.length) * 100);
  progressText.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
  progressHint.textContent = state.courseId === "analisis-estados-financieros"
    ? `${state.viewed.size} de ${topics.length} módulos revisados.`
    : `${state.viewed.size} de ${topics.length} temas completados.`;
}

function configureCourseIdentity(selectedCourse) {
  document.body.dataset.course = state.courseId;
  const brandSmall = document.querySelector(".topbar .brand small");
  const heroBadges = document.querySelector(".hero-badges");
  const studyOverview = document.querySelector(".study-overview");
  const hubEyebrow = document.querySelector(".study-hub-head .eyebrow");
  const hubTitle = document.querySelector(".study-hub-head h2");
  const hubIntro = document.querySelector(".study-hub-head div > p:not(.eyebrow)");
  const sidebarTitle = document.querySelector(".sidebar h2");
  const learnTitle = document.querySelector("#learnTitle");
  const learnIntro = document.querySelector("#learn .section-head > div > p:not(.eyebrow)");
  const markButton = document.querySelector("#markTopic");
  const progressLabel = document.querySelector(".progress-panel > span");
  const progressSmall = document.querySelector(".progress-panel small");

  if (brandSmall) {
    brandSmall.textContent = state.courseId === "analisis-estados-financieros" ? "Estados financieros" : selectedCourse.subtitle || "Unidad 1";
  }

  if (state.courseId === "analisis-estados-financieros") {
    document.title = "GE | Análisis de Estados Financieros";
    if (heroBadges) {
      heroBadges.innerHTML = `
        <span>📄 Lectura financiera</span>
        <span>🧾 Clasificación contable</span>
        <span>📚 NIC 1</span>
        <span>✅ Examen criterio</span>
      `;
    }
    if (studyOverview) {
      studyOverview.setAttribute("aria-label", "Método de aprendizaje financiero");
      studyOverview.innerHTML = `
        <article class="overview-card">
          <span class="card-icon">01</span>
          <h2>Lee</h2>
          <p>Parte desde el Marco Conceptual y ubica qué problema contable intenta resolver cada norma.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">02</span>
          <h2>Clasifica</h2>
          <p>Ordena cuentas, estados financieros, notas y revelaciones como si estuvieras revisando un reporte real.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">03</span>
          <h2>Interpreta</h2>
          <p>Conecta cada partida con decisiones de usuarios: inversionistas, acreedores, gerencia y analistas.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">04</span>
          <h2>Evalúa</h2>
          <p>Resuelve preguntas de criterio para detectar omisiones, errores materiales y revelaciones necesarias.</p>
        </article>
      `;
    }
    if (hubEyebrow) hubEyebrow.textContent = "Laboratorio financiero";
    if (hubTitle) hubTitle.textContent = "Módulos de análisis";
    if (hubIntro) hubIntro.textContent = "Elige una semana para estudiar la guía, revisar criterios contables y practicar con examen teórico.";
    if (sidebarTitle) sidebarTitle.textContent = "Mapa contable";
    if (learnTitle) learnTitle.innerHTML = '<span class="title-icon">📄</span> Lectura guiada';
    if (learnIntro) learnIntro.textContent = "Estudia el criterio contable, clasifica la información y conecta cada concepto con la presentación financiera.";
    if (markButton) markButton.textContent = "Marcar módulo revisado";
    if (progressLabel) progressLabel.textContent = "Avance de lectura";
    if (progressSmall) progressSmall.textContent = "Revisa cada módulo como si estuvieras auditando una idea financiera.";
    return;
  }

  if (state.courseId === "ingles-placement-upc") {
    document.title = "UPC Placement | English";
    if (brandSmall) brandSmall.textContent = "English";
    if (heroBadges) {
      heroBadges.innerHTML = `
        <span>Grammar</span>
        <span>Reading</span>
        <span>Listening</span>
        <span>Vocabulary</span>
      `;
    }
    if (studyOverview) {
      studyOverview.setAttribute("aria-label", "Método de preparación en inglés");
      studyOverview.innerHTML = `
        <article class="overview-card">
          <span class="card-icon">01</span>
          <h2>Diagnostica</h2>
          <p>Ubica el nivel real antes de subir dificultad para evitar huecos de base.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">02</span>
          <h2>Construye</h2>
          <p>Refuerza grammar y vocabulary por nivel con ejemplos cortos y repetibles.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">03</span>
          <h2>Comprende</h2>
          <p>Entrena reading y listening con foco en idea principal, detalle e inferencia.</p>
        </article>
        <article class="overview-card">
          <span class="card-icon">04</span>
          <h2>Simula</h2>
          <p>Resuelve preguntas tipo placement para medir velocidad, precisión y errores.</p>
        </article>
      `;
    }
    if (hubEyebrow) hubEyebrow.textContent = "UPC English";
    if (hubTitle) hubTitle.textContent = "Level route";
    if (hubIntro) hubIntro.textContent = "Move from Basic to B2 with grammar, reading, listening and vocabulary.";
    if (sidebarTitle) sidebarTitle.textContent = "Levels";
    if (learnTitle) learnTitle.innerHTML = '<span class="title-icon">EN</span> English level';
    if (learnIntro) learnIntro.textContent = "Work through objectives, skills and key topics for each placement level.";
    if (markButton) markButton.textContent = "Mark level as reviewed";
    if (progressLabel) progressLabel.textContent = "English progress";
    if (progressSmall) progressSmall.textContent = "Complete the level route before the final mock test.";
    return;
  }

  document.title = "GE | Guías de Economía y Finanzas";
  if (heroBadges) {
    heroBadges.innerHTML = `
      <span>📘 Guía</span>
      <span>🧠 Teoría</span>
      <span>✍️ Ejercicios</span>
      <span>📈 Progreso</span>
    `;
  }
  if (studyOverview) {
    studyOverview.setAttribute("aria-label", "Resumen de la plataforma");
    studyOverview.innerHTML = `
      <article class="overview-card">
        <span class="card-icon">📘</span>
        <h2>Aprende</h2>
        <p>Conceptos, fórmulas y ejemplos explicados con una ruta clara de estudio.</p>
      </article>
      <article class="overview-card">
        <span class="card-icon">✍️</span>
        <h2>Practica</h2>
        <p>Preguntas teóricas y ejercicios numéricos por semana para reforzar dominio.</p>
      </article>
      <article class="overview-card">
        <span class="card-icon">📈</span>
        <h2>Mide tu avance</h2>
        <p>Marca temas vistos y revisa resultados para saber dónde enfocar el repaso.</p>
      </article>
    `;
  }
  if (hubEyebrow) hubEyebrow.textContent = "Curso";
  if (hubTitle) hubTitle.textContent = "Guía de estudio";
  if (hubIntro) hubIntro.textContent = "Selecciona una semana y trabaja su guía, examen teórico o ejercicios prácticos desde un solo lugar.";
  if (sidebarTitle) sidebarTitle.textContent = "Temas clave";
  if (learnTitle) learnTitle.innerHTML = '<span class="title-icon">📘</span> Conceptos explicados';
  if (learnIntro) learnIntro.textContent = "Estudia la idea central, conecta la fórmula con el gráfico y revisa un ejemplo guiado.";
  if (markButton) markButton.textContent = "Marcar tema visto";
  if (progressLabel) progressLabel.textContent = "Progreso de la unidad";
  if (progressSmall) progressSmall.textContent = "Avanza paso a paso en la unidad.";
}

function activateSection(sectionId) {
  document.querySelectorAll(".week-mode-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
  document.querySelectorAll(".app-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
  document.querySelector(".workspace")?.classList.toggle("exam-mode", sectionId !== "learn");
}

function updatePlacementCountdown() {
  const daysNode = document.querySelector("#countdownDays");
  const hoursNode = document.querySelector("#countdownHours");
  const minutesNode = document.querySelector("#countdownMinutes");
  const labelNode = document.querySelector("#countdownLabel");
  if (!daysNode || !hoursNode || !minutesNode) return;

  const diff = placementTargetDate.getTime() - Date.now();
  const remaining = Math.max(0, diff);
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const days = Math.floor(remaining / day);
  const hours = Math.floor((remaining % day) / hour);
  const minutes = Math.floor((remaining % hour) / minute);

  daysNode.textContent = String(days);
  hoursNode.textContent = String(hours).padStart(2, "0");
  minutesNode.textContent = String(minutes).padStart(2, "0");
  if (labelNode) {
    labelNode.textContent = diff <= 0 ? "The placement test has started." : "For June 20 at 10:00 a.m.";
  }
}

function startPlacementCountdown() {
  updatePlacementCountdown();
  window.setInterval(updatePlacementCountdown, 30 * 1000);
}

function showOnly(view) {
  coursesView.classList.toggle("hidden", view !== "courses");
  appShell.classList.toggle("hidden", view !== "app");
  if (view === "courses") {
    document.body.dataset.course = "placement";
    document.title = "UPC Placement Test | Preparation";
    updatePlacementCountdown();
  }
}

function renderCourses() {
  courseList.innerHTML = courses.map((course) => `
    <button class="course-card" data-course="${course.id}" data-acronym="${escapeHtml(course.acronym)}">
      <span>${escapeHtml(course.subtitle)}</span>
      <h2>${escapeHtml(course.title)}</h2>
      <p>${escapeHtml(course.description)}</p>
      <div class="course-meta">
        <span>📘 Guía</span>
        <span>🧠 Teoría</span>
        <span>✍️ Ejercicios</span>
      </div>
      <div class="course-progress-note" aria-label="Aviso de progreso">
        <span>Progreso</span>
        <p>No confiar en los datos brindados.</p>
      </div>
      <strong>Abrir plataforma</strong>
    </button>
  `).join("");
}

function openCourse(courseId) {
  const selectedCourse = courseContent[courseId];
  if (!selectedCourse) return;
  state.courseId = courseId;
  weeks = selectedCourse.weeks;
  topics = selectedCourse.topics;
  theoryData = selectedCourse.theoryData;
  practiceBanks = selectedCourse.practiceBanks;
  state.weekId = weeks[0].id;
  state.topicId = topics[0].id;
  state.theoryLevel = "facil";
  state.practiceLevel = "facil";
  state.viewed = new Set();
  document.querySelector("#courseHeroTitle").textContent = selectedCourse.heroTitle;
  document.querySelector("#courseHeroSubtitle").textContent = selectedCourse.heroSubtitle;
  configureCourseIdentity(selectedCourse);
  renderWeekSelects();
  renderWeekTabs();
  renderTopics();
  renderGuide();
  renderChoiceQuiz(weeks[0].id, "facil");
  renderPracticeQuiz(weeks[0].id, "facil");
  renderBalancePracticeArea();
  updateProgress();
  showOnly("app");
  configureWeekModeTabs();
  activateSection("learn");
  window.scrollTo({ top: 0, behavior: "instant" });
  typesetMath();
}

function optionQuestion(prompt, options, answer, explain, graph = "") {
  return { type: "choice", prompt, options, answer, explain, graph };
}

function numberQuestion(prompt, answer, explain, tolerance = 0.01) {
  return { type: "number", prompt, answer, explain, tolerance };
}

function textQuestion(prompt, answer, explain) {
  return { type: "text", prompt, answer, explain };
}

let theoryData = {
  "semana-01": {
    facil: [
      ["¿Qué representa una función de producción?", "La relación técnica entre insumos y producción", ["La cantidad de dinero que gana la empresa", "La demanda de los consumidores", "La tasa de interés del mercado"], "La función de producción muestra cuánto puede producirse con ciertas cantidades de factores."],
      ["¿Qué mantiene constante una isocuanta?", "El nivel de producción", ["El costo total", "El precio del producto", "La cantidad de trabajadores"], "Moverse sobre una isocuanta cambia la mezcla de insumos, pero mantiene constante y."],
      ["¿Qué mide el producto marginal?", "El cambio de producción al aumentar un insumo", ["El costo promedio de producir", "La ganancia total de la empresa", "La pendiente de la isocosto"], "El PMg se calcula variando un insumo y manteniendo los demás constantes."],
      ["¿Qué caracteriza al corto plazo?", "Al menos un factor de producción está fijo", ["Todos los factores son variables", "No existen costos variables", "La empresa no puede producir"], "En corto plazo hay rigideces: algún factor no se ajusta todavía."],
      ["¿Qué forma tienen las isocuantas de proporciones fijas?", "Forma de L", ["Rectas paralelas", "Círculos concéntricos", "Curvas verticales únicamente"], "En proporciones fijas los factores se usan como paquete técnico."],
      ["¿Qué forma tienen las isocuantas de sustitutos perfectos?", "Rectas", ["Forma de L", "Puntos aislados", "Curvas cerradas"], "Si la sustitución es constante, la isocuanta es lineal."],
      ["En Cobb-Douglas, ¿qué se usa para clasificar rendimientos?", "La suma de exponentes", ["El costo fijo", "El precio del bien", "El número de trabajadores únicamente"], "Para y=A \\(x_1\\)^a \\(x_2\\)^b, se compara \\(a+b\\) con 1."],
      ["¿Qué significa RTS?", "Relación técnica de sustitución", ["Renta total semanal", "Rendimiento total simple", "Razón de salario total"], "La RTS indica sustitución técnica entre factores manteniendo producción."],
      ["¿Qué pasa con rendimientos constantes de escala?", "La producción cambia en la misma proporción que los insumos", ["La producción crece menos que los insumos", "La producción se vuelve cero", "El costo fijo desaparece"], "Constante significa proporcionalidad entre escala de insumos y producto."],
      ["¿Qué pregunta responde la tecnología de producción?", "Qué combinaciones de insumos pueden producir", ["Qué precio aceptan los consumidores", "Qué impuestos paga la empresa", "Qué utilidad obtiene un consumidor"], "La tecnología es una restricción física o técnica de producción."]
    ],
    medio: [
      ["Si \\(PMg_1\\) aumenta respecto a \\(PMg_2\\), ¿qué ocurre con la magnitud de RTS=-\\(PMg_1\\)/\\(PMg_2\\)?", "Aumenta", ["Disminuye siempre", "Se vuelve cero necesariamente", "No cambia nunca"], "La RTS depende del cociente entre productos marginales."],
      ["¿Por qué PMg y rendimientos de escala no son lo mismo?", "PMg cambia un factor; escala cambia todos", ["Ambos miden costos monetarios", "PMg solo existe en largo plazo", "Escala solo cambia precios"], "El PMg es marginal en un factor; la escala mueve todo el paquete de insumos."],
      ["Si \\(a+b\\)<1 en Cobb-Douglas, la tecnología presenta:", "Rendimientos decrecientes", ["Rendimientos crecientes", "Rendimientos constantes", "Sustitutos perfectos"], "La producción crece menos que proporcionalmente al escalar insumos."],
      ["Si \\(f(tx)=t^2f(x)\\), ¿qué tipo de rendimientos hay?", "Crecientes", ["Constantes", "Decrecientes", "Proporciones fijas"], "t² es mayor que t para t>1, por tanto la producción crece más que proporcionalmente."],
      ["¿Qué indica una isocuanta más alejada del origen?", "Un mayor nivel de producción", ["Un menor costo fijo", "Un menor salario", "Una menor tecnología"], "En el mapa de isocuantas, niveles más altos suelen estar más lejos del origen."],
      ["¿Qué supuesto suele explicar isocuantas convexas?", "Sustitución técnica cada vez más difícil", ["Costos fijos crecientes", "Precios constantes", "Demanda perfectamente elástica"], "La convexidad refleja que sustituir un factor por otro se vuelve progresivamente más costoso técnicamente."],
      ["¿Qué significa tecnología monótona?", "Más insumos no reducen la producción", ["Más insumos reducen siempre la producción", "Todos los insumos cuestan lo mismo", "La empresa maximiza beneficios automáticamente"], "La monotonicidad implica que disponer de más factores no empeora el plan productivo."],
      ["¿Qué representa A en una Cobb-Douglas básica?", "Productividad o escala tecnológica", ["Costo fijo medio", "Precio del capital", "Beneficio contable"], "A desplaza la función de producción: más A permite más producto con los mismos insumos."],
      ["¿Qué ocurre en largo plazo con los factores?", "Todos pueden variar", ["Todos quedan fijos", "Solo varía el precio", "No hay tecnología"], "El largo plazo es el horizonte donde la empresa ajusta todos los factores."],
      ["Si la RTS es -4, ¿qué significa su magnitud?", "Se sacrifican 4 unidades de un factor por 1 del otro aproximadamente", ["El costo total es 4", "La producción cae a 4", "El precio del producto es 4"], "La RTS mide sustitución sobre la misma isocuanta."]
    ],
    dificil: [
      ["¿Cómo puede haber PMg decreciente y rendimientos crecientes de escala?", "Porque PMg evalúa un factor y escala evalúa todos", ["Porque ambos son idénticos", "Porque no existe corto plazo", "Porque los costos fijos son negativos"], "No hay contradicción: son ejercicios comparativos distintos."],
      ["En \\(y=AL^aK^b\\), si a<1 y b<1 pero \\(a+b\\)>1, entonces:", "Cada PMg puede ser decreciente y la escala creciente", ["La escala debe ser decreciente", "Los PMg son necesariamente crecientes", "La función no puede producir"], "La concavidad parcial puede convivir con rendimientos crecientes conjuntos."],
      ["Una RTS decreciente en magnitud suele indicar:", "Convexidad de isocuantas", ["Isocuantas lineales", "Proporciones fijas exactas", "Ausencia de sustitución"], "A medida que se reemplaza un factor por otro, la tasa de sustitución cambia."],
      ["Si \\(f(tx)=t^{0.8}f(x)\\), la clasificación correcta es:", "Rendimientos decrecientes", ["Crecientes", "Constantes", "Perfectamente fijos"], "El exponente 0.8 es menor que 1."],
      ["¿Qué se mantiene constante al calcular PMg de \\(x_1\\)?", "Los demás insumos", ["La producción", "El beneficio", "El costo total"], "El producto marginal es una derivada parcial."],
      ["¿Qué se mantiene constante al calcular RTS?", "La producción", ["El costo total", "El precio", "El beneficio contable"], "La RTS se mide sobre una misma isocuanta."],
      ["¿Por qué la tecnología restringe a la empresa?", "Porque no cualquier combinación de insumos y producto es factible", ["Porque el precio siempre es cero", "Porque el consumidor decide los insumos", "Porque los factores no tienen productividad"], "La empresa solo puede elegir planes técnicamente posibles."],
      ["En una tecnología Leontief, usar más de un insumo sin el complemento:", "No aumenta producción en la misma proporción", ["Siempre duplica producción", "Convierte la isocuanta en recta", "Elimina la restricción técnica"], "El cuello de botella está en el factor faltante."],
      ["Si una función es homogénea de grado 1, presenta:", "Rendimientos constantes", ["Rendimientos crecientes", "Rendimientos decrecientes", "Producto marginal nulo"], "La homogeneidad de grado 1 implica f(tx)=tf(x)."],
      ["¿Cuál es la lectura económica de PMg decreciente?", "Cada unidad adicional del factor aporta menos producto", ["El producto total siempre cae", "El precio siempre aumenta", "La tecnología deja de existir"], "El aporte marginal cae, aunque el producto total aún puede subir."]
    ]
  },
  "semana-02-03": {
    facil: [
      ["¿Qué busca maximizar la empresa en esta hipótesis?", "El beneficio económico", ["La utilidad del consumidor", "El costo fijo", "La inflación"], "La hipótesis central es que la empresa elige para maximizar π."],
      ["¿Qué incluye el costo económico?", "Costos contables y costos de oportunidad", ["Solo salarios pagados", "Solo impuestos", "Solo costos fijos"], "El costo económico incorpora alternativas sacrificadas."],
      ["¿Qué toma como dado una empresa competitiva?", "El precio del mercado", ["La cantidad total del mercado", "La utilidad del consumidor", "El salario de cada trabajador elegido libremente"], "La empresa competitiva es precio-aceptante."],
      ["¿Cuál es la regla marginal del factor variable?", "\\(p\\cdot PMg\\) = w", ["CMe = CFMe", "RTS = 0", "F = y"], "El valor del producto marginal se iguala al costo del factor."],
      ["Si \\(p\\cdot PMg\\)>w, la empresa debe:", "Usar más del insumo", ["Usar menos del insumo", "Cerrar siempre", "Mantener todo fijo"], "El insumo aporta más valor de lo que cuesta."],
      ["Si \\(p\\cdot PMg\\)<w, la empresa debe:", "Usar menos del insumo", ["Usar más del insumo", "Duplicar todo", "Ignorar el salario"], "El insumo cuesta más que su aporte marginal."],
      ["La condición \\(IMg=CMg\\) se refiere a:", "La cantidad óptima de producción", ["La mezcla exacta de insumos", "El costo fijo", "La curva de aprendizaje"], "Se produce hasta igualar ingreso adicional y costo adicional."],
      ["¿Qué es costo de oportunidad?", "El valor de la mejor alternativa sacrificada", ["El costo fijo dividido entre producción", "El precio de venta", "El gasto en publicidad"], "Elegir una opción implica renunciar a otra."],
      ["Una recta isobeneficio mantiene constante:", "El beneficio", ["La producción", "El costo variable medio", "La RTS"], "Agrupa combinaciones con el mismo π."],
      ["En largo plazo, los factores:", "Pueden ajustarse", ["Todos son fijos", "No tienen precio", "No afectan producción"], "El largo plazo permite modificar todos los insumos." ]
    ],
    medio: [
      ["Si \\(IMg>CMg\\), ¿qué indica?", "Producir una unidad más aumenta el beneficio", ["La empresa debe producir menos", "El costo fijo desaparece", "La producción ya es excesiva"], "El ingreso extra supera el costo extra."],
      ["Si \\(IMg<CMg\\), ¿qué indica?", "La última unidad reduce el beneficio", ["Debe aumentarse producción", "La empresa no tiene costos", "El precio no importa"], "El costo adicional supera el ingreso adicional."],
      ["¿Por qué beneficio económico suele ser menor que el contable?", "Porque resta costos de oportunidad", ["Porque ignora salarios", "Porque duplica ingresos", "Porque no considera costos"], "El económico exige cubrir también alternativas sacrificadas."],
      ["Si baja el precio de un factor fijo en corto plazo, la condición de x variable:", "No cambia directamente", ["Siempre exige más x variable", "Siempre exige menos x variable", "Desaparece"], "La FOC del factor variable depende de p, PMg y w variable."],
      ["La demanda inversa de un factor relaciona su precio con:", "La cantidad demandada del factor vía \\(p\\cdot PMg\\)", ["El costo fijo medio", "La utilidad del consumidor", "El impuesto a la renta"], "w=\\(p\\cdot PMg\\) permite leer cuánto valdría contratar cierta cantidad."],
      ["La estática comparativa analiza:", "Cómo cambia el óptimo cuando cambian precios o parámetros", ["Solo definiciones contables", "La forma de una factura", "Preferencias de consumidores sin empresas"], "Compara decisiones óptimas antes y después de un cambio."],
      ["Maximizar ingresos puede fallar como objetivo porque:", "Ignora costos", ["No existen precios", "Siempre reduce ventas", "El ingreso marginal es imposible"], "Más ingresos no implican más beneficios si los costos suben mucho."],
      ["En largo plazo, la condición p·\\(PMg_i\\)=w_i se cumple:", "Para cada factor variable", ["Solo para el factor fijo", "Solo para el producto", "Solo cuando π=0"], "Todos los factores ajustables deben justificar su costo marginal."],
      ["Si el valor marginal de un insumo cae al contratar más, el equilibrio se logra:", "Ajustando cantidad hasta que \\(p\\cdot PMg\\)=w", ["Fijando PMg en infinito", "Eliminando el precio", "Ignorando el salario"], "La ley de rendimientos marginales ayuda a cerrar la brecha."],
      ["El axioma débil de maximización evalúa:", "Consistencia de decisiones ante distintos precios", ["La forma exacta de isocuantas", "La inflación futura", "El costo fijo medio"], "Sirve para contrastar elecciones observadas con maximización." ]
    ],
    dificil: [
      ["Si p sube y w no cambia, la condición \\(p\\cdot PMg\\)=w exige normalmente:", "Un PMg menor y más uso del insumo si PMg es decreciente", ["Un PMg mayor y menos uso siempre", "Producción cero", "Costo fijo infinito"], "Al subir p, puede contratarse más hasta que el PMg baje lo suficiente."],
      ["¿Qué diferencia hay entre maximizar π en x y maximizar π en y?", "Una usa tecnología de insumos y otra costos como función de producción", ["No hay diferencia conceptual", "La primera ignora precios", "La segunda ignora ingresos"], "Son formas relacionadas por la función de producción/costos."],
      ["Si \\(p\\cdot PMg\\)=w en un punto con PMg creciente, la condición puede no garantizar máximo porque:", "La segunda condición puede fallar", ["La primera condición nunca sirve", "El salario no existe", "El precio no importa"], "Un óptimo requiere revisar curvatura o comportamiento alrededor."],
      ["El beneficio económico nulo en largo plazo competitivo significa:", "Se cubren todos los costos, incluido oportunidad", ["La empresa no paga salarios", "El dueño no recibe nada contablemente", "La producción es cero"], "π económico cero aún remunera factores y oportunidades normales."],
      ["Una isobeneficio más alta representa:", "Mayor beneficio para combinaciones dadas", ["Menor producción necesariamente", "Mayor costo fijo solamente", "Menor precio de factores"], "En el gráfico, la empresa busca la recta alcanzable con mayor π."],
      ["Si una empresa no maximiza beneficios, puede ser vulnerable porque:", "Otra empresa podría usar recursos de forma más rentable", ["Los consumidores desaparecen", "Los costos fijos se vuelven negativos", "La tecnología cambia sola"], "La presión competitiva castiga decisiones persistentemente ineficientes."],
      ["El término \\(w_2\\)\\(x_2\\) fijo en corto plazo afecta:", "El nivel de beneficio, no la FOC de \\(x_1\\)", ["La pendiente \\(PMg_1\\) directamente", "La tecnología física", "El precio del producto"], "Un costo fijo desplaza π pero no cambia la condición marginal del variable."],
      ["Si p·\\(PMg_1\\)=\\(w_1\\) y p·\\(PMg_2\\)=\\(w_2\\), entonces:", "Cada insumo iguala valor marginal y costo", ["Los insumos deben ser iguales", "Los costos fijos son cero", "La producción no depende de insumos"], "Es la condición de largo plazo con dos factores variables."],
      ["El costo de oportunidad del capital propio es relevante porque:", "Ese capital podría ganar retorno en otra alternativa", ["No tiene precio jamás", "Solo importa si hay deuda", "Aumenta la producción física"], "Usar recursos propios también sacrifica rendimientos alternativos."],
      ["La condición \\(IMg=CMg\\) en competencia perfecta se simplifica frecuentemente a:", "p=CMg", ["p=CFMe", "p=RTS", "p=PMg del capital"], "Para una empresa precio-aceptante, IMg es el precio." ]
    ]
  },
  "semana-04": {
    facil: [
      ["¿Qué busca la minimización de costos?", "Producir una cantidad dada al menor costo", ["Elegir cualquier cantidad de producción", "Maximizar utilidad del consumidor", "Eliminar la tecnología"], "El nivel de producción se toma como objetivo dado."],
      ["¿Qué representa una recta isocosto?", "Combinaciones de insumos con igual costo", ["Combinaciones con igual producción", "Niveles de beneficio iguales", "Curvas de demanda"], "C=\\(w_1\\)\\(x_1\\)+\\(w_2\\)\\(x_2\\) se mantiene constante."],
      ["¿Cuál es la pendiente de la isocosto?", "-\\(w_1/w_2\\)", ["-\\(PMg_1\\)/\\(PMg_2\\)", "p/\\(w_1\\)", "C/y"], "Se obtiene despejando \\(x_2\\) en la ecuación de costo."],
      ["¿Dónde está el óptimo interior de minimización?", "Tangencia entre isocuanta e isocosto", ["Máximo de utilidad", "Punto donde \\(x_1\\)=0 siempre", "Donde CMg=0"], "La empresa toca la isocuanta objetivo con la isocosto más baja."],
      ["La condición de tangencia es:", "RTS=-\\(w_1/w_2\\)", ["p=CMg", "CMe=CFMe", "PMg=0"], "Iguala sustitución técnica con sustitución de mercado."],
      ["¿Qué es C(y)?", "Costo mínimo para producir y", ["Ingreso total", "Producto marginal", "Costo de oportunidad solamente"], "Es el resultado del problema de minimización."],
      ["¿Qué método ayuda a resolver restricciones?", "Lagrange", ["Promedio móvil", "Interés compuesto", "Regresión lineal únicamente"], "Lagrange incorpora la restricción de producción al objetivo."],
      ["En proporciones fijas el óptimo suele ubicarse:", "En el vértice de la isocuanta", ["En cualquier punto de una recta", "Siempre con \\(x_1\\)=0", "Siempre con \\(x_2\\)=0"], "La receta técnica fija la proporción."],
      ["En sustitutos perfectos puede aparecer solución:", "De esquina", ["Siempre interior", "Siempre en L", "Sin precios"], "Se tiende a usar el factor más barato por unidad efectiva."],
      ["La dualidad conecta decisiones de:", "Producción y costos", ["Consumo y ocio", "Inflación y tipo de cambio", "Ahorro y deuda pública"], "Maximizar producción con gasto dado y minimizar costo para y dado son problemas duales."]
    ],
    medio: [
      ["Si \\(PMg_1\\)/\\(w_1\\) > \\(PMg_2\\)/\\(w_2\\), conviene reasignar gasto hacia:", "El factor 1", ["El factor 2", "Ningún factor", "El producto final"], "El factor 1 aporta más producto por unidad monetaria."],
      ["Una subida de \\(w_1\\) hace que la isocosto:", "Se vuelva más empinada en valor absoluto", ["No cambie nunca", "Se vuelva una isocuanta", "Elimine el costo total"], "La pendiente -\\(w_1/w_2\\) cambia cuando cambia el precio relativo."],
      ["¿Qué se mantiene fijo en la minimización de costos?", "El nivel de producción objetivo", ["El beneficio", "La utilidad del consumidor", "La cantidad de dinero de consumidores"], "La empresa busca cómo producir y, no cuánto y elegir."],
      ["La condición \\(PMg_1\\)/\\(w_1\\) = \\(PMg_2\\)/\\(w_2\\) significa:", "Igual producto marginal por unidad monetaria", ["Igual cantidad física de factores", "Igual precio de producto", "Costo fijo igual a cero"], "Si no se iguala, puede reasignarse gasto para reducir costo."],
      ["Si una isocosto no alcanza la isocuanta objetivo:", "No permite producir ese nivel", ["Es necesariamente óptima", "Tiene costo demasiado alto", "La tecnología desaparece"], "Debe al menos tocar/intersectar la isocuanta objetivo."],
      ["Las demandas condicionadas de factores dependen de:", "Precios de factores y producción objetivo", ["Solo preferencias del consumidor", "Solo inflación", "Solo costo fijo histórico"], "Son \\(x_1\\)(w,y), \\(x_2\\)(w,y)."],
      ["Con tecnología Leontief, cambiar precios altera principalmente:", "El costo, no la proporción técnica", ["La receta física de producción", "La forma lineal de la isocuanta", "La necesidad del complemento"], "La proporción técnica está dada por la tecnología."],
      ["Si RTS difiere de -\\(w_1/w_2\\) en un punto interior:", "Se puede reducir costo cambiando mezcla", ["Ya es óptimo", "No hay producción", "El costo fijo es cero"], "La sustitución técnica y económica no están alineadas."],
      ["La isocosto más baja relevante es aquella que:", "Toca la isocuanta objetivo", ["Está muy por debajo sin tocarla", "Tiene pendiente positiva", "Ignora precios"], "Debe ser factible y de menor costo posible."],
      ["¿Qué significa minimizar costos según tecnología?", "La forma de la función de producción cambia el tipo de solución", ["Todas las tecnologías tienen la misma solución", "Los precios no importan", "La producción no importa"], "Cobb-Douglas, Leontief y sustitutos perfectos se resuelven distinto."]
    ],
    dificil: [
      ["Si hay solución interior, ¿qué falla si solo verificas RTS=-\\(w_1/w_2\\)?", "Puede faltar verificar factibilidad y mínimo", ["Nada, siempre basta", "La producción no importa", "Los precios sobran"], "La tangencia es necesaria bajo condiciones, pero hay que revisar restricción y tipo de tecnología."],
      ["En sustitutos perfectos, una tangencia interior es menos esperable porque:", "La RTS es constante y se compara con precios relativos", ["No hay precios", "La isocuanta es en L", "La producción es imposible"], "Si la tasa técnica no coincide exactamente con precios, aparece esquina."],
      ["En Leontief, la RTS no guía igual porque:", "No hay sustitución suave entre factores", ["La isocosto no existe", "Los factores no tienen precio", "La producción no requiere insumos"], "La isocuanta tiene vértice, no pendiente única en todo punto."],
      ["La dualidad permite obtener costos desde:", "La tecnología y los precios de factores", ["Las preferencias del consumidor únicamente", "El precio del dinero solamente", "La publicidad"], "La función de costos resume el valor mínimo del problema tecnológico."],
      ["Si \\(w_1\\) baja, la combinación óptima en Cobb-Douglas normalmente:", "Usa relativamente más \\(x_1\\)", ["Usa menos \\(x_1\\) siempre", "No cambia nunca", "Elimina \\(x_2\\) completamente siempre"], "Al abaratarse un factor, la empresa tiende a sustituir hacia él."],
      ["El multiplicador de Lagrange en costo puede interpretarse como:", "Costo marginal de elevar la producción objetivo", ["Costo fijo contable", "Precio del consumidor", "Cantidad de capital"], "Mide el cambio del costo mínimo ante un cambio pequeño en y."],
      ["Si \\(PMg_1\\)/\\(w_1\\) < \\(PMg_2\\)/\\(w_2\\), la empresa debería:", "Usar relativamente más factor 2", ["Usar más factor 1", "Mantener mezcla necesariamente", "Cerrar sin comparar"], "El factor 2 rinde más por unidad monetaria."],
      ["La minimización de costos es 'condicional' porque:", "Depende de un y dado", ["Ignora restricciones", "No usa precios", "No requiere tecnología"], "Las demandas de factores son condicionadas al nivel de producción."],
      ["Un cambio tecnológico que eleva PMg puede desplazar:", "La función de costos hacia abajo", ["La producción objetivo a cero", "Los precios de factores necesariamente", "La utilidad del consumidor"], "Más productividad permite producir lo mismo con menos costo."],
      ["La condición de mínimo de costos y máximo de producción con gasto dado son duales porque:", "Comparten la misma tangencia económica-técnica", ["Usan objetivos sin restricciones", "No dependen de precios", "Solo aplican a consumidores"], "Ambas igualan tasa técnica y tasa de mercado desde lados distintos."]
    ]
  },
  "semana-05": {
    facil: [
      ["¿Cómo se descompone el costo total de corto plazo?", "Costo variable más costo fijo", ["Ingreso más beneficio", "PMg más RTS", "Precio más salario"], "\\(C(y)=C_v(y)+F\\)."],
      ["¿Qué mide el costo marginal?", "El costo adicional de producir una unidad más", ["El costo total dividido entre producción", "La producción por trabajador", "La pendiente de una isocuanta"], "CMg es el cambio del costo total ante un cambio en y."],
      ["¿Qué costo siempre disminuye al aumentar producción?", "Costo fijo medio", ["Costo marginal", "Costo total", "Costo variable total"], "CFMe=F/y cae cuando y aumenta."],
      ["¿Cómo se compone el costo medio?", "CVMe + CFMe", ["CMg + RTS", "PMg + salario", "Ingreso + costo fijo"], "El promedio total suma promedio variable y fijo."],
      ["Si CMg está debajo de CMe, CMe:", "Baja", ["Sube", "No existe", "Se vuelve infinito"], "Un marginal menor que el promedio reduce el promedio."],
      ["Si CMg está encima de CMe, CMe:", "Sube", ["Baja", "Se vuelve cero", "No cambia jamás"], "Un marginal mayor que el promedio eleva el promedio."],
      ["La senda de expansión une:", "Combinaciones óptimas de insumos para distintos niveles de producción", ["Precios de consumidores", "Costos hundidos", "Utilidades marginales"], "Une puntos de tangencia entre isocuantas e isocostos."],
      ["Hay economías de escala cuando:", "Producir más reduce el costo medio", ["El costo fijo aumenta", "La producción cae", "El CMg siempre es negativo"], "La escala permite producir a menor costo promedio."],
      ["¿Cómo se calcula \\(EC\\)?", "\\(\\frac{CMg}{CMe}\\)", ["\\(\\frac{CMe}{CFMe}\\)", "\\(\\frac{PMg}{RTS}\\)", "\\(\\frac{F}{y^2}\\)"], "La elasticidad costo-producto se puede expresar como \\(\\frac{CMg}{CMe}\\)."],
      ["¿Cómo se calcula IEE?", "1 - EC", ["EC - 1", "CMg + CMe", "F + y"], "IEE positivo indica economías de escala."]
    ],
    medio: [
      ["Si \\(EC<1\\), entonces:", "Hay economías de escala", ["Hay deseconomías", "No hay producción", "El costo fijo sube"], "\\(IEE=1-EC\\) es positivo."],
      ["Si \\(EC>1\\), entonces:", "Hay deseconomías de escala", ["Hay economías", "El costo medio baja necesariamente", "El costo marginal es cero"], "IEE será negativo."],
      ["Economías de alcance comparan:", "Producir bienes juntos versus por separado", ["Corto plazo versus inflación", "PMg versus RTS", "Trabajo versus ocio"], "Miden ahorro por producción conjunta."],
      ["\\(EA>0\\) indica:", "Economías de alcance", ["Deseconomías de alcance", "Costo fijo nulo", "Producción imposible"], "El costo conjunto es menor que la suma separada."],
      ["La curva de aprendizaje explica:", "Menores costos por experiencia acumulada", ["Mayor costo fijo por definición", "Menor producción por trabajador", "Ausencia de tecnología"], "Aprender haciendo mejora procesos y reduce desperdicio."],
      ["La diferencia entre corto y largo plazo en costos se debe a:", "Rigidez o flexibilidad de factores", ["Preferencias del consumidor", "Color del producto", "Nombre de la empresa"], "En corto plazo algunos factores no se ajustan."],
      ["La relación entre CMg y PMg del factor variable suele ser:", "Inversa", ["Siempre igual", "Nula", "Positiva uno a uno siempre"], "Si el producto marginal sube, producir una unidad adicional requiere menos insumo."],
      ["La curva de costo de largo plazo se deriva de:", "La senda de expansión", ["La utilidad marginal", "El costo hundido", "El precio del consumidor únicamente"], "Cada punto eficiente para un nivel de y genera un costo mínimo."],
      ["Si duplicar producción cuesta menos que duplicar costo, hay:", "Economías de escala", ["Deseconomías", "Costo marginal infinito", "Rendimientos decrecientes necesariamente"], "Es la definición de economías de escala por costos."],
      ["Economías de escala y rendimientos crecientes no son idénticos porque:", "Una habla de costos y la otra de tecnología física", ["Ambas son siempre lo mismo", "Una no usa producción", "La otra no usa insumos"], "Pueden relacionarse, pero pertenecen a planos distintos." ]
    ],
    dificil: [
      ["¿Por qué CMg cruza CMe en su mínimo?", "Porque debajo baja el promedio y encima lo sube", ["Porque el costo fijo se vuelve cero", "Porque PMg desaparece", "Porque EC siempre es negativo"], "Es una propiedad matemática de promedios y marginales."],
      ["Si CMe cae, una lectura posible es:", "CMg está por debajo de CMe", ["CMg está siempre por encima", "CFMe aumenta necesariamente", "La producción cae a cero"], "Mientras el marginal sea menor, arrastra el promedio hacia abajo."],
      ["Un IEE positivo significa:", "EC menor que uno", ["EC mayor que uno", "CMg mayor que CMe siempre", "Costo fijo negativo"], "\\(IEE=1-EC\\)."],
      ["La curva de aprendizaje puede confundirse con economías de escala, pero se diferencia porque:", "Depende de experiencia acumulada, no solo tamaño actual", ["No afecta costos", "Solo existe con producción cero", "No requiere tiempo"], "La escala es tamaño; aprendizaje es experiencia."],
      ["Si producir juntos cuesta más que separado, hay:", "Deseconomías de alcance", ["Economías de alcance", "Costo marginal cero", "IEE positivo necesariamente"], "El costo conjunto no genera ahorro."],
      ["Si CMg=CMe, entonces:", "CMe está en un punto estacionario típico", ["CFMe es cero necesariamente", "La producción es imposible", "PMg es infinito"], "En curvas usuales, el cruce ocurre en el mínimo del promedio."],
      ["La senda de expansión muestra rigideces de corto plazo porque:", "Compara ajustes con factores fijos versus todos variables", ["Elimina la tecnología", "Fija todos los precios en cero", "No considera producción"], "A largo plazo la empresa puede reorganizar mejor los factores."],
      ["Si CMg/CMe=1.2, la interpretación es:", "Deseconomías de escala", ["Economías de escala", "Costo medio mínimo necesariamente menor a cero", "Aprendizaje perfecto"], "\\(EC>1\\) implica IEE<0."],
      ["Si C(y) es lineal con costo fijo positivo, al inicio CMe cae porque:", "El costo fijo se reparte entre más unidades", ["El costo variable desaparece", "CMg es negativo", "La producción no cambia"], "Aunque CMg sea constante, CFMe baja."],
      ["El análisis gráfico de costos ayuda a decidir:", "Qué niveles de producción son más eficientes", ["Qué preferencias tienen consumidores", "Qué moneda usar", "Qué impuesto crear"], "Las curvas muestran costos marginales, medios y escala eficiente." ]
    ]
  }
};

function rotateOptions(options, seed) {
  const copy = [...options];
  const shift = seed % copy.length;
  return [...copy.slice(shift), ...copy.slice(0, shift)];
}

function makeTheoryQuestion(row, index) {
  const [prompt, correct, distractors, explain] = row;
  const options = rotateOptions([correct, ...distractors], index + prompt.length);
  return optionQuestion(prompt, options, options.indexOf(correct), explain);
}

function theoryBank(weekId, level = state.theoryLevel) {
  const bank = theoryData[weekId];
  if (!bank) return [];
  const levels = level === "todas" ? ["facil", "medio", "dificil"] : [level];
  return levels.flatMap((difficulty) => (bank[difficulty] || []).map(buildChoiceQuestion));
}

let practiceBanks = {
  "semana-01": [
    numberQuestion("Para \\(y=4L^{1/2}K^{1/3}\\), calcula \\(a+b\\).", 0.8333, "\\(\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}\\)."),
    numberQuestion("Para \\(y=2x_1^{1/3}x_2^{2/3}\\), calcula \\(a+b\\).", 1, "\\(\\frac{1}{3}+\\frac{2}{3}=1\\)."),
    numberQuestion("Para \\(y=3L K^2\\), calcula la suma de exponentes.", 3, "\\(1+2=3\\)."),
    numberQuestion("Si \\(PMg_1=8\\) y \\(PMg_2=4\\), calcula \\(RTS=-\\frac{PMg_1}{PMg_2}\\).", -2, "\\(-\\frac{8}{4}=-2\\)."),
    numberQuestion("Si \\(PMg_1=12\\) y \\(PMg_2=3\\), calcula \\(RTS\\).", -4, "\\(RTS=-\\frac{12}{3}=-4\\)."),
    numberQuestion("Si \\(y\\) pasa de \\(50\\) a \\(62\\) cuando \\(x\\) aumenta \\(3\\), calcula el \\(PMg\\) promedio.", 4, "\\(\\frac{62-50}{3}=4\\)."),
    numberQuestion("Si \\(y\\) pasa de \\(80\\) a \\(104\\) cuando \\(L\\) aumenta \\(6\\), calcula \\(PMg_L\\) promedio.", 4, "\\(\\frac{104-80}{6}=4\\)."),
    numberQuestion("Para \\(y=10L\\), calcula \\(PMg_L\\).", 10, "La derivada de \\(10L\\) respecto a \\(L\\) es \\(10\\)."),
    numberQuestion("Para \\(y=5K+2L\\), calcula \\(PMg_K\\).", 5, "La derivada respecto a \\(K\\) es \\(5\\)."),
    numberQuestion("Para \\(y=LK\\), con \\(L=4\\) y \\(K=6\\), calcula \\(y\\).", 24, "\\(4\\cdot6=24\\)."),
    numberQuestion("Con rendimientos constantes, si duplicas todos los insumos, \\(y\\) se multiplica por:", 2, "Rendimientos constantes implican el mismo factor de escala."),
    numberQuestion("Con \\(f(tx)=t^2f(x)\\), si \\(t=3\\), \\(y\\) se multiplica por:", 9, "\\(3^2=9\\)."),
    numberQuestion("Con \\(f(tx)=t^{0.5}f(x)\\), si \\(t=4\\), \\(y\\) se multiplica por:", 2, "\\(4^{0.5}=2\\)."),
    numberQuestion("Para \\(y=x_1^{0.4}x_2^{0.4}\\), calcula \\(a+b\\).", 0.8, "\\(0.4+0.4=0.8\\)."),
    numberQuestion("Para \\(y=x_1^{0.7}x_2^{0.5}\\), calcula \\(a+b\\).", 1.2, "\\(0.7+0.5=1.2\\)."),
    numberQuestion("Si la RTS es \\(-4\\) y reduces \\(x_1\\) en \\(3\\), ¿cuánto debe aumentar \\(x_2\\) aproximadamente?", 12, "La magnitud es \\(4\\): \\(4\\cdot3=12\\)."),
    numberQuestion("En proporciones fijas, se requieren \\(2\\) máquinas por unidad. Para \\(15\\) unidades, máquinas:", 30, "\\(2\\cdot15=30\\)."),
    numberQuestion("Si \\(y=\\min\\{x_1,2x_2\\}\\) y \\(x_1=10\\), \\(x_2=8\\), calcula \\(y\\).", 10, "\\(\\min\\{10,16\\}=10\\)."),
    numberQuestion("Si \\(y=3x_1+2x_2\\), \\(x_1=4\\), \\(x_2=5\\), calcula \\(y\\).", 22, "\\(3\\cdot4+2\\cdot5=22\\)."),
    numberQuestion("Si \\(A=2\\), \\(L=9\\), \\(K=4\\) en \\(y=A\\sqrt{LK}\\), calcula \\(y\\).", 12, "\\(2\\sqrt{9\\cdot4}=2\\cdot6=12\\).")
  ],
  "semana-02-03": [
    numberQuestion("Si \\(p=8\\) y \\(PMg=3\\), calcula \\(p\\cdot PMg\\).", 24, "\\(8\\cdot3=24\\)."),
    numberQuestion("Si \\(p=12\\) y \\(PMg=5\\), calcula \\(p\\cdot PMg\\).", 60, "\\(12\\cdot5=60\\)."),
    numberQuestion("Si \\(w=40\\) y \\(p=10\\), calcula el \\(PMg\\) óptimo.", 4, "\\(PMg=\\frac{w}{p}=\\frac{40}{10}=4\\)."),
    numberQuestion("Si \\(w=30\\) y \\(PMg=6\\), calcula \\(p\\) óptimo.", 5, "\\(p=\\frac{w}{PMg}=\\frac{30}{6}=5\\)."),
    numberQuestion("\\(IT=900\\) y \\(CT=650\\). Calcula el beneficio.", 250, "\\(\\pi=900-650=250\\)."),
    numberQuestion("\\(IT=1200\\) y \\(CT=875\\). Calcula el beneficio.", 325, "\\(1200-875=325\\)."),
    numberQuestion("Beneficio contable \\(500\\) y costo de oportunidad \\(180\\). Calcula beneficio económico.", 320, "\\(500-180=320\\)."),
    numberQuestion("Beneficio contable \\(760\\) y costo de oportunidad \\(250\\). Calcula beneficio económico.", 510, "\\(760-250=510\\)."),
    numberQuestion("Ingreso marginal \\(15\\) y costo marginal \\(11\\). Calcula cambio en beneficio.", 4, "\\(15-11=4\\)."),
    numberQuestion("Ingreso marginal \\(9\\) y costo marginal \\(14\\). Calcula cambio en beneficio.", -5, "\\(9-14=-5\\)."),
    numberQuestion("Si \\(p=7\\), \\(y=100\\), \\(w_1x_1=250\\), \\(w_2x_2=180\\), calcula \\(\\pi\\).", 270, "\\(7\\cdot100-250-180=270\\)."),
    numberQuestion("Si \\(p=6\\), \\(y=80\\), costos totales \\(350\\), calcula \\(\\pi\\).", 130, "\\(6\\cdot80-350=130\\)."),
    numberQuestion("Para \\(y=3x_1+4x_2\\), \\(p=8\\). Calcula \\(w_1\\) óptimo si \\(PMg_1=3\\).", 24, "\\(w_1=pPMg_1=8\\cdot3=24\\)."),
    numberQuestion("Para \\(PMg=2.5\\) y \\(p=20\\), calcula \\(w\\) óptimo.", 50, "\\(w=pPMg=20\\cdot2.5=50\\)."),
    numberQuestion("Si el precio sube de \\(5\\) a \\(7\\) y \\(y=120\\), cambio directo en ingreso.", 240, "\\((7-5)\\cdot120=240\\)."),
    numberQuestion("Si \\(VA=\\frac{B}{r}\\), \\(B=100\\), \\(r=0.1\\), calcula \\(VA\\).", 1000, "\\(100/0.1=1000\\)."),
    numberQuestion("Si \\(VA=\\frac{B}{r}\\), \\(B=80\\), \\(r=0.05\\), calcula \\(VA\\).", 1600, "\\(80/0.05=1600\\)."),
    numberQuestion("Si \\(pPMg=45\\) y \\(w=38\\), calcula la brecha \\(pPMg-w\\).", 7, "\\(45-38=7\\)."),
    numberQuestion("Si \\(pPMg=32\\) y \\(w=50\\), calcula la brecha \\(pPMg-w\\).", -18, "\\(32-50=-18\\)."),
    numberQuestion("Si \\(\\pi=440\\), \\(p=8\\), \\(w_2x_2=200\\), calcula \\(\\pi/p+w_2x_2/p\\).", 80, "\\(440/8+200/8=55+25=80\\).")
  ],
  "semana-04": [
    numberQuestion("Si \\(w_1=10\\) y \\(w_2=5\\), calcula la pendiente de isocosto.", -2, "\\(-\\frac{10}{5}=-2\\)."),
    numberQuestion("Si \\(w_1=12\\) y \\(w_2=4\\), calcula la pendiente de isocosto.", -3, "\\(-\\frac{12}{4}=-3\\)."),
    numberQuestion("Si \\(C=300\\) y \\(w_2=6\\), calcula el intercepto vertical.", 50, "\\(\\frac{300}{6}=50\\)."),
    numberQuestion("Si \\(C=500\\) y \\(w_1=25\\), calcula el intercepto horizontal.", 20, "\\(\\frac{500}{25}=20\\)."),
    numberQuestion("Si \\(PMg_1=8\\) y \\(PMg_2=4\\), calcula \\(RTS\\).", -2, "\\(-\\frac{8}{4}=-2\\)."),
    numberQuestion("Si \\(PMg_1=15\\) y \\(PMg_2=5\\), calcula \\(RTS\\).", -3, "\\(-\\frac{15}{5}=-3\\)."),
    numberQuestion("Si \\(PMg_L=3\\) y \\(w=10\\), calcula \\(PMg_L/w\\).", 0.3, "\\(3/10=0.3\\)."),
    numberQuestion("Si \\(PMg_K=5\\) y \\(r=20\\), calcula \\(PMg_K/r\\).", 0.25, "\\(5/20=0.25\\)."),
    numberQuestion("\\(C=10x_1+5x_2\\), \\(x_1=4\\), \\(x_2=8\\). Calcula \\(C\\).", 80, "\\(10\\cdot4+5\\cdot8=80\\)."),
    numberQuestion("\\(C=12x_1+3x_2\\), \\(x_1=5\\), \\(x_2=10\\). Calcula \\(C\\).", 90, "\\(12\\cdot5+3\\cdot10=90\\)."),
    numberQuestion("Para \\(20\\) pacientes y \\(4\\) enfermeras por paciente, calcula enfermeras.", 80, "\\(20\\cdot4=80\\)."),
    numberQuestion("Para \\(18\\) pacientes y \\(1\\) médico por paciente, calcula médicos.", 18, "\\(18\\cdot1=18\\)."),
    numberQuestion("Costo médico \\(6000\\) y \\(4\\) enfermeras de \\(3000\\). Costo por paciente.", 18000, "\\(6000+4\\cdot3000=18000\\)."),
    numberQuestion("Con costo por paciente \\(18000\\), calcula costo para \\(20\\) pacientes.", 360000, "\\(18000\\cdot20=360000\\)."),
    numberQuestion("Si \\(w_1=8\\) y tangencia requiere \\(RTS=-2\\), calcula \\(w_2\\).", 4, "\\(w_1/w_2=2\\Rightarrow w_2=4\\)."),
    numberQuestion("Si \\(w_2=6\\) y tangencia requiere \\(RTS=-3\\), calcula \\(w_1\\).", 18, "\\(w_1/w_2=3\\Rightarrow w_1=18\\)."),
    numberQuestion("Si \\(C=240\\), \\(w_1=12\\), \\(w_2=6\\), calcula \\(x_2\\) cuando \\(x_1=10\\).", 20, "\\(x_2=240/6-(12/6)10=40-20=20\\)."),
    numberQuestion("Si \\(C=180\\), \\(w_1=9\\), \\(w_2=3\\), calcula \\(x_2\\) cuando \\(x_1=8\\).", 36, "\\(x_2=180/3-(9/3)8=60-24=36\\)."),
    numberQuestion("Si \\(PMg_1/w_1=0.4\\) y \\(PMg_2/w_2=0.25\\), calcula la diferencia.", 0.15, "\\(0.4-0.25=0.15\\)."),
    numberQuestion("Si \\(PMg_1/w_1=0.2\\) y \\(PMg_2/w_2=0.5\\), calcula la diferencia.", -0.3, "\\(0.2-0.5=-0.3\\).")
  ],
  "semana-05": [
    numberQuestion("\\(C(y)=y^2+1\\). Calcula \\(CMg\\) en \\(y=5\\).", 10, "\\(CMg=2y=10\\)."),
    numberQuestion("\\(C(y)=3y+50\\). Calcula \\(CMg\\).", 3, "La derivada de \\(3y+50\\) es \\(3\\)."),
    numberQuestion("\\(F=100\\) e \\(y=20\\). Calcula \\(CFMe\\).", 5, "\\(100/20=5\\)."),
    numberQuestion("\\(F=120\\) e \\(y=40\\). Calcula \\(CFMe\\).", 3, "\\(120/40=3\\)."),
    numberQuestion("\\(CMe=30\\) y \\(CVMe=22\\). Calcula \\(CFMe\\).", 8, "\\(30-22=8\\)."),
    numberQuestion("\\(CMe=45\\) y \\(CFMe=15\\). Calcula \\(CVMe\\).", 30, "\\(45-15=30\\)."),
    numberQuestion("\\(CMg=12\\) y \\(CMe=16\\). Calcula \\(EC\\).", 0.75, "\\(12/16=0.75\\)."),
    numberQuestion("\\(CMg=24\\) y \\(CMe=12\\). Calcula \\(EC\\).", 2, "\\(24/12=2\\)."),
    numberQuestion("\\(EC=0.75\\). Calcula \\(IEE\\).", 0.25, "\\(1-0.75=0.25\\)."),
    numberQuestion("\\(EC=1.2\\). Calcula \\(IEE\\).", -0.2, "\\(1-1.2=-0.2\\)."),
    numberQuestion("\\(C=500\\) e \\(y=25\\). Calcula \\(CMe\\).", 20, "\\(500/25=20\\)."),
    numberQuestion("\\(C=840\\) e \\(y=42\\). Calcula \\(CMe\\).", 20, "\\(840/42=20\\)."),
    numberQuestion("\\(Cv=300\\) e \\(y=30\\). Calcula \\(CVMe\\).", 10, "\\(300/30=10\\)."),
    numberQuestion("\\(Cv=560\\) e \\(y=70\\). Calcula \\(CVMe\\).", 8, "\\(560/70=8\\)."),
    numberQuestion("Costos separados \\(200\\) y costo conjunto \\(150\\). Calcula ahorro.", 50, "\\(200-150=50\\)."),
    numberQuestion("Si ahorro \\(50\\) y costo conjunto \\(150\\), calcula \\(EA\\).", 0.3333, "\\(EA=50/150=0.3333\\)."),
    numberQuestion("Si \\(y\\) sube de \\(100\\) a \\(200\\) y \\(C\\) de \\(1000\\) a \\(1800\\), aumento de costo.", 800, "\\(1800-1000=800\\)."),
    numberQuestion("Si \\(C_v=400\\), \\(F=100\\), \\(y=25\\), calcula \\(CMe\\).", 20, "\\((400+100)/25=20\\)."),
    numberQuestion("Si \\(C_v=900\\), \\(F=300\\), \\(y=60\\), calcula \\(CMe\\).", 20, "\\((900+300)/60=20\\)."),
    numberQuestion("Si \\(CMg=18\\) y \\(CMe=18\\), calcula \\(EC\\).", 1, "\\(18/18=1\\).")
  ]
};

const productionCourse = {
  weeks: [...weeks],
  topics: [...topics],
  theoryData,
  practiceBanks,
  heroTitle: "EPC Economía de la Producción Competitiva",
  heroSubtitle: "Domina producción, costos y beneficios con teoría, gráficos y ejercicios."
};

const marketWeeks = [
  { id: "pm-semana-01", label: "Semana 01", title: "Poder de mercado" },
  { id: "pm-semana-02", label: "Semana 02", title: "Monopolio" },
  { id: "pm-semana-03", label: "Semana 03", title: "Monopolio natural" },
  { id: "pm-semana-04", label: "Semana 04", title: "Discriminación de precios" },
  { id: "pm-semana-05", label: "Semana 05", title: "Monopsonio" },
  { id: "pm-semana-06", label: "Semana 06", title: "Métricas de concentración" },
  { id: "pm-semana-07", label: "Semana 07", title: "Oligopolio" },
  { id: "pm-semana-10", label: "Semana 10", title: "Teoría de juegos" },
  { id: "pm-semana-11", label: "Semana 11", title: "Estrategias dominantes" },
  { id: "pm-semana-12", label: "Semana 12", title: "Juegos repetidos" },
  { id: "pm-semana-14", label: "Semana 14", title: "Información asimétrica" }
];

const marketTopics = [
  { id: "pm-poder-mercado", week: "pm-semana-01", title: "Poder de mercado y sus fuentes", question: "¿Por qué una empresa puede influir en precios o condiciones del mercado?", formulas: ["\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]", "\\[\\text{Poder de mercado}\\uparrow \\quad\\text{cuando}\\quad |\\varepsilon_d|\\downarrow\\]"], explanation: ["Una empresa tiene poder de mercado cuando no actúa como precio-aceptante: sus decisiones de precio, cantidad o compra afectan el resultado del mercado.", "Las fuentes principales son una demanda poco elástica, pocas empresas, barreras de entrada, diferenciación del producto o coordinación entre firmas.", "El poder de mercado no siempre significa ilegalidad, pero sí exige estudiar eficiencia, bienestar y posibles efectos sobre consumidores y competidores."], example: "Si una empresa vende un bien con pocos sustitutos, puede subir el precio sin perder demasiados clientes. Ese margen se resume con el índice de Lerner.", graph: "profit" },
  { id: "pm-monopolio", week: "pm-semana-02", title: "Monopolio de precio único", question: "¿Cómo decide precio y cantidad una empresa que enfrenta toda la demanda?", formulas: ["\\[\\operatorname{IMg}=\\operatorname{CMg}\\]", "\\[P>\\operatorname{IMg}\\quad\\text{si la demanda tiene pendiente negativa}\\]", "\\[\\pi=P(Q)Q-C(Q)\\]"], explanation: ["El monopolista enfrenta la demanda del mercado. Para vender más unidades debe aceptar un precio menor, por eso su ingreso marginal queda por debajo del precio.", "La regla de decisión sigue siendo marginal: producir hasta que el ingreso marginal iguale al costo marginal.", "A diferencia de la competencia perfecta, el precio final se lee en la demanda y suele quedar por encima del costo marginal."], example: "Si la condición marginal entrega \\(Q_m\\), el precio no se toma del costo marginal sino de la demanda: \\(P_m=P(Q_m)\\).", graph: "profit" },
  { id: "pm-monopolio-natural", week: "pm-semana-03", title: "Monopolio natural y regulación", question: "¿Cuándo una sola empresa puede abastecer el mercado a menor costo?", formulas: ["\\[C(Q)<C(q_1)+C(q_2)\\quad\\text{si}\\quad Q=q_1+q_2\\]", "\\[\\operatorname{CMe}(Q)\\downarrow\\quad\\text{en el rango relevante}\\]"], explanation: ["Un monopolio natural aparece cuando los costos fijos son altos y el costo medio cae en el rango de demanda relevante.", "Duplicar infraestructura puede ser ineficiente: redes de agua, electricidad o transporte suelen tener esta lógica.", "El problema económico es que una sola empresa puede ser eficiente en costos, pero también puede abusar del precio si no existe regulación."], example: "Si una red cuesta mucho instalarse y cada usuario adicional cuesta poco, una sola red puede ser más barata que varias redes paralelas.", graph: "scale" },
  { id: "pm-discriminacion", week: "pm-semana-04", title: "Discriminación de precios", question: "¿Cómo captura el monopolista más excedente del consumidor?", formulas: ["\\[\\pi=\\sum_i P_iq_i-C\\!\\left(\\sum_i q_i\\right)\\]", "\\[\\frac{P_i-\\operatorname{CMg}}{P_i}=\\frac{1}{|\\varepsilon_i|}\\]"], explanation: ["Discriminar precios significa cobrar precios distintos por el mismo bien según unidades, bloques o segmentos, cuando esas diferencias no se explican solo por costos.", "El objetivo es capturar más excedente del consumidor que con un precio único.", "Para funcionar, la empresa necesita poder de mercado, capacidad de segmentar y dificultad de reventa entre consumidores."], example: "Una tarifa de dos tramos combina un cargo fijo con un precio por unidad. El cargo fijo captura parte del excedente y el precio por unidad controla consumo.", graph: "opportunity" },
  { id: "pm-monopsonio", week: "pm-semana-05", title: "Monopsonio", question: "¿Qué ocurre cuando hay un solo comprador relevante?", formulas: ["\\[\\operatorname{GMe}=w(L)\\]", "\\[\\operatorname{GMg}>w(L)\\quad\\text{si la oferta tiene pendiente positiva}\\]"], explanation: ["Un monopsonio concentra poder del lado de la compra. El caso típico es una empresa muy importante contratando trabajo o comprando insumos en una zona.", "Como la oferta que enfrenta tiene pendiente positiva, contratar más puede elevar el precio pagado a todas las unidades.", "El resultado suele ser menor cantidad contratada y menor precio pagado que en un mercado competitivo de factores."], example: "Si una empresa es casi la única compradora de cierto cultivo local, puede presionar precios a la baja frente a productores pequeños.", graph: "costmin" },
  { id: "pm-concentracion", week: "pm-semana-06", title: "Lerner, CR4 y HHI", question: "¿Cómo medimos concentración y poder de mercado?", formulas: ["\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]", "\\[CR4=\\frac{V_1+V_2+V_3+V_4}{V_T}\\]", "\\[HHI=\\sum_{i=1}^{n}s_i^2\\]"], explanation: ["El índice de Lerner mide el margen del precio sobre el costo marginal como proporción del precio.", "El CR4 suma la participación de las cuatro empresas más grandes. Es simple y útil, pero ignora la distribución entre el resto.", "El HHI suma participaciones al cuadrado, por eso castiga más la concentración en pocas firmas grandes."], example: "Si cuatro empresas concentran 70% de ventas, el CR4 es 0.70. Si además una sola tiene mucho peso, el HHI subirá con fuerza.", graph: "returns" },
  { id: "pm-oligopolio", week: "pm-semana-07", title: "Oligopolio e interdependencia", question: "¿Por qué las empresas oligopólicas deben anticipar a sus rivales?", formulas: ["\\[\\pi_i=P(Q)q_i-C_i(q_i)\\]", "\\[Q=q_1+q_2+\\cdots+q_n\\]"], explanation: ["En oligopolio hay pocas empresas y cada una sabe que sus decisiones afectan a las demás.", "La interdependencia abre espacio para guerras de precios, liderazgo, colusión o competencia estratégica.", "No basta con conocer la demanda: cada empresa debe formar expectativas sobre la reacción de sus rivales."], example: "Si una aerolínea baja precios, las demás pueden responder. La ganancia final depende de la reacción estratégica, no solo de la demanda propia.", graph: "profit" },
  { id: "pm-juegos", week: "pm-semana-10", title: "Teoría de juegos: jugadores, estrategias y pagos", question: "¿Cómo se representan decisiones estratégicas?", formulas: ["\\[G=\\{J,E,u\\}\\]", "\\[u_i(e_i,e_{-i})\\]"], explanation: ["Un juego resume jugadores, estrategias disponibles y pagos asociados a cada combinación de decisiones.", "La matriz de resultados permite ver cómo cambia la ganancia de cada jugador según lo que hagan los demás.", "La clave es estratégica: una acción no se evalúa aislada, sino frente a las posibles respuestas del otro."], example: "Dos empresas pueden elegir publicidad o no publicidad. El mejor resultado de cada una depende también de la decisión de la rival.", graph: "opportunity" },
  { id: "pm-dominantes", week: "pm-semana-11", title: "Estrategias dominantes y equilibrio", question: "¿Cuándo una estrategia conviene sin importar lo que haga el rival?", formulas: ["\\[u_i(s_i^*,s_{-i})\\ge u_i(s_i,s_{-i})\\quad\\forall s_i, s_{-i}\\]", "\\[s^*=(s_1^*,s_2^*)\\]"], explanation: ["Una estrategia dominante es la mejor respuesta de un jugador ante cualquier estrategia del rival.", "Si todos tienen estrategia dominante, el equilibrio se obtiene combinándolas.", "El resultado puede ser estable aunque no sea el más eficiente colectivamente, como ocurre en dilemas competitivos."], example: "Si hacer publicidad genera más ingreso para una empresa tanto cuando la rival publicita como cuando no, publicidad es estrategia dominante.", graph: "costcurves" },
  { id: "pm-repetidos", week: "pm-semana-12", title: "Juegos repetidos y cooperación", question: "¿Por qué repetir el juego puede cambiar la conducta?", formulas: ["\\[VA=\\sum_{t=0}^{T}\\delta^t\\pi_t\\]", "\\[0<\\delta<1\\]"], explanation: ["Cuando el juego se repite, las empresas valoran no solo la ganancia actual sino también consecuencias futuras.", "La posibilidad de castigo futuro puede sostener cooperación, siempre que el futuro sea suficientemente importante.", "Si los jugadores son impacientes o el juego termina pronto, aumenta la tentación de desviarse."], example: "En precios, cobrar bajo puede ganar hoy, pero si provoca una guerra de precios futura, quizá no convenga desviarse.", graph: "scale" },
  { id: "pm-asimetria", week: "pm-semana-14", title: "Información asimétrica, riesgo moral y selección adversa", question: "¿Qué falla cuando una parte sabe más que la otra?", formulas: ["\\[\\text{Principal}\\rightarrow\\text{Contrato}\\rightarrow\\text{Agente}\\]", "\\[E[u\\mid\\text{información incompleta}]\\]"], explanation: ["La información asimétrica aparece cuando una parte de la transacción posee información privada relevante.", "La selección adversa ocurre antes del contrato: quienes tienen peor riesgo pueden ser quienes más desean contratar.", "El riesgo moral ocurre después del contrato: una parte cambia su conducta porque no asume totalmente las consecuencias."], example: "Un asegurado puede manejar con menos cuidado si sabe que el seguro cubre gran parte del daño. Ese cambio posterior es riesgo moral.", graph: "isoquant" }
];

const marketTopicEnhancements = {
  "pm-poder-mercado": {
    graph: "marketpower",
    formulas: ["\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]", "\\[L=-\\frac{1}{\\varepsilon_d}\\quad\\text{en monopolio simple}\\]", "\\[\\text{poder de mercado}\\uparrow\\ \\Longleftrightarrow\\ \\text{sustitutos cercanos}\\downarrow\\]"],
    explanation: [
      "Poder de mercado significa que la empresa puede influir en el precio o en las condiciones del intercambio. No toma el precio como dato: al cambiar su cantidad, precio, calidad o estrategia, modifica el resultado que enfrentan consumidores y rivales.",
      "La fuente más directa es la elasticidad de la demanda. Si los consumidores tienen pocos sustitutos, una subida de precio reduce poco la cantidad demandada y la firma puede sostener un margen mayor sobre el costo marginal.",
      "También importan el número de empresas, las barreras de entrada, el control de insumos, patentes, redes, ubicación, información y la posibilidad de coordinación. Por eso una empresa grande no siempre tiene poder de mercado, y una empresa pequeña sí puede tenerlo en un nicho estrecho.",
      "El índice de Lerner resume el margen relativo: si \\(L\\) está cerca de cero, el precio se parece al costo marginal; si crece, hay mayor separación entre precio y costo marginal.",
      "La interpretación económica no es solo contable. Un margen alto puede reflejar innovación o riesgo, pero también puede indicar pérdida de bienestar, exclusión o abuso si se sostiene por barreras artificiales."
    ],
    example: "Si \\(P=10\\) y \\(CMg=8\\), entonces \\(L=\\frac{10-8}{10}=0.20\\). La empresa cobra un precio 20% por encima del costo marginal."
  },
  "pm-monopolio": {
    graph: "monopoly",
    formulas: ["\\[\\max_Q\\ \\pi(Q)=P(Q)Q-C(Q)\\]", "\\[\\frac{d\\pi}{dQ}=\\operatorname{IMg}(Q)-\\operatorname{CMg}(Q)=0\\]", "\\[\\operatorname{IMg}=P(Q)+Q\\frac{dP}{dQ}\\]", "\\[P_m=P(Q_m)>\\operatorname{CMg}(Q_m)\\]"],
    explanation: [
      "El monopolio de precio único enfrenta toda la demanda del mercado. Si quiere vender una unidad adicional debe bajar el precio no solo para esa unidad, sino para las unidades que ya vendía.",
      "Por eso el ingreso marginal queda por debajo de la curva de demanda. La decisión correcta no es producir donde el precio iguala el costo marginal, sino donde el ingreso marginal iguala el costo marginal.",
      "Luego de encontrar \\(Q_m\\), el precio se lee en la demanda: \\(P_m=P(Q_m)\\). Esta separación entre precio y costo marginal genera menor cantidad que en competencia perfecta.",
      "La pérdida social aparece porque hay unidades que los consumidores valoran más que su costo marginal, pero que no se producen por mantener el precio alto.",
      "El monopolio no siempre surge por mal comportamiento: puede venir de patentes, tecnología, control de recursos o barreras legales. El análisis económico separa origen, conducta y efecto sobre bienestar."
    ],
    example: "Con demanda \\(P=100-Q\\) y \\(CMg=20\\), el ingreso total es \\(IT=100Q-Q^2\\), entonces \\(IMg=100-2Q\\). Igualando \\(100-2Q=20\\), se obtiene \\(Q_m=40\\) y \\(P_m=60\\)."
  },
  "pm-monopolio-natural": {
    graph: "naturalmonopoly",
    formulas: ["\\[C(Q)<C(q_1)+C(q_2)\\quad\\text{para}\\quad Q=q_1+q_2\\]", "\\[\\operatorname{CMe}(Q)=\\frac{F+cQ}{Q}=\\frac{F}{Q}+c\\]", "\\[\\operatorname{CMe}(Q)>\\operatorname{CMg}\\quad\\text{si }F>0\\]"],
    explanation: [
      "Un monopolio natural aparece cuando una sola empresa puede abastecer el mercado a menor costo que varias empresas separadas. La razón típica es una estructura con costos fijos muy altos y costos marginales bajos.",
      "Cuando el costo medio cae en el rango relevante de la demanda, dividir el mercado entre varias firmas puede duplicar infraestructura y elevar costos totales.",
      "El dilema es regulatorio: una sola empresa puede ser eficiente desde el punto de vista productivo, pero al mismo tiempo tiene incentivos para fijar precios altos.",
      "Regular a precio igual a costo marginal puede generar pérdidas si el costo medio está por encima del costo marginal. Regular a costo medio cubre costos, pero no alcanza la eficiencia de primer mejor.",
      "Por eso redes de electricidad, agua, saneamiento, transporte o telecomunicaciones suelen requerir reglas tarifarias y supervisión de calidad."
    ],
    example: "Si \\(C(Q)=1000+2Q\\), entonces \\(CMe=\\frac{1000}{Q}+2\\). A mayor \\(Q\\), el costo fijo se reparte entre más usuarios y el costo medio cae."
  },
  "pm-discriminacion": {
    graph: "discrimination",
    formulas: ["\\[\\pi=\\sum_i P_i(q_i)q_i-C\\!\\left(\\sum_i q_i\\right)\\]", "\\[\\operatorname{IMg}_i=\\operatorname{CMg}\\quad\\text{en cada segmento}\\]", "\\[\\frac{P_i-\\operatorname{CMg}}{P_i}=\\frac{1}{|\\varepsilon_i|}\\]"],
    explanation: [
      "La discriminación de precios ocurre cuando la empresa cobra precios distintos por el mismo bien o servicio sin que la diferencia se explique únicamente por costos.",
      "El objetivo es capturar más excedente del consumidor. Con precio único, algunos consumidores pagarían más de lo que efectivamente pagan; la discriminación intenta apropiarse de parte de esa diferencia.",
      "Hay discriminación de primer grado cuando se cobra a cada consumidor su disposición máxima a pagar; de segundo grado cuando el precio depende de bloques, cantidades o paquetes; y de tercer grado cuando se separan grupos observables.",
      "Para que funcione se necesitan tres condiciones: poder de mercado, capacidad de separar consumidores y dificultad de reventa. Si alguien puede comprar barato y revender caro, la estrategia se rompe.",
      "La regla por elasticidades dice que el segmento menos elástico puede recibir un precio más alto, porque reacciona menos ante cambios de precio."
    ],
    example: "Si estudiantes tienen demanda más elástica que profesionales, una empresa puede cobrar menor tarifa estudiantil y mayor tarifa regular, siempre que pueda verificar el segmento y evitar reventa."
  },
  "pm-monopsonio": {
    graph: "monopsony",
    formulas: ["\\[w=w(L)\\quad\\text{con oferta ascendente}\\]", "\\[GT(L)=w(L)L\\]", "\\[\\operatorname{GMg}=\\frac{dGT}{dL}=w(L)+L\\frac{dw}{dL}\\]", "\\[\\operatorname{VPMg}_L=\\operatorname{GMg}\\]"],
    explanation: [
      "El monopsonio es poder de mercado del lado comprador. Una empresa o grupo de compradores enfrenta una oferta ascendente y puede influir en el precio que paga por trabajo o insumos.",
      "Si para contratar una unidad adicional debe subir el salario, ese aumento puede aplicarse también a unidades ya contratadas. Por eso el gasto marginal queda por encima del salario.",
      "La regla de decisión iguala el valor del producto marginal del factor con el gasto marginal, no con el salario. Esto genera menor contratación que en competencia y un pago menor al competitivo.",
      "Puede observarse en mercados laborales locales, compras agroindustriales, plataformas o cadenas con mucho poder frente a proveedores pequeños.",
      "La política pública puede incluir salario mínimo, negociación colectiva, transparencia salarial o regulación de contratos, pero debe evaluar efectos sobre empleo y eficiencia."
    ],
    example: "Si \\(w(L)=10+L\\), entonces \\(GT=10L+L^2\\) y \\(GMg=10+2L\\). El gasto marginal supera al salario porque contratar más encarece el total."
  },
  "pm-concentracion": {
    graph: "concentration",
    formulas: ["\\[L=\\frac{P-\\operatorname{CMg}}{P}\\]", "\\[CR4=s_1+s_2+s_3+s_4\\]", "\\[HHI=\\sum_{i=1}^{n}s_i^2\\quad\\text{con }s_i\\text{ en porcentaje}\\]"],
    explanation: [
      "Las métricas de concentración no prueban por sí solas abuso, pero ayudan a diagnosticar estructura de mercado.",
      "El índice de Lerner mide margen relativo sobre precio y requiere información de costo marginal, que muchas veces es difícil de observar.",
      "El CR4 suma la participación de las cuatro empresas más grandes. Es fácil de explicar, pero no distingue si una firma domina y las otras tres son pequeñas o si las cuatro son parecidas.",
      "El HHI sí captura mejor esa diferencia porque eleva participaciones al cuadrado. Una empresa con 50% pesa mucho más que cinco empresas con 10% cada una.",
      "Para interpretar estas métricas hay que definir bien el mercado relevante: producto, geografía, sustitutos y horizonte temporal."
    ],
    example: "Con participaciones \\(40,30,20,10\\), \\(CR4=100\\) y \\(HHI=40^2+30^2+20^2+10^2=3000\\). Es un mercado altamente concentrado."
  },
  "pm-oligopolio": {
    graph: "oligopoly",
    formulas: ["\\[Q=q_1+q_2+\\cdots+q_n\\]", "\\[\\pi_i=P(Q)q_i-C_i(q_i)\\]", "\\[q_i^*=R_i(q_{-i})\\]"],
    explanation: [
      "Un oligopolio tiene pocas empresas relevantes. Cada firma entiende que su decisión afecta precios, cantidades y estrategias de las demás.",
      "La interdependencia es el rasgo clave. Una rebaja de precio puede atraer demanda, pero también puede provocar una respuesta de rivales y terminar en una guerra de precios.",
      "Según el contexto, las empresas pueden competir en cantidades, precios, publicidad, calidad, ubicación o capacidad.",
      "La colusión es más probable cuando hay pocos jugadores, productos similares, interacción repetida y facilidad para observar desviaciones.",
      "El análisis no busca una sola curva mecánica, sino entender mejores respuestas: qué conviene hacer dado lo que se espera del rival."
    ],
    example: "Si dos empresas venden un bien similar, cada una decide su precio pensando si la otra lo mantendrá, lo bajará o responderá con promociones."
  },
  "pm-juegos": {
    graph: "gamematrix",
    formulas: ["\\[G=\\{N,S,u\\}\\]", "\\[N=\\{1,2,\\ldots,n\\}\\]", "\\[u_i(s_i,s_{-i})\\]"],
    explanation: [
      "La teoría de juegos organiza problemas donde el resultado de cada agente depende de las decisiones de otros.",
      "Un juego en forma normal contiene jugadores, estrategias y pagos. La matriz de resultados resume qué gana cada jugador en cada combinación de estrategias.",
      "La notación \\(s_{-i}\\) representa las estrategias de todos menos el jugador \\(i\\). Esto obliga a pensar en mejores respuestas, no solo en decisiones individuales aisladas.",
      "En economía de la empresa, esta herramienta sirve para analizar publicidad, guerras de precios, entrada a mercados, cooperación, colusión y castigos.",
      "La lectura correcta de una matriz siempre exige mirar los pagos por jugador: el primer número suele corresponder a un jugador y el segundo al otro."
    ],
    example: "Si dos empresas eligen entre precio alto y bajo, cada celda de la matriz muestra los beneficios de ambas según la combinación elegida."
  },
  "pm-dominantes": {
    graph: "dominant",
    formulas: ["\\[u_i(s_i^*,s_{-i})\\ge u_i(s_i,s_{-i})\\quad\\forall s_i,s_{-i}\\]", "\\[s^*=(s_1^*,s_2^*)\\]", "\\[\\text{dominante}\\Rightarrow\\text{mejor respuesta ante todo }s_{-i}\\]"],
    explanation: [
      "Una estrategia dominante es la mejor para un jugador sin importar qué haga el rival. Es una condición fuerte: debe ganar o empatar contra todas las alternativas del otro.",
      "Si ambos jugadores tienen estrategia dominante, el equilibrio se obtiene cruzando esas estrategias.",
      "Esto no significa que el resultado sea socialmente deseable. Puede ocurrir que ambos elijan estrategias defensivas y terminen peor que si cooperaran.",
      "La forma práctica de resolverlo es comparar pagos por filas o columnas: para cada acción del rival, se marca qué estrategia da mayor pago al jugador analizado.",
      "Si una misma estrategia queda marcada en todos los casos, es dominante."
    ],
    example: "Si hacer publicidad da más ingreso tanto cuando la rival publicita como cuando no publicita, entonces hacer publicidad es dominante para esa empresa."
  },
  "pm-repetidos": {
    graph: "repeatedgame",
    formulas: ["\\[VA=\\pi_0+\\delta\\pi_1+\\delta^2\\pi_2+\\cdots\\]", "\\[VA_{cooperar}\\ge VA_{desviar}\\]", "\\[0<\\delta<1\\]"],
    explanation: [
      "En un juego de una sola vez, puede convenir desviarse aunque el resultado colectivo sea malo. Cuando el juego se repite, la historia y la reputación importan.",
      "El factor de descuento \\(\\delta\\) mide cuánto valora la empresa el futuro. Si \\(\\delta\\) es alto, perder cooperación futura puede ser más costoso que ganar hoy desviándose.",
      "Una estrategia de castigo funciona si es creíble: el rival debe estar dispuesto a castigar y la amenaza debe afectar ganancias futuras.",
      "La cooperación es más probable cuando las empresas se observan, interactúan con frecuencia y no esperan que el mercado termine pronto.",
      "Si el juego tiene final conocido, puede aparecer razonamiento hacia atrás: en el último periodo no hay futuro que castigue, y eso debilita la cooperación en periodos anteriores."
    ],
    example: "Una empresa puede evitar bajar precios hoy si sabe que la rival responderá con precios bajos durante varios periodos, destruyendo márgenes futuros."
  },
  "pm-asimetria": {
    graph: "asymmetric",
    formulas: ["\\[\\text{Principal}\\rightarrow\\text{Contrato}\\rightarrow\\text{Agente}\\]", "\\[\\text{Selección adversa: información oculta antes del contrato}\\]", "\\[\\text{Riesgo moral: acción oculta después del contrato}\\]"],
    explanation: [
      "La información asimétrica aparece cuando una parte sabe algo relevante que la otra no conoce. Esto impide que el contrato refleje perfectamente riesgos, calidad o esfuerzo.",
      "La selección adversa ocurre antes de contratar. Quienes tienen mayor riesgo o menor calidad pueden ser los más interesados en participar, deteriorando el promedio del mercado.",
      "El riesgo moral ocurre después de contratar. Una vez protegido por un seguro, contrato o delegación, el agente puede cambiar su esfuerzo o conducta porque no asume todo el costo.",
      "El modelo principal-agente resume esta tensión: el principal diseña incentivos, pero el agente posee información privada o controla acciones difíciles de observar.",
      "Las soluciones incluyen señales, filtros, deducibles, monitoreo, contratos por desempeño, reputación y regulación de información."
    ],
    example: "En seguros, una persona conoce mejor su riesgo que la aseguradora antes de contratar. Después de contratar, además puede cuidarse menos si el seguro cubre gran parte de la pérdida."
  }
};

marketTopics.forEach((topic) => Object.assign(topic, marketTopicEnhancements[topic.id] || {}));

function makeMarketTheoryData(weeksList) {
  const topicByWeek = Object.fromEntries(marketTopics.map((topic) => [topic.week, topic]));
  const data = {};
  weeksList.forEach((weekItem) => {
    const topic = topicByWeek[weekItem.id];
    data[weekItem.id] = {
      facil: [
        [`¿Cuál es la idea central de ${topic.title}?`, topic.question, ["Reducir todo a costos fijos", "Eliminar la demanda del análisis", "Suponer competencia perfecta siempre"], `La semana estudia esto: ${topic.question}`],
        ["¿Qué significa poder de mercado?", "Capacidad de influir en precio o condiciones", ["Aceptar siempre el precio como dato", "No tener costos", "Producir sin demanda"], "El poder de mercado aparece cuando la empresa no es plenamente precio-aceptante."],
        ["¿Qué elemento vuelve estratégico un mercado?", "Las decisiones de otros agentes afectan mi resultado", ["El precio nunca cambia", "No existen competidores", "La demanda es perfectamente horizontal"], "La interdependencia obliga a anticipar respuestas."],
        ["¿Qué indica una barrera de entrada?", "Dificulta que nuevas empresas compitan", ["Hace que entren infinitas firmas", "Elimina costos fijos", "Vuelve perfecto el mercado"], "Las barreras sostienen poder de mercado."],
        ["¿Qué mide una métrica de concentración?", "Qué tan repartido o concentrado está el mercado", ["La utilidad del consumidor solamente", "La inflación mensual", "El costo fijo de una planta"], "CR4 y HHI resumen estructura de mercado."],
        ["¿Qué es una estrategia en teoría de juegos?", "Un plan de acción de un jugador", ["Una curva de costo medio", "Un impuesto", "Una restricción presupuestaria"], "La estrategia define qué hará el jugador ante el juego."],
        ["¿Qué es una matriz de pagos?", "Una tabla de resultados por combinación de estrategias", ["Una lista de costos fijos", "Un balance contable", "Una curva de oferta agregada"], "La matriz permite comparar pagos de cada jugador."],
        ["¿Qué significa información imperfecta?", "Los agentes no conocen todo lo relevante", ["Todos conocen todo perfectamente", "No hay incertidumbre", "El precio siempre es cero"], "La información limitada puede distorsionar decisiones."],
        ["¿Qué tipo de pregunta responde este curso?", "Cómo cambia la conducta cuando existe poder de mercado", ["Cómo maximiza utilidad un consumidor aislado", "Cómo se mide el PIB", "Cómo se imprime dinero"], "El foco es conducta empresarial con poder de mercado."],
        ["¿Qué debe revisar un regulador?", "Eficiencia, bienestar y posibles abusos", ["Solo el color del producto", "Solo la publicidad", "Solo la contabilidad interna"], "El poder de mercado puede requerir supervisión."]
      ],
      medio: [
        ["Si la demanda es menos elástica, el margen posible suele:", "Aumentar", ["Disminuir siempre", "Ser cero", "No depender de la demanda"], "Con pocos sustitutos, el consumidor reacciona menos ante el precio."],
        ["Si aumenta el número de competidores efectivos, el poder de mercado tiende a:", "Disminuir", ["Aumentar necesariamente", "Volverse infinito", "No cambiar nunca"], "Más presión competitiva reduce capacidad de fijar márgenes."],
        ["¿Por qué el monopolista no iguala precio a ingreso marginal?", "Porque bajar precio afecta unidades inframarginales", ["Porque no tiene demanda", "Porque el costo marginal no existe", "Porque el precio es exógeno"], "Con demanda decreciente, vender más exige reducir precio."],
        ["Una concentración alta puede ser preocupante porque:", "Facilita márgenes altos o coordinación", ["Elimina toda demanda", "Reduce siempre precios", "Impide medir ventas"], "Pocas firmas pueden tener más capacidad estratégica."],
        ["La discriminación de precios requiere:", "Segmentación y dificultad de reventa", ["Competencia perfecta pura", "Precio único obligatorio", "Costos marginales negativos"], "Sin segmentación o con reventa fácil, la discriminación se debilita."],
        ["El monopsonio se diferencia del monopolio porque:", "El poder está en el comprador", ["No hay mercado", "No hay precios", "La demanda desaparece"], "El monopsonista influye en el precio de compra."],
        ["En oligopolio, una decisión de precio debe considerar:", "La respuesta de rivales", ["Solo el costo fijo histórico", "La utilidad marginal del consumidor sin competencia", "Una tasa de interés"], "La interdependencia es el rasgo central."],
        ["Una estrategia dominante es:", "La mejor sin importar qué haga el rival", ["La más costosa", "La que siempre maximiza producción", "La que elimina pagos"], "Es una comparación contra todas las acciones del otro jugador."],
        ["En juegos repetidos, la cooperación puede sostenerse si:", "El futuro pesa lo suficiente", ["Nadie recuerda nada", "El juego ocurre una sola vez", "No existen castigos"], "Los pagos futuros cambian incentivos presentes."],
        ["La selección adversa ocurre principalmente:", "Antes de firmar el contrato", ["Después por esfuerzo oculto", "Solo con monopolios naturales", "Solo si no hay precios"], "Es un problema de información privada previa."]
      ],
      dificil: [
        ["Una lectura correcta del índice de Lerner es:", "Mide margen relativo sobre el precio", ["Mide participación de ventas", "Mide cantidad producida", "Mide el número de jugadores"], "\\(L=(P-CMg)/P\\) conecta margen y poder de mercado."],
        ["Si una empresa tiene altos costos fijos y bajo costo marginal, puede aparecer:", "Monopolio natural", ["Competencia perfecta garantizada", "Ausencia de escala", "Precio igual a cero"], "Los costos medios decrecientes favorecen un solo proveedor."],
        ["Una tarifa de dos tramos busca:", "Capturar excedente con cargo fijo y uso", ["Prohibir toda compra", "Igualar siempre precio a cero", "Eliminar segmentación"], "Combina acceso y consumo para extraer excedente."],
        ["En monopsonio con oferta ascendente, el gasto marginal suele ser mayor que el salario porque:", "Contratar más eleva el pago de unidades previas", ["El salario no existe", "La oferta es horizontal", "No hay costos"], "La empresa internaliza el aumento en el gasto total."],
        ["El HHI pondera con más fuerza a empresas grandes porque:", "Eleva participaciones al cuadrado", ["Suma precios", "Resta costos fijos", "Ignora participaciones"], "El cuadrado amplifica participaciones altas."],
        ["La colusión es más probable cuando:", "Hay pocos jugadores e interacción repetida", ["Hay infinitas empresas pequeñas", "No se observan precios", "No hay beneficios"], "Pocos jugadores y repetición facilitan disciplina."],
        ["Un equilibrio por estrategias dominantes puede ser ineficiente porque:", "La racionalidad individual no siempre maximiza el total", ["Nadie elige estrategia", "Los pagos no importan", "No existe interdependencia"], "El dilema del prisionero es el ejemplo clásico."],
        ["En un juego repetido, un castigo creíble debe:", "Ser costoso para quien se desvía en el futuro", ["Ser imposible de observar", "No afectar pagos", "Eliminar el tiempo"], "La amenaza funciona si cambia el valor esperado de desviarse."],
        ["El riesgo moral se distingue porque:", "La acción oculta ocurre después del contrato", ["El tipo oculto se conoce antes", "No hay contrato", "Siempre elimina pérdidas"], "El agente modifica conducta al no asumir todo el costo."],
        ["Una política pública adecuada depende de:", "Comparar eficiencia, bienestar y poder de mercado", ["Prohibir toda empresa grande sin análisis", "Ignorar elasticidades", "Usar solo beneficios contables"], "El diagnóstico debe distinguir eficiencia real de abuso de poder."]
      ]
    };
  });
  return data;
}

function makeMarketPracticeBanks(weeksList) {
  const banks = {};
  weeksList.forEach((weekItem, weekIndex) => {
    const n = weekIndex + 1;
    banks[weekItem.id] = [
      numberQuestion(`Si \\(P=${10 + n}\\) y \\(CMg=${7 + n}\\), calcula \\(L=\\frac{P-CMg}{P}\\).`, Number((3 / (10 + n)).toFixed(4)), `\\(L=\\frac{${10+n}-${7+n}}{${10+n}}\\).`),
      numberQuestion(`Si \\(P=${20 + n}\\) y \\(CMg=${15 + n}\\), calcula el margen \\(P-CMg\\).`, 5, `\\(${20+n}-${15+n}=5\\).`),
      numberQuestion(`Ventas de las cuatro firmas: \\(80,70,60,50\\). Ventas totales \\(${400 + n * 10}\\). Calcula \\(CR4\\).`, Number((260 / (400 + n * 10)).toFixed(4)), `\\(CR4=\\frac{80+70+60+50}{${400+n*10}}\\).`),
      numberQuestion("Si las participaciones son \\(40,30,20,10\\), calcula \\(HHI\\).", 3000, "\\(40^2+30^2+20^2+10^2=3000\\)."),
      numberQuestion(`Si \\(Q=${20 + n}\\), \\(P=${12 + n}\\) y \\(C=${120 + n * 5}\\), calcula \\(\\pi=PQ-C\\).`, (20+n)*(12+n)-(120+n*5), "Multiplica precio por cantidad y resta costo total."),
      numberQuestion(`Demanda \\(P=100-Q\\). Si \\(Q=${20 + n}\\), calcula \\(P\\).`, 100-(20+n), `\\(P=100-${20+n}\\).`),
      numberQuestion(`Si \\(IT=900\\) y \\(CT=${500 + n * 20}\\), calcula beneficio.`, 900-(500+n*20), "Beneficio es ingreso total menos costo total."),
      numberQuestion(`Si el costo fijo es \\(${300 + n * 10}\\) y \\(CMg=5\\), calcula costo total para \\(Q=20\\).`, (300+n*10)+100, "\\(C=F+CMg\\cdot Q\\)."),
      numberQuestion("Si una tarifa cobra fijo \\(40\\) y uso \\(3\\) por \\(20\\) unidades, calcula pago total.", 100, "\\(40+3\\cdot20=100\\)."),
      numberQuestion(`Si un consumidor valora en \\(${150 + n}\\) y paga \\(${100 + n}\\), calcula excedente.`, 50, "Excedente del consumidor es valoración menos pago."),
      numberQuestion(`En monopsonio, si salario \\(w=${8+n}\\) y se contratan \\(L=${10+n}\\), calcula gasto total.`, (8+n)*(10+n), "\\(GT=wL\\)."),
      numberQuestion("Matriz de pagos: A obtiene \\(12\\) con Alto y \\(8\\) con Bajo. Diferencia.", 4, "\\(12-8=4\\)."),
      numberQuestion("Si el pago futuro es \\(100\\) y \\(\\delta=0.8\\), calcula valor descontado de un periodo.", 80, "\\(0.8\\cdot100=80\\)."),
      numberQuestion("Si hay dos periodos con pagos \\(50\\) y \\(50\\), \\(\\delta=0.9\\). Calcula valor presente.", 95, "\\(50+0.9\\cdot50=95\\)."),
      numberQuestion("Si una desviación gana \\(30\\) hoy pero pierde \\(50\\) mañana con \\(\\delta=0.8\\), ganancia neta.", -10, "\\(30-0.8\\cdot50=-10\\)."),
      numberQuestion("Si probabilidad de mal tipo es \\(0.25\\) y pérdida \\(200\\), pérdida esperada.", 50, "\\(0.25\\cdot200=50\\)."),
      numberQuestion("Si prima \\(80\\) y pérdida esperada \\(50\\), margen de la aseguradora.", 30, "\\(80-50=30\\)."),
      numberQuestion(`Si entran \\(${2+n}\\) firmas nuevas a un mercado con \\(4\\), total de firmas.`, 4+2+n, "Suma firmas existentes y entrantes."),
      numberQuestion("Si \\(CR4\\) pasa de \\(0.75\\) a \\(0.60\\), cambio.", -0.15, "\\(0.60-0.75=-0.15\\)."),
      numberQuestion("Si \\(HHI\\) baja de \\(2500\\) a \\(1800\\), reducción.", 700, "\\(2500-1800=700\\).")
    ];
  });
  return banks;
}

function microGraphDemandMr({ capacity = false } = {}) {
  return `
    <figure class="exercise-graph">
      <svg viewBox="0 0 620 360" role="img" aria-label="Demanda lineal e ingreso marginal">
        <defs><marker id="exercise-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#111"/></marker></defs>
        <line x1="72" y1="300" x2="570" y2="300" class="econ-axis" marker-end="url(#exercise-arrow)"/>
        <line x1="72" y1="300" x2="72" y2="48" class="econ-axis" marker-end="url(#exercise-arrow)"/>
        <text x="44" y="56" class="econ-var">P</text>
        <text x="570" y="334" class="econ-var">Q</text>
        <line x1="72" y1="72" x2="530" y2="300" class="econ-demand"/>
        <line x1="72" y1="72" x2="300" y2="300" class="marginal-line"/>
        <line x1="300" y1="300" x2="300" y2="72" class="econ-guide"/>
        ${capacity ? '<line x1="420" y1="300" x2="420" y2="126" class="econ-guide"/><text x="392" y="326" class="econ-label">capacidad</text>' : ''}
        <circle cx="300" cy="300" r="7" class="econ-point"/>
        <text x="474" y="250" class="econ-label demand-text">Demanda</text>
        <text x="226" y="226" class="econ-label mr-text">IMg</text>
        <text x="286" y="326" class="econ-label">Q*</text>
      </svg>
    </figure>
  `;
}

function choiceRow(prompt, correct, distractors, explain, graph = "") {
  return { prompt, correct, distractors, explain, graph };
}

function buildChoiceQuestion(row, index) {
  if (Array.isArray(row)) return makeTheoryQuestion(row, index);
  const options = rotateOptions([row.correct, ...row.distractors], index + row.prompt.length);
  return optionQuestion(row.prompt, options, options.indexOf(row.correct), row.explain, row.graph || "");
}

const marketWeek1Theory = {
  facil: [
    ["¿Qué mide la elasticidad precio de la demanda?", "La sensibilidad porcentual de la cantidad demandada ante cambios porcentuales del precio", ["La utilidad total del productor", "El costo fijo de la empresa", "La cantidad de empresas del mercado"], "La elasticidad compara cambios porcentuales, por eso permite medir sensibilidad sin depender de unidades."],
    ["¿Por qué se suele usar \\(|\\varepsilon|\\) para clasificar elasticidades?", "Porque la elasticidad de demanda normalmente es negativa", ["Porque siempre es mayor que uno", "Porque elimina la demanda", "Porque convierte costos en precios"], "Precio y cantidad demandada se mueven en sentido contrario; el valor absoluto facilita clasificar."],
    ["¿Cuál es la diferencia central entre pendiente y elasticidad?", "La pendiente usa cambios en unidades y la elasticidad usa cambios porcentuales", ["Son exactamente lo mismo", "La pendiente solo existe en monopolio", "La elasticidad mide costos fijos"], "La pendiente depende de unidades; la elasticidad permite comparar mercados."],
    ["Si un bien tiene muchos sustitutos cercanos, su demanda tiende a ser:", "Más elástica", ["Perfectamente inelástica siempre", "Menos sensible", "Unitaria por definición"], "Con sustitutos, los consumidores pueden cambiar de producto cuando sube el precio."],
    ["Una demanda inelástica cumple:", "\\(0<|\\varepsilon|<1\\)", ["\\(|\\varepsilon|>1\\)", "\\(|\\varepsilon|=\\infty\\)", "\\(|\\varepsilon|=1\\) siempre"], "Inelástica significa que la cantidad cambia proporcionalmente menos que el precio."],
    ["Una demanda elástica cumple:", "\\(|\\varepsilon|>1\\)", ["\\(|\\varepsilon|=0\\)", "\\(0<|\\varepsilon|<1\\)", "\\(|\\varepsilon|=1\\) siempre"], "En demanda elástica, la cantidad responde más que proporcionalmente al precio."],
    ["¿Qué significa demanda perfectamente inelástica?", "La cantidad no cambia aunque cambie el precio", ["Se demanda cualquier cantidad a un precio", "El precio nunca existe", "La curva siempre es horizontal"], "Es el caso límite \\(|\\varepsilon|=0\\)."],
    ["¿Qué fuente aumenta el poder de mercado?", "Demanda poco elástica", ["Muchos sustitutos cercanos", "Entrada libre sin costos", "Competencia intensa"], "Si los consumidores reaccionan poco, la empresa puede sostener mayor margen."],
    ["En una demanda lineal, la pendiente es:", "Constante", ["Siempre creciente", "Igual a la elasticidad en todos los puntos", "Cero en todos los puntos"], "La recta tiene pendiente constante, aunque la elasticidad cambia sobre la curva."],
    ["El ingreso total se define como:", "\\(IT=p\\cdot q\\)", ["\\(IT=CT-p\\)", "\\(IT=IMg+CMg\\)", "\\(IT=q/p\\)"], "Ingreso total es precio multiplicado por cantidad vendida."]
  ],
  medio: [
    ["Si la demanda es elástica y baja el precio, el ingreso total tiende a:", "Aumentar", ["Disminuir necesariamente", "Permanecer siempre igual", "Volverse negativo"], "En zona elástica, el aumento porcentual de cantidad supera la caída porcentual del precio."],
    ["Si la demanda es inelástica y baja el precio, el ingreso total tiende a:", "Disminuir", ["Aumentar siempre", "Ser máximo necesariamente", "No depender de la cantidad"], "En zona inelástica, la cantidad aumenta poco y no compensa la reducción del precio."],
    ["Cuando \\(|\\varepsilon|=1\\), el ingreso marginal es:", "Cero", ["Positivo", "Negativo", "Infinito"], "Con elasticidad unitaria el ingreso total está en su máximo y \\(IMg=0\\)."],
    ["¿Por qué una empresa con poder de mercado no debería producir en la parte inelástica si maximiza beneficios?", "Porque vender más puede reducir ingreso total y además eleva costos", ["Porque ahí el precio sube al vender más", "Porque los costos desaparecen", "Porque la demanda es horizontal"], "En zona inelástica, \\(IMg<0\\), así que aumentar cantidad no ayuda al beneficio."],
    ["En una demanda lineal, la parte alta de la curva suele ser:", "Elástica", ["Inelástica", "Perfectamente inelástica", "Sin precio"], "En la parte alta, el precio relativo es grande frente a la cantidad, por eso \\(|\\varepsilon|>1\\)."],
    ["La relación \\(IMg=p(1-1/|\\varepsilon|)\\) implica que si \\(|\\varepsilon|>1\\):", "\\(IMg>0\\)", ["\\(IMg<0\\)", "\\(IMg=0\\) siempre", "\\(p=0\\)"], "Si \\(1/|\\varepsilon|<1\\), el término entre paréntesis es positivo."],
    ["El poder de mercado suele ser mayor cuando:", "La demanda es poco elástica y hay pocos rivales", ["La entrada es libre y hay muchos sustitutos", "La demanda es perfectamente elástica", "Todas las firmas son precio-aceptantes"], "Pocos rivales y baja elasticidad facilitan márgenes sobre costo."],
    ["¿Por qué el ingreso marginal está por debajo de la demanda con pendiente negativa?", "Porque vender más exige reducir el precio de unidades anteriores", ["Porque el costo medio es cero", "Porque la demanda no representa precio", "Porque el precio sube al vender más"], "El efecto sobre unidades inframarginales hace que el ingreso adicional sea menor que el precio."],
    ["Si una empresa sube precio en una demanda inelástica, el ingreso total probablemente:", "Aumenta", ["Cae siempre", "Se vuelve cero", "No puede cambiar"], "La pérdida porcentual de cantidad es menor que el aumento porcentual del precio."],
    ["La Escala Mínima Eficiente puede generar concentración si:", "Es grande respecto del tamaño de la demanda", ["Es cero", "Siempre está fuera del mercado", "No existen costos medios"], "Si la EME cubre gran parte del mercado, pocas firmas pueden operar eficientemente."]
  ],
  dificil: [
    ["Dos mercados tienen la misma pendiente, pero uno mide cantidad en litros y otro en hectolitros. ¿Qué comparación es más confiable?", "Comparar elasticidades, no pendientes", ["Comparar solo pendientes", "Ignorar precios", "Usar costos fijos", "Asumir elasticidad cero"], "La pendiente cambia con unidades; la elasticidad usa porcentajes."],
    ["Una firma enfrenta demanda poco elástica, pocos rivales y barreras de entrada. ¿Qué se espera sobre su poder de mercado?", "Será relativamente alto", ["Será nulo", "Será igual al de competencia perfecta", "No podrá influir precios"], "Esas condiciones reducen presión competitiva y sensibilidad del consumidor."],
    ["Si una empresa baja precio y observa que \\(IT\\) cae, ¿en qué tramo probablemente estaba?", "Inelástico", ["Elástico", "Unitario con certeza", "Perfectamente elástico"], "En tramo inelástico, bajar precio no genera suficiente aumento de cantidad."],
    ["¿Qué condición identifica el máximo ingreso total en una demanda lineal?", "\\(IMg=0\\)", ["\\(IMg=p\\)", "\\(P=0\\)", "\\(Q=0\\)"], "El ingreso total se maximiza donde su marginal es cero."],
    ["En \\(p=a-bq\\), ¿por qué \\(IMg=a-2bq\\) tiene el doble de pendiente?", "Porque \\(IT=aq-bq^2\\) y su derivada duplica el coeficiente de \\(q^2\\)", ["Porque la demanda es horizontal", "Porque el costo marginal se duplica", "Porque \\(a=0\\)"], "Derivar \\(aq-bq^2\\) produce \\(a-2bq\\)."],
    ["Si EME está muy cerca de \\(y^*\\), el mercado tiende a:", "Ser concentrado o monopólico", ["Tener muchas firmas pequeñas eficientes", "Ser perfectamente competitivo por definición", "No tener costos medios"], "Una escala eficiente grande frente a la demanda limita el número de firmas viables."],
    ["Si EME es pequeña respecto de \\(y^*\\), el mercado tiende a permitir:", "Muchas empresas eficientes", ["Un único productor inevitable", "Demanda vertical", "Ingreso marginal siempre negativo"], "Varias firmas pueden alcanzar bajo costo medio sin cubrir todo el mercado."],
    ["Una empresa produce donde \\(|\\varepsilon|<1\\) y \\(CMg>0\\). ¿Qué señal recibe?", "Reducir producción puede elevar ingresos y reducir costos", ["Debe aumentar producción", "Debe ignorar demanda", "Su beneficio ya es máximo necesariamente"], "En zona inelástica, vender más reduce ingreso total y aumenta costos."],
    ["¿Cuál es la lectura correcta de demanda inversa como ingreso medio?", "Cada punto muestra el precio promedio por unidad vendida", ["Cada punto muestra costo fijo", "La curva es siempre igual al IMg", "No permite calcular IT"], "Como \\(IT/Q=p\\), la demanda inversa coincide con ingreso medio."],
    ["Una firma con mayor poder de mercado puede tener margen alto solo si:", "Los consumidores no responden demasiado al precio o existen barreras estratégicas", ["La demanda es perfectamente elástica", "Hay infinitos sustitutos", "El ingreso marginal siempre es cero"], "El margen requiere que la demanda no discipline completamente el precio."]
  ]
};

const marketWeek1Practice = {
  facil: [
    choiceRow("Si \\(|\\varepsilon|=1.5\\), la demanda es:", "Elástica", ["Inelástica", "Unitaria", "Perfectamente inelástica"], "Como \\(|\\varepsilon|>1\\), la cantidad responde más que proporcionalmente."),
    choiceRow("Si \\(|\\varepsilon|=0.4\\), la demanda es:", "Inelástica", ["Elástica", "Unitaria", "Perfectamente elástica"], "Está entre cero y uno."),
    choiceRow("Si \\(|\\varepsilon|=1\\), la demanda es:", "Unitaria", ["Elástica", "Inelástica", "Perfectamente inelástica"], "La variación porcentual de cantidad y precio es proporcionalmente igual."),
    choiceRow("Con \\(P=12\\) y \\(Q=30\\), el ingreso total es:", "360", ["42", "2.5", "18"], "\\(IT=P\\cdot Q=12\\cdot30=360\\)."),
    choiceRow("Con demanda \\(P=20-Q\\), si \\(Q=5\\), entonces \\(P\\) es:", "15", ["25", "10", "4"], "\\(P=20-5=15\\)."),
    choiceRow("Con demanda \\(Q=100-5P\\), si \\(P=10\\), entonces \\(Q\\) es:", "50", ["90", "20", "500"], "\\(Q=100-5(10)=50\\)."),
    choiceRow("Si \\(IT=500\\) y \\(Q=25\\), el precio promedio es:", "20", ["12.5", "25", "475"], "\\(p=IT/Q=500/25=20\\)."),
    choiceRow("Si \\(P\\) sube 10% y \\(Q\\) baja 5%, \\(|\\varepsilon|\\) es:", "0.5", ["2", "1", "5"], "\\(|\\varepsilon|=5/10=0.5\\)."),
    choiceRow("Si \\(P\\) sube 5% y \\(Q\\) baja 15%, \\(|\\varepsilon|\\) es:", "3", ["0.33", "1", "20"], "\\(|\\varepsilon|=15/5=3\\)."),
    choiceRow("Si \\(IMg=0\\), el ingreso total está:", "En su máximo", ["En su mínimo siempre", "Sin relación con ventas", "Negativo"], "El marginal cero identifica el máximo de \\(IT\\) en el caso usual.")
  ],
  medio: [
    choiceRow("De \\(P_1=10\\), \\(P_2=12\\), \\(Q_1=100\\), \\(Q_2=80\\). Elasticidad arco aproximada:", "-1.22", ["-0.82", "1.22", "-2.20"], "\\(\\Delta Q/\\Delta P=-20/2=-10\\), \\(\\bar P/\\bar Q=11/90\\), entonces \\(\\varepsilon\\approx-1.22\\)."),
    choiceRow("Con \\(P_1=8\\), \\(Q_1=60\\), \\(P_2=10\\), \\(Q_2=50\\). \\(IT\\) pasa de:", "480 a 500", ["500 a 480", "60 a 50", "8 a 10"], "\\(8\\cdot60=480\\) y \\(10\\cdot50=500\\)."),
    choiceRow("Si \\(|\\varepsilon|=2\\), al bajar precio se espera que \\(IT\\):", "Aumente", ["Disminuya", "No cambie", "Sea cero"], "En tramo elástico, vender más compensa la caída del precio."),
    choiceRow("Si \\(|\\varepsilon|=0.6\\), al subir precio se espera que \\(IT\\):", "Aumente", ["Disminuya", "Sea cero", "No pueda calcularse"], "En tramo inelástico, la cantidad cae proporcionalmente menos que el precio sube."),
    choiceRow("Para \\(P=8-Q\\), si \\(Q=3\\), \\(P\\) e \\(IT\\) son:", "\\(P=5\\), \\(IT=15\\)", ["\\(P=11\\), \\(IT=33\\)", "\\(P=3\\), \\(IT=5\\)", "\\(P=8\\), \\(IT=24\\)"], "\\(P=8-3=5\\), \\(IT=5\\cdot3=15\\)."),
    choiceRow("Para \\(Q=200-10P\\), si \\(P=12\\), \\(Q\\) es:", "80", ["320", "188", "120"], "\\(Q=200-10(12)=80\\)."),
    choiceRow("Si \\(IT\\) sube de 300 a 345 cuando \\(Q\\) sube de 20 a 23, el \\(IMg\\) promedio es:", "15", ["45", "3", "23"], "\\(IMg=\\Delta IT/\\Delta Q=45/3=15\\)."),
    choiceRow("Si \\(IT\\) baja de 500 a 480 al aumentar \\(Q\\) de 50 a 55, el \\(IMg\\) promedio es:", "-4", ["4", "-20", "10"], "\\(IMg=-20/5=-4\\), señal de zona inelástica."),
    choiceRow("Para \\(P=30-2Q\\), el ingreso marginal es:", "\\(IMg=30-4Q\\)", ["\\(IMg=30-2Q\\)", "\\(IMg=60-2Q\\)", "\\(IMg=2Q-30\\)"], "Si \\(P=a-bQ\\), entonces \\(IMg=a-2bQ\\)."),
    choiceRow("Para \\(P=40-Q\\), el \\(Q\\) que maximiza \\(IT\\) es:", "20", ["40", "10", "0"], "\\(IMg=40-2Q=0\\Rightarrow Q=20\\).")
  ],
  dificil: [
    choiceRow("Para \\(P=100-2Q\\), el ingreso marginal es:", "\\(IMg=100-4Q\\)", ["\\(IMg=100-2Q\\)", "\\(IMg=200-2Q\\)", "\\(IMg=50-Q\\)"], "Con demanda inversa lineal \\(P=a-bQ\\), \\(IMg=a-2bQ\\).", microGraphDemandMr()),
    choiceRow("Con \\(P=100-2Q\\), el \\(Q\\) que maximiza ingreso total es:", "25", ["50", "20", "100"], "\\(IMg=100-4Q=0\\Rightarrow Q=25\\).", microGraphDemandMr()),
    choiceRow("Con \\(P=100-2Q\\), si \\(Q=25\\), el precio es:", "50", ["25", "75", "100"], "\\(P=100-2(25)=50\\)."),
    choiceRow("Para \\(P=60-Q\\), si la capacidad es \\(Q=40\\), el \\(IMg\\) en esa cantidad es:", "-20", ["20", "0", "60"], "\\(IMg=60-2Q=60-80=-20\\). La capacidad cae en tramo inelástico.", microGraphDemandMr({ capacity: true })),
    choiceRow("Una empresa vende entradas con \\(P=120-0.5Q\\). El \\(Q\\) que maximiza \\(IT\\) es:", "120", ["240", "60", "180"], "\\(IMg=120-Q=0\\Rightarrow Q=120\\)."),
    choiceRow("Con \\(P=120-0.5Q\\), si \\(Q=120\\), el precio es:", "60", ["120", "30", "0"], "\\(P=120-0.5(120)=60\\)."),
    choiceRow("Con \\(P=80-Q\\), comparar \\(Q=20\\) y \\(Q=50\\): ¿dónde el \\(IMg\\) es negativo?", "\\(Q=50\\)", ["\\(Q=20\\)", "En ambos", "En ninguno"], "\\(IMg=80-2Q\\). En \\(Q=50\\), \\(IMg=-20\\)."),
    choiceRow("Si una sala tiene capacidad 90 y demanda \\(P=150-Q\\), llenar toda la sala implica \\(IMg\\):", "-30", ["30", "0", "150"], "\\(IMg=150-2(90)=-30\\). Vender esa unidad adicional reduce \\(IT\\).", microGraphDemandMr({ capacity: true })),
    choiceRow("Para \\(P=90-3Q\\), la demanda corta el eje \\(Q\\) en:", "30", ["15", "90", "270"], "El corte de demanda ocurre cuando \\(P=0\\): \\(90-3Q=0\\Rightarrow Q=30\\)."),
    choiceRow("Para \\(P=90-3Q\\), el \\(IMg\\) corta el eje \\(Q\\) en:", "15", ["30", "45", "90"], "\\(IMg=90-6Q=0\\Rightarrow Q=15\\), la mitad del corte de demanda.")
  ]
};

const marketWeek2Theory = {
  facil: [
    ["¿Cuál es una característica central del monopolio?", "Una sola empresa vendedora", ["Muchas empresas precio-aceptantes", "Entrada libre sin barreras", "Producto perfectamente homogéneo con infinitos rivales"], "El monopolio concentra la venta en una sola empresa."],
    ["El monopolista se diferencia de una firma competitiva porque:", "No toma el precio como dato", ["No enfrenta costos", "No tiene demanda", "Siempre vende gratis"], "El monopolista reconoce que precio y cantidad están unidos por la demanda."],
    ["La condición básica de maximización del monopolista es:", "\\(IMg=CMg\\)", ["\\(P=0\\)", "\\(CMe=0\\)", "\\(IT=CT\\) siempre"], "El óptimo se alcanza cuando el ingreso de la unidad adicional iguala su costo."],
    ["Si \\(IMg>CMg\\), al monopolista le conviene:", "Producir más", ["Producir menos", "Cerrar siempre", "Ignorar la demanda"], "La unidad adicional aporta más ingreso que costo."],
    ["Si \\(IMg<CMg\\), producir una unidad más:", "Reduce el beneficio", ["Aumenta siempre el beneficio", "No cambia nada", "Elimina el costo total"], "El costo marginal supera al ingreso marginal."],
    ["En monopolio, el precio se obtiene:", "Leyéndolo en la demanda para la cantidad elegida", ["Igualándolo siempre a cero", "Tomándolo como dato externo", "Sumando empresas competidoras"], "Primero se decide \\(Y_m\\); luego \\(P_m=p(Y_m)\\)."],
    ["Con demanda lineal \\(p(y)=a-by\\), el ingreso marginal es:", "\\(IMg=a-2by\\)", ["\\(IMg=a-by\\)", "\\(IMg=2a-by\\)", "\\(IMg=b-ay\\)"], "El ingreso total es \\(ay-by^2\\) y su derivada es \\(a-2by\\)."],
    ["En monopolio, normalmente se cumple:", "\\(P>CMg\\)", ["\\(P=CMg\\) siempre", "\\(P<0\\)", "\\(CMg=0\\) siempre"], "El poder de mercado permite cobrar un precio por encima del costo marginal."],
    ["¿Existe curva de oferta en monopolio?", "No, porque la cantidad depende de demanda y costo marginal", ["Sí, siempre es la demanda", "Sí, siempre es el costo medio", "Sí, es horizontal"], "No hay una relación única precio-cantidad independiente de la demanda."],
    ["La pérdida irrecuperable aparece porque:", "El monopolio produce menos que la cantidad eficiente", ["El monopolio produce infinitamente", "El precio es igual a cero", "No existen consumidores"], "Al producir \\(Y_m<Y_c\\), quedan intercambios valiosos sin realizarse."]
  ],
  medio: [
    ["¿Por qué el \\(IMg\\) queda por debajo de la demanda?", "Porque vender más exige bajar el precio de unidades previas", ["Porque el costo marginal sube", "Porque la demanda es vertical", "Porque el precio no existe"], "Con demanda descendente, la rebaja afecta unidades inframarginales."],
    ["El monopolista produce en el tramo elástico porque:", "En el tramo inelástico aumentar cantidad reduce ingreso y eleva costos", ["Ahí el precio es cero", "Ahí no hay demanda", "Ahí el costo marginal desaparece"], "Si \\(|\\varepsilon|<1\\), \\(IMg<0\\); no conviene con \\(CMg\\ge0\\)."],
    ["La fórmula de markup muestra que el precio depende de:", "Costo marginal y elasticidad", ["Solo costos fijos", "Solo número de trabajadores", "Solo impuestos"], "\\(p=CMg/(1-1/|\\varepsilon|)\\) vincula margen y sensibilidad."],
    ["Si la demanda se vuelve más elástica, el margen del monopolista tiende a:", "Reducirse", ["Aumentar necesariamente", "Volverse infinito", "No depender de nada"], "Mayor elasticidad disciplina el precio."],
    ["Si \\(p(y)=a-by\\), el \\(IMg\\) corta el eje de cantidad:", "En la mitad que la demanda", ["En el doble que la demanda", "En el mismo punto siempre", "Nunca corta el eje"], "La demanda corta en \\(a/b\\); el IMg en \\(a/(2b)\\)."],
    ["El beneficio \\(\\pi=(P_m-CMe)Y_m\\) se interpreta como:", "Margen medio por cantidad vendida", ["Solo excedente del consumidor", "Costo fijo puro", "Pérdida social total"], "Es un rectángulo de margen unitario multiplicado por unidades."],
    ["Comparado con competencia perfecta, el monopolio suele tener:", "Mayor precio y menor cantidad", ["Menor precio y mayor cantidad", "Precio igual y cantidad infinita", "Costo marginal cero"], "El monopolio restringe producción para sostener precio."],
    ["Si aumenta el costo marginal, el monopolista normalmente:", "Sube precio y reduce cantidad", ["Baja precio y aumenta cantidad", "No cambia nada", "Produce infinito"], "El cruce \\(IMg=CMg\\) ocurre a menor cantidad."],
    ["La inexistencia de oferta monopólica significa que:", "No hay una curva única que asocie cada precio con una cantidad ofrecida", ["El monopolista nunca vende", "No hay costos", "No hay demanda"], "La decisión depende de toda la curva de demanda, no solo del precio."],
    ["La ineficiencia asignativa se resume con:", "\\(Y_m<Y_c\\) y \\(P_m>P_c\\)", ["\\(Y_m>Y_c\\) y \\(P_m<P_c\\)", "\\(Y_m=0\\) siempre", "\\(P_m=0\\) siempre"], "El monopolio vende menos y cobra más que la asignación eficiente."]
  ],
  dificil: [
    ["Si una firma produce donde \\(|\\varepsilon|<1\\) y \\(CMg>0\\), ¿qué ajuste mejora beneficios?", "Reducir producción y elevar precio", ["Aumentar producción", "Mantener cantidad porque ya es óptima", "Bajar precio hasta cero"], "En zona inelástica, reducir cantidad eleva ingreso total y baja costos."],
    ["Dos demandas distintas cruzan el mismo \\(CMg\\). ¿Por qué no basta el \\(CMg\\) para definir oferta monopólica?", "Porque el \\(IMg\\) depende de la forma de cada demanda", ["Porque el costo marginal no existe", "Porque el precio es fijo", "Porque la demanda es irrelevante"], "La cantidad se decide con \\(IMg=CMg\\), y el IMg cambia con la demanda."],
    ["Cuando la demanda es perfectamente elástica, el monopolista se parece a competencia perfecta porque:", "No puede fijar margen sobre el precio de mercado", ["Tiene barreras infinitas", "El IMg es negativo siempre", "La cantidad eficiente es cero"], "Una demanda horizontal disciplina completamente el precio."],
    ["¿Por qué el área de pérdida irrecuperable no es transferencia al monopolista?", "Porque representa excedente que nadie recibe", ["Porque todo pasa al productor", "Porque todo pasa al Estado", "Porque es costo fijo"], "Son intercambios no realizados donde disposición a pagar supera al costo."],
    ["Si el monopolista enfrenta un aumento de \\(CMg\\), el excedente del consumidor cae porque:", "Sube el precio y baja la cantidad consumida", ["Baja el precio y sube la cantidad", "El precio no cambia jamás", "La demanda desaparece"], "El nuevo cruce implica menor \\(Y\\) y mayor precio sobre la demanda."],
    ["El punto competitivo se identifica con:", "\\(P=CMg\\)", ["\\(IMg=CMg\\) del monopolista", "\\(P=0\\)", "\\(CMe=0\\)"], "La eficiencia asignativa requiere precio igual a costo marginal."],
    ["En \\(p=a-by\\), si aumenta \\(b\\), manteniendo \\(a\\), la demanda es más inclinada. El monopolista enfrenta:", "Una caída más rápida del precio al expandir cantidad", ["Precio constante", "Ingreso marginal igual a demanda", "Costo marginal negativo"], "Mayor pendiente reduce más el precio al vender unidades adicionales."],
    ["Si el monopolista tiene beneficios positivos, eso significa que:", "\\(P_m>CMe(Y_m)\\)", ["\\(P_m<CMg\\)", "\\(Y_m=Y_c\\)", "\\(IMg<0\\) siempre"], "El rectángulo de beneficio existe cuando precio supera costo medio."],
    ["La regla de markup exige trabajar con elasticidad en valor absoluto porque:", "La elasticidad de demanda es negativa y el margen se interpreta positivo", ["El precio es negativo", "El costo marginal es negativo", "No existe demanda"], "Usar \\(|\\varepsilon|\\) evita confundir el signo de la pendiente."],
    ["Una regulación que fuerza \\(P=CMg\\) busca:", "Eliminar la pérdida irrecuperable, aunque puede afectar cobertura de costos", ["Maximizar el margen monopólico", "Reducir cantidad por debajo de \\(Y_m\\)", "Eliminar consumidores"], "El precio eficiente iguala disposición marginal y costo marginal."]
  ]
};

const marketWeek2Practice = {
  facil: [
    choiceRow("Si \\(P=80-2Y\\) y \\(Y=10\\), el precio es:", "60", ["80", "20", "100"], "\\(P=80-2(10)=60\\)."),
    choiceRow("Si \\(P=120-Y\\) y \\(Y=30\\), el precio es:", "90", ["150", "30", "120"], "\\(P=120-30=90\\)."),
    choiceRow("Para \\(P=60-0.5Y\\), si \\(Y=20\\), \\(P\\) es:", "50", ["40", "60", "10"], "\\(P=60-0.5(20)=50\\)."),
    choiceRow("Si \\(P=50\\) y \\(Y=12\\), el ingreso total es:", "600", ["62", "416", "24"], "\\(IT=P\\cdot Y=50\\cdot12=600\\)."),
    choiceRow("Para \\(P=80-2Y\\), el ingreso marginal es:", "\\(IMg=80-4Y\\)", ["\\(IMg=80-2Y\\)", "\\(IMg=160-2Y\\)", "\\(IMg=40-Y\\)"], "Si \\(P=a-bY\\), entonces \\(IMg=a-2bY\\)."),
    choiceRow("Para \\(P=120-Y\\), el ingreso marginal es:", "\\(IMg=120-2Y\\)", ["\\(IMg=120-Y\\)", "\\(IMg=240-Y\\)", "\\(IMg=Y-120\\)"], "La pendiente del IMg es el doble de la demanda inversa."),
    choiceRow("Si \\(IMg=50-Y\\) y \\(CMg=2\\), la cantidad monopólica es:", "48", ["52", "26", "50"], "\\(50-Y=2\\Rightarrow Y=48\\)."),
    choiceRow("Con \\(P=50-Y/2\\) y \\(Y=48\\), el precio es:", "26", ["24", "48", "50"], "\\(P=50-48/2=26\\)."),
    choiceRow("Si \\(P=26\\), \\(CMe=2\\) y \\(Y=48\\), el beneficio es:", "1152", ["1248", "96", "48"], "\\(\\pi=(26-2)48=1152\\)."),
    choiceRow("En competencia perfecta con \\(P=80-2Y\\) y \\(CMg=20\\), la cantidad cumple:", "\\(Y=30\\)", ["\\(Y=15\\)", "\\(Y=20\\)", "\\(Y=50\\)"], "\\(P=CMg\\Rightarrow 80-2Y=20\\Rightarrow Y=30\\).")
  ],
  medio: [
    choiceRow("Para \\(P=80-2Y\\) y \\(CMg=20\\), la cantidad monopólica es:", "15", ["30", "20", "10"], "\\(IMg=80-4Y\\). Igualando a 20: \\(Y=15\\)."),
    choiceRow("Con \\(P=80-2Y\\) y \\(Y_m=15\\), el precio monopólico es:", "50", ["20", "30", "60"], "\\(P=80-2(15)=50\\)."),
    choiceRow("Con \\(P=80-2Y\\), \\(CMg=CMe=20\\), el beneficio monopólico es:", "450", ["900", "300", "600"], "\\(\\pi=(50-20)15=450\\)."),
    choiceRow("Para \\(P=120-Y\\) y \\(CMg=30\\), la cantidad monopólica es:", "45", ["90", "30", "60"], "\\(IMg=120-2Y=30\\Rightarrow Y=45\\)."),
    choiceRow("Con \\(P=120-Y\\), \\(CMg=30\\), el precio monopólico es:", "75", ["45", "90", "30"], "\\(P=120-45=75\\)."),
    choiceRow("Con \\(P=120-Y\\), \\(CMe=30\\), \\(Y_m=45\\), el beneficio es:", "2025", ["3375", "1350", "4050"], "\\(\\pi=(75-30)45=2025\\)."),
    choiceRow("Para \\(P=60-0.5Y\\) y \\(CMg=10\\), \\(Y_m\\) es:", "50", ["100", "60", "25"], "\\(IMg=60-Y=10\\Rightarrow Y=50\\)."),
    choiceRow("Con \\(P=60-0.5Y\\) y \\(Y_m=50\\), \\(P_m\\) es:", "35", ["10", "25", "50"], "\\(P=60-0.5(50)=35\\)."),
    choiceRow("En competencia perfecta con \\(P=120-Y\\) y \\(CMg=30\\), \\(Y_c\\) es:", "90", ["45", "120", "30"], "\\(120-Y=30\\Rightarrow Y_c=90\\)."),
    choiceRow("Para \\(P=80-2Y\\) y \\(CMg=20\\), la pérdida de cantidad frente a competencia es:", "15", ["30", "45", "5"], "\\(Y_c=30\\) y \\(Y_m=15\\), entonces la diferencia es 15.")
  ],
  dificil: [
    choiceRow("Con \\(P=100-Y\\) y \\(CMg=20\\), la pérdida irrecuperable es:", "800", ["1600", "400", "2000"], "\\(Y_m=40\\), \\(Y_c=80\\), diferencia de precio en \\(Y_m\\): \\(60-20=40\\). PIE \\(=\\frac12(80-40)(40)=800\\).", monopolySvg("welfare")),
    choiceRow("Para \\(P=80-2Y\\), \\(CMg=20\\), la pérdida irrecuperable es:", "225", ["450", "900", "150"], "\\(Y_m=15\\), \\(Y_c=30\\), \\(P_m=50\\), \\(Pc=20\\). PIE \\(=\\frac12(15)(30)=225\\)."),
    choiceRow("Si \\(CMg\\) sube de 20 a 40 con \\(P=100-Y\\), \\(Y_m\\) cambia de:", "40 a 30", ["80 a 60", "30 a 40", "20 a 40"], "\\(IMg=100-2Y\\). Con 20: \\(Y=40\\); con 40: \\(Y=30\\).", monopolySvg("cost")),
    choiceRow("Con \\(P=100-Y\\), al subir \\(CMg\\) de 20 a 40, el precio monopólico cambia de:", "60 a 70", ["20 a 40", "80 a 60", "70 a 60"], "Los precios son \\(100-40=60\\) y \\(100-30=70\\)."),
    choiceRow("Con \\(P=120-Y\\), \\(CMg=30\\), el excedente del consumidor en monopolio es:", "1012.5", ["2025", "4050", "506.25"], "\\(Y_m=45\\), \\(P_m=75\\). EC \\(=\\frac12(120-75)45=1012.5\\)."),
    choiceRow("Con \\(P=120-Y\\), \\(CMg=30\\), el excedente total eficiente en competencia es:", "4050", ["2025", "1012.5", "6075"], "\\(Y_c=90\\). Excedente total \\(=\\frac12(120-30)90=4050\\)."),
    choiceRow("Con \\(P=60-0.5Y\\), \\(CMg=10\\), la cantidad competitiva es:", "100", ["50", "35", "25"], "\\(60-0.5Y=10\\Rightarrow Y_c=100\\)."),
    choiceRow("Con \\(P=60-0.5Y\\), \\(CMg=10\\), la pérdida irrecuperable es:", "625", ["1250", "312.5", "2500"], "\\(Y_m=50\\), \\(Y_c=100\\), \\(P_m=35\\). PIE \\(=\\frac12(50)(25)=625\\)."),
    choiceRow("En el ejemplo \\(D(p)=100-2p\\), \\(C(y)=2y\\), la cantidad competitiva sería:", "96", ["48", "50", "26"], "Demanda inversa: \\(P=50-y/2\\). Competencia: \\(50-y/2=2\\Rightarrow y=96\\)."),
    choiceRow("En el ejemplo \\(D(p)=100-2p\\), \\(C(y)=2y\\), la cantidad monopólica es la mitad de la competitiva porque:", "El IMg corta el eje de cantidad a la mitad que la demanda", ["El costo marginal es cero", "La demanda es vertical", "El precio competitivo es igual al monopólico"], "En demanda lineal con \\(CMg\\) constante bajo, el IMg tiene doble pendiente y reduce la cantidad elegida.")
  ]
};

const marketTheoryData = makeMarketTheoryData(marketWeeks);
marketTheoryData["pm-semana-01"] = marketWeek1Theory;
marketTheoryData["pm-semana-02"] = marketWeek2Theory;

const marketPracticeBanks = makeMarketPracticeBanks(marketWeeks);
marketPracticeBanks["pm-semana-01"] = marketWeek1Practice;
marketPracticeBanks["pm-semana-02"] = marketWeek2Practice;

const financeWeekGuides = {
  "aef-semana-02": {
    title: "Semana 2: Elementos contables, cuentas contables y estados financieros",
    subtitle: "Activos, pasivos, patrimonio, ingresos, gastos y su relación con los estados financieros.",
    intro: "Esta semana construye el vocabulario base de la contabilidad. La meta es reconocer qué elemento contable representa cada cuenta y en qué estado financiero debe presentarse.",
    objectives: ["Distinguir elementos del Estado de Situación Financiera y del Estado de Resultados Integrales.", "Clasificar cuentas como activo, pasivo, patrimonio, ingreso o gasto.", "Entender cómo las cuentas contables alimentan los estados financieros.", "Relacionar inversión, financiamiento y desempeño económico."],
    blocks: [
      ["Elementos del Estado de Situación Financiera", "Activos, pasivos y patrimonio explican la posición financiera de la empresa. Los activos muestran recursos controlados; los pasivos, financiamiento de terceros; y el patrimonio, financiamiento de propietarios y resultados acumulados."],
      ["Elementos del Estado de Resultados Integrales", "Ingresos y gastos explican el desempeño. Los ingresos representan recursos generados por actividades de la empresa; los gastos son recursos consumidos para generar esos ingresos."],
      ["Cuentas contables", "Las cuentas son etiquetas ordenadas que permiten registrar, acumular y presentar información. Una cuenta de inventarios no comunica lo mismo que una cuenta por pagar o un ingreso por ventas."],
      ["Relación con estados financieros", "Las cuentas de activo, pasivo y patrimonio se presentan en el Estado de Situación Financiera. Las cuentas de ingresos y gastos se presentan en el Estado de Resultados Integrales."]
    ],
    tables: [
      ["Elemento contable", [["Activo", "Bienes, recursos y derechos controlados por la empresa."], ["Pasivo", "Obligaciones con terceros que financian activos."], ["Patrimonio", "Aportes y resultados atribuibles a los propietarios."], ["Ingresos", "Recursos generados por la actividad del negocio."], ["Gastos", "Recursos consumidos para generar ingresos."]]]
    ],
    key: "La primera habilidad contable es clasificar bien: si una cuenta se clasifica mal, el estado financiero comunica mal la realidad económica."
  },
  "aef-semana-03": {
    title: "Semana 3: Estructura de estados financieros - Estado de resultados",
    subtitle: "Ventas, costo de ventas, gastos por función, resultado operativo y utilidad neta.",
    intro: "Esta semana se enfoca en el Estado de Resultados Integrales: el estado que resume si la empresa ganó o perdió durante un periodo.",
    objectives: ["Comprender la estructura del Estado de Resultados Integrales.", "Diferenciar ingresos por ventas, otros ingresos e ingresos financieros.", "Clasificar gastos por función y por naturaleza.", "Interpretar ganancia bruta, operativa y neta."],
    blocks: [
      ["Qué informa", "Cuantifica la utilidad o pérdida del negocio al comparar ingresos y gastos del periodo. Su resultado se conecta con patrimonio mediante resultados acumulados."],
      ["Ventas netas", "Parten de ventas brutas y se ajustan por descuentos, devoluciones, rebajas y bonificaciones. Es la base para evaluar la actividad principal."],
      ["Costo de ventas y ganancia bruta", "El costo de ventas representa el costo de los bienes vendidos o servicios prestados. La ganancia bruta muestra cuánto queda antes de gastos operativos."],
      ["Gastos por función", "Los gastos administrativos se vinculan con la gestión; los gastos de ventas con la comercialización; los financieros con deuda e intereses."]
    ],
    tables: [
      ["Lectura del resultado", [["Ventas netas", "Ingreso principal del giro del negocio."], ["Ganancia bruta", "Ventas netas menos costo de ventas."], ["Ganancia operativa", "Resultado luego de gastos de administración y ventas."], ["Utilidad antes de impuestos", "Resultado antes del impuesto a las ganancias."], ["Utilidad neta", "Resultado final atribuible al periodo."]]]
    ],
    key: "El Estado de Resultados no solo dice si hubo ganancia: muestra dónde se generó o perdió valor dentro del periodo."
  },
  "aef-semana-04": {
    title: "Semana 4: Estructura de estados financieros - Estado de situación financiera",
    subtitle: "Activos, pasivos, patrimonio, encabezado y ecuación contable.",
    intro: "Esta semana trabaja el Estado de Situación Financiera, que muestra la posición financiera de la empresa a una fecha específica.",
    objectives: ["Reconocer la estructura básica del Estado de Situación Financiera.", "Distinguir decisiones de inversión y financiamiento.", "Clasificar activos y pasivos corrientes y no corrientes.", "Verificar la igualdad entre activo y pasivo más patrimonio."],
    blocks: [
      ["Estructura básica", "El activo representa decisiones de inversión; el pasivo y el patrimonio representan decisiones de financiamiento."],
      ["Encabezado correcto", "Debe incluir nombre del negocio, nombre del estado financiero, fecha o periodo cubierto y unidad monetaria."],
      ["Activo corriente y no corriente", "El corriente se espera realizar, vender o consumir en el ciclo normal o dentro de 12 meses. El no corriente permanece por más tiempo, como propiedades, planta, equipo e intangibles."],
      ["Pasivo y patrimonio", "El pasivo recoge obligaciones con terceros. El patrimonio incluye capital, reservas y resultados acumulados."]
    ],
    tables: [
      ["Estructura del ESF", [["Activo corriente", "Efectivo, cuentas por cobrar, inventarios."], ["Activo no corriente", "Inversiones, propiedad planta y equipo, intangibles."], ["Pasivo corriente", "Sobregiros, tributos y cuentas por pagar de corto plazo."], ["Pasivo no corriente", "Préstamos u obligaciones mayores a un año."], ["Patrimonio", "Capital, reservas y resultados acumulados."], ["Ecuación contable", "Resume el equilibrio básico del Estado de Situación Financiera.", "\\[Activo=Pasivo+Patrimonio\\]"], ["Comprobación del total", "El total de recursos debe coincidir con sus fuentes de financiamiento.", "\\[Total\\ Activo=Total\\ Pasivo+Total\\ Patrimonio\\]"]]]
    ],
    key: "El Estado de Situación Financiera siempre debe cuadrar: los recursos de la empresa se financian con terceros o con propietarios."
  },
  "aef-semana-05": {
    title: "Semana 5: Estado de Flujo de Efectivo",
    subtitle: "Efectivo, equivalentes, operación, inversión, financiamiento y análisis de liquidez.",
    intro: "Esta semana estudia cómo se mueve el efectivo. El resultado contable puede ser positivo, pero la empresa también necesita efectivo para pagar obligaciones.",
    objectives: ["Definir efectivo, equivalentes y flujos de efectivo.", "Clasificar flujos en operación, inversión y financiamiento.", "Entender la importancia del efectivo para cubrir obligaciones.", "Leer el Estado de Flujo de Efectivo como herramienta de análisis."],
    blocks: [
      ["Objetivo del EFE", "Brinda información sobre los cambios históricos en efectivo y equivalentes, clasificados por procedencia."],
      ["Actividades de operación", "Son las relacionadas con la fuente principal de ingresos y gastos del negocio: cobros a clientes, pagos a proveedores, empleados e impuestos."],
      ["Actividades de inversión", "Incluyen adquisición y disposición de activos de largo plazo, inversiones, activos fijos e intangibles."],
      ["Actividades de financiamiento", "Producen cambios en el tamaño y composición del capital propio y obligaciones: préstamos, aportes, dividendos o pagos de deuda."]
    ],
    tables: [
      ["Clasificación de flujos", [["Operación", "Cobros por ventas y pagos ordinarios del giro."], ["Inversión", "Compra o venta de activos de largo plazo."], ["Financiamiento", "Préstamos, aportes de capital, dividendos y pagos de deuda."]]]
    ],
    key: "El flujo de efectivo responde una pregunta crítica: ¿la empresa genera dinero suficiente y en el momento adecuado para operar y cumplir compromisos?"
  },
  "aef-semana-06": {
    title: "Semana 6: Análisis vertical y horizontal de estados financieros",
    subtitle: "Estructura, tendencias, variaciones absolutas y porcentuales.",
    intro: "Esta semana convierte datos contables en información útil. El análisis vertical mira estructura; el horizontal mira evolución.",
    objectives: ["Comprender el objetivo del análisis financiero.", "Distinguir análisis vertical y horizontal.", "Calcular porcentajes de estructura y variaciones.", "Interpretar cambios en cuentas relevantes."],
    blocks: [
      ["Análisis financiero", "Aplica herramientas a los estados financieros para obtener relaciones significativas y útiles para la toma de decisiones."],
      ["Análisis vertical", "Toma una base como 100% y calcula cuánto representa cada cuenta respecto de esa base. En el ESF suele usarse total activo; en el ERI, ventas."],
      ["Análisis horizontal", "Compara una cuenta entre periodos para medir aumento o disminución absoluta y relativa."],
      ["Cuidado interpretativo", "Un aumento de inventarios o cuentas por cobrar puede deberse a crecimiento, política comercial o problemas de gestión. El porcentaje necesita contexto."]
    ],
    tables: [
      ["Comparación de técnicas", [["Vertical", "Analiza composición interna de un periodo.", "\\[Análisis\\ vertical=\\frac{Cuenta}{Base}\\times100\\]"], ["Horizontal absoluto", "Mide cuánto aumentó o disminuyó una cuenta entre periodos.", "\\[Variación\\ absoluta=Valor\\ actual-Valor\\ anterior\\]"], ["Horizontal porcentual", "Mide el cambio relativo respecto del periodo anterior.", "\\[Variación\\ porcentual=\\frac{Valor\\ actual-Valor\\ anterior}{Valor\\ anterior}\\times100\\]"], ["Ratios", "Relacionan cuentas para evaluar liquidez, solvencia o rentabilidad."]]]
    ],
    key: "El análisis vertical muestra peso relativo; el horizontal muestra cambio. Juntos ayudan a detectar dónde mirar con más detalle."
  },
  "aef-semana-07": {
    title: "Semana 7: Indicadores financieros de liquidez y solvencia",
    subtitle: "Ratios, limitaciones, liquidez general, prueba ácida, prueba defensiva, endeudamiento y cobertura.",
    intro: "Esta semana introduce ratios financieros. Los indicadores resumen relaciones entre cuentas, pero deben interpretarse con contexto y comparaciones.",
    objectives: ["Definir qué es un ratio financiero.", "Reconocer limitaciones de los ratios.", "Calcular e interpretar ratios de liquidez.", "Calcular e interpretar ratios de solvencia."],
    blocks: [
      ["Qué es un ratio", "Un ratio es una razón o cociente que relaciona dos cuentas del Estado de Situación Financiera, del Estado de Resultados o de ambos."],
      ["Limitaciones", "Los ratios usan información histórica, pueden estar afectados por manipulación contable, son estáticos y deben analizarse de forma integral."],
      ["Liquidez", "Mide la capacidad para cumplir obligaciones de corto plazo. Incluye liquidez general, prueba ácida, prueba defensiva, días disponibles y capital de trabajo neto."],
      ["Solvencia", "Mide el grado de endeudamiento y la capacidad para cumplir pagos durante la vida de una deuda. Incluye endeudamiento, propiedad, endeudamiento patrimonial, cobertura del activo fijo, cobertura de intereses y costo de deuda."]
    ],
    tables: [
      ["Ratios de liquidez", [["Liquidez general", "Capacidad general de cubrir pasivos corrientes.", "\\[Liquidez\\ general=\\frac{Activo\\ corriente}{Pasivo\\ corriente}\\]"], ["Prueba ácida", "Liquidez sin depender de inventarios ni pagos anticipados.", "\\[Prueba\\ ácida=\\frac{Activo\\ corriente-Inventarios-Servicios\\ pagados\\ por\\ anticipado}{Pasivo\\ corriente}\\]"], ["Prueba defensiva", "Cobertura inmediata usando efectivo, equivalentes y valores negociables.", "\\[Prueba\\ defensiva=\\frac{Efectivo\\ y\\ equivalentes+Valores\\ negociables}{Pasivo\\ corriente}\\]"], ["Días disponibles", "Número aproximado de días en que se pueden atender pagos corrientes con disponible.", "\\[Días\\ disponibles=\\frac{Efectivo\\ y\\ equivalentes+Valores\\ negociables}{Pasivo\\ corriente/365}\\]"], ["Capital de trabajo neto", "Exceso de activo corriente sobre pasivo corriente.", "\\[Capital\\ de\\ trabajo\\ neto=Activo\\ corriente-Pasivo\\ corriente\\]"]]],
      ["Ratios de solvencia", [["Grado de endeudamiento", "Proporción de activos financiada por acreedores.", "\\[Grado\\ de\\ endeudamiento=\\frac{Pasivo\\ total}{Activo\\ total}\\]"], ["Grado de propiedad", "Proporción de activos financiada por patrimonio.", "\\[Grado\\ de\\ propiedad=\\frac{Patrimonio\\ total}{Activo\\ total}\\]"], ["Endeudamiento patrimonial", "Veces que el pasivo representa el patrimonio.", "\\[Endeudamiento\\ patrimonial=\\frac{Pasivo\\ total}{Patrimonio\\ total}\\]"], ["Cobertura del activo fijo", "Mide respaldo de activos fijos con financiamiento permanente.", "\\[Cobertura\\ del\\ activo\\ fijo=\\frac{Pasivo\\ no\\ corriente+Patrimonio-IRD}{Activo\\ fijo}\\]"], ["Cobertura de intereses", "Veces que EBIT cubre gastos financieros.", "\\[Cobertura\\ de\\ intereses=\\frac{EBIT}{Gastos\\ financieros}\\]"], ["Costo de deuda", "Costo promedio del financiamiento con costo explícito.", "\\[Costo\\ de\\ la\\ deuda=\\frac{Gastos\\ financieros}{Pasivos\\ con\\ costo\\ financiero}\\]"]]]
    ],
    key: "Un ratio aislado nunca cuenta toda la historia. Debe compararse contra periodos, sector, estrategia y calidad de la información."
  }
};

Object.assign(financeWeekGuides, {
  "aef-semana-09": {
    title: "Semana 9: Ratios de gestión y rentabilidad sobre las ventas",
    subtitle: "Rotación de cuentas por cobrar, cuentas por pagar, inventarios, activos y márgenes sobre ventas.",
    intro: "Esta semana estudia ratios que miden velocidad, eficiencia y rentabilidad. Los ratios de gestión muestran qué tan rápido ciertas cuentas se convierten en ventas o efectivo; los márgenes muestran qué parte de las ventas se transforma en utilidad.",
    objectives: ["Interpretar la rotación de cuentas por cobrar, cuentas por pagar e inventarios.", "Calcular días promedio de cobro, pago e inventario.", "Evaluar la eficiencia del uso de activos para generar ventas.", "Distinguir margen bruto, margen operativo y margen neto."],
    blocks: [
      ["Gestión", "Mide la eficiencia con la que la empresa administra cuentas por cobrar, proveedores, inventarios y activos. No basta vender: también importa cobrar, pagar, renovar inventarios y usar bien los recursos."],
      ["Cuentas por cobrar", "Una mayor rotación suele indicar cobranza más rápida. Si los días de cobro aumentan de forma constante, puede haber ventas a crédito menos controladas o problemas de cobranza."],
      ["Inventarios y pagos", "La rotación de inventarios muestra velocidad de venta. Los días de pago indican cuánto tarda la empresa en pagar proveedores y deben compararse con los días de cobro."],
      ["Rentabilidad sobre ventas", "Los márgenes evalúan cuánta utilidad queda por cada sol vendido: primero después del costo de ventas, luego después de gastos operativos y finalmente después de todos los costos, intereses e impuestos."]
    ],
    tables: [
      ["Ratios de gestión", [["Rotación de cuentas por cobrar", "Velocidad con que se cobran ventas al crédito.", "\\[Rotación\\ CxC=\\frac{Ventas\\ al\\ crédito}{Promedio\\ CxC}\\]"], ["Días promedio de cobro", "Tiempo promedio para convertir cuentas por cobrar en efectivo.", "\\[Días\\ de\\ cobro=\\frac{365}{Rotación\\ CxC}\\]"], ["Rotación de cuentas por pagar", "Velocidad con que se pagan compras al crédito.", "\\[Rotación\\ CxP=\\frac{Compras\\ al\\ crédito}{Promedio\\ CxP}\\]"], ["Días promedio de pago", "Tiempo promedio para pagar a proveedores.", "\\[Días\\ de\\ pago=\\frac{365}{Rotación\\ CxP}\\]"], ["Rotación de inventarios", "Velocidad con que el inventario se vende.", "\\[Rotación\\ de\\ inventarios=\\frac{Costo\\ de\\ ventas}{Inventario\\ promedio}\\]"], ["Días promedio de inventario", "Tiempo promedio que el inventario permanece antes de venderse.", "\\[Días\\ de\\ inventario=\\frac{365}{Rotación\\ de\\ inventarios}\\]"], ["Rotación del activo", "Eficiencia de los activos para generar ventas.", "\\[Rotación\\ del\\ activo=\\frac{Ventas}{Activo\\ total}\\]"]]],
      ["Rentabilidad sobre ventas", [["Margen bruto", "Utilidad luego de cubrir costo de ventas.", "\\[Margen\\ bruto=\\frac{Utilidad\\ bruta}{Ventas\\ netas}\\]"], ["Margen operativo", "Utilidad luego de costos y gastos operativos.", "\\[Margen\\ operativo=\\frac{Utilidad\\ operativa}{Ventas}\\]"], ["Margen neto", "Utilidad final luego de costos, gastos, intereses e impuestos.", "\\[Margen\\ neto=\\frac{Utilidad\\ neta}{Ventas}\\]"]]]
    ],
    visual: "management-ratios",
    key: "La gestión eficiente se ve en ciclos cortos y coherentes: cobrar a tiempo, vender inventario sin acumularlo y usar activos para generar ventas rentables."
  },
  "aef-semana-10": {
    title: "Semana 10: Medidas de rentabilidad sobre la inversión: ROA y ROE",
    subtitle: "Rentabilidad sobre activos, rentabilidad sobre patrimonio y lectura del apalancamiento.",
    intro: "Esta semana conecta utilidad, activos y patrimonio. El ROA mide qué tan rentable es el negocio respecto a sus activos; el ROE mide el retorno para propietarios o accionistas respecto al patrimonio.",
    objectives: ["Calcular e interpretar el ROA.", "Calcular e interpretar el ROE.", "Diferenciar rentabilidad del negocio y rentabilidad del accionista.", "Relacionar margen, rotación y apalancamiento con la rentabilidad."],
    blocks: [
      ["ROA", "El ROA muestra cuánta utilidad genera cada sol invertido en activos. Es una medida de eficiencia económica del negocio, porque observa la capacidad de los activos para producir ganancias."],
      ["ROE", "El ROE muestra la rentabilidad obtenida por los propietarios por cada sol de patrimonio. Un ROE alto puede ser atractivo, pero debe analizarse junto con deuda y riesgo."],
      ["Diferencia clave", "ROA mira activos; ROE mira patrimonio. Si hay deuda, el patrimonio puede ser menor que los activos, por lo que el ROE puede superar al ROA por efecto del apalancamiento."],
      ["Relación con gestión", "La rentabilidad depende del margen neto, de la rotación de activos y del apalancamiento financiero. Una empresa puede mejorar por vender con mayor margen, vender más con los mismos activos o financiarse con deuda de forma controlada."]
    ],
    tables: [
      ["ROA y ROE", [["ROA", "Utilidad generada por cada sol invertido en activos.", "\\[ROA=\\frac{Utilidad\\ neta}{Total\\ de\\ activos}\\]"], ["ROE", "Rentabilidad obtenida por los propietarios sobre su inversión patrimonial.", "\\[ROE=\\frac{Utilidad\\ neta}{Total\\ patrimonio}\\]"]]],
      ["Comparación", [["ROA", "Base: activos. Mide eficiencia del negocio. Importa a gerencia e inversionistas."], ["ROE", "Base: patrimonio. Mide retorno para accionistas. Importa a propietarios e inversionistas."], ["Lectura conjunta", "Si ROE supera mucho al ROA, revisa deuda, costo financiero y riesgo."]]]
    ],
    visual: "roa-roe-flow",
    key: "ROA responde qué tan productivos son los activos; ROE responde qué tan rentable fue el capital de los propietarios."
  },
  "aef-semana-11": {
    title: "Semana 11: Interpretación del enfoque Dupont",
    subtitle: "Descomposición de ROA y ROE en margen neto, rotación de activos y apalancamiento.",
    intro: "Esta semana estudia el enfoque Dupont: una herramienta que explica de dónde proviene la rentabilidad. En vez de mirar solo el ROA o el ROE final, separa sus causas principales.",
    objectives: ["Descomponer el ROA en margen neto y rotación de activos.", "Descomponer el ROE en margen neto, rotación y apalancamiento.", "Interpretar qué componente explica mejor el resultado.", "Reconocer que mayor apalancamiento aumenta retorno potencial y riesgo."],
    blocks: [
      ["Importancia", "Dupont combina indicadores para identificar si la rentabilidad viene de margen, eficiencia en el uso de activos o financiamiento con deuda."],
      ["Margen neto", "Mide cuánto gana la empresa por cada sol vendido. Un margen mayor indica mayor utilidad final por unidad de venta."],
      ["Rotación de activos", "Mide qué tan bien usa la empresa sus activos para generar ventas. Una rotación alta indica mayor velocidad comercial o mejor aprovechamiento de recursos."],
      ["Apalancamiento", "El multiplicador de apalancamiento financiero mide cuántos activos se sostienen por cada sol de patrimonio. Puede elevar el ROE, pero también aumenta exposición al riesgo financiero."]
    ],
    tables: [
      ["Componentes Dupont", [["Margen neto", "Utilidad final obtenida por cada sol vendido.", "\\[Margen\\ neto=\\frac{Utilidad\\ neta}{Ventas}\\]"], ["Rotación de activos", "Ventas generadas por cada sol de activos.", "\\[Rotación\\ de\\ activos=\\frac{Ventas}{Activos}\\]"], ["MAF", "Multiplicador de apalancamiento financiero.", "\\[MAF=\\frac{Activos}{Patrimonio}\\]"]]],
      ["Fórmulas Dupont", [["ROA", "Rentabilidad del activo explicada por margen y rotación.", "\\[ROA=Margen\\ neto\\times Rotación\\ de\\ activos\\]"], ["ROE", "Rentabilidad del patrimonio explicada por margen, rotación y apalancamiento.", "\\[ROE=Margen\\ neto\\times Rotación\\ de\\ activos\\times MAF\\]"], ["ROA expandido", "Cancela ventas y queda utilidad neta sobre activos.", "\\[ROA=\\frac{Utilidad\\ neta}{Ventas}\\times\\frac{Ventas}{Activos}\\]"], ["ROE expandido", "Cancela ventas y activos, quedando utilidad neta sobre patrimonio.", "\\[ROE=\\frac{Utilidad\\ neta}{Ventas}\\times\\frac{Ventas}{Activos}\\times\\frac{Activos}{Patrimonio}\\]"]]]
    ],
    visual: "dupont-tree",
    key: "Dupont convierte la rentabilidad en diagnóstico: margen, eficiencia y apalancamiento explican por qué cambia el ROA o el ROE."
  },
  "aef-semana-12": {
    title: "Semana 12: EBITDA y su interpretación",
    subtitle: "EBITDA, EBIT, NOPAT, GOPAT, márgenes y límites del indicador.",
    intro: "Esta semana estudia el EBITDA como indicador de desempeño operativo. Ayuda a leer la capacidad de generar beneficios desde el giro principal, antes de intereses, impuestos, depreciación y amortización.",
    objectives: ["Definir EBITDA y diferenciarlo de EBIT y utilidad neta.", "Calcular EBITDA desde EBIT o desde gastos operativos sin depreciación y amortización.", "Interpretar margen operativo y margen EBITDA.", "Reconocer limitaciones del EBITDA y complementarlo con otros indicadores."],
    blocks: [
      ["Qué es", "EBITDA significa Earnings Before Interest, Taxes, Depreciation and Amortization: utilidad antes de intereses, impuestos, depreciación y amortización."],
      ["Importancia", "Ayuda a medir rentabilidad operativa, comparar empresas del mismo sector, aproximarse al flujo operativo y analizar el negocio sin depender directamente de estructura financiera o impuestos."],
      ["Limitaciones", "No considera intereses, impuestos ni inversiones necesarias para mantener capacidad productiva. Tampoco representa exactamente flujo de caja y puede ser engañoso en empresas muy endeudadas."],
      ["Márgenes", "El margen EBITDA muestra qué porcentaje de las ventas se convierte en resultado operativo antes de depreciación y amortización. Debe compararse con margen operativo, deuda, capex y flujo de caja."]
    ],
    tables: [
      ["Fórmulas EBITDA", [["EBITDA desde EBIT", "Suma depreciación y amortización a la utilidad operativa.", "\\[EBITDA=EBIT+Depreciación+Amortización\\]"], ["EBITDA operativo", "Parte de utilidad bruta y resta gastos operativos sin depreciación ni amortización.", "\\[EBITDA=Utilidad\\ bruta-Gastos\\ operativos\\ sin\\ D\\&A\\]"], ["Margen operativo", "Porcentaje de ventas que queda como EBIT.", "\\[Margen\\ operativo=\\frac{EBIT}{Ventas}\\]"], ["Margen EBITDA", "Porcentaje de ventas que queda como EBITDA.", "\\[Margen\\ EBITDA=\\frac{EBITDA}{Ventas}\\]"]]],
      ["Herramientas relacionadas", [["EBIT", "Utilidad operativa antes de intereses e impuestos."], ["NOPAT", "Resultado operativo después de impuestos.", "\\[NOPAT=EBIT\\times(1-t)\\]"], ["GOPAT", "EBITDA después de impuestos operativos.", "\\[GOPAT=EBITDA\\times(1-t)\\]"], ["Cash Flow operativo", "Aproximación operativa agregando depreciación y amortización.", "\\[CF=NOPAT+Depreciación+Amortización\\]"]]],
      ["Ejemplo guiado", [["Ventas netas", "1,000"], ["Costo de ventas", "600"], ["Utilidad bruta", "400"], ["Gastos operativos sin D&A", "180"], ["Depreciación y amortización", "50"], ["EBIT", "170"], ["EBITDA", "\\[170+50=220\\]"], ["Margen operativo", "\\[170/1000=17\\%\\]"], ["Margen EBITDA", "\\[220/1000=22\\%\\]"], ["NOPAT con tasa 30%", "\\[170(1-0.30)=119\\]"], ["GOPAT con tasa 30%", "\\[220(1-0.30)=154\\]"]]]
    ],
    visual: "ebitda-flow",
    key: "EBITDA es útil para leer desempeño operativo, pero no debe confundirse con caja disponible ni con rentabilidad total para los accionistas."
  }
});

function renderGenericFinanceGuide(topic) {
  const guide = financeWeekGuides[topic.week];
  if (!guide) return "";
  const formatLedgerRow = ([term, desc, formula]) => `
    <div>
      <dt>${escapeHtml(term)}</dt>
      <dd>${escapeHtml(desc)}</dd>
      ${formula ? `<dd class="ledger-formula">${escapeHtml(formula)}</dd>` : ""}
    </div>
  `;
  const renderVisual = () => {
    const visuals = {
      "management-ratios": `
        <div class="finance-visual-grid">
          <article><span>Cobrar</span><strong>CxC</strong><p>Ventas al crédito → cuentas por cobrar → efectivo.</p></article>
          <article><span>Pagar</span><strong>CxP</strong><p>Compras al crédito → proveedores → salida de efectivo.</p></article>
          <article><span>Vender</span><strong>Inventarios</strong><p>Inventario → costo de ventas → caja o crédito.</p></article>
          <article><span>Rentabilizar</span><strong>Márgenes</strong><p>Ventas → utilidad bruta → utilidad operativa → utilidad neta.</p></article>
        </div>
      `,
      "roa-roe-flow": `
        <div class="finance-flow-diagram">
          <div><strong>Utilidad neta</strong><span>Resultado final</span></div>
          <div class="flow-arrow">→</div>
          <div><strong>ROA</strong><span>Utilidad / Activos</span></div>
          <div><strong>ROE</strong><span>Utilidad / Patrimonio</span></div>
          <div><strong>Activos</strong><span>Base del negocio</span></div>
          <div><strong>Patrimonio</strong><span>Base del accionista</span></div>
        </div>
      `,
      "dupont-tree": `
        <div class="dupont-visual">
          <div class="dupont-root">ROE</div>
          <div class="dupont-branches">
            <article><strong>Margen neto</strong><span>Utilidad neta / Ventas</span></article>
            <article><strong>Rotación de activos</strong><span>Ventas / Activos</span></article>
            <article><strong>MAF</strong><span>Activos / Patrimonio</span></article>
          </div>
          <div class="dupont-root muted-root">ROA</div>
          <div class="dupont-branches two">
            <article><strong>Margen neto</strong><span>Rentabilidad por venta</span></article>
            <article><strong>Rotación de activos</strong><span>Eficiencia del activo</span></article>
          </div>
        </div>
      `,
      "ebitda-flow": `
        <div class="ebitda-visual">
          <article><span>01</span><strong>Ventas netas</strong></article>
          <article><span>02</span><strong>- Costo de ventas</strong></article>
          <article><span>03</span><strong>= Utilidad bruta</strong></article>
          <article><span>04</span><strong>- Gastos operativos sin D&A</strong></article>
          <article><span>05</span><strong>= EBITDA</strong></article>
          <article><span>06</span><strong>- Depreciación y amortización</strong></article>
          <article><span>07</span><strong>= EBIT</strong></article>
        </div>
      `
    };
    return visuals[guide.visual] || "";
  };
  const visualHtml = renderVisual();
  return `
    <article class="week-guide finance-guide">
      <section class="week-hero">
        <span class="eyebrow">${escapeHtml(weekLabel(topic.week))} · Análisis financiero</span>
        <h2>${escapeHtml(guide.title)}</h2>
        <p class="week-subtitle">${escapeHtml(guide.subtitle)}</p>
        <p>${escapeHtml(guide.intro)}</p>
      </section>
      <section class="guide-section">
        <div class="section-heading"><span>01</span><h3>Objetivos de aprendizaje</h3><p>Usa esta sección como checklist antes del examen o antes de resolver casos.</p></div>
        <div class="objective-grid">${guide.objectives.map((item, index) => `<article><strong>${index + 1}. ${escapeHtml(item.split(" ")[0])}</strong><p>${escapeHtml(item)}</p></article>`).join("")}</div>
      </section>
      <section class="guide-section">
        <div class="section-heading"><span>02</span><h3>Ideas centrales</h3><p>Resumen didáctico de los conceptos que ordenan la semana.</p></div>
        <div class="source-grid">${guide.blocks.map(([title, text]) => `<article class="study-card"><div class="card-icon">${escapeHtml(title.slice(0, 2))}</div><h4>${escapeHtml(title)}</h4><p>${escapeHtml(text)}</p></article>`).join("")}</div>
      </section>
      <section class="guide-section">
        <div class="section-heading"><span>03</span><h3>Mapa de clasificación</h3><p>Ordena los conceptos y sus fórmulas dentro del lugar donde se usan.</p></div>
        ${guide.tables.map(([title, rows]) => `<div class="finance-ledger-card"><h4>${escapeHtml(title)}</h4><dl>${rows.map(formatLedgerRow).join("")}</dl></div>`).join("")}
      </section>
      ${visualHtml ? `<section class="guide-section"><div class="section-heading"><span>04</span><h3>Diagrama de estudio</h3><p>Lectura visual de los componentes principales de la semana.</p></div>${visualHtml}</section>` : ""}
      <section class="guide-section summary-guide">
        <div class="section-heading"><span>${visualHtml ? "05" : "04"}</span><h3>Idea clave para estudiar</h3><p>${escapeHtml(guide.key)}</p></div>
      </section>
    </article>
  `;
}

const financeWeeks = [
  { id: "aef-semana-01", label: "Semana 01", title: "Marco Conceptual y NIC 1" },
  { id: "aef-semana-02", label: "Semana 02", title: "Elementos contables y cuentas" },
  { id: "aef-semana-03", label: "Semana 03", title: "Estado de resultados" },
  { id: "aef-semana-04", label: "Semana 04", title: "Estado de situación financiera" },
  { id: "aef-semana-05", label: "Semana 05", title: "Estado de flujo de efectivo" },
  { id: "aef-semana-06", label: "Semana 06", title: "Análisis vertical y horizontal" },
  { id: "aef-semana-07", label: "Semana 07", title: "Liquidez y solvencia" },
  { id: "aef-semana-09", label: "Semana 09", title: "Gestión y rentabilidad sobre ventas" },
  { id: "aef-semana-10", label: "Semana 10", title: "ROA y ROE" },
  { id: "aef-semana-11", label: "Semana 11", title: "Enfoque Dupont" },
  { id: "aef-semana-12", label: "Semana 12", title: "EBITDA e interpretación" }
];

const financeTopics = financeWeeks.map((week) => {
  const guide = financeWeekGuides[week.id];
  return {
    id: `${week.id}-estructura`,
    week: week.id,
    title: week.id === "aef-semana-01" ? "Semana 1: Marco Conceptual de la Información Financiera y NIC 1" : (guide?.title || week.title),
    question: guide?.subtitle || "Contenido pendiente por desarrollar.",
    intro: week.id === "aef-semana-01" ? "Esta semana refuerza la comprensión del Marco Conceptual, la hipótesis de negocio en marcha, las características cualitativas de la información financiera y la presentación de estados financieros según NIC 1." : (guide?.intro || ""),
    formulas: [],
    explanation: [],
    example: "",
    graph: ""
  };
});

const emptyLevelBank = () => ({ facil: [], medio: [], dificil: [] });
const financeTheoryData = Object.fromEntries(financeWeeks.map((week) => [week.id, emptyLevelBank()]));
const financePracticeBanks = Object.fromEntries(financeWeeks.map((week) => [week.id, emptyLevelBank()]));

financeTheoryData["aef-semana-01"] = {
  facil: [
    choiceRow("¿Cuál es el objetivo principal de los estados financieros con propósito general?", "Suministrar información útil sobre situación financiera, rendimiento y flujos de efectivo para la toma de decisiones económicas", ["Calcular únicamente los impuestos por pagar", "Mostrar solo el efectivo disponible al cierre", "Reemplazar las políticas contables de la entidad"], "Correcta: el PDF indica que los estados financieros suministran información sobre situación financiera, rendimiento y flujos de efectivo útil para decisiones económicas. Las otras opciones son incompletas: impuestos, efectivo o políticas contables no agotan el objetivo de los estados financieros."),
    choiceRow("Según el PDF, ¿cómo se definen los estados financieros?", "Representaciones estructuradas de la situación financiera y del rendimiento de una entidad en periodos determinados", ["Listas internas de comprobantes de pago", "Reportes tributarios preparados solo para la autoridad fiscal", "Documentos informales sin base normativa"], "Correcta: el PDF los define como representaciones estructuradas de la situación financiera y rendimiento. Las demás alternativas reducen los estados financieros a documentos internos, tributarios o informales, lo cual no coincide con su propósito general."),
    choiceRow("¿Qué hipótesis fundamental se usa al preparar estados financieros?", "Negocio en marcha", ["Valor de liquidación permanente", "Costo hundido", "Inflación constante"], "Correcta: la hipótesis fundamental presentada es negocio en marcha. Valor de liquidación se usa cuando la empresa está en liquidación; costo hundido e inflación constante no son la hipótesis fundamental del Marco Conceptual mostrada."),
    choiceRow("¿Qué significa la hipótesis de negocio en marcha?", "Que la gerencia evalúa la capacidad de la entidad para continuar sus actividades sin intención o necesidad de liquidar", ["Que la empresa cerrará operaciones en el corto plazo", "Que todos los activos se miden siempre a valores de liquidación", "Que solo se presentan ingresos en efectivo"], "Correcta: negocio en marcha supone continuidad de la entidad. Las opciones incorrectas describen liquidación, medición obligatoria a valores de liquidación o una base de efectivo que no corresponde al concepto."),
    choiceRow("¿Cuáles son características cualitativas fundamentales de la información financiera?", "Relevancia y representación fiel", ["Comparabilidad y oportunidad", "Verificabilidad y comprensibilidad", "Rentabilidad y liquidez"], "Correcta: el PDF separa como fundamentales la relevancia/materialidad y la representación fiel. Comparabilidad, verificabilidad, oportunidad y comprensibilidad son de mejora; rentabilidad y liquidez son indicadores, no características cualitativas fundamentales."),
    choiceRow("¿Qué implica que la información financiera sea relevante?", "Que sea capaz de influir en las decisiones de los usuarios", ["Que siempre sea extensa", "Que solo incluya datos históricos sin efecto en decisiones", "Que no requiera juicio profesional"], "Correcta: relevancia significa capacidad de influir en decisiones. Extensión, datos históricos aislados o ausencia de juicio profesional no definen relevancia según el PDF."),
    choiceRow("¿Qué significa importancia relativa o materialidad?", "Que una omisión o error puede influir en las decisiones económicas de los usuarios", ["Que toda cifra pequeña debe ignorarse siempre", "Que solo importan los activos fijos", "Que la información debe publicarse tarde"], "Correcta: materialidad existe cuando omitir o presentar erróneamente información puede influir en decisiones. Las demás opciones son falsas: no toda cifra pequeña se ignora, no se limita a activos fijos y no tiene relación con publicar tarde."),
    choiceRow("¿Qué exige la representación fiel?", "Que la información sea completa, neutral y libre de error", ["Que sea favorable a la administración", "Que omita datos complejos", "Que solo muestre resultados positivos"], "Correcta: representación fiel requiere completitud, neutralidad y ausencia de error. Las otras opciones rompen la neutralidad, eliminan información relevante o sesgan la presentación."),
    choiceRow("Según NIC 1, ¿qué estado informa la situación financiera en un momento determinado?", "Estado de situación financiera", ["Estado de flujos de efectivo", "Estado de cambios en el patrimonio", "Estado de resultados integrales"], "Correcta: el estado de situación financiera muestra la situación de la empresa en un momento determinado. Flujos de efectivo evalúa efectivo; cambios en patrimonio muestra variaciones patrimoniales; resultados integrales mide rendimiento del periodo."),
    choiceRow("¿Para qué sirven las notas a los estados financieros?", "Para revelar información adicional requerida por NIIF y ayudar a comprender los estados financieros", ["Para sustituir todos los estados principales", "Para ocultar cambios contables materiales", "Para presentar solo publicidad corporativa"], "Correcta: las notas complementan y explican información requerida por NIIF, como políticas contables o gestión de riesgos. No sustituyen estados principales, no deben ocultar información material y no son publicidad.")
  ],
  medio: [
    choiceRow("¿Cuál es la mejor diferencia entre características fundamentales y de mejora?", "Las fundamentales hacen útil la información; las de mejora aumentan su utilidad si la información ya es relevante y fiel", ["Las de mejora reemplazan a relevancia y representación fiel", "Las fundamentales solo se aplican al efectivo", "Las de mejora solo se usan para informes tributarios"], "Correcta: el PDF distingue fundamentales y de mejora. Las de mejora no sustituyen relevancia y representación fiel; tampoco se limitan al efectivo ni a fines tributarios."),
    choiceRow("¿Qué característica se relaciona con aplicar políticas contables uniformes y usar una misma moneda?", "Comparabilidad", ["Materialidad", "Negocio en marcha", "Costo de ventas"], "Correcta: el PDF vincula comparabilidad con aplicación uniforme de políticas contables y uso de una misma moneda. Materialidad evalúa influencia en decisiones; negocio en marcha trata continuidad; costo de ventas es una partida de resultados."),
    choiceRow("¿Qué característica exige emitir información a tiempo antes de que pierda capacidad de influir en decisiones?", "Oportunidad", ["Representación fiel", "Patrimonio", "Otros ingresos operativos"], "Correcta: oportunidad significa entregar información a tiempo. Representación fiel trata completitud y neutralidad; patrimonio e ingresos operativos son elementos o partidas contables, no características de mejora."),
    choiceRow("¿Qué usuarios presupone la comprensibilidad de los estados financieros?", "Usuarios con conocimiento razonable de actividades económicas y del mundo de los negocios", ["Usuarios sin ninguna base económica", "Solo auditores externos", "Solo la gerencia"], "Correcta: el PDF indica que la información debe ser comprensible para usuarios con conocimiento razonable. No se limita a auditores o gerencia, ni presupone ausencia total de conocimientos."),
    choiceRow("¿Qué conforma un juego completo de estados financieros según la NIC 1 presentada?", "Estado de situación financiera, resultados integrales, cambios en patrimonio, flujos de efectivo y notas", ["Solo balance general y declaración de impuestos", "Solo estado de resultados y libro diario", "Solo flujo de efectivo y presupuesto"], "Correcta: el PDF lista situación financiera, resultados integrales, cambios en patrimonio, flujos de efectivo y notas. Las demás alternativas omiten estados requeridos o incorporan documentos que no forman el juego completo mostrado."),
    choiceRow("¿Cuál es la diferencia entre activos corrientes y no corrientes?", "Los corrientes se esperan realizar, vender o consumir en el ciclo normal o dentro de 12 meses; los no corrientes son de permanencia prolongada", ["Los corrientes son siempre intangibles y los no corrientes siempre efectivo", "Los corrientes son obligaciones y los no corrientes aportes de socios", "No existe diferencia según NIC 1"], "Correcta: el PDF clasifica activos corrientes por realización, venta o consumo en ciclo normal o 12 meses, y no corrientes por permanencia prolongada. Las demás opciones confunden activos con pasivos, patrimonio o niegan la clasificación."),
    choiceRow("¿Cuál es la diferencia entre pasivos corrientes y no corrientes?", "Los corrientes se cumplen en un periodo que no excede 12 meses; los no corrientes vencen en plazos mayores a un año", ["Los corrientes son aportes de accionistas y los no corrientes ventas", "Los corrientes nunca requieren salida de recursos", "Los no corrientes siempre son ingresos financieros"], "Correcta: la clasificación depende del plazo de cumplimiento. Las alternativas incorrectas confunden pasivos con patrimonio, niegan la salida de recursos o mezclan pasivos con ingresos."),
    choiceRow("¿Qué muestra el estado de resultados integrales?", "La situación económica, rentabilidad y rendimiento de la empresa en un periodo", ["Solo la composición del patrimonio al cierre", "Solo obligaciones por pagar en 12 meses", "Solo las políticas contables usadas"], "Correcta: el PDF lo presenta como herramienta para medir rentabilidad y rendimiento, con ingresos y gastos. Las demás opciones corresponden a patrimonio, pasivos o notas."),
    choiceRow("¿Qué muestra el estado de cambios en el patrimonio?", "Variaciones patrimoniales, movimientos de capital, distribuciones y resultados acumulados del periodo", ["Solo entradas y salidas de efectivo", "Solo ventas brutas del negocio", "Solo activos corrientes"], "Correcta: el PDF señala variaciones en partidas patrimoniales, movimientos de propietarios y utilidades o pérdidas acumuladas. Las demás opciones describen flujo de efectivo, ingresos o activos."),
    choiceRow("¿Qué actividades comprende el estado de flujos de efectivo?", "Operación, inversión y financiamiento", ["Ventas, administración y marketing", "Capital, reservas y resultados acumulados", "Relevancia, verificabilidad y oportunidad"], "Correcta: el PDF enumera operación, inversión y financiamiento. Las demás alternativas mezclan gastos, patrimonio o características cualitativas, no actividades del flujo de efectivo.")
  ],
  dificil: [
    choiceRow("Una entidad cambia la vida útil de un activo fijo y el impacto es material para los estados financieros. Según el caso del PDF, ¿qué problema genera no revelarlo?", "Afecta la representación fiel y la utilidad de la información porque omite un cambio material", ["No genera problema si la gerencia lo decidió", "Solo afecta el estado de flujos de efectivo", "Es correcto porque las notas nunca revelan cambios"], "Correcta: si el impacto es material, omitirlo puede influir en decisiones y debilita la representación fiel. Las incorrectas ignoran materialidad, reducen el efecto a un solo estado o niegan la función de las notas."),
    choiceRow("Si una empresa está en proceso de liquidación, ¿qué base de preparación menciona el PDF?", "Valores de liquidación", ["Negocio en marcha sin cambios", "Valor simbólico de un sol", "Solo costo histórico tributario"], "Correcta: el PDF indica que, si la empresa está en liquidación, la información contable se prepara sobre valores de liquidación. Mantener negocio en marcha sin cambios sería inconsistente; las demás bases no aparecen como regla del caso."),
    choiceRow("¿Por qué el Marco Conceptual ayuda cuando no hay una Norma específica aplicable a una transacción?", "Porque orienta a preparadores a desarrollar políticas contables congruentes", ["Porque permite no presentar estados financieros", "Porque reemplaza siempre a todas las NIIF", "Porque elimina la necesidad de interpretación"], "Correcta: el PDF señala que ayuda a preparadores a desarrollar políticas congruentes cuando no aplica una Norma concreta. No elimina estados financieros, no reemplaza siempre las NIIF y no suprime la interpretación."),
    choiceRow("Una información es neutral, completa y libre de error, pero llega tarde y ya no influye en decisiones. ¿Qué característica se ve afectada principalmente?", "Oportunidad", ["Capital emitido", "Costo de ventas", "Pasivo no corriente"], "Correcta: aunque sea fiel, si llega tarde pierde oportunidad. Las demás opciones son elementos o partidas contables, no características cualitativas aplicables al problema."),
    choiceRow("¿Cuál clasificación es más coherente para una máquina usada por varios años en operaciones?", "Activo no corriente", ["Activo corriente por consumirse en 12 meses", "Pasivo corriente", "Ingreso financiero"], "Correcta: el PDF describe activos no corrientes como bienes de permanencia prolongada, por ejemplo activos fijos. Las otras alternativas confunden naturaleza y plazo o clasifican la máquina como obligación o ingreso."),
    choiceRow("¿Cuál clasificación corresponde mejor a una obligación que deberá cumplirse en 8 meses?", "Pasivo corriente", ["Pasivo no corriente", "Patrimonio", "Otros ingresos operativos"], "Correcta: los pasivos corrientes se cumplen en un plazo que no excede 12 meses. Las demás opciones corresponden a plazos mayores, aportes/resultados patrimoniales o ingresos no habituales."),
    choiceRow("Una venta habitual de bienes del negocio, neta de descuentos y rebajas, se clasifica como:", "Ingreso de actividades ordinarias", ["Otros ingresos operativos", "Ingreso financiero", "Resultados acumulados"], "Correcta: el PDF define ingresos de actividades ordinarias como ingresos brutos por ventas de bienes y servicios deducidos descuentos, rebajas y bonificaciones. Otros ingresos son eventuales; financieros provienen de intereses; resultados acumulados pertenecen al patrimonio."),
    choiceRow("La pérdida por un fenómeno natural ocurrida de forma eventual se clasifica, según el PDF, como:", "Otros gastos operativos", ["Costo de ventas", "Gasto administrativo", "Capital emitido"], "Correcta: el PDF incluye pérdidas por fenómenos naturales entre otros gastos operativos eventuales. Costo de ventas se vincula a bienes vendidos; gastos administrativos a gestión principal; capital emitido es patrimonio."),
    choiceRow("¿Por qué las notas son clave ante políticas contables y gestión de riesgos?", "Porque revelan bases de preparación, políticas contables y objetivos o políticas de gestión de riesgos", ["Porque eliminan la necesidad del estado de situación financiera", "Porque solo registran ventas diarias", "Porque sustituyen la representación fiel"], "Correcta: el PDF menciona bases de preparación, políticas contables y gestión de riesgos como información de notas. Las demás alternativas exageran o distorsionan su función."),
    choiceRow("Una entidad omite un cambio de vida útil con impacto material. ¿Qué característica fundamental se compromete junto con la relevancia/materialidad?", "Representación fiel", ["Comparabilidad únicamente", "Comprensibilidad únicamente", "Capital emitido"], "Correcta: la omisión de información material impide representar fielmente el fenómeno económico. Comparabilidad y comprensibilidad pueden verse afectadas, pero la característica fundamental comprometida por la omisión es representación fiel; capital emitido no es característica cualitativa.")
  ]
};

financeTheoryData["aef-semana-02"] = {
  facil: [
    choiceRow("¿Qué elemento representa recursos controlados por la empresa?", "Activo", ["Pasivo", "Patrimonio", "Gasto"], "Los activos son bienes, recursos o derechos controlados de los que se esperan beneficios económicos."),
    choiceRow("¿Qué elemento representa obligaciones con terceros?", "Pasivo", ["Ingreso", "Activo", "Reserva"], "Los pasivos son deudas u obligaciones que requerirán salida de recursos."),
    choiceRow("¿Dónde se presentan ingresos y gastos?", "Estado de Resultados Integrales", ["Estado de Situación Financiera", "Notas únicamente", "Estado de cambios en el patrimonio"], "Ingresos y gastos explican el desempeño del periodo."),
    choiceRow("El patrimonio representa principalmente:", "Financiamiento de los propietarios y resultados acumulados", ["Solo ventas", "Solo efectivo", "Solo deudas bancarias"], "Capital, reservas y resultados acumulados son partidas patrimoniales."),
    choiceRow("Una cuenta por cobrar comercial normalmente es:", "Activo", ["Pasivo", "Gasto", "Patrimonio"], "Es un derecho de cobro controlado por la empresa.")
  ],
  medio: [
    choiceRow("¿Por qué activo y pasivo pertenecen al Estado de Situación Financiera?", "Porque describen posición financiera a una fecha", ["Porque miden solo utilidad", "Porque se cancelan cada periodo", "Porque no tienen saldo"], "El ESF muestra recursos y obligaciones en una fecha determinada."),
    choiceRow("Una venta de bienes del giro del negocio se clasifica como:", "Ingreso de actividad principal", ["Pasivo corriente", "Activo no corriente", "Reserva legal"], "Las ventas del giro generan ingresos ordinarios."),
    choiceRow("El costo de ventas se asocia con:", "Recursos consumidos para generar ingresos", ["Aportes de accionistas", "Cobros de clientes", "Préstamos recibidos"], "Los gastos consumen recursos para producir ingresos."),
    choiceRow("¿Qué error afecta más la lectura de estados financieros?", "Clasificar una cuenta en el elemento equivocado", ["Usar títulos claros", "Separar corriente y no corriente", "Mostrar notas"], "Una mala clasificación distorsiona el estado financiero."),
    choiceRow("Un préstamo bancario recibido normalmente se registra como:", "Pasivo", ["Ingreso por ventas", "Gasto administrativo", "Activo intangible"], "Genera obligación de pago a un tercero.")
  ],
  dificil: [
    choiceRow("Si se registra un préstamo recibido como ingreso, el principal problema es que:", "Se sobrestima el desempeño y se oculta una obligación", ["Se reduce el activo sin razón", "Aumenta el gasto financiero automáticamente", "No cambia nada"], "Un préstamo financia, no representa ingreso por desempeño."),
    choiceRow("Una cuenta puede afectar indirectamente otro estado porque:", "Los estados financieros están conectados entre sí", ["Cada estado es independiente siempre", "Las cuentas no tienen saldos", "Las notas reemplazan a los estados"], "El resultado afecta patrimonio y las cuentas alimentan estados distintos."),
    choiceRow("La clasificación corriente/no corriente sirve para evaluar:", "Horizonte de realización o pago", ["Solo rentabilidad", "Solo dividendos", "Solo impuestos"], "Permite distinguir corto y largo plazo."),
    choiceRow("Si una empresa compra maquinaria al contado, aumenta:", "Activo no corriente y disminuye efectivo", ["Ingreso y patrimonio", "Pasivo corriente y gasto", "Solo utilidad neta"], "Cambia la composición del activo, no necesariamente el resultado."),
    choiceRow("La diferencia entre gasto y activo depende de si:", "El recurso se consume ahora o generará beneficios futuros", ["La cuenta tiene nombre largo", "Siempre se paga en efectivo", "Pertenece al patrimonio"], "Un activo conserva beneficio futuro; un gasto se consume en el periodo.")
  ]
};

financeTheoryData["aef-semana-03"] = {
  facil: [
    choiceRow("¿Qué estado muestra utilidad o pérdida del periodo?", "Estado de Resultados Integrales", ["Estado de Situación Financiera", "Estado de flujos únicamente", "Notas"], "El ERI compara ingresos y gastos del periodo."),
    choiceRow("Las ventas brutas menos descuentos y rebajas dan:", "Ventas netas", ["Costo de ventas", "Pasivo corriente", "Capital social"], "Las deducciones comerciales reducen ventas brutas."),
    choiceRow("Costo de ventas corresponde a:", "Costo de bienes vendidos o servicios prestados", ["Intereses recibidos", "Aportes de accionistas", "Efectivo disponible"], "Es el costo asociado a lo vendido."),
    choiceRow("Si ingresos superan gastos, hay:", "Ganancia", ["Pérdida", "Pasivo", "Reserva obligatoria siempre"], "Resultado positivo implica ganancia."),
    choiceRow("Los gastos financieros incluyen:", "Intereses por préstamos", ["Ventas del giro", "Inventarios", "Capital emitido"], "Se relacionan con financiamiento y deuda.")
  ],
  medio: [
    choiceRow("La ganancia bruta se obtiene con:", "Ventas netas menos costo de ventas", ["Activo menos pasivo", "Ventas menos patrimonio", "EBIT menos efectivo"], "Mide margen antes de gastos operativos."),
    choiceRow("Gastos de administración se relacionan con:", "Gestión interna de la empresa", ["Producción directa de bienes", "Aportes de socios", "Cobro de préstamos"], "Son gastos de gestión administrativa."),
    choiceRow("Gastos de ventas se vinculan con:", "Comercialización y distribución", ["Solo deuda bancaria", "Compra de maquinaria", "Reservas de capital"], "Son gastos para vender y distribuir."),
    choiceRow("¿Por qué el ERI se salda al cierre?", "Porque mide desempeño de un periodo", ["Porque no tiene importancia", "Porque siempre es cero", "Porque reemplaza al ESF"], "Las cuentas de resultado se cierran para iniciar otro periodo."),
    choiceRow("El resultado neto se conecta con:", "Resultados acumulados del patrimonio", ["Solo efectivo", "Solo cuentas por pagar", "Solo notas"], "La utilidad o pérdida impacta el patrimonio.")
  ],
  dificil: [
    choiceRow("Si ventas suben pero la utilidad neta cae, una explicación posible es:", "Aumento proporcional mayor de costos o gastos", ["Siempre mejora rentabilidad", "No hay gastos", "El ESF desaparece"], "El resultado depende de márgenes y gastos, no solo ventas."),
    choiceRow("Clasificar intereses de deuda como gasto de ventas distorsiona:", "La lectura de operación y financiamiento", ["El nombre de la empresa", "La moneda usada", "La fecha únicamente"], "Los intereses son financieros, no de comercialización."),
    choiceRow("Una ganancia operativa positiva con utilidad neta negativa puede indicar:", "Carga financiera o impuestos altos", ["Ventas inexistentes", "Activo corriente negativo siempre", "Que no hay costos"], "Después de la operación vienen partidas financieras e impuestos."),
    choiceRow("El análisis por función agrupa gastos según:", "Área o propósito dentro de la empresa", ["Fecha de pago únicamente", "Color del comprobante", "Número de factura"], "Administración, ventas y costo de ventas son funciones."),
    choiceRow("Una correcta presentación del ERI importa porque:", "Permite evaluar rentabilidad y rendimiento con información fiel", ["Oculta gastos", "Evita revelar ingresos", "Sustituye todas las notas"], "La estructura facilita interpretación y comparabilidad.")
  ]
};

financeTheoryData["aef-semana-04"] = {
  facil: [
    choiceRow("El Estado de Situación Financiera muestra:", "Situación financiera en una fecha", ["Solo ventas del año", "Solo flujos de efectivo", "Solo notas"], "Es una fotografía financiera a una fecha determinada."),
    choiceRow("La ecuación contable básica es:", "Activo = Pasivo + Patrimonio", ["Ingreso = Activo + Gasto", "Pasivo = Ventas - Costos", "Patrimonio = Gasto"], "Los recursos se financian con terceros o propietarios."),
    choiceRow("Activos corrientes se esperan realizar en:", "Ciclo normal o dentro de 12 meses", ["Más de diez años siempre", "Nunca", "Solo al liquidar"], "Ese criterio separa corto plazo."),
    choiceRow("Pasivos no corrientes vencen:", "En periodos mayores a un año", ["Dentro de una semana siempre", "Nunca se pagan", "Solo con ventas"], "Son obligaciones de largo plazo."),
    choiceRow("El encabezado del ESF debe incluir:", "Nombre del negocio, estado, fecha y moneda", ["Solo logo", "Solo utilidad", "Solo firma"], "El encabezado contextualiza el estado financiero.")
  ],
  medio: [
    choiceRow("Activo se relaciona con decisiones de:", "Inversión", ["Solo reparto de dividendos", "Solo ventas", "Solo publicidad"], "Los activos muestran en qué invierte la empresa."),
    choiceRow("Pasivo y patrimonio se relacionan con decisiones de:", "Financiamiento", ["Producción física", "Precio de venta únicamente", "Costo de ventas"], "Indican cómo se financian los activos."),
    choiceRow("Si el total de activos no iguala el pasivo más el patrimonio:", "El estado no cuadra", ["Siempre está bien", "Significa mayor rentabilidad", "No importa"], "La ecuación contable debe cumplirse."),
    choiceRow("Propiedad, planta y equipo normalmente es:", "Activo no corriente", ["Pasivo corriente", "Gasto financiero", "Ingreso ordinario"], "Son activos de permanencia prolongada."),
    choiceRow("Cuentas por pagar comerciales normalmente son:", "Pasivo corriente", ["Activo intangible", "Ingreso financiero", "Capital social"], "Son obligaciones de corto plazo con proveedores.")
  ],
  dificil: [
    choiceRow("Un aumento fuerte de cuentas por cobrar puede indicar:", "Más ventas a crédito o problemas de cobranza", ["Siempre mejor liquidez", "Menos ventas necesariamente", "No tiene interpretación"], "Debe analizarse con contexto comercial y cobranza."),
    choiceRow("Un ESF permite evaluar liquidez porque:", "Muestra activos y pasivos corrientes", ["Muestra solo ingresos", "No tiene pasivos", "Solo muestra utilidad"], "La comparación corriente ayuda a evaluar corto plazo."),
    choiceRow("Financiar activos de largo plazo con pasivos de muy corto plazo puede generar:", "Riesgo de liquidez", ["Menor riesgo siempre", "Mayor efectivo automático", "Desaparición del pasivo"], "Hay descalce entre vencimientos y recuperación."),
    choiceRow("Patrimonio no es deuda con terceros porque:", "Representa participación residual de propietarios", ["No tiene relación con la empresa", "Siempre se paga en 12 meses", "Es ingreso por ventas"], "Los propietarios tienen derecho residual."),
    choiceRow("La fecha del ESF es importante porque:", "La posición financiera cambia con el tiempo", ["Solo decora el documento", "No afecta interpretación", "Es igual al periodo de ventas"], "El ESF es a una fecha, no un flujo anual.")
  ]
};

financeTheoryData["aef-semana-05"] = {
  facil: [
    choiceRow("El Estado de Flujo de Efectivo clasifica flujos en:", "Operación, inversión y financiamiento", ["Activo, pasivo y patrimonio", "Ventas, costos e impuestos", "Corriente y no corriente solamente"], "Esas son las tres actividades del EFE."),
    choiceRow("Efectivo incluye:", "Efectivo y depósitos bancarios a la vista", ["Solo inventarios", "Solo maquinaria", "Solo patrimonio"], "Es dinero disponible de forma inmediata."),
    choiceRow("Equivalentes al efectivo son:", "Inversiones de corto plazo de gran liquidez", ["Activos fijos", "Pasivos no corrientes", "Gastos administrativos"], "Deben convertirse rápidamente en efectivo."),
    choiceRow("Cobros por ventas pertenecen a:", "Operación", ["Inversión", "Financiamiento", "Patrimonio"], "Provienen del giro del negocio."),
    choiceRow("Compra de maquinaria suele ser actividad de:", "Inversión", ["Operación", "Financiamiento", "Ingreso ordinario"], "Implica adquisición de activo de largo plazo.")
  ],
  medio: [
    choiceRow("Pago de dividendos normalmente es actividad de:", "Financiamiento", ["Operación", "Inversión", "Costo de ventas"], "Afecta capital propio y relación con propietarios."),
    choiceRow("Pago a proveedores de mercaderías pertenece a:", "Operación", ["Inversión", "Financiamiento", "Patrimonio"], "Es pago ordinario del giro."),
    choiceRow("Obtención de préstamo bancario pertenece a:", "Financiamiento", ["Operación", "Inversión", "Gasto de ventas"], "Cambia obligaciones financieras."),
    choiceRow("Venta de activo fijo pertenece a:", "Inversión", ["Operación", "Financiamiento", "Costo de ventas"], "Es disposición de activo de largo plazo."),
    choiceRow("¿Por qué el EFE es útil aunque exista utilidad neta?", "Porque muestra capacidad real de generar efectivo", ["Porque reemplaza todos los estados", "Porque ignora deudas", "Porque solo muestra ventas"], "La utilidad no siempre implica caja disponible.")
  ],
  dificil: [
    choiceRow("Una empresa rentable puede tener problemas si:", "No convierte ventas en efectivo a tiempo", ["Tiene ingresos contables", "Presenta notas", "Clasifica activos"], "La liquidez depende de cobros y pagos efectivos."),
    choiceRow("Un flujo operativo negativo persistente puede indicar:", "Problemas en el giro o capital de trabajo", ["Mayor solvencia siempre", "Ausencia de deuda", "Mejor rentabilidad automática"], "La operación debería sostener el efectivo del negocio."),
    choiceRow("Comprar activos fijos puede reducir caja hoy pero:", "Apoyar capacidad productiva futura", ["Siempre ser gasto financiero", "No afectar inversión", "Ser ingreso ordinario"], "Es una salida de inversión con beneficio esperado."),
    choiceRow("Una reclasificación incorrecta entre operación e inversión afecta:", "La lectura de la fuente real de caja", ["Solo el color del reporte", "La ecuación contable básica", "El nombre legal"], "El usuario necesita saber de dónde viene el efectivo."),
    choiceRow("El EFE ayuda a responder:", "Si la empresa puede cubrir obligaciones con efectivo", ["Solo cuánto vendió", "Solo qué activos posee", "Solo cuál es el capital social"], "El efectivo es clave para pagos y continuidad.")
  ]
};

financeTheoryData["aef-semana-06"] = {
  facil: [
    choiceRow("El análisis vertical mide:", "Peso de cada cuenta respecto de una base", ["Solo cambio entre años", "Solo utilidad neta", "Solo deuda bancaria"], "Convierte cuentas en porcentajes de estructura."),
    choiceRow("En el ERI, la base frecuente del análisis vertical es:", "Ventas", ["Pasivo corriente", "Capital social", "Inventarios"], "Las partidas se expresan como porcentaje de ventas."),
    choiceRow("El análisis horizontal mide:", "Variación entre periodos", ["Composición interna de un solo periodo", "Solo notas", "Solo efectivo"], "Compara valores de distintos años."),
    choiceRow("La variación absoluta es:", "Valor actual menos valor anterior", ["Valor actual dividido entre ventas", "Activo más pasivo", "Utilidad por patrimonio"], "Mide cambio en unidades monetarias."),
    choiceRow("El análisis financiero convierte datos en:", "Información útil", ["Publicidad", "Comprobantes", "Inventarios físicos"], "Busca medidas y relaciones para decidir.")
  ],
  medio: [
    choiceRow("Si efectivo es 1,500 y activo total 30,000, su análisis vertical es:", "5%", ["20%", "2%", "50%"], "\\(1,500/30,000=0.05=5\\%\\)."),
    choiceRow("Si ventas pasan de 100,000 a 120,000, la variación absoluta es:", "20,000", ["120%", "80,000", "10,000"], "\\(120,000-100,000=20,000\\)."),
    choiceRow("Si ventas pasan de 100,000 a 120,000, la variación porcentual es:", "20%", ["120%", "80%", "2%"], "\\((120,000-100,000)/100,000=20\\%\\)."),
    choiceRow("Una cuenta por cobrar que sube fuerte puede sugerir:", "Mayor crédito, más ventas o cobranza débil", ["Siempre menor riesgo", "Cero ventas", "No requiere análisis"], "El cambio necesita interpretación cualitativa."),
    choiceRow("El análisis vertical del ESF suele usar como base:", "Total activo", ["Gasto financiero", "Ventas netas siempre", "Resultado neto"], "Permite ver estructura de activos y financiamiento."),
    choiceRow("Si los gastos administrativos bajan como porcentaje de ventas, una interpretación razonable es:", "La empresa podría estar ganando eficiencia administrativa relativa", ["La deuda necesariamente desapareció", "Las ventas son siempre menores", "El activo fijo se vendió"], "El análisis vertical compara el peso relativo de cada partida."),
    choiceRow("Si cuentas por cobrar suben más rápido que ventas, conviene revisar:", "Política de crédito y cobranza", ["Solo capital social", "Solo depreciación acumulada", "Solo el logo del estado financiero"], "Puede indicar más ventas a crédito o recuperación lenta.")
  ],
  dificil: [
    choiceRow("Si el margen bruto baja de 43% a 35%, puede indicar:", "Mayor peso del costo de ventas", ["Menor costo relativo", "Más patrimonio", "Menor activo total"], "El costo de ventas absorbió más ventas."),
    choiceRow("Una variación porcentual muy alta en una cuenta pequeña debe interpretarse:", "Con cuidado, mirando también el monto absoluto", ["Como siempre decisiva", "Como error seguro", "Sin comparar"], "Porcentajes grandes pueden venir de bases pequeñas."),
    choiceRow("El análisis horizontal y vertical juntos permiten:", "Ver estructura y tendencia", ["Eliminar notas", "Sustituir auditoría", "Garantizar rentabilidad"], "Son herramientas complementarias."),
    choiceRow("Un aumento de inventarios puede representar:", "Expectativa de ventas, cobertura de precios o mala gestión", ["Siempre éxito", "Siempre fraude", "Solo pago de deuda"], "El contexto define interpretación."),
    choiceRow("Una limitación del análisis financiero es:", "Depende de calidad y contexto de la información", ["No usa estados financieros", "No permite comparar", "No sirve para decisiones"], "Las herramientas no reemplazan el juicio."),
    choiceRow("Si ventas crecen 20% pero utilidad neta cae 10%, la lectura más útil es:", "El crecimiento no se tradujo en rentabilidad y hay que revisar costos, gastos o financiamiento", ["La empresa necesariamente mejoró", "No se puede analizar nada", "El Estado de Situación Financiera no sirve"], "El análisis horizontal debe conectar crecimiento con márgenes y gastos."),
    choiceRow("Si el efectivo aumenta como porcentaje del activo total, pero los pasivos corrientes también suben fuerte, debes:", "Cruzar estructura con liquidez y vencimientos", ["Concluir que no hay riesgo", "Ignorar pasivos", "Solo mirar ventas"], "Un porcentaje aislado no basta; hay que interpretar relaciones.")
  ]
};

financeTheoryData["aef-semana-07"] = {
  facil: [
    choiceRow("Un ratio financiero es:", "Un cociente que relaciona cuentas", ["Una nota legal", "Un asiento contable", "Un inventario físico"], "Ratio significa razón o proporción."),
    choiceRow("La liquidez mide:", "Capacidad de cumplir obligaciones de corto plazo", ["Solo rentabilidad", "Solo ventas", "Solo patrimonio"], "Se enfoca en compromisos inmediatos."),
    choiceRow("Liquidez general se calcula como:", "Activo corriente / Pasivo corriente", ["Pasivo total / Activo total", "EBIT / Intereses", "Ventas / Inventario"], "Es el ratio corriente."),
    choiceRow("Prueba ácida excluye principalmente:", "Inventarios", ["Efectivo", "Pasivos", "Patrimonio"], "Busca activos más líquidos."),
    choiceRow("Solvencia mide:", "Grado de endeudamiento y capacidad de pago de deuda", ["Solo ventas diarias", "Solo caja chica", "Solo descuentos"], "Evalúa estructura financiera y deuda."),
    choiceRow("La prueba defensiva usa principalmente:", "Efectivo, equivalentes y valores negociables", ["Inventarios y activo fijo", "Capital social y ventas", "Costo de ventas e impuestos"], "Mide liquidez de emergencia con partidas de disponibilidad inmediata."),
    choiceRow("El capital de trabajo neto mide:", "Activo corriente menos pasivo corriente", ["Pasivo total entre activo total", "Ventas menos costo", "EBIT entre intereses"], "Muestra el exceso de recursos corrientes luego de cubrir pasivos corrientes.")
  ],
  medio: [
    choiceRow("Una limitación de los ratios es que:", "Usan información histórica", ["Siempre predicen el futuro perfecto", "No usan cuentas", "Eliminan el juicio"], "Deben interpretarse con contexto."),
    choiceRow("Si activo corriente es 200 y pasivo corriente 100, liquidez general es:", "2.0", ["0.5", "100", "300"], "\\(200/100=2\\)."),
    choiceRow("Si activo corriente es 200, inventarios 50 y pasivo corriente 100, prueba ácida es:", "1.5", ["2.5", "0.5", "150"], "\\((200-50)/100=1.5\\)."),
    choiceRow("Capital de trabajo neto se calcula como:", "Activo corriente - Pasivo corriente", ["Pasivo total / Patrimonio", "Ventas - costo", "EBIT / gastos financieros"], "Mide exceso monetario corriente."),
    choiceRow("Cobertura de intereses relaciona:", "EBIT y gastos financieros", ["Inventarios y ventas", "Activo y patrimonio", "Efectivo y notas"], "Indica cuántas veces EBIT cubre intereses."),
    choiceRow("Grado de propiedad se calcula como:", "Patrimonio total / Activo total", ["Pasivo total / Patrimonio", "Activo corriente / Pasivo corriente", "EBIT / Gastos financieros"], "Mide qué parte de los activos está financiada por propietarios."),
    choiceRow("Costo de la deuda se calcula como:", "Gastos financieros / Pasivos con costo financiero", ["Ventas / Activo total", "Patrimonio / Pasivo corriente", "Inventarios / Ventas"], "Mide el costo del financiamiento con deuda."),
    choiceRow("Si la liquidez general es alta pero la prueba defensiva es baja, se interpreta que:", "La empresa depende de cobrar o vender inventarios para pagar", ["Tiene caja abundante", "No tiene pasivos corrientes", "Su rentabilidad es perfecta"], "La prueba defensiva mira solo recursos de disponibilidad inmediata."),
    choiceRow("Si el capital de trabajo neto aumenta, pero por acumulación de inventarios lentos, la interpretación debe ser:", "Cautelosa, porque no todo activo corriente es igualmente líquido", ["Automáticamente positiva", "Siempre señal de insolvencia", "Irrelevante"], "La calidad del activo corriente importa.")
  ],
  dificil: [
    choiceRow("Una liquidez general mayor a 1 no garantiza liquidez real si:", "Los activos corrientes no son fácilmente realizables", ["No hay inventarios", "El pasivo es cero", "Hay notas"], "La calidad del activo corriente importa."),
    choiceRow("Un alto endeudamiento puede ser útil pero riesgoso porque:", "La deuda puede ser barata, pero aumenta compromisos fijos", ["Siempre elimina intereses", "Nunca exige pagos", "Aumenta efectivo infinito"], "La deuda apalanca pero puede presionar solvencia."),
    choiceRow("Si pasivo total es 600 y activo total 1,000, grado de endeudamiento es:", "60%", ["40%", "1.67", "600%"], "\\(600/1,000=60\\%\\)."),
    choiceRow("Si EBIT es 300 y gastos financieros 75, cobertura de intereses es:", "4 veces", ["0.25 veces", "225 veces", "375 veces"], "\\(300/75=4\\)."),
    choiceRow("Un ratio debe compararse con:", "Sector, historia de la empresa y estrategia", ["Solo el nombre de la cuenta", "Nada más", "Color del reporte"], "El número aislado puede engañar."),
    choiceRow("Una prueba defensiva baja aunque la liquidez general sea alta puede indicar:", "Dependencia de cuentas por cobrar o inventarios para pagar", ["Caja excesiva siempre", "Cero pasivos", "Solvencia perfecta"], "La prueba defensiva es más estricta porque mira liquidez inmediata."),
    choiceRow("Un grado de endeudamiento alto y cobertura de intereses baja sugieren:", "Mayor riesgo financiero", ["Menor riesgo financiero siempre", "Ausencia de deuda", "Liquidez perfecta"], "Mucha deuda y poca cobertura de intereses presionan la capacidad de pago."),
    choiceRow("Si el grado de propiedad cae y el endeudamiento patrimonial sube, la empresa probablemente:", "Está financiando más activos con deuda que con patrimonio", ["Está eliminando acreedores", "No tiene apalancamiento", "Aumentó solo caja sin deuda"], "Ambos ratios apuntan a mayor peso relativo de terceros."),
    choiceRow("Si la cobertura de intereses es baja aunque la liquidez sea aceptable, el riesgo principal está en:", "La capacidad de sostener el costo financiero con resultados operativos", ["El cobro de ventas al contado únicamente", "La clasificación de inventarios", "La moneda del reporte"], "Liquidez de corto plazo y cobertura de intereses miden riesgos distintos.")
  ]
};

financePracticeBanks["aef-semana-05"] = {
  facil: [
    choiceRow("Cobro a clientes por ventas se clasifica como:", "Operación", ["Inversión", "Financiamiento", "Patrimonio"], "Proviene de la actividad principal."),
    choiceRow("Compra de equipo de cómputo para uso de la empresa:", "Inversión", ["Operación", "Financiamiento", "Ingreso"], "Es adquisición de activo de largo plazo."),
    choiceRow("Préstamo bancario recibido:", "Financiamiento", ["Operación", "Inversión", "Gasto"], "Aumenta obligaciones financieras."),
    choiceRow("Pago de sueldos:", "Operación", ["Inversión", "Financiamiento", "Patrimonio"], "Es pago ordinario del negocio."),
    choiceRow("Pago de dividendos:", "Financiamiento", ["Operación", "Inversión", "Costo de ventas"], "Se relaciona con propietarios.")
  ],
  medio: [
    choiceRow("Si efectivo inicial es 50 y el aumento neto de efectivo es 30, efectivo final:", "80", ["20", "30", "50"], "\\(50+30=80\\)."),
    choiceRow("Operación +40, inversión -25, financiamiento +10. Flujo neto:", "25", ["75", "-25", "5"], "\\(40-25+10=25\\)."),
    choiceRow("Operación -10, inversión -30, financiamiento +50. Flujo neto:", "10", ["90", "-90", "-10"], "\\(-10-30+50=10\\)."),
    choiceRow("Venta de maquinaria por efectivo se clasifica como:", "Inversión", ["Operación", "Financiamiento", "Gasto financiero"], "Es disposición de activo de largo plazo."),
    choiceRow("Pago de impuesto a la renta normalmente:", "Operación", ["Inversión", "Financiamiento", "Patrimonio"], "Es salida ordinaria vinculada al desempeño.")
  ],
  dificil: [
    choiceRow("Si utilidad es positiva pero operación es negativa, una alerta posible es:", "La empresa no está convirtiendo resultados en caja", ["No existe problema posible", "Siempre mejora liquidez", "La deuda desaparece"], "El efectivo operativo negativo exige revisar cobros y pagos."),
    choiceRow("Un fuerte flujo positivo por financiamiento puede indicar:", "Entrada de deuda o capital", ["Ventas de clientes necesariamente", "Menor deuda siempre", "Compra de inventarios"], "Financiamiento recoge fondos de terceros o propietarios."),
    choiceRow("Flujo operativo +100, capex -160, deuda nueva +80. Efectivo neto:", "20", ["340", "-140", "80"], "\\(100-160+80=20\\)."),
    choiceRow("Si flujo de inversión es negativo por compra de activos, puede ser:", "Señal de crecimiento o reposición", ["Siempre mala señal", "Siempre ingreso operativo", "Error contable seguro"], "Depende de estrategia y capacidad futura."),
    choiceRow("Una reclasificación de deuda recibida como operación causaría:", "Lectura equivocada de generación de caja del giro", ["Mejor presentación automática", "Menor activo fijo", "Más ventas reales"], "Inflaría operación con financiamiento.")
  ]
};

financePracticeBanks["aef-semana-06"] = {
  facil: [
    choiceRow("Cuenta 20,000 y base 100,000. Análisis vertical:", "20%", ["5%", "80%", "120%"], "\\(20,000/100,000=20\\%\\)."),
    choiceRow("Cuenta 15,000 y base 60,000. Porcentaje:", "25%", ["15%", "40%", "4%"], "\\(15,000/60,000=25\\%\\)."),
    choiceRow("Valor actual 80 y anterior 50. Variación absoluta:", "30", ["130", "-30", "62.5"], "\\(80-50=30\\)."),
    choiceRow("Valor actual 120 y anterior 100. Variación porcentual:", "20%", ["120%", "80%", "2%"], "\\((120-100)/100=20\\%\\)."),
    choiceRow("Ventas 200, costo 120. Costo sobre ventas:", "60%", ["40%", "120%", "80%"], "\\(120/200=60\\%\\).")
  ],
  medio: [
    choiceRow("Activo total 500, inventarios 125. Peso de inventarios:", "25%", ["20%", "40%", "75%"], "\\(125/500=25\\%\\)."),
    choiceRow("Ventas 1,000, utilidad neta 120. Margen neto vertical:", "12%", ["8.3%", "120%", "88%"], "\\(120/1,000=12\\%\\)."),
    choiceRow("Cuentas por cobrar suben de 200 a 260. Variación %:", "30%", ["60%", "23.1%", "130%"], "\\((260-200)/200=30\\%\\)."),
    choiceRow("Gastos bajan de 400 a 320. Variación %:", "-20%", ["20%", "-80%", "125%"], "\\((320-400)/400=-20\\%\\)."),
    choiceRow("Una partida representa 8% en 2023 y 12% en 2024. Cambio en puntos porcentuales:", "4 p.p.", ["20 p.p.", "50 p.p.", "96 p.p."], "\\(12\\%-8\\%=4\\) puntos porcentuales.")
  ],
  dificil: [
    choiceRow("Ventas 500, costo 350. Margen bruto:", "30%", ["70%", "150%", "43%"], "Ganancia bruta es 150; \\(150/500=30\\%\\)."),
    choiceRow("Activo total sube de 800 a 1,000. Variación porcentual:", "25%", ["20%", "80%", "125%"], "\\((1000-800)/800=25\\%\\)."),
    choiceRow("Si inventarios pasan de 10% a 22% del activo, la lectura más prudente es:", "Investigar causa operativa antes de concluir", ["Siempre excelente", "Siempre fraude", "Ignorar"], "El porcentaje orienta preguntas, no conclusiones automáticas."),
    choiceRow("Una utilidad neta pasa de 16% a 10% de ventas. Esto indica:", "Deterioro de margen neto", ["Mejora del margen", "Mayor activo corriente", "Menor deuda seguro"], "La empresa retiene menos utilidad por cada sol vendido."),
    choiceRow("Si una cuenta sube de 2 a 10, la variación porcentual es alta porque:", "La base anterior es pequeña", ["El cálculo vertical no existe", "No hay variación", "El activo desapareció"], "\\((10-2)/2=400\\%\\).")
  ]
};

financePracticeBanks["aef-semana-07"] = {
  facil: [
    choiceRow("Activo corriente 300 y pasivo corriente 150. Liquidez general:", "2.0", ["0.5", "150", "450"], "\\(300/150=2\\)."),
    choiceRow("Activo corriente 500, inventarios 100, pasivo corriente 200. Prueba ácida:", "2.0", ["2.5", "0.4", "3.0"], "\\((500-100)/200=2\\)."),
    choiceRow("Activo corriente 400 y pasivo corriente 250. Capital de trabajo neto:", "150", ["650", "1.6", "-150"], "\\(400-250=150\\)."),
    choiceRow("Pasivo total 600 y activo total 1,200. Endeudamiento:", "50%", ["200%", "60%", "20%"], "\\(600/1200=50\\%\\)."),
    choiceRow("EBIT 240 y gastos financieros 60. Cobertura:", "4 veces", ["0.25 veces", "300 veces", "180 veces"], "\\(240/60=4\\)."),
    choiceRow("Efectivo 80, valores negociables 20 y pasivo corriente 200. Prueba defensiva:", "0.5", ["2.0", "0.1", "1.5"], "\\((80+20)/200=0.5\\)."),
    choiceRow("Pasivo corriente 365 y disponible 73. Días disponibles:", "73 días", ["5 días", "365 días", "292 días"], "\\(73/(365/365)=73\\) días.")
  ],
  medio: [
    choiceRow("Activo corriente 180, inventarios 60, pasivo corriente 120. Prueba ácida:", "1.0", ["1.5", "0.5", "2.0"], "\\((180-60)/120=1\\)."),
    choiceRow("Pasivo total 300 y patrimonio 200. Endeudamiento patrimonial:", "1.5", ["0.67", "500", "60%"], "\\(300/200=1.5\\)."),
    choiceRow("Gastos financieros 40 y pasivos con costo 800. Costo de deuda:", "5%", ["20%", "2%", "50%"], "\\(40/800=5\\%\\)."),
    choiceRow("Patrimonio 450 y activo total 900. Grado de propiedad:", "50%", ["2", "45%", "150%"], "\\(450/900=50\\%\\)."),
    choiceRow("Activo corriente 90 y pasivo corriente 120. Liquidez general:", "0.75", ["1.33", "30", "2.10"], "\\(90/120=0.75\\)."),
    choiceRow("Patrimonio 300 y activo total 1,000. Grado de propiedad:", "30%", ["70%", "3.33", "300%"], "\\(300/1000=30\\%\\)."),
    choiceRow("Gastos financieros 50 y pasivos con costo 1,000. Costo de deuda:", "5%", ["20%", "50%", "0.5%"], "\\(50/1000=5\\%\\).")
  ],
  dificil: [
    choiceRow("Liquidez general 2.5 pero inventarios son casi todo el activo corriente. Riesgo:", "La liquidez puede estar sobreestimada", ["No hay riesgo posible", "La empresa no tiene pasivos", "La solvencia es infinita"], "Inventarios pueden tardar en convertirse en efectivo."),
    choiceRow("Cobertura de intereses baja de 5 a 1.2. Lectura:", "Menor holgura para pagar intereses", ["Mejor solvencia siempre", "No cambia riesgo", "Mayor liquidez automática"], "Menos veces de cobertura aumenta presión financiera."),
    choiceRow("Pasivo total 700, activo 1,000, patrimonio 300. Endeudamiento patrimonial:", "2.33", ["0.70", "0.43", "1.30"], "\\(700/300=2.33\\)."),
    choiceRow("Activo corriente 1,000, inventarios 700, pasivo corriente 500. Liquidez general y ácida:", "2.0 y 0.6", ["0.6 y 2.0", "1.4 y 2.0", "2.0 y 1.4"], "LG \\(=1000/500=2\\); PA \\(=(1000-700)/500=0.6\\)."),
    choiceRow("Un alto endeudamiento con flujos estables puede ser:", "Manejable, pero debe revisarse cobertura y vencimientos", ["Siempre quiebra inmediata", "Siempre óptimo", "Irrelevante"], "La interpretación depende de flujos, costo de deuda y calendario."),
    choiceRow("Pasivo no corriente 400, patrimonio 600, IRD 50 y activo fijo 500. Cobertura del activo fijo:", "1.9", ["0.5", "2.1", "0.95"], "\\((400+600-50)/500=1.9\\)."),
    choiceRow("Disponible 120 y pasivo corriente 730. Días disponibles:", "60 días", ["6 días", "120 días", "730 días"], "\\(120/(730/365)=60\\) días.")
  ]
};

financeTheoryData["aef-semana-09"] = {
  facil: [
    choiceRow("¿Qué miden principalmente los ratios de gestión?", "Eficiencia y velocidad en el uso de recursos", ["Solo impuestos", "Solo valor de mercado", "Solo dividendos"], "Los ratios de gestión miden qué tan rápido cuentas como inventarios, cuentas por cobrar o activos se convierten en ventas o efectivo."),
    choiceRow("La rotación de cuentas por cobrar se relaciona con:", "La rapidez de cobranza", ["La depreciación", "El pago de impuestos", "El valor del patrimonio"], "Este indicador evalúa cuántas veces se recuperan las cuentas por cobrar durante el periodo."),
    choiceRow("Los días promedio de cobro se calculan con:", "365 / Rotación de cuentas por cobrar", ["Ventas / Activo", "Utilidad / Ventas", "Pasivo / Patrimonio"], "Convierte la rotación en una medida de tiempo promedio de cobranza."),
    choiceRow("La rotación de inventarios usa como numerador:", "Costo de ventas", ["Utilidad neta", "Patrimonio", "Gasto financiero"], "El inventario se relaciona directamente con el costo de los bienes vendidos."),
    choiceRow("El margen bruto compara:", "Utilidad bruta y ventas netas", ["Pasivo y activo", "Caja e inventario", "Ventas y patrimonio"], "El margen bruto mide qué queda de las ventas después del costo de ventas."),
    choiceRow("El margen operativo mide utilidad después de:", "Costos y gastos operativos", ["Solo dividendos", "Solo aportes de socios", "Solo activos fijos"], "El margen operativo observa el desempeño del giro antes de intereses e impuestos."),
    choiceRow("El margen neto se calcula con:", "Utilidad neta / Ventas", ["Ventas / Activo", "Compras / CxP", "Inventario / Ventas"], "El margen neto muestra la utilidad final por cada sol vendido."),
    choiceRow("La rotación del activo mide:", "Ventas generadas por cada sol de activo", ["Deuda por cada proveedor", "Impuestos por venta", "Dividendos por acción"], "Evalúa eficiencia de los activos para generar ingresos."),
    choiceRow("Un aumento sostenido de días de cobro puede indicar:", "Problemas de crédito o cobranza", ["Menor riesgo siempre", "Más depreciación", "Cierre automático"], "Más días para cobrar puede reflejar políticas de crédito débiles o clientes demorados."),
    choiceRow("Los días de pago deben compararse con:", "Los días de cobro", ["El logotipo", "El número de empleados solamente", "El nombre legal"], "La comparación entre cobrar y pagar ayuda a leer presión de caja.")
  ],
  medio: [
    choiceRow("Una rotación de cuentas por cobrar más alta normalmente implica:", "Cobranza más rápida", ["Cobranza más lenta", "Menor venta siempre", "Mayor deuda bancaria siempre"], "Si la rotación aumenta, la cuenta se recupera más veces en el año."),
    choiceRow("Un plazo de pago alto puede ser conveniente cuando:", "No genera costos financieros altos ni deteriora relaciones con proveedores", ["Siempre elimina deudas", "Impide comprar inventarios", "Garantiza utilidad neta"], "Pagar más tarde puede aliviar caja, pero tiene costos y riesgos comerciales."),
    choiceRow("Una rotación de inventarios baja puede indicar:", "Inventario acumulado o baja salida", ["Cobranza perfecta", "Menor activo fijo", "Cero ventas a crédito"], "Un inventario lento puede revelar sobrestock, obsolescencia o problemas de ventas."),
    choiceRow("Si el margen bruto baja, una causa posible es:", "Mayor peso del costo de ventas", ["Menor costo de ventas siempre", "Más patrimonio", "Menos cuentas por pagar"], "El margen bruto depende de ventas netas y costo de ventas."),
    choiceRow("Si el margen operativo baja pero el margen bruto se mantiene, conviene revisar:", "Gastos operativos", ["Solo proveedores", "Solo capital social", "Solo bancos"], "El deterioro después del margen bruto suele venir de gastos de ventas o administración."),
    choiceRow("El margen neto puede caer aunque el margen operativo no cambie por:", "Intereses o impuestos más altos", ["Menor nombre comercial", "Mayor inventario físico siempre", "Más notas contables"], "El margen neto incorpora partidas no operativas, financieras e impuestos."),
    choiceRow("La rotación del activo alta puede interpretarse como:", "Buen uso de activos para generar ventas", ["Rentabilidad garantizada", "Deuda inexistente", "Margen neto alto siempre"], "La rotación mide eficiencia comercial, pero no asegura utilidad si los márgenes son bajos."),
    choiceRow("Comparar días de cobro y días de pago ayuda a entender:", "El ciclo de caja", ["La tasa de depreciación", "La política de dividendos únicamente", "La NIC aplicable"], "Si se cobra tarde y se paga temprano, puede haber presión de liquidez."),
    choiceRow("Una empresa con margen bruto alto pero margen neto bajo podría tener:", "Gastos, intereses o impuestos elevados", ["Costo de ventas excesivo necesariamente", "Cero gastos operativos", "Ventas inexistentes"], "La utilidad se erosiona después del margen bruto."),
    choiceRow("Los ratios de gestión deben interpretarse con:", "Sector, historia y política comercial", ["Solo una cifra aislada", "Solo color del reporte", "Solo saldo de caja"], "El nivel normal de rotación depende del modelo de negocio.")
  ],
  dificil: [
    choiceRow("Si los días de cobro suben y los días de pago bajan, la empresa podría enfrentar:", "Mayor presión de liquidez", ["Menor necesidad de caja", "Cero riesgo comercial", "Menor capital de trabajo siempre"], "Cobrar más tarde y pagar más rápido aumenta la necesidad de financiamiento operativo."),
    choiceRow("Una rotación de inventarios muy alta no siempre es buena porque puede indicar:", "Riesgo de quiebres de stock", ["Inventario obsoleto seguro", "Ventas nulas", "Mayor deuda siempre"], "Una rotación excesiva puede reflejar inventarios demasiado ajustados."),
    choiceRow("Un margen neto menor al operativo refleja impacto de:", "Gastos financieros, impuestos u otras partidas no operativas", ["Solo costo de ventas", "Solo inventarios", "Solo cuentas por cobrar"], "El margen operativo se calcula antes de esas partidas."),
    choiceRow("Si rota mucho el activo pero el margen neto es bajo, el negocio podría depender de:", "Volumen alto con bajo margen", ["Precio alto con pocas ventas", "Activos improductivos únicamente", "Sin ventas"], "Algunos modelos ganan por volumen y eficiencia, no por margen unitario alto."),
    choiceRow("Para evaluar política de crédito se debe mirar especialmente:", "Días de cobro y rotación de CxC", ["ROE únicamente", "Depreciación únicamente", "Patrimonio fijo"], "Estos ratios muestran rapidez de recuperación de ventas al crédito."),
    choiceRow("Si cuentas por pagar se pagan más lentamente cada año, la interpretación debe ser cautelosa porque:", "Puede aliviar caja o señalar tensión con proveedores", ["Siempre mejora solvencia", "Siempre aumenta ventas", "Nunca afecta relaciones"], "El efecto depende de costos financieros y condiciones comerciales."),
    choiceRow("Una empresa con inventario lento y margen bruto decreciente podría tener:", "Problemas de demanda u obsolescencia", ["Cobranza perfecta garantizada", "Menos riesgo operativo", "Mayor eficiencia segura"], "Inventarios lentos pueden forzar descuentos y afectar margen."),
    choiceRow("El ciclo operativo se entiende mejor combinando:", "Cobro, inventario y pago", ["Solo ROE", "Solo impuestos", "Solo capital social"], "La gestión operativa conecta cuánto tarda vender, cobrar y pagar."),
    choiceRow("Una mejora de margen operativo sin mejora de margen neto puede ocultar:", "Mayor costo financiero o tributario", ["Menor deuda siempre", "Mayor eficiencia total asegurada", "Ningún cambio posible"], "El resultado final puede deteriorarse por debajo de la línea operativa."),
    choiceRow("La rotación del activo debe leerse junto con márgenes porque:", "Vender mucho no garantiza ganar mucho", ["Son indicadores idénticos", "La rotación reemplaza utilidad", "Los activos no importan"], "La rentabilidad combina volumen, eficiencia y margen.")
  ]
};

financePracticeBanks["aef-semana-09"] = {
  facil: [
    choiceRow("Ventas al crédito 120,000 y promedio CxC 30,000. Rotación CxC:", "4.0", ["0.25", "150,000", "90,000"], "\\(120,000/30,000=4\\) veces."),
    choiceRow("Rotación CxC 5. Días promedio de cobro:", "73 días", ["5 días", "365 días", "18 días"], "\\(365/5=73\\) días."),
    choiceRow("Costo de ventas 200,000 e inventario promedio 50,000. Rotación de inventarios:", "4.0", ["0.25", "250,000", "150,000"], "\\(200,000/50,000=4\\)."),
    choiceRow("Rotación de inventarios 10. Días de inventario:", "36.5 días", ["10 días", "365 días", "3.65 días"], "\\(365/10=36.5\\) días."),
    choiceRow("Ventas 500,000 y activo total 250,000. Rotación del activo:", "2.0", ["0.5", "750,000", "250,000"], "\\(500,000/250,000=2\\)."),
    choiceRow("Utilidad bruta 80,000 y ventas netas 200,000. Margen bruto:", "40%", ["25%", "60%", "160%"], "\\(80,000/200,000=40\\%\\)."),
    choiceRow("Utilidad operativa 30,000 y ventas 150,000. Margen operativo:", "20%", ["5%", "30%", "80%"], "\\(30,000/150,000=20\\%\\)."),
    choiceRow("Utilidad neta 18,000 y ventas 180,000. Margen neto:", "10%", ["18%", "1%", "90%"], "\\(18,000/180,000=10\\%\\)."),
    choiceRow("Compras al crédito 90,000 y promedio CxP 30,000. Rotación CxP:", "3.0", ["0.33", "120,000", "60,000"], "\\(90,000/30,000=3\\)."),
    choiceRow("Rotación CxP 4. Días promedio de pago:", "91.25 días", ["4 días", "365 días", "45 días"], "\\(365/4=91.25\\).")
  ],
  medio: [
    choiceRow("Ventas al crédito 240,000; CxC inicial 30,000 y final 50,000. Rotación CxC:", "6.0", ["4.8", "8.0", "3.0"], "Promedio CxC \\((30,000+50,000)/2=40,000\\); \\(240,000/40,000=6\\)."),
    choiceRow("Con rotación CxC de 6, días de cobro aproximados:", "60.8 días", ["6 días", "30 días", "120 días"], "\\(365/6=60.8\\)."),
    choiceRow("Costo de ventas 360,000; inventario inicial 80,000 y final 100,000. Rotación:", "4.0", ["3.6", "4.5", "2.0"], "Inventario promedio \\(90,000\\); \\(360,000/90,000=4\\)."),
    choiceRow("Compras al crédito 180,000; CxP promedio 45,000. Días de pago:", "91.25 días", ["45 días", "4 días", "180 días"], "Rotación CxP \\(=4\\); días \\(365/4=91.25\\)."),
    choiceRow("Ventas 800,000 y activo total 400,000. Rotación del activo:", "2.0", ["0.5", "1.5", "4.0"], "\\(800,000/400,000=2\\)."),
    choiceRow("Ventas 600,000 y utilidad bruta 210,000. Margen bruto:", "35%", ["65%", "28.6%", "21%"], "\\(210,000/600,000=35\\%\\)."),
    choiceRow("Ventas 500,000, utilidad operativa 75,000 y utilidad neta 45,000. Margen operativo:", "15%", ["9%", "60%", "6%"], "\\(75,000/500,000=15\\%\\)."),
    choiceRow("Con esos datos, margen neto:", "9%", ["15%", "60%", "45%"], "\\(45,000/500,000=9\\%\\)."),
    choiceRow("Días de cobro 80 y días de pago 40 sugieren:", "Presión de caja por cobrar después de pagar", ["Holgura segura", "Inventario obsoleto", "Margen bruto alto"], "Si se cobra tarde y se paga temprano, la operación puede necesitar financiamiento."),
    choiceRow("Rotación de inventarios baja de 8 a 4. Lectura probable:", "Inventario se mueve más lento", ["Inventario se mueve más rápido", "Días de inventario caen", "No cambia gestión"], "Menor rotación implica más días promedio de inventario.")
  ],
  dificil: [
    choiceRow("CxC rota 5 veces y CxP rota 10 veces. ¿Qué ciclo presiona más caja?", "Se cobra más lento que se paga", ["Se cobra más rápido", "No hay presión posible", "No se puede comparar días"], "Días CxC \\(=73\\); días CxP \\(=36.5\\)."),
    choiceRow("Inventarios rotan 4 veces y CxC 6 veces. Días combinados antes de cobrar:", "152.1 días", ["60.8 días", "91.25 días", "30.4 días"], "Días inventario \\(91.25\\) + días cobro \\(60.8\\) = \\(152.05\\)."),
    choiceRow("Ventas 1,000, costo 650, gastos operativos 200, utilidad neta 90. Margen operativo:", "15%", ["9%", "35%", "20%"], "Utilidad operativa \\(=1000-650-200=150\\); margen \\(150/1000=15\\%\\)."),
    choiceRow("Con esos datos, margen bruto:", "35%", ["15%", "9%", "65%"], "Utilidad bruta \\(=350\\); \\(350/1000=35\\%\\)."),
    choiceRow("Con esos datos, margen neto:", "9%", ["15%", "35%", "90%"], "\\(90/1000=9\\%\\)."),
    choiceRow("Rotación del activo 3 y margen neto 4%. Ventas/activos alto con margen bajo indica:", "Modelo de volumen alto y margen bajo", ["Sin eficiencia", "Utilidad nula siempre", "Mayor deuda necesariamente"], "Debe analizarse la rentabilidad total, no solo la velocidad."),
    choiceRow("Días de inventario suben de 45 a 90 y margen bruto baja. Riesgo principal:", "Obsolescencia o descuentos para vender", ["Cobranza acelerada", "Menor necesidad de capital", "Mayor margen seguro"], "Inventario lento puede obligar a rebajas y afectar margen."),
    choiceRow("Ventas crecen 20%, CxC crece 80%. Posible lectura:", "Crédito más riesgoso o cobranza más lenta", ["Mejora segura de caja", "Menor venta al crédito", "No hay señal"], "CxC creciendo mucho más que ventas suele exigir revisión de cobranza."),
    choiceRow("Si días de pago se alargan por falta de caja, una señal complementaria sería:", "Aumento de obligaciones vencidas o costo financiero", ["Menor pasivo", "Más margen bruto", "Menos proveedores"], "Pagar tarde puede ser estrategia o tensión financiera."),
    choiceRow("Si margen bruto mejora pero margen neto cae, el análisis debe revisar:", "Gastos operativos, intereses e impuestos", ["Solo costo de ventas", "Solo inventario inicial", "Solo activo total"], "La utilidad se pierde después del margen bruto.")
  ]
};

financeTheoryData["aef-semana-10"] = {
  facil: [
    choiceRow("¿Qué mide el ROA?", "Rentabilidad sobre los activos", ["Rentabilidad solo de ventas", "Días de cobro", "Rotación de proveedores"], "El ROA relaciona utilidad neta con activos totales."),
    choiceRow("La fórmula del ROA es:", "Utilidad neta / Total de activos", ["Ventas / Patrimonio", "EBITDA / Impuestos", "Compras / CxP"], "Mide utilidad generada por los recursos controlados."),
    choiceRow("¿Qué mide el ROE?", "Rentabilidad sobre el patrimonio", ["Liquidez corriente", "Rotación de inventarios", "Costo de ventas"], "El ROE mide retorno para propietarios o accionistas."),
    choiceRow("La fórmula del ROE es:", "Utilidad neta / Total patrimonio", ["Ventas / Activos", "Activo / Pasivo", "EBIT / Ventas"], "Relaciona utilidad final con inversión patrimonial."),
    choiceRow("Un ROA alto suele indicar:", "Buen uso de activos para generar ganancias", ["Menor utilidad siempre", "Más días de cobro", "Pérdida obligatoria"], "El indicador evalúa productividad rentable del activo."),
    choiceRow("Un ROE alto es especialmente relevante para:", "Propietarios e inversionistas", ["Solo proveedores", "Solo clientes", "Solo auditores tributarios"], "Mide retorno del capital propio."),
    choiceRow("ROA usa como base:", "Activos", ["Patrimonio", "Ventas al crédito", "Inventario promedio"], "El denominador del ROA es el total de activos."),
    choiceRow("ROE usa como base:", "Patrimonio", ["Activo total", "Costo de ventas", "Compras"], "El denominador del ROE es el patrimonio."),
    choiceRow("ROE debe analizarse junto con:", "Nivel de deuda", ["Color del reporte", "Número de páginas", "Solo caja chica"], "El apalancamiento puede elevar ROE y riesgo."),
    choiceRow("ROA y ROE son indicadores de:", "Rentabilidad sobre inversión", ["Solo liquidez", "Solo gestión de inventarios", "Solo presentación contable"], "Ambos relacionan utilidad con recursos invertidos.")
  ],
  medio: [
    choiceRow("Si ROE es mucho mayor que ROA, puede deberse a:", "Apalancamiento financiero", ["Cero deuda siempre", "Inventario bajo únicamente", "Menos ventas"], "La deuda reduce la base patrimonial relativa y puede amplificar el ROE."),
    choiceRow("Un ROA bajo con activos altos puede sugerir:", "Activos poco productivos o baja utilidad", ["Mayor eficiencia segura", "Menor riesgo siempre", "Caja ilimitada"], "El activo no está generando suficiente utilidad."),
    choiceRow("Un ROE alto no siempre es positivo porque:", "Puede venir de deuda excesiva", ["Siempre elimina riesgo", "No usa utilidad", "No depende del patrimonio"], "La deuda puede aumentar retorno y también presión financiera."),
    choiceRow("La gerencia suele mirar ROA porque:", "Evalúa eficiencia del negocio con sus activos", ["Solo calcula dividendos", "Ignora operaciones", "Mide únicamente proveedores"], "El ROA permite juzgar uso de recursos controlados."),
    choiceRow("Los accionistas suelen mirar ROE porque:", "Evalúa retorno del capital propio", ["Mide días de inventario", "Solo calcula impuestos", "Sustituye ventas"], "El ROE muestra rentabilidad sobre patrimonio."),
    choiceRow("Si utilidad sube y activos permanecen constantes, ROA:", "Aumenta", ["Disminuye", "No cambia necesariamente", "Se vuelve cero"], "Con el mismo denominador y mayor numerador, el ratio sube."),
    choiceRow("Si utilidad se mantiene y patrimonio baja por mayor deuda, ROE:", "Puede aumentar", ["Debe caer siempre", "Se vuelve negativo siempre", "No puede calcularse"], "Menor patrimonio eleva el ratio, aunque puede aumentar riesgo."),
    choiceRow("ROA se puede mejorar con:", "Mayor margen o mejor rotación de activos", ["Más gastos sin ventas", "Menor utilidad", "Inventario obsoleto"], "La rentabilidad del activo depende de utilidad y uso del activo."),
    choiceRow("ROE combina rentabilidad y:", "Estructura financiera", ["Solo formato contable", "Solo número de clientes", "Solo moneda"], "El patrimonio depende de cómo se financian activos."),
    choiceRow("Comparar ROA y ROE ayuda a distinguir:", "Eficiencia operativa y efecto del financiamiento", ["Solo caja y bancos", "Solo ventas brutas", "Solo notas"], "ROA mira negocio; ROE incorpora capital propio y deuda.")
  ],
  dificil: [
    choiceRow("Una empresa puede tener ROA estable y ROE creciente si:", "Aumenta el apalancamiento", ["Reduce deuda", "Elimina utilidad", "No tiene patrimonio"], "Con la misma eficiencia del activo, más deuda puede elevar retorno patrimonial."),
    choiceRow("ROE alto con cobertura de intereses baja sugiere:", "Rentabilidad atractiva pero riesgo financiero alto", ["Situación sin riesgo", "Ausencia de deuda", "Inventarios perfectos"], "El retorno para accionistas puede estar sostenido por deuda riesgosa."),
    choiceRow("ROA bajo y margen neto alto podría explicarse por:", "Baja rotación de activos", ["Activos muy productivos", "Cero activos", "Mayor ciclo de cobro seguro"], "Un margen alto no basta si los activos generan pocas ventas."),
    choiceRow("ROA alto y ROE bajo podría indicar:", "Poco apalancamiento o base patrimonial amplia", ["Deuda excesiva siempre", "Pérdida neta segura", "Inventario lento siempre"], "Si casi todo se financia con patrimonio, ROE puede acercarse al ROA."),
    choiceRow("Para comparar empresas con deuda distinta conviene mirar:", "ROA junto con ROE", ["Solo ROE", "Solo dividendos", "Solo ventas"], "La lectura conjunta separa desempeño del activo y efecto del apalancamiento."),
    choiceRow("Si ROE sube por recompra o reducción de patrimonio, se debe revisar:", "Si la utilidad y el riesgo sostienen ese aumento", ["Solo el logo", "Solo ventas brutas", "Nada más"], "Un denominador menor puede inflar el indicador."),
    choiceRow("Un ROA negativo significa:", "La empresa destruye utilidad respecto a sus activos", ["Siempre tiene caja negativa", "No tiene activos", "No hay ventas"], "Utilidad neta negativa sobre activos genera ROA negativo."),
    choiceRow("Una empresa intensiva en activos suele tener:", "ROA más presionado si no genera suficiente utilidad", ["ROA infinito", "Sin necesidad de ventas", "ROE cero siempre"], "El activo alto exige utilidad suficiente para sostener rentabilidad."),
    choiceRow("El ROE puede mejorar por aumento de utilidad, reducción de patrimonio o:", "Uso de deuda", ["Más inventario obsoleto", "Menor margen siempre", "Más impuestos"], "El financiamiento altera la base patrimonial."),
    choiceRow("Una lectura completa de ROA y ROE debe incorporar:", "Margen, rotación, deuda y riesgo", ["Solo utilidad neta aislada", "Solo caja", "Solo compras"], "La rentabilidad no se explica por un único número.")
  ]
};

financePracticeBanks["aef-semana-10"] = {
  facil: [
    choiceRow("Utilidad neta 50,000 y activos 500,000. ROA:", "10%", ["5%", "50%", "1%"], "\\(50,000/500,000=10\\%\\)."),
    choiceRow("Utilidad neta 40,000 y patrimonio 200,000. ROE:", "20%", ["5%", "10%", "40%"], "\\(40,000/200,000=20\\%\\)."),
    choiceRow("Utilidad neta 30,000 y activos 300,000. ROA:", "10%", ["30%", "1%", "90%"], "\\(30,000/300,000=10\\%\\)."),
    choiceRow("Utilidad neta 24,000 y patrimonio 120,000. ROE:", "20%", ["12%", "5%", "24%"], "\\(24,000/120,000=20\\%\\)."),
    choiceRow("ROA 8% significa:", "La empresa gana 8 por cada 100 de activos", ["Cobra en 8 días", "Debe 8%", "Paga 8 proveedores"], "Es utilidad neta sobre activos."),
    choiceRow("ROE 15% significa:", "La empresa gana 15 por cada 100 de patrimonio", ["Vende 15 inventarios", "Cobra en 15 días", "Tiene 15 activos"], "Es retorno sobre capital propio."),
    choiceRow("Utilidad neta 10,000 y activos 200,000. ROA:", "5%", ["20%", "10%", "2%"], "\\(10,000/200,000=5\\%\\)."),
    choiceRow("Utilidad neta 10,000 y patrimonio 50,000. ROE:", "20%", ["5%", "10%", "50%"], "\\(10,000/50,000=20\\%\\)."),
    choiceRow("Si activos son 1,000 y utilidad 100, ROA:", "10%", ["1%", "100%", "90%"], "\\(100/1000=10\\%\\)."),
    choiceRow("Si patrimonio es 400 y utilidad 80, ROE:", "20%", ["5%", "25%", "80%"], "\\(80/400=20\\%\\).")
  ],
  medio: [
    choiceRow("Utilidad 60,000, activos 600,000 y patrimonio 300,000. ROA y ROE:", "10% y 20%", ["20% y 10%", "10% y 10%", "20% y 20%"], "ROA \\(=60/600=10\\%\\); ROE \\(=60/300=20\\%\\)."),
    choiceRow("Utilidad 45,000, activos 900,000 y patrimonio 300,000. ROA:", "5%", ["15%", "30%", "3%"], "\\(45,000/900,000=5\\%\\)."),
    choiceRow("Con esos datos, ROE:", "15%", ["5%", "30%", "45%"], "\\(45,000/300,000=15\\%\\)."),
    choiceRow("Utilidad 72,000, activos 800,000. ROA:", "9%", ["11.1%", "72%", "8%"], "\\(72,000/800,000=9\\%\\)."),
    choiceRow("Utilidad 72,000, patrimonio 240,000. ROE:", "30%", ["9%", "3.3%", "24%"], "\\(72,000/240,000=30\\%\\)."),
    choiceRow("Si ROA 6% y activos 500,000, utilidad neta:", "30,000", ["83,333", "6,000", "500,000"], "\\(0.06\\times500,000=30,000\\)."),
    choiceRow("Si ROE 25% y patrimonio 160,000, utilidad neta:", "40,000", ["25,000", "64,000", "160,000"], "\\(0.25\\times160,000=40,000\\)."),
    choiceRow("Utilidad igual, activos 1,000 y patrimonio 500. ROE será respecto al ROA:", "El doble", ["Igual", "La mitad", "Cero"], "El patrimonio es la mitad de activos; con igual utilidad, el ratio sobre patrimonio duplica al de activos."),
    choiceRow("Si utilidad baja de 50 a 40 y activos quedan en 500, ROA cambia de:", "10% a 8%", ["8% a 10%", "50% a 40%", "5% a 4%"], "\\(50/500=10\\%\\), \\(40/500=8\\%\\)."),
    choiceRow("Si utilidad sube de 30 a 45 y patrimonio queda en 300, ROE cambia de:", "10% a 15%", ["15% a 10%", "30% a 45%", "3% a 4.5%"], "\\(30/300=10\\%\\), \\(45/300=15\\%\\).")
  ],
  dificil: [
    choiceRow("Empresa A: utilidad 80, activos 1,000, patrimonio 800. Empresa B: utilidad 80, activos 1,000, patrimonio 400. ¿Cuál tiene mayor ROE?", "Empresa B", ["Empresa A", "Ambas igual", "No puede calcularse"], "B tiene menor patrimonio: \\(80/400=20\\%\\) vs. \\(80/800=10\\%\\)."),
    choiceRow("Con esos datos, ambas tienen el mismo:", "ROA", ["ROE", "Apalancamiento", "Patrimonio"], "Ambas tienen \\(80/1000=8\\%\\) de ROA."),
    choiceRow("Utilidad 100, activos 1,250 y patrimonio 500. ROA y ROE:", "8% y 20%", ["20% y 8%", "10% y 25%", "5% y 20%"], "ROA \\(=100/1250=8\\%\\); ROE \\(=100/500=20\\%\\)."),
    choiceRow("Si ROA es 7% y activos/patrimonio es 2.5, ROE aproximado:", "17.5%", ["2.8%", "7%", "25%"], "Con apalancamiento, \\(ROE\\approx ROA\\times Activos/Patrimonio\\)."),
    choiceRow("Si ROE sube de 18% a 28% pero ROA cae, posible explicación:", "Mayor apalancamiento con menor eficiencia del activo", ["Menor deuda y mayor eficiencia", "No hay cambio", "Inventarios desaparecen"], "El ROE puede subir por deuda aunque el activo rinda menos."),
    choiceRow("Utilidad 60, activos 1,000, patrimonio 250. MAF:", "4.0", ["0.25", "16", "6"], "\\(Activos/Patrimonio=1000/250=4\\)."),
    choiceRow("Con utilidad 60, activos 1,000, patrimonio 250, ROA y ROE:", "6% y 24%", ["24% y 6%", "6% y 6%", "24% y 24%"], "\\(60/1000=6\\%\\); \\(60/250=24\\%\\)."),
    choiceRow("Si ROE aumenta solo porque el patrimonio cae por pérdidas acumuladas, la lectura debe ser:", "Cautelosa", ["Siempre positiva", "Irrelevante", "Mayor solvencia segura"], "Un denominador reducido puede inflar el ratio sin mejora real."),
    choiceRow("Una empresa con ROA 12% y ROE 13% probablemente tiene:", "Bajo apalancamiento", ["Apalancamiento extremo", "Pérdida neta", "Sin activos"], "ROE cercano al ROA sugiere poca diferencia entre activos y patrimonio."),
    choiceRow("Una empresa con ROA 4% y ROE 24% debe revisar especialmente:", "Deuda y costo financiero", ["Solo margen bruto", "Solo inventario", "Solo notas"], "La brecha grande sugiere apalancamiento elevado.")
  ]
};

financeTheoryData["aef-semana-11"] = {
  facil: [
    choiceRow("¿Qué busca el enfoque Dupont?", "Explicar las causas de la rentabilidad", ["Calcular solo impuestos", "Registrar asientos", "Medir solo liquidez"], "Dupont descompone ROA y ROE para entender de dónde viene la rentabilidad."),
    choiceRow("El ROA Dupont se descompone en:", "Margen neto y rotación de activos", ["Liquidez y solvencia", "CxC y CxP", "EBITDA y capex"], "ROA = margen neto por rotación de activos."),
    choiceRow("El ROE Dupont incorpora además:", "Multiplicador de apalancamiento financiero", ["Días de inventario", "Costo de ventas", "Caja chica"], "El ROE agrega el efecto de activos sobre patrimonio."),
    choiceRow("El margen neto mide:", "Utilidad por cada sol vendido", ["Activos por patrimonio", "Días de pago", "Inventarios por ventas"], "Se calcula como utilidad neta sobre ventas."),
    choiceRow("La rotación de activos mide:", "Ventas por cada sol de activos", ["Utilidad por patrimonio", "Compras por proveedor", "Impuestos por venta"], "Se calcula como ventas sobre activos."),
    choiceRow("El MAF se calcula como:", "Activos / Patrimonio", ["Utilidad / Ventas", "Ventas / Activos", "Pasivo / Ventas"], "Mide apalancamiento financiero."),
    choiceRow("La fórmula Dupont del ROE es:", "Margen neto × Rotación de activos × MAF", ["Ventas / CxC", "EBITDA / Ventas", "Activo - Pasivo"], "Combina margen, eficiencia y apalancamiento."),
    choiceRow("Si no hay deuda, ROA y ROE tienden a ser:", "Más parecidos", ["Siempre negativos", "Incalculables", "Iguales a ventas"], "Sin deuda, activos y patrimonio son más cercanos."),
    choiceRow("Dupont ayuda a identificar si el problema está en:", "Margen, rotación o apalancamiento", ["Solo impuestos", "Solo bancos", "Solo notas"], "Su valor está en separar causas."),
    choiceRow("Mayor apalancamiento puede aumentar ROE pero también:", "Aumenta riesgo", ["Elimina intereses", "Reduce toda deuda", "Impide vender"], "La deuda amplifica resultados y compromisos.")
  ],
  medio: [
    choiceRow("Si margen neto sube y rotación se mantiene, ROA:", "Aumenta", ["Disminuye", "No cambia", "Se vuelve cero"], "ROA es producto de margen y rotación."),
    choiceRow("Si margen neto cae pero rotación sube, ROA:", "Depende de la magnitud de ambos cambios", ["Siempre sube", "Siempre cae", "No puede calcularse"], "Un componente puede compensar al otro."),
    choiceRow("Si ROE sube por MAF, la causa principal es:", "Mayor apalancamiento", ["Mayor margen necesariamente", "Menor activo siempre", "Menor deuda"], "El MAF refleja activos financiados con patrimonio y deuda."),
    choiceRow("Una empresa con margen bajo y rotación alta puede ser:", "Negocio de volumen", ["Negocio sin ventas", "Empresa sin activos", "Entidad sin costos"], "Puede compensar bajo margen con mucha velocidad de ventas."),
    choiceRow("Una empresa con margen alto y rotación baja puede ser:", "Negocio de alto margen y menor volumen", ["Sin rentabilidad", "Sin activos", "Solo deuda"], "Algunos negocios venden menos veces pero con mayor utilidad por venta."),
    choiceRow("Si ROA es bajo, Dupont permite preguntar:", "Si falla margen, rotación o ambos", ["Solo si hay caja", "Solo si hay proveedores", "Solo si falta una nota"], "La descomposición transforma el ratio en diagnóstico."),
    choiceRow("Si ROE es alto por MAF excesivo, se debe revisar:", "Solvencia y costo de la deuda", ["Solo inventario", "Solo ventas brutas", "Solo número de accionistas"], "El apalancamiento aumenta presión financiera."),
    choiceRow("El margen neto se afecta por:", "Costos, gastos, intereses e impuestos", ["Solo activos", "Solo patrimonio", "Solo rotación"], "La utilidad neta es resultado final."),
    choiceRow("La rotación de activos mejora cuando:", "Se generan más ventas con los mismos activos", ["Bajan ventas", "Suben activos ociosos", "Cae utilidad neta"], "El indicador relaciona ventas y activos."),
    choiceRow("Dupont es útil porque conecta:", "Estado de resultados y Estado de Situación Financiera", ["Solo notas", "Solo asientos", "Solo presupuesto"], "Usa utilidad y ventas del ERI, activos y patrimonio del ESF.")
  ],
  dificil: [
    choiceRow("Dos empresas tienen el mismo ROA, pero una tiene mayor ROE. La diferencia probablemente está en:", "MAF más alto", ["Menor apalancamiento", "Mismo patrimonio", "Ausencia de deuda"], "Si ROA es igual, el ROE cambia por apalancamiento."),
    choiceRow("Si margen neto mejora por recorte de gastos, pero ventas caen y activos no bajan, el efecto en ROA:", "Puede ser ambiguo", ["Siempre positivo", "Siempre negativo", "Imposible"], "Mejora margen, pero puede caer rotación."),
    choiceRow("Un ROE alto explicado casi solo por MAF es riesgoso porque:", "Depende de deuda y compromisos financieros", ["Proviene de mayor margen", "Reduce intereses", "Elimina pasivos"], "El apalancamiento puede amplificar pérdidas."),
    choiceRow("Una caída de ROA con margen estable indica principalmente:", "Menor rotación de activos", ["Mayor margen", "Menor deuda", "Mayor patrimonio seguro"], "Si margen no cambia, el ROA cae por eficiencia del activo."),
    choiceRow("Una caída de ROE con ROA estable puede explicarse por:", "Menor apalancamiento", ["Mayor MAF", "Más deuda necesariamente", "Mayor margen"], "Si ROA se mantiene, cambios de ROE pueden venir del MAF."),
    choiceRow("Dupont de tres factores cancela algebraicamente hasta:", "Utilidad neta / Patrimonio", ["Ventas / Activo", "EBITDA / Ventas", "Pasivo / Activo"], "\\((UN/Ventas)(Ventas/Activos)(Activos/Patrimonio)=UN/Patrimonio\\)."),
    choiceRow("Dupont de dos factores cancela algebraicamente hasta:", "Utilidad neta / Activos", ["Utilidad / Patrimonio", "Ventas / Patrimonio", "Activos / Ventas"], "\\((UN/Ventas)(Ventas/Activos)=UN/Activos\\)."),
    choiceRow("Si una empresa mejora rotación vendiendo activos improductivos, podría:", "Mejorar ROA si mantiene ventas y utilidad", ["Reducir siempre ROA", "Eliminar margen neto", "Aumentar inventario siempre"], "Menos activos con resultados similares elevan rotación y ROA."),
    choiceRow("Si margen neto baja por mayor gasto financiero, el ROE puede no mejorar aunque suba MAF porque:", "El costo de deuda reduce utilidad neta", ["La deuda no afecta utilidad", "El MAF elimina gastos", "Las ventas desaparecen"], "La deuda aumenta apalancamiento, pero sus intereses pueden erosionar utilidad."),
    choiceRow("La mejor lectura Dupont combina:", "Causas numéricas y explicación del negocio", ["Solo multiplicar ratios", "Ignorar contexto", "Solo mirar ROE"], "El resultado debe conectarse con estrategia, sector y riesgo.")
  ]
};

financePracticeBanks["aef-semana-11"] = {
  facil: [
    choiceRow("Utilidad neta 50 y ventas 500. Margen neto:", "10%", ["5%", "50%", "100%"], "\\(50/500=10\\%\\)."),
    choiceRow("Ventas 500 y activos 250. Rotación de activos:", "2.0", ["0.5", "250", "5"], "\\(500/250=2\\)."),
    choiceRow("Activos 250 y patrimonio 125. MAF:", "2.0", ["0.5", "125", "3"], "\\(250/125=2\\)."),
    choiceRow("Margen 10% y rotación 2. ROA:", "20%", ["5%", "12%", "2%"], "\\(0.10\\times2=20\\%\\)."),
    choiceRow("Margen 10%, rotación 2 y MAF 2. ROE:", "40%", ["20%", "10%", "4%"], "\\(0.10\\times2\\times2=40\\%\\)."),
    choiceRow("Utilidad 30 y ventas 300. Margen:", "10%", ["30%", "3%", "90%"], "\\(30/300=10\\%\\)."),
    choiceRow("Ventas 300 y activos 600. Rotación:", "0.5", ["2.0", "300", "6"], "\\(300/600=0.5\\)."),
    choiceRow("Activos 600 y patrimonio 300. MAF:", "2.0", ["0.5", "3.0", "300"], "\\(600/300=2\\)."),
    choiceRow("Margen 8% y rotación 1.5. ROA:", "12%", ["8%", "1.5%", "18.75%"], "\\(0.08\\times1.5=12\\%\\)."),
    choiceRow("ROA 12% y MAF 2. ROE:", "24%", ["6%", "12%", "14%"], "\\(12\\%\\times2=24\\%\\).")
  ],
  medio: [
    choiceRow("Utilidad 80, ventas 1,000, activos 500. ROA Dupont:", "16%", ["8%", "20%", "5%"], "Margen \\(8\\%\\), rotación \\(2\\); ROA \\(=16\\%\\)."),
    choiceRow("Con utilidad 80, ventas 1,000, activos 500, patrimonio 250. ROE:", "32%", ["16%", "8%", "20%"], "MAF \\(=2\\); ROE \\(=8\\%\\times2\\times2=32\\%\\)."),
    choiceRow("Margen 5%, rotación 3, MAF 2. ROE:", "30%", ["15%", "10%", "60%"], "\\(0.05\\times3\\times2=30\\%\\)."),
    choiceRow("Margen 12% y rotación 0.8. ROA:", "9.6%", ["12.8%", "15%", "6.7%"], "\\(0.12\\times0.8=9.6\\%\\)."),
    choiceRow("ROE 24% y MAF 3. ROA:", "8%", ["72%", "21%", "3%"], "\\(ROA=ROE/MAF=24\\%/3=8\\%\\)."),
    choiceRow("ROA 9% y rotación 1.5. Margen neto:", "6%", ["13.5%", "9%", "1.5%"], "\\(Margen=ROA/Rotación=9\\%/1.5=6\\%\\)."),
    choiceRow("ROA 10% y margen 4%. Rotación:", "2.5", ["0.4", "14", "6"], "\\(Rotación=10\\%/4\\%=2.5\\)."),
    choiceRow("Activos 900, patrimonio 300. MAF:", "3.0", ["0.33", "600", "1.5"], "\\(900/300=3\\)."),
    choiceRow("Si margen baja de 10% a 8% y rotación queda en 2, ROA pasa de:", "20% a 16%", ["16% a 20%", "10% a 8%", "2% a 4%"], "Solo cambia margen: \\(0.10\\times2=20\\%\\), \\(0.08\\times2=16\\%\\)."),
    choiceRow("Si rotación sube de 1 a 1.5 con margen 10%, ROA pasa de:", "10% a 15%", ["15% a 10%", "1% a 1.5%", "11% a 15%"], "\\(0.10\\times1=10\\%\\), \\(0.10\\times1.5=15\\%\\).")
  ],
  dificil: [
    choiceRow("Empresa A: margen 5%, rotación 4. Empresa B: margen 10%, rotación 2. ¿ROA?", "Ambas 20%", ["A mayor", "B mayor", "Ambas 10%"], "A \\(=0.05\\times4=20\\%\\); B \\(=0.10\\times2=20\\%\\)."),
    choiceRow("Si dos empresas tienen ROA 20%, pero A tiene MAF 1.5 y B MAF 3, ¿mayor ROE?", "B", ["A", "Iguales", "Ninguna"], "B: \\(20\\%\\times3=60\\%\\), A: \\(30\\%\\)."),
    choiceRow("Margen 6%, rotación 2.5, MAF 4. ROE:", "60%", ["15%", "24%", "12.5%"], "\\(0.06\\times2.5\\times4=60\\%\\)."),
    choiceRow("Utilidad 120, ventas 1,500, activos 1,000, patrimonio 400. ROE Dupont:", "30%", ["12%", "8%", "20%"], "Margen 8%, rotación 1.5, MAF 2.5; ROE \\(=30\\%\\)."),
    choiceRow("Con esos datos, ROA:", "12%", ["30%", "8%", "2.5%"], "\\(0.08\\times1.5=12\\%\\)."),
    choiceRow("Si margen cae 20% relativo pero rotación sube 20% relativo, ROA:", "Queda casi igual", ["Sube 40%", "Cae 40%", "Se duplica"], "\\(0.8\\times1.2=0.96\\), queda muy cerca pero levemente menor."),
    choiceRow("Si MAF sube de 2 a 3 con ROA 8%, ROE cambia de:", "16% a 24%", ["24% a 16%", "8% a 12%", "2% a 3%"], "\\(8\\%\\times2=16\\%\\), \\(8\\%\\times3=24\\%\\)."),
    choiceRow("Una caída de margen de 12% a 6% requiere que la rotación se duplique para:", "Mantener el ROA", ["Duplicar ROE siempre", "Eliminar deuda", "Bajar ventas"], "El producto margen por rotación se mantiene si uno cae a la mitad y el otro se duplica."),
    choiceRow("ROE 36%, margen 6%, rotación 2. MAF:", "3.0", ["12", "0.33", "1.08"], "\\(MAF=36\\%/(6\\%\\times2)=3\\)."),
    choiceRow("Si el componente que más explica un ROE alto es MAF, la recomendación analítica es:", "Revisar riesgo financiero y cobertura de deuda", ["Ignorar pasivos", "Concluir eficiencia operativa perfecta", "Eliminar análisis de margen"], "El apalancamiento puede elevar retorno sin mejorar operaciones.")
  ]
};

financeTheoryData["aef-semana-12"] = {
  facil: [
    choiceRow("EBITDA significa:", "Utilidad antes de intereses, impuestos, depreciación y amortización", ["Utilidad neta después de dividendos", "Activo corriente menos pasivo corriente", "Ventas menos cuentas por cobrar"], "EBITDA viene de Earnings Before Interest, Taxes, Depreciation and Amortization."),
    choiceRow("El EBITDA busca medir principalmente:", "Desempeño operativo antes de estructura financiera y D&A", ["Solo liquidez legal", "Solo patrimonio", "Solo impuestos pagados"], "Aísla intereses, impuestos, depreciación y amortización para mirar operación."),
    choiceRow("Una fórmula básica del EBITDA es:", "EBIT + Depreciación + Amortización", ["Ventas / Activos", "Utilidad neta / Patrimonio", "CxC / Ventas"], "Se parte de EBIT y se agregan cargos no desembolsables de D&A."),
    choiceRow("El EBIT se interpreta como:", "Utilidad operativa", ["Utilidad después de dividendos", "Caja final", "Pasivo total"], "EBIT es resultado antes de intereses e impuestos."),
    choiceRow("El margen EBITDA se calcula como:", "EBITDA / Ventas", ["Ventas / EBITDA", "EBIT / Activos", "NOPAT / Patrimonio"], "Mide qué porcentaje de ventas queda como EBITDA."),
    choiceRow("Una limitación del EBITDA es que:", "No representa exactamente flujo de caja", ["Incluye todos los intereses", "Es igual a utilidad neta", "No usa ventas"], "No considera capex, impuestos, intereses ni cambios de capital de trabajo."),
    choiceRow("El EBITDA no considera:", "Intereses, impuestos, depreciación y amortización", ["Ventas netas", "Utilidad bruta", "Ingresos ordinarios"], "Justamente esas partidas se excluyen para mirar operación antes de ellas."),
    choiceRow("NOPAT se calcula como:", "EBIT × (1 - tasa de impuesto)", ["EBITDA / Ventas", "Ventas / Activos", "Utilidad / Patrimonio"], "NOPAT aproxima resultado operativo después de impuestos."),
    choiceRow("GOPAT se calcula como:", "EBITDA × (1 - tasa de impuesto)", ["EBIT - Ventas", "Activo / Patrimonio", "CxP / Compras"], "Aplica tasa efectiva al EBITDA."),
    choiceRow("El margen operativo se calcula como:", "EBIT / Ventas", ["EBITDA / Activos", "NOPAT / Caja", "Ventas / Patrimonio"], "Relaciona utilidad operativa con ventas.")
  ],
  medio: [
    choiceRow("EBITDA permite comparar empresas del mismo sector porque:", "Reduce efectos de deuda, impuestos y políticas de D&A", ["Elimina todas las diferencias", "Siempre equivale a caja", "Ignora ventas"], "Ayuda a aislar operación, aunque no elimina todos los factores."),
    choiceRow("Una empresa muy endeudada puede mostrar EBITDA alto pero:", "Tener problemas para pagar intereses", ["No tener obligaciones", "No pagar impuestos nunca", "No requerir inversión"], "El EBITDA no descuenta intereses."),
    choiceRow("EBITDA alto no garantiza flujo libre porque:", "Puede requerir inversiones fuertes de mantenimiento", ["Incluye capex", "Es caja exacta", "Elimina inventarios"], "No resta capex ni cambios de capital de trabajo."),
    choiceRow("El margen EBITDA indica:", "Porcentaje de ventas convertido en resultado operativo antes de D&A", ["Días de cobro", "Rotación de inventarios", "Deuda por patrimonio"], "Es EBITDA dividido entre ventas."),
    choiceRow("Si EBITDA crece pero margen EBITDA cae, significa que:", "Las ventas crecieron proporcionalmente más que el EBITDA o subieron costos", ["La rentabilidad relativa mejoró siempre", "No hay cambios", "La deuda desapareció"], "El margen evalúa proporción, no solo monto."),
    choiceRow("NOPAT sirve para observar:", "Resultado operativo después de impuestos", ["Caja bancaria final", "Solo utilidad bruta", "Solo deuda"], "Parte del EBIT y aplica tasa impositiva."),
    choiceRow("Cash Flow operativo aproximado puede calcularse como:", "NOPAT + Depreciación y amortización", ["Ventas - Activos", "ROE × MAF", "CxC + CxP"], "Agrega cargos no desembolsables al resultado operativo después de impuestos."),
    choiceRow("La depreciación se suma al EBITDA porque:", "Es un gasto contable no desembolsable del periodo", ["Es una venta", "Es deuda nueva", "Es impuesto pagado"], "No representa salida de efectivo actual, aunque sí refleja consumo económico de activos."),
    choiceRow("Una advertencia sobre EBITDA es:", "Debe complementarse con deuda, capex y flujo de caja", ["Debe usarse solo", "Sustituye todos los estados", "Elimina análisis financiero"], "El indicador es útil, pero incompleto."),
    choiceRow("EBITDA se enfoca en:", "El giro principal antes de ciertas partidas", ["Dividendos pagados", "Valor de mercado de acciones", "Número de proveedores"], "Su objetivo es leer desempeño operativo.")
  ],
  dificil: [
    choiceRow("Un EBITDA positivo con utilidad neta negativa puede explicarse por:", "Intereses, impuestos, depreciación o amortización elevados", ["Ventas inexistentes", "EBITDA igual a caja", "Patrimonio negativo siempre"], "Las partidas excluidas por EBITDA pueden volver negativa la utilidad neta."),
    choiceRow("Una empresa intensiva en activos puede tener EBITDA atractivo pero requerir:", "Alto capex de mantenimiento", ["Cero inversión", "Menos activos siempre", "Sin depreciación"], "El EBITDA no descuenta inversiones necesarias para sostener capacidad."),
    choiceRow("Si el margen EBITDA sube y el margen operativo no, puede deberse a:", "Mayor peso de depreciación y amortización", ["Menor D&A siempre", "Más intereses", "Menos ventas"], "EBITDA excluye D&A; EBIT sí lo incorpora."),
    choiceRow("Para una empresa con deuda alta, el EBITDA debe compararse con:", "Intereses y vencimientos", ["Solo ventas brutas", "Solo inventario", "Solo nombre legal"], "La capacidad operativa debe alcanzar compromisos financieros."),
    choiceRow("El EBITDA puede ser engañoso si se usa para:", "Concluir que todo el EBITDA es efectivo disponible", ["Comparar operación", "Calcular margen EBITDA", "Analizar tendencia"], "No todo EBITDA se convierte en caja libre."),
    choiceRow("GOPAT se diferencia de NOPAT porque:", "Parte del EBITDA y no del EBIT", ["No considera impuestos", "Es igual a ventas", "Solo usa patrimonio"], "GOPAT aplica impuesto al EBITDA; NOPAT al EBIT."),
    choiceRow("Si depreciación aumenta por nuevas inversiones, EBITDA y EBIT:", "EBIT baja respecto al EBITDA", ["EBITDA baja igual que EBIT siempre", "Ambos son idénticos", "No se pueden calcular"], "La depreciación afecta EBIT, pero se suma para llegar a EBITDA."),
    choiceRow("Una caída del margen EBITDA puede indicar:", "Mayor presión de costos operativos antes de D&A", ["Siempre menos deuda", "Mayor ROE seguro", "Mejor eficiencia garantizada"], "El margen mide cuánto queda de las ventas antes de D&A."),
    choiceRow("EBITDA no incorpora cambios de capital de trabajo; por eso debe revisarse:", "Cobranza, inventarios y pagos", ["Solo dividendos", "Solo marca", "Solo patrimonio histórico"], "Ventas no cobradas o inventarios acumulados pueden consumir caja."),
    choiceRow("Una interpretación profesional del EBITDA debe incluir:", "Margen, tendencia, deuda, capex y flujo de caja", ["Solo el número absoluto", "Solo utilidad bruta", "Solo ventas"], "El indicador requiere contexto operativo y financiero.")
  ]
};

financePracticeBanks["aef-semana-12"] = {
  facil: [
    choiceRow("EBIT 100 y depreciación 20, amortización 10. EBITDA:", "130", ["100", "70", "110"], "\\(EBITDA=100+20+10=130\\)."),
    choiceRow("EBITDA 200 y ventas 1,000. Margen EBITDA:", "20%", ["5%", "80%", "200%"], "\\(200/1000=20\\%\\)."),
    choiceRow("EBIT 150 y ventas 750. Margen operativo:", "20%", ["15%", "5%", "50%"], "\\(150/750=20\\%\\)."),
    choiceRow("EBIT 80 y tasa 30%. NOPAT:", "56", ["24", "80", "104"], "\\(80(1-0.30)=56\\)."),
    choiceRow("EBITDA 120 y tasa 30%. GOPAT:", "84", ["36", "120", "156"], "\\(120(1-0.30)=84\\)."),
    choiceRow("NOPAT 70 y D&A 30. Cash Flow operativo aproximado:", "100", ["40", "70", "30"], "\\(70+30=100\\)."),
    choiceRow("Utilidad bruta 400 y gastos operativos sin D&A 250. EBITDA:", "150", ["650", "250", "400"], "\\(400-250=150\\)."),
    choiceRow("EBITDA 300, depreciación 60 y amortización 20. EBIT:", "220", ["380", "300", "80"], "\\(EBIT=300-60-20=220\\)."),
    choiceRow("Ventas 900 y EBITDA 180. Margen EBITDA:", "20%", ["5%", "18%", "80%"], "\\(180/900=20\\%\\)."),
    choiceRow("Ventas 800 y EBIT 120. Margen operativo:", "15%", ["12%", "20%", "85%"], "\\(120/800=15\\%\\).")
  ],
  medio: [
    choiceRow("Ventas 1,000, costo 600, gastos sin D&A 180, D&A 50. EBITDA:", "220", ["170", "400", "270"], "Utilidad bruta \\(400\\); EBITDA \\(=400-180=220\\)."),
    choiceRow("Con esos datos, EBIT:", "170", ["220", "50", "400"], "\\(EBIT=EBITDA-D\\&A=220-50=170\\)."),
    choiceRow("Con ventas 1,000 y EBIT 170. Margen operativo:", "17%", ["22%", "50%", "83%"], "\\(170/1000=17\\%\\)."),
    choiceRow("Con ventas 1,000 y EBITDA 220. Margen EBITDA:", "22%", ["17%", "78%", "5%"], "\\(220/1000=22\\%\\)."),
    choiceRow("EBIT 170 y tasa 30%. NOPAT:", "119", ["51", "170", "220"], "\\(170(1-0.30)=119\\)."),
    choiceRow("EBITDA 220 y tasa 30%. GOPAT:", "154", ["66", "119", "220"], "\\(220(1-0.30)=154\\)."),
    choiceRow("Ventas 2,000, costo 1,200, gastos sin D&A 350, D&A 100. EBITDA:", "450", ["350", "550", "800"], "Utilidad bruta \\(800\\); EBITDA \\(=800-350=450\\)."),
    choiceRow("Con EBITDA 450 y D&A 100. EBIT:", "350", ["550", "450", "100"], "\\(450-100=350\\)."),
    choiceRow("EBIT 350, intereses 80, impuestos 90. Utilidad neta:", "180", ["350", "270", "620"], "\\(350-80-90=180\\)."),
    choiceRow("EBITDA 450 y ventas 2,000. Margen EBITDA:", "22.5%", ["17.5%", "45%", "77.5%"], "\\(450/2000=22.5\\%\\).")
  ],
  dificil: [
    choiceRow("Ventas 5,000, costo 3,000, gastos sin D&A 900, D&A 300. EBITDA y EBIT:", "1,100 y 800", ["800 y 1,100", "2,000 y 1,100", "1,100 y 1,400"], "Utilidad bruta \\(2,000\\); EBITDA \\(=2,000-900=1,100\\); EBIT \\(=800\\)."),
    choiceRow("Con EBIT 800, intereses 250 e impuestos 180. Utilidad neta:", "370", ["800", "550", "1,230"], "\\(800-250-180=370\\)."),
    choiceRow("Con ventas 5,000 y EBITDA 1,100. Margen EBITDA:", "22%", ["16%", "7.4%", "78%"], "\\(1,100/5,000=22\\%\\)."),
    choiceRow("Con ventas 5,000 y EBIT 800. Margen operativo:", "16%", ["22%", "84%", "8%"], "\\(800/5,000=16\\%\\)."),
    choiceRow("EBIT 800 y tasa efectiva 30%. NOPAT:", "560", ["240", "1,040", "800"], "\\(800(1-0.30)=560\\)."),
    choiceRow("EBITDA 1,100 y tasa efectiva 30%. GOPAT:", "770", ["330", "560", "1,100"], "\\(1,100(1-0.30)=770\\)."),
    choiceRow("NOPAT 560 y D&A 300. Cash Flow operativo aproximado:", "860", ["260", "560", "300"], "\\(560+300=860\\)."),
    choiceRow("EBITDA 1,100, intereses 700 y capex 600. Lectura:", "EBITDA no alcanza por sí solo para concluir holgura de caja", ["Situación perfecta", "No hay deuda", "No se necesita capex"], "Debe revisarse deuda, intereses e inversión; EBITDA no es flujo libre."),
    choiceRow("Si D&A sube de 100 a 250 con mismo EBITDA 600, EBIT:", "Baja de 500 a 350", ["Sube de 500 a 850", "No cambia", "Se vuelve 600"], "EBIT \\(=EBITDA-D\\&A\\)."),
    choiceRow("Ventas 1,500, EBITDA 300, EBIT 180. D&A implícita:", "120", ["480", "300", "180"], "\\(D\\&A=EBITDA-EBIT=120\\).")
  ]
};

const financeCourse = {
  weeks: financeWeeks,
  topics: financeTopics,
  theoryData: financeTheoryData,
  practiceBanks: financePracticeBanks,
  heroTitle: "AEF Análisis de Estados Financieros",
  heroSubtitle: "Aprende a leer, clasificar e interpretar estados financieros con criterio contable."
};

const englishWeeks = [
  { id: "ing-basico", label: "Basic", title: "Essential foundations" },
  { id: "ing-a1", label: "A1", title: "Beginner user" },
  { id: "ing-a2", label: "A2", title: "Pre-intermediate" },
  { id: "ing-b1", label: "B1", title: "Intermediate" },
  { id: "ing-b2", label: "B2", title: "Upper-intermediate" }
];

const englishTopics = [
  {
    id: "ing-basico-topic",
    week: "ing-basico",
    title: "Basic: control the sentence structure",
    question: "Build simple sentences without losing subject, verb and word order.",
    example: "Goal: answer simple questions with be, present simple, pronouns, numbers, dates and everyday vocabulary.",
    skills: [
      { label: "Grammar", title: "Be + present simple", detail: "I am, she is, they are; do/does for routines and questions." },
      { label: "Reading", title: "Short sentences", detail: "Identify who does what, when and where." },
      { label: "Listening", title: "Basic data", detail: "Recognize names, times, places and numbers." },
      { label: "Vocabulary", title: "Daily life", detail: "Family, university, schedules, objects and common actions." }
    ],
    fill: [
      "Essential verbs list with examples.",
      "20-question mini diagnostic.",
      "Common mistakes with do/does and be.",
      "Short audio with specific details."
    ]
  },
  {
    id: "ing-a1-topic",
    week: "ing-a1",
    title: "A1: functional base",
    question: "Understand and produce simple messages about routines, location and description.",
    example: "Goal: read short texts, describe people/places and answer direct questions without word-for-word translation.",
    skills: [
      { label: "Grammar", title: "There is/are + prepositions", detail: "Location, simple quantities, adjectives and possessives." },
      { label: "Reading", title: "Explicit information", detail: "Find visible details in notices, emails and short dialogues." },
      { label: "Listening", title: "Slow conversations", detail: "Catch basic intention and keywords." },
      { label: "Vocabulary", title: "Campus and routines", detail: "Classes, transport, food, schedules and activities." }
    ],
    fill: [
      "A1 structure checklist.",
      "Short notice/email-style readings.",
      "Location and description questions.",
      "Multiple-choice listening practice."
    ]
  },
  {
    id: "ing-a2-topic",
    week: "ing-a2",
    title: "A2: pre-intermediate",
    question: "Connect ideas about the past, future, quantities and comparisons.",
    example: "Goal: solve questions with simple past, future, comparatives, quantifiers and medium-difficulty texts.",
    skills: [
      { label: "Grammar", title: "Past + future", detail: "Regular/irregular verbs, going to, will and time expressions." },
      { label: "Reading", title: "Detail and sequence", detail: "Order events and recognize simple cause." },
      { label: "Listening", title: "Distractors", detail: "Separate the mentioned option from the correct answer." },
      { label: "Vocabulary", title: "Basic connectors", detail: "Because, but, so, then, before, after and comparatives." }
    ],
    fill: [
      "Priority irregular verbs table.",
      "Past vs present exercises.",
      "Readings with event sequence.",
      "Question bank with comparatives."
    ]
  },
  {
    id: "ing-b1-topic",
    week: "ing-b1",
    title: "B1: intermediate placement level",
    question: "Understand main ideas, infer intention and use longer structures.",
    example: "Goal: manage present perfect, modals, basic conditionals, connectors and simple inference reading.",
    skills: [
      { label: "Grammar", title: "Perfect + modals", detail: "Present perfect, should, must, have to, can/could and first conditional." },
      { label: "Reading", title: "Main idea", detail: "Separate thesis, support, detail and author intention." },
      { label: "Listening", title: "Opinion and intention", detail: "Detect agreement, disagreement, recommendation or problem." },
      { label: "Vocabulary", title: "Academic basics", detail: "Frequent words in university contexts." }
    ],
    fill: [
      "Placement verb tense map.",
      "Readings with main idea and inference.",
      "Listening focused on speaker intention.",
      "Timed B1 mock test."
    ]
  },
  {
    id: "ing-b2-topic",
    week: "ing-b2",
    title: "B2: upper-intermediate",
    question: "Solve texts and questions with more abstraction, grammar accuracy and academic vocabulary.",
    example: "Goal: answer difficult questions with passive voice, reported speech, conditionals, relative clauses and collocations.",
    skills: [
      { label: "Grammar", title: "Complex structures", detail: "Passive voice, reported speech, relative clauses and conditionals." },
      { label: "Reading", title: "Advanced inference", detail: "Tone, author stance, purpose and paragraph relationships." },
      { label: "Listening", title: "Fine detail", detail: "Recognize reformulations, contrast and conclusion." },
      { label: "Vocabulary", title: "Collocations", detail: "Phrasal verbs, word formation and academic expressions." }
    ],
    fill: [
      "Priority collocations and phrasal verbs list.",
      "Longer texts with inference and tone.",
      "Reported speech/passive practice.",
      "Final B2 mock test with error review."
    ]
  }
];

const englishTheoryData = {
  "ing-basico": {
    facil: [
      choiceRow("Choose the correct sentence:", "She is a student.", ["She are a student.", "She am a student.", "She be a student."], "With she, use is."),
      choiceRow("Choose the correct question:", "Do you study English?", ["Does you study English?", "Are you study English?", "You do study English?"], "With you in present simple questions, use Do."),
      choiceRow("I ___ from Peru.", "am", ["is", "are", "do"], "With I, use am.")
    ],
    medio: [
      choiceRow("He ___ coffee every morning.", "drinks", ["drink", "drinking", "is drink"], "In present simple, he/she/it takes -s."),
      choiceRow("They ___ at the university now.", "are", ["is", "am", "be"], "They usa are."),
      choiceRow("Choose the negative sentence:", "I do not like math.", ["I not like math.", "I am not like math.", "I does not like math."], "In present simple, I uses do not.")
    ],
    dificil: [
      choiceRow("Choose the best answer: ___ your sister live near campus?", "Does", ["Do", "Is", "Are"], "For he/she present simple questions, use Does."),
      choiceRow("My classes ___ at 8 a.m.", "start", ["starts", "is start", "starting"], "Classes es plural, por eso el verbo queda start."),
      choiceRow("There ___ two books on the desk.", "are", ["is", "am", "be"], "With plural nouns, use there are.")
    ]
  },
  "ing-a1": {
    facil: [
      choiceRow("There ___ a library near my house.", "is", ["are", "am", "do"], "With singular nouns, use there is."),
      choiceRow("The book is ___ the table.", "on", ["at", "to", "from"], "On means on a surface."),
      choiceRow("Choose the correct sentence:", "This is my backpack.", ["This my backpack.", "These is my backpack.", "This are my backpack."], "This is works for singular nouns.")
    ],
    medio: [
      choiceRow("I usually go to class ___ bus.", "by", ["in", "on", "at"], "The correct phrase is by bus."),
      choiceRow("How ___ students are in your class?", "many", ["much", "any", "some"], "Many is used with plural countable nouns."),
      choiceRow("She has ___ orange notebook.", "an", ["a", "the an", "any"], "Orange starts with a vowel sound.")
    ],
    dificil: [
      choiceRow("Choose the best answer: The classroom is ___ the second floor.", "on", ["in", "at", "to"], "For floors, use on."),
      choiceRow("There aren't ___ chairs in the room.", "any", ["some", "a", "much"], "In plural negative sentences, any is commonly used."),
      choiceRow("My brother's car means:", "The car belongs to my brother", ["My brother is a car", "The car is my brothers", "My brother has no car"], "Possessive 's shows ownership.")
    ]
  },
  "ing-a2": {
    facil: [
      choiceRow("Yesterday, I ___ to the library.", "went", ["go", "goes", "going"], "Yesterday exige pasado; go cambia a went."),
      choiceRow("Tomorrow, we ___ study for the test.", "will", ["did", "was", "went"], "Will marca futuro."),
      choiceRow("This exam is ___ than the last one.", "easier", ["easy", "more easy", "easiest"], "Easy cambia a easier en comparativo.")
    ],
    medio: [
      choiceRow("I didn't ___ the answer.", "know", ["knew", "knows", "known"], "After didn't, use the base form of the verb."),
      choiceRow("There is ___ milk in the fridge.", "some", ["many", "a few", "any one"], "Milk is uncountable; some works in affirmative sentences."),
      choiceRow("She is going to ___ a new course.", "take", ["took", "takes", "taking"], "After going to, use the base form.")
    ],
    dificil: [
      choiceRow("Choose the correct sentence:", "I have fewer classes than my friend.", ["I have less classes than my friend.", "I have few class than my friend.", "I have fewer class than my friend."], "Fewer is used with plural countable nouns."),
      choiceRow("When I arrived, the class ___ already started.", "had", ["has", "was", "did"], "Had already started forma past perfect."),
      choiceRow("If it rains, I ___ stay home.", "will", ["would", "did", "was"], "First conditional: if + present, will + verb.")
    ]
  },
  "ing-b1": {
    facil: [
      choiceRow("I have lived here ___ 2022.", "since", ["for", "during", "ago"], "Since marks the starting point."),
      choiceRow("You ___ submit the form today. It is required.", "must", ["might", "would", "can to"], "Must expresses strong obligation."),
      choiceRow("If I study, I ___ pass.", "will", ["would", "had", "was"], "First conditional.")
    ],
    medio: [
      choiceRow("Choose the best connector: I was tired; ___, I finished the assignment.", "however", ["because", "so", "although of"], "However introduce contraste entre dos ideas."),
      choiceRow("The main idea of a paragraph is usually:", "The central point the author wants to communicate", ["A random example", "Only the final word", "A grammar mistake"], "Main idea resume el punto central."),
      choiceRow("She has never ___ sushi.", "eaten", ["ate", "eat", "eating"], "Present perfect usa participio: eaten.")
    ],
    dificil: [
      choiceRow("Choose the correct sentence:", "If I had more time, I would practice listening.", ["If I have more time, I would practice listening.", "If I had more time, I will practice listening.", "If I would have more time, I practice listening."], "Second conditional: if + past, would + verb."),
      choiceRow("The phrase 'in contrast' signals:", "Opposition", ["Cause", "Example only", "Sequence"], "In contrast signals difference or opposition."),
      choiceRow("A speaker says 'I guess that might work.' The tone is:", "Uncertain", ["Completely sure", "Angry", "Impossible"], "Might and I guess reduce certainty.")
    ]
  },
  "ing-b2": {
    facil: [
      choiceRow("The report ___ by the team yesterday.", "was written", ["wrote", "has wrote", "was writing by"], "Passive voice: was/were + past participle."),
      choiceRow("She said she ___ busy.", "was", ["is", "will", "be"], "In reported speech, the verb tense often shifts back."),
      choiceRow("Students ___ submit late work may lose points.", "who", ["which", "where", "whose place"], "Who se refiere a personas.")
    ],
    medio: [
      choiceRow("Choose the best option: The proposal was rejected ___ its lack of evidence.", "due to", ["although", "despite of", "because"], "Due to introduce causa nominal."),
      choiceRow("A text's tone refers to:", "The author's attitude toward the subject", ["Only the number of paragraphs", "The title length", "The font"], "Tone es la actitud o postura del autor."),
      choiceRow("Choose the correct collocation:", "make a decision", ["do a decision", "take a homework", "make an exam"], "The correct collocation is make a decision.")
    ],
    dificil: [
      choiceRow("If the instructions had been clearer, fewer students ___ mistakes.", "would have made", ["would make", "will have made", "had made"], "Third conditional: would have + past participle."),
      choiceRow("The sentence 'The results were not insignificant' uses:", "Understatement", ["Direct command", "Simple past only", "A question tag"], "The double negative softens or indirectly emphasizes the idea."),
      choiceRow("A paragraph that challenges a previous claim is most likely:", "Presenting a counterargument", ["Repeating the same example", "Defining a word only", "Listing dates"], "Challenging a claim introduce contraargumento.")
    ]
  }
};

const englishCourse = {
  weeks: englishWeeks,
  topics: englishTopics,
  theoryData: englishTheoryData,
  practiceBanks: {},
  heroTitle: "ING UPC English Placement",
  heroSubtitle: "Prepare by level: Basic, A1, A2, B1 and B2 with grammar, reading, listening and vocabulary.",
  subtitle: "Basic · A1 · A2 · B1 · B2"
};

const courseContent = {
  "economia-produccion": productionCourse,
  "poder-mercado": {
    weeks: marketWeeks,
    topics: marketTopics,
    theoryData: marketTheoryData,
    practiceBanks: marketPracticeBanks,
    heroTitle: "EPM Economía de la Empresa con Poder de Mercado",
    heroSubtitle: "Estudia monopolio, oligopolio, concentración, teoría de juegos e información asimétrica."
  },
  "analisis-estados-financieros": financeCourse,
  "ingles-placement-upc": englishCourse
};

function numericOptions(answer, index) {
  const base = Number(answer);
  const step = Math.max(1, Math.round(Math.abs(base) * 0.2));
  const raw = [base, base + step, base - step, base + step * 2];
  const unique = [];
  raw.forEach((value) => {
    const rounded = Number.isInteger(base) ? Math.round(value) : Number(value.toFixed(4));
    if (!unique.includes(rounded)) unique.push(rounded);
  });
  while (unique.length < 4) unique.push(Number((base + unique.length + index + 1).toFixed(4)));
  return rotateOptions(unique.slice(0, 4).map((value) => String(value)), index + String(answer).length);
}

function practiceBank(weekId) {
  const bank = practiceBanks[weekId];
  if (!bank) return [];
  if (!Array.isArray(bank)) {
    const levels = state.practiceLevel === "todas" ? ["facil", "medio", "dificil"] : [state.practiceLevel];
    return levels.flatMap((difficulty) => (bank[difficulty] || []).map(buildChoiceQuestion));
  }
  return bank.map((question, index) => {
    const options = numericOptions(question.answer, index);
    return {
      type: "choice",
      prompt: question.prompt,
      options,
      answer: options.indexOf(String(question.answer)),
      explain: question.explain
    };
  });
}

function optionsLayoutClass(options) {
  const longest = Math.max(...options.map((option) => option.length));
  if (longest <= 18) return "options options-short";
  if (longest <= 34) return "options options-medium";
  return "options options-long";
}

function renderWeekSelects() {
  const options = weeks.map((week) => `<option value="${week.id}">${week.label} · ${week.title}</option>`).join("");
  document.querySelector("#theoryWeek").innerHTML = options;
  document.querySelector("#practiceWeek").innerHTML = options;
  document.querySelector("#theoryWeek").value = state.weekId;
  document.querySelector("#practiceWeek").value = state.weekId;
}

function renderChoiceQuiz(weekId, level = state.theoryLevel) {
  state.theoryLevel = level;
  document.querySelectorAll(".level-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
  const questions = theoryBank(weekId, level);
  const container = document.querySelector("#theoryQuiz");
  const result = document.querySelector("#theoryResult");
  result.hidden = true;
  if (!questions.length) {
    container.innerHTML = `<article class="empty-state"><h3>Examen teórico pendiente</h3><p>La estructura ya está creada. Todavía no hay preguntas para esta semana.</p></article>`;
    typesetMath();
    return;
  }
  const updateTheoryProgress = () => {
    const answered = container.querySelectorAll(".question.locked").length;
    const progress = container.querySelector(".quiz-progress strong");
    if (progress) progress.textContent = `${answered}/${questions.length}`;
  };
  container.innerHTML = `<div class="quiz-progress"><span>Progreso del examen</span><strong>0/${questions.length}</strong></div>` + questions.map((question, index) => `
    <article class="question" data-question="${index}">
      <header><h3>${index + 1}. ${escapeHtml(question.prompt)}</h3><strong>${level === "todas" ? "Todas" : level}</strong></header>
      ${question.graph || ""}
      <div class="${optionsLayoutClass(question.options)}">
        ${question.options.map((option, optionIndex) => `
          <label class="option"><input type="radio" name="theory-${weekId}-${index}" value="${optionIndex}" /><span><strong class="option-letter">${"ABCD"[optionIndex]}</strong>${escapeHtml(option)}</span></label>
        `).join("")}
      </div>
      <div class="question-actions"><button class="ghost-btn verify-question" data-verify="${index}">Verificar respuesta</button></div>
      <div class="feedback" hidden></div>
    </article>
  `).join("") + `<div class="check-row"><button class="check-btn" id="checkTheory">Calificar teoría</button></div>`;

  container.querySelectorAll(".verify-question").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.verify);
      const question = questions[index];
      const card = container.querySelector(`[data-question="${index}"]`);
      const selected = container.querySelector(`input[name="theory-${weekId}-${index}"]:checked`);
      const feedback = container.querySelector(`[data-question="${index}"] .feedback`);
      const correct = selected && Number(selected.value) === question.answer;
      feedback.hidden = false;
      feedback.classList.toggle("wrong", !correct);
      if (!selected) {
        feedback.textContent = "Selecciona una alternativa antes de verificar. La explicación aparecerá aquí.";
        return;
      }
      const correctAnswer = question.options[question.answer];
      feedback.textContent = correct
        ? `Correcto. ${question.explain}`
        : `Incorrecto. La respuesta correcta es: ${correctAnswer}. ${question.explain}`;
      card.querySelectorAll(".option").forEach((option, optionIndex) => {
        option.classList.toggle("correct", optionIndex === question.answer);
        option.classList.toggle("incorrect", selected && Number(selected.value) === optionIndex && !correct);
      });
      card.classList.add("locked");
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        input.closest(".option")?.classList.add("locked");
      });
      button.disabled = true;
      button.textContent = "Respuesta verificada";
      updateTheoryProgress();
      typesetMath();
    });
  });

  document.querySelector("#checkTheory").addEventListener("click", () => {
    let score = 0;
    questions.forEach((question, index) => {
      const card = container.querySelector(`[data-question="${index}"]`);
      const selected = container.querySelector(`input[name="theory-${weekId}-${index}"]:checked`);
      const feedback = container.querySelector(`[data-question="${index}"] .feedback`);
      const correct = selected && Number(selected.value) === question.answer;
      if (correct) score += 1;
      feedback.hidden = false;
      feedback.classList.toggle("wrong", !correct);
      const correctAnswer = question.options[question.answer];
      feedback.textContent = selected
        ? `${correct ? "Correcto." : "Revisa esta."} ${question.explain}`
        : `Sin responder. La respuesta correcta es: ${correctAnswer}. ${question.explain}`;
      card.querySelectorAll(".option").forEach((option, optionIndex) => {
        option.classList.toggle("correct", optionIndex === question.answer);
        option.classList.toggle("incorrect", selected && Number(selected.value) === optionIndex && !correct);
      });
      card.classList.add("locked");
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        input.closest(".option")?.classList.add("locked");
      });
      card.querySelector(".verify-question").disabled = true;
      card.querySelector(".verify-question").textContent = "Respuesta verificada";
    });
    document.querySelector("#checkTheory").disabled = true;
    updateTheoryProgress();
    result.hidden = false;
    result.innerHTML = `<strong>Resultado: ${score}/${questions.length}</strong><p>${score >= Math.ceil(questions.length * 0.8) ? "Muy buen dominio teórico." : "Repasa la guía y vuelve a intentar."}</p>`;
    typesetMath();
  });
  typesetMath();
}

function renderPracticeQuiz(weekId, level = state.practiceLevel) {
  state.practiceLevel = level;
  document.querySelectorAll(".practice-level-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.practiceLevel === level);
  });
  const questions = practiceBank(weekId);
  const container = document.querySelector("#practiceQuiz");
  const result = document.querySelector("#practiceResult");
  result.hidden = true;
  if (!questions.length) {
    container.innerHTML = `<article class="empty-state"><h3>Ejercicios prácticos pendientes</h3><p>La estructura ya está creada. Todavía no hay ejercicios para esta semana.</p></article>`;
    typesetMath();
    return;
  }
  container.innerHTML = questions.map((question, index) => `
    <article class="question" data-practice="${index}">
      <header><h3>${index + 1}. ${escapeHtml(question.prompt)}</h3><strong>${level === "todas" ? "Todas" : level}</strong></header>
      ${question.graph || ""}
      <div class="${optionsLayoutClass(question.options)}">
        ${question.options.map((option, optionIndex) => `
          <label class="option"><input type="radio" name="practice-${weekId}-${index}" value="${optionIndex}" /><span><strong class="option-letter">${"ABCD"[optionIndex]}</strong>${escapeHtml(option)}</span></label>
        `).join("")}
      </div>
      <div class="question-actions"><button class="ghost-btn verify-practice" data-verify-practice="${index}">Verificar respuesta</button></div>
      <div class="feedback" hidden></div>
    </article>
  `).join("") + `<div class="check-row"><button class="check-btn" id="checkPractice">Calificar ejercicios</button></div>`;

  container.querySelectorAll(".verify-practice").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.verifyPractice);
      const question = questions[index];
      const card = container.querySelector(`[data-practice="${index}"]`);
      const selected = container.querySelector(`input[name="practice-${weekId}-${index}"]:checked`);
      const feedback = card.querySelector(".feedback");
      const correct = selected && Number(selected.value) === question.answer;
      feedback.hidden = false;
      feedback.classList.toggle("wrong", !correct);
      if (!selected) {
        feedback.textContent = "Selecciona una alternativa antes de verificar. La explicación aparecerá aquí.";
        return;
      }
      const correctAnswer = question.options[question.answer];
      feedback.textContent = correct
        ? `Correcto. ${question.explain}`
        : `Incorrecto. La respuesta correcta es: ${correctAnswer}. ${question.explain}`;
      card.querySelectorAll(".option").forEach((option, optionIndex) => {
        option.classList.toggle("correct", optionIndex === question.answer);
        option.classList.toggle("incorrect", selected && Number(selected.value) === optionIndex && !correct);
        option.classList.add("locked");
      });
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });
      button.disabled = true;
      button.textContent = "Respuesta verificada";
      typesetMath();
    });
  });

  document.querySelector("#checkPractice").addEventListener("click", () => {
    let score = 0;
    questions.forEach((question, index) => {
      const card = container.querySelector(`[data-practice="${index}"]`);
      const selected = container.querySelector(`input[name="practice-${weekId}-${index}"]:checked`);
      const feedback = card.querySelector(".feedback");
      const correct = selected && Number(selected.value) === question.answer;
      if (correct) score += 1;
      feedback.hidden = false;
      feedback.classList.toggle("wrong", !correct);
      const correctAnswer = question.options[question.answer];
      feedback.textContent = selected
        ? (correct ? `Correcto. ${question.explain}` : `Ajusta tu procedimiento. Respuesta correcta: ${correctAnswer}. ${question.explain}`)
        : `Sin responder. Respuesta correcta: ${correctAnswer}. ${question.explain}`;
      card.querySelectorAll(".option").forEach((option, optionIndex) => {
        option.classList.toggle("correct", optionIndex === question.answer);
        option.classList.toggle("incorrect", selected && Number(selected.value) === optionIndex && !correct);
        option.classList.add("locked");
      });
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });
      card.querySelector(".verify-practice").disabled = true;
      card.querySelector(".verify-practice").textContent = "Respuesta verificada";
    });
    document.querySelector("#checkPractice").disabled = true;
    result.hidden = false;
    result.innerHTML = `<strong>Resultado: ${score}/${questions.length}</strong><p>${score >= Math.ceil(questions.length * 0.8) ? "Buen manejo práctico." : "Revisa fórmulas y ejemplos antes de repetir."}</p>`;
    typesetMath();
  });
  typesetMath();
}

topicList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  state.topicId = button.dataset.topic;
  renderTopics();
  renderGuide();
});

weekTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-week]");
  if (!button) return;
  selectWeek(button.dataset.week);
});

document.querySelector("#markTopic").addEventListener("click", () => {
  state.viewed.add(state.topicId);
  renderTopics();
  updateProgress();
});

document.querySelectorAll(".week-mode-btn[data-section]").forEach((button) => {
  button.addEventListener("click", () => activateSection(button.dataset.section));
});

courseList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-course]");
  if (!card) return;
  openCourse(card.dataset.course);
});

toggleClassesButton?.addEventListener("click", () => {
  const isHidden = classesPanel.classList.toggle("hidden");
  toggleClassesButton.setAttribute("aria-expanded", String(!isHidden));
  toggleClassesButton.textContent = isHidden ? "Ver clases" : "Ocultar clases";
  if (!isHidden) {
    classesPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.querySelector("#backToCourses").addEventListener("click", () => showOnly("courses"));

document.querySelector("#theoryWeek").addEventListener("change", (event) => selectWeek(event.target.value));
document.querySelector("#practiceWeek").addEventListener("change", (event) => selectWeek(event.target.value));
document.querySelector("#resetTheory").addEventListener("click", () => renderChoiceQuiz(state.weekId, state.theoryLevel));
document.querySelector("#resetPractice").addEventListener("click", () => renderPracticeQuiz(state.weekId, state.practiceLevel));
document.querySelectorAll(".level-btn").forEach((button) => {
  button.addEventListener("click", () => renderChoiceQuiz(state.weekId, button.dataset.level));
});
document.querySelectorAll(".practice-level-btn").forEach((button) => {
  button.addEventListener("click", () => renderPracticeQuiz(state.weekId, button.dataset.practiceLevel));
});

renderWeekSelects();
renderCourses();
renderWeekTabs();
renderTopics();
renderGuide();
renderChoiceQuiz(state.weekId);
renderPracticeQuiz(state.weekId);
renderBalancePracticeArea();
updateProgress();
startPlacementCountdown();
showOnly("courses");
