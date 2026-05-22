const weeks = [
  { id: "semana-01", label: "Semana 01", title: "Tecnología de producción" },
  { id: "semana-02-03", label: "Semana 02-03", title: "Maximización del beneficio" },
  { id: "semana-04", label: "Semana 04", title: "Minimización del costo" },
  { id: "semana-05", label: "Semana 05", title: "Geometría de costos" }
];

const topics = [
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
    formulas: ["\\[PMg_i=\\frac{\\partial y}{\\partial x_i}\\]", "\\[RTS=-\\frac{PMg_1}{PMg_2}\\]"],
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
    formulas: ["\\[\\pi=p\\,y-w_1x_1-w_2x_2\\]", "\\[p\\cdot PMg_i=w_i\\]", "\\[IMg=CMg\\]"],
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
    formulas: ["\\[\\min_{x_1,x_2} C=w_1x_1+w_2x_2\\quad\\text{s.a.}\\quad y=f(x_1,x_2)\\]", "\\[x_2=\\frac{C}{w_2}-\\frac{w_1}{w_2}x_1\\]", "\\[RTS=-\\frac{w_1}{w_2}\\]"],
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
    formulas: ["\\[C(y)=C_v(y)+F\\]", "\\[CMe=CVMe+CFMe\\]", "\\[CMg=\\frac{\\partial C}{\\partial y}\\]"],
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
    formulas: ["\\[EC=\\frac{CMg}{CMe}\\]", "\\[IEE=1-EC\\]", "\\[EA=\\frac{C(x)+C(y)-C(x,y)}{C(x,y)}\\]"],
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
  topicId: topics[0].id,
  theoryLevel: "facil",
  viewed: new Set()
};

