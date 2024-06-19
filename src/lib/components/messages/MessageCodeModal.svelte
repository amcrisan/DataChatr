<script lang="ts">
    import Highlight, {LineNumbers} from "svelte-highlight";
    import python from "svelte-highlight/languages/python";
    import github from "svelte-highlight/styles/github";

    export let code:string;

</script>
    <svelte:head>
    {@html github}
    </svelte:head>

    <div class="container">
        <Highlight language={python} {code} let:highlighted>
            <LineNumbers {highlighted} wrapLines />
        </Highlight>
    </div>

<style>
.container{
    width:65%;
}
</style>

