<template>
  <div class="loader">
    <div class="yellow"></div>
    <div class="red"></div>
    <div class="blue"></div>
    <div class="violet"></div>
  </div>
</template>

<script>
export default {
  name: "BaseLoader",
};
</script>

<style>
div.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
div.loader > div {
  width: 3vw;
  height: 3vw;
  border-radius: 100%;
  margin: 2vw;
  background-image: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: bounce 1.5s 0.5s linear infinite;
}
.yellow {
  background-color: var(--yellow);
}

.red {
  background-color: var(--red);
  animation-delay: 0.1s;
}

.blue {
  background-color: var(--blue);
  animation-delay: 0.2s;
}

.violet {
  background-color: var(--violet);
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%,
  50%,
  100% {
    transform: scale(1);
    filter: blur(0px);
  }
  25% {
    transform: scale(0.6);
    filter: blur(3px);
  }
  75% {
    filter: blur(3px);
    transform: scale(1.4);
  }
}
</style>