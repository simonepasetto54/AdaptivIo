<template>
    <div class="row">
      <nav
        id="navbar_top"
        class="navbar navbar-expand-md navbar-light d-none d-md-block"
      >
        <div class="container-fluid px-4 h-90">
          <div
            class="menu collapse collapse-horizontal navbar-collapse justify-content-center"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="info d-block d-md-none">
                  <div class="sl-nav left">
                    <ul>
                      <li>
                        <span class="fi fi-it"></span>
                        <div class="triangle"></div>
                        <ul>
                          <li>
                            <span class="fi fi-de"></span
                            ><span class="">Deutsch</span>
                          </li>
                          <li>
                            <span class="fi fi-gb"></span
                            ><span class="">English</span>
                          </li>
                          <li>
                            <span class="fi fi-es"></span
                            ><span class="">Español</span>
                          </li>
                          <li>
                            <span class="fi fi-it"></span
                            ><span class="active">Italiano</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="not-selected" href="./">Campagne</a>
              </li>
              <li class="nav-item">
                <a href="/profile" class="not-selected" aria-current="page"
                  >Profilo</a
                >
              </li>
              <li class="nav-item">
                <a href="/orders" class="not-selected" aria-current="page"
                  >Ordini</a
                >
              </li>
              <li class="nav-item">
                <a href="/news" class="not-selected" aria-current="page"
                  >News
                  <!----></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#navbar_top {
    z-index: 1;
    padding: 0;
    height: 70px;
    box-shadow: #32325d40 0 -3px 10px -4px, #0000004d 0 10px 14px -10px;
    .h-90{
      height: 70px;
    }

.menu {
  ul{
        text-transform: uppercase;
    .not-selected{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 150px;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        color: var(--font-color);
        transition: ease all .15s;
        padding: 0 10px;
    }
  }
}
}
</style>