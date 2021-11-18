function acneBot() {
    let answer = "";
    let bot = "alors ?";
  
    while (answer !== "Bye") {
      answer = prompt(bot);
  
      if (answer[answer.length - 1] === "?") {
        bot = "Ouais Ouais...";
        console.log(bot);
      } else if (answer === "") {
        bot = "t'es en PLS ?";
        console.log(bot);
      } else if (answer === answer.toUpperCase()) {
        bot = "Pwa, calme-toi...";
        console.log(bot);
      } else if (answer.indexOf("Fortnite") !== -1) {
        bot = "on se fait une partie soum-soum ?";
        console.log(bot);
      } else {
        bot = "balek";
        console.log(bot);
      }
  
    }
    console.log("Merci, on s'est bien marré. Bye !");
  }

  console.log(acneBot())