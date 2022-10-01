<script lang="ts">
	import type { FileData, FolderData } from './models';

	export let data: FileData | FolderData;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<li>📄 <b>{data.name}</b> - <a href="#">Test</a></li>
