import Link from "next/link";

export default function Post() {
  return (
    <>
      <h1>Hello world from all post</h1>
      <Link href="/form">Form</Link>
      <Link href="/">Home</Link>

    </>
  );
}
