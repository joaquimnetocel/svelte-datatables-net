<script lang="ts">
	import importedIconBackward from '$lib/icons/IconBackward.svelte';
	import importedIconForward from '$lib/icons/IconForward.svelte';
	import type { Component } from 'svelte';
	import { functionCheckPageNumber } from './functionCheckPageNumber.js';

	export type typePaginationProps = {
		threshold?: number;
		onchange?: (par: number) => void;
		style?: string;
		styleActive?: string;
		styleDisabled?: string;
		styleWrapper?: string;
		class?: string;
		classActive?: string;
		classDisabled?: string;
		classWrapper?: string;
		IconBackward?: Component;
		IconForward?: Component;
		iconSize?: number;
	};

	let {
		total,
		current = $bindable(1),
		threshold = 10,
		onchange,
		styleActive = '',
		styleDisabled,
		styleWrapper,
		classActive,
		classDisabled,
		classWrapper,
		IconBackward = importedIconBackward,
		IconForward = importedIconForward,
		iconSize,
		...rest
	}: { total: number; current?: number } & typePaginationProps = $props();

	const functionClick = (par: number) => {
		if (!functionCheckPageNumber(par, total)) {
			return;
		}
		if (onchange) {
			onchange(par);
		}
		current = par;
	};
</script>

{#if total > 0}
	<div style={`display:flex;${styleWrapper ?? ''}`} class={classWrapper ?? ''}>
		<!-- BACKWARD BUTTON -->
		<button
			onclick={() => functionClick(current - 1)}
			disabled={current === 1}
			style={current === 1
				? `cursor:not-allowed;${styleDisabled ?? ''}`
				: `cursor:pointer;${rest.style ?? ''}`}
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
			class={current === 1 ? (classDisabled ?? '') : (rest.class ?? '')}
		>
			<IconBackward width={iconSize} height={iconSize} />
		</button>
		<!---->
		<!-- PAGE NUMBERS -->
		{#if total <= threshold}
			{#each Array(total)
				.fill(0)
				.map((_, i) => i + 1) as page, i (i)}
				<button
					style={current === page
						? `cursor:default;${styleActive ?? ''}`
						: `cursor:pointer;${rest.style ?? ''}`}
					class={current === page ? (classActive ?? '') : (rest.class ?? '')}
					onclick={() => functionClick(page)}
				>
					{page}
				</button>
			{/each}
		{:else}
			{#each [1, 2] as page, i (i)}
				<button
					style={current === page
						? `cursor:default;${styleActive ?? ''}`
						: `cursor:pointer;${rest.style ?? ''}`}
					class={current === page ? (classActive ?? '') : (rest.class ?? '')}
					onclick={() => functionClick(page)}
				>
					{page}
				</button>
			{/each}
			{#if current > 4}
				...
			{/if}
			{#each [current - 1, current, current + 1] as page, i (i)}
				{#if page > 2 && page < total - 1}
					<button
						style={current === page
							? `cursor:default;${styleActive ?? ''}`
							: `cursor:pointer;${rest.style ?? ''}`}
						class={current === page ? (classActive ?? '') : (rest.class ?? '')}
						onclick={() => functionClick(page)}
					>
						{page}
					</button>
				{/if}
			{/each}
			{#if current < total - 3}
				...
			{/if}
			{#each [total - 1, total] as page, i (i)}
				<button
					style={current === page
						? `cursor:default;${styleActive ?? ''}`
						: `cursor:pointer;${rest.style ?? ''}`}
					class={current === page ? (classActive ?? '') : (rest.class ?? '')}
					onclick={() => functionClick(page)}
				>
					{page}
				</button>
			{/each}
		{/if}

		<!-- BOTÃO PRÓXIMO -->
		<button
			onclick={() => functionClick(current + 1)}
			disabled={current === total}
			style={current === total
				? `cursor:not-allowed;${styleDisabled ?? ''}`
				: `cursor:pointer;${rest.style ?? ''}`}
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
			class={current === total ? (classDisabled ?? '') : (rest.class ?? '')}
		>
			<IconForward width={iconSize} height={iconSize} />
		</button>
	</div>
{/if}
