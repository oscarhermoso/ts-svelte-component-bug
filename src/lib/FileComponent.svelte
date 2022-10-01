<script lang="ts">
	import type { FileData } from './models';

	export let data: FileData;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<li>📄 <b>{data.name}</b> - <a href="#">{data.fileUrl}</a></li>
