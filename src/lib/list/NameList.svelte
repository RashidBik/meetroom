<script>
    let names = [
        'Ali', 'Ahmad', 'Rashid', 'Bashir', 'Ramazan','Aziz'
    ]
</script>

<div class="main-container">
    {#each names as name }
        <div class="persons-container">
            <div class="persons-pic">
                <img src="src/lib/images/profile.jpg" alt="">
            </div>
            <div class="name-date">
                <span class="persons-name">{name}</span>
                <span class="latest">yesterday</span>
            </div>

        </div>
    {/each}
</div>

<style>
    .main-container {
        width: 100%;
    }
    .persons-container {
        display: flex;
        align-items: center;
        padding: 3px !important;
        margin: 0 !important;
    }
    .persons-pic {
        border: 1px solid #000;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background: gray;
        padding: 2px;
        /* z-index: 1; */
        
    }
    .persons-pic img {
        width: 30px;
        /* height: 30px; */
        /* padding-left: 3px; */
        /* margin: 0 !important; */
        border: none;
        /* border-radius: 50%; */
        background-size: cover;
        /* z-index: 2; */
    }
    .name-date {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 !important;
        padding: 4px;
    }
    .latest {
        font-size: 8px;
    }
</style>