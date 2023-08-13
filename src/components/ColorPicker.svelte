<script lang="ts">
  import { fade, type TransitionConfig } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { isEqual } from 'lodash';

  let activeButton: HTMLButtonElement | null;
  let activeColor = document.documentElement.getAttribute('data-color');
  let className = '';
  let isOpen = false;

  let colors = ['green', 'blue', 'red', 'orange', 'purple'];

  $: inactiveColors = colors.filter(color => color !== activeColor);

  function setActiveColor(color: string) {
    document.documentElement.setAttribute('data-color', color);
    localStorage.setItem('color', color);
    activeColor = color;
    isOpen = false;
  }

  function transitionOpen(
    node: HTMLElement,
    {} = {},
  ): TransitionConfig {
    const { value } = node.querySelector<HTMLButtonElement>('button')!;
    const inactiveLen = inactiveColors.length;
    const index = inactiveColors.indexOf(value);

    const { x, y, start, end } = handleFoo(index, inactiveLen, 2.5, 0.7);

    node.style.transform = `translate(${x}rem, ${y}rem) scale(${start})`;

    return {
      css(t) {
        return `transform: translate(${x * t}rem, ${y * t}rem) scale(${start})`;
      },
      delay: index * 50,
      duration: 500,
      easing: cubicOut,
    };
  }

  function transitionClose(
    node: HTMLElement,
    {
      inactiveColors: prevInactiveColors,
    }: {
      inactiveColors: string[],
    } = {
      inactiveColors: [],
    },
  ): TransitionConfig {
    const { value } = node.querySelector<HTMLButtonElement>('button')!;
    const inactiveLen = inactiveColors.length;
    const index = isEqual(prevInactiveColors, inactiveColors)
      ? inactiveColors.indexOf(value)
      : prevInactiveColors.indexOf(value);

    const { x, y, start, end } = handleFoo(index, inactiveLen, 2.5, 0.75)

    if (activeColor === value) {
      node.style.zIndex = '2';
      return {
        css(t, u) {
          return `transform: translate(${x * t}rem, ${y * t}rem) scale(${start + (u * (end - start))})`;
        },
        delay: (inactiveLen * 50),
        duration: 500,
        easing: cubicOut,
      };
    }

    return {
      css(t) {
        return `transform: translate(${x * t}rem, ${y * t}rem) scale(${(t * start)})`;
      },
      delay: index * 50,
      duration: 500,
      easing: cubicOut,
    };
  }

  function transitionInactive(
    node: HTMLButtonElement,
  ): TransitionConfig {
    node.style.background = `linear-gradient(35deg, rgb(var(--accent-${node.value}-1)), rgb(var(--accent-${node.value}-2)))`
    return {
      css(t) {
        return `transform: scale(${t})`
      },
      easing: cubicOut,
    };
  }

  interface Foo {
    x: number;
    y: number;
    start: number;
    end: number;
  }

  function handleFoo(index: number, length: number, radius: number, scaleFrom: number): Foo {
    const point = index / (length - 1);
    const radians = ((point * 180) - 90) * (Math.PI / 180);

    return {
      x: radius * Math.sin(radians),
      y: radius * Math.cos(radians),
      start: scaleFrom,
      end: 1,
    };
  }

  window.addEventListener('scroll', (e) => {
    isOpen = false;
  });

  export { className as class };
</script>

<div class={`color-picker ${className}`}>

  {#key activeColor}
    <button
      bind:this={activeButton}
      on:click={() => isOpen = !isOpen}
      out:transitionInactive
      in:fade={{ delay: 500, duration: 0 }}
      type="button"
      class="color-picker--button"
      value={activeColor}
    >
      <span class="sr-only">
        Change the color
      </span>
    </button>
  {/key}
  {#if isOpen}
    <div class="color-picker--panel">
      <span class="sr-only">
        Select a new color
      </span>
      <ul class="color-picker--select-list">
        {#each colors.filter(c => c !== activeColor) as color (color)}
          <li
            in:transitionOpen|global
            out:transitionClose|global={{ inactiveColors }}
            class="color-picker--select-list-item"
          >
            <button
              type="button"
              style:--start={`rgb(var(--accent-${color}-1))`}
              style:--end={`rgb(var(--accent-${color}-2))`}
              class="color-picker--select-button"
              value={color}
              on:click={() => setActiveColor(color)}
            >
              <span class="sr-only">{color}</span>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

</div>


<style>
.color-picker {
  position: relative;
  margin: 0 2rem;
  width: 2rem;
  height: 2rem;
}

.color-picker--button,
.color-picker--select-button {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 0.25rem solid rgb(var(--bg-alt-color));
  position: relative;
}

.color-picker--button {
  background: linear-gradient(
    35deg,
    rgb(var(--link-color)),
    rgb(var(--link-hover-color))
  );
  z-index: 5;
  position: relative;
  display: flex;
}

.color-picker--select-button {
  background: linear-gradient(
    35deg,
    var(--start),
    var(--end)
  );
}

.color-picker--button,
.color-picker--select-button {
  cursor: pointer;
}

.color-picker--panel {
  /* overflow: hidden; */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: 0% 0%;
  z-index: 4;
}

.color-picker--select-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
}

.color-picker--select-list-item {
  margin: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: calc(50% - 1rem);
  transform: scale(0.75);
  z-index: 1;
}
</style>
