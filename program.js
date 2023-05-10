console.log("Hello World");

console.log(document.getElementById("game-doom"));

var MasterCategoryList = [];
var categorySelected = "All";
var searchInfo = ""; //when this is empty string that means that we look at everything


class GameItem {
  //This is the obj that will store all details that can be displayed on a screen
  constructor(
    name,
    year,
    coverImg,
    description,
    imgList,
    categoryList,
    price,
    trailerVideo,
    systemRequirements
  ) {
    this.name = name; //string of name
    this.year = year; //this should be a number or string
    this.coverImg = coverImg; //this should be a url thats an image
    this.description = description; //this should be a paragraph
    this.imgList = imgList; //this would be a list [str,str] for example ["img link 1", "img link 2"]
    this.categoryList = categoryList; //["FPS","VR"]
    this.price = price; //number or string
    this.trailerVideo = trailerVideo; //string "link to video"
    this.systemRequirements = systemRequirements; //string "string of system requirements"
    console.log(categoryList);
    for (var category of categoryList) {
      //add all categories to the master category list
      console.log("CaTEGORY: " + category);
      addToMasterCategoryList(category);
    }
  }

  generateBox() {
    var data =
      `<button name='` +
      this.name +
      `' id='gameBox' class='box'><img name="` +
      this.name +
      `" src="` +
      this.coverImg +
      `" alt="Game Cover Image" width="100%" height="100%"</img> <p name="` +
      this.name +
      `" id="gameText" align="center"> ` +
      this.name + 
      ` </p> <p name="` + this.name + `"id=gamePrice> ` 
      
      if (!getGameInLocalStorage(this.name)) {
        data += `$` + this.price
      } else {
        data += `Owned` //add this to maintain proper formatting
      }
       data +=` </p>  </button>`;
    var mainDiv = document.getElementById("mainContainer");
    console.log(mainDiv);
    console.log("GRABBED mainBrowser");
    var div = document.createElement("div");
    div.innerHTML = data;
    //mainDiv.append(data);
    console.log(typeof data);
    mainDiv.appendChild(div);
  }
}

function getGameInLocalStorage(gameName) {
  var result = false; //boolean
  var state = localStorage.getItem("SavedBuy");
  if (typeof gameName === "string" && state != null) {
    state = JSON.parse(state);
    for (var name of state) {
      if (name === gameName) {
        result = true;
      }
    }
  }
  return result;
}



gameItems = []; //this should be filled with gameItem objects
gameItems.push(
  new GameItem(
    "Beat Saber",
    2016,
    "assets/coverImg/beatsaber.jpg",
    "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world. Beat Saber is an immersive rhythm experience you have never seen before! Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world. Use your sabers to slash the beats as they come flying at you – every beat indicates which saber you need to use and the direction you need to match. With Beat Saber you become a dancing superhero!",
    ["assets/coverImg/beatsaber.jpg","assets/imgs/beatsaber1.jpg","assets/imgs/beatsaber2.jpg","assets/imgs/beatsaber3.jpg","assets/imgs/beatsaber4.jpg"],
    ["VR"],
    "33.99",
    "assets/trailers/beatsaber.webm",
    "Minimum: <br> OS: Windows 7/8.1/10 (64bit) <br> Processor: Intel Core i5 Sandy Bridge or equivalent <br> Memory: 4 GB RAM <br> Graphics: Nvidia GTX 960 or equivalent <br> DirectX: Version 11 <br> Storage: 200 MB available space <br> Recommended: <br> OS: Windows 7/8.1/10 (64bit) <br >Processor: Intel Core i7 Skylake or equivalent <br> Memory: 8 GB RAM <br> Graphics: Nvidia GTX 1060 or equivalent <br> DirectX: Version 12 <br> Storage: 200 MB available space"  )
);

