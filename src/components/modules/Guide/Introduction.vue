<script setup lang="ts"></script>

<template>
  <h3>Get started with #funstyle</h3>

  <section>
    <h5 class="mb-3">Overview</h5>
    <p>#funstyle is a minimal CSS framework inspried by Bootstrap. It aims for a lightweight framework, easy to customize
      and modify, and high compatibility.</p>
  </section>

  <section class="mb-4">
    <h5 class="mb-3">Quick start</h5>
    <div class="mt-2">
      <p>
        Create a new file <code>index.html</code> and add css link to stylesheet.
      </p>
        
      <highlightjs language="xml" code="
  &lt;!doctype html&gt;
  &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
      &lt;meta charset=&quot;utf-8&quot;&gt;
      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
      &lt;title&gt;#funstyle example&lt;/title&gt;
      &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/@nhatphamfks-org/funstyle@1.0.1/css/funstyle.min.css&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Hello, world!&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;
      " />
    </div>
  </section>

  <section>
    <h5 class="mb-3">Supports</h5>
    <p>#funstyle is just getting started, and it needs everyone's input to get better, and the author can learn a lot from that.
      <br /> You can add issues or discuss anything at <a href="https://github.com/nhatphamcdn/funstyle/issues/new">Github</a>, it will be great to make #funstyle better.</p>
  </section>

  <section>
    <h5 class="mb-3">Warning</h5>
    <p>This is a CSS Framework created for experience, it is not recommended to use for real projects.</p>
  </section>

</template>

<style lang="scss" scoped>
::v-deep {
  code {
    white-space: pre;
  }
}
</style>