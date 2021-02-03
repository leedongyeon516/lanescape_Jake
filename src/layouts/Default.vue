<template>
  <div class="layout">
    <header>
      <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
      <div
        class="hamburger-menu"
        @click="toggleNavBar"
        :class="{ open: isOpen }"
      >
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </div>
      <ul class="nav-links" :class="{ open: isOpen }">
        <li @click="toggleNavBar">
          <g-link to="/blog/">BLOG</g-link>
        </li>
        <li @click="toggleNavBar">
          <g-link to="/by-laws/">BYLAWS</g-link>
        </li>
        <li @click="toggleNavBar">
          <g-link to="/services/">SERVICES</g-link>
        </li>
        <li @click="toggleNavBar">
          <g-link to="/projects/">PROJECTS</g-link>
        </li>
        <li @click="toggleNavBar">
          <g-link to="/company/">COMPANY</g-link>
        </li>
        <li @click="toggleNavBar">
          <g-link class="contact-us-btn" to="/contact-us/">CONTACT US</g-link>
        </li>
      </ul>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
