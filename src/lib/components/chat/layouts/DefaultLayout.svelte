<script>
    import ChatInput from "$lib/components/ui/ChatInput.svelte"

    //Variables
    import { messageHistory } from "../../../../store";
</script>

<div class="container">
    <div class="message-history">
        {#each $messageHistory as message}
            <!-- General testing-->
            <div><p class="user-message">{message}</p></div>
            <div style="display:flex; justify-content:flex-end; width=100%">
                <p class="system-message"> I don't do anything yet!</p>
            </div>
        {/each}
    </div>
    <div class="chat-input">
        <ChatInput />
    </div>

</div>

<style>
    .container{
        display:grid;
        grid-template-rows: 1fr 100px;
        grid-template-columns: 75%;
        grid-template-areas:
        "history"
        "input";
        margin-left:5px;
        margin-bottom:0px;
        height:100%;
        justify-content: center;
    }


    .chat-input{
        grid-area:input;
        align-self:end;
        border:solid 1px;
        height:100px;
        background-color:white;
        border: solid black 1px;
        border-radius:5px;
        text-align:left;
        padding:5px;
    }

    .message-history{
        grid-area:history;
        background-color:white
    }

    .user-message{
        background-color: aliceblue;
        max-width:350px;
        border-radius:5px;
        height:50px;
    }

    .system-message{
        background-color:black;
        color:white;
        min-width:350px;
        border-radius:5px;
        height:50px;
    }
    
</style>