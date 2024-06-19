<script>
    import {goto} from "$app/navigation";
    import {browser} from "$app/environment";

    // Automaticall re-direct to chat mode
    if(browser){
        goto("/chatr")
    }
</script>

