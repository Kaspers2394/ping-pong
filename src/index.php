<?php
include_once "resource/incl/header.php"
?>
<section id="gameboard">

<section id="scoreboard">


<article class="player1">
    <div id="score1"></div>
<input type="text" id="player1" value="spiller1"  maxlength="10">


    <figure class="icon_container">
        <img class="faded" src="resource/img/Player/Falcom.svg" alt="Milenium Falcon "  onclick="document.getElementById('player1_icon').value=this.src;">
        <img class="faded" src="resource/img/Player/Deathstar.svg" alt="Deathstar"  onclick="document.getElementById('player1_icon').value=this.src;">

        <img class="faded" src="resource/img/Player/Danmark.svg" alt="Dansk flag"  onclick="document.getElementById('player1_icon').value=this.src;">
        <img class="faded" src="resource/img/Player/left_soccer_boot.svg" alt="Venstre fodboldstøvle"  onclick="document.getElementById('player1_icon').value=this.src;">

        <input type="hidden" id="player1_icon">
    </figure>

    </article>

    <article id="gamestart">
<input type="button" value="Nyt spil" onclick="initgame()">




        <figure class="figure_container"><img src="resource/img/BG/soccerfield.svg" alt="Fodbold"  onclick="document.getElementById('background').value=this.src;">
            <img src="resource/img/BG/space_bg.svg" alt="Fodbold" onclick="document.getElementById('background').value=this.src;">
            <input type="hidden" name="background" id="background" >



    </article>


    <article class="player2">
        <div id="score2"></div>
<input type="text" id="player2" value="spiller2" maxlength="10">


        <figure class="icon_container">
            <img class="faded" src="resource/img/Player/Falcom.svg" alt="Milenium Falcon "  onclick="document.getElementById('player2_icon').value=this.src;">
            <img class="faded" src="resource/img/Player/Deathstar.svg" alt="Deathstar"  onclick="document.getElementById('player2_icon').value=this.src;">

            <img class="faded" src="resource/img/Player/sverige.svg" alt="Seriges flag"  onclick="document.getElementById('player2_icon').value=this.src;">
            <img class="faded" src="resource/img/Player/right_soccer_boot.svg" alt="Højre fodboldstøvle"  onclick="document.getElementById('player2_icon').value=this.src;">

            <input type="hidden" id="player2_icon">
        </figure>


    </article>
</section>
</section>
<?php
include_once "resource/incl/footer.php"
?>
