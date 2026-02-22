let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allTabBtn = document.getElementById("all-filter-btn");
const interviewTabBtn = document.getElementById("interview-filter-btn");
const rejectedTabBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
}

function toggleStyle(id) {
  allTabBtn.classList.add("bg-base-100", "text-gray-500");
  interviewTabBtn.classList.add("bg-base-100", "text-gray-500");
  rejectedTabBtn.classList.add("bg-base-100", "text-gray-500");

  allTabBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewTabBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedTabBtn.classList.remove("bg-[#3B82F6]", "text-white");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-base-100", "text-gray-500");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderJob();
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
}

calculateCount();

mainContainer.addEventListener("click", function (event) {
  const parenNode = event.target.parentNode.parentNode;
  console.log(parenNode);

  const companyName = parenNode.querySelector(".companyName").innerText;
  const position = parenNode.querySelector(".position").innerText;
  const location = parenNode.querySelector(".location").innerText;
  const type = parenNode.querySelector(".type").innerText;
  const salary = parenNode.querySelector(".salary").innerText;
  const jobStatus = parenNode.querySelector(".jobStatus").innerText;
  const description = parenNode.querySelector(".description").innerText;

  parenNode.querySelector(".jobStatus").innerText = "INTERVIEW";

  const CardInfo = {
    companyName,
    position,
    location,
    type,
    salary,
    jobStatus: "INTERVIEW",
    description,
  };

  const jobExist = interviewList.find(
    (item) => item.companyName == CardInfo.companyName,
  );

  if (!jobExist) {
    interviewList.push(CardInfo);
  }

  calculateCount();
  renderJob();
});

function renderJob() {
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className =
      "cardSection flex justify-between bg-base-100 p-6 rounded-lg";

    div.innerHTML = `
      <div>
              <h2 class="companyName text-[#002C5C] text-[18px] font-semibold">
                ${interview.companyName}
              </h2>
              <p class="position text-[16px] text-gray-500">
                ${interview.position}
              </p>

              <div class="text-gray-500 my-5 flex gap-2">
                <p class="location"> ${interview.location} •</p>
                <p class="type">${interview.type} •</p>
                <p class="salary">${interview.salary}</p>
              </div>

              <div>
                <span
                  class="jobStatus bg-[#EEF4FF] text-[14px] text-[#002C5C] px-3 py-2"
                  >${interview.jobStatus}</span
                >
              </div>

              <p class="description text-[#323B49] text-[14px] mt-3">
                ${interview.description}
              </p>

              <div class="mt-5 flex gap-2">
                <button class="btn btn-sm btn-outline btn-success">
                  INTERVIEW
                </button>
                <button class="btn btn-sm btn-outline btn-error">
                  REJECTED
                </button>
              </div>
            </div>

            <div>
              <button class="btn rounded-full">
                <img src="./image/Trash.png" alt="" />
              </button>
            </div>

  `;
    filterSection.appendChild(div);
  }
}
