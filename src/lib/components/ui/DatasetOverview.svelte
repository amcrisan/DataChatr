<script lang="ts">
    export let datasetOverview;
</script>

<div class="container">

    <!--- Description -->
    <h1> {datasetOverview.name} </h1>
    <!--- Description -->
    <p> {datasetOverview.description} </p>
    <!--- Columns -->
    <strong> Columns:</strong>
    {#each datasetOverview.summary as column}    
        <p class="column-name">{column.column_name}</p> 
    {/each}



</div>

<style>
    .container{
        width:100%;
        height:100%;
    }

    h1{
        font-size: 18px;
    }

    .column-name{
        font-size: 14px;
        margin:1px;
        padding:2px;
    }

    .column-name:hover{
        background-color: rgb(100, 100, 100);
        color:white;
    }
    /* To eventually show column name 
    and defintion on the same line 
    .column-name, .column-definition {
    display: inline-block;
    margin: 3px;
    }
    */

</style>