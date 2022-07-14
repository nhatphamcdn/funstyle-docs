<script setup lang="ts">
</script>

<template>
  <section class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h2>#funstyle</h2>
        <div class="content">
          <h3>A minimal CSS Framework inspired by Bootstrap.</h3>
          <p>
            It just pre-built some of the most commonly used components and only use flex-box for grid systems, for
            lightweight purpose.
            This is a CSS Framework created for experience, it is not recommended to use for real projects.
          </p>
          <div>
            <p>Try and feel it like a game 😀</p>
            <div>
              <code>
                npm i @nhatphamfks-org/funstyle
              </code>
              <a href="#" role="button" class="ml-md-2 mt-4 mt-md-0">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: calc(100vh - 65px - 65px);

  @include media-breakpoint-up(md) {
    height: calc(100vh - 65px - 65px);

    > div {
      height: 100%;
    }
  }
}

h2 {
  --fs-font-size: 2.75rem;
}

h3 {
  --fs-font-size: 1.75rem;
}

.content {
  @include media-breakpoint-up(md) {
    max-width: 75%;
    margin: auto;
  }

  p {
    font-size: 125%;
  }
}

code {
  background-color: rgba(33, 37, 41, 0.075);
  padding: .75rem 1rem;
  border-radius: 4px;

  &::before {
    color: #777;
    content: "$ ";
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
}
</style>