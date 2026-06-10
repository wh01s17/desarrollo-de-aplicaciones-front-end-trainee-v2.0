<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark text-white border-top border-warning border-3 mt-5 pt-5 pb-3">
    <div class="container">
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <h5 class="fw-bold mb-2">
            <i class="fa-solid fa-clapperboard text-warning"></i>
            SerieShop
          </h5>

          <p class="small text-body-secondary mb-0">
            Tu tienda online de series favoritas. Descubre, compra y disfruta de los mejores títulos
            del momento.
          </p>
        </div>

        <div class="col-md-4">
          <h6 class="fw-bold small mb-3">Navegación</h6>

          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li>
              <a href="#" class="site-footer__link text-decoration-none">
                <i class="fa-solid fa-chevron-right text-warning me-2"></i>Home
              </a>
            </li>
            <li>
              <a href="#" class="site-footer__link text-decoration-none">
                <i class="fa-solid fa-chevron-right text-warning me-2"></i>Feautures</a
              >
            </li>
            <li>
              <a href="#" class="site-footer__link text-decoration-none">
                <i class="fa-solid fa-chevron-right text-warning me-2"></i>Pricing</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6 class="fw-bold small mb-3">Síguenos</h6>

          <div class="d-flex gap-3">
            <a href="#" class="site-footer__social" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#" class="site-footer__social" aria-label="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a href="#" class="site-footer__social" aria-label="Youtube">
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="#" class="site-footer__social" aria-label="Facebook">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <hr class="border-secondary opacity-25" />
      <p class="text-center small text-body-secondary mb-0">
        &copy;{{ year }}

        <span> - Todos los derechos reservados.</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer__link,
.site-footer__social {
  color: var(--bs-secondary-color);
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.site-footer__link:hover,
.site-footer__social:hover {
  color: var(--bs-warning);
}

.site-footer__social:hover {
  transform: translateY(-3px);
}
</style>
