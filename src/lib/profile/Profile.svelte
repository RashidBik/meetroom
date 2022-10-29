<script>
    import SelectMessage from '$lib/selectMsg/SelectMessage.svelte';
    import {people} from '$lib/store';
    // import Eliza from './Eliza.svelte';


</script>
{#each people as person }
    {#if person.id === 1}
        <main>
            <div class="profile-container">
                <div class="profile-bg">
                    <div class="name">
                        <div class=" ">{person.name}</div>
                        <span class:yellow={person.favourite} class="star" on:click={()=>  person.favourite = true}>&star;</span>
                    </div>
                    <div class="bio">&lagran; {person.bio} &gamma; </div>
                </div>
            </div>
            <SelectMessage />
            <div class="">
                <!-- <Eliza /> -->
            </div>
        </main>
    {/if}   
{/each}

<style>
    .profile-container {
        background: lightblue;
        height: 200px;
        position: relative;
    }
    .profile-bg {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: url('public/profile.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;    
    }
    .name {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        font-size: larger;
        font-weight: bold;
    }
    .name div{
        font-style: italic;
    }
    .yellow {
        color:yellow;
    }
    .bio {
        text-align: center;
        font-size: 16px;
        background: rgba(0,0,0,0.3);
    }
</style>