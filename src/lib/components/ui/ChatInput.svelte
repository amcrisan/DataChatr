<script lang="ts">
    import { messageHistory } from "../../../store";
    //Variables
    var placeholder ="What do you want to chat about today ...?"

    // Functions
    const handleSubmit= (event:any)=>{
        event.preventDefault();
        const formData = new FormData(event.target)
        const message:String = formData.get('messageInput')
        
        $messageHistory = [...$messageHistory, message]
        console.log($messageHistory)
        event.target.reset();
    }

    const handelOnClick = () =>{
        placeholder = '';
    }

</script>
<form method="POST" on:submit={handleSubmit} on:click={handelOnClick}>
    <input
        name= "messageInput"
        autocomplete="off"
        placeholder={placeholder}
        class="message-input"/>
</form>

<style>

.message-input{
        width:95%;
        height:50px;
    }
</style>