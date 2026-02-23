import Link from 'next/link'
 
export default function Links({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.url} target={link.target}>{link.title}</Link>
        </li>
      ))}
    </ul>
  )
}