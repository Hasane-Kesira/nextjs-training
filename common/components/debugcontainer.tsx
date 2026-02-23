export default function DebugContainer(arg?: any) {
  const now = new Date()
  const debugSting = DebugString(arg)
  return (
    <span>
      {now.getFullYear()}{"\u00a0"}{debugSting}
    </span>
  )
}

export function DebugString(arg?: any) {
  if (arg === undefined) {
    return 'undefined'
  } else if (arg === null) {
    return 'null'
  } else if (!Number(arg) && Object.keys(arg).length === 0) {
    return 'EmptyObject'
  } else {
    return String(arg)
  }
}