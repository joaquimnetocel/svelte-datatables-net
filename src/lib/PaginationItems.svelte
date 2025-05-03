<script lang="ts" generics="Generic">
	import { iconBackward } from '$lib/iconBackward.js';
	import { iconFastBackward } from '$lib/iconFastBackward.js';
	import { iconFastForward } from '$lib/iconFastForward.js';
	import { iconForward } from '$lib/iconForward.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		propTag,
		propInnerTag = 'span',
		previous = 'PREVIOUS',
		next = 'NEXT',
		propDisabledStyle = '',
		propDisabledClass = '',
		propActiveStyle = '',
		propActiveClass = '',
		propInnerStyle = '',
		propInnerClass = '',
		shortMode = false,
		shortModeLimit = 1000,
		...propRest
	}: {
		data: typeDatatable<typeGeneric>;
		propTag: 'span' | 'div' | 'li' | 'button' | 'a';
		propInnerTag?: 'span' | 'div' | 'li' | 'button' | 'a';
		propDisabledStyle?: string;
		propDisabledClass?: string;
		propActiveStyle?: string;
		propActiveClass?: string;
		propInnerStyle?: string;
		propInnerClass?: string;
		previous?: string;
		next?: string;
		style?: string;
		class?: string;
		shortMode?: boolean;
		shortModeLimit?: number;
	} = $props();

	let stateShowInput = $state(false);

	let derivedNumberOfPages = $derived(
		data.rowsPerPage === Infinity ? 1 : Math.ceil(data.searched.length / data.rowsPerPage),
	);
	let derivedShortMode = $derived(shortMode === true || derivedNumberOfPages > shortModeLimit);

	function functionOnKeyDown(e: { keyCode: number }) {
		switch (e.keyCode) {
			case 13:
				stateShowInput = false;
				break;
		}
	}

	function functionOnInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]*/g, '');
		if (event.currentTarget.value !== '' && parseInt(event.currentTarget.value)) {
			if (parseInt(event.currentTarget.value) > derivedNumberOfPages) {
				data.activePage = derivedNumberOfPages;
				return;
			}
			if (parseInt(event.currentTarget.value) > 0) {
				data.activePage = parseInt(event.currentTarget.value);
			}
		}
	}
</script>

<!-- FAST BACKWARD -->
{#if derivedShortMode}
	{#if data.activePage === 1}
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};${propDisabledStyle};cursor:not-allowed;`}
			class={`${propRest.class ?? ''} ${propDisabledClass}`}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconFastBackward}
				</svelte:element>
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html iconFastBackward}
			{/if}
		</svelte:element>
	{:else}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};cursor:pointer`}
			onclick={() => {
				data.activePage = 1;
			}}
			class={`${propRest.class ?? ''}`}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconBackward}
				</svelte:element>
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html iconBackward}
			{/if}
		</svelte:element>
	{/if}
{/if}
<!---->
<!-- PREVIOUS -->
{#if data.activePage === 1}
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};${propDisabledStyle};cursor:not-allowed;`}
		class={`${propRest.class ?? ''} ${propDisabledClass}`}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconBackward}
				{:else}
					{previous}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconBackward}
		{:else}
			{previous}
		{/if}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};cursor:pointer`}
		onclick={() => {
			data.activePage = data.activePage - 1;
		}}
		class={`${propRest.class ?? ''}`}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconBackward}
				{:else}
					{previous}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconBackward}
		{:else}
			{previous}
		{/if}
	</svelte:element>
{/if}
<!---->
{#if derivedShortMode}
	{#if stateShowInput}
		<input
			class={`${propRest.class ?? ''} ${propActiveClass}`}
			style={`${propRest.style ?? ''};${propActiveStyle};${'width:40px;'}`}
			size="1"
			type="number"
			min="1"
			max={derivedNumberOfPages}
			step="1"
			value={data.activePage}
			onkeydown={functionOnKeyDown}
			oninput={functionOnInput}
			onfocusout={() => {
				stateShowInput = false;
			}}
		/>
	{:else}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};${propActiveStyle};${'cursor:default;'}`}
			class={`${propRest.class ?? ''} ${propActiveClass}`}
			onclick={() => (stateShowInput = true)}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					{data.activePage}
				</svelte:element>
			{:else}
				{data.activePage}
			{/if}
		</svelte:element>
	{/if}
{:else}
	{#each Array(derivedNumberOfPages) as _, numberCounter}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};${data.activePage === numberCounter + 1 ? propActiveStyle : ''};${data.activePage === numberCounter + 1 ? 'cursor:default;' : 'cursor:pointer;'}`}
			class={`${propRest.class ?? ''} ${data.activePage === numberCounter + 1 ? propActiveClass : ''}`}
			onclick={() => {
				data.activePage = numberCounter + 1;
			}}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					{numberCounter + 1}
				</svelte:element>
			{:else}
				{numberCounter + 1}
			{/if}
		</svelte:element>
	{/each}
{/if}
<!-- NEXT -->
{#if data.activePage === derivedNumberOfPages}
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};${propDisabledStyle};cursor:not-allowed;`}
		class={`${propRest.class ?? ''} ${propDisabledClass}`}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconForward}
				{:else}
					{next}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconForward}
		{:else}
			{next}
		{/if}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};cursor:pointer`}
		class={`${propRest.class ?? ''}`}
		onclick={() => {
			data.activePage = data.activePage + 1;
		}}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconForward}
				{:else}
					{next}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconForward}
		{:else}
			{next}
		{/if}
	</svelte:element>
{/if}
<!---->
<!-- FAST FORWARD -->
{#if derivedShortMode}
	{#if data.activePage === derivedNumberOfPages}
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};${propDisabledStyle};cursor:not-allowed;`}
			class={`${propRest.class ?? ''} ${propDisabledClass}`}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconFastForward}
				</svelte:element>
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html iconFastForward}
			{/if}
		</svelte:element>
	{:else}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};cursor:pointer`}
			class={`${propRest.class ?? ''}`}
			onclick={() => {
				data.activePage = derivedNumberOfPages;
			}}
		>
			{#if propInnerTag}
				<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconFastForward}
				</svelte:element>
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html iconFastForward}
			{/if}
		</svelte:element>
	{/if}
{/if}
<!---->
