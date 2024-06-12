import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Welcome to YummyRecipes 😋 </h1>
                <h2>Your one-stop destination for delicious recipes</h2>
            </div>
            <div className="home-content" style={{ height: "50rem" }}>
                <div className="featured-recipe">
                    <h2>Featured Recipes!</h2>
                    <p>Discover our recipe of the day and start cooking something amazing!</p><br>
                    </br>
                    <h2><em>Coming soon...</em></h2>
                </div>
                <div className="home-recipes">
                    <div className="recipe-card">
                        <h3>Mashed Potato 🥔 </h3>
                        <p>Declicious and Easy Recipe with just Potatos</p>
                    </div>
                    <div className="recipe-card">
                        <h3>Mug Cakes ☕️ </h3>
                        <p>Just with your favorite biscuits make exciting mug cakes!</p>
                    </div>
                    <div className="recipe-card">
                        <h3>Chill oil Ramen 🍜 </h3>
                        <p>Craving for chill oil ramen, here is the easiest way to make it</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
