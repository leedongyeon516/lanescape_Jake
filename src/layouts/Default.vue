<template>
  <div class="layout">
    <header>
      <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
      <ul class="nav-links-extra">
        <li>
          <g-link class="contact-us-btn" to="/contact-us/">CONTACT US</g-link>
        </li>
      </ul>
      <div class="hamburger-menu" @click="toggleNavBar" :class="{ open: isOpen }">
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

<script>
export default {
  data: () => {
    return {
      isOpen: false
    };
  },
  created() {
    /*
    // Connect Contentful
    const query = `
    {
      blog(id: "5EIXIYrMumspz1ExQHHaEF") {
        title
        summery
        date
        content {
          json
        }
      }
    }`;

    window
      .fetch(
        "https://graphql.contentful.com/content/v1/spaces/vagc6170xsnj/explore?access_token=qxzYwiX5M_xwHwSPpkSYMC09DlCywhqLkgzU-pqkRrA",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ query })
        }
      )
      .then(res => res.json())
      .then(json => console.log(json.data));*/
  },
  methods: {
    toggleNavBar() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  color: #222;
  position: relative;
  padding-left: 5vw;
  transition: 0.5s;
}

.nav-links {
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  padding-right: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links li {
  position: relative;
  list-style: none;
}

.nav-links li a {
  font-size: 0.75rem;
  text-decoration: none;
  color: #222;
  position: relative;
  margin-left: 30px;
  transition: 0.5s;
}

.contact-us-btn {
  color: #fff !important;
  background: #222;
  padding: 10px 20px;
}

.contact-us-btn:hover {
  background: #333;
}

.nav-links-extra {
  display: none;
}

.hamburger-menu {
  position: fixed;
  right: 5vw;
  display: none;
  cursor: pointer;
  z-index: 101;
}

.menu-line {
  background: #222;
  width: 30px;
  height: 2px;
  margin: 4.5px 0;
  transition: all 0.5s ease-in-out;
}

/* Styles that are applied globally */
.container {
  position: relative;
  top: 10vh;
  width: 75%;
  margin: auto;
}

.page-title {
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}

/* Screen for tablets and mobiles */
@media screen and (max-width: 868px) {
  .logo {
    font-size: 1.5rem;
  }

  .nav-links {
    background: rgb(150, 190, 150);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    padding-right: 0;
    flex-direction: column;
    clip-path: circle(100px at 125% -25%);
    -webkit-clip-path: circle(100px at 125% -25%);
    transition: all 1s ease-in-out;
  }

  .nav-links.open {
    clip-path: circle(2000px at 125% -25%);
    -webkit-clip-path: circle(2000px at 125% -25%);
  }

  .nav-links li {
    margin: 20px 0;
  }

  .nav-links li a {
    color: #222;
    margin-left: 0;
  }

  .nav-links li a:hover::after {
    content: " ⇁";
  }

  .nav-links-extra {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
    padding-right: 15vw;
    transition: all 0.5s ease-in-out;
  }

  .nav-links-extra li a {
    font-size: 0.5rem;
    text-decoration: none;
  }

  .nav-links-extra .contact-us-btn {
    padding: 10px 15px;
  }

  .hamburger-menu {
    display: block;
  }

  .hamburger-menu.open .menu-line:nth-child(1) {
    transform: rotate(-405deg);
  }

  .hamburger-menu.open .menu-line:nth-child(2) {
    transform: translate(1000%);
  }

  .hamburger-menu.open .menu-line:nth-child(3) {
    transform: translateY(-13px) rotate(45deg);
  }
}

@media screen and (max-width: 468px) {
  .nav-links-extra {
    display: none;
  }
}
</style>
