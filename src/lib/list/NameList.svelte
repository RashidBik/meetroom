<script>
    import {people} from '$lib/store';
	import { createEventDispatcher, onMount } from 'svelte';

    let alphabete = [
        '#',
        '*','A','B',
        'C','D','E',
        'F','G','H',
        'J','K','L',
        'M','N','O',
        'P','Q','R',
        'S','T','U',
        'V','W','X',
        'Y','Z','0'
        ];
    /**
     * @type {{ id: number; username: string; name: string; bio: string; profile_pic: string; favourite: boolean; }[]}
	 */
    export let idx = '*';

    let sortedContacts = $people;

    const dispatch = createEventDispatcher();
    console.log(idx);
</script>

<main class="contacts">
    <div class="abc-sort">
        {#each alphabete as abc (abc) }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={()=> dispatch('alphabets',abc)} 
            class="abc-row">{abc}</div>
        {/each}
    </div>
    <div class="main-container">
        {#each sortedContacts as person (person.id) }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
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
</main>
    
<style>
 .contacts {
	display: flex;
	padding: 0 !important;
}
.abc-sort {
    font-size: 12px;
}
.abc-row {
    padding: 2px;
    border: 1px solid rgb(207, 127, 8);
    border-top: none;
    border-left: none;
    text-align: center;
    cursor: pointer;
}
.abc-row:hover {
    background: rgb(207, 127, 8);
    color: #fff;
}
    /* /////// */
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