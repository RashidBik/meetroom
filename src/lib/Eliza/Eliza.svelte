<script>
	import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	
	let div;
	let autoscroll;

	beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

	const eliza = new Eliza();

	let comments = [
		{ author: 'eliza', text: eliza.getInitial() }
	];

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			comments = comments.concat({
				author: 'user',
				text
			});

			event.target.value = '';

			const reply = eliza.transform(text);

			setTimeout(() => {
				// @ts-ignore
				comments = comments.concat({
					author: 'eliza',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					comments = comments.filter(comment => !comment.placeholder).concat({
						author: 'eliza',
						text: reply
					});
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
	}
</script>

<div class="chat">
	<div class="scrollable" bind:this={div}>
		{#each comments as comment}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>
	<div class="chat-plate">
		<input on:keydown={handleKeydown} placeholder="Say Hey ...">
		<!-- <button></button> -->
	</div>
</div>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		max-width: 100%;
		background: lightblue;
		padding: 10px;
	}

	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}

	article {
		margin: 0.5em 0;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}

	.eliza span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
	}

	.user span {
		background-color: #0074D9;
		color: white;
		border-radius: 1em 1em 0 1em;
	}
	.chat-plate {
		background: rgb(235, 230, 230);
		padding: 5px;
		border-radius: 50px;

	}
	input {
		padding: 8px;
		border-radius: 50px;
		width: 80%;
		background: none;
		margin-left: 4px;
		border: none;
		outline:none;
		
	}
</style>
