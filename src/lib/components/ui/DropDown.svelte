<script lang="ts">
    export let options:string [] = []
    export let value:string = ''
    export let label:string='Please select a dataset:'
    export let index=0;

    $:{
        value=options[index];
    }

</script>

<p class="dropdown-label">
    {label}
</p>
<select class="dropdown"
    bind:value={index}
    >
    {#each options as option, i}
        <option value={i}>{option}</option>
    {/each}
</select>


<style>

    .dropdown{
        width:100%;
        height:30px;
        border-radius:10px;
        margin-bottom:10px;
    }

    .dropdown-label{
        font-size:12px;
        margin-bottom:0;
        margin-left:3px;
    }
</style>