gameItems.push(
  new GameItem(
    "Boneworks",
    2019,
    "assets/coverImg/boneworks.jpg",
    "BONEWORKS is an Experimental Physics VR Adventure. Use found physics weapons, tools, and objects to fight across dangerous playscapes and mysterious architecture. BONEWORKS Is a narrative VR action adventure using advanced experimental physics mechanics. Dynamically navigate through environments, engage in physics heavy combat, and creatively approach puzzles with physics.",
    ["assets/coverImg/boneworks.jpg","assets/imgs/boneworks1.jpg","assets/imgs/boneworks2.jpg","assets/imgs/boneworks3.jpg","assets/imgs/boneworks4.jpg"],
    ["VR", "FPS", "Sandbox"],
    "38.99",
    "assets/trailers/boneworks.webm",
    "Minimum: <br> OS: Windows 10 <br> Processor: quad-core 3.0ghz minimum <br> Memory: 8 GB RAM <br> Graphics: GTX 1060 / 970 for Rift CV1+Touch, Original Vive at 90hz, and RiftS at 80hz <br> DirectX: Version 11 <br> Storage: 20 GB available space <br> Additional Notes: CPU performance required for physics calculations! These min specs are based on Rift CV1+Touch, Original Vive 90hz, and RiftS 80hz, ONLY. <br> Recommended <br> OS: Windows 10 <br> Processor: Intel i7 7700k or greater, 3.3ghz+ <br> Memory: 16 GB RAM <br> Graphics: GTX 1080 / 2060super or greater for Rift CV1+Touch, Original Vive 90hz, and RiftS 80hz <br> DirectX: Version 11 <br> Storage: 20 GB available space <br>Additional Notes: CPU performance required for physics calculations! "  
    )
);

