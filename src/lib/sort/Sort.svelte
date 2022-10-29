<script>
    let alphabete = ['*','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
</script>

<div class="abc-sort">
    {#each alphabete as abc }
        <div class="abc-row">{abc}</div>
    {/each}
</div>

<style>
    .abc-sort {
        font-size: 12px;
    }
    .abc-row {
        padding: 2px;
        border: 1px solid rgb(207, 127, 8);
        border-top: none;
        border-left: none;
        text-align: center;

    }
</style>