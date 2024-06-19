<script lang="ts">
    import { selectedSession } from '../../../store.js';
    import { writable } from 'svelte/store';
    import { linear } from 'svelte/easing';
  
    import ListMessages from '$lib/components/viewer/ListMessages.svelte'
    import type { NODE_ENV } from '$env/static/private';
    //import LinearConversation from './LinearConversation.svelte';
    //import ThreadedConversation from './ThreadedConversation.svelte';
  
    //let viewMode = 'linear';
    let sessionData:any = writable(null);
    let threadActive:boolean = false;
  
    $: sessionName = $selectedSession ? `Selected session: ${$selectedSession}` : 'No session selected';
    $: if ($selectedSession !== null) {
      fetchSessionData($selectedSession);
    }
  
    async function fetchSessionData(sessionId:string) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/legacy/get_session?id=${sessionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch session data');
        }
        const data = await response.json();
        sessionData.set(data);
      } catch (error) {
        console.error('Error fetching session data:', error);
        sessionData.set(null);
      }
    }
  
  </script>
  
  <div class="container">
    {#if $sessionData}
    <!-- TEST 
      <div class="options-areas">
        <ChatOptions />
      </div>
      -->  
      <div class="message-history {threadActive? 'thread': ''}">
        <ListMessages sessionData={$sessionData}/>
      </div>
      <!-- Show Tread if active -->
      {#if threadActive}
        <div class="thread-area">
          <p>This is a test</p>
       </div>
      {/if}
    {:else}
      <h3> You need to click on a session</h3>
    {/if}
  </div>

  <style>
    .container{
      display:grid;
      width:100%;
      height:100%;
      overflow-y: auto;
      grid-template-areas:
      "options thread"
      "conversation thread";
    }

    .message-history{
      grid-area: conversation;
      width:100%;
      height:100%
    }

    .message-history.thread{
      width:75%
    }

    .thread-area{
      grid-area:thread;
      width:100%;
      height:100%;
    }
  </style>
  