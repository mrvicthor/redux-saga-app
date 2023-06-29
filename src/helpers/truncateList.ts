export function truncateList(item: any, length = 5) {
  if (item.length <= length) return item;
  return item.slice(0, length) + "...";
}
