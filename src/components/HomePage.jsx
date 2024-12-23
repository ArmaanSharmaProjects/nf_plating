import { Navigation } from './Navigation';
import { InfoCard } from './InfoCard';

const HomePage = () => {
  const infoCards = [
    {
      title: 'OUR MISSION',
      content: "Improving youth's understanding of nutrition and empowering them to use it to enhance quality of life.",
      listItems: [
        'Breaking past societal and cultural misconceptions around nutrition',
        'Finding ways nutrition can be affordable and fun',
        'Making nutritional research approachable and applicable'
      ]
    },
    {
      title: 'OUR INITIATIVES',
      content: "N&F knows that nutrition can be confusing for people in various ways and our goal is to transform that confusion into clarity about how one can benefit from nutritional literacy.\n\nWe blend research-backed data, hands-on activities, and student feedback into our workshops & events. Our programs are run for the elementary to college level by local chapters or institution requests year-round in-person and remotely.",
      hasButton: true
    },
    {
      title: 'OUR IMPACT',
      content: "All of our projects are research driven. We do not just use facts to drive our teachings; we use anonymous participant feedback to understand where we can enhance utility & student experience.",
      hasButton: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8">
          Improving <span className="text-secondary">Focus</span> through food.
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nourish and Flourish is a youth-led nonprofit organization integrating nutritional science with engagement to improve youth well-being.
        </p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Some of our supporters:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="/civics.png" 
                alt="CIVICS logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="/bagel.png" 
                alt="Highway Bagels logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;