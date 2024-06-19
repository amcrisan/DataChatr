<script lang="ts">
    export let message:any;
    export let show_thread:boolean = false;
  
  
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    import MessageContent from "$lib/components/messages/MessageContent.svelte";
  
    // Function to determine additional class based on thread_id
    function threadClass() {
      return message.thread_id ? 'has-thread' : '';
    }
  
  function openThread() {
      console.log("Button clicked, dispatching event with thread_id:", message.thread_id);
      dispatch('openThread',message.thread_id);
  }

  </script>
   
  <div   class="message {threadClass()}" role={message.role}>
    <!-- LOGO (human, gears, robot)-->
    <div class="icon">
      {#if message.role === 'assistant'}
        <img src="/icons/robot.png" alt="Robot" class="icon-style" width="25" height="25">
      {:else if message.role === 'system'}
        <img src="/icons/gear.png" alt="Gear" class="icon-style" width="25" height="25">
      {:else}
        <img src="/icons/person.png" alt="Person" class="icon-style" width="25" height="25">
      {/if}
    </div>
  
    <!-- MESSAGE CONTENT --->
    <div class="message-content">
      <MessageContent messageContent={message.content} />
    </div>

    <!-- OPEN THREAD + OTHER -->
    <div class="thread-button">
      {#if show_thread}
        <button class="thread-button-style" on:click={openThread}>Open Thread</button>
      {/if}
    </div>
    
  </div>
  

  <style>


    .message {
      display: grid;
      grid-template-columns: 30px auto 150px;
      grid-template-rows: auto;
      grid-template-areas:
      "icon content thread"
      "icon options options ";
  
      position: relative;
      /*padding: 10px;*/
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 5px;
  
      font-size: 14px;
    }
  
    .message[role="user"] {
        background-color: #f0f0f0;
    }
  
    .message[role="assistant"] {
        margin-left: 35px;
        background-color: white;
    }
  

    /* Allocation items to grid areas */
    .message-content{
        grid-area:content
    }

     /* Additional styles for messages with a thread_id */
    .has-thread {
        border: 2px solid rgba(0, 0, 255, 0.455); /* Example style */
        margin-left: 55px;
    }
    .message[role="assistant"].has-thread {
        margin-left: 55px; /* Increased margin for threaded assistant messages */
    }
  
    .icon {
        grid-area:icon;
    }
    .icon-style{
        margin:10px 5px 5px 0px;
    }
  
    .thread-button{
        grid-area:thread;
        margin: 5px 2px 2px 2px;
    }

    .thread-button-style {
        
        max-height: 25px;
        max-width:100px;
        background-color: #007BFF;
        border: none;
        border-radius: 15px;
        color: white;
        cursor: pointer;
    }
    
  </style>
 