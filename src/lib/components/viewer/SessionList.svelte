<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    import { selectedSession } from '../../../store.js';

    import SessionListSummaryModal from '$lib/components/viewer/SessionListSummaryModal.svelte'
    
    const sessions = writable([] as string[]);    
    let hoverSession:String = '';
    
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
  
  <div class="container">
  <ul class="session_list">
    {#each $sessions as session}
    <div class="session-content">
      <button class="session-file" 
        on:click={() => selectedSession.set(session.replace('.json', ''))}
        on:mouseenter={()=> hoverSession = session.replace('.json','')}
        >
        {session.replace('.json', '')}
      </button>
      <div class="info-box">
        <SessionListSummaryModal sessionName={hoverSession}/>
      </div>
    </div>
    {/each}
  </ul>
  </div>

<style>

  .container{
    max-height:95vh;
    position:relative;
  }
  .session_list{
    padding-left:2px;
  }
.session-file{
    border:transparent;
    background-color: transparent;
    display:block;
    padding-bottom:2px;
}
.session-content{
  position:relative;
}

.session-content:hover {
    background-color: lightblue;
}

.session-content:focus {
  background-color: lightblue;
}
.info-box{
  position:absolute;
  background:white;
  text-align:center;
  width:350px;
  height: 200px;
  top:0;
  margin-left:5px;
  left:100%;
  border: solid lightgrey 1px;
  box-shadow: 0 15px 36px 0 rgba(92, 92, 92, 0.524);
  
}
.session-file:not(:hover) + .info-box{
  display:none;
}
.session-file:hover + .info-box{
  display: block;
}

</style>