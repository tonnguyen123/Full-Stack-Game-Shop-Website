let state = "BUY NOW";

function closeWindow() {
  document.querySelector(".payment_page").style.display = "none";
} //This function is to close the check out page

function setCheckOutImg(imgLink) {
  document.getElementById("Img_check").src = imgLink;
}

function setHead(title) {
  document.getElementById("headTitle").textContent = title;
}

function setGametitle(name) {
  const gameName = document.getElementById("title");
  gameName.textContent = name;
} ///This function is to set title for the game

function setVid(vid) {
  document.getElementById("video").src = vid;
} //This function is to set link of trailer video of the game

function setDescription(description) {
  document.getElementById("description").textContent = description;
} //Set the description for the game

function setPics(PicArray) {
  document.getElementById("column1").src = PicArray[0];
  document.getElementById("column2").src = PicArray[1];
  document.getElementById("column3").src = PicArray[2];
  document.getElementById("column4").src = PicArray[3];
  document.getElementById("column5").src = PicArray[4];
}
// Set 5 pictures from the array of game pictures' link

function setPrice(Price) {
  document.getElementById("PayPrice").innerHTML = Price;
}

//This is to set price when check out

function setPricePage(Price) {
  document.getElementById("price").innerHTML = Price;
}

// This is to set price on detail page

function checkOut() {
  const textC = document.getElementById("button_buy").innerHTML;
  const BuyText = "BUY NOW";
  if (textC === BuyText) {
    document.querySelector(".payment_page").style.display = "flex";
  } else {
    const NameOfGame = document.getElementById("title").innerHTML;
    localStorage.setItem("Game-Name", NameOfGame);
    var title = document.getElementById("title").innerHTML;
    var coverImg = document.getElementById("column1").src;
    window.location.href =
      "./Play.html?title=" + title + "&coverImg=" + coverImg;
  }
}

function goHome() {
  window.location.href = "./index.html";
}
function checkEmpty() {
  var fillFirstName = document.forms["paymentForm"]["fullName"].value;
  var fillCard = document.forms["paymentForm"]["CARDNUM"].value.replace(
    /\s/g,
    ""
  );
  var fillExp = document.forms["paymentForm"]["expiry"].value;
  var fillCVV = document.forms["paymentForm"]["CVV"].value;

  if (
    document.getElementById("VISA").checked ||
    document.getElementById("MASTER_CARD").checked
  ) {
    if (
      fillFirstName != "" &&
      fillCard != "" &&
      fillExp != "" &&
      fillCVV != ""
    ) {
      if (isNaN(fillCard) == true && isNaN(fillExp) == true && isNaN(fillCVV)) {
        alert(
          "Please make sure the card number, the expiry date and security code are number"
        );
      } else if (
        isNaN(fillCard) == false ||
        isNaN(fillExp) == false ||
        isNaN(fillCVV) == false
      ) {
        if (fillCard.length == 16) {
          if (fillExp.length == 5 && fillExp[2] === "/") {
            if (fillCVV.length == 3 || fillCVV.length == 4) {
              confirm_buy();
            } else {
              alert(
                "Please make sure security code you fill follows the format"
              );
            }
          } else {
            alert("Please make sure expiry date you fill follows the format");
          }
        } else {
          alert("Please make sure card number you fill follows the format");
        }
      }
    } else {
      alert(
        "Please make sure you fill in all information of the bank card to continue."
      );
    }
  } else {
    alert("Please choose either VISA or MASTERCARD to proceed the payment");
  }
  return false;
} //check if user enters correct input

function confirm_buy() {
  var chosenopt = confirm("Do you want to proceed with this purchase?");
  const buttn = document.getElementById("button_buy");
  if (chosenopt == true) {
    document.querySelector(".payment_page").style.display = "none";
    alert(
      "Thank you for your purchase! You can start installing and playing now"
    );
    buttn.innerHTML = state;

    localStorage.setItem("TextInButton", "PLAY NOW");

    state = localStorage.getItem("TextInButton");

    var ownership = document.getElementById("title").innerHTML;
    var OwnerShipArray = [];

    if (localStorage.getItem("SavedBuy") == null) {
      localStorage.setItem("SavedBuy", "[]");
    }
    var old_record = JSON.parse(localStorage.getItem("SavedBuy"));
    old_record.push(ownership);

    localStorage.setItem("SavedBuy", JSON.stringify(old_record));
    window.location.reload();
  }
} // Make the 'BUY' button become the 'PLAY' button after user buys it

// set button listenser
let homeButton = document.querySelectorAll(".lib");
let buyButton = document.querySelector("#button_buy");

homeButton[0].addEventListener("click", () => {
  window.location.href = "./index.html";
});

homeButton[1].addEventListener("click", () => {
  window.location.href = "./index.html";
});

buyButton.addEventListener("click", () => {
  console.log("buy");
  checkOut();
});
