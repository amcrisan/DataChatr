<script lang="ts">
    import { marked } from 'marked'
    import MessageCodeModal from '$lib/components/messages/MessageCodeModal.svelte';

    export let messageContent:any;

    let showCode = false; // State to control modal visibility
    let textLen = 1000;
    let moreText = false;
  
  
    // Helper function to convert a base64 string to a Blob URL
    const base64ToBlobUrl = (base64:any, mimeType:any) => {
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {type: mimeType});
      return URL.createObjectURL(blob);
    };

    console.log(showCode)
  </script>

  <div class="container">
    <div class="message-content">
        <!-- MESSAGE CONTENT CONTAINS VISUALIZATION -->
        {#if messageContent.image}
        <div>
          <div>
            <img src={base64ToBlobUrl(messageContent.image, 'image/bmp')} alt="Message Image" width="500" />
          </div>
          <div class="message-options">
            {#if showCode}
              <button on:click={() => (showCode = false)}>Hide Code</button>
            {:else}
              <button on:click={() => (showCode = true)}>View Code</button>
            {/if}
          </div>
          {#if showCode}
            <MessageCodeModal code={messageContent.text} />
          {/if}
        </div>


        <!--- MESSAGE DOES NOT CONTAIN VISUALIZATION -->
        {:else if messageContent.text}
          <!-- Don't display code - display error -->
          
          {#if messageContent.text.includes('```python')}
          <p class="error">Error: Could not produce a result</p>
          {:else}
            {#if messageContent.text.length > textLen}
              <p>
                {#if moreText}
                {@html marked(messageContent.text)}
                  <button on:click={() => (moreText = false)}>Collapse</button>
                {:else}
                  {@html marked(messageContent.text.substring(0, textLen))}...
                  <button on:click={() => (moreText = true)}>Read More</button>
                {/if}
              </p>
            {:else}
              <div>
                {@html marked(messageContent.text)}
              </div>
            {/if}
          {/if}

      {/if}
  
    </div>
    
  </div>

 

  <style>
    .container{
      display:grid;
      grid-template-columns: auto;
      grid-template-rows: 90% 10%;
      grid-template-areas:
      "content"
      "options";
    }
    .message-content{
      grid-area: content;
    }

    .message-options{
      margin:3.5px;
    }

     /*
      .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
      }
     
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
      }
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      */
    </style>