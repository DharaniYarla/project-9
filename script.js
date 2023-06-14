document.getElementById("linkedinIcon").addEventListener("click", function () {
  showAccountId("linkedinId");
});

document.getElementById("w3schoolsIcon").addEventListener("click", function () {
  showAccountId("w3schoolsId");
});

document
  .getElementById("hackerRankIcon")
  .addEventListener("click", function () {
    showAccountId("hackerRankId");
  });

document.getElementById("githubIcon").addEventListener("click", function () {
  showAccountId("githubId");
});

function showAccountId(id) {
  var accountElement = document.getElementById("accountId");
  var accountIds = {
    linkedinId: "https://www.linkedin.com/in/dharani-yarlagadda-089a56236/",
    w3schoolsId: "https://www.w3profile.com/Dharani",
    hackerRankId: "https://www.hackerrank.com/ydharani?hr_r=1",
    githubId: "https://github.com/DharaniYarla"
  };

  accountElement.textContent = accountIds[id];

  var existingCopyButton = document.getElementById("copyButton");
  if (existingCopyButton) {
    existingCopyButton.parentNode.removeChild(existingCopyButton);
  }

  var copyButton = document.createElement("button");
  copyButton.textContent = "Copy";
  copyButton.id = "copyButton";
  copyButton.addEventListener("click", function () {
    copyAccountId(accountIds[id]);
  });

  var accountContainer = document.querySelector(".account-id");
  accountContainer.appendChild(copyButton);
}

function copyAccountId(accountId) {
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = accountId;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextarea);

  var copyButton = document.getElementById("copyButton");
  copyButton.style.backgroundColor = "green";
}
