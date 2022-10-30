<script>
    import ChatApp from "$lib/components/chat/ChatApp.svelte";
    import {auth, googleProvider} from "$lib/firbase";
    import {authState} from "rxfire/auth";

    /**
	 * @type {import("@firebase/auth").User | null}
	 */
    let user;

    const unsubscribe = authState(auth).subscribe(usr => user = usr);

    const login = () => {
        auth.signInWithPopup(googleProvider);
    }
    const logout = () => {
        auth.signOut();
    }
</script>

<main>
    {#if user}
        <ChatApp user={user}  logout={logout} />
    {:else}
    <div class="login-form">

    </div>
    <button on:click={login}>
        <i class="fa fa-google"></i>
        Sign In with Google
    </button>
    {/if}
</main>

<style>
    main {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        width: 100%;
        height: 100%;
        min-width: 400px;
        min-height: 500px;
        background: #fff;
        border: 1px solid #000;
        box-shadow: inset hoff voff blur #000;

    }
    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
    .login-form button {
        padding: 10px;
        background: #fff;
        color: #fff;
        font-size: 10px;
        cursor: pointer;
        outline: none;
        border: 1px solid #000;

    }
    .login-form button i.fa {
        padding-right: 10px;
        border-right: 1px solid #bbb;
        color: #555;
    }
</style>