const topicList = document.querySelector("#topicList");
const guideView = document.querySelector("#guideView");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const progressHint = document.querySelector("#progressHint");

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
  const common = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
      </marker>
    </defs>
    <rect x="18" y="16" width="384" height="236" rx="14" class="graph-bg" />
    <line x1="64" y1="220" x2="360" y2="220" class="axis" marker-end="url(#arrow)" />
    <line x1="64" y1="220" x2="64" y2="44" class="axis" marker-end="url(#arrow)" />`;
  const graphs = {
    production: `${common}
      <path d="M78 204 C118 176, 145 137, 184 106 C228 70, 285 56, 344 50" class="curve"/>
      <line x1="112" y1="183" x2="112" y2="220" class="guide-line"/><line x1="112" y1="183" x2="64" y2="183" class="guide-line"/>
      <text x="292" y="58" class="graph-label">producción</text><text x="342" y="244" class="axis-label">insumo</text><text x="30" y="52" class="axis-label">y</text>`,
    isoquant: `${common}
      <path d="M92 194 C132 130, 202 82, 330 58" class="curve"/>
      <line x1="92" y1="62" x2="342" y2="205" class="cost-line"/>
      <circle cx="204" cy="126" r="7" class="point"/><circle cx="204" cy="126" r="13" class="point-ring"/>
      <text x="272" y="79" class="graph-label">isocuanta</text><text x="266" y="190" class="graph-label red">isocosto</text><text x="214" y="119" class="graph-label">óptimo</text>
      <text x="344" y="244" class="axis-label">x₁</text><text x="32" y="52" class="axis-label">x₂</text>`,
    returns: `${common}
      <path d="M82 196 L336 84" class="avg-curve"/>
      <path d="M82 205 C145 170, 224 104, 338 50" class="curve"/>
      <path d="M82 184 C150 132, 238 116, 338 111" class="var-curve"/>
      <text x="275" y="55" class="graph-label">crecientes</text><text x="274" y="93" class="graph-label gold">constantes</text><text x="256" y="130" class="graph-label blue">decrecientes</text>
      <text x="335" y="244" class="axis-label">escala</text><text x="30" y="52" class="axis-label">y</text>`,
    opportunity: `${common}
      <rect x="96" y="110" width="70" height="110" rx="7" class="bar-a"/><rect x="230" y="78" width="70" height="142" rx="7" class="bar-b"/>
      <line x1="166" y1="110" x2="230" y2="78" class="muted-line"/><text x="170" y="96" class="graph-label">costo de oportunidad</text>
      <text x="88" y="244" class="axis-label">contable</text><text x="221" y="244" class="axis-label">económico</text>`,
    profit: `${common}
      <path d="M82 190 C134 126, 214 86, 342 64" class="curve"/>
      <line x1="88" y1="176" x2="340" y2="76" class="cost-line"/>
      <circle cx="216" cy="101" r="7" class="point"/><circle cx="216" cy="101" r="13" class="point-ring"/>
      <text x="232" y="99" class="graph-label">p·PMg = w</text><text x="286" y="72" class="graph-label">producto marginal</text>
      <text x="338" y="244" class="axis-label">x</text><text x="32" y="52" class="axis-label">y</text>`,
    costmin: `${common}
      <path d="M92 194 C132 130, 202 82, 330 58" class="curve"/>
      <line x1="88" y1="58" x2="344" y2="206" class="cost-line"/>
      <line x1="124" y1="88" x2="372" y2="232" class="muted-line"/>
      <circle cx="204" cy="126" r="7" class="point"/><circle cx="204" cy="126" r="13" class="point-ring"/>
      <text x="220" y="122" class="graph-label">costo mínimo</text><text x="266" y="191" class="graph-label red">isocosto menor</text>
      <text x="344" y="244" class="axis-label">x₁</text><text x="32" y="52" class="axis-label">x₂</text>`,
    costcurves: `${common}
      <path d="M82 192 C132 116, 198 122, 340 190" class="avg-curve"/>
      <path d="M84 204 C142 190, 220 50, 346 76" class="curve"/>
      <path d="M82 172 C132 121, 202 139, 338 176" class="var-curve"/>
      <circle cx="190" cy="121" r="5" class="point"/><text x="318" y="82" class="graph-label">CMg</text><text x="314" y="196" class="graph-label gold">CMe</text><text x="305" y="166" class="graph-label blue">CVMe</text>
      <text x="340" y="244" class="axis-label">y</text><text x="30" y="52" class="axis-label">costo</text>`,
    scale: `${common}
      <path d="M86 82 C150 88, 236 112, 340 170" class="curve"/>
      <path d="M86 176 C154 130, 238 104, 342 90" class="avg-curve"/>
      <line x1="92" y1="176" x2="92" y2="220" class="guide-line"/><line x1="306" y1="96" x2="306" y2="220" class="guide-line"/>
      <text x="226" y="82" class="graph-label">curva de aprendizaje</text><text x="236" y="180" class="graph-label gold">CMe con escala</text>
      <text x="330" y="244" class="axis-label">experiencia</text><text x="30" y="52" class="axis-label">costo</text>`
  };
  return `<svg class="concept-chart" viewBox="0 0 420 270" role="img" aria-label="Gráfico conceptual">${graphs[type] || graphs.production}</svg>`;
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
  progressHint.textContent = `${state.viewed.size} de ${topics.length} temas marcados como vistos.`;
}

function activateSection(sectionId) {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
  document.querySelectorAll(".app-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
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

const theoryData = {
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

const practiceBanks = {
  "semana-01": [
    numberQuestion("Para \\(y=4L^{1/2}K^{1/3}\\), calcula \\(a+b\\).", 0.8333, "\\(\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}\\)."),
    textQuestion("Con \\(a+b=\\frac{5}{6}\\), clasifica rendimientos.", "decrecientes", "Como \\(\\frac{5}{6}<1\\)."),
    numberQuestion("Para \\(y=2x_1^{1/3}x_2^{2/3}\\), calcula \\(a+b\\).", 1, "\\(\\frac{1}{3}+\\frac{2}{3}=1\\)."),
    textQuestion("Con \\(a+b=1\\), clasifica rendimientos.", "constantes", "Igual a \\(1\\)."),
    numberQuestion("Si \\(PMg_1=8\\) y \\(PMg_2=4\\), calcula \\(RTS=-\\frac{PMg_1}{PMg_2}\\).", -2, "\\(-\\frac{8}{4}=-2\\)."),
    numberQuestion("Si \\(y\\) pasa de \\(50\\) a \\(62\\) cuando \\(x\\) aumenta \\(3\\), calcula el \\(PMg\\) promedio.", 4, "\\(\\frac{62-50}{3}=4\\)."),
    numberQuestion("Para \\(y=10L\\), calcula \\(PMg_L\\).", 10, "La derivada de \\(10L\\) respecto a \\(L\\) es \\(10\\)."),
    textQuestion("Factores usados en proporción rígida: tecnología de...", "proporciones fijas", "Tipo Leontief."),
    textQuestion("Isocuantas rectas corresponden a...", "sustitutos perfectos", "Sustitución constante."),
    numberQuestion("Si triplicas insumos con rendimientos constantes, y se multiplica por...", 3, "Misma proporción.")
  ],
  "semana-02-03": [
    numberQuestion("Si \\(p=8\\) y \\(PMg=3\\), calcula \\(p\\cdot PMg\\).", 24, "\\(8\\cdot3=24\\)."),
    textQuestion("Si \\(p\\cdot PMg\\)>w, conviene usar...", "mas", "El aporte supera el costo."),
    textQuestion("Si \\(p\\cdot PMg\\)<w, conviene usar...", "menos", "El costo supera el aporte."),
    numberQuestion("\\(IT=900\\) y \\(CT=650\\). Calcula el beneficio.", 250, "\\(\\pi=900-650=250\\)."),
    numberQuestion("Beneficio contable \\(500\\) y costo de oportunidad \\(180\\). Calcula el beneficio económico.", 320, "\\(500-180=320\\)."),
    numberQuestion("Si \\(w=40\\) y \\(p=10\\), calcula el \\(PMg\\) óptimo.", 4, "\\(PMg=\\frac{w}{p}=\\frac{40}{10}=4\\)."),
    textQuestion("Si \\(IMg>CMg\\), la producción debe...", "aumentar", "La unidad extra suma beneficio."),
    textQuestion("Si \\(IMg<CMg\\), la producción debe...", "reducir", "La unidad extra resta beneficio."),
    numberQuestion("Ingreso marginal \\(15\\) y costo marginal \\(11\\). Calcula el cambio en beneficio.", 4, "\\(15-11=4\\)."),
    numberQuestion("Ingreso marginal \\(9\\) y costo marginal \\(14\\). Calcula el cambio en beneficio.", -5, "\\(9-14=-5\\).")
  ],
  "semana-04": [
    numberQuestion("Si \\(w_1=10\\) y \\(w_2=5\\), pendiente de isocosto.", -2, "-\\(w_1/w_2\\)."),
    numberQuestion("Si \\(C=300\\) y \\(w_2=6\\), calcula el intercepto vertical.", 50, "\\(\\frac{C}{w_2}=\\frac{300}{6}=50\\)."),
    numberQuestion("\\(PMg_1=8\\) y \\(PMg_2=4\\). Calcula \\(RTS\\).", -2, "\\(-\\frac{8}{4}=-2\\)."),
    textQuestion("Si \\(RTS=-2\\) y \\(-\\frac{w_1}{w_2}=-2\\), hay...", "tangencia", "Las pendientes son iguales."),
    numberQuestion("\\(C=10x_1+5x_2\\), \\(x_1=4\\), \\(x_2=8\\). Costo.", 80, "40+40."),
    numberQuestion("\\(1\\) médico y \\(4\\) enfermeras por paciente. Para \\(20\\) pacientes, calcula enfermeras.", 80, "\\(4\\cdot20=80\\)."),
    numberQuestion("Costo médico \\(6000\\) y \\(4\\) enfermeras de \\(3000\\). Calcula el costo por paciente.", 18000, "\\(6000+4\\cdot3000=18000\\)."),
    textQuestion("Solución de sustitutos perfectos suele ser de...", "esquina", "Se elige el factor más barato por unidad efectiva."),
    numberQuestion("Si \\(w_1=8\\) y la tangencia requiere \\(RTS=-2\\), calcula \\(w_2\\).", 4, "\\(\\frac{w_1}{w_2}=2\\Rightarrow w_2=4\\)."),
    textQuestion("Fijar y y buscar menor C es...", "minimizacion", "Problema de costos.")
  ],
  "semana-05": [
    numberQuestion("\\(C(y)=y^2+1\\). Calcula \\(CMg\\) en \\(y=5\\).", 10, "\\(CMg=2y=10\\)."),
    numberQuestion("\\(F=100\\) e \\(y=20\\). Calcula \\(CFMe\\).", 5, "\\(CFMe=\\frac{100}{20}=5\\)."),
    numberQuestion("\\(CMe=30\\) y \\(CVMe=22\\). Calcula \\(CFMe\\).", 8, "\\(CFMe=30-22=8\\)."),
    numberQuestion("\\(CMg=12\\) y \\(CMe=16\\). Calcula \\(EC\\).", 0.75, "\\(EC=\\frac{12}{16}=0.75\\)."),
    numberQuestion("\\(EC=0.75\\). Calcula \\(IEE\\).", 0.25, "\\(IEE=1-0.75=0.25\\)."),
    textQuestion("IEE positivo indica...", "economias", "Economías de escala."),
    numberQuestion("\\(CMg=24\\) y \\(CMe=12\\). Calcula \\(EC\\).", 2, "\\(EC=\\frac{24}{12}=2\\)."),
    textQuestion("EC mayor que 1 indica...", "deseconomias", "Costo crece más que proporcionalmente."),
    numberQuestion("C=500 e y=25. CMe.", 20, "500/25."),
    textQuestion("Si \\(CMg<CMe\\), CMe...", "baja", "Marginal menor reduce promedio.")
  ]
};

function practiceBank(weekId) {
  const rows = practiceBanks[weekId];
  return [...rows, ...rows].slice(0, 20);
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
      <input type="${question.type === "number" ? "number" : "text"}" step="any" aria-label="Respuesta del ejercicio ${index + 1}" />
      <div class="feedback" hidden></div>
    </article>
  `).join("") + `<div class="check-row"><button class="check-btn" id="checkPractice">Calificar ejercicios</button></div>`;

  document.querySelector("#checkPractice").addEventListener("click", () => {
    let score = 0;
    questions.forEach((question, index) => {
      const card = container.querySelector(`[data-practice="${index}"]`);
      const value = card.querySelector("input").value;
      const feedback = card.querySelector(".feedback");
      let correct = false;
      if (question.type === "number") {
        correct = Math.abs(Number(value) - question.answer) <= question.tolerance;
      } else {
        const clean = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        correct = clean(value).includes(clean(question.answer));
      }
      if (correct) score += 1;
      feedback.hidden = false;
      feedback.classList.toggle("wrong", !correct);
      feedback.textContent = `${correct ? "Correcto." : "Ajusta tu procedimiento."} ${question.explain}`;
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

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => activateSection(button.dataset.section));
});

document.querySelector("#theoryWeek").addEventListener("change", (event) => renderChoiceQuiz(event.target.value, state.theoryLevel));
document.querySelector("#practiceWeek").addEventListener("change", (event) => renderPracticeQuiz(event.target.value));
document.querySelector("#resetTheory").addEventListener("click", () => renderChoiceQuiz(document.querySelector("#theoryWeek").value, state.theoryLevel));
document.querySelector("#resetPractice").addEventListener("click", () => renderPracticeQuiz(document.querySelector("#practiceWeek").value));
document.querySelectorAll(".level-btn").forEach((button) => {
  button.addEventListener("click", () => renderChoiceQuiz(document.querySelector("#theoryWeek").value, button.dataset.level));
});

renderWeekSelects();
renderTopics();
renderGuide();
renderChoiceQuiz(weeks[0].id);
renderPracticeQuiz(weeks[0].id);
updateProgress();
