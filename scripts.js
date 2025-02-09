document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue sur MarcShop!");
  });let panier = [];
  let total = $0;
  
  function ajouterAuPanier(produit) {
    panier.push(produit);
    total += $ 29.99; // Ajouter le prix de chaque produit
    document.getElementById('total').innerText = total.toFixed(2) + '$';
    afficherPanier();
  }
  
  function afficherPanier() {
    const panierListe = document.getElementById('liste-panier');
    panierListe.innerHTML = '';
    panier.forEach((produit, index) => {
      const li = document.createElement('li');
      li.textContent = Produit ${index + 1} - $29,99;
      panierListe.appendChild(li);
    });
  }
  
  function validerCommande() {
    alert("Commande validée, merci !");
    // Ajouter la logique de paiement ici
  }async function loadProductsFromJSON() {
    // Charger le fichier produits.json
    const response = await fetch('produits.json');
    const products = await response.json();
  
    // Récupérer l'élément dans lequel afficher les produits
    const produitsContainer = document.getElementById('produits-list');
    produitsContainer.innerHTML = ''; // Vider la section avant de remplir
  
    // Boucler sur chaque produit et ajouter au HTML
    products.forEach(product => {
      const productHTML = `
        <div class="produit">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Prix : $${product.price}</strong></p>
          <button onclick="ajouterAuPanier('${product.name}')">Ajouter au panier</button>
        </div>
      `;
      produitsContainer.innerHTML += productHTML;
    });
  }
  
  // Appeler la fonction pour charger les produits au chargement de la page
  loadProductsFromJSON();const response = await fetch('data/produits.json');