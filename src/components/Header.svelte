<script lang="ts">
  import { blur } from 'svelte/transition'
  const layers = 7
  let filters = ['#filter1', '#filter2']

  let y
  let wHeight = 0
  let filter = false

  let sun
  let moon

  $: {
    filter = !!Math.round((y * 2) / wHeight)
    sunRiseSet(sun, y)
    moonRiseSet(moon, y)
  }

  let skyColors = [197]

  function hourToSkyColor(hour) {
    // hour is in range 0..23
    const h = hourToSkyHue(hour)
    const s = (hour * 100) / 24
    const l = 100 - Math.sin(hour / 24) * 70 - 30
    const a = 1 - hour / 24
    const c = `hsl(${h}, ${s}%, ${l}%, ${a})`
    return c // 'hsl(180.4, 99.9999%, 50.888%)'
  }

  function hourToSkyHue(hour) {
    // hour is in range 0..23
    const h = skyColors[0]
    return h
  }

  function sunRiseSet(node, scroll) {
    node && (node.style.transform = `translate(${scroll}px, ${scroll}px)`)
  }

  function moonRiseSet(node, scroll) {
    node &&
      (node.style.transform = `translate(${scroll}px, ${-Math.min(
        scroll * 2,
        wHeight
      )}px)`)
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={wHeight} />

<header
  class="bg-fixed w-full h-full bg-center bg-cover bg-no-repeat min-h-screen bg-transparent"
>
  <div class="absolute parallax-container">
    <div class="fixed behind sky-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        class="w-screen h-screen"
      >
        <rect
          id="sky"
          x="0"
          y="0"
          width="100%"
          height="100%"
          style="fill:{hourToSkyColor(Math.round((y * 24) / wHeight))}"
        />
      </svg>
      <div class="fixed sun" bind:this={sun} />
      <div class="fixed moon" bind:this={moon} />
    </div>

    {#each { length: layers } as _, ilayer}
      <img
        class="fixed w-full bottom-0"
        style="transform: translate(0,{(-y * ilayer) / (layers - 1)}px)"
        src="/images/parallax/layer_{ilayer}.png"
        alt="parallax layer {ilayer}"
      />
    {/each}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={y}
      class="fixed w-full bottom-0 parallax-container cover"
    >
      <rect
        id="sky"
        x="0"
        y="0"
        width="100%"
        height="100%"
        style="fill:black"
      />
    </svg>
  </div>

  <slot />
</header>

<style>
  .parallax-container.cover {
    will-change: transform;
    z-index: -1;
  }
  .parallax-container img {
    will-change: transform;
    z-index: -1;
  }
  .behind {
    z-index: -10;
  }

  @keyframes suntrack {
    from {
      transform: rotate(0.15turn);
    }
    to {
      transform: rotate(0.95turn);
    }
  }

  @keyframes sunpulse {
    from {
      box-shadow: 0 0 100px #ff0, 0 0 100px #ff0;
    }
    to {
      box-shadow: 0 0 50px #ff0, 0 0 75px #ff0;
    }
  }
  .sky-container {
    margin: 0;
    background-color: #000;
    background-image: url(/images/parallax/sky-night.jpg);
    background-size: cover;
    /* position: relative; */
    min-height: 100vh;
    overflow: hidden;
    will-change: transform;
  }
  .sun {
    width: 5vw;
    height: 5vw;
    background: #ff0;
    background: radial-gradient(
      ellipse at center,
      #f90 0%,
      #fc0 60%,
      #ff0 100%
    );
    border-radius: 100%;
    position: absolute;
    top: 7vw;
    left: 40%;
    will-change: transform;
    box-shadow: 0 0 100px #ff0, 0 0 100px #ff0;
    /* transform-origin: 20vw 60vw; */
    /* animation: sunpulse 10s alternate infinite; */
  }
  .moon {
    background-image: url(/images/parallax/moon.png);
    width: 8vw;
    height: 8vw;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90% 90%;
    border-radius: 100%;
    bottom: 0vw;
    left: 0%;
    /* transform-origin: -28vw 7vw; */
    /* animation: moontrack 24s infinite forwards linear; */
    /* opacity: .8; */
  }
</style>
