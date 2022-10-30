<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import Eliza from '$lib/Eliza/Eliza.svelte';
	import NameList from '$lib/list/NameList.svelte';
	import Profile from '$lib/profile/Profile.svelte';
	import Search from '$lib/search/Search.svelte';
	import Sort from '$lib/sort/Sort.svelte';
	import Voice from '$lib/voice/Voice.svelte';
	import ChatApp from "$lib/components/chat/ChatApp.svelte";


	let id = 1;

	const setId = (/** @type {{ detail: number; }} */ e) => {
		id = e.detail;
	}
	
	
</script>

<Splitpanes 
class="default-theme" style="height: 100vh">
	<Pane minSize={0} >
		<header class="groups">
		<a href="#">Groups</a>
		<a href="#">Edits</a>
	</header>
	<Search/>
	<div class="contacts">
		<Sort />
		<NameList on:personId={setId} />
	</div>
	</Pane>
	<Pane>
		<Splitpanes class="default-theme" horizontal="{true}">
			<Pane minSize={'0'} maxSize={'45'}>
				<header class="more">
				<a href="">More</a>
				</header>
				<Profile userId={id} />
			</Pane>
			<Pane>
				<Eliza />
			</Pane>
		</Splitpanes>
	</Pane>
</Splitpanes>

<style>
.groups {
	display: flex;
	justify-content: space-between;
}
.more {text-align: right;  }
header {
	background: rgb(199, 107, 3);
	padding: 10px;

}

.contacts {
	display: flex;
	padding: 0 !important;
}

.splitpanes {
	background-color: #f8f8f8;
}

.splitpanes__splitter {
	background-color: #ccc;
	position: relative;
}
.splitpanes__splitter:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	transition: opacity 0.4s;
	background-color: rgba(255, 0, 0, 0.3);
	opacity: 0;
	z-index: 1;
}
.splitpanes__splitter:hover:before {
	opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
	left: -30px;
	right: -30px;
	height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
	top: -30px;
	bottom: -30px;
	width: 100%;
}
</style>