gameItems.push(
  new GameItem(
    "Bonelab",
    2022,
    "assets/coverImg/bonelab.jpg",
    "BONEWORKS is an Experimental Physics VR Adventure. Use found physics weapons, tools, and objects to fight across dangerous playscapes and mysterious architecture. Sentenced to death, you embody an outcast escaping fate. Discover a pathway to a hidden underground research facility. A series of challenging experiments and discoveries await. A road to the truth calls from the void.",
    ["assets/coverImg/bonelab.jpg","assets/imgs/bonelab1.jpg","assets/imgs/bonelab2.jpg","assets/imgs/bonelab3.jpg","assets/imgs/bonelab4.jpg"],
    ["VR", "FPS", "Sandbox"],
    "45.99",
    "assets/trailers/bonelab.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Portal 2",
    2011,
    "assets/coverImg/portal2.jpg",
    "The Perpetual Testing Initiative has been expanded to allow you to design co-op puzzles for you and your friends! Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game. The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.",
    ["assets/coverImg/portal2.jpg","assets/imgs/portal2_1.jpg","assets/imgs/portal2_2.jpg","assets/imgs/portal2_3.jpg","assets/imgs/portal2_4.jpg"],
    ["Platformer", "Puzzle", "First Person"],
    "12.99",
    "assets/trailers/portal2.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Portal",
    2007,
    "assets/coverImg/portal.jpg",
    "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay. Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.",
    ["assets/coverImg/portal.jpg","assets/imgs/portal1.jpg","assets/imgs/portal2.jpg","assets/imgs/portal3.jpg","assets/imgs/portal4.jpg"],
    ["Platformer", "Puzzle", "First Person"],
    "12.99",
    "assets/trailers/portal.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Half Life",
    1998,
    "assets/coverImg/halflife.jpg",
    "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.",
    ["assets/coverImg/halflife.jpg","assets/imgs/halflife1.jpg","assets/imgs/halflife2.jpg","assets/imgs/halflife3.jpg","assets/imgs/halflife4.jpg"],
    ["FPS", "Sci-Fi", "Singleplayer"],
    "11.49",
    "assets/trailers/halflife.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Half Life 2",
    2004,
    "assets/coverImg/halflife2.jpg",
    "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than 1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide. NOW. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies. The player again picks up the crowbar of research scientist Gordon Freeman, who finds himself on an alien-infested Earth being picked to the bone, its resources depleted, its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people he cares about are counting on him.",
    ["assets/coverImg/halflife2.jpg","assets/imgs/halflife2-2.jpg","assets/imgs/halflife2-3.jpg","assets/imgs/halflife2-4.jpg","assets/imgs/halflife2-1.jpg"],
    ["FPS", "Sci-Fi", "Singleplayer"],
    "11.49",
    "assets/trailers/halflife2.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Black Mesa",
    2020,
    "assets/coverImg/blackmesa.jpg",
    "Black Mesa is the fan-made reimagining of Valve Software’s Half-Life. Update 1.5 brings together all the improvements to graphics and gameplay across 15 years of development to create the final version of Black Mesa. There has never been a better time to pick up the crowbar and play! You are Gordon Freeman, a theoretical physicist at the Black Mesa Research Facility. When a routine experiment goes horribly wrong, you must fight your way through an interdimensional alien invasion, and a bloodthirsty military clean-up crew in order to save the science team... and the world!",
    ["assets/coverImg/blackmesa.jpg","assets/imgs/blackmesa1.jpg","assets/imgs/blackmesa2.jpg","assets/imgs/blackmesa3.jpg","assets/imgs/blackmesa4.jpg"],
    ["FPS", "Sci-Fi", "Singleplayer"],
    "21.99",
    "assets/trailers/blackmesa.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Sid Meier's Pirates!",
    2005,
    "assets/coverImg/sidmeierspirates.jpg",
    "Sail the Caribbean, marauding all on the high seas or ally your ship and crew as a privateer in search of riches - the life you choose is up to you. Face dogged enemies, raid unsuspecting villages, woo fair maidens, avoid capture or dig for buried treasure. Discover what it takes to become one of the most famous pirates in history!",
    ["assets/coverImg/sidmeierspirates.jpg","assets/imgs/sidmeierspirates1.jpg","assets/imgs/sidmeierspirates2.jpg","assets/imgs/sidmeierspirates3.jpg","assets/imgs/sidmeierspirates4.jpg"],
    ["Pirates", "Open World", "RPG", "Adventure"],
    "10.99",
    "assets/trailers/sidmeierspirates.webm",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

gameItems.push(
  new GameItem(
    "Sid Meier's Railroads!",
    2006,
    "assets/coverImg/sidmeiersrailroads.jpg",
    "Sid Meier's Railroads! marks the return of the watershed title in simulation/strategy gaming that launched the popular 'tycoon' genre, and inspired a new generation of games. Sid Meier's Railroads! comes home to its original creator, the legendary Sid Meier, who, together with his team at Firaxis Games, will take this game to a whole new level of fun! The greatest railroad building game of all time is back in a vibrant 3D world delivering a streamlined interface and unmatched gameplay, that's easy to learn yet challenging to master. Creators of the world's best strategy game, Civilization IV, Sid Meier and Firaxis Games put you in charge of building the greatest rail empire in the nation - managing trains, cargo and your bottom line - while engaging in all-out corporate warfare against rival tycoons, slick entrepreneurs, and robber barons!",
    ["assets/coverImg/sidmeiersrailroads.jpg","assets/imgs/sidmeiersrailroads1.jpg","assets/imgs/sidmeiersrailroads2.jpg","assets/imgs/sidmeiersrailroads3.jpg","assets/imgs/sidmeiersrailroads4.jpg"],
    ["Strategy", "Management", "Tycoon"],
    "10.99",
    "assets/trailers/sidmeiersrailroads.mp4",
    " Minimum: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i5 7600 3.5ghz+ <br> Memory: 8 GB RAM <br> Graphics: GTX 1070 / 1660TI (6GB VRAM) <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache <br> Recommended: <br> Requires a 64-bit processor and operating system <br> OS: Windows 10 <br> Processor: Intel i7 9700k or greater, 3.6 ghz+ <br> Memory: 16 GB RAM <br> Graphics: We recommend a 2070/2060super/1080ti or greater so you can have headroom to play with. Any GPU that ran Boneworks well should be great. <br> DirectX: Version 11 <br> Network: Broadband Internet connection <br> Storage: 20 GB available space <br> Sound Card: - <br> Additional Notes: CPU performance required for physics calculations! SSD Required, 32GB Windows Virtual Memory Cache"
    )
);

//adds items to the category list ensuring no duplicates
//takes in a string Category
//returns nothing
function addToMasterCategoryList(category) {
  console.log("Adding " + category + " to the master category list");
  if (
    typeof category === "string" &&
    MasterCategoryList.indexOf(category) == -1
  ) {
    //add items if the
    MasterCategoryList.push(category);
  }
}

//checks if the gameItem is part of the selected category
//takes in a GameItem
//returns true or false booleans
function inSelectedCategory(gameItem) {
  var result = false;
  if (gameItem instanceof GameItem) {
    //error checking
    for (var gameCategory of gameItem.categoryList) {
      result = result || gameCategory === categorySelected;
    }
  }
  return result;
}



function addAllBrowserCategory() {
  addBrowserCategory("All");
  for (var category of MasterCategoryList) {
    addBrowserCategory(category);
  }
}

function addBrowserCategory(itemName) {
  if (typeof itemName === "string") {
    var data =
      `<li><button id="` +
      itemName +
      `" type="button">` +
      itemName +
      `</button></li>`;
    var mainDiv = document.getElementById("CategoryList");
    console.log(mainDiv);
    console.log("GRABBED Browser categoryList");
    var li = document.createElement("li");
    li.innerHTML = data;
    //mainDiv.append(data);
    console.log(typeof data);
    mainDiv.appendChild(li);
  }
}

//clears all items in the mainContainer
function clearCategoryButtons() {
  console.log("Clearing category menu buttons");
  mainDiv = document.getElementById("MainCategoryList");
  console.log(mainDiv);
  mainDiv.removeChild(document.getElementById("CategoryList"));
  var mainContainer = document.createElement("ul");
  mainContainer.className = "container";
  mainContainer.setAttribute("id", "CategoryList");
  mainDiv.appendChild(mainContainer);
  console.log("Cleared category menu buttons");
}

//clears all items in the mainContainer
function clearMenuButtons() {
  console.log("Clearing mainBrowser menu buttons");
  mainDiv = document.getElementById("mainBrowser");
  console.log(mainDiv);
  mainDiv.removeChild(document.getElementById("mainContainer"));
  var mainContainer = document.createElement("div");
  mainContainer.className = "container";
  mainContainer.setAttribute("id", "mainContainer");
  mainDiv.appendChild(mainContainer);
  console.log("Cleared mainBrowser menu buttons");
}

//may want to specify category to populate
function populateBrowser() {
  console.log("populating browser games");
  var inSearch = false;
  for (item of gameItems) {
    //add all the items to the browser
    inSearch = searchInfo === "" || item.name.toLowerCase().includes(searchInfo.toLowerCase()) ;
    if ((categorySelected === "All" || inSelectedCategory(item)) && inSearch) {
      item.generateBox();
    }
  }

  console.log("Populated browser games");
  launchBrowserEvents();
}

//launch the events for the categories buttons
function launchCategoryEvents() {
  const mainContainer = document.getElementById("CategoryList");
  const buttons = mainContainer.getElementsByTagName("button");

  const buttonPressed = (e) => {
    console.log(e.target.id); // Get ID of Clicked Element
    console.log("category pressed");
    categorySelected = e.target.id;
    clearMenuButtons();
    populateBrowser();
  };

  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
}

//launch events for the game browser. Each item on the browser is a button we hook into
function launchBrowserEvents() {
  const mainContainer = document.getElementById("mainBrowser");
  const buttons = mainContainer.getElementsByTagName("button");
  const buttonPressed = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.getAttribute("name")); // Get ID of Clicked Element
    window.location.href = "PaymentPage.html?gameName=" + e.target.getAttribute("name");
    //window.location.replace("http://stackoverflow.com");
    //add in call to other page
  };

  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
}

