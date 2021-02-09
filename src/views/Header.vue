<template>
  <header class="header">
    <div class="header__inner appear up">
      <div class="logo item">
        <router-link
          to="/"
          class="logo__kira's">
          <i>Portfolio</i>
        </router-link>
      </div>
      <nav class="header__nav">
        <ul class="header__ul">
          <li class="header__li item">
            <router-link
              to="/"
              active-class="link-item">
              Home
            </router-link>
          </li>
          <li class="header__li item">
            <router-link
              to="/about"
              active-class="link-item">
              About
            </router-link>
          </li>
          <li class="header__li item">
            <router-link
              to="/works"
              active-class="link-item">
              Works
            </router-link>
          </li>
          <li class="header__li item">
            <router-link
              to="/social"
              active-class="link-item">
              Social
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-width {
  width: 90%;
  margin: 0 auto;
  max-width: 1070px;
}

.header {
  width: 100%;
  z-index: 100;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 10px 0 25px -10px rgba(0, 0, 0, 0.5);

  &.triggered {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 10px 0 25px -10px rgba(0, 0, 0, 0.5);
  }

  &__nav {
    display: none;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend .content-width;
  }

  &__ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__li {
    margin-left: 20px;
    text-transform: uppercase;

    & > a {
      color: black;
      text-decoration: none !important;
    }

    & .link-item {
        font-weight: bold;
        font-size: 20px;
      }
  }

  & .logo {
    justify-content: center;
    font-size: 38px;

    & > a {
      color: black;
      text-decoration: none !important;
    }
  }
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;

  &__btn {
    background-color: unset;
    border: none;
    outline: none !important;
    cursor: pointer;

    & > span {
      background-color: black;
      width: 35px;
      height: 2px;
      display: block;
      margin-bottom: 9px;
      transition: transform 0.7s;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media screen and (min-width: 960px) {
.header {
  &__nav {
      display: block;
  }
}

.mobile-menu {
  &__btn {
      display: none;
  }
}
}
</style>
