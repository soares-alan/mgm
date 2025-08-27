import Navbar from '../components/Navbar';
import HeroWithForm from '../components/HeroWithForm';
import AboutUs from './AboutUs';
import Services from './Services';

function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<HeroWithForm preventBodyOverflow={false} />
			<AboutUs />
			<Services />
		</div>
	);
}

export default Home;
