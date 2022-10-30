<script>
    import ChatApp from '$lib/components/chat/ChatApp.svelte';
import SelectMessage from '$lib/selectMsg/SelectMessage.svelte';
    import {people} from '$lib/store';
    // import Eliza from './Eliza.svelte';
    export let userId = 0;
    
</script>
{#each $people as person }
    {#if person.id === userId}
        <main>
            <div class="profile-container">
                <div class="profile-bg" style={`background-image: url('${'src/lib/images/social.jpg'}');`}>
                    <div class="name">
                        <div class=" ">{person.name}</div>
                        <span class="yellow star" >&star;</span>
                    </div>
                    <div class="bio">&lagran; {person.bio} &gamma; </div>
                </div>
            </div>
            <SelectMessage />
            <div class="">
              <ChatApp />
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
        background-position: center;
    }
    .name {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        font-size: larger;
        font-weight: bold;
        color: antiquewhite;
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
        color: aliceblue;
    }
</style>