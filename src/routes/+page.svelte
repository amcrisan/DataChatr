<script>
 let viewAnalysisURL = '/viewer';
let startNewAnalysisURL = '/data';
</script>

<div class="centered">
    <p class="greetings"> What would you like to do today? </p>

    <div class="button-container">
        <a class= "opt-button" href={viewAnalysisURL}>View Prior Analysis</a>
       <a class= "opt-button" href={startNewAnalysisURL}>Start New Analysis</a>
    </div>
</div>

<style>
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border:solid lightgrey 2px;
    border-radius: 10px;
    height : 150px;
    width: 450px;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.opt-button{
    padding:5px;
    margin:5px;
    color:black;
    border: solid 2px lightskyblue;
    border-radius: 5px;
    background-color: lightblue;
    text-decoration: none;    
}

.greetings{
    text-align:center;
    font-size:1.5em;
}


</style>