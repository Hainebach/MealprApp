import Link from "next/link";
import Layout from "../../component/Layout/Layout";
import styles from "@/styles/Home.module.scss";
export default function Home() {
  return (
    <Layout>
      <div className="container mt-5">
        <h3 className="display-5 text-center mb-4">Welcome to MealprApp</h3>
        <h1 className="lead text-center">
          Simplify Your Eating, Amplify Your Efficiency.
        </h1>
        <div className="text-center mt-3 mb-5">
          <Link className="btn btn-primary btn-lg" href="/create-menu">
            Create Your Menu
          </Link>
        </div>
        <p className="lead text-center">
          At MealprApp, we understand how busy life can be. <br />
          <br />
          We take the stress out of mealtime by providing personalized meal
          plans <br />
          tailored to your dietary preferences and hectic schedule.
          <br /> Whether you&apos;re aiming to maintain a specific diet, manage
          allergies
          <br /> or just simply need meal ideas on the spot -- we&apos;ve got
          you covered!
        </p>
        <div className="text-center">
          <strong>Effortless Planning, Delicious Efficiency:</strong>
          <ul className="list-unstyled ">
            <li>
              <strong>Personalized Menus:</strong> Enjoy custom meal plans that
              cater to your individual taste and lifestyle.
            </li>
            <li>
              <strong>Smart Scheduling:</strong> Maximize your time with our
              optimized meal schedules.
            </li>
            <li>
              <strong>Approachable Recipes:</strong> Each recipe is designed to
              be simple and quick, supporting your busy life.
            </li>
            <li>
              <strong>Streamlined Grocery Shopping:</strong> Convert your meal
              plan into a shopping list with one click.
            </li>
          </ul>
        </div>
        <p className="text-center">
          Join MealprApp today and reclaim your time without sacrificing
          delicious, nourishing meals. <br />
          Embrace a simpler, tastier week with just a few clicks!
        </p>
      </div>
    </Layout>
  );
}
