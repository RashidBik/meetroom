<!-- <script>
    import {db} from "$lib/firbase"
    import {collectionData} from "rxfire/firestore";
    import {startWith} from "rxjs/operators";
    {@debug db}
    console.log(db);
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
    <form class="form">
        <input type="text" bind:value={message}>
        <button on:click={sendMessage}>
            <i class="fa fa-paper-plane"></i>
        </button>
    </form>
</main>

<style>
    main {
        background: #eee;
        height: 100%;
    }

    .header .logo {
        font-size: 15px;
        font-weight: bold;
        color:#fff;

    }
    .header button {
        background: transparent;
        padding: 5px 10px;
        border: 1px solid #000;
        color: #555;
        font-size: 15px;
        cursor: pointer;
    }
    .form {
        display: flex;
        justify-content: end;
        width: 100%;
        height: 40px;
        border-top: 1px solid #000;

    }
    .form input {
        flex: 1;
        border: none;
        outline: none;
        color: #111;

    }
    .message {
        width: 100%;
        height: calc(100% - 90px);
        padding: 10px;
        overflow-y: auto;

    }
    .message::-webkit-scrollbar {
        width: 4px;
        background: #fff;
    }
    .message::-webkit-scrollbar-thumb {
        width: 4px;
        /* background: #000; */
    }
    .message .message {
        margin: 10px 0px;
        display: flex;
    }
    
</style> -->