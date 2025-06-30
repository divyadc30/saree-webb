document.addEventListener("DOMContentLoaded", function () {
  const shopBtn = document.querySelector('.shop-btn');
  const shopSection = document.querySelector('#shop-section');

  if (shopBtn && shopSection) {
    shopBtn.addEventListener('click', function (e) {
      e.preventDefault(); 
      shopSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
 document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    if (query.includes("wedding")) {
      window.location.href = "wedding.html";
    } else if (query.includes("silk")) {
      window.location.href = "silk.html";
    } else if (query.includes("banarasi")) {
      window.location.href = "banarasi.html";
    } else if (query.includes("net")) {
      window.location.href = "net.html";
    } else if (query.includes("chanderi")) {
      window.location.href = "chanderi.html";
    } else if (query.includes("tant")) {
      window.location.href = "tant.html";
    } else {
      alert("No matching saree found!");
    }
  });



