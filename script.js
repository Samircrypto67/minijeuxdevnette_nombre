
    let nombreSecret = Math.floor(Math.random() * 10) + 1;
    let score = 0;

    function verifier() {
      const entree = parseInt(document.getElementById('guess').value);
      const resultat = document.getElementById('resultat');
      const scoreDiv = document.getElementById('score');

      if (isNaN(entree) || entree < 1 || entree > 10) {
        resultat.textContent = "Entre un nombre entre 1 et 10.";
        resultat.style.color = "red";
        return;
      }

      if (entree === nombreSecret) {
        score++;
        resultat.textContent = " Bravo ! Tu as deviné le bon nombre.";
        resultat.style.color = "lime";
      } else {
        score--;
        if (entree > nombreSecret) {
          resultat.textContent = "Trop grand ! Essaie encore.";
        } else {
          resultat.textContent = "Trop petit ! Essaie encore.";
        }
        resultat.style.color = "orange";
      }

      scoreDiv.textContent = "Score : " + score;
    }

    function rejouer() {
      nombreSecret = Math.floor(Math.random() * 10) + 1;
      document.getElementById('guess').value = "";
      document.getElementById('resultat').textContent = "Nouveau nombre généré !";
      document.getElementById('resultat').style.color = "white";
    }
  