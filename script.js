
const garden = document.getElementById("garden");
const message = document.getElementById("message");
const dateTime = document.getElementById("datetime");
const stars = document.getElementById("stars");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const flowerData = [
  {
    color: "blue",
    note: `i’m genuinely so happy i met you in rebellion, and i’m not even saying that just for the sake of saying it. it’s always nice meeting someone unexpectedly and realizing that they’re actually someone you’d enjoy getting to know beyond the server. i appreciate the conversations we’ve had so far, especially the fact that you allow yourself to share things about you that not everyone necessarily gets to hear. i hope you know that i find your presence nice, and i’m really grateful that our paths happened to cross. out of all the people i could’ve encountered there, i’m glad i got to meet you.`
  },
  {
    color: "purple",
    note: `i still think about what you told me regarding your past relationship, and i hope you don’t feel like i was simply dismissing your feelings when i shared my perspective. i really do understand why certain things could be difficult for you now, especially when those things are tied to experiences that genuinely hurt you. hindi naman lahat ng discomfort ay nanggagaling sa pagiging unreasonable or overly jealous, sometimes, it’s because certain circumstances have changed the way you perceive things, and understandably so. i just hope you get to heal from those experiences without having to constantly carry the weight of what someone else did to you.`
  },
  {
    color: "white",
    note: `you know, i hope life becomes a little kinder to you. i hope you get to experience days wherein you don’t have to overthink every little thing, days wherein you can just exist without feeling like something bad is bound to happen eventually. i hope you get more reasons to laugh, more moments that make you genuinely excited about waking up, and more people who make life feel less exhausting. you deserve those things, and i hope you never make yourself believe otherwise just because you’ve had your fair share of unfortunate experiences.`
  },
  {
    color: "black",
    note: `please don’t ever think that you have to be the strongest person in the room all the time. you can have bad days, you can feel confused, you can have moments wherein you don’t know what to do with yourself, and that doesn’t make you any less deserving of care. i hope you find people with whom you can be comfortable enough to take off that facade whenever you need to. people who won’t make you feel like you have to constantly be composed or have everything figured out just to be worthy of their time. you deserve to be understood, too, not just expected to understand everyone else.`
  },
  {
    color: "purple",
    note: `i just want to remind you that you are loved, even on days when you don’t particularly feel like you are. there are people who care about you, people who are glad that you’re around, people who would notice the little things about you, and people who would genuinely wish for you to be happy. sometimes, we get so caught up in the things that hurt us that we forget there’s still so much love outside those experiences. i hope you never overlook the fact that you matter to people, because you do, more than you might actually realize.`
  },
  {
    color: "blue",
    note: `and, well, i’m here, too. i know we haven’t known each other for that long, and i’m not trying to make it seem as though i’m suddenly someone who knows everything about you, but i hope you know that i’m someone you can talk to whenever you feel like it. whether it’s something serious, a random thought, a stupid story, or just you wanting someone to listen, i don’t mind. i actually enjoy getting to know you, and i’d be more than happy to hear more about the things you don’t usually get to share with everyone. you don’t have to feel like you’re bothering me just because you want to talk.`
  },
  {
    color: "white",
    note: `i hope you never settle for the kind of love or treatment that makes you question your worth. i hope you eventually experience something so genuine and peaceful that it doesn’t leave you constantly wondering where you stand. and until then, please don’t forget to give yourself the same understanding you so easily give to other people. you’re someone worth appreciating, worth listening to, and worth being genuinely happy for. i’m glad i got to know you, and i hope that somewhere along the way, this little friendship we found in rebellion becomes another one of those things you’ll look back on and be glad happened. please take care of yourself always, okay?`
  }
];

// create flowers

flowerData.forEach((data, index) => {
  const flower = document.createElement("div");
  flower.className = `flower ${data.color}`;
  flower.setAttribute("title", `flower ${index + 1}`);

  const petals = document.createElement("div");
  petals.className = "petals";

  for (let i = 0; i < 8; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.transform = `rotate(${i * 45}deg)`;
    petals.appendChild(petal);
  }

  const center = document.createElement("div");
  center.className = "center";

  flower.append(petals, center);

  flower.addEventListener("click", () => {
    message.textContent = data.note;

    flower.classList.remove("blooming");
    void flower.offsetWidth;
    flower.classList.add("blooming");
  });

  garden.appendChild(flower);
});

// background sparkles

for (let i = 0; i < 55; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.textContent = Math.random() > .5 ? "✦" : "✧";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.fontSize = Math.random() * 15 + 8 + "px";
  star.style.animationDelay = Math.random() * 3 + "s";

  stars.appendChild(star);
}

// music play / pause

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "♫ pause music ♡";
    } catch (error) {
      musicBtn.textContent = "♫ check your music URL ♡";
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫ music while reading ♡";
  }
});

// reset button when music ends

bgMusic.addEventListener("ended", () => {
  musicBtn.textContent = "♫ music while reading ♡";
});

// philippine date and time

function updateClock() {
  const now = new Date();

  dateTime.textContent = now.toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
    dateStyle: "long",
    timeStyle: "medium"
  });
}

updateClock();
setInterval(updateClock, 1000);
