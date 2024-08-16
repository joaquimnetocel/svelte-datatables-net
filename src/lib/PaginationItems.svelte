<script lang="ts" generics="Generic">
	import { iconBackward } from '$lib/iconBackward.js';
	import { iconFastBackward } from '$lib/iconFastBackward.js';
	import { iconFastForward } from '$lib/iconFastForward.js';
	import { iconForward } from '$lib/iconForward.js';
	import { getContext } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;

	let stateDatatable = getContext<typeDatatable<typeData>>(symbolContext);
	let derivedNumberOfPages = $derived(
		stateDatatable.numberRowsPerPage === Infinity
			? 1
			: Math.ceil(stateDatatable.arraySearched.length / stateDatatable.numberRowsPerPage),
	);

	let {
		propTag,
		propInnerTag = 'span',
		propPrevious = 'PREVIOUS',
		propNext = 'NEXT',
		propDisabledStyle = '',
		propDisabledClass = '',
		propActiveStyle = '',
		propActiveClass = '',
		propInnerStyle = '',
		propInnerClass = '',
		propShortMode = false,
		propShortModeLimit = 1000,
		...propRest
	}: {
		propTag: 'span' | 'div' | 'li' | 'button' | 'a';
		propInnerTag?: 'span' | 'div' | 'li' | 'button' | 'a';
		propDisabledStyle?: string;
		propDisabledClass?: string;
		propActiveStyle?: string;
		propActiveClass?: string;
		propInnerStyle?: string;
		propInnerClass?: string;
		propPrevious?: string;
		propNext?: string;
		style?: string;
		class?: string;
		propShortMode?: boolean;
		propShortModeLimit?: number;
	} = $props();

	let stateShowInput = $state(false);

	let derivedShortMode = $derived(
		propShortMode === true || derivedNumberOfPages > propShortModeLimit,
	);

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
				stateDatatable.numberActivePage = derivedNumberOfPages;
				return;
			}
			if (parseInt(event.currentTarget.value) > 0) {
				stateDatatable.numberActivePage = parseInt(event.currentTarget.value);
			}
		}
	}
</script>

<!-- FAST BACKWARD -->
{#if derivedShortMode}
	{#if stateDatatable.numberActivePage === 1}
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
				stateDatatable.numberActivePage = 1;
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
{#if stateDatatable.numberActivePage === 1}
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
					{propPrevious}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconBackward}
		{:else}
			{propPrevious}
		{/if}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};cursor:pointer`}
		onclick={() => {
			stateDatatable.numberActivePage = stateDatatable.numberActivePage - 1;
		}}
		class={`${propRest.class ?? ''}`}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconBackward}
				{:else}
					{propPrevious}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconBackward}
		{:else}
			{propPrevious}
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
			value={stateDatatable.numberActivePage}
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
					{stateDatatable.numberActivePage}
				</svelte:element>
			{:else}
				{stateDatatable.numberActivePage}
			{/if}
		</svelte:element>
	{/if}
{:else}
	{#each Array(derivedNumberOfPages) as _, numberCounter}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style ?? ''};${stateDatatable.numberActivePage === numberCounter + 1 ? propActiveStyle : ''};${stateDatatable.numberActivePage === numberCounter + 1 ? 'cursor:default;' : 'cursor:pointer;'}`}
			class={`${propRest.class ?? ''} ${stateDatatable.numberActivePage === numberCounter + 1 ? propActiveClass : ''}`}
			onclick={() => {
				stateDatatable.numberActivePage = numberCounter + 1;
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
{#if stateDatatable.numberActivePage === derivedNumberOfPages}
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
					{propNext}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconForward}
		{:else}
			{propNext}
		{/if}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style ?? ''};cursor:pointer`}
		class={`${propRest.class ?? ''}`}
		onclick={() => {
			stateDatatable.numberActivePage = stateDatatable.numberActivePage + 1;
		}}
	>
		{#if propInnerTag}
			<svelte:element this={propInnerTag} style={propInnerStyle} class={propInnerClass}>
				{#if derivedShortMode}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html iconForward}
				{:else}
					{propNext}
				{/if}
			</svelte:element>
		{:else if derivedShortMode}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html iconForward}
		{:else}
			{propNext}
		{/if}
	</svelte:element>
{/if}
<!---->
<!-- FAST FORWARD -->
{#if derivedShortMode}
	{#if stateDatatable.numberActivePage === derivedNumberOfPages}
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
				stateDatatable.numberActivePage = derivedNumberOfPages;
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
