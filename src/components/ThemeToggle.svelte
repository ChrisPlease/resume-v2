<script lang="ts">
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let className = '';

  export { className as class }

  function handleChange(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    currentTheme = theme;
  }
</script>

<div class={`toggle-container ${className}`}>
  <span class="sr-only">
    Switch Theme
  </span>

  <button
    class="light"
    class:active={currentTheme === 'light'}
    on:click={() => handleChange('light')} type="button"
  >
    <i class="fa-solid fa-sun" />
    <span class="sr-only">Set Light Theme</span>
  </button>

  <button
    class="dark"
    class:active={currentTheme === 'dark'}
    on:click={() => handleChange('dark')} type="button"
  >
    <i class="fa-solid fa-moon" />
    <span class="sr-only">Set Dark Theme</span>
  </button>
</div>

<style>
  .toggle-container {
    display: flex;
    align-items: stretch;
    margin: 0 1rem;
    border-radius: 9999rem;
    overflow: hidden;
    border: 1px solid rgba(var(--text-color), 0.15);
  }

  .light,
  .dark {
    padding: 0.5rem 0.75rem;
    border: 0;
    color: rgb(var(--text-color));
    background-size: 200%;
    background-color: rgb(var(--bg-color));
    transition: background-position 100ms linear;
  }

  .light {
    background-position: 0%;
    background-image: linear-gradient(
      to right,
      rgba(var(--link-color), 0),
      rgba(var(--link-color), 0) 50%,
      rgba(var(--link-color), 1) 50%,
      rgba(var(--link-color), 1)
    );
  }

  .light.active {
    background-position: 101%;
  }

  .dark.active {
    background-position: -1%;
  }

  .dark {
    background-position: 100%;
    background-image: linear-gradient(
      to right,
      rgba(var(--link-color), 1),
      rgba(var(--link-color), 1) 50%,
      rgba(var(--link-color), 0) 50%,
      rgba(var(--link-color), 0)
    );
  }

</style>