//launch events for the search bar
function launchSearch() {
  const inputPress = (e) => {
    console.log(e.target.value);
    console.log(e);
    searchInfo = e.target.value;
    clearMenuButtons();
    populateBrowser();
  };

  const searchBox = document.getElementById("SearchButton");
  searchBox.addEventListener("input", inputPress);
}

function categoryActiveHighlight() {
  // set button display on click
  let categories = document.querySelectorAll("main nav ul li button");
  let allCategory = document.getElementById("All");
  allCategory.classList.add("active")
  categories.forEach((n) => {
    n.addEventListener("click", () => {
      if (!n.classList.contains("active")) {
        categories.forEach((i) => {
          if (i !== n) {
            if (i.classList.contains("active")) {
              i.classList.remove("active");
            }
          }
        });
        n.classList.add("active");
      }
    });
  });
}


function setGametitle(name){
  var gameName = document.getElementById("title");
  gameName.innerHTML = name;

} ///This function is to set title for the game

function setVid(vid){
  var video = document.getElementById("video");
  var source = document.createElement('source');
  console.log(video);
  console.log(source);
  source.setAttribute('src', vid);
  video.appendChild(source);
  video.load();
  video.play();
} //This function is to set link of trailer video of the game

function setDescription(description){
  document.getElementById("description").textContent = description;
} //Set the description for the game


