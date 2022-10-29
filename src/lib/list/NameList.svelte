<script>
    import {people} from '$lib/store';
	import { createEventDispatcher } from 'svelte';

    // export let contacIid;
    const dispatch = createEventDispatcher();

</script>

<div class="main-container">
    {#each $people as person (person.id) }
        <div class="persons-container" on:click={()=> dispatch('personId',person.id)}>
            <div class="persons-pic">
                <img src="src/lib/images/profile.jpg" alt="">
            </div>
            <div class="name-date">
                <span class="persons-name">{person.name}</span>
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
        cursor: pointer;
    }
    .persons-container:hover {
        background: rgb(212, 210, 210);
    }
    .persons-pic {
        padding: 2px;
        text-align: center;
        
    }
    .persons-pic img {
        display: block;
        width: 33px;
        height: 30px;
        margin: 0 !important;
        border: 2px solid black;
        border-radius: 50%;
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