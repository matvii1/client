export function filterTags(tags: Array<string | number>) {
	return tags.filter(tag => Boolean(tag))
}