(function () {
  const path = window.location.pathname.toLowerCase();

  function isActive(fileName) {
    if (fileName === "index.html") {
      return path.endsWith("/") || path.endsWith("/index.html");
    }
    return path.endsWith("/" + fileName);
  }

  const headerHtml = `
    <div class="top-bar">
      <header class="top-header">
        <div class="logo-wrap">
          <img src="logo.png" alt="Soru Bankası Logosu" class="logo">
        </div>
        <div class="title-group">
          <div class="eyebrow">Dijital Eğitim Platformu</div>
          <div class="site-title">Sınavlara beraber hazırlanalım</div>
          <div class="site-subtitle">
            Video dersler, soru setleri ve üyelik tabanlı içeriklerle hedef odaklı, sade ve güçlü bir hazırlık deneyimi.
          </div>
        </div>
      </header>

      <div class="auth-buttons">
        <button class="login-btn" onclick="goToLogin()">Giriş Yap</button>
        <button class="signup-btn" onclick="goToSignup()">Üye Ol</button>
      </div>
    </div>

    <nav class="main-nav">
      <a href="index.html" class="${isActive("index.html") ? "active" : ""}">Ana Sayfa</a>
      <a href="biz-kimiz.html" class="${isActive("biz-kimiz.html") ? "active" : ""}">Biz Kimiz</a>
      <a href="sinavlar.html" class="${isActive("sinavlar.html") ? "active" : ""}">Sınavlar</a>
      <a href="videolar.html" class="${isActive("videolar.html") ? "active" : ""}">Videolar</a>
      <a href="soru-setleri.html" class="${isActive("soru-setleri.html") ? "active" : ""}">Soru Setleri</a>
    </nav>
  `;

  const mount = document.getElementById("site-header");
  if (mount) {
    mount.innerHTML = headerHtml;
  }

  window.goToLogin = function () {
    window.location.href = "giris-yap.html";
  };

  window.goToSignup = function () {
    window.location.href = "uye-ol.html";
  };
})();
