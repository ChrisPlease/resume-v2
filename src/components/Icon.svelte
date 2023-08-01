<script lang="ts">
  import type { IconName } from '@fortawesome/fontawesome-svg-core';

  export let name: IconName
  export let size: string | null = null
  export let shake = false
  export let type = 'light'
  export let style = ''
</script>

<i
  style={style}
  class={`fa-${type} ${size ? `fa-${size}` : ''} fa-${name} ${shake ? 'fa-shake' : ''}`}
/>
