// Montant initial (tu peux le modifier ici)
let montant = 420; // ← à mettre à jour manuellement

document.getElementById("montant").textContent = montant;

// Fonction pour copier le RIB
function copierRIB() {
  const rib = "FR76 1234 5678 9101 1121 3141 516";
  navigator.clipboard.writeText(rib).then(() => {
    document.getElementById("confirmation").textContent = "RIB copié dans le presse-papier ✅";
    setTimeout(() => {
      document.getElementById("confirmation").textContent = "";
    }, 3000);
  });
}// Montant initial (tu peux le modifier ici)
let montant = 420; // ← à mettre à jour manuellement

document.getElementById("montant").textContent = montant;

// Fonction pour copier le RIB
function copierRIB() {
  const rib = "FR76 1234 5678 9101 1121 3141 516";
  navigator.clipboard.writeText(rib).then(() => {
    document.getElementById("confirmation").textContent = "RIB copié dans le presse-papier ✅";
    setTimeout(() => {
      document.getElementById("confirmation").textContent = "";
    }, 3000);
  });
}
