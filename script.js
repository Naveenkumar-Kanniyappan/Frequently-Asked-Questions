const faqData = [
  {
    question: "How to get input from the user in JavaScript?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium recusandae numquam explicabo labore vero ipsum nemo et autem vitae ullam beatae corporis maiores elus, laborum consectetur reiciendis eveniet quisquam dolor consequatur error itaque sunt laboriosam fuga. Repellendus maiores pariatur est quae, necessitatibus consequuntur consequatur velit quasi, et exercitationem essel"
  },
  {
    question: "Difference between slice and splice methods?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium recusandae numquam explicabo labore vero ipsum nemo et autem vitae ullam beatae corporis maiores elus, laborum consectetur reiciendis eveniet quisquam dolor consequatur error itaque sunt laboriosam fuga. Repellendus maiores pariatur est quae, necessitatibus consequuntur consequatur velit quasi, et exercitationem essel"
  },
  {
    question: "Array is mutable or immutable?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium recusandae numquam explicabo labore vero ipsum nemo et autem vitae ullam beatae corporis maiores eius, laborum consectetur reiciendis eveniet quisquam dolor consequatur error itaque sunt laboriosam fuga. Repellendus maiores pariatur est quae, necessitatibus consequuntur consequatur velit quasi, et exercitationem esse!."
  }
];

let mainContainer = document.createElement("div");
mainContainer.id = "main-container";

let header = document.createElement("h3");
header.id = "header";
header.innerText = "Frequently Asked Questions - FAQs";
mainContainer.appendChild(header);

let lastOpenedFaq = null;
faqData.forEach(faq => {
  let faqItem = document.createElement("div");
  faqItem.className = "faq-item";
  let question = document.createElement("div");
  question.className = "faq-question";

  let questionText = document.createElement("h4");
  questionText.innerText = faq.question;
  question.appendChild(questionText);

  let toggleIcon = document.createElement("div");
  toggleIcon.className = "toggle-icon";
  question.appendChild(toggleIcon);


  let line = document.createElement('div');
  line.id = "line";
  faqItem.appendChild(line);

  let answer = document.createElement("div");
  answer.className = "faq-answer";
  answer.innerText = faq.answer;
  faqItem.appendChild(answer);

  question.addEventListener("click", () => {
    if (lastOpenedFaq && lastOpenedFaq !== faqItem) {
      lastOpenedFaq.querySelector(".faq-answer").style.display = "none";
      lastOpenedFaq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      lastOpenedFaq.querySelector("#line").style.display = "none";
    }
    let isExpanded = question.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      answer.style.display = "none";
      question.setAttribute("aria-expanded", "false");
      line.style.display = "none"; 
    } 
    else {
      answer.style.display = "block";
      question.setAttribute("aria-expanded", "true");
      line.style.display = "block"; 
    }

    if (isExpanded) {
      lastOpenedFaq = null;
    } 
    else {
      lastOpenedFaq = faqItem;
    }
  });

  faqItem.appendChild(question);
  faqItem.appendChild(line);
  faqItem.appendChild(answer);
  mainContainer.appendChild(faqItem);
});

document.body.appendChild(mainContainer);
