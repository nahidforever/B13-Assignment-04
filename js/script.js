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

const noJobAvailable = document.getElementById("no-job-available");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
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
    renderInterview();
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
    noJobAvailable.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

calculateCount();

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-success")) {
    const parenNode = event.target.parentNode.parentNode;

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
      (item) =>
        item.companyName === CardInfo.companyName &&
        item.position === CardInfo.position,
    );

    if (!jobExist) {
      interviewList.push(CardInfo);
    }

    calculateCount();
    renderInterview();
  } else if (event.target.classList.contains("btn-error")) {
    const parenNode = event.target.parentNode.parentNode;

    const companyName = parenNode.querySelector(".companyName").innerText;
    const position = parenNode.querySelector(".position").innerText;
    const location = parenNode.querySelector(".location").innerText;
    const type = parenNode.querySelector(".type").innerText;
    const salary = parenNode.querySelector(".salary").innerText;
    const jobStatus = parenNode.querySelector(".jobStatus").innerText;
    const description = parenNode.querySelector(".description").innerText;

    parenNode.querySelector(".jobStatus").innerText = "REJECTED";

    const CardInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      jobStatus: "REJECTED",
      description,
    };

    const jobExist = rejectedList.find(
      (item) =>
        item.companyName === CardInfo.companyName &&
        item.position === CardInfo.position,
    );

    if (!jobExist) {
      rejectedList.push(CardInfo);
    }

    calculateCount();
    renderRejected();
  } else if (event.target.closest(".btn.rounded-full")) {

    const card = event.target.closest(".cardContainer");

    const companyName = card.querySelector(".companyName").innerText;
    const position = card.querySelector(".position").innerText;

    card.remove();

    interviewList = interviewList.filter(
      (job) => job.companyName !== companyName && job.position !== position,
    );
    rejectedList = rejectedList.filter(
      (job) => job.companyName !== companyName && job.position !== position,
    );

    calculateCount();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  if (interviewList.length === 0) {
    noJobAvailable.classList.remove("hidden");
    return;
  } else {
    noJobAvailable.classList.add("hidden");
  }

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className =
      "cardSection flex justify-between bg-base-100 p-6 rounded-lg mb-5 mt-7 cardContainer";

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
function renderRejected() {
  filterSection.innerHTML = "";

  if (rejectedList.length === 0) {
    noJobAvailable.classList.remove("hidden");
    return;
  } else {
    noJobAvailable.classList.add("hidden");
  }

  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "cardSection flex justify-between bg-base-100 p-6 rounded-lg mb-5 mt-7 cardContainer";

    div.innerHTML = `
      <div>
              <h2 class="companyName text-[#002C5C] text-[18px] font-semibold">
                ${reject.companyName}
              </h2>
              <p class="position text-[16px] text-gray-500">
                ${reject.position}
              </p>

              <div class="text-gray-500 my-5 flex gap-2">
                <p class="location"> ${reject.location} •</p>
                <p class="type">${reject.type} •</p>
                <p class="salary">${reject.salary}</p>
              </div>

              <div>
                <span
                  class="jobStatus bg-[#EEF4FF] text-[14px] text-[#002C5C] px-3 py-2"
                  >${reject.jobStatus}</span
                >
              </div>

              <p class="description text-[#323B49] text-[14px] mt-3">
                ${reject.description}
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
