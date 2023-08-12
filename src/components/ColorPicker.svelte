<script lang="ts">
  import { linear } from 'svelte/easing';
  import type { TransitionConfig } from 'svelte/transition';
  let isOpen = false;
  let colors = ['green', 'blue', 'red', 'orange', 'purple'];
  let activeColor = document.documentElement.getAttribute('data-color');

  function setActiveColor(color: string) {
    document.documentElement.setAttribute('data-color', color);
    localStorage.setItem('color', color);
    activeColor = color;
    isOpen = false;
  }

  function customTransition(node: Element): TransitionConfig {
    return {
      css: (t: number, u: number) => {
        return `
          transform: scale(${t}) translateX(-50%) translateY(${u * -100}%);
          opacity: ${t}
        `;
      },
      duration: 200,
      easing: linear,
    }
  }

  window.addEventListener('scroll', (e) => {
    isOpen = false;
  })
</script>

<div class="color-picker">
  <button on:click={() => isOpen = !isOpen} type="button" class="color-picker--button">
    <span class="sr-only">
      Change the color
    </span>
  </button>
  {#if isOpen}
    <div transition:customTransition class="color-picker--panel">
      <span class="sr-only">
        Select a new color
      </span>
      <ul class="color-picker--select-list">
        {#each colors as color}
          <li class="color-picker--select-list-item">
            <button
              type="button"
              style:--start={`rgb(var(--accent-${color}-1))`}
              style:--end={`rgb(var(--accent-${color}-2))`}
              class="color-picker--select-button"
              class:is-active={activeColor === color}
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
}

.color-picker--button,
.color-picker--select-button {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  border: 0.25rem solid rgb(var(--bg-alt-color));
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
  overflow: hidden;
  position: absolute;
  top: 100%;
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
}

.color-picker--select-list-item {
  margin: 0;
  display: flex;
}

.color-picker--select-button {
  transform: scale(0.75);
}

.color-picker--select-button.is-active {
  display: none;
}
</style>
