<script>
    import {db} from "$lib/firbase"
    import {collectionData} from "rxfire/firestore";
    import {startWith} from "rxjs/operators";

    export let user;
    export let logout;
    
    let message = '';

    const query = db.collection("chats").orderBy("sentAt");
    const chats = collectionData(query, "id").pipe(startWith([]));

    const sendMessage = () => {
        db.collection("chats").add({
            uid: user.uid,
            message: message,
            avatar: user.photoURL,
            sentAt: +new Date()
        });
        message = "";
    }

</script>

<main>
    <div class="header">
        <div class="logo">Chatroom</div>
        <button on:click={logout}>Logout</button>
    </div>
    <div class="message">
        {#each $chats as chat }
            {#if user.uid == chat.uid}
                <div class="message my-msg">
                    <div class="text">
                        {chat.message}
                    </div>
                </div>
            {:else}
                <div class="message other-msg">
                    <dir>
                        <img src={chat.avatar} alt="">
                    </dir>
                    <div class="text">
                        {chat.message}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    <form>
        <input type="text" bind:value={message}>
        <button on:click={sendMessage}>
            <i class="fa fa-paper-plane"></i>
        </button>
    </form>
</main>