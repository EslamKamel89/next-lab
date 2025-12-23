import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link href="/meals">Meal</Link>
        </li>
        <li>
          <Link href="/meals/share">Share</Link>
        </li>
        <li>
          <Link href="/meals/community">Community</Link>
        </li>
        <li>
          <Link href="/meals/burger">burger</Link>
        </li>
      </ul>
    </div>
  );
}
