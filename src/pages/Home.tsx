import Navbar from '../components/Navbar';
import HeroWithForm from '../components/HeroWithForm';
import AboutUs from './AboutUs';
import Services from './Services';
import Projects from './Projects';
import FAQ from '../components/FAQ';
import { faqs } from '../data/faq';

function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Anchor para scroll suave do menu Home */}
			<div id="home" style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} aria-hidden="true" />
			<Navbar />
			<HeroWithForm preventBodyOverflow={false} />
			<AboutUs />
			<Services />
			<Projects />
			<FAQ faqs={faqs} />
		</div>
	);
}

export default Home;
