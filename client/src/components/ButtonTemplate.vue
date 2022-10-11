<script>
export default {
  name: "ButtonTemplate",
  props: ["btn"],
};
</script>
<template>
  <div :class="btn.styleDiv">
    <a href="">
      <button :class="btn.style">{{ btn.name }}</button>
    </a>
  </div>
</template>
