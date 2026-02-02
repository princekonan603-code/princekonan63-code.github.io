function envoyer() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const sexe = document.getElementById("sexe").value;

  if (!nom || !email || !sexe) {
    alert("Remplis tous les champs !");
    return;
  }

  const donnees = {
    nom: nom,
    email: email,
    sexe: sexe
  };

  fetch("https://TON_SERVEUR_URL/inscription", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(donnees)
  })
  .then(response => response.text())
  .then(data => {
    alert("Données envoyées ✅");
  })
  .catch(error => {
    alert("Erreur ❌");
  });
}