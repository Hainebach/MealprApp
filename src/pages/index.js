import Link from "next/link";
import Layout from "../../component/Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <h1>Welcome to MealprApp</h1>
      <Link href="/create-menu">Create Your Menu</Link>
    </Layout>
  );
}
