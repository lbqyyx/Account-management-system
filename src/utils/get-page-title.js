import defaultSettings from '@/settings'

const title = defaultSettings.title || '账号管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
