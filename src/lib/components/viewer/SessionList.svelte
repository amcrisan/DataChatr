<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    import { selectedSession } from '../../../store.js';
    
    const sessions = writable([]);
  
    async function fetchSessions() {
      try {
        const response = await fetch('http://127.0.0.1:5000/legacy/list_sessions');
        if (!response.ok) {
          throw new Error('Failed to fetch sessions');
        }
        const data = await response.json();
        sessions.set(data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
        sessions.set([]);
      }
    }
  
    onMount(() => {
      fetchSessions();
    });
  </script>
  
  <ul class="session_list">
    {#each $sessions as session}
      <button class="session_file" on:click={() => selectedSession.set(session.replace('.json', ''))}>
        {session.replace('.json', '')}
      </button>
    {/each}
  </ul>

<style>
.session_list{
  padding-left:2px;
}
.session_file{
    border-radius: 5px;
    border:solid white;
    background-color:white;
    display:block;
    padding-bottom:0px;

}

.session_file:hover {
    background-color: lightblue;
}


</style>