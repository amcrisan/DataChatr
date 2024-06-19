<script lang="ts">
    //Svelete Elements
    import { fade } from 'svelte/transition';

    // Side Panel
    import ChatSidePanel from "$lib/components/chat/ChatSidePanel.svelte"

    // Layouts to expierment with
    import DefaultLayout from "$lib/components/chat/layouts/DefaultLayout.svelte"

    // Variables
    let sideBarOpen = true;
    let chatLayout = "default";

    //Functions
   const toggleSideBar = ()=>{
        sideBarOpen = !sideBarOpen
        console.log(sideBarOpen)
    }


</script>

<div class="chat-container"  class:open={sideBarOpen} class:closed={!sideBarOpen} >
    <!-- Side Panel -->
    <div class="side-panel">
        <div class="collapse-sidebar" >
            <!-- svelte-ignore a11y-autofocus -->
            <button class="button-collapse-sidebar" on:click ={toggleSideBar}>
            <img src="/icons/close.png" 
                alt="Close Side Panel" 
                width=25px
                height=25px
                class:rotate180={!sideBarOpen}
            />
            </button>
        </div>
        <br>
        {#if sideBarOpen}
        <div transition:fade={{duration:250}}>
            <ChatSidePanel />
        </div>
        {/if}
    </div>


    <!-- Chat Area -->
    <div class="chat-panel">
        {#if chatLayout=== "default"}
            <DefaultLayout />
        {/if}
    </div>
  
</div>

<style>
    .chat-container{
        display:grid;
        grid-template-columns: 300px  auto;
        transition: 500ms ease;
        width:100%;
        height:98vh;
        grid-template-areas:
        "sidepanel chat";
    }
    /* Change grid sizes on sidebar close */
    .closed{
        grid-template-columns: 35px auto;
    }

    /* --- Side Bar  -- */
    .side-panel{
        grid-area:sidepanel;
        background-color: rgb(233, 233, 233);
        overflow-x:visible;
    }

    .collapse-sidebar{
        display: flex;
        justify-content: flex-end;
    }

    .button-collapse-sidebar{
        background:none;
        border:none;
        border-radius:5px;
        padding:5px;
    }
    .button-collapse-sidebar:hover{
        background-color: rgba(147, 146, 146, 0.35);
        transition: background-color 0.5s ease;
    }

    .rotate180 {
        transform: rotate(180deg);
    }

     /* --- Chat Panel Content -- */
    .chat-panel{
        grid-area:chat;
        background-color: beige;
        text-align:center;
    }
</style>
