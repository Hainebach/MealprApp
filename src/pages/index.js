import Link from "next/link";
import Layout from "../../component/Layout/Layout";
import styles from "@/styles/Home.module.scss";
export default function Home() {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="display-4 text-center mb-4">Welcome to MealPrep</h1>
        <p className="lead text-center">
          Simplify Your Eating, Amplify Your Efficiency.
        </p>
        <div className="text-center mt-3 mb-5">
          <Link className="btn btn-primary btn-lg" href="/create-menu">
            Create Your Menu
          </Link>
        </div>
        <p className="text-center">
          At MealPrep, we understand how busy life can get. That's why we’re
          here to take the stress out of mealtime by providing personalized meal
          plans tailored to your dietary preferences and hectic schedule.
          Whether you’re aiming to maintain a specific diet, manage allergies,
          or just need quick and nutritious meals, we've got you covered.
        </p>
        <div className="text-center">
          Effortless Planning, Delicious Efficiency:
          <ul className="list-unstyled">
            <li>
              <strong>Personalized Menus:</strong> Enjoy custom meal plans that
              cater to your taste and lifestyle.
            </li>
            <li>
              <strong>Smart Scheduling:</strong> Maximize your time with our
              optimized meal schedules.
            </li>
            <li>
              <strong>Convenience at Your Fingertips:</strong> Each recipe is
              designed to be quick and easy, supporting your busy life.
            </li>
            <li>
              <strong>Streamlined Grocery Shopping:</strong> Convert your meal
              plans into a shopping list with one click.
            </li>
          </ul>
        </div>
        <p className="text-center">
          Join MealPrep today and reclaim your time without sacrificing
          delicious, nourishing meals. Embrace a simpler, tastier week with just
          a few clicks!
        </p>
      </div>
    </Layout>
  );
}
