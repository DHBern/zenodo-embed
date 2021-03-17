<script context="module">
	import clip from 'text-clipper';

	export async function preload(page, session) {
		const res = await this.fetch('https://zenodo.org/api/records/?page=1&size=10&communities=dmwr&sort=mostrecent');
		const allEntries = await res.json();
		let entries = allEntries.hits.hits;
		entries.map(e => {
			e.metadata.description = clip(e.metadata.description, 300, {html: true, maxLines: 3})
			return e
		})
		return { entries }
	}
</script>

<script>
	export let entries;
</script>

<main>
	{#each entries as entry}
		<div class="entry">
			<a href="{entry.links.latest_html}">
				<h5>{entry.metadata.title}</h5>
				<i class="author">{entry.metadata.creators.map(e => e.name).join(', ')}</i>
			</a>
			<!--{@html clip(entry.metadata.description, 300, {html: true, maxLines: 3})}-->
			{@html entry.metadata.description}
		</div>
	{/each}
</main>

<style>
	.entry {
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		border-top: 1px solid #dddddd;
		border-bottom: 1px solid #dddddd;
		line-height: 1.3rem;
	}
	.entry:first-of-type{
		border-top: none;
	}
	a {
		color: inherit;
	}
	a:hover {
		text-decoration: none;
	}
	a:hover h5{
		color: #8298c8;
	}
	h5 {
		font-family: "Source Sans Pro", "helvetica neue", "helvetica", "Arial", "sans-serif";
		color: rgb(68, 68, 68);
		padding-bottom: 0.625rem;
		margin: 0;
		font-weight: 600;
		font-size: 16px;
	}
	.author {
		font-family: "Merriweather", "Georgia", "Times New Roman", serif;
		font-weight: 400;
		color: #616161;
		letter-spacing: -0.5px;
	}
</style>