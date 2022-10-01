<script lang="ts">
	import FolderComponent from '$lib/FolderComponent.svelte';
	import { FolderData, FileData } from '$lib/models';

	const exampleDirectory = new FolderData('Documents', [
		new FolderData('Pictures', []),
		new FolderData('Schoolwork', [
			new FolderData('Maths', [
				new FileData('Trigonometry', './trigonometry.tex'),
				new FileData('Statistics', './statistics.xls')
			]),
			new FolderData('English', [new FileData('Essay', './essay.doc')]),
			new FolderData('Chemisty', [])
		]),
		new FolderData('Videos', [])
	]);
</script>

<ul>
	<FolderComponent data={exampleDirectory} />
</ul>
