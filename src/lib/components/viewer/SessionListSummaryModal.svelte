<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    import { selectedSession } from '../../../store.js';

export let sessionName;
console.log(sessionName)

</script>

<div class="container">
    <p>
        Eventually a summary of session {sessionName}
    </p>
</div>

<style>
.container{
    width:100%;
    height:100%;
}
</style>

