<script lang="ts">
    export let sessionData:any;
    import Message from '../chat/Message.svelte';
  </script>
  
  {#each sessionData as item}
    {#if item && item.role != 'system'}
      <Message message={item} />
    {/if}
  {/each}