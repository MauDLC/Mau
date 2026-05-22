let weeks = [
  { id: "semana-01", label: "Semana 01", title: "Tecnología de producción" },
  { id: "semana-02-03", label: "Semana 02-03", title: "Maximización del beneficio" },
  { id: "semana-04", label: "Semana 04", title: "Minimización del costo" },
  { id: "semana-05", label: "Semana 05", title: "Geometría de costos" }
];

const courses = [
  {
    id: "economia-produccion",
    title: "Economía de la Producción Competitiva",
    subtitle: "Unidad 1",
    description: "Guía, teoría y ejercicios de producción, beneficios y costos."
  },
  {
    id: "poder-mercado",
    title: "Economía de la Empresa con Poder de Mercado",
    subtitle: "Unidades 1-4",
    description: "Monopolio, oligopolio, teoría de juegos, concentración e información asimétrica."
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
      "El producto marginal mide cuánto aumenta y cuando sube un factor, manteniendo los demás constantes. Es una idea de corto plazo cuando algún factor no puede ajustarse.",
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
      "El costo fijo medio cae cuando aumenta y porque el mismo costo fijo se reparte entre más unidades.",
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
  topicId: topics[0].id,
  theoryLevel: "facil",
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

function typesetMath() {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function currentTopic() {
  return topics.find((topic) => topic.id === state.topicId) || topics[0];
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
  topicList.innerHTML = topics.map((topic, index) => `
    <button class="module-card ${topic.id === state.topicId ? "active" : ""} ${state.viewed.has(topic.id) ? "done" : ""}" data-topic="${topic.id}">
      <small>${weekLabel(topic.week)}</small>
      <h3>${index + 1}. ${topic.title}</h3>
      <span>${topic.question}</span>
    </button>
  `).join("");
}

function renderGuide() {
  const topic = currentTopic();
  document.querySelector("#topicEyebrow").textContent = `${weekLabel(topic.week)} · Concepto clave`;
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

function updateProgress() {
  const pct = Math.round((state.viewed.size / topics.length) * 100);
  progressText.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
  progressHint.textContent = `${state.viewed.size} de ${topics.length} temas completados.`;
}

function activateSection(sectionId) {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
  document.querySelectorAll(".app-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
  document.querySelector(".workspace")?.classList.toggle("exam-mode", sectionId !== "learn");
}

function showOnly(view) {
  coursesView.classList.toggle("hidden", view !== "courses");
  appShell.classList.toggle("hidden", view !== "app");
}

function renderCourses() {
  courseList.innerHTML = courses.map((course) => `
    <button class="course-card" data-course="${course.id}">
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
  state.topicId = topics[0].id;
  state.theoryLevel = "facil";
  state.viewed = new Set();
  document.querySelector("#courseHeroTitle").textContent = selectedCourse.heroTitle;
  document.querySelector("#courseHeroSubtitle").textContent = selectedCourse.heroSubtitle;
  renderWeekSelects();
  renderTopics();
  renderGuide();
  renderChoiceQuiz(weeks[0].id, "facil");
  renderPracticeQuiz(weeks[0].id);
  updateProgress();
  showOnly("app");
  activateSection("learn");
  window.scrollTo({ top: 0, behavior: "instant" });
  typesetMath();
}

function optionQuestion(prompt, options, answer, explain) {
  return { type: "choice", prompt, options, answer, explain };
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
  const levels = level === "todas" ? ["facil", "medio", "dificil"] : [level];
  return levels.flatMap((difficulty) => bank[difficulty].map(makeTheoryQuestion));
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

const courseContent = {
  "economia-produccion": productionCourse,
  "poder-mercado": {
    weeks: marketWeeks,
    topics: marketTopics,
    theoryData: makeMarketTheoryData(marketWeeks),
    practiceBanks: makeMarketPracticeBanks(marketWeeks),
    heroTitle: "Economía de la Empresa con Poder de Mercado",
    heroSubtitle: "Estudia monopolio, oligopolio, concentración, teoría de juegos e información asimétrica."
  }
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
  return practiceBanks[weekId].map((question, index) => {
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

function renderWeekSelects() {
  const options = weeks.map((week) => `<option value="${week.id}">${week.label} · ${week.title}</option>`).join("");
  document.querySelector("#theoryWeek").innerHTML = options;
  document.querySelector("#practiceWeek").innerHTML = options;
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
  container.innerHTML = questions.map((question, index) => `
    <article class="question" data-question="${index}">
      <header><h3>${index + 1}. ${escapeHtml(question.prompt)}</h3><strong>${level === "todas" ? "Todas" : level}</strong></header>
      <div class="options">
        ${question.options.map((option, optionIndex) => `
          <label class="option"><input type="radio" name="theory-${weekId}-${index}" value="${optionIndex}" /><span>${escapeHtml(option)}</span></label>
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
      card.classList.add("locked");
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        input.closest(".option")?.classList.add("locked");
      });
      button.disabled = true;
      button.textContent = "Respuesta verificada";
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
      card.classList.add("locked");
      card.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        input.closest(".option")?.classList.add("locked");
      });
      card.querySelector(".verify-question").disabled = true;
      card.querySelector(".verify-question").textContent = "Respuesta verificada";
    });
    document.querySelector("#checkTheory").disabled = true;
    result.hidden = false;
    result.innerHTML = `<strong>Resultado: ${score}/${questions.length}</strong><p>${score >= Math.ceil(questions.length * 0.8) ? "Muy buen dominio teórico." : "Repasa la guía y vuelve a intentar."}</p>`;
    typesetMath();
  });
  typesetMath();
}

function renderPracticeQuiz(weekId) {
  const questions = practiceBank(weekId);
  const container = document.querySelector("#practiceQuiz");
  const result = document.querySelector("#practiceResult");
  result.hidden = true;
  container.innerHTML = questions.map((question, index) => `
    <article class="question" data-practice="${index}">
      <header><h3>${index + 1}. ${escapeHtml(question.prompt)}</h3><strong>1 punto</strong></header>
      <div class="options">
        ${question.options.map((option, optionIndex) => `
          <label class="option"><input type="radio" name="practice-${weekId}-${index}" value="${optionIndex}" /><span>${escapeHtml(option)}</span></label>
        `).join("")}
      </div>
      <div class="feedback" hidden></div>
    </article>
  `).join("") + `<div class="check-row"><button class="check-btn" id="checkPractice">Calificar ejercicios</button></div>`;

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
        ? `${correct ? "Correcto." : "Ajusta tu procedimiento."} Respuesta correcta: ${correctAnswer}. ${question.explain}`
        : `Sin responder. Respuesta correcta: ${correctAnswer}. ${question.explain}`;
    });
    result.hidden = false;
    result.innerHTML = `<strong>Resultado: ${score}/${questions.length}</strong><p>${score >= 16 ? "Buen manejo práctico." : "Revisa fórmulas y ejemplos antes de repetir."}</p>`;
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

document.querySelector("#markTopic").addEventListener("click", () => {
  state.viewed.add(state.topicId);
  renderTopics();
  updateProgress();
});

document.querySelectorAll(".nav-link[data-section]").forEach((button) => {
  button.addEventListener("click", () => activateSection(button.dataset.section));
});

courseList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-course]");
  if (!card) return;
  openCourse(card.dataset.course);
});

document.querySelector("#backToCourses").addEventListener("click", () => showOnly("courses"));

document.querySelector("#theoryWeek").addEventListener("change", (event) => renderChoiceQuiz(event.target.value, state.theoryLevel));
document.querySelector("#practiceWeek").addEventListener("change", (event) => renderPracticeQuiz(event.target.value));
document.querySelector("#resetTheory").addEventListener("click", () => renderChoiceQuiz(document.querySelector("#theoryWeek").value, state.theoryLevel));
document.querySelector("#resetPractice").addEventListener("click", () => renderPracticeQuiz(document.querySelector("#practiceWeek").value));
document.querySelectorAll(".level-btn").forEach((button) => {
  button.addEventListener("click", () => renderChoiceQuiz(document.querySelector("#theoryWeek").value, button.dataset.level));
});

renderWeekSelects();
renderCourses();
renderTopics();
renderGuide();
renderChoiceQuiz(weeks[0].id);
renderPracticeQuiz(weeks[0].id);
updateProgress();
showOnly("courses");
