<script lang="ts">
    import { marked } from 'marked'

    export let messageContent:any;
    let showModal = false; // State to control modal visibility
  
    let textLen = 1000;
  
  
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
  
    function toggleModal() {
      showModal = !showModal;
    }
  
  </script>

  <!-- TO DO: Move everything up here -->
  <div class="container">
    <div class="message-content">
    </div>
  </div>


  {#if messageContent.image}
    <div>
      <div>
        <img src={base64ToBlobUrl(messageContent.image, 'image/bmp')} alt="Message Image" width="500" />
      </div>
      <div>
        <button on:click={toggleModal}>View Code</button>
        <button>Edit</button>
      </div>
    </div>
    {#if showModal}
      <div class="modal">
        <div class="modal-content">
          <span on:click={toggleModal} class="close">&times;</span>
          <pre>{messageContent.text}</pre> <!-- Displaying the base64 code -->
        </div>
      </div>
    {/if}
  {:else if messageContent.text}
    <!-- Don't display code - display error -->
    {#if messageContent.text.includes('```python')}
    <p class="error">Error: Could not produce a result</p>
    {:else}
      {#if messageContent.text.length > textLen}
        <p>
          {#if showModal}
          {@html marked(messageContent.text)}
            <button on:click={() => (showModal = false)}>Collapse</button>
          {:else}
            {@html marked(messageContent.text.substring(0, textLen))}...
            <button on:click={() => (showModal = true)}>Read More</button>
          {/if}
        </p>
      {:else}
        <div>
          {@html marked(messageContent.text)}
        </div>
      {/if}
    {/if}
  {/if}
  
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
    </style>