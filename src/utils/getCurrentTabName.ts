enum TabName {
  New = 'new',
  Popular = 'popular',
}
export function getCurrentTabName(tab: number) {
  switch (tab) {
    case 0:
      return TabName.New

    case 1:
      return TabName.Popular

    default:
      break
  }
}
