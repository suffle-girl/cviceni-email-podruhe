const goodbye = (name) => {
  return "S pozdravem " + name;
};

const formalGoodbye = (name) => {
  return `S uctivou poklonou ${name}`;
};

const rudeGoodbye = (name) => {
  return `Se měj, ${name}`;
};

const witchyGoodbye = (name) => {
  return `Ať je Merlin s vámi na každém kroku, ${name}`;
}

const fillSubject = (subject) => {
  document.querySelector(".email__subject").textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector(".email__body");
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector(".email__closing");
  closingElm.textContent = goodbyeFunction(name);
};

fillSubject("Obchodní sdělení");
fillBody(
  "Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.",
  "Jan Čistý",
  formalGoodbye
);

fillSubject("Pozvánka na oslavu narozenin");
fillBody(
  "Zítra oslava. 18:00 ve Starý hospodě.", 
  "Patrik Veselý", 
  rudeGoodbye
  );

fillSubject("Oslava slunovratu"),
fillBody (
  "Přijďte oslavit návrat světla na severní hemisféru.",
  "Šárka Baběradová",
  witchyGoodbye
)
