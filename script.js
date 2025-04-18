let total = 0;

document.getElementById("btn-participer").addEventListener("click", () => {
  document.getElementById("form-container").classList.toggle("hidden");
});

document.getElementById("envoyer").addEventListener("click", () => {
  const montant = parseFloat(document.getElementById("montant").value);
  const prenom = document.getElementById("prenom").value.trim();
  const message = document.getElementById("message").value.trim();
  const afficherMontant = document.getElementById("afficherMontant").checked;
  const moyen = document.querySelector('input[name="moyen"]:checked').value;

  if (!montant || !prenom) {
    alert("Merci de remplir au moins le montant et ton prénom/pseudo.");
    return;
  }

  // Incrémenter le compteur
  total += montant;
  document.getElementById("total").textContent = total.toFixed(2);

  // Ajouter le message
  const bloc = document.createElement("div");
  bloc.className = "message";

  bloc.innerHTML = `
    <strong>${prenom}</strong> a soutenu mon projet !
    ${message ? `<p>« ${message} »</p>` : ""}
    ${afficherMontant ? `<p>Montant : ${montant.toFixed(2)} €</p>` : ""}
  `;

  document.getElementById("liste-messages").prepend(bloc);

  // Redirection selon le moyen choisi
  let lien = "#";
  if (moyen === "stripe") lien = "https://buy.stripe.com/...";
  if (moyen === "wero") lien = "https://www.wero.app/...";
  if (moyen === "rib") lien = "https://mon-rib-en-pdf.fr/...";

  window.open(lien, "_blank");

  // Réinitialiser le formulaire
  document.getElementById("montant").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("message").value = "";
});let total = 0;

document.getElementById("btn-participer").addEventListener("click", () => {
  document.getElementById("form-container").classList.toggle("hidden");
});

document.getElementById("envoyer").addEventListener("click", () => {
  const montant = parseFloat(document.getElementById("montant").value);
  const prenom = document.getElementById("prenom").value.trim();
  const message = document.getElementById("message").value.trim();
  const afficherMontant = document.getElementById("afficherMontant").checked;
  const moyen = document.querySelector('input[name="moyen"]:checked').value;

  if (!montant || !prenom) {
    alert("Merci de remplir au moins le montant et ton prénom/pseudo.");
    return;
  }

  // Incrémenter le compteur
  total += montant;
  document.getElementById("total").textContent = total.toFixed(2);

  // Ajouter le message
  const bloc = document.createElement("div");
  bloc.className = "message";

  bloc.innerHTML = `
    <strong>${prenom}</strong> a soutenu mon projet !
    ${message ? `<p>« ${message} »</p>` : ""}
    ${afficherMontant ? `<p>Montant : ${montant.toFixed(2)} €</p>` : ""}
  `;

  document.getElementById("liste-messages").prepend(bloc);

  // Redirection selon le moyen choisi
  let lien = "#";
  if (moyen === "stripe") lien = "https://buy.stripe.com/...";
  if (moyen === "wero") lien = "https://www.wero.app/...";
  if (moyen === "rib") lien = "https://mon-rib-en-pdf.fr/...";

  window.open(lien, "_blank");

  // Réinitialiser le formulaire
  document.getElementById("montant").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("message").value = "";
});
