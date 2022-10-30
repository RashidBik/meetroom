<script>
    import {people} from '$lib/store';

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
    
        
    const sortPeople = (/** @type {string} */ abc) => {
        people.update((currentPeople) => {
            return currentPeople.filter(sorted => {
                if (abc === '*') {
                    sorted.name === `/*/g`
                } else if (abc === '#') {
                    sorted.favourite === true
                } else {
                    sorted.name === `/^${abc}/g`
                }

            })
        })
    }

</script>

<div class="abc-sort">
    {#each alphabete as abc (abc) }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=> sortPeople(abc)} 
        class="abc-row">{abc}</div>
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
        cursor: pointer;
    }
    .abc-row:hover {
        background: rgb(207, 127, 8);
        color: #fff;
    }
</style>