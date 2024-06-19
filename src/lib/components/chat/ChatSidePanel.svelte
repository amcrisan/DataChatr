<script lang="ts">
    //Components
    import DropDown from "$lib/components/ui/DropDown.svelte";
    import DatasetOverview from "$lib/components/ui/DatasetOverview.svelte";
   
    //Variables
   import {selectedDataset} from '../../../store';
   import {datasetOverview} from '../../../store';

    let datasetList:string[]= 
        ['',
        'titanic', 
        'cars'
        ]
    let sessionOverview:any=null;
    
    //Functions
    const loadDatasetOverview = async() =>{
        try {
            const response = await fetch(`http://127.0.0.1:5000/get_example_data?name=${$selectedDataset.trim()}`);
            if (!response.ok) {
                        throw new Error('Failed to load dataset JSON');
                    }
                    const data = await response.json();
                    $datasetOverview = data;
                    console.log(data);

        }catch (error){
            console.error('Error loading dataset JSON:', error)
        }
    }

    // ---  Reactive elements ---
    // Load the dataset the user selects
    $: $selectedDataset === '' ? console.log("None Selected") : loadDatasetOverview()


</script>

<div class="side-panel-content">
   <!-- <h1> Dataset </h1> -->
    {#if $selectedDataset === ''}
        <div class="dropdown">
            <DropDown 
            bind:value={$selectedDataset}
            options={datasetList}
            />
        </div>
    {:else}
        <DatasetOverview datasetOverview={$datasetOverview} />
    {/if}

</div>

<style>
    .side-panel-content{
        display:block;
        margin-left:15px; 
    }


    .dropdown{
        width:175px;
        height:25px;
        margin-right:10px;
        padding-right:10px;
        margin-top:-5px;
    }

    
</style>