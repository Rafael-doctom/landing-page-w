let timerDelay = 0;

function remove() {
  setInterval(() => {
    document.querySelector(".w-bottom-bar") &&
      document.querySelector(".w-bottom-bar").remove();
  });

  if (timerDelay === 0) {
    delay();
  }
}

function delay() {
  timerDelay++;

  let timer = setInterval(() => {
    if (
      document.querySelector("video").currentTime > 1505 &&
      document.querySelector("video").currentTime < 1506
    ) {
      constructorDelay();
      clearInterval(timer);
    }
  }, 1000);
}

const comments = [
  {
    idOrder: 1,
    id: 5,
    img: "./assets/images/profile1.jpg",
    name: "Roberto Norgueira",
    comment:
      "Jogo futebol e convivo com esse problema faz meses!! Esse produto me ajudou dmais vlw",
    day: "2 d",
  },
  {
    idOrder: 2,
    id: 6,
    img: "./assets/images/profile2.jpg",
    name: "Alana Silva",
    comment: "Minhas dores sumiu!! muito obrigadaa",
    day: "1 d",
  },
  {
    idOrder: 3,
    id: 7,
    img: "./assets/images/profile3.jpg",
    name: "Maria Adriele",
    comment:
      "É ótimo para quem tem dores após uma rotina de trabalho intenso, ajudou demais",
    day: "5 h",
  },
  {
    idOrder: 4,
    id: 8,
    img: "./assets/images/profile4.jpg",
    name: "Diego Gomes",
    comment: "Boooa deu muito certo mesmo cara",
    day: "3 h",
  },
  {
    idOrder: 5,
    id: 9,
    img: "./assets/images/profile5.jpg",
    name: "José Lorenço",
    comment:
      "Pra quem trabalha é muito bom nunca mais tive problemas com dores valeu apena",
    day: "1 h",
  },
];

function constructorDelay() {
  // BUTTON

  let delaySectionPath = document.querySelector("#delay");

  let divButtonAccess = document.createElement("div");
  divButtonAccess.id = "buttonAccess";
  delaySectionPath.appendChild(divButtonAccess);

  let divButtonAccessPath = document.querySelector("#buttonAccess");

  let buttonAccess = document.createElement("a");
  buttonAccess.tabIndex = 3;
  buttonAccess.href = "https://pay.kiwify.com.br/JhOKDr3";
  buttonAccess.target = "_blank";
  buttonAccess.innerHTML = "Quero me livrar das dores";
  divButtonAccessPath.appendChild(buttonAccess);

  // WARNING

  let warning = document.createElement("div");
  warning.className = "warning";
  warning.innerHTML = "<p>Restam apenas 2 vagas!</p>";
  divButtonAccessPath.appendChild(warning);

  // PAY RULES

  let payRules = document.createElement("img");
  payRules.src = "./assets/images/info.png";
  payRules.alt = "Regras";
  payRules.className = "payRules";
  divButtonAccessPath.appendChild(payRules);

  // TESTIMONIALS

  let testimonials = document.createElement("div");
  testimonials.id = "testimonials";
  delaySectionPath.appendChild(testimonials);

  let testimonialsPath = document.querySelector("#testimonials");

  let titleTestimonials = document.createElement("h2");
  titleTestimonials.tabIndex = 4;
  titleTestimonials.innerHTML = "Depoimentos";
  testimonialsPath.appendChild(titleTestimonials);

  let hr = document.createElement("hr");
  testimonialsPath.appendChild(hr);

  comments.map((comment) => {
    // FIRST BOX
    let firstBoxComment = document.createElement("div");
    firstBoxComment.className = "firstBoxComment";
    firstBoxComment.classList.add(`firstBox${comment.idOrder}`);
    testimonialsPath.appendChild(firstBoxComment);

    let firstBoxCommentPath = document.querySelector(
      `.firstBox${comment.idOrder}`
    );

    // PROFILE IMG
    let divImgProfile = document.createElement("div");
    divImgProfile.className = "imgProfile";
    divImgProfile.classList.add(`img${comment.idOrder}`);
    firstBoxCommentPath.appendChild(divImgProfile);

    let divImgProfilePath = document.querySelector(`.img${comment.idOrder}`);

    let imgProfile = document.createElement("img");
    imgProfile.src = comment.img;
    imgProfile.alt = "Foto de perfil";
    imgProfile.tabIndex = comment.id;
    divImgProfilePath.appendChild(imgProfile);

    // SECOND BOX
    let secondBoxComment = document.createElement("div");
    secondBoxComment.className = "secondBoxComment";
    secondBoxComment.classList.add(`secondBox${comment.idOrder}`);
    firstBoxCommentPath.appendChild(secondBoxComment);

    let secondBoxCommentPath = document.querySelector(
      `.secondBox${comment.idOrder}`
    );

    let commentContent = document.createElement("div");
    commentContent.className = "commentContent";
    commentContent.classList.add(`commentContent${comment.idOrder}`);
    secondBoxCommentPath.appendChild(commentContent);

    let commentContentPath = document.querySelector(
      `.commentContent${comment.idOrder}`
    );

    // COMMENT
    let name = document.createElement("p");
    name.className = "name";
    name.tabIndex = comment.id + 1;
    name.innerHTML = comment.name;
    commentContentPath.appendChild(name);

    let commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.classList.add(`comment${comment.idOrder}`);
    commentContentPath.appendChild(commentElement);

    let commentElementPath = document.querySelector(
      `.comment${comment.idOrder}`
    );

    let commentParagraph = document.createElement("p");
    commentParagraph.innerHTML = comment.comment;
    commentElementPath.appendChild(commentParagraph);

    // DETAILS
    let details = document.createElement("div");
    details.className = "details";
    details.classList.add(`details${comment.idOrder}`);
    secondBoxCommentPath.appendChild(details);

    let detailsPath = document.querySelector(`.details${comment.idOrder}`);

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    let span5 = document.createElement("span");

    span1.tabIndex = comment.id + 2;
    span1.innerHTML = "Curtir";

    span2.innerHTML = " · ";

    span3.tabIndex = comment.id + 3;
    span3.innerHTML = "Responder";

    span4.innerHTML = " · ";

    span5.tabIndex = comment.id + 5;
    span5.innerHTML = comment.day;

    detailsPath.appendChild(span1);
    detailsPath.appendChild(span2);
    detailsPath.appendChild(span3);
    detailsPath.appendChild(span4);
    detailsPath.appendChild(span5);
  });
}