function setPics(PicArray){
  var s = document.getElementById("column1");
  console.log(s);
  console.log(s.tagName);
  document.getElementById("column1").src =PicArray[0];
  document.getElementById("column2").src =PicArray[1];
  document.getElementById("column3").src =PicArray[2];
  document.getElementById("column4").src =PicArray[3];
  document.getElementById("column5").src =PicArray[4];
}
// Set 5 pictures from the array of game pictures' link


function setPrice(Price){
  document.getElementById("PayPrice").innerHTML = Price;
}

//This is to set price when check out

function setPricePage(Price){
  document.getElementById("price").innerHTML = Price;
}

function setCheckOutImg(imgLink){
  document.getElementById("Img_check").src = imgLink;

}

function setHead(title){
  document.getElementById("headTitle").textContent = title;
}

function checkOwnerShip(name_game){
  var arrayFromLocal = JSON.parse(window.localStorage.getItem("SavedBuy"));
  console.log("In method");
  var found = false;
  if(arrayFromLocal != null){
    for(var i = 0; i< arrayFromLocal.length; i++){
      console.log("item is " + arrayFromLocal[i]);
      if(arrayFromLocal[i].localeCompare(name_game) == 0){
        document.getElementById("button_buy").innerHTML = 'PLAY NOW';
        document.getElementById("price").innerHTML = '';
        console.log("In if");
        found = true;
        break;
      }
    }
  }

  if(found == false){
    document.getElementById("button_buy").innerHTML = 'BUY NOW';
  }
}


//used to grab page parameters
const queryString = window.location.search;
var args = new URLSearchParams(window.location.search);

console.log("IM HERE");
console.log(queryString);
console.log(args);
console.log(document.title);
if (document.title === "Game Description") {
  //Thinking we should pass arguments to the other html page we load.
  //stuff like gameTitle or gameID
  var paramName = args.get("gameName");
  for (game of gameItems) {
    if (game.name === paramName) {
      console.log("UPDATING");
      console.log(game.name);
      checkOwnerShip(game.name);
      setPics(game.imgList);
      setDescription(game.description);
      setGametitle(game.name);
      if (!getGameInLocalStorage(game.name)) { //check if game purchased already
        //setPrice("$" + game.price);
        setPricePage("$" + game.price);
      } else { //hide information if not needed to be displayed
        setPrice("");
        setPricePage("");
      }
      setVid(game.trailerVideo);
      setHead(game.name);
      setCheckOutImg(game.coverImg);
    }
  }

} else if (document.title === "Game Browser") {
  console.log("Game Browser Fun");
  const mainContainer = document.getElementById("mainBrowser");
  const buttons = mainContainer.getElementsByTagName("button");

  clearCategoryButtons();
  clearMenuButtons(); //clears the buttons on the browser to draw the correct buttons on
  addAllBrowserCategory();
  populateBrowser();
  launchCategoryEvents();
  launchSearch();
  categoryActiveHighlight();
}

