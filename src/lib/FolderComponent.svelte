<script lang="ts">
	import { FileData, FolderData } from './models';
	import FileComponent from '$lib/FileComponent.svelte';
	import FolderComponent from '$lib/FolderComponent.svelte';
	import TestCompoment from './TestCompoment.svelte';

	export let data: FolderData;
</script>

<li>
	📁 <b>/{data.name}/</b>
	<ul>
		<!-- Errors with:
			Type 'FolderData | FileData' is not assignable to type 'FolderData & FileData'.
			Type 'FolderData' is not assignable to type 'FolderData & FileData'.
		-->
		{#each data.children as childData}
			<svelte:component
				this={childData instanceof FolderData
					? FolderComponent
					: FileComponent}
				data={childData}
			/>
		{/each}

		<!-- No issues with normal exports of type (a | b) props -->
		<!-- <TestCompoment data={childData} /> -->

		<!-- This is an OK work around for now -->
		<!-- {#each data.children as childData}
			{#if childData instanceof FolderData}
				<svelte:self data={childData} />
			{:else if childData instanceof FileData}
				<FileComponent data={childData} />
			{/if}
		{/each} -->
	</ul>
</li>
