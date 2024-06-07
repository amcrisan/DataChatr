
<script>
    import SessionList from '$lib/components/viewer/SessionList.svelte'
  import SessionViewer from '$lib/components/viewer/SessionViewer.svelte';
    import GetIndividualSession from '$lib/components/viewer/SessionViewer.svelte';
  </script>

<div class="container">
  <div class="session-list-container">
    <SessionList />
  </div>
  <div class="session_view">
    <SessionViewer />
  </div>
</div>

<style>
  .container{
    display:grid;
    grid-template-columns:5% 95%;
    grid-template-rows:auto;
    grid-template-areas: "list session";
    width:100%;
    height: 100%;

  }

  .session-list-container{
    grid-area:list;
    max-height: 97vh;
    overflow-y: auto;
    border: solid 1.5px lightgrey;
    padding:2px;
  }

  .session_view{
    grid-area:session;
    max-height: 97vh;
    overflow-y:auto;
    border:solid 1.5px lightcoral;
    margin-left:5px;

  }

</style>
